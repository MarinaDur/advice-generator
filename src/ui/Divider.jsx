import { styled } from "styled-components";

const StyledDivider = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

function Divider() {
  return <StyledDivider></StyledDivider>;
}

export default Divider;
