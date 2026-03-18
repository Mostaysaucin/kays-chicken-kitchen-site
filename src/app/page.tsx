import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Story from "@/components/Story";
import Menu from "@/components/Menu";
import SignatureSauce from "@/components/SignatureSauce";
import Reviews from "@/components/Reviews";
import Instagram from "@/components/Instagram";
import Locations from "@/components/Locations";
import Catering from "@/components/Catering";
import OrderCTA from "@/components/OrderCTA";
import Footer from "@/components/Footer";
import MobileStickyBar from "@/components/MobileStickyBar";
import ClientProviders from "@/components/ClientProviders";
import LocationPicker from "@/components/LocationPicker";

export default function Home() {
  return (
    <ClientProviders>
      <Header />
      <main id="main-content">
        {/* Section 1: Hero - Dark */}
        <Hero />
        {/* Section 2: Story - Warm Off-White */}
        <Story />
        {/* Section 3: Menu - Dark */}
        <Menu />
        {/* Section 4: Signature Sauce - Red Band */}
        <SignatureSauce />
        {/* Section 5: Reviews - Dark */}
        <Reviews />
        {/* Section 6: Instagram - Warm Off-White */}
        <Instagram />
        {/* Section 7: Locations - Warm Off-White */}
        <Locations />
        {/* Section 8: Catering - Dark */}
        <Catering />
        {/* Section 9: Order CTA - Red Band */}
        <OrderCTA />
      </main>
      {/* Section 10: Footer - Dark */}
      <Footer />
      {/* Mobile Sticky Bottom Bar */}
      <MobileStickyBar />
      {/* Location Picker Modal */}
      <LocationPicker />
    </ClientProviders>
  );
}
