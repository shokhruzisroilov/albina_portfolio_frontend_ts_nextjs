import { PodcastIcon, YoutubeIcon } from '@/assets/icons';
import DocumentDownloadIcon from '@/assets/icons/DocumentDownloadIcon';
import SpotifyIcon from '@/assets/icons/SpotifyIcon';
import Image from 'next/image';

const Header = () => {
  return (
    <div id="home" className="w-full px-6 pt-36">
      <div className="w-full max-w-300 mx-auto py-10">
        <div className="flex xl:flex-row flex-col xl:items-center justify-between gap-10">
          {/* TEXT INFORMATION */}
          <div className="space-y-6">
            <h1 className="font-semibold font-bricolage text-[22px] text-[#1D1D1D] leading-[100%] tracking-[-0.02em]">
              Hello! <br /> I am Albina <br /> Hartner Yildiz
            </h1>
            <h2 className="font-bricolage font-bold text-[80px] leading-[100%] tracking-[-0.01em] text-[#090909]">
              INSTRUCTIONAL{' '}
              <span className="max-w-min bg-[#9BD95C14] rounded-xl border-l-3 border-[#9BD95C] leading-16 tracking-[-0.01em] text-[#9BD95C] line-clamp-2 px-4 py-0.5">
                SPATIAL EXPERIENCE
              </span>{' '}
              DESIGNER
            </h2>
            <p className="font-normal text-[18px] leading-6 tracking-[-0.02em] text-[#1D1D1D]">
              "Focused on innovation, create dynamic <br /> and immersive
              learning experiences."
            </p>
            <div className="w-full h-px bg-[#EFEFF9]"></div>
            <p className="font-normal text-base leading-6 tracking-[-0.02em] text-[#1D1D1D]">
              "I design learning experiences that place learners first, turning
              complex content into clear, <br /> engaging, and actionable
              knowledge."
            </p>
            <a
              href="/cv.pdf"
              download
              target="_blank"
              rel="noopener noreferrer"
              className="w-20 h-10 flex gap-2 items-center justify-center border-3 border-[#EFEFF9] rounded-full animate-pulse"
            >
              <DocumentDownloadIcon />
              <span className="font-semibold text-[12.64px] leading-[14.44px] text-[#2C2550]">
                cv
              </span>
            </a>
          </div>

          {/* IMAGE AND OTHER INFO */}
          <div className="max-xl:w-full flex flex-col justify-center items-center">
            <Image
              src="/images/hero.png"
              width={500}
              height={500}
              alt="Hero"
              priority
              sizes="(max-width: 768px) 100vw, 500px"
            />
            <div className="flex flex-col gap-3 justify-center items-center">
              <span className="flex items-center gap-3">
                <PodcastIcon />
                <p className="font-medium text-[14px] leading-[18.95px] tracking-[0.05em] text-center text-[#9BD95C]">
                  Podcast
                </p>
              </span>
              <p className="font-medium text-[14px] leading-[120%] tracking-normal text-center text-[#121212]">
                Podcast nore available on Spotify, <br /> Apple Music, Youtube.
              </p>
              <div className="flex gap-3">
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-13 h-13 flex items-center justify-center rounded-2xl bg-[#EFEFF9]"
                >
                  <SpotifyIcon />
                </a>
                <a
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-13 h-13 flex items-center justify-center rounded-2xl bg-[#EFEFF9]"
                >
                  <YoutubeIcon />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* MOUSE ICON */}
        <div className="w-full flex justify-center max-xl:hidden">
          <div className="w-6 h-10 border-2 border-[#E1E1EB] rounded-full flex justify-center p-2 animate-[bounce_1.5s_ease-in-out_infinite] cursor-pointer">
            <div className="w-1 h-2 bg-[#E1E1EB] rounded-full"></div>
          </div>
        </div>

        {/* IMAGE SECTION */}
        <div className="flex items-center justify-center pt-32">
          <div
            className="w-full relative h-96 sm:h-112 md:h-128 lg:h-150 rounded-2xl sm:rounded-3xl lg:rounded-4xl"
            style={{
              background:
                'linear-gradient(356.45deg, rgba(249, 157, 28, 0.1) 31.2%, rgba(250, 166, 26, 0.1) 40.26%, rgba(253, 186, 19, 0.1) 61.45%, rgba(255, 197, 11, 0.1) 80.44%, rgba(255, 201, 7, 0.1) 95.27%)',
            }}
          >
            <div
              className="absolute w-full h-96 sm:h-112 md:h-128 lg:h-150 left-0 sm:left-2 md:left-4 lg:left-12 bottom-0 sm:bottom-2 md:bottom-4 lg:bottom-12 rounded-2xl sm:rounded-3xl lg:rounded-4xl p-2 sm:p-2.5 md:p-3"
              style={{
                background:
                  'linear-gradient(356.45deg, #F99D1C 31.2%, #FAA61A 40.26%, #FDBA13 61.45%, #FFC50B 80.44%, #FFC907 95.27%)',
              }}
            >
              <Image
                src="/images/video.png"
                width={1036}
                height={600}
                alt="Hero"
                priority
                className="w-full h-full rounded-2xl sm:rounded-3xl lg:rounded-4xl object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
