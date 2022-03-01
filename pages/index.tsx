import { Stack } from "@mui/material"
import { DualColourSpan } from "../components/lib/styling"

function MainCarousel() {
  return <div style={{ position: "relative" }}>
    <img
      src="https://filmatik.ru/uploads/background/original/banner2.jpg"
      alt="alt"
      style={{ objectFit: "cover", width: "100%", height: 700, objectPosition: "100% 0" }}
    />
    <span style={{ position: "absolute", color: "#555", bottom: "2%", right: "2%", margin: 0, fontSize: 18 }}>
      Гнев Человеческий
    </span>
  </div>
}

function FilmCarousel() {
  return <div></div>
}

export default function Home() {
  return <Stack direction="column" style={{ alignContent: "center", justifyContent: "center" }}>
    <MainCarousel />
      <div style={{ textAlign: "center", fontSize: 34 }}>
        <DualColourSpan whiteText="Топ" orangeText="премьер" />
      </div>
      <Stack direction="column">
    <FilmCarousel />
    </Stack>
  </Stack>
}
