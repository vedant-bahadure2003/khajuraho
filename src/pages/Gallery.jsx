import Gallery from "../components/gallery/Gallery";

const GalleryPage = ({ isDark }) => {
  return (
    <div className="pt-20">
      <Gallery isDark={isDark} />
    </div>
  );
};

export default GalleryPage;
