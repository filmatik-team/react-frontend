import { MainPageBannerCarouselData } from "../../../data/mainPage";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import React from "react";
import { UserLoginModalContext } from "../../../context/user/UserContexts";
import { useSwipeable } from "react-swipeable";
import { Box, Fade, Link, Typography } from "@mui/material";
import { ContainerStyled } from "../../lib/styling";
import { BannerSeparator } from "../../icons/mainPage";
import { LargeBackwardNavigationArrow, LargeForwardNavigationArrow } from "../../icons/arrows";
import FButton from "../../ui/Buttons/FilmatikButton";

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
          alt={current.title}
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

export default MainPageBannerCarousel;
