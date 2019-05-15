const express = require('express');
const http = require('http');
const printer = require('node-native-printer');

// console.log('All printers installed', printer.listPrinters());

// console.log('The current printer', printer.getCurrentPrinter());
// printer.print('./demo.pdf');

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

  app.get('/print/demo1', (req, rsp) => {
    printer.print('./demo1.pdf');
    rsp.send('');
  });

  app.get('/print/demo2', (req, rsp) => {
    printer.print('./demo2.pdf');
    rsp.send('');
  });

  console.log('Server listen at: ' + PORT);
  server.listen(PORT);
};

main();
