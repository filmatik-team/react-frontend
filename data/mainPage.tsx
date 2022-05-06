import MovieCard, { MovieCardData } from "../components/common/Movies/MovieCard";
import { CarouselProps } from "../components/ui/Carousel/Carousel";
import NewsCard, { NewsCardData } from "../components/common/News/NewsCard";

export interface MainPageBannerCarouselData {
  image: string;
  title: string;
  url: string;
}

export const MainPageBannerCarouselViewData: MainPageBannerCarouselData[] = [
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

export const filmCarouselViewData: MovieCardData[] = [
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
    image: "",
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

export const topPremieresData: CarouselProps[] = [
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

export const topOnlineData: CarouselProps[] = [
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

export const topSelectionsData: CarouselProps = {
  component: MovieCard,
  data: filmCarouselViewData,
};

export const newsViewData: NewsCardData[] = [
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

export const newsData: CarouselProps = {
  component: NewsCard,
  data: newsViewData,
};

export const topPopularData: CarouselProps = {
  component: MovieCard,
  data: filmCarouselViewData,
};
