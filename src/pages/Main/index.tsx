import React, { useRef } from 'react';
import Terminal from '../../components/Terminal';
import Footer from '../../components/Footer';
import { Avatar, BioContainer, Body, HeaderContainer, IntroContainer, Introduction, Item, MainContainer, Navigation, SocialMedia } from './styles';
import { SocialIcon } from 'react-social-icons';

function Home() {
    const bio = useRef(null);
    const terminal = useRef(null);
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
                    <Item onClick={() => scrollToSection(bio)}>
                        Bio
                    </Item>
                    <Item onClick={() => scrollToSection(terminal)}>
                        Skills
                    </Item>
                </Navigation>
                <h1>Not implmented yet</h1>
            </HeaderContainer>
        )
    }

    const renderBio = () => {
        return (
            <BioContainer ref={bio}>
                <h1>Bio</h1>
                <span>
                    Brazilian Full Stack Engineer, Currently I'm working at Accenture with Angular and Spring Boot. Since I was a kid I loved technology, especially computer and video games which is why I decided to become a Software Engineer.
                </span>
            </BioContainer>
        )
    }

    return (
        <Body>
            {renderHeader()}
            <MainContainer>
                <IntroContainer>
                    <Introduction>
                        <div style={{ flexDirection: 'column' }}>
                            <h1>Hi,</h1>
                            <h1>I'm Wellington,</h1>
                            <h1>Full Stack Engineer.</h1>
                        </div>
                        <SocialMedia>
                            <SocialIcon url="https://www.linkedin.com/in/wellington-takano/"/> 
                            <SocialIcon url="https://github.com/Tuumix"/>
                            <SocialIcon url='mailto: wellz-tkn@hotmail.com' network="email"/>
                            <SocialIcon url="https://www.facebook.com/wellz.tkn"/>
                        </SocialMedia>
                    </Introduction>
                    <Avatar />
                </IntroContainer>
                {renderBio()}
                <Terminal refProp={terminal} />
                <Footer />
            </MainContainer>
        </Body>
    )
}

export default Home;