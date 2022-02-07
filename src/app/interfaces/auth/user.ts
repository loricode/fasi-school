export interface ActionAuth {
   type: string;
   payload: Auth; 
 }

 export interface Auth {
   username:string;
   token:string;
   roles:string[]
 }
