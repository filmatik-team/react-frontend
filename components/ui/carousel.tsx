import React from "react";
import { SmallBackwardNavigationArrow, SmallForwardNavigationArrow } from "../../icons/arrows";
import {EyeCounter, HeartCounter, StarCounter} from "../../icons/counters";
import { FilmCard, HoverElement } from "../lib/styling";
import { BaseImgStyle, ArrowButton, CarouselScrollbar } from "./carousel-style";
import { Container } from "@mui/material";

export interface FilmCarouselData {
  image: string
  title: string
  url: string
  rating: string
  counters: string
}

interface FilmCarouselProps {
  data: FilmCarouselData[],
  carouselWidth: number, // ширина карусели
  filmWidth: number, // ширина обложки фильма
  filmHeight: number, // высота обложки фильма
  filmMargin: number, // отступ между обложками
  filmScrollStep: number // сколько обложек прокручивать
}

export function FilmCarousel({ data, carouselWidth, filmWidth,filmMargin, filmHeight, filmScrollStep}: FilmCarouselProps) {
  const filmScrollOffset = filmWidth + filmMargin;

  const slideLeft = () => {
    const slider = document.querySelector('.slider')!;

    slider.addEventListener('scroll', () => {
      if (slider.scrollLeft >= filmScrollOffset * (data.length - Math.round(carouselWidth/filmScrollOffset))) {
        document.querySelector<HTMLElement>('.slider-button-forward')!.style.cssText += `
          visibility: hidden;
          opacity: 0;
        `;
      } else if (slider.scrollLeft === 0) {
        document.querySelector<HTMLElement>('.slider-button-backward')!.style.cssText += `
          visibility: hidden;
          opacity: 0;
        `;
      } else {
        document.querySelector<HTMLElement>('.slider-button-forward')!.style.cssText += `
          visibility: visible;
          opacity: 1;
        `;
        document.querySelector<HTMLElement>('.slider-button-backward')!.style.cssText += `
          visibility: visible;
          opacity: 1;
        `;
      }
    });

    if (slider.scrollLeft % filmScrollOffset === 0) {
      slider.scrollBy({
        top: 0,
        left: filmScrollOffset * filmScrollStep,
        behavior: 'smooth'
      });
    } else {
      slider.scrollBy({
        top: 0,
        left: 2 * filmScrollOffset * filmScrollStep - (slider.scrollLeft % filmScrollOffset),
        behavior: 'smooth'
      });
    }
  };

  const slideRight = () => {
    const slider = document.querySelector('.slider')!;

    if (slider.scrollLeft % filmScrollOffset === 0) {
      slider.scrollBy({
        top: 0,
        left: - filmScrollOffset * filmScrollStep,
        behavior: 'smooth'
      });
    } else {
      slider.scrollBy({
        top: 0,
        left: - (filmScrollOffset * filmScrollStep + Math.abs(slider.scrollLeft % filmScrollOffset)),
        behavior: 'smooth'
      });
    }
  };

  return <Container disableGutters sx={{ width: `${carouselWidth}px`, padding: 0}}>
    <div style={{ position: "relative"}}>
      <CarouselScrollbar className="slider">
        {data.map((item, i) => (
          <FilmCard
            width={`${filmWidth}px`}
            height={`${filmHeight}px`}
            margin={i === data.length - 1 ? "0" : `0 ${filmMargin}px 0 0`}
            key={i}
          >
            <img src={data[i].image} alt={data[i].title} style={BaseImgStyle}/>
            <HoverElement
              opacitynative={0}
              opacityhover={1}
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                zIndex: 1,
                width: "100%",
                height: "100%",
                borderRadius: 8,
                borderStyle: "none",
                transition: "all 0.1s ease",
                backgroundColor: "rgba(0, 0, 0, 0.65)",
              }}
            >
              <img
                src="https://filmatik.ru/resources/app/img/gradient-cover-1.svg"
                alt="Gradient"
                style={BaseImgStyle}
              />
              <p style={{
                position: "absolute",
                top: "50%",
                left: 0,
                width: "100%",
                margin: 0,
                color: "#fff",
                fontSize: "36px",
                textAlign: "center",
              }}>
                {data[i].rating}
              </p>
              <div style={{
                transition: "all 0.3s ease",
                display: "flex",
                width: "100%",
                height: "20%",
                fontSize: "15px",
                color: "#d2d2d2",
                position: "absolute",
                zIndex: 2,
                bottom: 0,
                alignItems: "center",
                justifyItems: "center",
                justifyContent: "space-between",
                padding: "0 15px",
                background: "linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 20%, rgba(0, 0, 0, 0.6) 40%, " +
                  "rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0.2) 80%," +
                  "rgba(0, 0, 0, 0.1) 90%, rgba(0, 0, 0, 0) 100%)"
              }}>
                <div><EyeCounter/><span>20</span></div>
                <div><HeartCounter/><span>20</span></div>
                <div><StarCounter/><span>20</span></div>
              </div>
            </HoverElement>
          </FilmCard>
        ))}
        {data.length <= Math.round(carouselWidth/filmScrollOffset) ? null :
          <>
            <HoverElement
              colorhover="#fff"
              as={ArrowButton}
              className="slider-button-forward"
              disableRipple
              onClick={slideLeft}
              style={{right:"-35px"}}
            >
              <SmallForwardNavigationArrow/>
            </HoverElement>
            <HoverElement
              colorhover="#fff"
              as={ArrowButton}
              className="slider-button-backward"
              disableRipple
              onClick={slideRight}
              style={{left:"-35px", visibility: "hidden", opacity: 0}}
            >
              <SmallBackwardNavigationArrow/>
            </HoverElement>
          </>
        }
      </CarouselScrollbar>
    </div>
  </Container>
}