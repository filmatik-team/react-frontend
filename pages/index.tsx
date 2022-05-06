import React from "react";
import { Stack, Box } from "@mui/material";
import { DualColourSpan } from "../components/lib/styling";
import { FTabPanel, FTabsListStyled } from "../components/ui/Tabs/Tabs";
import Carousel from "../components/ui/Carousel/Carousel";
import { TabStyled } from "../components/ui/Tabs/Tabs-styles";
import { TabsUnstyled } from "@mui/base";
import { NEWS_CAROUSEL_MARGIN, NEWS_CAROUSEL_VISIBLE } from "../constants/constants";
import { UserLoggedInContext, UserSubscriptionsContext } from "../context/user/UserContexts";
import {
  MainPageBannerCarouselViewData,
  newsData,
  topOnlineData,
  topPopularData,
  topPremieresData,
  topSelectionsData,
} from "../data/mainPage";
import MainPageMovieCarousel from "../components/pages/MainPage/MainPageMovieCarousel";
import MainPageBannerCarousel from "../components/pages/MainPage/MainPageBannerCarousel";

const Home = () => {
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
        sx={{ m: { mobileS: "0 0 40px 0", laptop: "0 0 30px 0" } }}>
        <TabsUnstyled
          component={Box}
          value={topPremieresValue}
          onChange={handleChangeTopPremieres}
          sx={{ m: { mobileS: "0", laptop: "0 0 50px 0" } }}>
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
        sx={{ m: { mobileS: "0 0 40px 0", laptop: "0 0 30px 0" } }}>
        <TabsUnstyled
          component={Box}
          value={topOnlineValue}
          onChange={handleChangeTopOnline}
          sx={{ m: { mobileS: "0", laptop: "0 0 50px 0" } }}>
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
        sx={{ m: { mobileS: "0 0 40px 0", laptop: "0 0 30px 0" } }}>
        <Carousel {...topSelectionsData} sx={{ m: { mobileS: "0", laptop: "0 0 50px 0" } }} />
      </MainPageMovieCarousel>
      <MainPageMovieCarousel
        article={<DualColourSpan whiteText="Новости" orangeText="кино" />}
        sx={{ m: { mobileS: "0 0 40px 0", laptop: "0 0 30px 0" } }}>
        <Carousel
          {...newsData}
          cardsVisible={NEWS_CAROUSEL_VISIBLE}
          cardsMargin={NEWS_CAROUSEL_MARGIN}
          cardsScrollStep={NEWS_CAROUSEL_MARGIN - 1}
          sx={{ m: { mobileS: "0", laptop: "0 0 50px 0" } }}
        />
      </MainPageMovieCarousel>
      <MainPageMovieCarousel
        article={<DualColourSpan whiteText="Топ" orangeText="популярных" />}
        divider={false}
        sx={{ m: 0 }}>
        <Carousel {...topPopularData} />
      </MainPageMovieCarousel>
    </Stack>
  );
};

export default Home;
