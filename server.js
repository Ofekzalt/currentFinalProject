// server.js

require('dotenv').config();
const app = require('./app');

// Start the server
const PORT = process.env.PORT || 3030;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
