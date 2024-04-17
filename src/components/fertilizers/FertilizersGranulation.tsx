import Image from "next/image";
import { GoDotFill } from "react-icons/go";

export default function FertilizersGranulation() {
  return (<>
    <div>
      <div className="relative w-full h-full">
        <Image src={'/images/GranulationExcellence_Banner.jpg'} width={500} height={500} alt="LushHarvest_Banner" className="w-full h-[20rem] md:h-[28rem] object-cover" />
        <div className="absolute top-0 left-0 w-full h-full bg-black/75"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <div className="w-[24rem] md:w-[50rem] lg:w-[60rem]">
            <h3 className="text-2xl md:text-5xl lg:text-6xl font-bold">
              Granulation Technology
            </h3>
            <p className="text-sm md:text-xl lg:text-2xl mx-2 md:mx-0 font-medium mt-4">
              Unlock the potential of your crops with our advanced granulation methods at PLPL Seeds. We intricately craft granules from premium raw materials, providing your crops with the precise nutrients they need for optimal growth and vitality.
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center bg-[#E5E5E5] text-black p-2 md:p-10 pt-10 pb-10">
        <div>
          <h2 className="text-center text-2xl md:text-4xl font-bold">Fertilizers and Granulation</h2>
          <div className="flex justify-center items-center mt-2">
            <p className="text-center w-full md:px-10 lg:px-0 md:w-[50rem]">
              Explore our range of advanced fertilizers and granulation solutions designed to optimize crop nutrition and promote sustainable farming practices. PLPL Seeds is committed to delivering innovative and high-quality fertilizers to support farmers in achieving maximum yields while minimizing environmental impact.
            </p>
          </div>
          <div className="flex justify-center items-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mt-6 p-6 md:p-0">
              {/* Category 1: Fertilizer Types */}
              <div className="border bg-white w-full lg:w-[18rem] rounded-md shadow">
                <div className="bg-[#3aadf9] p-4 rounded-t-md">
                  <h2 className="text-white font-semibold text-xl">Fertilizer Types</h2>
                </div>
                <div className="p-2">
                  <h2 className="flex font-semibold"><GoDotFill className="text-2xl text-lime-400	" />Nitrogen-based Fertilizers</h2>
                  <h2 className="flex font-semibold"><GoDotFill className="text-2xl text-lime-400	" />Phosphorus-based Fertilizers</h2>
                  <h2 className="flex font-semibold"><GoDotFill className="text-2xl text-lime-400	" />Potassium-based Fertilizers</h2>
                  {/* Add more fertilizer types */}
                </div>
              </div>

              {/* Category 2: Granulation Technology */}
              <div className="border bg-white w-full lg:w-[18rem] rounded-md shadow">
                <div className="bg-[#3A50F9] p-4 rounded-t-md">
                  <h2 className="text-white font-semibold text-xl">Granulation Technology</h2>
                </div>
                <div className="p-2">
                  <h2 className="flex font-semibold"><GoDotFill className="text-2xl text-indigo-500" />Dry Granulation</h2>
                  <h2 className="flex font-semibold"><GoDotFill className="text-2xl text-indigo-500" />Wet Granulation</h2>
                  <h2 className="flex font-semibold"><GoDotFill className="text-2xl text-indigo-500" />Benefits of Granulation</h2>
                  {/* Add more granulation technology details */}
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>


      <div className="bg-white text-black py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-4xl font-bold mb-6 text-center">Our Fertilizers and Granulation</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Fertilizer Category 1 */}
            <div className="border bg-gray-100 p-6 rounded-md">
              <h3 className="text-xl font-semibold mb-4">Nitrogen-based Fertilizers</h3>
              <p>Our nitrogen-based fertilizers are formulated to provide essential nutrients for optimal plant growth and development.</p>
            </div>

            {/* Fertilizer Category 2 */}
            <div className="border bg-gray-100 p-6 rounded-md">
              <h3 className="text-xl font-semibold mb-4">Phosphorus-based Fertilizers</h3>
              <p>Enhance the phosphorus levels in your soil with our specialized fertilizers, promoting strong root development and overall plant health.</p>
            </div>

            {/* Fertilizer Category 3 */}
            <div className="border bg-gray-100 p-6 rounded-md">
              <h3 className="text-xl font-semibold mb-4">Potassium-based Fertilizers</h3>
              <p>Improve plant resistance to diseases and stress with our potassium-rich fertilizers, designed for optimal crop yield and quality.</p>
            </div>
            {/* Add more fertilizer categories as needed */}
          </div>


          <div className="mt-12 bg-white text-black py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-2xl md:text-4xl font-bold  text-center">Granulation Technology</h2>
              <p className="text-center my-2">Our advanced granulation processes ensure the efficient and controlled release of nutrients, promoting sustained plant growth.</p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Benefit 1 */}
                <div className="flex items-center p-6 bg-gray-100 rounded-md">
                  <div className="mr-4">
                    <Image src={'/images/promotes_healthier_plants.jpg'} width={200} height={200} alt="promotes_healthier_plants" className="rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Promotes Healthier Plants</h3>
                    <p>Our fertilizers are designed to promote healthier plants, leading to improved crop yield and quality.</p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="flex items-center p-6 bg-gray-100 rounded-md">
                  <div className="mr-4">
                    <Image src={'/images/customized_formulations.jpg'} width={200} height={200} alt="customized_formulations" className="rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Customized Formulations</h3>
                    <p>We offer customized formulations to meet the specific requirements of different crops, ensuring optimal results.</p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="flex items-center p-6 bg-gray-100 rounded-md">
                  <div className="mr-4">
                    <Image src={'/images/enhanced_nutrient_absorption.jpg'} width={200} height={200} alt="enhanced_nutrient_absorption" className="rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Enhanced Nutrient Absorption</h3>
                    <p>Our granulation technology enhances nutrient absorption, maximizing the benefits for plant growth.</p>
                  </div>
                </div>
                <div className="flex items-center p-6 bg-gray-100 rounded-md">
                  <div className="mr-4">
                    <Image src={'/images/environmentally_friendly.jpg'} width={200} height={200} alt="environmentally_friendly" className="rounded-full" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Environmentally Friendly</h3>
                    <p>We prioritize environmentally friendly granulation methods, reducing ecological impact while ensuring effectiveness.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  </>)
}