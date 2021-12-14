import styled from 'styled-components';

type ContainerProps = {
    done: boolean;
}

export const Container = styled.div(( {done}:ContainerProps ) => (`

display: flex;
background-color: #20212C;
padding: 15px;
border-radius: 10px;
margin-bottom: 10px;
margin-top: 10px;
align-items: center;

input {
    width: 25px;
    height: 25px;
    margin-right: 15px;
};


label {
    color: ${done ? '#1BBF15' : '#CCC' };
    text-decoration: ${done ? 'line-through' : 'initial' };
    width: 85%;
};

.image{
    justify-content: flex-end;
    background-color: #20212C;
    border: none;
    cursor: pointer;
};
`
));