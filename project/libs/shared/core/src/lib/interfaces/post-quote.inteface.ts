import { Post } from './post.interface';

export interface PostQuote extends Post {
  text: string;
  authorQuote: string;
}
