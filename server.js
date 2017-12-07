//Install express server
const express = require('express');
const app = express();

app.use('/bootstrap-css', express.static(__dirname + '/node_modules/bootstrap/dist/css/'));

// Serve only the static files form the dist directory
app.use(express.static(__dirname + '/dist'));

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);