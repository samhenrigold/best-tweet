import type { Context } from "@netlify/functions";

const handler = async (req: Request, context: Context) => {
  const body = await req.json();

  console.log(JSON.stringify(body, null, 2));

  return new Response(null);
};

export default handler;