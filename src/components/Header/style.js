import styled from 'styled-components';

const Heading = styled.h1`
    margin: 0;
    padding: 12px;
    color: #fff;
    font-size: 26px;
    line-height: 26px;
    font-weight: bold;
    clear: both;
    display: block;
    font-family: "Open Sans", sans-serif;
`;

const HeaderWrapper = styled.header`
    margin: 0 0 20px;
    padding: 0;
    width: 100%;
    display: block;
    background-color: rebeccapurple;
    clear: both;
    position: fixed;
    top: 0;
    left: 0;
    z-index: 2;
`;

export { 
    HeaderWrapper, Heading
}