const express = require('express');
const http = require('http');
const printer = require('node-native-printer');

console.log('All printers installed', printer.listPrinters());
printer.setPrinter('HP_Color_LaserJet_M452dn__72112D__2');
// console.log('The current printer', printer.getCurrentPrinter());

// printer.print('./demo.pdf');

const PORT = 4003;
const main = async () => {
  const app = express();

  const server = http.createServer(app);

  app.get('/', (req, rsp) => {
    console.log('You are IN: /');
    rsp.send('Demo 1');
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
