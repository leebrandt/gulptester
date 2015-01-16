var express = require('express');



var app = express();

app.use()

// Start the app by listening on <port>
app.listen(process.env.NODE_PORT || 3000, function(){
    // Logging initialization
    console.log('The magic is happening at localhost on port ' + app.port);
});

// Expose app
exports = module.exports = app;