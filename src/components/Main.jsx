import { styled } from "styled-components";
import Header from "../ui/Header";
import Paragraph from "../ui/Paragraph";
import Image from "../ui/Image";
import Svg from "../ui/Svg";
import Dice from "./Dice";
import { useCallback, useEffect, useState } from "react";

const StyledMain = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--dark-grayish-blue);
  margin: 3rem;
  padding: 4rem 3rem 7rem;
  width: 100%;
  max-width: 450px;
  flex-direction: column;
  gap: 2.5rem;
  border-radius: 10px;
  position: relative;
  text-align: center;

  .sliding-container {
    /* position: relative; */
    width: 100%;
    overflow: hidden;
  }

  .sliding-advice {
    animation: slideIn 0.5s forwards;
  }

  .sliding-out-advice {
    animation: slideOut 0.5s forwards;
  }

  @keyframes slideIn {
    from {
      transform: translateX(-100%);
    }
    to {
      transform: translateX(0);
    }
  }

  @keyframes slideOut {
    from {
      transform: translateX(0);
    }
    to {
      transform: translateX(100%);
    }
  }
`;

function Main() {
  const [currentAdivce, setCurrentAdvice] = useState("");
  const [adviceId, setAdviceId] = useState("");

  const updateAdvice = useCallback((newAdvice, newAdviceId) => {
    const slidingAdvice = document.querySelector(".sliding-advice");
    slidingAdvice.classList.add("sliding-out-advice");
    setTimeout(() => {
      slidingAdvice.classList.remove("sliding-out-advice");
    }, 500);

    setTimeout(() => {
      setAdviceId(newAdviceId); // Set the new advice ID
      setCurrentAdvice(newAdvice); // Set the new advice
    }, 500);
  }, []);

  const fetchAdvice = useCallback(async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");
      if (response.ok) {
        const data = await response.json();
        const newAdvice = data.slip.advice;
        const newAdviceId = data.slip.id;
        updateAdvice(newAdvice, newAdviceId);
      } else {
        throw new Error("Failed to fetch advice");
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  }, [updateAdvice]);

  useEffect(() => {
    fetchAdvice();
  }, [fetchAdvice]);

  return (
    <StyledMain>
      <Header>ADVICE #{adviceId}</Header>
      <div className="sliding-container">
        <Paragraph className="sliding-advice">{currentAdivce}</Paragraph>
      </div>
      <Image src="pattern-divider-mobile.svg" screen="small" alt="devider" />
      <Image src="pattern-divider-desktop.svg" screen="big" alt="devider" />
      <Dice handleClick={fetchAdvice} />
    </StyledMain>
  );
}

export default Main;
