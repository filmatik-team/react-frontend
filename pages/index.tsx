import React from "react";
import { Stack, Box, Link, Typography, Fade, Divider } from "@mui/material";
import { FButton, ContainerStyled, DualColourSpan } from "../components/lib/styling";
import { FTabPanel, FTabsListStyled } from "../components/ui/tabs";
import Carousel, { CarouselProps } from "../components/ui/carousel";
import { LargeBackwardNavigationArrow, LargeForwardNavigationArrow } from "../icons/arrows";
import LoginModal from "../components/common/header/loginModal";
import { BannerSeparator } from "../icons/mainPage";
import { MovieCard, MovieCardData } from "../components/ui/movieCard";
import { NewsCard, NewsCardData } from "../components/ui/newsCard";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import { useSwipeable } from "react-swipeable";
import { TabStyled } from "../components/ui/tabs-styles";
import { TabsUnstyled } from "@mui/base";
import { NEWS_CAROUSEL_MARGIN, NEWS_CAROUSEL_VISIBLE } from "../src/constants";
import { UserLoggedInContext, UserLoginModalContext, UserSubscriptionsContext } from "../src/contexts/users/contexts";

interface MainPageBannerCarouselData {
  image: string;
  title: string;
  url: string;
}

const MainPageBannerCarouselViewData: MainPageBannerCarouselData[] = [
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

const filmCarouselViewData: MovieCardData[] = [
  {
    image: "https://filmatik.ru/uploads/movie/1579/poster/w342/s04r9V6BX1FO2INzc2DL21UW57T.jpg",
    title: "Анчартед",
    url: "",
    rating: 80,
    eyeCounter: 10,
    heartCounter: 20,
    starCounter: 5,
  },
  {
    image: "https://filmatik.ru/uploads/movie/21252/poster/w342/eddurPvOteKaHxSctJtikdWcG9o.jpg",
    title: "Отчаянные фрики",
    url: "",
    rating: 60,
    eyeCounter: 10,
    heartCounter: 20,
    starCounter: 5,
  },
  {
    image: "https://filmatik.ru/uploads/movie/7758/poster/w342/jGVpMWEemYCSa2p9OSCMsaBXY98.jpg",
    title: "Как насчет любви?",
    url: "",
    rating: 45,
    eyeCounter: 10,
    heartCounter: 20,
    starCounter: 5,
  },
  {
    image: "https://filmatik.ru/uploads/movie/159067/poster/w342/e4koV8iC2cCM57bqUnEnIL2a2zH.jpg",
    title: "Сирано",
    url: "",
    rating: 0,
    eyeCounter: 10,
    heartCounter: 20,
    starCounter: 5,
  },
  {
    image: "https://filmatik.ru/uploads/movie/24709/poster/w342/uHwAiiBtjPQGRABPnR2OucnHko9.jpg",
    title: "Долгая прогулка",
    url: "",
    rating: 80,
    eyeCounter: 10,
    heartCounter: 20,
    starCounter: 5,
  },
  {
    image: "https://filmatik.ru/uploads/movie/153141/poster/w342/s7nsixJ7SeJG2Pmd3W19EbfdRPe.jpg",
    title: "Удовольствие",
    url: "",
    rating: 80,
    eyeCounter: 10,
    heartCounter: 20,
    starCounter: 5,
  },
  {
    image: "https://filmatik.ru/uploads/movie/162882/poster/w342/bv9dy8mnwftdY2j6gG39gCfSFpV.jpg",
    title: "Игра теней",
    url: "",
    rating: 80,
    eyeCounter: 10,
    heartCounter: 20,
    starCounter: 5,
  },
  {
    image: "https://filmatik.ru/uploads/movie/7166/poster/w342/22FWO9Z2SYZh5JVI3nyxmwGaG7G.jpg",
    title: "Глубокие воды",
    url: "",
    rating: 80,
    eyeCounter: 10,
    heartCounter: 20,
    starCounter: 5,
  },
  {
    image: "https://filmatik.ru/uploads/movie/5048/poster/w342/qt8X2xLDxZc5luYyYUvgHqePppn.jpg",
    title: "Бэтмен",
    url: "",
    rating: 10,
    eyeCounter: 10,
    heartCounter: 20,
    starCounter: 5,
  },
];

const topPremieresData: CarouselProps[] = [
  {
    component: MovieCard,
    data: filmCarouselViewData,
  },
  {
    component: MovieCard,
    data: filmCarouselViewData.concat([]).reverse(),
  },
  {
    component: MovieCard,
    data: filmCarouselViewData.concat([]).reverse(),
  },
];

const topOnlineData: CarouselProps[] = [
  {
    component: MovieCard,
    data: filmCarouselViewData,
  },
  {
    component: MovieCard,
    data: filmCarouselViewData.concat([]).reverse(),
  },
  {
    component: MovieCard,
    data: filmCarouselViewData,
  },
];

const topSelectionsData: CarouselProps = {
  component: MovieCard,
  data: filmCarouselViewData,
};

const newsViewData: NewsCardData[] = [
  {
    image: "https://filmatik.ru/uploads/news/image/middle_225.jpg",
    title: "Netflix опубликовал тизер «Очень странных дел 4»",
    url: "",
    date: "1 мая 2022",
    commentsCount: 0,
  },
  {
    image: "https://filmatik.ru/uploads/news/image/middle_224.jpg",
    title: "«Худший брак в Джорджтауне» получил трейлер",
    url: "",
    date: "1 мая 2022",
    commentsCount: 0,
  },
  {
    image: "https://filmatik.ru/uploads/news/image/middle_223.jpg",
    title: "Disney показал трейлер новой мультипликации «Лука»",
    url: "",
    date: "1 мая 2022",
    commentsCount: 0,
  },
  {
    image: "https://filmatik.ru/uploads/news/image/middle_222.jpg",
    title: "В сети появился первый тизер мюзикла «Вестсайдская история»",
    url: "",
    date: "1 мая 2022",
    commentsCount: 0,
  },
  {
    image: "https://filmatik.ru/uploads/news/image/middle_217.jpg",
    title: "Мадс Миккельсен появится в пятой части «Индианы Джонса»",
    url: "",
    date: "1 мая 2022",
    commentsCount: 0,
  },
];

const newsData: CarouselProps = {
  component: NewsCard,
  data: newsViewData,
};

const topPopularData: CarouselProps = {
  component: MovieCard,
  data: filmCarouselViewData,
};

interface MainPageBannerCarouselProps {
  data: MainPageBannerCarouselData[];
  sx?: SxProps<Theme>;
  mouseAnimationStop?: boolean;
}

const MainPageBannerCarousel = ({ data, sx, mouseAnimationStop = false, ...rest }: MainPageBannerCarouselProps) => {
  const [position, setPosition] = React.useState<number>(0);
  const [open, setOpen] = React.useState<boolean>(false);
  const [, setOpenUserModal] = React.useContext(UserLoginModalContext);
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

  const swipeable = useSwipeable({
    onSwipedLeft: () => handleClickRightArrow(),
    onSwipedRight: () => handleClickLeftArrow(),
    trackMouse: true,
    delta: 30,
  });

  return (
    <Box
      onMouseOver={mouseAnimationStop ? () => (pauseRef.current = true) : undefined}
      onMouseOut={mouseAnimationStop ? () => (pauseRef.current = false) : undefined}
      sx={{
        position: "relative",
        height: { mobileS: "60vh", laptop: "80vh" },
        minHeight: { mobileS: 320, laptop: 580 },
        m: "0 0 30px 0",
        ...sx,
      }}
      {...swipeable}
      {...rest}>
      <Fade in={open} timeout={500} key={position}>
        <Box
          component="img"
          src={current.image}
          alt="alt"
          sx={{
            width: "100%",
            height: { mobileS: "60vh", laptop: "80vh" },
            minHeight: "580px",
            objectFit: "cover",
            objectPosition: { mobileS: "50% 50px", mobileL: "50% 20%" },
          }}
          loading="lazy"
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
        <BannerSeparator />
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
        <FButton
          text="начать!"
          uppercase
          theme="dark"
          onClick={() => setOpenUserModal(true)}
          sx={{
            display: "flex" /*If (User) display: none*/,
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
};

interface MainPageFilmCarouselProps {
  children: React.ReactNode;
  article?: React.ReactNode;
  divider?: boolean;
  sx?: SxProps<Theme>;
}

const MainPageMovieCarousel = ({ children, article, divider = true, ...rest }: MainPageFilmCarouselProps) => {
  return (
    <Box {...rest}>
      <ContainerStyled>
        <Stack
          justifyContent="center"
          sx={{
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
            <Link href="">{article}</Link>
          </Typography>
        </Stack>
        {children}
        {divider ? (
          <Divider
            sx={{
              display: { mobileS: "none", laptop: "block" },
              borderColor: "#2E3A42",
            }}
          />
        ) : null}
      </ContainerStyled>
    </Box>
  );
};

export default function Home() {
  const [topPremieresValue, setTopPremieresValue] = React.useState<number>(0);
  const [topOnlineValue, setTopOnlineValue] = React.useState<number>(0);
  const [isLoggedIn] = React.useContext(UserLoggedInContext);
  const [userSubscriptions] = React.useContext(UserSubscriptionsContext);

  const handleChangeTopPremieres = (event: React.SyntheticEvent, newValue: number | string) => {
    setTopPremieresValue(newValue as number);
  };
  const handleChangeTopOnline = (event: React.SyntheticEvent, newValue: number | string) => {
    setTopOnlineValue(newValue as number);
  };

  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignContent="center"
      sx={
        isLoggedIn
          ? {
              flex: "1 0 auto",
              m: {
                mobileS: "100px 0 50px 0",
                laptop: "100px 0 100px 0",
              },
            }
          : {
              flex: "1 0 auto",
              m: {
                mobileS: "0 0 50px 0",
                laptop: "0 0 100px 0",
              },
            }
      }>
      <MainPageBannerCarousel data={MainPageBannerCarouselViewData} sx={isLoggedIn ? { display: "none" } : undefined} />
      <MainPageMovieCarousel
        article={<DualColourSpan whiteText="Топ" orangeText="премьер" />}
        sx={{ margin: { mobileS: "0 0 40px 0", laptop: "0 0 30px 0" } }}>
        <TabsUnstyled
          component={Box}
          value={topPremieresValue}
          onChange={handleChangeTopPremieres}
          sx={{ margin: { mobileS: "0", laptop: "0 0 50px 0" } }}>
          <FTabsListStyled>
            <TabStyled>Сейчас</TabStyled>
            <TabStyled>Скоро</TabStyled>
            <TabStyled>Позже</TabStyled>
          </FTabsListStyled>
          <Box sx={{ position: "relative" }}>
            {topPremieresData.map((viewData, i) => (
              <FTabPanel index={topPremieresValue} value={i} key={viewData.data[i].image}>
                <Carousel {...viewData} />
              </FTabPanel>
            ))}
          </Box>
        </TabsUnstyled>
      </MainPageMovieCarousel>
      <MainPageMovieCarousel
        article={<DualColourSpan whiteText="Топ" orangeText="онлайн" />}
        sx={{ margin: { mobileS: "0 0 40px 0", laptop: "0 0 30px 0" } }}>
        <TabsUnstyled
          component={Box}
          value={topOnlineValue}
          onChange={handleChangeTopOnline}
          sx={{ margin: { mobileS: "0", laptop: "0 0 50px 0" } }}>
          <FTabsListStyled>
            {isLoggedIn && userSubscriptions && <TabStyled>Мои подписки</TabStyled>}
            <TabStyled>Все</TabStyled>
            <TabStyled>Бесплатно</TabStyled>
          </FTabsListStyled>
          <Box sx={{ position: "relative" }}>
            {isLoggedIn && userSubscriptions && (
              <FTabPanel index={topOnlineValue} value={0}>
                <Carousel {...topOnlineData[0]} />
              </FTabPanel>
            )}
            <FTabPanel index={topOnlineValue} value={isLoggedIn && userSubscriptions ? 1 : 0}>
              <Carousel {...topOnlineData[1]} />
            </FTabPanel>
            <FTabPanel index={topOnlineValue} value={isLoggedIn && userSubscriptions ? 2 : 1}>
              <Carousel {...topOnlineData[2]} />
            </FTabPanel>
          </Box>
        </TabsUnstyled>
      </MainPageMovieCarousel>
      <MainPageMovieCarousel
        article={<DualColourSpan whiteText="Топ" orangeText="подборок" />}
        sx={{ margin: { mobileS: "0 0 40px 0", laptop: "0 0 30px 0" } }}>
        <Carousel {...topSelectionsData} sx={{ margin: { mobileS: "0", laptop: "0 0 50px 0" } }} />
      </MainPageMovieCarousel>
      <MainPageMovieCarousel
        article={<DualColourSpan whiteText="Новости" orangeText="кино" />}
        sx={{ margin: { mobileS: "0 0 40px 0", laptop: "0 0 30px 0" } }}>
        <Carousel
          {...newsData}
          cardsVisible={NEWS_CAROUSEL_VISIBLE}
          cardsMargin={NEWS_CAROUSEL_MARGIN}
          cardsScrollStep={NEWS_CAROUSEL_MARGIN - 1}
          sx={{ margin: { mobileS: "0", laptop: "0 0 50px 0" } }}
        />
      </MainPageMovieCarousel>
      <MainPageMovieCarousel
        article={<DualColourSpan whiteText="Топ" orangeText="популярных" />}
        divider={false}
        sx={{ margin: 0 }}>
        <Carousel {...topPopularData} />
      </MainPageMovieCarousel>
      <style global jsx>{`
        html,
        body,
        body > div:first-child,
        div#__next,
        div#__next > div {
          height: 100%;
        }
      `}</style>
    </Stack>
  );
}
