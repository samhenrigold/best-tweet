import express from 'express';
import { createClient } from '@supabase/supabase-js'
import type { Database } from './database';

const app = express();
const port = 8080;

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

app.get('/api/get-matchups', (req: any, res: any) => {
  res.send(process.env);
});