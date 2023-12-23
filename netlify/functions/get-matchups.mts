import { Config, Context } from "@netlify/functions";
import type { Handler, HandlerEvent, HandlerContext } from "@netlify/functions";
import { createClient } from '@supabase/supabase-js'
import { Database } from '../types/database';

export default async (req: Request, context: Context) => {
  // const supabase = createClient<Database>(env.SUPABASE_URL, env.SUPABASE_ANON_KEY);
  const value = process.env.SUPABASE_URL;

  return new Response(`Value of MY_IMPORTANT_VARIABLE is ${value}.`);
};