const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');

const app = express();
const server = http.createServer(app);

const port = process.env.PORT || 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(cors());


// Routes
const userRoutes = require('./routes/user.routes.js');
app.use('/api', userRoutes);

// Initialize web sockets
const initializeChangeStream = require('./services/websocket.service.js');
initializeChangeStream(server);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

server.listen(3001, () => {
    console.log('WebSocket server is running on port 3001');
  });