import React from "react";
import { Box, Card, CardContent, CardMedia, Link, Stack, Typography } from "@mui/material";
import { NewsComment } from "../../icons/comments";

/*Обложка новости*/

export interface NewsCardData {
  image: string;
  title: string;
  url: string;
  date: string;
  commentsCount: number;
}

interface NewsCardProps {
  data: NewsCardData;
  width: string;
  margin: string;
}

export function NewsCard({ data, width, margin }: NewsCardProps) {
  const NewsCardMobileWidth = 285;
  const NewsCardMobileMargin = 10;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        width: { mobileS: `${NewsCardMobileWidth}px`, laptop: width },
        m: { mobileS: `0 ${NewsCardMobileMargin}px 0 0`, laptop: margin },
        background: "rgba(0, 0, 0, 0.15)",
        flexShrink: 0,
        borderRadius: "5px",
      }}>
      <Link href="" sx={{ display: "block", mb: "10px" }}>
        <CardMedia
          component="img"
          alt={data.title}
          width="100%"
          height="100%"
          image={data.image}
          sx={{
            borderRadius: "5px 5px 0 0",
          }}
        />
      </Link>
      <CardContent
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          p: "0 15px 10px 15px",
        }}>
        <Link
          href=""
          sx={{
            display: "block",
            color: "#dbdbdb",
            marginBottom: "20px",
            flexGrow: 1,

            ":hover": {
              color: "#fff",
            },
          }}>
          <Typography variant="h5" component="h5" sx={{ fontSize: "16px" }}>
            {data.title}
          </Typography>
        </Link>
        <Stack
          direction="row"
          justifyContent="space-between"
          sx={{
            fontSize: "14px",
            color: "#868686",
            whiteSpace: "nowrap",
          }}>
          <Typography>{data.date}</Typography>
          <Box sx={{ display: "flex" }}>
            <Link
              href=""
              sx={{
                display: "flex",
                alignItems: "center",
                pl: "10px",
                color: "#757575",
                transition: process.env.NEXT_PUBLIC_TRANSITION_DEFAULT,

                ":hover": {
                  color: "#999",
                },
              }}>
              <NewsComment />
              <Typography>{data.commentsCount}</Typography>
            </Link>
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
}
