import  styled  from "styled-components";


export const Delete = styled.button `
    background-color: red;
    height: 30px;
    cursor: pointer;
    border-radius: 5px;
    padding: 5px;
    border: none;

    &:hover{
        opacity: 0.5;
    }

`

export const AddButton = styled.button `
    background: #6cf000;
    color: #000;
    margin: 5px;
    padding: 5px;
    border-radius: 5px;
    border: none;
    height: 35px;
    cursor: pointer;

    &:hover{
        opacity: 0.5;
    }

`
export const Container = styled.div `
    background: #ccc;
    padding: 20px;
    border-radius: 10px;

    h1{
        color: #fff;
        padding: 10px;
        text-align: center;
    }

    input{
        outline: none;
        border-radius: 5px;
        border: none;
        padding: 10px;
        font-size: 15px;
    }

`

export const Product = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 40px;
    background-color: #fff;
    border-radius: 5px;
    margin-top: 10px;
    padding: 0 10px;
    font-family: Arial, Helvetica, sans-serif;
    font-size: 20px;
    text-transform: capitalize;
    font-weight: bold;
 

`