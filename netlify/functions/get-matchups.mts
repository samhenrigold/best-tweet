import { Config, Context } from "@netlify/functions";
import { createClient } from '@supabase/supabase-js'
import { Database } from '../types/database';

export default async (req: Request, context: Context) => {
	const supabase = createClient<Database>(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);

	let { data: matchup, error: matchupError } = await supabase
		.from('matchups')
		.insert({})
		.select(`
        matchup_id,
        tweet_1:tweet_id1(*, tweet_media(*), in_reply_to_status_id(*, tweet_media(*))),
        tweet_2:tweet_id2(*, tweet_media(*), in_reply_to_status_id(*, tweet_media(*)))
    `)

	if (matchupError || !matchup) throw new Error(`Error creating matchup: ${matchupError?.message}`);

	return new Response(JSON.stringify(matchup), {
		headers: { "content-type": "text/json" },
	});
};