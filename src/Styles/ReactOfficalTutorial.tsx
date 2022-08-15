import styled from 'styled-components';

export const Wrapper = styled.div`
    margin: 0 auto;
    border:1px solid red;
    background-image: linear-gradient(to left, violet, indigo, blue, green, yellow, orange, red);

`;

export const Paragraph = styled.h2`
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 48px;
    text-align: center;
    color:#ffffff;
    text-shadow: 0 0 2px #000; /* horizontal-offset vertical-offset 'blur' colour */
  -moz-text-shadow: 0 0 2px #000;
  -webkit-text-shadow: 0 0 2px #000;    
`;
