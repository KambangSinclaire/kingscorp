export interface Personnel{
    username:string;
    firstName?:string;
    lastName?:string;
    about?:string;
    createdAt?:string;
    updateAt?:string;
    createdBy:string;
    gender:string;
    role:string;
    status?:boolean;
    // LEARNED SOMETHING NEW
    isAcceptable?(s: string): boolean;
}