import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { DashboardRouter } from '../dashboard/DashboardRouter';
import { AuthRouter } from '../modules/auth/AuthRouter';
import { AuthContext } from '../store/auth/context';

export function AppRouter(){
   return (
      <AuthContext>
       <BrowserRouter>
         <Routes>
            <Route path="/*" element={ <AuthRouter /> } />   
            <Route path="/dashboard" element={ <DashboardRouter /> } /> 
         </Routes>
       </BrowserRouter>
      </AuthContext>
   );
}