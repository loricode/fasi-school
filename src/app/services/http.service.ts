import { environment } from "../../environments/environment";

export class HttpService{
   
   private static baseUrl = environment.baseUrl

   public static async methodGet(path:string):Promise<any>{
    const response = await fetch(this.baseUrl + path, {
      method:"GET",
      mode:"cors"
    }); 
    return await response.json();
   }


}