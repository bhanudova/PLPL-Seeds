import TissueCultureCarousel from "./TissueCultureCarousel";
import TissueCultureExpertise from "./TissueCultureExpertise";
import TissueCultureHeader from "./TissueCultureHeader";
import TissueCultureService from "./TissueCultureService";
import TissueCultureWhoWeAre from "./TissueCultureWhoWeAre";
import TissueCultureWhyChooseUs from "./TissueCultureWhyChooseUs";

export default function TissueCultureContent() {
    return (<>
        <TissueCultureCarousel />
        <TissueCultureWhyChooseUs />
        <TissueCultureWhoWeAre />
        <TissueCultureService />
    </>)
}