import type { Context } from "@netlify/functions";

const handler = async (req: Request, context: Context) => {
  const body = await req.json();

  console.log(JSON.stringify({ body, req, context }));

  return new Response(JSON.stringify({ body, req, context }));
};

export default handler;