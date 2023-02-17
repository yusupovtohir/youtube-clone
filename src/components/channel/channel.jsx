import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ApiService } from "../../service/api-service";
import { ChannelCard, Videos } from "../";

const Channel = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState();
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const dataChannelDetail = await ApiService.fetching(
          `channels?part=snippet&id=${id}`
        );
        setChannelDetail(dataChannelDetail.items[0]);
        const dataVideos = await ApiService.fetching(
          `search?channelId=${id}&part=snippet%2Cid&order=date`
        );
        setVideos(dataVideos.items);
      } catch (error) {
        console.log(error);
      }
    };

    getData();
  }, [id]);
  return (
    <Box minHeight={"95vh"} mt={"1vh"}>
      <Box>
        <Box
          width={"100%"}
          height={"200px"}
          sx={{
            background: `url(${channelDetail?.brandingSettings?.image?.bannerExternalUrl})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat'
          }}
        />
        <ChannelCard video={channelDetail} marginTop={'-100px'}/>
      </Box>
      <Container>
        <Videos videos={videos}/>
      </Container>
    </Box>
  );
};

export default Channel;
