import styled from 'styled-components';

export const Wrapper = styled.div`
 width: 100%;
 height: 100vh;
 background-color: yellow;
`;

export const PriceBanner = styled.div`
 width: 100%;
 height: 40%;
 padding-bottom: 30px; 
 display: flex;
 justify-content: space;
 background-color: pink; 
`;

export const LeftPriceBanner = styled.div`
 width: 25%
 height: 100%
 margin-left: 25px;
 background-color: purple; 
`;

export const MidPriceBanner = styled.div`
 width: 25%
 height: 100%
 margin-left: 55px;
 background-color: green; 
`;

export const RightPriceBanner = styled.div`
 width: 25%
 height: 100%
 margin-left: 55px;
 background-color: green; 
`;


export const PriceBannerText = styled.h2`
 font-size: 14px;
 position: relative;
 color: rgb(255, 255, 255);
 font-family: 'Courgette';
 font-weight: normal;
 text-align: center;
 padding-top: 0.1px;

`;