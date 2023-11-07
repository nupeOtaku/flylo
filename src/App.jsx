import { EarlyAccesSection } from "./features/EarlyAccesSection";
import { FeatureSection } from "./features/FeatureSection";
import { Footer } from "./features/Footer";
import { HeaderSection } from "./features/HeaderSection";
import { HeroSection } from "./features/HeroSection";
import { ProductiveSection } from "./features/ProductiveSection";
import { Testimonials } from "./features/Testimonials";

const App = () => {
  return (
    <>
      {/* Header */}
      <HeaderSection />

      {/* Hero Section */}
      <HeroSection />

      {/* Feature Section */}
      <FeatureSection />

      {/* Productive Section */}
      <ProductiveSection />

      {/* Testimonials Section */}
      <Testimonials />

      {/* Early Access Section */}
      <EarlyAccesSection />

      {/* Footer Section */}
      <Footer />
    </>
  );
};

export default App;
