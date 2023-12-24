export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      matchups: {
        Row: {
          created_at: string | null
          matchup_id: string
          requested_from: unknown | null
          tweet_id1: number | null
          tweet_id2: number | null
        }
        Insert: {
          created_at?: string | null
          matchup_id?: string
          requested_from?: unknown | null
          tweet_id1?: number | null
          tweet_id2?: number | null
        }
        Update: {
          created_at?: string | null
          matchup_id?: string
          requested_from?: unknown | null
          tweet_id1?: number | null
          tweet_id2?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "matchups_tweet_id1_fkey"
            columns: ["tweet_id1"]
            isOneToOne: false
            referencedRelation: "tweets"
            referencedColumns: ["tweet_id"]
          },
          {
            foreignKeyName: "matchups_tweet_id2_fkey"
            columns: ["tweet_id2"]
            isOneToOne: false
            referencedRelation: "tweets"
            referencedColumns: ["tweet_id"]
          }
        ]
      }
      tweet_media: {
        Row: {
          alt_text: string | null
          height: number | null
          media_id: number
          media_url_https: string | null
          tweet_id: number | null
          type: string | null
          width: number | null
        }
        Insert: {
          alt_text?: string | null
          height?: number | null
          media_id: number
          media_url_https?: string | null
          tweet_id?: number | null
          type?: string | null
          width?: number | null
        }
        Update: {
          alt_text?: string | null
          height?: number | null
          media_id?: number
          media_url_https?: string | null
          tweet_id?: number | null
          type?: string | null
          width?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tweet_media_tweet_id_fkey"
            columns: ["tweet_id"]
            isOneToOne: false
            referencedRelation: "tweets"
            referencedColumns: ["tweet_id"]
          }
        ]
      }
      tweets: {
        Row: {
          created_at: string | null
          favorite_count: number | null
          full_text: string | null
          in_reply_to_status_id: number | null
          lang: string | null
          retweet_count: number | null
          tweet_id: number
          user_id: number | null
        }
        Insert: {
          created_at?: string | null
          favorite_count?: number | null
          full_text?: string | null
          in_reply_to_status_id?: number | null
          lang?: string | null
          retweet_count?: number | null
          tweet_id: number
          user_id?: number | null
        }
        Update: {
          created_at?: string | null
          favorite_count?: number | null
          full_text?: string | null
          in_reply_to_status_id?: number | null
          lang?: string | null
          retweet_count?: number | null
          tweet_id?: number
          user_id?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "tweets_in_reply_to_status_id_fkey"
            columns: ["in_reply_to_status_id"]
            isOneToOne: false
            referencedRelation: "tweets"
            referencedColumns: ["tweet_id"]
          },
          {
            foreignKeyName: "tweets_user_id_fkey"
            columns: ["user_id"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["user_id"]
          }
        ]
      }
      users: {
        Row: {
          legacy_verified: boolean
          name: string | null
          profile_image_url_https: string | null
          screen_name: string | null
          user_id: number
        }
        Insert: {
          legacy_verified?: boolean
          name?: string | null
          profile_image_url_https?: string | null
          screen_name?: string | null
          user_id: number
        }
        Update: {
          legacy_verified?: boolean
          name?: string | null
          profile_image_url_https?: string | null
          screen_name?: string | null
          user_id?: number
        }
        Relationships: []
      }
      votes: {
        Row: {
          matchup_id: string
          selected_tweet_id: number
          user_ip: unknown | null
          vote_id: number
          voted_at: string
        }
        Insert: {
          matchup_id: string
          selected_tweet_id: number
          user_ip?: unknown | null
          vote_id?: number
          voted_at?: string
        }
        Update: {
          matchup_id?: string
          selected_tweet_id?: number
          user_ip?: unknown | null
          vote_id?: number
          voted_at?: string
        }
        Relationships: [
          {
            foreignKeyName: "votes_matchup_id_fkey"
            columns: ["matchup_id"]
            isOneToOne: true
            referencedRelation: "matchups"
            referencedColumns: ["matchup_id"]
          },
          {
            foreignKeyName: "votes_selected_tweet_id_fkey"
            columns: ["selected_tweet_id"]
            isOneToOne: false
            referencedRelation: "tweets"
            referencedColumns: ["tweet_id"]
          }
        ]
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      media_type: "photo" | "video"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
