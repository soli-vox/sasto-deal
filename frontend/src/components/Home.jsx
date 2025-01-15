import LatestProducts from "./LatestProducts";
import FeaturedProducts from "./FeaturedProducts";
import HeroSection from "./common/HeroSection";
import MainLayout from "./common/MainLayout";

const Home = () => {
  return (
    <>
      <MainLayout>
        <HeroSection />
        <LatestProducts />
        <FeaturedProducts />
      </MainLayout>
    </>
  );
};

export default Home;
