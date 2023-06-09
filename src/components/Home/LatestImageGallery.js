import React, { useState, useEffect, useRef } from 'react';
import ImageModalGallery from '../ImageModalGallery';
import EmptyState from '../EmptyState';
import { ArrowsPointingOutIcon, ArrowLongRightIcon } from '@heroicons/react/20/solid';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function LatestImageGallery({ galleryDataJson }) {
  const [displayedImages, setDisplayedImages] = useState([]);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const bodyRef = useRef(document.body);

  useEffect(() => {
    const sortedImages = galleryDataJson
      .sort((a, b) => new Date(b.dateCreated) - new Date(a.dateCreated))
      .slice(0, 6);
    setDisplayedImages(sortedImages);
    AOS.init();
  }, [galleryDataJson]);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
    bodyRef.current.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedImageIndex(null);
    setIsModalOpen(false);
    bodyRef.current.style.overflow = 'auto';
  };

  const handlePrevClick = () => {
    if (selectedImageIndex === 0) {
      return;
    }
    setSelectedImageIndex(selectedImageIndex - 1);
  };

  const handleNextClick = () => {
    if (selectedImageIndex === displayedImages.length - 1) {
      return;
    }
    setSelectedImageIndex(selectedImageIndex + 1);
  };

  return (
    <section className="mx-auto w-full bg-blue-secondary">
      <div className="container mx-auto flex max-w-screen-xl flex-col gap-4 px-4 py-4 sm:py-16 lg:px-6">
        <div
          data-aos="fade-up"
          data-aos-duration="500"
          className="flex flex-col items-center gap-2 py-4"
        >
          <h2 className="text-2xl font-bold text-gray-50 sm:text-3xl">Galeri Singkat</h2>
          <p className="text-sm text-gray-300 sm:text-base">Foto Terbaru di Desa</p>
        </div>
        <div
          className={`flex flex-col place-items-center items-center justify-center gap-4 ${
            displayedImages.length <= 1
              ? 'sm:flex'
              : displayedImages.length <= 3
              ? 'sm:grid sm:grid-cols-2 lg:flex lg:flex-row'
              : 'sm:grid sm:grid-cols-2 lg:grid lg:grid-cols-3'
          } `}
        >
          {!displayedImages.length ? (
            <EmptyState textColor="text-gray-300" />
          ) : (
            displayedImages.map((image, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={50 * index}
                data-aos-duration="500"
                className="w-full lg:max-w-[24.333rem]"
                onClick={() => handleImageClick(index)}
              >
                <div className="group relative cursor-pointer overflow-hidden rounded-md">
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="h-72 w-full transform select-none object-cover duration-300 group-hover:scale-110 group-hover:brightness-50 group-hover:ease-in-out"
                  />
                  <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transform opacity-0 duration-300 group-hover:opacity-100">
                    <div className="relative h-10 w-10">
                      <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center text-white">
                        <ArrowsPointingOutIcon aria-hidden="true" className="h-6 w-6" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
        {displayedImages.length && (
          <div
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="500"
            className="col-span-full py-4 text-center"
          >
            <a
              href="/galeri-desa"
              className="group text-center text-sm text-gray-300 no-underline transition duration-300 ease-in-out hover:text-gray-100 hover:underline sm:text-base"
            >
              Lihat Semua Foto di Galeri
              <ArrowLongRightIcon
                className="inline h-5 w-5 translate-x-0 transform transition-transform duration-300 group-hover:translate-x-1 group-hover:text-gray-100"
                aria-hidden="true"
              />
            </a>
          </div>
        )}
      </div>
      {selectedImageIndex !== null && (
        <ImageModalGallery
          image={galleryDataJson[selectedImageIndex]}
          onClose={handleCloseModal}
          onPrev={handlePrevClick}
          onNext={handleNextClick}
          startImageNumber={selectedImageIndex + 1}
          endImageNumber={displayedImages.length}
          isModalOpen={isModalOpen}
        />
      )}
    </section>
  );
}
