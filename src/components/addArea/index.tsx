import { useState, KeyboardEvent } from 'react'
import * as C from './styles'

type Props = {
    onEnter: (task:string) => void
};

export const AddArea = ({onEnter}:Props) => {

const [inputText, setPegarInputText] = useState('') ;

const  handleKeyUp = (e : KeyboardEvent) => {
    if(e.code === 'Enter' && inputText !== ''){
        onEnter(inputText)
        setPegarInputText('')
    }
    if(e.code === 'Enter' && inputText === '' ){
        alert('Você não digitou nada :/')
    }
}

    return (
        <C.Container>
         <div className='image'>➕</div>
         <input type = 'text'
            placeholder = 'Adicione uma tarefa'
            value={inputText}
            onChange={e=>setPegarInputText(e.target.value)}
            onKeyUp={handleKeyUp}/>
        </C.Container>
    )
} 