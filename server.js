const app = require('./app');
const config = require('./config/config.js');

const PORT = config.port;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
