import { styled } from "styled-components";
import Main from "./Main";

const StyledBody = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dark-blue);
`;

function Body() {
  return (
    <StyledBody>
      <Main />
    </StyledBody>
  );
}

export default Body;
