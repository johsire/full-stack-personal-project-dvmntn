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
  ${'' /* @media (max-width: 450px) {
   width: 120%;
   height: 120vh;
   padding: 5px 0 0 5px;
    } */}
   @media (max-width: 450px) {
    font-size: 12px;
    .vertical-menu {
    width: 200px;
}  
`;

export const HeroSection = styled.div`
 width: 70%;
 margin: 20px auto;
 max-width: 640px;
`;

export const Title = styled.h2`
    padding-bottom: 0px;
    padding-top: 70px;
    font-family: 'Courgette', cursive;
    font-size: 38px;
    letter-spacing: 1.5px;
    text-align: center;
    color: rgb(255, 255, 255);
    @media (max-width: 450px) {
    font-size: 16px;
`;

export const MiniTitle = styled.h3`
    font-size: 20px;
    position: relative;
    color: rgb(255, 255, 255);
    font-family: 'Nunito';
    font-weight: normal;
    text-align: center;
    @media (max-width: 450px) {
    font-size: 16px;
    }
`;

export const Color = styled.span`
    color: #8dc63f;
`;

export const Error = styled(MiniTitle)`
    font-size: 16px;
    color: red;
    text-transform: capitalize;
    @media (max-width: 450px) {
    font-size: 14px;
    }
`;

export const WeatherInput = styled.input`
    width: 300px;
    padding: 10px;
    font-size: 18px;
    border: none;
    color: #353b43;
    font-family: 'Nunito';
    margin: 0 auto;
    display: flex;
    text-align: center;
    @media (max-width: 450px) {
    font-size: 14px;
    width: 200px;
    }
`;

export const SearchButton = styled.button`
    padding: 10px 40px;
    width: 200px;
    display: inherit;
    margin: 30px auto;
    border: none;
    border-radius: 50px;
    background-color: #89bc33;
    color: white;
    font-size: 20px;
    font-weight: 100;
    cursor: pointer;
    font-family: 'Nunito';
    outline: none;
    @media (max-width: 450px) {
    font-size: 14px;
    width: 200px;
    }
`;
