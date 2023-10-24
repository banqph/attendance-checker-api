const WebSocket = require('ws');
const usb = require('usb');

module.exports = function (server) {
  const wss = new WebSocket.Server({ server });

  wss.on('connection', (ws) => {
    console.log('Client connected');
    var scannedData = '';
    const VID = 0x0483;
    const PID = 0x5740;

    const devices = usb.getDeviceList();
    const scanner = devices.find(device => device.deviceDescriptor.idVendor === VID && device.deviceDescriptor.idProduct === PID);

    if (scanner) {
      scanner.open();
      if (scanner.interfaces) {
        const endpoint = scanner.interfaces[0].endpoints[0];

        endpoint.on("data", (data) => {
            scannedData = data.toString('utf8');

            setInterval(() => {
                ws.send('Scanned data: ' + scannedData);
            }, 1000);
            
            ws.on('close', () => {
                console.log('Client disconnected');
            });
        });
      }
      else {
        console.log("NO INTERFACES FOUND")
      }
    } else {
        console.log("NO SCANNER FOUND")
    }
  });
};