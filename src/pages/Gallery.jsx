import { VideoGallery } from "../components";
import Gallery from "../components/gallery/Gallery";
import GalleryHeader from "../components/gallery/GalleryHeader";

const GalleryPage = ({ isDark }) => {
  return (
    <div>
      <GalleryHeader isDark={isDark} />
      <Gallery isDark={isDark} />
      <VideoGallery isDark={isDark} />
    </div>
  );
};

export default GalleryPage;
