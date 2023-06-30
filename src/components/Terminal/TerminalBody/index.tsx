import React from 'react';
import { CommandContainer, Container, DateLoginRaw, InputCommand, Output, TerminalRaw, TerminalStatement } from './styles';
import { ContactInfo, TerminalInfo } from './types';

function TerminalBody() {
    const date: string = (new Date()).toLocaleString('pt-BR');
    const terminalInfo: Array<TerminalInfo> = [
        { user: 'Takano', command: 'location', output: '"Presidente Prudente/São Paulo, Brazil"' },
        { user: 'Takano', command: 'skills', output: `[''Angular', 'React', 'React Native', 'Jenkins', 'Azure Devops', 'Karma jasmine', 'Styled-Components', 'TypeORM', 'Scrum', 'CI/CD', 'Sonar', 'Git', 'Gitlab', 'Ngrx', 'Typescript', 'Javascript', 'Java', 'HTML', 'CSS', 'Java', 'Spring Boot', 'Maven']` },
        { user: 'Takano', command: 'education', output: '"University of Western São Paulo"' },
        { user: 'Takano', command: 'contact', output: [{name: 'Linkedin', href: 'https://www.linkedin.com/in/wellington-takano/?locale=en_US'}, {name: 'Github', href: 'https://github.com/Tuumix'}, {name: 'wellz-tkn@hotmail.com', href: 'mailto:https://github.com/Tuumix'}] },
    ]

    const renderCommands = () => {
        return (terminalInfo.map((item, key) => (
            <>
                <TerminalRaw>
                    <p>~{item.user}:</p>
                    <InputCommand>git</InputCommand>
                    <p style={{ paddingLeft: '10px' }}>{item.command}</p>
                </TerminalRaw>
                {
                    Array.isArray(item.output) ? renderLinks(item.output) : <Output>{item.output}</Output>
                }
            </>
        )))
    }

    const renderLinks = (contactInfo: Array<ContactInfo>) => {
        return (
            contactInfo.map((item, key) => 
                (
                    <Output key={key}>
                        <a href={item.href} target='_blank'>"{item.name}"</a>
                    </Output>
                )
            )
        )
    }

    return (
        <Container>
            <DateLoginRaw>
                <p>Last Login:</p>
                <Output>{date}</Output>
            </DateLoginRaw>
            <CommandContainer >
                {renderCommands()}
            </CommandContainer>
            {/* <TerminalStatement> </TerminalStatement> */}
        </Container>
    )
}

export default TerminalBody;