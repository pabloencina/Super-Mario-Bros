import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import VideoCard from "./VideoCard";
import videosData from "../../Data/videosData";

const VideoById = () => {
  return (
    <Container className="videoById__container">
      <Container className="videoById__container_title">
        <p className="videoById__title">
          ESTOS SON LOS VIDEOS PREFERIDOS PARA COMPARTIR CON MIS AMIGOS
        </p>
      </Container>
      <Row>
        {videosData.map((video) => {
          return (
            <Col md={6} style={{ marginBottom: "25px" }}>
              {/* <CardCharacters key={character.id} character={character} /> */}
              <VideoCard key={video.id_video} video={video} />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
};

export default VideoById;
