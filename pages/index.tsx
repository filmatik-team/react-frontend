import { IconButton, Stack } from "@mui/material"
import { useState } from "react"
import { DualColourSpan } from "../components/lib/styling"
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
  const [position, setPosition] = useState(0)
  const current = data[position]

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

function FilmCarousel() {
  return <div></div>
}

const mainCarouselViewData: MainCarouselData[] = [
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
]

export default function Home() {
  return <Stack direction="column" style={{ alignContent: "center", justifyContent: "center" }}>
    <MainCarousel data={mainCarouselViewData} />
    <div style={{ textAlign: "center", fontSize: 34 }}>
      <DualColourSpan whiteText="Топ" orangeText="премьер" />
    </div>
    <Stack direction="column">
      <FilmCarousel />
    </Stack>
  </Stack>
}
