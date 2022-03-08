import React from "react";
import { IconButton, Container } from "@mui/material";
import { SmallBackwardNavigationArrow, SmallForwardNavigationArrow } from "../../icons/arrows";
import { CarouselScrollbar, FilmCard } from "../lib/styling";

export interface FilmCarouselData {
  image: string
  title: string
  url: string
  rating: string
  counters: string
}

interface FilmCarouselProps {
  data: FilmCarouselData[]
}

export function FilmCarousel({ data }: FilmCarouselProps) {
  const filmWidth = 186;
  const filmMargin = 10;

  const slideLeft = () => {
    const slider = document.querySelector('.slider')!;
    slider.scrollLeft = slider.scrollLeft + filmWidth + filmMargin
  };

  const slideRight = () => {
    const slider = document.querySelector('.slider')!;
    slider.scrollLeft = slider.scrollLeft - filmWidth - filmMargin
  };

  return <Container disableGutters sx={{ width: "1166px", padding: 0}}>
    <div style={{ position: "relative"}}>
      <CarouselScrollbar className="slider">
        {data.map((item, i) => (
          <FilmCard
            width={`${filmWidth}px`}
            margin={i === data.length - 1 ? "0" : `0 ${filmMargin}px 0 0`}
            key={i}
          >
            <img
              src={data[i].image}
              alt={data[i].title}
              style={{ objectFit: "cover", width: "100%", height: "100%", borderRadius: 8 }}
            />
          </FilmCard>
        ))}
        <IconButton
          disableRipple
          onClick={slideLeft}
          style={{
            position: "absolute",
            bottom: "45%",
            right: "-35px",
            margin: 0,
            background: "transparent",
            color: "#8C8C8C",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          <SmallForwardNavigationArrow />
        </IconButton>
        <IconButton
          disableRipple
          onClick={slideRight}
          style={{
            position: "absolute",
            bottom: "45%",
            left: "-35px",
            margin: 0,
            background: "transparent",
            color: "#8C8C8C",
            cursor: "pointer",
            fontSize: "20px",
          }}
        >
          <SmallBackwardNavigationArrow />
        </IconButton>
      </CarouselScrollbar>
    </div>
  </Container>
}