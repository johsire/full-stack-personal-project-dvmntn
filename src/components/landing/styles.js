import styled from 'styled-components';
import BackgroundImage from '../../assets/images/banner.jpg';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
  background-image: url(${BackgroundImage});
  background-size: cover;
  padding: 20px 0 0 20px;
`;

export const HeroSection = styled.div`
 width: 70%;
 margin: 20px auto;
`;

export const Title = styled.h2`
    padding-bottom: 0px;
    padding-top: 70px;
    font-family: 'Courgette', cursive;
    font-size: 38px;
    letter-spacing: 1.5px;
    text-align: center;
    color: rgb(255, 255, 255);
`;

export const MiniTitle = styled.h3`
    font-size: 20px;
    position: relative;
    color: rgb(255, 255, 255);
    font-family: 'Nunito';
    font-weight: normal;
    text-align: center;
`;
