import React from 'react'



function Navmenu(props) {
    return (
        <ul className="list">
             {props.x.map(el=>el.drop ?
             <li className="title">{el.title}
             
             <ul className="drop-list">
            
             {el.drop.map(el=>
               
             <li>{el}</li>
            )} 
            </ul>
             
             
             </li>:<li className="title">{el.title}</li>

             )}
        </ul>
    )
}
export default Navmenu