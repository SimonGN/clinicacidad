import styled from 'styled-components';



const BotonStyle = styled.div`
    a{
        text-decoration:none;
        font-family: "avenir";
        font-size: 1.5rem;
        letter-spacing: 0.07rem;
        color: black;
        padding-top:15px;
        padding-bottom:15px;
        padding-left:40px;
        padding-right:40px;
        background-color:white;
        border-color: black;
        border-width: 3px;
        border-style: solid;
        border-radius:2px;
        height: 60px;
        width: 200px;
    }
    @media only screen and (min-width:769px) and (max-width:1024px){
        a{
            font-size: 2rem;
            cursor:pointer;
        }
    @media only screen and (min-width:1025px) and (max-width:1440px){
        a{
            font-size: 4rem;
            cursor:pointer;
        }
    }
    @media only screen and (min-width:1441px) {
        a{
            font-size: 4rem;
            cursor:pointer;
        }
    }
    
    }

`;

export {BotonStyle};
