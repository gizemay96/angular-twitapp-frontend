// export type Post = {
//     id:number,
//     title:string,
//     text:string
//   };



  export type Post = {
      id:number,
      title:string,//"First Post",
      text:string, //"This is my first post....Lorem falan filan",
      user:{
          id:number,
          username:string, //"gizemay96",
          email:string, //"gizem.ay1996+1@gmail.com",
          provider: string, //"local",
          confirmed:boolean,
          blocked:any,
          role:number,
          created_at:string, //"2020-07-05T09:01:04.175Z",
          updated_at:string, //"2020-07-08T11:53:00.835Z"
        },
        created_at:string, //"2020-07-08T11:56:12.228Z",
        updated_at:string //"2020-07-08T11:56:12.257Z"
    }