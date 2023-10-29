import styled, { css } from "styled-components";

const StyledImage = styled.img`
  ${(props) =>
    props.$screen === "small" &&
    css`
      @media (max-width: 749.9px) {
        width: 100%;
      }
      @media (min-width: 750px) {
        display: none;
      }
    `}

  ${(props) =>
    props.$screen === "big" &&
    css`
      @media (max-width: 749.9px) {
        display: none;
      }
      @media (min-width: 750px) {
        width: 100%;
      }
    `}

      ${(props) =>
    props.$screen === "all" &&
    css`
      position: absolute;
      bottom: 0;
      left: 50%;
      transform: translate(-50%, -50%);
    `}
`;

function Image({ src, screen, alt }) {
  return <StyledImage $screen={screen} src={src} alt={alt} />;
}

export default Image;
