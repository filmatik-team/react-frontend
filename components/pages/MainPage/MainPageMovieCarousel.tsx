import React from "react";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import { Box, Divider, Link, Stack, Typography } from "@mui/material";
import { ContainerStyled } from "../../lib/styling";

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
        {divider && <Divider sx={{ display: { mobileS: "none", laptop: "block" }, borderColor: "#2E3A42" }} />}
      </ContainerStyled>
    </Box>
  );
};

export default MainPageMovieCarousel;
