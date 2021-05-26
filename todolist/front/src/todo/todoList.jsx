import React from "react";
import IconButton from '../template/iconButton';
import '../template/custom.css'

export default props => {

   const renderRows = () =>{
       const list = props.list || []
       return list.map(todo => (
           <tr key={todo._id} >
               <td className={todo.done ? 'markedAsDone' : 'todo'}>{todo.description}</td>
               <td className='icons'>
                   <IconButton style='success' icon='check' hide={todo.done}
                   onClick={()=> props.handleAsDone(todo)}></IconButton>
                    <IconButton style='warning' icon='undo' hide={!todo.done}
                   onClick={()=> props.handleAsPendind(todo)}></IconButton>    
                   <IconButton style='danger' icon='trash-o'
                   onClick={()=> props.handleRemove(todo)}></IconButton>    
               </td>
           </tr>
       ));
   }

   return(
       <table className='table'>
           <thead>
               <tr>
                   <th>Descrição:</th>
                   <th className='tableActions'>Ações</th>
               </tr>
           </thead>
           <tbody>
               {renderRows()}
           </tbody>
       </table>
   )
}