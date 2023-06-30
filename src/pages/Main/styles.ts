import styled from 'styled-components';
import avatar from '../../assets/images/avatar.jpg';


export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-evenly;
`

export const Navigation = styled.ul`
    display: flex;
`

export const Item = styled.li`
    cursor: pointer;
    padding-right: 10px;
`

export const Body = styled.div`
    background-color: #ece7e1;
`

export const MainContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 100px;
    flex-direction: column;
`

export const IntroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 1000px;
    font-size: 30px;
`

export const Introduction = styled.div`
    flex-direction: column;
`

export const SocialMedia = styled.div`
    display: flex;
    width: 250px;
    justify-content: space-between;
`

export const Avatar = styled.div`
  background-image: url(${avatar});
  width: 300px;
  height: 300px;
  border-radius: 50%;
  background-size: cover;
  background-position: center center;
`;

export const BioContainer = styled.div`
    flex-direction: column;
    margin-top: 100px;
    width: 1000px;
    h1 {
        font-size: 60px;
    }
    span {
        font-size: 30px;
        text-align: justify;
    }
`