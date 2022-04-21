import React from "react";
import { SmallBackwardNavigationArrow, SmallForwardNavigationArrow } from "../../icons/arrows";
import { EyeCounter, HeartCounter, StarCounter } from "../../icons/counters";
import { FilmCard } from "./filmCard";
import { ArrowButtonStyled, BaseImgStyle } from "./carousel-styles";
import { Box } from "@mui/material";
import { transitionDefault } from "../lib/styling";

export interface FilmCarouselData {
  image: string;
  title: string;
  url: string;
  rating: string;
  counters: string;
}

interface FilmCarouselProps {
  /*Массив с данными для обложек*/
  data: FilmCarouselData[];
  /*Количество видимых обложек на странице*/
  filmCardVisible: number;
  /*Ширина карусели*/
  carouselWidth: number;
  /*Отступ между обложками*/
  filmMargin: number;
  /*Сколько обложек прокручивать*/
  filmScrollStep: number;
}

export function FilmCarousel({ data, filmCardVisible, carouselWidth, filmMargin, filmScrollStep }: FilmCarouselProps) {
  const [carouselSize, setCarouselSize] = React.useState<number>(carouselWidth);
  const sliderRef = React.useRef<HTMLDivElement>(null);
  const buttonForwardRef = React.useRef<HTMLButtonElement>(null);
  const buttonBackwardRef = React.useRef<HTMLButtonElement>(null);
  const carouselWidthRef = React.useRef(0);

  const filmWidth = (carouselSize + filmMargin) / filmCardVisible - filmMargin;
  const filmHeight = ((carouselSize + filmMargin) / filmCardVisible - filmMargin) * 1.5;
  const filmScrollOffset = Math.floor(filmWidth + filmMargin);

  React.useEffect(() => {
    const slider = sliderRef.current as HTMLElement;

    const handleResize = () => {
      if (slider.clientWidth < carouselSize) {
        setCarouselSize(slider.clientWidth);
      } else {
        setCarouselSize(carouselWidth);
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  carouselWidthRef.current = filmScrollOffset * (data.length - Math.round(carouselSize / filmScrollOffset));

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

    if (slider.scrollLeft % filmScrollOffset === 0) {
      slider.scrollBy({
        top: 0,
        left: filmScrollOffset * filmScrollStep,
        behavior: "smooth",
      });
    } else {
      slider.scrollBy({
        top: 0,
        left: 2 * filmScrollOffset * filmScrollStep - Math.abs(slider.scrollLeft % filmScrollOffset),
        behavior: "smooth",
      });
    }
  };

  const slideRight = (e: React.MouseEvent<HTMLButtonElement>) => {
    const slider = e.currentTarget.closest(".slider") as HTMLElement;

    if (slider.scrollLeft % filmScrollOffset === 0) {
      slider.scrollBy({
        top: 0,
        left: -filmScrollOffset * filmScrollStep,
        behavior: "smooth",
      });
    } else {
      slider.scrollBy({
        top: 0,
        left: -(filmScrollOffset * filmScrollStep + Math.abs(slider.scrollLeft % filmScrollOffset)),
        behavior: "smooth",
      });
    }
  };

  return (
    <Box sx={{ position: "relative", width: "100%" }}>
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
          <FilmCard
            width={`${filmWidth}px`}
            height={`${filmHeight}px`}
            margin={i === data.length - 1 ? "0" : `0 ${filmMargin}px 0 0`}
            key={item.image}>
            <Box component={"img"} src={data[i].image} alt={data[i].title} sx={BaseImgStyle} />
            <Box
              sx={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1,
                width: "100%",
                height: "100%",
                borderRadius: "8px",
                borderStyle: "none",
                transition: "all 0.1s ease",
                backgroundColor: "rgba(0, 0, 0, 0.65)",
                opacity: 0,

                ":hover": {
                  opacity: 1,
                },
              }}>
              <Box
                component={"img"}
                src="https://filmatik.ru/resources/app/img/gradient-cover-1.svg"
                alt="Gradient"
                sx={BaseImgStyle}
              />
              <Box
                component={"p"}
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  width: "100%",
                  margin: 0,
                  color: "#fff",
                  fontSize: { mobileS: "24px", laptop: "30px", desktop: "36px" },
                  textAlign: "center",
                }}>
                {data[i].rating}
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: 0,
                  display: { mobileS: "none", laptop: "flex" },
                  alignItems: "center",
                  justifyItems: "center",
                  justifyContent: "space-between",
                  width: "100%",
                  height: "20%",
                  p: { mobileS: "0 10px", desktop: "0 15px" },
                  fontSize: { mobileS: "13px", desktop: "15px" },
                  lineHeight: 1.2,
                  color: "#d2d2d2",
                  zIndex: 2,
                  transition: transitionDefault,
                  background:
                    "linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 20%, rgba(0, 0, 0, 0.6) 40%, " +
                    "rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0.2) 80%," +
                    "rgba(0, 0, 0, 0.1) 90%, rgba(0, 0, 0, 0) 100%)",
                }}>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <EyeCounter />
                  <span>20</span>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <HeartCounter />
                  <span>20</span>
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                  }}>
                  <StarCounter />
                  <span>20</span>
                </Box>
              </Box>
            </Box>
          </FilmCard>
        ))}
        {data.length <= Math.round(carouselSize / filmScrollOffset) ? null : (
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
