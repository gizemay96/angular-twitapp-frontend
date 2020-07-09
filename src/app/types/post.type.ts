import { User } from './user.type';
  
  export type Post = {
      id:number,
      title:string,
      text:string,
      user:User,
        created_at?:string,
        updated_at?:string
    }