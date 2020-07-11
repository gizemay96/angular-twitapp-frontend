import { User } from './user.type';
import { Post } from './post.type';

export type Comment = {
    id:number,
    title:string,
    text:string,
    user:User,
    post:Post,
    created_at?:string,
    updated_at?:string,
    likeCount:number,
    retweetCount:number
}