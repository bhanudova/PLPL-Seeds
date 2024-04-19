import FertilizersCarousel from "./FertilizersCarousel";
import FertilizersExpertise from "./FertilizersExpertise";
import FertilizersServices from "./FertilizersServices";
import FertilizersWhoWeAre from "./FertilizersWhoWeAre";
import FertilizersWhyChooseUs from "./FertilizersWhyChooseUs";

const bannerImages = ['/images/fertilizer_banner1.jpg', '/images/fertilizer_banner2.jpg', '/images/fertilizer_banner3.jpg']
const whoWeAre = [{ id: 1, image: '/images/fertilizers_who-we-are.jpg', titleOne: 'Who', titleTwo: 'We Are', paragraph: 'Prasad Groups, with over 30 years of experience, is a global leader in sustainable agriculture. We offer a diverse portfolio of innovative and efficient fertilizers and crop protection products. Our mission is to empower farmers and clients worldwide, enabling them to optimize crop yields and profitability. We are currently expanding our services to partners in Asia and Africa, including infrastructure and chemicals. With an investment of $100 million in the Indian agro sector, our commitment to sustainable agriculture is further strengthened, as we contribute to the growth and development of agriculture, ensuring food security and economic prosperity in the region. Our strategic investment in the Indian agro sector underscores our dedication to fostering innovation and sustainable practices that will drive the future of agriculture globally and benefit farming communities across the nation.' }]
const servicesMain = [{ id: 1, title: 'Our Services', paragraph: 'PLPL is Your Trusted Partner for All Fertilizer Needs and Services' }];
const serviceBox = [
    { id: 1, image: '/images/fertilizer_prod_logo.png', title: 'Fertilizer Production', paragraph: 'We offer a wide range of fertilizers, including nitrogen, phosphorus, and potassium-based to meet your agricultural needs.' },
    { id: 2, image: '/images/fertilizer_pd_logo.png', title: 'Product Development', paragraph: 'We invest in research and development to create new and improved fertilizer products that enhance crop yield.' },
    { id: 3, image: '/images/fertilizer_quality_logo.png', title: 'Quality Products PLPL    ', paragraph: 'We maintain rigorous quality control and testing processes to meet all regulatory standards' },
    { id: 4, image: '/images/fertilizer_es_Logo.png', title: 'Environmental Stewardship', paragraph: 'At PLPL, we are dedicated to promote sustainable and eco-friendly fertilizer usage through our services.' }
]

const whyChooseUs = [{ id: 1, title: 'WHY CHOOSE US', paragraph: 'We prioritize sustainable practices, contributing to a greener future for agriculture, making us the eco-friendly choice for your fertilizer needs.' }];
const whyChooseUsBox = [
    { id: 1, image: '/images/fertilizers_why_quality.png', title: 'Quality that Endures', paragraph: 'We provide high-quality fertilizers for sustained, healthy plant growth.' },
    { id: 2, image: '/images/fertilizers_why_lasting.png', title: 'Lasting Value', paragraph: 'Competitive pricing without compromising quality ensures enduring benefits for your crops.' },
    { id: 3, image: '/images/fertilizers_why_reliable.png', title: 'Reliable Availability', paragraph: 'Absolutely, trust in our unwavering commitment to provide reliable product availability, even during peak seasons.' },
    { id: 4, image: '/images/fertilizers_why_cultivation.png', title: 'Cultivation Excellence', paragraph: 'We are dedicated to helping you achieve long-term success in cultivation.' }
]

const expertiseTitle = [{ id: 1, title: 'We have expertise in these areas' }]
const expertiseBox = [
    { id: 1, image: '/images/fertilizer_card1.jpg', title: 'Precision Fertilizer Production with Quality Control', paragraph: 'fertilizers are essential to modern agriculture, providing crops with the precise nutrients they need to thrive. Their manufacturing process is a marvel of engineering, ensuring that each batch is nutrient-rich and effective, ultimately contributing to the growth and prosperity of farmers and agricultural communities worldwide.' },
    { id: 2, image: '/images/fertilizer_card2.jpg', title: 'Securing the Building Blocks of Fertilizer Production', paragraph: 'The journey of crafting fertilizers lies in the meticulous procurement of essential raw materials. This crucial phase involves sourcing a variety of vital components, with common examples including ammonia, sulfur, phosphate rock, and potash, among others. The quality and availability of these raw materials form the foundation upon which the entire process of fertilizer production depends, ensuring the consistent and reliable supply of nutrients vital to modern agriculture.' },
    { id: 3, image: '/images/fertilizer_card3.jpg', title: 'Harmonizing Nutrient Symphony Mixing and Blending', paragraph: 'In this crucial stage of fertilizer production, precision is paramount. Mixing and blending operations combine the various nutrient compounds and raw materials to create homogeneous and balanced fertilizer formulations. This meticulous process ensures that each fertilizer batch delivers a harmonious blend of essential nutrients, tailored to provide crops with precisely what they need for optimal growth and yield.' },
    { id: 4, image: '/images/fertilizer_card4.jpg', title: 'Refining Raw Materials into Essential Nutrient Compounds', paragraph: 'During the chemical processing phase, undergo intricate transformations to yield the desired nutrient compounds critical for synthetic fertilizers. For instance, ammonia can be harnessed to create urea, a prevalent nitrogen-based synthetic fertilizer. Additionally, phosphate rock can be subjected to sulfuric acid treatment, resulting in the formation of phosphate fertilizers, all pivotal steps in crafting fertilizers tailored to meet the precise nutrient needs of crops.' },
    { id: 5, image: '/images/fertilizer_card5.jpg', title: 'Transforming Fertilizer Mix into Manageable Pellets', paragraph: ' Granulation is a crucial step in fertilizer production, where the homogeneous fertilizer mixture is transformed into manageable pellets or granules. These granules offer advantages like improved handling, controlled nutrient release, reduced dust, and uniform nutrient distribution, making them a preferred choice for farmers. Various techniques, such as rotary drum granulation and prilling, are employed to achieve this transformation, enhancing the convenience and effectiveness of delivering essential nutrients to crops.' },
    { id: 6, image: '/images/fertilizer_card6.jpg', title: 'Moisture Reduction and Temperature Control', paragraph: 'The fertilizer production process, the granulated fertilizer is meticulously dried to reduce moisture content, with precise temperature control being paramount to the success of the operation. Following drying, the fertilizer is then carefully cooled to a specific temperature, ensuring optimal product stability for storage and transportation. These temperature-controlled processes are essential to maintain the quality.' },
    { id: 7, image: '/images/fertilizer_card7.jpg', title: 'Achieving Consistency and Quality', paragraph: 'The processes of sorting and separating fertilizer particles into different sizes or grades. This is done to ensure that the fertilizer is uniform and meets specific quality standards. During sizing, larger and smaller particles are separated, and during screening, impurities or foreign materials are removed. This helps in producing fertilizers that can be evenly spread and absorbed by plants, ensuring effective and consistent nutrient delivery for better crop growth.' },
    { id: 8, image: '/images/fertilizer_card8.jpg', title: 'Advanced Packaging and Distribution Systems', paragraph: 'Our Packaging facilities and robust distribution network are unparalleled in the industry, allowing us to provide value to the community at every step of the way. The finished fertilizer is packaged into bags, containers, or bulk shipments and distributed to retailers, farmers, or end-users for application.' },
]

export default function FertilizersContent() {
    return (<>
        <FertilizersCarousel bannerImages={bannerImages} />
        <FertilizersWhoWeAre whoWeAre={whoWeAre} />
        <FertilizersServices servicesMain={servicesMain} serviceBox={serviceBox} />
        <FertilizersWhyChooseUs whyChooseUs={whyChooseUs} whyChooseUsBox={whyChooseUsBox} />
        <FertilizersExpertise expertiseTitle={expertiseTitle} expertiseBox={expertiseBox} />
    </>)
}