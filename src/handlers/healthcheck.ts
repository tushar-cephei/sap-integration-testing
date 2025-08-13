import Logger from 'src/utils/logger';
import express from 'express';

export const healthCheck = async (_req: express.Request, res: express.Response) => {
  Logger.info('Server is starting');
  res.send('Server is working');
};
