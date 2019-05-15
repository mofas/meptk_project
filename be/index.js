const express = require('express');
const http = require('http');
const printer = require('node-native-printer');
const dns = require('dns');

const PORT = 4003;

const main = async () => {
  const app = express();

  const server = http.createServer(app);

  app.get('/', (req, rsp) => {
    rsp.send(printer.listPrinters());
  });

  app.get('/current', (req, rsp) => {
    rsp.send('Current Set Printer is :' + printer.getCurrentPrinter());
  });

  app.get('/set_current/:target', (req, rsp) => {
    printer.setPrinter(req.params.target);
    rsp.send('Current Set Printer is :' + printer.getCurrentPrinter());
  });

  app.get('/print/printA', (req, rsp) => {
    console.log('get printA');
    printer.print('./demo1.pdf');
    rsp.send('get /print/printA');
  });

  app.get('/print/printB', (req, rsp) => {
    console.log('get printB');
    printer.print('./demo2.pdf', null, '');
    rsp.send('get /print/printB');
  });

  const ADDR = await new Promise(cb =>
    dns.lookup(require('os').hostname(), function(_, addr, _) {
      return cb(addr);
    })
  );

  console.log(`Server listen at:  ${ADDR}:${PORT}`);
  server.listen(PORT);
};

main();
