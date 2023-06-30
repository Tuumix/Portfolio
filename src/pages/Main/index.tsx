import React, { useRef } from 'react';
import Terminal from '../../components/Terminal';
import { Avatar, Body, HeaderContainer, IntroContainer, Item, MainContainer, Navigation } from './styles';
import Footer from '../../components/Footer';

function Home() {
    const services = useRef(null);
    const blog = useRef(null);
    const contact = useRef(null);

    const scrollToSection = (elementRef: any) => {
        window.scrollTo({
            top: elementRef.current.offsetTop,
            behavior: "smooth",
        });
    };

    const renderHeader = () => {
        return (
            <HeaderContainer>
                <h1>{'{takano.dev}'}</h1>
                <Navigation>
                    <Item onClick={() => scrollToSection(services)}>
                        Bio
                    </Item>
                    <Item>
                        Skills
                    </Item>
                </Navigation>
                <h1>Icon2</h1>
            </HeaderContainer>
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
                <Footer />
            </MainContainer>
        </Body>
    )
}

export default Home;