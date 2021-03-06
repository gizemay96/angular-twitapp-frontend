import { ObjectUnsubscribedError } from 'rxjs';
import { Post } from './post.type';

export type User = {
  blocked: boolean | null,
  confirmed: boolean,
  created_at?: string, //'2020-07-05T09:03:54.115Z';
  email: string, //'gizem.ay1996+3@gmail.com';
  id: number, //3;
  posts:Post[],
  provider: string //'local';
  role: object,
  updated_at?: string, //'2020-07-05T09:03:54.129Z';
  username: string, //'Secrettum';
  profileImgURL?:string,
  profileImg:any
};
