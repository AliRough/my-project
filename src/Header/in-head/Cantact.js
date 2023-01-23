import React from 'react'


export default function Cantact({IClass,children}) {
  return (
    
    <li className="list-inline-item entext d-block d-lg-inline-block">
         <i className={IClass}></i>
       {children} 
    </li>
  )
}
  
