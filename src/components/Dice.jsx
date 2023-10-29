import { styled } from "styled-components";
import Svg from "../ui/Svg";

const StyledDice = styled.div`
  transition: 0.2s all ease-in-out;
  padding: 5px;
  border-radius: 50%;
  background: var(--neon-green);
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translate(-50%, 50%);
  width: 55px;
  height: 55px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    box-shadow: 0px 0px 20px var(--neon-green);
  }
`;

function Dice({ handleClick }) {
  return (
    <StyledDice onClick={handleClick}>
      <Svg />
    </StyledDice>
  );
}

export default Dice;
