import styled from 'styled-components';
import BackgroundImage from '../../assets/images/banner.jpg';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: black;
  color: white;
  background-image: url(${BackgroundImage});
  background-size: cover;
`;

export const Header = styled.div`
 width: 100%;
 height: 30px;
 background-color: gray;
 color: white;
`;

export const Logo = styled.h1`
  color: #8dc63f;
  font-size: 16px;
  margin-top: 0;
`;
