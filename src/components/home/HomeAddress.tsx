export default function HomeAddress({ address, addressForm }: any) {
    return (<>
        <div className="bg-secondary text-primary-content">
            <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2">
                <div className="mt-0">
                    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 ">
                        {
                            address && address.map(({ id, locationTitle, Title, locationArea, locationVillage, locationDistrict, phoneTitle, phoneNumber, emailTitle, emailOne, emailTwo, emailThree }: any) => (
                                <div key={id} className="flex justify-center">
                                    <div className="text-center md:text-center lg:text-start">
                                        <div className="mt-16">
                                            <h2></h2>
                                            <h2 className="font-bold text-xl md:text-2xl lg:text-2xl">{locationTitle}</h2>
                                            <h2 className="font-bold text-sm md:text-2xl lg:text-lg w-full md:w-full lg:w-72">{Title}</h2>
                                            <p className="font-bold text-sm md:text-xl lg:text-xs">
                                                {locationArea}<br />
                                                {locationVillage}<br />
                                                {locationDistrict}
                                            </p>
                                        </div>
                                        <div className="mt-5">
                                            <h2 className="font-bold text-xl md:text-2xl lg:text-xl">{phoneTitle}</h2>
                                            <p className="font-bold text-sm md:text-xl lg:text-xs">{phoneNumber}</p>
                                        </div>
                                        <div className="mt-5">
                                            <h2 className="font-bold text-xl md:text-2xl lg:text-xl">{emailTitle}</h2>
                                            <p className="font-bold text-sm md:text-xl lg:text-xs">{emailOne}</p>
                                        </div>
                                    </div>
                                </div>
                            ))
                        }

                        <div className="flex justify-center">
                            <div className="border w-[360px] md:w-[680px] lg:w-[400px]  relative me-0 md:me-0 lg:me-[-210px] bg-white shadow-2xl rounded-md mt-11">
                                <div className="p-7">
                                    {
                                        addressForm && addressForm.map(({ id, title, btnName }: any) => (
                                            <div key={id}>
                                                <form>
                                                    <h2 className="font-bold text-xl md:text-2xl lg:text-xl mb-0">{title}</h2>
                                                    <div className="mt-3 grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2  gap-2">
                                                        <input type="text" className="border outline-none rounded-md bg-[#F7F7F7] p-2 w-full font-medium" placeholder="Name" />
                                                        <input type="text" className="border outline-none rounded-md bg-[#F7F7F7] p-2 w-full font-medium" placeholder="Email" />
                                                    </div>
                                                    <div className="mt-5">
                                                        <input type="text" className="border outline-none rounded-md bg-[#F7F7F7] p-2 w-full font-medium" placeholder="Phone" />
                                                    </div>
                                                    <div className="mt-5">
                                                        <textarea className="border outline-none rounded-md bg-[#F7F7F7] p-3 w-full h-[130px] font-medium" placeholder="Please Described what you need" />
                                                    </div>
                                                    <div className="mt-3 pb-0 text-gray-700">
                                                        <button className="bg-[#F1CF69] rounded-full font-bold text-xs md:text-sm lg:text-sm w-full p-3">
                                                            {btnName}
                                                        </button>
                                                    </div>
                                                </form>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex justify-center items-center mt-10 md:mt-10 lg:mt-0">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9044.80119517719!2d78.49410596439088!3d17.608885614624043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb85e6ca3a0b0d%3A0xe09af071dda8a6a4!2sPrasad%20Seeds%20Private%20Limited!5e0!3m2!1sen!2sin!4v1696670701995!5m2!1sen!2sin" className="w-full h-[300px] md:h-[700px] lg:h-[500px]" ></iframe>
                </div>
            </div>
        </div>
    </>)
}