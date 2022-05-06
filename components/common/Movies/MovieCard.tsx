import React from "react";
import { Box, Card, Link, Typography } from "@mui/material";
import { EyeCounter, HeartCounter, StarCounter } from "../../icons/counters";
import { GradientCoverGreen, GradientCoverRed, GradientCoverYellow } from "../../icons/movies/movieGradients";
import { MOVIE_CARD_MOBILE_MARGIN, MOVIE_CARD_MOBILE_WIDTH, TRANSITION_DEFAULT } from "../../../constants/constants";

/*Обложка фильма*/

export interface MovieCardData {
  image: string;
  title: string;
  url: string;
  rating: number;
  eyeCounter: number;
  heartCounter: number;
  starCounter: number;
}

interface MovieCardDataProps {
  data: MovieCardData;
  width: number;
  height: number;
  margin: string;
}

const MovieCard = ({ data, width, height, margin }: MovieCardDataProps) => {
  let GradientCoverComponent = Box;

  if (data.rating >= 70) {
    GradientCoverComponent = GradientCoverGreen;
  } else if (data.rating >= 55 && data.rating < 70) {
    GradientCoverComponent = GradientCoverYellow;
  } else if (data.rating > 0 && data.rating < 55) {
    GradientCoverComponent = GradientCoverRed;
  }

  return (
    <Card
      elevation={0}
      sx={{
        m: { mobileS: `0 ${MOVIE_CARD_MOBILE_MARGIN}px 0 0`, laptop: margin },
        position: "relative",
        outline: "none",
        border: 0,
        transition: TRANSITION_DEFAULT,
        flexShrink: 0,
        boxShadow: "none",
        backgroundImage: "none",
        backgroundColor: "inherit",
      }}>
      <Link
        sx={{
          position: "relative",
          display: "block",
          width: "100%",
          height: "100%",
          border: "solid 1px transparent",
          borderRadius: "8px",
          textDecoration: "none",
          cursor: "pointer",

          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: -1,
            m: "-1px",
            borderRadius: "inherit",
            background: "linear-gradient(135deg, #586e7d 0%, #273037 100%)",
          },
        }}>
        <Box
          component="img"
          src={data.image ? data.image : "https://filmatik.ru/resources/app/img/no-cover-movie-view.svg"}
          alt={data.title}
          sx={{
            width: { mobileS: `${MOVIE_CARD_MOBILE_WIDTH}px`, laptop: `${width - 2}px` },
            height: { mobileS: `${MOVIE_CARD_MOBILE_WIDTH * 1.5}px`, laptop: `${height - 2}px` },
            objectFit: "cover",
            borderRadius: "8px",
            borderStyle: "none",
            verticalAlign: "middle",
          }}
          loading="lazy"
        />
        {!data.image && (
          <Box
            sx={{
              position: "absolute",
              top: "5px",
              left: "5px",
              width: "calc(100% - 10px)",
              overflow: "hidden",
            }}>
            <Typography
              component="h4"
              sx={{
                position: "relative",
                width: "100%",
                mb: "5px",
                fontSize: "15px",
                overflow: "hidden",
                whiteSpace: "nowrap",
                textAlign: "center",
                color: "#DBDBDB",
                transition: TRANSITION_DEFAULT,

                "&:before": {
                  content: '""',
                  display: "block",
                  width: "15px",
                  height: "24px",
                  position: "absolute",
                  right: 0,
                  backgroundImage: "linear-gradient(to right, rgba(255, 255, 255, 0), #4F5D63 100%)",
                },
              }}>
              {data.title}
            </Typography>
          </Box>
        )}
        <Box
          sx={{
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 1,
            width: "100%",
            height: "100%",
            borderRadius: "7.6px !important",
            borderStyle: "none",
            transition: "all 0.1s ease",
            backgroundColor: data.rating === 0 ? "rgba(0, 0, 0, 0.45)" : "rgba(0, 0, 0, 0.65)",
            opacity: 0,

            ":hover": {
              opacity: 1,
            },
          }}>
          {data.rating > 0 && (
            <>
              <GradientCoverComponent />
              <Box
                component="p"
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: 0,
                  width: "100%",
                  m: 0,
                  color: "#fff",
                  fontSize: { mobileS: "24px", laptop: "30px", desktop: "36px" },
                  textAlign: "center",
                }}>
                {data.rating}%
              </Box>
            </>
          )}
          <Box
            sx={{
              position: "absolute",
              bottom: 0,
              display: { mobileS: "none", laptop: "flex" },
              alignItems: "center",
              justifyItems: "center",
              justifyContent: "space-between",
              width: "100%",
              height: "20%",
              p: { mobileS: "0 10px", desktop: "0 15px" },
              fontSize: { mobileS: "13px", desktop: "15px" },
              lineHeight: 1.2,
              color: "#d2d2d2",
              zIndex: 2,
              borderRadius: "0 0 8px 8px",
              transition: TRANSITION_DEFAULT,
              background:
                "linear-gradient(0deg, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0.7) 20%, rgba(0, 0, 0, 0.6) 40%, " +
                "rgba(0, 0, 0, 0.5) 50%, rgba(0, 0, 0, 0.4) 60%, rgba(0, 0, 0, 0.3) 70%, rgba(0, 0, 0, 0.2) 80%," +
                "rgba(0, 0, 0, 0.1) 90%, rgba(0, 0, 0, 0) 100%)",
            }}>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}>
              <EyeCounter />
              <span>{data.eyeCounter}</span>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}>
              <HeartCounter />
              <span>{data.heartCounter}</span>
            </Box>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
              }}>
              <StarCounter />
              <span>{data.starCounter}</span>
            </Box>
          </Box>
        </Box>
      </Link>
    </Card>
  );
};

export default MovieCard;
