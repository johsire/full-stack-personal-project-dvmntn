import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  color: black;
  padding: 20px 0 0 0;
  background: /* IE10+ */ 
            background-image: -ms-linear-gradient(left, rgb(13,255,0) 0%, rgb(255,255,0) 50%, rgb(255,0,0) 100%);

            /* Mozilla Firefox */ 
            background-image: -moz-linear-gradient(left, rgb(13,255,0) 0%, rgb(255,255,0) 50%, rgb(255,0,0) 100%);

            /* Opera */ 
            background-image: -o-linear-gradient(left, rgb(13,255,0) 0%, rgb(255,255,0) 50%, rgb(255,0,0) 100%);

            /* Webkit (Safari/Chrome 10) */ 
            background-image: -webkit-gradient(linear, left top, right top, color-stop(0, rgb(13,255,0)), color-stop(50, rgb(255,255,0)), color-stop(100, rgb(255,0,0)));

            /* Webkit (Chrome 11+) */ 
            background-image: -webkit-linear-gradient(left, rgb(13,255,0) 0%, rgb(255,255,0) 50%, rgb(255,0,0) 100%);

            /* W3C Markup */ 
            background-image: linear-gradient(to right, rgb(13,255,0) 0%, rgb(255,255,0) 50%, rgb(255,0,0) 100%);
  
  /* background: #C6FFDD;   */
  /* fallback for old browsers */
  /* background: -webkit-linear-gradient(to right, #f7797d, #FBD786, #C6FFDD);  
  /* Chrome 10-25, Safari 5.1-6 */
  /* background: linear-gradient(to right, #f7797d, #FBD786, #C6FFDD); 
  /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  top: 0;
  bottom:0;
  position:fixed;
  overflow-y:scroll;
  overflow-x:hidden;
  @media (max-width: 450px) {
    font-size: 12px;
    .vertical-menu {
    width: 200px;
}

.vertical-menu a {
    background-color: #eee;
    color: black;
    display: block;
    padding: 12px;
    text-decoration: none;
}

.vertical-menu a:hover {
    background-color: #ccc;
}

.vertical-menu a.active {
    background-color: #4CAF50;
    color: white;
}
 }

`;

export const ImageWrapper = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 60%;
`;