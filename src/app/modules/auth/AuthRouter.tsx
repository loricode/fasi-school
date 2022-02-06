import { Routes, Route } from 'react-router-dom';

//pages
import { SignIn } from './views/sign-in/SignIn';
import { SignUp } from './views/sign-up/SignUp';

export function AuthRouter(){
   return (
    <Routes>
       <Route path="/" element={<SignIn />} />
       <Route path="/signup" element={<SignUp />} />
    </Routes>
   );
}