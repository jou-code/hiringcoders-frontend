import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    margin: auto;
    background-color: #303959;

    section { 
        height: 100vh;
        width: 80%;
        margin: auto;
        background: #303959;
        display: flex;

        .product-content{
            display: grid;
            row-gap: 2px;
            text-align: center;
            height: 400px;
            background: #fff;
            border-radius: 12px;
            padding: 12px;
            margin: 20px;
            color: #192141;            
        }

        .product-content:hover {
            box-shadow: #889FF0 0px 0px 10px;
        }

        .product-content span {
            font-size: 12px;
        }

        .product-content h6 {
            font-size: 14px;
        }

        .product-content button {
            cursor: pointer;
            padding: 5px;
            border: 1px solid #303959;
            border-radius: 12px;
            font-weight: bold;
            color: #303959;
            
        }
        
        .product-content button:hover {
            color: #303959;
            opacity: 44%;
        }
    }
`