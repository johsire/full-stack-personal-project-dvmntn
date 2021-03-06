import styled from 'styled-components';

export const HeaderWrapper = styled.div`
  width: 98%;
  height: 30px;
  ${'' /* background-color: gray; */}
  color: white;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  .sticky {
  position: fixed;
  top: 0;
  width: 100%
}

`;

export const Logo = styled.h1`
  color: #8dc63f;
  font-size: 16px;
  margin-top: 0;
  font-family: 'Nunito';
  text-decoration: none;
  @media (max-width: 450px) {
    font-size: 14px;
`;



export const Navigation = styled.ul`
  list-style-type: none;
  margin: 0;
  padding: 0;
`;

export const Menu = styled.li`
  display: inline-block;
  margin-right: 15px;
  font-size: 9px;
  text-transform: uppercase;
  font-family: 'Nunito';
  font-weight: 700;
  letter-spacing: 1.5px;
  text-decoration: none;
  color: #8dc63f;
  .sticky {
  position: fixed;
  top: 0;
  width: 100%
}

`;