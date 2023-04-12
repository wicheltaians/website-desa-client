import React from 'react';
import { EnvelopeOpenIcon, MapPinIcon } from '@heroicons/react/24/outline';

export default function Footer() {
  return (
    <footer className="bg-blue-secondary py-4 text-white">
      <div className="container mx-auto max-w-screen-xl px-6 py-5 lg:px-7">
        <div className="flex flex-col justify-between gap-6 lg:flex-row lg:gap-0">
          <div className="w-full md:mb-0 lg:w-1/2">
            <h3 className="mb-2 text-xl font-bold text-gray-50">Desa BRIliant</h3>
            <p className="text-base text-gray-300">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s, when an unknown
              printer took a galley of type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into electronic typesetting,
              remaining essentially unchanged.
            </p>
          </div>
          <div className="flex w-full flex-col lg:w-1/2 lg:flex-row-reverse">
            <div className="flex flex-col gap-2">
              <h3 className="mb-2 text-xl font-bold text-gray-50">Kontak</h3>
              <a
                href="mailto:desabriliant@gmail.com"
                className="flex flex-row items-center gap-2 text-base text-gray-300 hover:text-gray-50"
              >
                <EnvelopeOpenIcon aria-hidden="true" className="h-5 w-5" />
                desabriliant@gmail.com
              </a>
              <a
                href={`https://api.whatsapp.com/send?phone=${encodeURIComponent('+628991049322')}`}
                className="flex flex-row items-center gap-2 text-base text-gray-300 hover:text-gray-50"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path d="M16.6 14c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.2-.6.8-.8 1-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.2-.5-.5-1-1.1-1.4-1.7-.1-.2 0-.4.1-.5.1-.1.2-.3.4-.4.1-.1.2-.3.2-.4.1-.1.1-.3 0-.4-.1-.1-.6-1.3-.8-1.8-.1-.7-.3-.7-.5-.7h-.5c-.2 0-.5.2-.6.3-.6.6-.9 1.3-.9 2.1.1.9.4 1.8 1 2.6 1.1 1.6 2.5 2.9 4.2 3.7.5.2.9.4 1.4.5.5.2 1 .2 1.6.1.7-.1 1.3-.6 1.7-1.2.2-.4.2-.8.1-1.2l-.4-.2m2.5-9.1C15.2 1 8.9 1 5 4.9c-3.2 3.2-3.8 8.1-1.6 12L2 22l5.3-1.4c1.5.8 3.1 1.2 4.7 1.2 5.5 0 9.9-4.4 9.9-9.9.1-2.6-1-5.1-2.8-7m-2.7 14c-1.3.8-2.8 1.3-4.4 1.3-1.5 0-2.9-.4-4.2-1.1l-.3-.2-3.1.8.8-3-.2-.3c-2.4-4-1.2-9 2.7-11.5S16.6 3.7 19 7.5c2.4 3.9 1.3 9-2.6 11.4"></path>
                </svg>
                08991049322
              </a>
              <span className="flex flex-row items-center gap-2 text-base leading-none text-gray-300">
                <MapPinIcon aria-hidden="true" className="h-5 w-5 flex-shrink-0" />
                Desa BRIliant, Kec. Sungai Raya, Kab. Kubu Raya
              </span>
            </div>
          </div>
        </div>
        <hr className="my-9 border-gray-500" />
        <p className="text-center text-sm text-gray-400">
          &copy; 2023 Desa BRIliant. All Rights Reserved. Created by{' '}
          <a href="https://github.com/wicheltaians" className="hover:text-gray-50">
            Wichelta Iansyah.
          </a>
        </p>
      </div>
    </footer>
  );
}
