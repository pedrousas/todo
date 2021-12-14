import * as C from './styles';
import {Item} from '../../types/item';


type Props = {
    item: Item;
    onChange: (id: number, done: boolean) => void;
    onClick: (task:number) => void;
}

export const ListItem = ( { item, onChange, onClick }: Props) => {
    
    
    return(
          <C.Container done={item.done}>
              <input type='checkbox'
              checked={item.done} 
              onChange = {e => onChange(item.id, e.target.checked)} 
              />
              <label>{item.name}</label>
              <button className='image' onClick={() => onClick(item.id)}>🗑️</button>
          </C.Container>       
        )
    }