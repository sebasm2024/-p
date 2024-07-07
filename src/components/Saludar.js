import React from "react";

export default function Saludar(props) {
  const{userInfo,saludarFn}= props;
  const{nombre= "Anonimo"}= userInfo;
  
  console.log(props);
  console.log(userInfo);

 console.log(props);
  
  return (
    <div><button onClick={()=>saludarFn(nombre)}>Saludar</button>
    
    
    
    </div>
    
  );
}