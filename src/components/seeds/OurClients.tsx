import Image from "next/image"

export default function OurClients() {
    return (<>
        <div className="bg-accent text-primary-content py-12">
            <div className="max-w-[90%] md:max-w-3xl lg:max-w-6xl mx-auto">
                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold uppercase text-center">Our Clients</h2>
                <p className="mt-1 text-xs md:text-sm lg:text-base font-medium text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis illum nemo modi sapiente quia natus illo minus sint sit? Dolor facilis, voluptates rerum veniam quod est. Quo corrupti dicta perspiciatis?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis illum nemo modi sapiente quia natus illo minus sint sit? Dolor facilis, voluptates rerum veniam quod est. Quo corrupti dicta perspiciatis?
                </p>
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-6">
                    <div className="border p-1 flex justify-center bg-white rounded-lg shadow-2xl">
                        <Image src="/images/client_logo1.jpg" width={1000} height={1000} alt="client_logo1" className="w-20 h-10 md:w-28 md:h-14" />
                    </div>
                    <div className="border p-1 flex justify-center bg-white rounded-lg shadow-2xl">
                        <Image src="/images/client_logo2.jpg" width={1000} height={1000} alt="client_logo1" className="w-28 h-10 md:w-32 md:h-16" />
                    </div>
                    <div className="border p-1 flex justify-center bg-white rounded-lg shadow-2xl">
                        <Image src="/images/client_logo3.jpg" width={1000} height={1000} alt="client_logo1" className="w-24 h-10 md:w-32 md:h-14" />
                    </div>
                    <div className="border p-1 flex justify-center bg-white rounded-lg shadow-2xl">
                        <Image src="/images/client_logo4.jpg" width={1000} height={1000} alt="client_logo1" className="w-20 h-10 md:w-28 md:h-14" />
                    </div>
                    <div className="border p-1 flex justify-center bg-white rounded-lg shadow-2xl">
                        <Image src="/images/client_logo5.jpg" width={1000} height={1000} alt="client_logo1" className="w-20 h-10 md:w-28 md:h-14" />
                    </div>
                    <div className="border p-1 flex justify-center bg-white rounded-lg shadow-2xl">
                        <Image src="/images/client_logo6.jpg" width={1000} height={1000} alt="client_logo1" className="w-20 h-10 md:w-28 md:h-14" />
                    </div>
                    <div className="border p-1 flex justify-center bg-white rounded-lg shadow-2xl">
                        <Image src="/images/client_logo7.jpg" width={1000} height={1000} alt="client_logo1" className="w-20 h-10 md:w-28 md:h-14" />
                    </div>
                    <div className="border p-1 flex justify-center bg-white rounded-lg shadow-2xl">
                        <Image src="/images/client_logo8.jpg" width={1000} height={1000} alt="client_logo1" className="w-20 h-10 md:w-28 md:h-14" />
                    </div>
                </div>
            </div>
        </div>
    </>)
}