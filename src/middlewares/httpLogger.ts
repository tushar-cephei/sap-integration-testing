import morgan, { StreamOptions } from 'morgan';
import logger from '../utils/logger';

const stream: StreamOptions = {
  write: (message) => {
    console.log('====================================');
    logger.info(message);
  },
};

// Build the morgan middleware
const morganMiddleware = morgan('dev', { stream: stream });

export default morganMiddleware;
