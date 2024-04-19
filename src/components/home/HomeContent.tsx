import HomeAddress from "./HomeAddress";
import HomeBox from "./HomeBox";
import HomeCarousel from "./HomeCarousel";
import HomeServices from "./HomeServices";
import HomeWhoWeAre from "./HomeWhoWeAre";
import HomeWhyChooseUs from "./HomeWhyChooseUs";


const images = ['/images/home_banner1.jpg', '/images/home_banner2.jpg', '/images/home_banner3.jpg']

const whoWeAre = [{ id: 1, title: 'What are we today?', paragraph: "PLPL Seeds Pvt. Ltd. (PLPL) is India’s largest seed processing outsourcing partner, delivering end-to-end turnkey solutions to global Seed companies. For over 30 years, PLPL has been providing state-of-the-art Seed Processing infrastructure facilities meeting the highest quality standards of our customers while maintaining economies of scale. PLPL's core business expertise includes customized production, processing, packaging, storing, and distribution. Our expertise has expanded to include tissue culture, food processing, and high-quality fertilizers.", image: '/images/home_whatweare.jpg' }]

const servicesHeader = [{ id: '1', logo: '/images/home_service_logo.png', title_one: 'OUR SERVICES LIST', title_two: 'What We’re Offering' }]

const services = [
    { id: 1, link: '/fertilizers', cardImage: '/images/home_card1.jpg', cardLogo: '/images/home_card_logo1.png', title: 'Fertilizers', description: 'PLPL specializes in pioneering both customers and farmers by integrating fertilizers for improved crop yields and fostering sustainability for a more environmentally-friendly future.' },
    { id: 2, link: '/seeds', cardImage: '/images/home_card2.jpg', cardLogo: '/images/home_card_logo2.png', title: 'Seeds', description: 'PLPL excels in providing innovative seed processing solutions for customers and farmers, optimizing crop yields and sustainability for a greener future.' },
    { id: 3, link: '/food', cardImage: '/images/home_card3.jpg', cardLogo: '/images/home_card_logo3.png', title: 'Food', description: 'PLPL is a leading food processing company, transforming fresh ingredients into delicious and nutritious products that people love.' },
    { id: 4, link: '/tissueculture', cardImage: '/images/home_card4.jpg', cardLogo: '/images/home_card_logo4.png', title: 'Tissue Culture', description: ' PLPL is at the forefront of tissue culture technology, helping scientists cultivate new discoveries and improve human health with the development of hybrid plant varieties.' }
]
const WhyChooseUs = [{ id: '1', titleOne: 'Why', titleTwo: 'Choose Us', paragraph: 'PLPL offers a comprehensive range of agricultural products and services from seed production to fertilizer manufacturing to food processing to tissue culture.' }]
const WhyChooseGridOne = [
    { id: 1, image: '/images/home_why_high-quality.png', title: 'High-quality', description: 'PLPL employs advanced technology for top-quality products.' },
    { id: 2, image: '/images/home-why-expertise.jpg', title: 'Expertise', description: 'PLPL has over 30 years of experience in the agricultural industry.' },
    { id: 3, image: '/images/home_why_customer.png', title: 'Customer focus', description: 'PLPL is committed to providing tailored service and solutions.' },
    { id: 4, image: '/images/home_why_global-network.png', title: 'Global reach', description: 'PLPL has a global reach, with operations in multiple countries.' },
]
const WhyChooseGridTwo = [
    { id: 1, image: '/images/home-why-choose.jpg' }
]

const HomeBoxData = [
    { id: 1, image: '/images/home_innovation.jpg', position: 'order-first lg:order-first', title: 'Innovation and Global Expansion', description: `PLPL is India's largest transforming agricultural industry with technologies and innovative solutions. We achieved a leadership position in the Indian Seed processing industry. We have also expanded these infrastructure services in tissue culture, food processing, and high-quality fertilizers. We collaborate with national and international institutions to develop products that address farmers needs and enhance crop resilience to climate change and environmental stresses. We are dedicated to empowering farmers and shaping a more sustainable future for agriculture. PLPL has expanded its reach with extensions in multiple countries including India, Bangladesh, Vietnam, Indonesia, Singapore and the Philippines.` },
    { id: 2, image: '/images/home_fertilizer.jpg', position: 'order-first lg:order-last', title: 'Fertilizer Production Quality Control', description: ' Precision fertilizer production, coupled with stringent quality control measures, is indispensable to modern agriculture as it ensures that crops receive the precise nutrients required for their optimal growth. The manufacturing process, an engineering marvel, guarantees that each batch is nutrient-rich and highly effective, thus playing a pivotal role in enhancing the prosperity of farmers and agricultural communities globally.' },
    { id: 3, image: '/images/home_seeds.jpg', position: 'order-first lg:order-first', title: 'Providing Quality Seeds', description: 'Our Seed Division Providing Quality Seeds for Your Success. At PLPL our Seed Division is at the heart of our commitment to agriculture and horticulture. We understand that the quality of seeds is paramount to the success of any planting endeavor. That’s why we have dedicated ourselves to providing turnkey infrastructure installation and management services starting from land acquisition to capital equipment installation, ensuring the meticulous care and management of seeds from their very inception to the point of delivery.' },
    { id: 4, image: '/images/home_pioneer.jpg', position: 'order-first lg:order-last', title: 'A Pioneer in Food Processing', description: 'Welcome to Prasad Groups a trailblazing leader in the realm of food processing. With an unwavering commitment to excellence. PLPL has been at the forefront of preserving and enhancing the quality of agricultural produce for over three decades. Our journey began with a simple yet profound vision – to bridge the gap between the farm and the table offering consumers the freshest and most nutritious food products possible. Over the years, we’ve not only realized this vision but also raised the bar for the entire food processing industry.' },
    { id: 5, image: '/images/home_tissue_culture.jpg', position: 'order-first lg:order-first', title: 'Introduction to Tissue Culture', description: 'Introduction to Tissue Culture Prasad groups your one step towards a flourishing agricultural futurePLPL Groups is a leading company in tissue culture, offering advanced plant cell and tissue cultivation in a controlled laboratory setting. Our state-of-the-art facilities and expert team ensure efficient production of genetically identical plants across various species. We collaborate closely with clients to tailor our services to their specific needs, making us the preferred choice for agricultural producers and horticulturists seeking top-tier tissue culture services.Welcome to the fascinating realm of tissue culture.' },
    { id: 6, image: '/images/home_quality.jpg', position: 'order-first lg:order-last', title: 'Quality Management', description: 'PLPL, a premier outsourcing partner in the agricultural sector, offers comprehensive turnkey solutions to global Agri companies. With a legacy spanning over 30 years, PLPL has consistently delivered infrastructure for processing high-quality products that meet stringent quality standards while ensuring economies of scale. Our core business proficiency includes tailor-made solutions for production, processing, packaging, storage, and distribution, all while utilizing state-of-the-art equipment.' },
    { id: 7, image: '/images/home_vision.jpg', position: 'order-first lg:order-first', title: 'Vision', description: 'Our vision at PLPL is to be at the forefront of agricultural innovation, pioneering solutions that empower farmers and foster sustainable farming practices. We aspire to create a world where agriculture thrives in harmony with nature, where farmers have access to cutting-edge technologies and high-quality products, and where our commitment to environmental stewardship ensures a bountiful and resilient food supply for generations to come. Our relentless pursuit of excellence, unwavering dedication to farmers&#39; well-being, and a global outlook will continue to drive us as we work towards shaping a brighter, more sustainable future for agriculture.' },
    { id: 8, image: '/images/home_mission.jpg', position: 'order-first lg:order-last', title: 'Mission', description: 'Our mission is to deliver high-quality products and services to our customers, enhancing the well-being of the farming community, ensuring environmental sustainability, and fostering strong partnerships within the agricultural ecosystem. We aim to be a beacon of integrity and trust in the agricultural industry, setting the standard for customer-centric excellence and superior customer satisfaction through a individualized approach, all while upholding our company&#39;s spirit of excellence in customer service.Our ultimate goal is to improve the lives of farmers and stakeholders.' }
]


const address = [
    { id: 1, locationTitle: 'Our Location', Title: 'Group Corporate Office - Hyderabad, India', locationArea: 'Survey No. 000 Industrial Area,', locationVillage: 'PLPL (Village),', locationDistrict: 'PLPL District - 010101, Telangana, India.', phoneTitle: 'Phone', phoneNumber: '+91 9900990099', emailTitle: 'Email', emailOne: 'plpl@seeds.com' }
]

const addressForm = [
    { id: 1, title: 'Leave a message', btnName: 'Send Now' }
]

export default function MainContentProps() {
    return (<>
        <HomeCarousel images={images} />
        <HomeWhoWeAre whoWeAre={whoWeAre} />
        <HomeServices services={services} servicesHeader={servicesHeader} />
        <HomeWhyChooseUs WhyChooseUs={WhyChooseUs} WhyChooseGridOne={WhyChooseGridOne} WhyChooseGridTwo={WhyChooseGridTwo} />
        <HomeBox HomeBoxData={HomeBoxData} />
        <HomeAddress address={address} addressForm={addressForm} />
    </>)
}