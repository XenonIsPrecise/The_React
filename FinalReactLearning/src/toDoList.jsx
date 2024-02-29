import * as React from 'react';
import List from '@mui/material/List';
import ToDoItem from './ToDoItem';



const toDOs =[{id:1,task:"Walk the dog",completed:true},
{id:2,task:"Walk the fish",completed:true},
{id:3,task:"Walk the Vulture",completed:false}]

export default function ToDoList(){
    const[toDos,setToDos] = React.useState(toDOs)
    return(
        <>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        {toDOs.map((todo) => {
          return <ToDoItem todo={todo} key={todo.id}/>
      })}
        </List>
        </>
    )
}

