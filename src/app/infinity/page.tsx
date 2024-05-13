"use client";

import { LeftArrowIcon, RightArrowIcon } from "@/asset";
import { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

export default function Page() {
  const [carousel, setCarousel] = useState<number>(1);
  const [itemCount, setItemCount] = useState<number>(0);
  const [transition, setTransition] = useState<string>("all 0.5s");
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const childrenCount = ref.current.children.length;

      setItemCount(childrenCount - 1);
    }
  }, []);

  useEffect(() => {
    if (carousel === 0) {
      setTimeout(() => {
        setTransition("");
        setCarousel(itemCount - 1);
      }, 500);
    } else if (carousel === itemCount) {
      setTimeout(() => {
        setTransition("");
        setCarousel(1);
      }, 500);
    }
  }, [carousel]);

  const handleLeftButtonClick = () => {
    setTransition("all 0.5s");
    setCarousel((prev) => prev - 1);
  };

  const handleRightButtonClick = () => {
    setTransition("all 0.5s");
    setCarousel((prev) => prev + 1);
  };

  return (
    <Container>
      <ControllButton onClick={handleLeftButtonClick}>
        <LeftArrowIcon />
      </ControllButton>
      <Carousel>
        <div
          style={{
            transform: `translateX(-${carousel * 40}rem)`,
            display: "flex",
            transition: transition,
          }}
          // carousel={carousel}
          // isTransition={isTransition}
          ref={ref}
        >
          <Item src="https://github.com/gaoooon/Carousel_Practice/assets/128475660/00013cfe-78b4-48a1-be40-33dbe08324b2" />
          <Item src="https://github.com/gaoooon/Carousel_Practice/assets/128475660/89b2c4c5-e905-4635-bce5-c805a2fe680e" />
          <Item src="https://github.com/gaoooon/Carousel_Practice/assets/128475660/f44f6a95-8264-4479-97b6-1b3c78debd8f" />
          <Item src="https://github.com/gaoooon/Carousel_Practice/assets/128475660/00013cfe-78b4-48a1-be40-33dbe08324b2" />
          <Item src="https://github.com/gaoooon/Carousel_Practice/assets/128475660/89b2c4c5-e905-4635-bce5-c805a2fe680e" />
        </div>
      </Carousel>
      <ControllButton onClick={handleRightButtonClick}>
        <RightArrowIcon />
      </ControllButton>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Carousel = styled.div`
  width: 40rem;
  height: 30rem;
  border-radius: 1rem;
  border: 0.125rem solid black;
  overflow: hidden;
`;

const ItemWrapper = styled.div<{ carousel: number; transition: string }>`
  display: flex;
  transform: translateX(${({ carousel }) => `-${carousel * 40}rem`});
`;

const Item = styled.img`
  max-width: 40rem;
  min-width: 40rem;
  max-height: 30rem;
  min-height: 30rem;
`;

const ControllButton = styled.button`
  width: 5rem;
  height: 5rem;
  border-radius: 50%;
  cursor: pointer;
  border: 0;
`;
