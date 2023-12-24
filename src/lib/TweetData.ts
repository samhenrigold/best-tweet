export interface User {
	name: string;
	user_id: number;
	screen_name: string;
	legacy_verified: boolean;
	profile_image_url_https: string;
}

export interface TweetData {
	lang: string;
	users: User;
	user_id: number;
	tweet_id: number;
	full_text: string;
	created_at: string;
	tweet_media: Media[];
	tweet_id_str: string;
	retweet_count: number;
	favorite_count: number;
	in_reply_to_status_id: number | null;
}

export interface Media {
	type: string;
	width: number;
	height: number;
	alt_text: string;
	media_id: number;
	tweet_id: number;
	media_url_https: string;
}
