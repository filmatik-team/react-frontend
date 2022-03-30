import React from "react"
import {IconButton, Stack, Box, Container} from "@mui/material"
import {DualColourSpan} from "../components/lib/styling"
import {NavTabs} from "../components/ui/tabs"
import {FilmCarousel, FilmCarouselData} from "../components/ui/carousel"
import {LargeBackwardNavigationArrow, LargeForwardNavigationArrow} from "../icons/arrows"

const containerWidth = 1166; // ширина контента по всему сайту

interface MainCarouselData {
  image: string
  title: string
  url: string
}

interface MainCarouselProps {
  data: MainCarouselData[]
}

function MainCarousel({data}: MainCarouselProps) {
  const [position, setPosition] = React.useState(0);
  const current = data[position];

  return <div style={{position: "relative", overflowX: "hidden", lineHeight: 0}}>
    <img
      src={current.image}
      alt="alt"
      style={{objectFit: "cover", width: "100%", height: 700, objectPosition: "100% 0"}}
    />
    <span style={{
      position: "absolute",
      color: "#555",
      bottom: "2%",
      right: "2%",
      margin: 0,
      fontSize: 18
    }}>
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
      <LargeForwardNavigationArrow/>
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
      <LargeBackwardNavigationArrow/>
    </IconButton>
  </div>
}

interface NavTabsData {
  tabName: string,
  content: React.ReactNode
}

interface NavTabsProps {
  data: NavTabsData[]
}

function NavTabsTopPrime({data}: NavTabsProps) {
  return <NavTabs data={data} defaultTab={0} style={{margin: "0 0 50px 0"}}/>
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

const NavTabsTopPremieresData: NavTabsData[] = [
  {
    tabName: "Сейчас",
    content:
      <FilmCarousel
        data={filmCarouselViewData}
        carouselWidth={containerWidth}
        filmWidth={186}
        filmHeight={279}
        filmMargin={10}
        filmScrollStep={5}
      />,
  },
  {
    tabName: "Скоро",
    content:
      <FilmCarousel
        data={filmCarouselViewData.concat([]).reverse()}
        carouselWidth={containerWidth}
        filmWidth={186}
        filmHeight={279}
        filmMargin={10}
        filmScrollStep={5}
      />,
  },
  {
    tabName: "Позже",
    content:
      <FilmCarousel
        data={filmCarouselViewData}
        carouselWidth={containerWidth}
        filmWidth={186}
        filmHeight={279}
        filmMargin={10}
        filmScrollStep={5}
      />,
  },
];

export default function Home() {
  return <Stack direction="column" style={{alignContent: "center", justifyContent: "center"}}>
    <MainCarousel data={mainCarouselViewData}/>
    <Box sx={{margin: "0 0 50px 0"}}>
      <Container disableGutters sx={{width: `${containerWidth}px`, margin: "0 auto", padding: 0}}>
        <div style={{
          textAlign: "center",
          fontSize: 34,
          display: "flex",
          justifyContent: "center",
          marginBottom: "20px",
        }}>
          <h2 style={{
            fontSize: "26px",
            fontWeight: "700",
            color: "#e6e6e6",
            margin: 0,
            textAlign: "center",
          }}>
            <DualColourSpan whiteText="Топ" orangeText="премьер"/>
          </h2>
        </div>
        <NavTabsTopPrime data={NavTabsTopPremieresData}/>
      </Container>
    </Box>
  </Stack>
}
