// index.js (or funktion-widget.js, if you prefer)
const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Serve static files from 'public' directory
app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});