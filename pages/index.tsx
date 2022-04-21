import React from "react";
import { Stack, Box, Link, Typography, Fade } from "@mui/material";
import {
  ButtonFilmatik,
  ContainerStyled,
  containerWidth,
  DualColourSpan,
  filmCardVisible,
  filmCarouselMargin,
} from "../components/lib/styling";
import { NavData, NavTabs } from "../components/ui/tabs";
import { FilmCarousel, FilmCarouselData } from "../components/ui/carousel";
import { LargeBackwardNavigationArrow, LargeForwardNavigationArrow } from "../icons/arrows";
import { LoginModal } from "../components/common/header/loginModal";
import { UserLoginModalContext } from "../components/common/header/header";

interface MainCarouselData {
  image: string;
  title: string;
  url: string;
}

interface MainCarouselProps {
  data: MainCarouselData[];
}

function MainCarousel({ data }: MainCarouselProps) {
  const [position, setPosition] = React.useState<number>(0);
  const [open, setOpen] = React.useState<boolean>(false);
  const [openUserModal, setOpenUserModal] = React.useState<boolean>(false);
  const pauseRef = React.useRef<boolean>(false);
  const current = data[position];

  const handleClickRightArrow = () => {
    setPosition((position + data.length - 1) % data.length);
  };

  const handleClickLeftArrow = () => {
    setPosition((position + 1) % data.length);
  };

  React.useEffect(() => {
    setOpen(true);

    const interval = setInterval(() => {
      if (!pauseRef.current) handleClickRightArrow();
    }, 6000);

    return () => clearInterval(interval);
  }, [position]);

  return (
    <Box
      onMouseOver={() => (pauseRef.current = true)}
      onMouseOut={() => (pauseRef.current = false)}
      sx={{
        position: "relative",
        height: { mobileS: "60vh", laptop: "80vh" },
        minHeight: { mobileS: 320, laptop: 580 },
        mt: 0,
      }}>
      <Fade in={open} timeout={500} key={position}>
        <Box
          component={"img"}
          src={current.image}
          alt="alt"
          sx={{
            width: "100%",
            height: "100%",
            minHeight: "580px",
            objectFit: "cover",
            objectPosition: { mobileS: "50% 50px", mobileL: "50% 20%" },
          }}
        />
      </Fade>
      <Box
        sx={{
          position: "absolute",
          width: "100%",
          height: "100%",
          left: 0,
          top: 0,
          background:
            "linear-gradient(180deg, rgba(0, 0, 0, 0.07) 43.71%, rgba(8, 8, 8, 0.35) 77.63%, rgba(3, 3, 3, 0.32) 91.3%)",
        }}
      />
      <Box
        component={ContainerStyled}
        sx={{
          position: "absolute",
          left: 0,
          right: 0,
          bottom: "14%",
          width: "100%",
          zIndex: "10",
        }}>
        <Box
          component="img"
          src="https://filmatik.ru/resources/app/img/separator.svg"
          sx={{ display: { mobileS: "none", laptop: "block" }, m: "0 auto" }}
        />
        <Typography
          component="h1"
          sx={{
            display: "flex",
            justifyContent: "center",
            m: { mobileS: "5px 0 20px 0", laptop: "5px 0 45px 0" },
            color: "#dbdbdb",
            fontSize: { mobileS: "24px", laptop: "44px" },
            textShadow: "1px 1px 10px #000",
            fontWeight: 700,
            textAlign: "center",
            whiteSpace: "nowrap",
          }}>
          Отслеживай новинки кино
        </Typography>
        <ButtonFilmatik
          text="начать!"
          uppercase
          theme="dark"
          onClick={() => setOpenUserModal(true)}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            width: { mobileS: "125px", laptop: "155px" },
            height: { mobileS: "33px", laptop: "44px" },
            m: "0 auto",
            borderRadius: "7px",
            fontSize: { mobileS: "14px", laptop: "20px" },
            color: "#E6E6E6",
            textShadow: "1px 1px 3px rgb(0 0 0 / 40%)",
          }}
        />
        <UserLoginModalContext.Provider value={[openUserModal, setOpenUserModal]}>
          <LoginModal />
        </UserLoginModalContext.Provider>
      </Box>
      <Box
        sx={{
          position: "absolute",
          display: { mobileS: "none", mobileL: "block" },
          bottom: 3,
          right: 10,
          color: "#8C8C8C",
        }}>
        <Link
          href={current.url}
          sx={{
            color: "#555",
            fontSize: 14,
            textShadow: "1px 1px 0 #000",
          }}>
          {current.title}
        </Link>
      </Box>
      <LargeForwardNavigationArrow onClick={handleClickRightArrow} />
      <LargeBackwardNavigationArrow onClick={handleClickLeftArrow} />
    </Box>
  );
}

const mainCarouselViewData: MainCarouselData[] = [
  {
    image: "https://filmatik.ru/uploads/background/original/banner1.jpg",
    title: "Круэлла",
    url: "https://filmatik.ru/movies/48561-stervella-2021",
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

const NavTabsTopPremieresData: NavData[] = [
  {
    tabName: "Сейчас",
    content: (
      <FilmCarousel
        data={filmCarouselViewData}
        filmCardVisible={filmCardVisible}
        carouselWidth={containerWidth}
        filmMargin={filmCarouselMargin}
        filmScrollStep={5}
      />
    ),
  },
  {
    tabName: "Скоро",
    content: (
      <FilmCarousel
        data={filmCarouselViewData.concat([]).reverse()}
        filmCardVisible={filmCardVisible}
        carouselWidth={containerWidth}
        filmMargin={filmCarouselMargin}
        filmScrollStep={5}
      />
    ),
  },
  {
    tabName: "Позже",
    content: (
      <FilmCarousel
        data={filmCarouselViewData}
        filmCardVisible={filmCardVisible}
        carouselWidth={containerWidth}
        filmMargin={filmCarouselMargin}
        filmScrollStep={5}
      />
    ),
  },
];

export default function Home() {
  return (
    <Stack direction="column" sx={{ alignContent: "center", justifyContent: "center" }}>
      <MainCarousel data={mainCarouselViewData} />
      <Box sx={{ margin: "0 0 50px 0" }}>
        <ContainerStyled>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              marginBottom: "20px",
            }}>
            <Typography
              component="h2"
              sx={{
                fontSize: "26px",
                fontWeight: "700",
                color: "#e6e6e6",
                margin: 0,
                textAlign: "center",
              }}>
              <DualColourSpan whiteText="Топ" orangeText="премьер" />
            </Typography>
          </Box>
          <NavTabs data={NavTabsTopPremieresData} defaultTab={0} sx={{ m: "0 0 50px 0" }} />
        </ContainerStyled>
      </Box>
    </Stack>
  );
}
