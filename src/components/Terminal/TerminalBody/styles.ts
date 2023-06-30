import styled from 'styled-components';

export const Container = styled.div`
    width: 1000px;
    height: 557px;
    background-color: #FDF8ED;
    color: #CF531A;
    overflow-y: auto;
    border-radius: 0 0 10px 10px;
`

export const CommandContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding-top: 25px;
    font-size: 20px;
`

export const DateLoginRaw = styled.div`
    display: flex;
`

export const InputCommand = styled.p`
    /* color: #50fa7b; */
    color: #654EFA; 
    padding-left: 10px;
`

export const Output = styled.p`
    color: #E5A441;
    padding: 0px 10px;
    a {
        color: #023e8a;
    }
`

export const TerminalRaw = styled.div`
    display: flex;
    margin-top: 10px;
`
export const TerminalStatement = styled.span`
    background: hsla(0,0%,97%,.65);
    animation: caret 1s steps(1) infinite;
`
