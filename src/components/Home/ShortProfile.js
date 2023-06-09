import React, { useEffect } from 'react';
import HTMLReactParser from 'html-react-parser';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function ShortProfile({ refShortProfile, profileDataJson }) {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="mx-auto w-full bg-white" ref={refShortProfile}>
      <div className="container mx-auto flex max-w-screen-xl flex-col gap-4 overflow-x-hidden px-4 py-4 sm:py-16 lg:px-6">
        <div className="flex w-full flex-col items-center gap-5 lg:flex-row">
          <div data-aos="fade-right" data-aos-duration="500" className="w-full py-4 lg:w-1/3">
            <img src={profileDataJson.src} alt="Logo desa" className="m-auto w-72 select-none" />
          </div>
          <div
            data-aos="fade-left"
            data-aos-duration="500"
            className="flex w-full flex-col gap-4 py-4 lg:w-2/3"
          >
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl lg:text-left">
              Sejarah Desa
            </h2>
            <div className="text-gray-900">{HTMLReactParser(profileDataJson.history)}</div>
            <h2 className="text-center text-2xl font-bold text-gray-900 sm:text-3xl lg:text-left">
              Visi & Misi
            </h2>
            <div className="text-gray-900">{HTMLReactParser(profileDataJson.visionMission)}</div>
          </div>
        </div>
      </div>
    </section>
  );
}
