import app from './app.js';
import { init } from './socket.js'
import { initDB } from './db/mongodb.js';
import config from './config.js';
import { loggerDev, loggerProd } from './config/logger.config.js';


//console.log('config', config);

await initDB();
const PORT = config.port;

const httpServer = app.listen(PORT, () => {
  const logger = getLogger();
  logger.info(`Server running on http://localhost:${PORT} 🚀`);
});

init(httpServer);

function getLogger() {
  return config.env === 'dev' ? loggerDev : loggerProd;
}