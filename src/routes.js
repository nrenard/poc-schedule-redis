import { Router } from 'express';

import test from './jobs/test';

const routes = Router();

routes.post('/todo', (req, res) => {
  const { date } = req.body;

  const milliseconds = date - new Date().valueOf();

  test.create('email', { value: 12345678 })
  .delay(milliseconds)
  .priority('high')
  .save();

  return res.json({ message: true });
});

export default routes;