import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  color: black;
  padding: 20px 0 0 0;
  background: #C6FFDD;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #f7797d, #FBD786, #C6FFDD); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  top: 0;
  bottom:0;
  position:fixed;
  overflow-y:scroll;
  overflow-x:hidden;
`;

export const PriceContainer = styled.div`
 width: 900px;
 margin: 50px auto 25px auto;
 display: flex;
 flex-wrap: wrap;
 justify-content: space-around;
 align-items: center;
 @media (max-width: 910px) {
   width: 80%;
   flex-wrap: wrap;
 }
`;

export const ItemContainer = styled.div`
 width: 240px;
 height: 100%;
 background-color: white;
 padding: 10px;
 margin: 20px;
 border-radius: 4px;
 -webkit-box-shadow: 1px 10px 71px -22px rgba(0,0,0,0.75);
 -moz-box-shadow: 1px 10px 71px -22px rgba(0,0,0,0.75);
  box-shadow: 1px 10px 71px -22px rgba(0,0,0,0.75);
  @media (max-width: 910px) {
    width: 240px;
    margin-bottom: 20px;
  }
`;

export const Title = styled.h2`
 font-size: 18px;
 position: relative;
 color: black;
 font-family: 'Courgette';
 font-weight: normal;
 text-align: center;
 padding-top: 0.1px;
`;

export const Description = styled.p`
  font-family: 'Nunito';
  text-align: center;
  font-size: 15px;
`;

export const Price = styled.h1`
  font-family: 'Nunito';
  text-align: center;
  font-size: 28px;
`;

export const GalleryBanner = styled.div`
 width: 100%
 height: 40%
 display: flex;
 justify-content: space-between;
 background-color: orange; 
`;

export const ImageWrapper = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  border: 2px solid #333;
  display: block;
  margin: 0 auto;
`;


 