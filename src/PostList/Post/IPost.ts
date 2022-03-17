export interface IPost {
  author: string;
  title: string;
  points: number;
  num_comments: number;
  created_at: string | undefined;
  url: string;
}
