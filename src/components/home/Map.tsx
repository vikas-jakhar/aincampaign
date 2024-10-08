"use client";
import { useState } from "react";
import Image from "next/image";
import { COUNTIRES_DATA, ALLCOUNTRY_DATA } from "@/utils/Helper";
import AgeGroupChart from "./AgeGroupChart";
import WorldMap from "./WorldMap";

interface Country {
    name: string;
    img: string;
    data: string;
    ageData: number[];
}

const Map = () => {
    const [selectedCountry, setSelectedCountry] = useState<Country>({
        name: "United States",
        img: "/assets/images/webp/united-states.webp",
        data: "50.2k",
        ageData: [80, 60, 40, 20],
    });
    const [showModal, setShowModal] = useState(false);
    const handleCountryClick = (country: Country) => {
        setSelectedCountry(country);
        setShowModal(false);
    };
    const toggleModal = () => {
        setShowModal((prev) => !prev);
    };

    return (
        <div className="mt-7 border border-medium-gray bg-white shadow-4xl rounded-[18px] mb-7 xl:mb-14 lg:pl-7 px-4 lg:pr-3 py-7">
            <div className="flex gap-3 items-start justify-between flex-col xl:flex-row">
                <div className="flex flex-col max-w-[1054px] w-full">
                    <p className="text-xl text-off-gray font-bold font-thicccboi-bold mb-7">Your top demographics</p>
                    <WorldMap />
                </div>
                <div className="xl:max-w-[376px] mt-14 xl:mt-0 w-full xl:border-s xl:border-medium-gray h-full lg:pl-3 relative">
                    <p className="font-semibold font-thicccboi-semiBold text-3xl ml-5 flex items-center gap-2">225.25k</p>
                    <div className="lg:mt-11 mt-5 bg-off-white w-full min-h-[248px] rounded-lg px-3.5 pt-3">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <Image
                                    src={selectedCountry.img}
                                    className="max-w-[47px] w-full"
                                    alt="flag"
                                    width={94}
                                    height={94}
                                    priority
                                />
                                <p className="font-medium font-thicccboi-medium text-xl">{selectedCountry.name}</p>
                            </div>
                            <p className="text-off-gray font-thicccboi-medium text-xl font-medium">
                                {selectedCountry.data}
                            </p>
                        </div>
                        {/* Pass the ageData prop to AgeGroupChart */}
                        <AgeGroupChart ageData={selectedCountry.ageData} />
                    </div>
                    {COUNTIRES_DATA.slice(0, 3).map((country: Country, idx: number) => (
                        <div
                            key={idx}
                            className={`flex items-center justify-between max-w-[349px] w-full xl:mx-auto cursor-pointer ${idx === 0 ? "mt-5" : "mt-7"
                                }`}
                            onClick={() => handleCountryClick(country)}
                        >
                            <div className="flex items-center gap-3">
                                <Image
                                    src={country.img}
                                    className="max-w-[47px] w-full"
                                    alt="flag"
                                    width={94}
                                    height={94}
                                    priority
                                />
                                <p className="font-medium font-thicccboi-medium text-xl">{country.name}</p>
                            </div>
                            <p className="text-off-gray font-thicccboi-medium text-xl font-medium">{country.data}</p>
                        </div>
                    ))}
                    <div className="mt-16 pt-2.5 flex items-center justify-between max-w-[349px] w-full xl:mx-auto">
                        <p className="font-medium font-thicccboi-medium text-xl">15 more countries</p>
                        <p
                            className="font-normal text-base text-deep-blue font-thicccboi-normal cursor-pointer"
                            onClick={toggleModal}
                        >
                            View all
                        </p>
                    </div>
                </div>
            </div>
            {showModal && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg max-w-[600px] w-full p-5">
                        <div className="flex justify-between items-center mb-5">
                            <h2 className="text-2xl font-bold">All Countries</h2>
                            <button className="text-red-500 font-bold" onClick={toggleModal}>
                                Close
                            </button>
                        </div>
                        <div className="max-h-[400px] overflow-y-auto">
                            {ALLCOUNTRY_DATA.map((country: Country, idx: number) => (
                                <div
                                    key={idx}
                                    className="flex items-center justify-between cursor-pointer py-2"
                                    onClick={() => handleCountryClick(country)}
                                >
                                    <div className="flex items-center gap-3">
                                        <Image
                                            src={country.img}
                                            className="max-w-[47px] w-full"
                                            alt="flag"
                                            width={47}
                                            height={47}
                                            priority
                                        />
                                        <p className="font-medium text-xl">{country.name}</p>
                                    </div>
                                    <p className="text-off-gray text-xl font-medium">{country.data}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Map;