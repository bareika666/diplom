import styled from "styled-components";
import { Logo } from "./img";

const HeaderWrapper = styled.div`
display:flex;
align-items:center;
background-color: #18311B;

`;



export const Header = () => {
  return <HeaderWrapper>
      <Logo/>
  </HeaderWrapper>;
};
