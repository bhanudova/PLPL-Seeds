import FoodCarousel from "./FoodCarousel";
import FoodCounter from "./FoodCounter";
import FoodExpertise from "./FoodExpertise";
import FoodHeader from "./FoodHeader";
import FoodServices from "./FoodServices";
import FoodWhoWeAre from "./FoodWhoWeAre";
import FoodWhyChooseUs from "./FoodWhyChooseUs";

export default function FoodContent() {
  return (<>
    <FoodCarousel />
    <FoodWhoWeAre />
    <FoodServices />
    <FoodWhyChooseUs />
    <FoodCounter />
    <FoodExpertise />
  </>)
}