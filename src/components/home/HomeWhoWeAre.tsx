import Image from "next/image";

export default function HomeWhoWeAre({ whoWeAre }: any) {
    return (
        <div className="bg-secondary text-primary-content">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6 max-w-[90%] md:max-w-3xl lg:max-w-6xl mx-auto py-6 md:py-12">
                <div>
                    <Image width={600} height={600} alt="" src="/images/PLPL_HomeWhoWeAre.jpg" className="w-full h-full object-cover rounded-lg shadow-2xl" />
                </div>
                <div className="flex justify-center items-center">
                    <div>
                        <h1 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase">What We Are Today</h1>
                        <p className="font-medium leading-5 md:leading-6 lg:leading-8 text-xs md:text-sm lg:text-base">
                            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quae aperiam explicabo, eveniet odio aliquid nisi quia esse facilis quos, accusamus itaque numquam placeat praesentium blanditiis delectus ipsam suscipit recusandae neque quam animi tempore. Fugiat iste architecto voluptates cumque aliquid consequatur dolor sunt perspiciatis non, quis nobis dicta vel fugit, odio omnis molestiae iure voluptatum eligendi commodi quia maxime perferendis reprehenderit?
                        </p>
                        <ul className="list-disc leading-5 md:leading-6 lg:leading-10 ml-4 text-xs md:text-sm lg:text-base font-medium mt-2">
                            <li>Lorem ipsum dolor sit amet consectetur.</li>
                            <li>Dolor sit amet Lorem ipsum dolor sit amet consectetur.</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, facilis.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
