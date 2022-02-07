import { useAuth } from "../hooks/auth/useAuth";
import { HasRole } from "../roles/HasRole";
import { Navbar } from "./components/navbar/Navbar";
import { ADMIN, MODERATOR, STUDENT } from "../roles/roles";

export const DashboardRouter = () =>{
   const { auth } = useAuth() 
   
   console.log("dash")
  return (
     <div>   
        <Navbar />
  
        <HasRole rol={ADMIN} arrRole={auth.roles}>
         <div>
            administrador
         </div>
         </HasRole>
         
         <HasRole rol={STUDENT} arrRole={auth.roles}>
         <div>
            alumnos
         </div>
         </HasRole>

         <HasRole rol={MODERATOR} arrRole={['moderator']}>
         <div>
            moderator
         </div>
         </HasRole>
     </div>
  );
}