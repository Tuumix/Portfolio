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
                <h1>Icon2</h1>
            </HeaderContainer>
        )
    }

    const renderBio = () => {
        return (
            <BioContainer ref={bio}>
                <h1>Bio</h1>
                <span>
                    I hold a Bachelor's degree in Computer Science from the University of Western São Paulo and currently work as a Front-end developer at Accenture in Brazil. In my role, I work primarily with Angular and am responsible for developing new features, fixing bugs, integrating with the back-end, and managing version control using Gitlab and Azure DevOps. I also work with Jenkins to build and deploy to environment.
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
                            <h1>I'm Wellington</h1>
                            <h1>Full Stack Engineer</h1>
                        </div>
                        <SocialMedia>
                            <SocialIcon url="https://www.linkedin.com/in/wellington-takano/"/> 
                            <SocialIcon url="https://github.com/Tuumix"/>
                            <SocialIcon url="wellz-tkn@hotmail.com"/>
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