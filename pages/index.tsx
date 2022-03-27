import { IconButton, Stack } from "@mui/material"
import React, { useState } from "react"
import { DualColourSpan } from "../components/lib/styling"
import { FilmCarousel, FilmCarouselData } from "../components/ui/carousel"
import { LargeBackwardNavigationArrow, LargeForwardNavigationArrow } from "../icons/arrows"

interface MainCarouselData {
  image: string
  title: string
  url: string
}

interface MainCarouselProps {
  data: MainCarouselData[]
}

function MainCarousel({ data }: MainCarouselProps) {
  const [position, setPosition] = useState(0);
  const current = data[position];

  return <div style={{ position: "relative", overflowX: "hidden" }}>
    <img
      src={current.image}
      alt="alt"
      style={{ objectFit: "cover", width: "100%", height: 700, objectPosition: "100% 0" }}
    />
    <span style={{ position: "absolute", color: "#555", bottom: "2%", right: "2%", margin: 0, fontSize: 18 }}>
      {current.title}
    </span>
    <IconButton
      disableRipple
      onClick={() => setPosition((position + data.length - 1) % data.length)}
      style={{
        position: "absolute",
        bottom: "50%",
        right: "1%",
        margin: 0,
        background: "transparent",
      }}
    >
      <LargeForwardNavigationArrow />
    </IconButton>
    <IconButton
      disableRipple
      onClick={() => setPosition((position + 1) % data.length)}
      style={{
        position: "absolute",
        bottom: "50%",
        left: "1%",
        margin: 0,
        background: "transparent",
      }}
    >
      <LargeBackwardNavigationArrow />
    </IconButton>
  </div>
}

const mainCarouselViewData: MainCarouselData[] = [
  {
    image: "https://filmatik.ru/uploads/background/original/banner1.jpg",
    title: "Круэлла",
    url: "",
  },
  {
    image: "https://filmatik.ru/uploads/background/original/banner2.jpg",
    title: "Гнев Человеческий",
    url: "",
  },
  {
    image: "https://filmatik.ru//uploads/background/original/banner3.jpg",
    title: "Армия Мертвецов",
    url: "",
  },
];

const filmCarouselViewData: FilmCarouselData[] = [
  {
    image: "https://filmatik.ru/uploads/movie/1579/poster/w342/s04r9V6BX1FO2INzc2DL21UW57T.jpg",
    title: "Анчартед",
    url: "",
    rating: "80%",
    counters: "",
  },
  {
    image: "https://filmatik.ru/uploads/movie/21252/poster/w342/eddurPvOteKaHxSctJtikdWcG9o.jpg",
    title: "Отчаянные фрики",
    url: "",
    rating: "80%",
    counters: "",
  },
  {
    image: "https://filmatik.ru/uploads/movie/7758/poster/w342/jGVpMWEemYCSa2p9OSCMsaBXY98.jpg",
    title: "Как насчет любви?",
    url: "",
    rating: "80%",
    counters: "",
  },
  {
    image: "https://filmatik.ru/uploads/movie/159067/poster/w342/e4koV8iC2cCM57bqUnEnIL2a2zH.jpg",
    title: "Сирано",
    url: "",
    rating: "80%",
    counters: "",
  },
  {
    image: "https://filmatik.ru/uploads/movie/24709/poster/w342/uHwAiiBtjPQGRABPnR2OucnHko9.jpg",
    title: "Долгая прогулка",
    url: "",
    rating: "80%",
    counters: "",
  },
  {
    image: "https://filmatik.ru/uploads/movie/153141/poster/w342/s7nsixJ7SeJG2Pmd3W19EbfdRPe.jpg",
    title: "Удовольствие",
    url: "",
    rating: "80%",
    counters: "",
  },
  {
    image: "https://filmatik.ru/uploads/movie/162882/poster/w342/bv9dy8mnwftdY2j6gG39gCfSFpV.jpg",
    title: "Игра теней",
    url: "",
    rating: "80%",
    counters: "",
  },
  {
    image: "https://filmatik.ru/uploads/movie/7166/poster/w342/22FWO9Z2SYZh5JVI3nyxmwGaG7G.jpg",
    title: "Глубокие воды",
    url: "",
    rating: "80%",
    counters: "",
  },
  {
    image: "https://filmatik.ru/uploads/movie/5048/poster/w342/qt8X2xLDxZc5luYyYUvgHqePppn.jpg",
    title: "Бэтмен",
    url: "",
    rating: "80%",
    counters: "",
  },
];

export default function Home() {
  return <Stack direction="column" style={{ alignContent: "center", justifyContent: "center" }}>
    <MainCarousel data={mainCarouselViewData} />

    <div style={{ textAlign: "center", fontSize: 34 }}>
      <DualColourSpan whiteText="Топ" orangeText="премьер" />
    </div>
    <Stack direction="column">
      <FilmCarousel
        data={filmCarouselViewData}
        carouselWidth={1166}
        filmWidth={186}
        filmHeight={279}
        filmMargin={10}
        filmScrollStep={5}
      />
    </Stack>
  </Stack>
}
