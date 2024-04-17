import Image from "next/image"

export default function OurClients() {
    return (<>
        <div className="flex justify-center items-center p-8 md:p-10 lg:p-5 bg-accent text-primary-content">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 lg:gap-10">
                <div className="w-full lg:w-[500px] mt-4 lg:mt-12">
                    <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-center md:text-start">Our clients</h2>
                    <p className="mt-2 mb-4 text-xs md:text-sm text-center md:text-start">PLPL as an industry leader has set high standards, thanks to an in-depth understanding of its customer’s businesses. It has the ability to identify the priorities of global agricultre companies and meet their requirements. PLPL’s long-term investments in infrastructure have paid off in terms of controlling quality and cost; strictly adhering to statutory compliances; and achieving quick turnaround times</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
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