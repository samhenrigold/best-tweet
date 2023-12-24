import { Config, Context, HandlerEvent } from "@netlify/functions";
import { createClient } from '@supabase/supabase-js'
import { Database } from '../types/database';

interface VoteData {
    matchup_id: string;
    winning_tweet_id: number;
}

export default async (req: Request, context: Context, event: HandlerEvent) => {
    return new Response(JSON.stringify({req, context, event}), {
        headers: { "content-type": "text/json" },
    });

    // Get the POST body data from the request, it should be in VoteData format.
    const body = await req.json() as any;

    console.log(body)

    // Validate that it's in the correct format. If not, throw an error with a 400 status code.
    if (!body.matchup_id || !body.winning_tweet_id) {
        throw new Error("Invalid request body");
    }
    
    const supabase = createClient<Database>(process.env.SUPABASE_URL, process.env.SUPABASE_ANON_KEY);
    
    // Validate that the matchup exists.
    const { data: matchup, error: matchupError } = await supabase
        .from('matchups')
        .select('matchup_id, tweet_id1, tweet_id2')
        .eq('matchup_id', body.matchup_id)
        .single();

    // If not, throw an error with a 404 status code.
    if (matchupError || !matchup ) {
        throw new Error(`Error finding matchup: ${matchupError?.message}`);
    }

    // Validate that the winning tweet is one of the two in the matchup. If not, throw an error with a 400 status code.
    const { error } = await supabase
        .from('votes')
        .insert([{ 
            matchup_id: body.matchup_id,
            selected_tweet_id: body.winning_tweet_id
        }])

    return new Response(JSON.stringify({}), {
        headers: { "content-type": "text/json" },
    });
};