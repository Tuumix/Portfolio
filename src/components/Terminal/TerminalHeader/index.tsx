import React from 'react';
import { TerminalButton, Container } from './styles';
import { terminalButtonColors } from '../../../assets/pallets';

function TerminalHeader() {
    return (
        <Container>
            {terminalButtonColors.map((item, key) => <TerminalButton key={key} style={{backgroundColor: item}}/> )}
        </Container>
    )
}

export default TerminalHeader;