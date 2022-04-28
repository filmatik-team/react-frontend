import React from "react";
import { SmallBackwardNavigationArrow, SmallForwardNavigationArrow } from "../../icons/arrows";
import { ArrowButtonStyled } from "./carousel-styles";
import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import { CONTAINER_PADDING, CONTAINER_WIDTH, MOVIE_CAROUSEL_MARGIN, MOVIE_CAROUSEL_VISIBLE } from "../../src/constants";

interface CarouselData {
  image: string;
  title: string;
  url?: string;
  rating?: number;
  counters?: number[];
  date?: string;
  commentsCount?: number;
}

export interface CarouselProps {
  /*Тип карточек для карусели*/
  component: React.ComponentType<any> | keyof JSX.IntrinsicElements;
  /*Массив с данными для обложек*/
  data: CarouselData[];
  /*Ширина карусели в px*/
  carouselWidth?: number;
  /*Количество видимых обложек на странице*/
  cardsVisible?: number;
  /*Отступ между обложками в px*/
  cardsMargin?: number;
  /*Сколько обложек прокручивать*/
  cardsScrollStep?: number;
  /*Стили*/
  sx?: SxProps<Theme>;
}

export function Carousel({
  component,
  data,
  carouselWidth = CONTAINER_WIDTH,
  cardsVisible = MOVIE_CAROUSEL_VISIBLE,
  cardsMargin = MOVIE_CAROUSEL_MARGIN,
  cardsScrollStep = MOVIE_CAROUSEL_MARGIN - 1,
  sx,
}: CarouselProps) {
  const realCarouselWidth = carouselWidth - 2 * CONTAINER_PADDING;
  const [carouselSize, setCarouselSize] = React.useState<number>(realCarouselWidth);
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const buttonForwardRef = React.useRef<HTMLButtonElement>(null);
  const buttonBackwardRef = React.useRef<HTMLButtonElement>(null);
  const carouselWidthRef = React.useRef(0);
  const Component = component;

  const movieWidth = (carouselSize + cardsMargin) / cardsVisible - cardsMargin;
  const movieHeight = ((carouselSize + cardsMargin) / cardsVisible - cardsMargin) * 1.5;
  const movieScrollOffset = Math.floor(movieWidth + cardsMargin);

  React.useEffect(() => {
    const slider = sliderRef.current as HTMLElement;

    const handleResize = () => {
      if (slider.clientWidth < carouselSize) {
        setCarouselSize(slider.clientWidth);
      } else {
        setCarouselSize(realCarouselWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  carouselWidthRef.current = movieScrollOffset * (data.length - Math.round(carouselSize / movieScrollOffset));

  React.useEffect(() => {
    const slider = sliderRef.current as HTMLElement;
    const buttonForward = buttonForwardRef.current as HTMLElement;
    const buttonBackward = buttonBackwardRef.current as HTMLElement;

    const handleScroll = () => {
      if (slider.scrollLeft >= carouselWidthRef.current) {
        buttonForward.classList.add("slider-button--hidden");
      } else if (slider.scrollLeft === 0) {
        buttonBackward.classList.add("slider-button--hidden");
      } else {
        buttonForward.classList.remove("slider-button--hidden");
        buttonBackward.classList.remove("slider-button--hidden");
      }
    };

    slider.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      slider.removeEventListener("scroll", handleScroll);
    };
  }, [carouselSize]);

  const slideLeft = (e: React.MouseEvent<HTMLButtonElement>) => {
    const slider = e.currentTarget.closest(".slider") as HTMLElement;

    if (slider.scrollLeft % movieScrollOffset === 0) {
      slider.scrollBy({
        top: 0,
        left: movieScrollOffset * cardsScrollStep,
        behavior: "smooth",
      });
    } else {
      slider.scrollBy({
        top: 0,
        left: 2 * movieScrollOffset * cardsScrollStep - Math.abs(slider.scrollLeft % movieScrollOffset),
        behavior: "smooth",
      });
    }
  };

  const slideRight = (e: React.MouseEvent<HTMLButtonElement>) => {
    const slider = e.currentTarget.closest(".slider") as HTMLElement;

    if (slider.scrollLeft % movieScrollOffset === 0) {
      slider.scrollBy({
        top: 0,
        left: -movieScrollOffset * cardsScrollStep,
        behavior: "smooth",
      });
    } else {
      slider.scrollBy({
        top: 0,
        left: -(movieScrollOffset * cardsScrollStep + Math.abs(slider.scrollLeft % movieScrollOffset)),
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ position: "relative", width: "100%", ...sx }}>
      <Box
        ref={sliderRef}
        className="slider"
        sx={{
          display: "flex",
          width: "100%",
          overflow: "hidden",
          overflowX: "scroll",
          overflowStyle: "none",
          scrollbarWidth: "none",

          "::-webkit-scrollbar": {
            display: "none",
            width: 0,
            background: "transparent",
          },

          "::-webkit-scrollbar-thumb": {
            background: "transparent",
          },
        }}>
        {data.map((item, i) => (
          <Component
            data={item}
            width={`${movieWidth}px`}
            height={`${movieHeight}px`}
            margin={i === data.length - 1 ? "0" : `0 ${cardsMargin}px 0 0`}
            date={item.date ? item.date : undefined}
            commentsCount={item.commentsCount ? item.commentsCount : undefined}
            key={item.image}
          />
        ))}
        {data.length <= Math.round(carouselSize / movieScrollOffset) ? null : (
          <>
            <ArrowButtonStyled
              ref={buttonForwardRef}
              className="slider-button slider-button-forward"
              disableRipple
              onClick={slideLeft}
              sx={{ right: "-40px" }}>
              <SmallForwardNavigationArrow />
            </ArrowButtonStyled>
            <ArrowButtonStyled
              ref={buttonBackwardRef}
              className="slider-button slider-button-backward slider-button--hidden"
              disableRipple
              onClick={slideRight}
              sx={{ left: "-40px" }}>
              <SmallBackwardNavigationArrow />
            </ArrowButtonStyled>
          </>
        )}
      </Box>
    </Box>
  );
}
