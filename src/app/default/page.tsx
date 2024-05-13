"use client";

import { LeftArrowIcon, RightArrowIcon } from "@/asset";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";

export default function Page() {
  const [carousel, setCarousel] = useState<number>(0);
  const [itemCount, setItemCount] = useState<number>(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (ref.current) {
      const childrenCount = ref.current.children.length;

      setItemCount(childrenCount - 1);
    }
  }, []);

  const handleLeftButtonClick = () =>
    carousel > 0 ? setCarousel((prev) => prev - 1) : setCarousel(itemCount);

  const handleRightButtonClick = () =>
    carousel < itemCount ? setCarousel((prev) => prev + 1) : setCarousel(0);

  return (
    <Container>
      <ControllButton onClick={handleLeftButtonClick}>
        <LeftArrowIcon />
      </ControllButton>
      <Carousel>
        <ItemWrapper carousel={carousel} ref={ref}>
          <Item src="https://github.com/gaoooon/Carousel_Practice/assets/128475660/89b2c4c5-e905-4635-bce5-c805a2fe680e" />
          <Item src="https://github.com/gaoooon/Carousel_Practice/assets/128475660/f44f6a95-8264-4479-97b6-1b3c78debd8f" />
          <Item src="https://github.com/gaoooon/Carousel_Practice/assets/128475660/00013cfe-78b4-48a1-be40-33dbe08324b2" />
        </ItemWrapper>
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

const ItemWrapper = styled.div<{ carousel: number }>`
  display: flex;
  transition: all 0.5s;
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
