import React, { useRef } from 'react';
import Terminal from '../../components/Terminal';
import { Avatar, Body, IntroContainer, MainContainer } from './styles';

function Home() {
    const services = useRef(null);
    const blog = useRef(null);
    const contact = useRef(null);

    const scrollToSection = (elementRef: any) => {
        console.log(elementRef, 'deldeldedle')
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };

    const renderHeader = () => {
        return (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-evenly' }}>
                <h1>{'{takano.dev}'}</h1>
                <ul style={{ display: 'flex' }}>
                    <li style={{ cursor: 'pointer', paddingRight: '10px', color: '#bd93f9' }} className='link' onClick={() => scrollToSection(services)}>
                        Bio
                    </li>
                    <li style={{ cursor: 'pointer', paddingRight: '10px', color: '#bd93f9' }}>
                        Skills
                    </li>
                </ul>
                <h1>Icon2</h1>
            </div>
        )
    }

    const renderFooter = () => {
        return (
            <div style={{ display: 'flex', justifyContent: 'flex-end', width: '100%', color: '#bd93f9', padding: '20px' }}>
                <p>Developed by: Wellington Takano</p>
            </div>
        )
    }

    return (
        <Body>
            {renderHeader()}
            <MainContainer>
                <IntroContainer>
                    <div style={{ flexDirection: 'column' }}>
                        <h1>Hi,</h1>
                        <h1>I'm Wellington</h1>
                        <h1>Full Stack Engineer</h1>
                    </div>
                    <Avatar />
                </IntroContainer>
                <Terminal refProp={services} />
            </MainContainer>
            {renderFooter()}
        </Body>
    )
}

export default Home;