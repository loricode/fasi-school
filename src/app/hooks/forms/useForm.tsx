import { useState } from "react";

export const useForm = (inputs:any) => {
   
 const [ input, setInputs ] = useState(inputs);  

 const inputChange = ( { target }:Event) => {
   const element = target as HTMLFormElement;
   setInputs({ ...input, [element.name]:element.value });
 }

 return [ input, inputChange, setInputs ];
};