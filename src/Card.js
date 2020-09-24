import React from 'react'

export default function Card(props) {
   
  return(
    <div 
        id='card' onClick={props.click}
        >
         { props.item}
        </div>)
  

}