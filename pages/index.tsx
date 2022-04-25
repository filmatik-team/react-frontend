import React from "react";
import { Stack, Box, Link, Typography, Fade, Divider } from "@mui/material";
import { ButtonFilmatik, ContainerStyled, DualColourSpan } from "../components/lib/styling";
import { NavData, NavTabs } from "../components/ui/tabs";
import { Carousel } from "../components/ui/carousel";
import { LargeBackwardNavigationArrow, LargeForwardNavigationArrow } from "../icons/arrows";
import { LoginModal, UserLoginModalContext } from "../components/common/header/loginModal";
import { BannerSeparator } from "../icons";
import { MovieCard, MovieCardData } from "../components/ui/movieCard";
import { NewsCard, NewsCardData } from "../components/ui/newsCard";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

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
    counters: [10, 20, 5],
  },
  {
    image: "https://filmatik.ru/uploads/movie/21252/poster/w342/eddurPvOteKaHxSctJtikdWcG9o.jpg",
    title: "Отчаянные фрики",
    url: "",
    rating: 60,
    counters: [10, 20, 5],
  },
  {
    image: "https://filmatik.ru/uploads/movie/7758/poster/w342/jGVpMWEemYCSa2p9OSCMsaBXY98.jpg",
    title: "Как насчет любви?",
    url: "",
    rating: 45,
    counters: [10, 20, 5],
  },
  {
    image: "https://filmatik.ru/uploads/movie/159067/poster/w342/e4koV8iC2cCM57bqUnEnIL2a2zH.jpg",
    title: "Сирано",
    url: "",
    rating: 0,
    counters: [10, 20, 5],
  },
  {
    image: "https://filmatik.ru/uploads/movie/24709/poster/w342/uHwAiiBtjPQGRABPnR2OucnHko9.jpg",
    title: "Долгая прогулка",
    url: "",
    rating: 80,
    counters: [10, 20, 5],
  },
  {
    image: "https://filmatik.ru/uploads/movie/153141/poster/w342/s7nsixJ7SeJG2Pmd3W19EbfdRPe.jpg",
    title: "Удовольствие",
    url: "",
    rating: 80,
    counters: [10, 20, 5],
  },
  {
    image: "https://filmatik.ru/uploads/movie/162882/poster/w342/bv9dy8mnwftdY2j6gG39gCfSFpV.jpg",
    title: "Игра теней",
    url: "",
    rating: 80,
    counters: [10, 20, 5],
  },
  {
    image: "https://filmatik.ru/uploads/movie/7166/poster/w342/22FWO9Z2SYZh5JVI3nyxmwGaG7G.jpg",
    title: "Глубокие воды",
    url: "",
    rating: 80,
    counters: [10, 20, 5],
  },
  {
    image: "https://filmatik.ru/uploads/movie/5048/poster/w342/qt8X2xLDxZc5luYyYUvgHqePppn.jpg",
    title: "Бэтмен",
    url: "",
    rating: 10,
    counters: [10, 20, 5],
  },
];

const TopPremieresData: NavData[] = [
  {
    tabName: "Сейчас",
    content: (
      <Carousel
        component={MovieCard}
        data={filmCarouselViewData}
        movieCardVisible={Number(process.env.NEXT_PUBLIC_FILM_CAROUSEL_VISIBLE)}
        carouselWidth={Number(process.env.NEXT_PUBLIC_CONTAINER_WIDTH)}
        movieMargin={Number(process.env.NEXT_PUBLIC_FILM_CAROUSEL_MARGIN)}
        movieScrollStep={5}
      />
    ),
  },
  {
    tabName: "Скоро",
    content: (
      <Carousel
        component={MovieCard}
        data={filmCarouselViewData.concat([]).reverse()}
        movieCardVisible={Number(process.env.NEXT_PUBLIC_FILM_CAROUSEL_VISIBLE)}
        carouselWidth={Number(process.env.NEXT_PUBLIC_CONTAINER_WIDTH)}
        movieMargin={Number(process.env.NEXT_PUBLIC_FILM_CAROUSEL_MARGIN)}
        movieScrollStep={5}
      />
    ),
  },
  {
    tabName: "Позже",
    content: (
      <Carousel
        component={MovieCard}
        data={filmCarouselViewData.concat([]).reverse()}
        movieCardVisible={Number(process.env.NEXT_PUBLIC_FILM_CAROUSEL_VISIBLE)}
        carouselWidth={Number(process.env.NEXT_PUBLIC_CONTAINER_WIDTH)}
        movieMargin={Number(process.env.NEXT_PUBLIC_FILM_CAROUSEL_MARGIN)}
        movieScrollStep={5}
      />
    ),
  },
];

const TopOnlineData: NavData[] = [
  {
    tabName: "Все",
    content: (
      <Carousel
        component={MovieCard}
        data={filmCarouselViewData.concat([]).reverse()}
        movieCardVisible={Number(process.env.NEXT_PUBLIC_FILM_CAROUSEL_VISIBLE)}
        carouselWidth={Number(process.env.NEXT_PUBLIC_CONTAINER_WIDTH)}
        movieMargin={Number(process.env.NEXT_PUBLIC_FILM_CAROUSEL_MARGIN)}
        movieScrollStep={5}
      />
    ),
  },
  {
    tabName: "Бесплатно",
    content: (
      <Carousel
        component={MovieCard}
        data={filmCarouselViewData}
        movieCardVisible={Number(process.env.NEXT_PUBLIC_FILM_CAROUSEL_VISIBLE)}
        carouselWidth={Number(process.env.NEXT_PUBLIC_CONTAINER_WIDTH)}
        movieMargin={Number(process.env.NEXT_PUBLIC_FILM_CAROUSEL_MARGIN)}
        movieScrollStep={5}
      />
    ),
  },
  /*If User & my_subscriptions:
  {
    tabName: "Мои подписки",
    content: (
      <Carousel
        component={MovieCard}
        data={filmCarouselViewData.concat([]).reverse()}
        movieCardVisible={Number(process.env.NEXT_PUBLIC_FILM_CAROUSEL_VISIBLE)}
        carouselWidth={Number(process.env.NEXT_PUBLIC_CONTAINER_WIDTH)}
        movieMargin={Number(process.env.NEXT_PUBLIC_FILM_CAROUSEL_MARGIN)}
        movieScrollStep={5}
      />
    ),
  },
  */
];

const TopSelectionsData = (
  <Carousel
    component={MovieCard}
    data={filmCarouselViewData}
    movieCardVisible={Number(process.env.NEXT_PUBLIC_FILM_CAROUSEL_VISIBLE)}
    carouselWidth={Number(process.env.NEXT_PUBLIC_CONTAINER_WIDTH)}
    movieMargin={Number(process.env.NEXT_PUBLIC_FILM_CAROUSEL_MARGIN)}
    movieScrollStep={5}
    sx={{ m: { mobileS: "0", laptop: "0 0 50px 0" } }}
  />
);

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

const NewsData = (
  <Carousel
    component={NewsCard}
    data={newsViewData}
    movieCardVisible={Number(process.env.NEXT_PUBLIC_NEWS_CAROUSEL_VISIBLE)}
    carouselWidth={Number(process.env.NEXT_PUBLIC_CONTAINER_WIDTH)}
    movieMargin={Number(process.env.NEXT_PUBLIC_NEWS_CAROUSEL_MARGIN)}
    movieScrollStep={3}
    sx={{ m: { mobileS: "0", laptop: "0 0 50px 0" } }}
  />
);

const TopPopularData = (
  <Carousel
    component={MovieCard}
    data={filmCarouselViewData}
    movieCardVisible={Number(process.env.NEXT_PUBLIC_FILM_CAROUSEL_VISIBLE)}
    carouselWidth={Number(process.env.NEXT_PUBLIC_CONTAINER_WIDTH)}
    movieMargin={Number(process.env.NEXT_PUBLIC_FILM_CAROUSEL_MARGIN)}
    movieScrollStep={5}
  />
);

interface MainPageBannerCarouselProps {
  data: MainPageBannerCarouselData[];
}

function MainPageBannerCarousel({ data }: MainPageBannerCarouselProps) {
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
        m: "0 0 30px 0",
      }}>
      <Fade in={open} timeout={500} key={position}>
        <Box
          component="img"
          src={current.image}
          alt="alt"
          sx={{
            width: "100%",
            height: "100%",
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

interface MainPageFilmCarouselProps {
  carouselData: React.ReactNode;
  article?: React.ReactNode;
  divider?: boolean;
  sx?: SxProps<Theme>;
}

const MainPageMovieCarousel = ({ carouselData, article, divider = true, ...rest }: MainPageFilmCarouselProps) => {
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
        {carouselData}
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
  return (
    <Stack
      direction="column"
      justifyContent="center"
      alignContent="center"
      sx={{
        flex: "1 0 auto",
        m: { mobileS: "0 0 50px 0", laptop: "0 0 100px 0" },
      }}>
      <MainPageBannerCarousel data={MainPageBannerCarouselViewData} />
      <MainPageMovieCarousel
        article={<DualColourSpan whiteText="Топ" orangeText="премьер" />}
        carouselData={
          <NavTabs data={TopPremieresData} defaultTab={0} sx={{ margin: { mobileS: "0", laptop: "0 0 50px 0" } }} />
        }
        sx={{ margin: { mobileS: "0 0 40px 0", laptop: "0 0 30px 0" } }}
      />
      <MainPageMovieCarousel
        article={<DualColourSpan whiteText="Топ" orangeText="онлайн" />}
        carouselData={
          <NavTabs data={TopOnlineData} defaultTab={0} sx={{ margin: { mobileS: "0", laptop: "0 0 50px 0" } }} />
        }
        sx={{ margin: { mobileS: "0 0 40px 0", laptop: "0 0 30px 0" } }}
      />
      <MainPageMovieCarousel
        article={<DualColourSpan whiteText="Топ" orangeText="подборок" />}
        carouselData={TopSelectionsData}
        sx={{ margin: { mobileS: "0 0 40px 0", laptop: "0 0 30px 0" } }}
      />
      <MainPageMovieCarousel
        article={<DualColourSpan whiteText="Новости" orangeText="кино" />}
        carouselData={NewsData}
        sx={{ margin: { mobileS: "0 0 40px 0", laptop: "0 0 30px 0" } }}
      />
      <MainPageMovieCarousel
        carouselData={TopPopularData}
        article={<DualColourSpan whiteText="Топ" orangeText="популярных" />}
        divider={false}
        sx={{ margin: 0 }}
      />
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
