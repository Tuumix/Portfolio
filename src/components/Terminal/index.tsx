import React from 'react';
import TerminalHeader from './TerminalHeader';
import TerminalBody from './TerminalBody';

function Terminal(props: any) {
    return (
        <div style={{marginTop: '100px'}} ref={props.refProp}>
            <TerminalHeader/>
            <TerminalBody/>
        </div>
    )
}

export default Terminal;