import react from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Layout from "../components/Layout";
import SayHi from "../public/navbar/sayhi.svg";
import ArrowRight from "../public/hero/arrow-right-circle.svg";
import Download from "../public/hero/download.svg";
import User from "../public/hero/user.svg";
import EmotLove from "../public/hero/emoticon-love.svg";
import Phone from "../public/hero/phone.svg";
import Chat1 from "../public/hero/chat-1.svg";
import Chat2 from "../public/hero/chat-2.svg";

export default function Home() {
  return (
    <div>
      <section className="navbar bg-blue-regal container mt-[52px] px-4 lg:px-[208px]">
        <div className="navbar-wrap flex items-center justify-between py-[180]">
          <div>
            <Image
              className="navbar-logo h-[35px] w-[35px]"
              src={SayHi}
              alt="SayHi"
            ></Image>
          </div>

          {/* Navbar-Wrap */}
          <div className="hidden lg:block">
            <ul className="flex items-center justify-start gap-16">
              <li className="text-base font-semibold leading-[20px] text-[#0C1B4D]">
                <Link href="/">
                  <a>Beranda</a>
                </Link>
              </li>
              <li className="text-base font-normal leading-[20px] text-[#0C1B4D]">
                <Link href="/">
                  <a>Fitur-fitur</a>
                </Link>
              </li>
              <li className="text-base font-normal leading-[20px] text-[#0C1B4D]">
                <Link href="/">
                  <a>Teknologi</a>
                </Link>
              </li>
              <li className="text-base font-normal leading-[20px] text-[#0C1B4D]">
                <Link href="/">
                  <a>FAQ</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden lg:block">
            <button className="rounded-md bg-regal-blue px-[25px] py-[10px] text-lg  font-semibold text-white shadow-lg shadow-regal-blue">
              Download
            </button>
          </div>
        </div>
      </section>

      <section className="hero bg-blue-regal container mt-[75px] px-4 lg:px-[208px]">
        <div className="gap-[30px] lg:grid lg:grid-cols-2">
          <div>
            <p className="text-xs font-semibold uppercase text-regal-blue lg:text-sm">
              Chat N&apos; Rechat
            </p>

            <div className="mt-[15px]">
              <p className="text-2xl font-normal text-[#0C1B4D] lg:text-[30px] lg:leading-[44px]">
                Sebuah aplikasi chatting yang bisa bikin kamu lupa diri, tapi
                tidak lupa jasa pahlawan!
              </p>
            </div>

            <div className="mt-[15px]">
              <p className="font-sourcesans text-sm font-normal leading-[30px] text-[#0C1B4D99] lg:text-base">
                Sebenernya banyak banget aplikasi chatting yang lebih bagus dari
                ini, maka dari itu lebih baik pake yang lain aja deh ya daripada
                pake aplikasi yang ini.
              </p>
            </div>

            <div className="mt-[30px]">
              <div className="flex items-center lg:flex lg:gap-4">
                <div>
                  <button className="flex items-center rounded-md bg-regal-blue px-[30px] py-[10px] text-base font-semibold text-white shadow-lg shadow-regal-blue lg:text-lg">
                    Register
                    <div className="ml-[15px] mt-[10px] items-center">
                      <Image
                        className="h-5 w-5"
                        src={ArrowRight}
                        alt="arrow-right"
                      ></Image>
                    </div>
                  </button>
                </div>

                <div>
                  <button className="items-center rounded-md bg-blue-100/30 py-[15px] px-[30px] text-base font-semibold text-regal-blue lg:text-lg">
                    Learn More
                  </button>
                </div>
              </div>
            </div>

            <div className="mt-[70px]">
              <div className="flex gap-11">
                <div className="flex gap-7">
                  <div className="hidden lg:block">
                    <Image src={Download} alt="download"></Image>
                  </div>

                  <div>
                    <p className="text-xs font-normal uppercase leading-[15px] text-[#0C1B4D99]">
                      Total Don&apos;tloud
                    </p>
                    <div>
                      <p className="text-2xl font-semibold text-[#0C1B4D]">
                        1,501,234
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-r-2 border-gray-200/60"></div>
                <div className="flex gap-7">
                  <div className="hidden lg:block">
                    <Image src={User} alt="download"></Image>
                  </div>

                  <div>
                    <p className="text-xs font-normal uppercase leading-[15px] text-[#0C1B4D99]">
                      Total Users
                    </p>
                    <div>
                      <p className="text-2xl font-semibold text-[#0C1B4D]">
                        1,318,829
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Chatt-animate */}
          <div className="hidden lg:block">
            <div className="lg:flex lg:justify-end">
              <div className="w-11/12">
                <Image src={Phone} alt="phone"></Image>
              </div>
              <div className="absolute">
                <div className="mt-8 w-10/12">
                  <div className="absolute z-50 mt-4 ml-20 animate-[slideright_6s_ease-in-out_infinite]">
                    <span className="absolute mt-[6px] inline-flex h-3 w-3 animate-ping rounded-full bg-blue-500 opacity-75"></span>
                    <span className="inline-block h-3 w-3 rounded-full bg-blue-500"></span>
                  </div>

                  <div className="absolute z-50">
                    <div className="ml-56 mt-10">
                      <Image src={EmotLove} alt="emoticon-love"></Image>
                    </div>
                  </div>

                  <Image
                    className="animate-[slideright_6s_ease-in-out_infinite]"
                    src={Chat1}
                    alt="chatting"
                  ></Image>
                </div>
              </div>

              <div className="absolute">
                <div className="mt-56 ml-72 w-10/12">
                  <Image
                    className="animate-[slideleft_6s_ease-in-out_infinite]"
                    src={Chat2}
                    alt="chatting"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="logo container mt-16 xs:container lg:mt-16 xl:container">
        <div className="rounded-md bg-primary-blue/5 p-7 lg:p-14">
          {/* Content-logo */}
          <div className="flex justify-center justify-items-center">
            <div className="embla" ref={emblaRef}>
              <div className="embla__container flex items-center">
                <div className="embla__slide">
                  <Image src={Cnn} alt="cnn"></Image>
                </div>

                <div className="embla__slide">
                  <Image className="ml-32" src={Tirto} alt="tirto"></Image>
                </div>

                <div className="embla__slide">
                  <Image src={Forbes} alt="forbes"></Image>
                </div>

                <div className="embla__slide">
                  <Image src={Google} alt="google"></Image>
                </div>

                <div className="embla__slide">
                  <Image
                    className="h-9 w-16"
                    src={Newyork}
                    alt="newyork-times"
                  ></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="usetech container xs:container xl:container">
        <div className="py-6 lg:py-24">
          <div className="lg:grid lg:grid-cols-2">
            {/* Content-cols-1 */}
            <div>
              <div className="absolute xs:-mr-10 lg:-ml-16">
                <div className="w-7/12 lg:w-10/12">
                  <Image src={Apps1} alt="Apps"></Image>
                </div>
              </div>
              <div className="mt-14 xs:flex xs:justify-center ">
                <div className="mt-10 animate-flip xs:w-9/12 lg:w-auto">
                  <Image src={Apps2} alt="Apps"></Image>
                </div>
              </div>
            </div>

            {/* Content-cols-2 */}
            <div className="mt-3">
              <div>
                <p>Teknologi yang digunakan</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
