import { CheckCircle } from "@mui/icons-material";
import {
  Avatar,
  Card,
  CardContent,
  CardMedia,
  Stack,
  Typography,
} from "@mui/material";
import { Link } from "react-router-dom";
import { colors } from "../../constants/colors";

const VideoCard = ({ video }) => {
  return (
    <Card
      sx={{
        width: { xs: "90%", sm: "360px", md: "310px" },
        boxShadow: "none",
        borderRadius: 2,
        marginX: { xs: "auto", md: 0 },
      }}
    >
      <Link to={`/video/${video.id.videoId}`}>
        <CardMedia
          sx={{ width: { xs: "100%", sm: "360px" } }}
          component="img"
          height="180"
          image={video.snippet.thumbnails.high.url}
          alt={video.snippet.title}
        />
      </Link>
      <CardContent
        sx={{
          background: colors.primary,
          height: "230px",
          position: "relative",
        }}
      >
        <Link to={`/video/${video.id.videoId}`}>
          <Typography my={"5px"} sx={{ opacity: ".4" }}>
            {video.snippet.publishedText}
          </Typography>
          <Typography variant="subtitle1" fontWeight={"bold"}>
            {video.snippet.title.slice(0, 50)}
          </Typography>
          <Typography variant="subtitle2" sx={{ opacity: ".6 " }}>
            {video.snippet.description.slice(0, 100)}
          </Typography>
        </Link>
        <Link to={`/channel/${video.snippet.channelId}`}>
          <Stack
            direction={"row"}
            position={"absolute"}
            bottom={"5px"}
            alignItems={"center"}
            gap={"5px"}
          >
            <Avatar src={video.snippet.thumbnails.high.url} />
            <Typography variant={"subtitle2"} color={"grey"}>
              {video.snippet.channelTitle}
              <CheckCircle
                sx={{ fontSize: "12px", color: "gray", ml: "5px" }}
              />
            </Typography>
          </Stack>
        </Link>
      </CardContent>
    </Card>
  );
};

export default VideoCard;
