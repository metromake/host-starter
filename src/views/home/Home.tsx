import Front from "front_and_sidebar/Front";
import { useMediaContext } from "mediastore/contextHooks";

const Home = () => {
  const mediaItems = useMediaContext();
  return <Front mediaItems={mediaItems} />;
};

export default Home;
