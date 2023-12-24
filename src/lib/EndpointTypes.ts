import type { TweetData } from "./TweetData";

export interface Matchup {
    matchup_id: string;
    tweet_1: TweetData;
    tweet_2: TweetData;
}

export interface VoteRequestBody {
    matchup_id: string;
    selected_tweet_id: string;
}

export interface VoteResponse {
    vote_id: number;
    selected_tweet_id_str: string;
    user_ip: string;
    voted_at: string;
    matchup_id: string;
}