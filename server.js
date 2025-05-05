const http = require('http');
const fs = require('fs');
const { Client } = require('pg');
const { URL, URLSearchParams } = require('url');

const client = new Client({
  user: 'postgres',
  host: 'localhost',
  database: 'workspaces',
  password: '7654',
  port: 5432
});

client.connect()
  .then(() => console.log('Connected to Postgres!'))
  .catch(error => console.log('Failed to connect to Postgres!: ', error.routine))

const server = http.createServer((req, res) => {

  let filePath = '';
  
  // Login routes
  if (req.method === 'GET' && req.url === '/') {
    filePath = './views/login.html'
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log('Error reading: ', filePath);
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/html');
        res.end('Error loading file!')
      } else {
        console.log('~~~ NEW PAGE ~~~')
        console.log('Sending: ', filePath)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data)
      }
    });
  } 
  else if (req.method === 'GET' && req.url === '/styles/login') {
    filePath = './styles/login.css'
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log('Error reading: ', filePath);
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/html');
        res.end('Error loading file!')
      } else {
        console.log('Sending: ', filePath)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        res.end(data)
      }
    });
  }
  else if (req.method === 'GET' && req.url === '/styles/login') {
    filePath = './scripts/login.js'
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log('Error reading: ', filePath);
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/html');
        res.end('Error loading file!')
      } else {
        console.log('Sending: ', filePath)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/javascript');
        res.end(data)
      }
    });
  }

  // Layout routes
  else if (req.method === 'GET' && req.url === '/styles/layout') {
    filePath = './styles/layout.css'
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log('Error reading: ', filePath);
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/html');
        res.end('Error loading file!')
      } else {
        console.log('Sending: ', filePath)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/javascript');
        res.end(data)
      }
    });
  }

  else if (req.method === 'GET' && req.url === '/scripts/layout') {
    filePath = './scripts/layout.js'
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log('Error reading: ', filePath);
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/html');
        res.end('Error loading file!')
      } else {
        console.log('Sending: ', filePath)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data)
      }
    });
  }

  // Home routes
  else if (req.method === 'GET' && req.url === '/home') {
    filePath = './views/home.html'
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log('Error reading: ', filePath);
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/html');
        res.end('Error loading HTML!')
      } else {
        console.log('~~~ NEW PAGE ~~~')
        console.log('Sending: ', filePath)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        res.end(data)
      }
    });
  } 

  else if (req.method === 'GET' && req.url === '/styles/home') {
    filePath = './styles/home.css'
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log('Error reading: ', filePath);
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/html');
        res.end('Error loading file!')
      } else {
        console.log('Sending: ', filePath)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/css');
        res.end(data)
      }
    });
  }

  else if (req.method === 'GET' && req.url === '/scripts/home') {
    filePath = './scripts/home.js'
    fs.readFile(filePath, (err, data) => {
      if (err) {
        console.log('Error reading: ', filePath);
        res.statusCode = 400;
        res.setHeader('Content-Type', 'text/html');
        res.end('Error loading file!')
      } else {
        console.log('Sending: ', filePath)
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/javascript');
        res.end(data)
      }
    });
  }

  // 404 fallback
  else {
    res.statusCode = 404;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Page not found!');
  }

});

// Start server
server.listen(3000, 'localhost', () => {
  console.log('~~~ Listening on http://localhost:3000/ ~~~');
});
