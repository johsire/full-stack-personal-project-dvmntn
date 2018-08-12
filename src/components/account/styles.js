import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  color: white;
  padding: 20px 0 0 20px;
  background: #f953c6;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #b91d73, #f953c6);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #b91d73, #f953c6); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`;

export const ImageWrapper = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;