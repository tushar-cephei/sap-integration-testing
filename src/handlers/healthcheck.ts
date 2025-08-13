import express from 'express';

export const healthCheck = async (_req: express.Request, res: express.Response) => {
  res.send('Server is working');
};
