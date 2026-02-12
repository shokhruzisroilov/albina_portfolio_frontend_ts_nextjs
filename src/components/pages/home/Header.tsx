import { PodcastIcon } from '@/assets/icons';
import DocumentDownloadIcon from '@/assets/icons/DocumentDownloadIcon';
import { socialLinks } from '@/constants';

import Image from 'next/image';

const Header = () => {
  return (
    <div id="home" className="w-full px-6 pt-36">
      <div className="w-full max-w-300 mx-auto py-10 flex flex-col xl:flex-row gap-10 xl:items-center justify-between">
        {/* TEXT INFORMATION */}
        <div className="space-y-6 flex-1">
          <h1 className="font-bricolage font-semibold text-[22px] text-[#1D1D1D] leading-[100%] tracking-[-0.02em]">
            Hello! <br /> I am Albina <br /> Hartner Yildiz
          </h1>

          <h2 className="font-bricolage font-bold text-[80px] leading-[100%] tracking-[-0.01em] text-[#090909]">
            INSTRUCTIONAL{' '}
            <span className="inline-block max-w-min bg-[#9BD95C14] rounded-xl border-l-3 border-[#9BD95C] px-4 py-0.5 text-[#9BD95C] line-clamp-2">
              SPATIAL EXPERIENCE
            </span>{' '}
            DESIGNER
          </h2>

          <p className="font-normal text-[18px] leading-6 text-[#1D1D1D]">
            "Focused on innovation, create dynamic <br /> and immersive learning
            experiences."
          </p>

          <div className="w-full h-px bg-[#EFEFF9]" />

          <p className="font-normal text-base leading-6 text-[#1D1D1D]">
            "I design learning experiences that place learners first, turning
            complex content into clear, <br /> engaging, and actionable
            knowledge."
          </p>

          <a
            href="/cv.pdf"
            download
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-20 h-10 gap-2 items-center justify-center border-3 border-[#EFEFF9] rounded-full animate-pulse"
          >
            <DocumentDownloadIcon />
            <span className="font-semibold text-[12.64px] text-[#2C2550]">
              CV
            </span>
          </a>
        </div>

        {/* IMAGE AND PODCAST INFO */}
        <div className="flex-1 flex flex-col items-center">
          <Image
            src="/images/hero.png"
            width={500}
            height={500}
            alt="Hero"
            priority
            className="rounded-2xl"
            sizes="(max-width: 768px) 100vw, 500px"
          />

          <div className="mt-4 flex flex-col items-center gap-3 text-center">
            <span className="flex items-center gap-3 text-[#9BD95C]">
              <PodcastIcon />
              <p className="font-medium text-[14px] leading-[18.95px] tracking-[0.05em]">
                Podcast
              </p>
            </span>

            <p className="font-medium text-[14px] leading-[120%] text-[#121212]">
              Podcast now available on Spotify, <br /> Apple Music, Youtube.
            </p>

            <div className="flex gap-3 mt-2">
              {socialLinks &&
                socialLinks.map((social, idx) => (
                  <a
                    key={idx}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-13 h-13 flex items-center justify-center rounded-2xl bg-[#EFEFF9]"
                  >
                    {social.icon}
                  </a>
                ))}
            </div>
          </div>
        </div>
      </div>

      {/* MOUSE ICON */}
      <div className="w-full flex justify-center max-xl:hidden mt-12">
        <div className="w-6 h-10 border-2 border-[#E1E1EB] rounded-full flex justify-center p-2 animate-[bounce_1.5s_ease-in-out_infinite] cursor-pointer">
          <div className="w-1 h-2 bg-[#E1E1EB] rounded-full" />
        </div>
      </div>

      {/* IMAGE SECTION WITH GRADIENT */}
      <div className="flex justify-center pt-32">
        <div className="relative w-full max-w-300 h-96 sm:h-112 md:h-128 lg:h-150 rounded-2xl sm:rounded-3xl lg:rounded-4xl bg-linear-to-tr from-[#F99D1C1A] via-[#FAA61A1A] to-[#FFC9071A]">
          <div className="absolute w-full h-full left-0 bottom-0 rounded-2xl sm:rounded-3xl lg:rounded-4xl p-2 sm:p-2.5 md:p-3 bg-linear-to-tr from-[#F99D1C] via-[#FAA61A] to-[#FFC907]">
            <Image
              src="/images/video.png"
              width={1036}
              height={600}
              alt="Hero Video"
              priority
              className="w-full h-full rounded-2xl sm:rounded-3xl lg:rounded-4xl object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
