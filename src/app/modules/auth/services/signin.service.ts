import { HttpService } from "../../../services/http.service";
import { User } from "../interfaces/user.interface";


export class SigninService {
 
   public static signIn(user:User){
      const auth = {
         status:true,
         ok:200,
         message:"success",
         data:{
         username:"angel", 
         token:"sdanoiahfiewerwetgsd34",
         roles:["student", "teacher"]
        }
      }

      if(user.email === "ajc" && user.password === "123" ){
         return auth
      } 


      return { status:false, message:"incorrect", ok:400, data:{
         username:"", 
         token:"",
         roles:[]
      } }
   
     
      // return HttpService.methodGet("/users");
   } 

}