import { useState, useEffect } from 'react';
import * as C from './styles'
import { Item } from './types/item'
import { ListItem } from './components/listItem';
import { AddArea } from './components/addArea';


const App = () => {
  
  const [list, setList] = useState<Item[]>( () => {
    const items = localStorage.getItem("Lista to do")
    if(items){
     return JSON.parse(items)
    }
    return [];
  } )

  // const [item, setItem] = useState(localStorage.setItem("Lista to do", JSON.stringify(list)));

const AddTask = (task: string) => {
 let newList = [...list];
 newList.push({
   id : list.length + 1,
   name : task,
   done : false
 });
 setList(newList);
}

function removeTask(id: number) {
  setList(list.filter(task => task.id !== id));
};

const changeTask = (id:number, done:boolean) => {
  let novoArray = [...list];
  for(let i in novoArray){
    if(novoArray[i].id === id){
      novoArray[i].done = done;
    }
  }
  setList(novoArray);
}

  useEffect(() => {

    localStorage.setItem("Lista to do", JSON.stringify(list));
    
  }, [list]);


  return (
    <C.Container>
      <C.Area>
        <C.Header> <h1>To Do List</h1>
          <AddArea onEnter = {AddTask} />
          </C.Header> 


          {list.map((item, index)=>(
            <ListItem  key={index} item={item} onClick={removeTask} onChange={changeTask} />
          ))} 

      </C.Area>
    </C.Container>
  );
}

export default App;
