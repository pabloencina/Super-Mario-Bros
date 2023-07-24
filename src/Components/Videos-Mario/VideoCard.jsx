import { Button, Card } from "react-bootstrap";
import YouTube from "react-youtube";

const VideoCard = ({ video }) => {
  return (
    <Card className="videos__container_youtube">
      <Button style={{ backgroundColor: "transparent", border: "none" }}>
        <div className="videos__container_letters">
          <p className="videos__letters">{video.letter}</p>
        </div>
      </Button>
      <YouTube id_video={video.id_video}>{video.id_video}</YouTube>
    </Card>
  );
};

export default VideoCard;
