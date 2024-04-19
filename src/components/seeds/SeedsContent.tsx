import OurClients from "./OurClients";
import SeedsCarousel from "./SeedsCarousel";
import SeedsCounter from "./SeedsCounter";
import SeedsExpertise from "./SeedsExpertise";
import SeedsHeader from "./SeedsHeader";
import SeedsServices from "./SeedsServices";
import SeedsWhoWeAre from "./SeedsWhoWeAre";
import SeedsWhyChooseUs from "./SeedsWhyChooseUs";

export default function SeedsContent() {
  const bannerImages = ['/images/seeds_banner1.jpg', '/images/seeds_banner2.jpg', '/images/seeds_banner3.jpg']
  const whoWeAre = [
    {id:1,titleOne:'Who we are',paragraph:'PLPL Seeds Pvt. Ltd. (PLPL) is India’s largest outsourced partner in the Seed Processing domain, delivering end-to-end turnkey solutions to global Seed companies.',titleTwo:'Our Journey from Seeds to Global Reach',description:'Our journey began in 1978, supplying seeds to Indian Public Sector Seed companies. By 1982, we excelled in Jute Seed production and marketing in India and Bangladesh. We expanded into contract seed production and collaborated with Monsanto for modern Corncob processing in 1999. From 2000 to 2014, we established advanced seed processing facilities and R&D capabilities. In 2015, we went global with a high-tech Corncob drying facility in the Philippines and plan further expansion in Southeast Asia. Our journey reflects our commitment to innovative excellence in agriculture, making a positive global impact.'}
  ]
  const whoWeAreImg = [{id:1,image:'/images/seed_whoweare.jpg'}]

  return (<>
    <SeedsCarousel bannerImages={bannerImages}/>
    <SeedsWhyChooseUs />
    <SeedsCounter />
    <SeedsWhoWeAre whoWeAre={whoWeAre} whoWeAreImg={whoWeAreImg}/>
    <SeedsServices />
    <OurClients />
    <SeedsExpertise />
  </>)
}