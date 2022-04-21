import React from "react";
import { Menu, Transition } from "@headlessui/react";
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
import Cnn from "../public/logo/cnn.svg";
import Tirto from "../public/logo/tirto.svg";
import Forbes from "../public/logo/forbes.svg";
import Google from "../public/logo/google.svg";
import Newyork from "../public/logo/newyork.svg";
import Group from "../public/element/groups.svg";
import Message from "../public/element/message.svg";
import Speak from "../public/element/speak.svg";
import Apps1 from "../public/element/apps-1.svg";
import Apps2 from "../public/element/apps-2.svg";
import Apps from "../public/element/apps-full.svg";
import Angry from "../public/emoticon/angry.svg";
import Bear from "../public/emoticon/bear.svg";
import Sleep from "../public/emoticon/sleep.svg";
import Appstore from "../public/download/app-store.svg";
import Playstore from "../public/download/play-store.svg";
import Elementapps from "../public/download/element-apps.svg";
import Dropdown from "../public/drop-down.svg";
import Instagram from "../public/icons/instagram.svg";
import Twitter from "../public/icons/twitter.svg";
import Facebook from "../public/icons/facebook.svg";

export default function Home() {
  return (
    <div>
      <nav className="navbar container xs:container lg:mt-12 xl:container">
        <div className="flex items-center justify-between py-11">
          {/* Navbar-Logo */}
          <div className="flex items-center gap-4">
            <Image
              className="navbar-logo h-9 w-9"
              src={SayHi}
              alt="SayHi"
            ></Image>
            <p className="text-sm font-semibold uppercase text-primary-blue lg:hidden lg:text-sm">
              Chat N&apos; Rechat
            </p>
          </div>

          {/* Navbar-link */}
          <div className="hidden lg:block">
            <ul className="flex items-center justify-start gap-14">
              <li className="text-base font-semibold leading-5 text-dark-bold">
                <Link href="/">
                  <a>Beranda</a>
                </Link>
              </li>

              <li className="p-2 text-base font-normal leading-5 text-dark-bold hover:rounded-md hover:bg-slate-200/60 hover:p-2">
                <Link href="/">
                  <a>Fitur-fitur</a>
                </Link>
              </li>

              <li className="p-2 text-base font-normal leading-5 text-dark-bold hover:rounded-md hover:bg-slate-200/60 hover:p-2">
                <Link href="/">
                  <a>Teknologi</a>
                </Link>
              </li>

              <li className="p-2 text-base font-normal leading-5 text-dark-bold hover:rounded-md hover:bg-slate-200/60 hover:p-2">
                <Link href="/">
                  <a>FAQ</a>
                </Link>
              </li>
            </ul>
          </div>

          <div className="hidden lg:block">
            <button className="button-primary duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-primary-blue">
              Download
            </button>
          </div>
        </div>
      </nav>

      <section className="hero container mt-6 xs:container lg:mt-16 xl:container">
        <div className="lg:grid lg:grid-cols-2 lg:gap-7">
          {/* Content-hero-cols-1 */}
          <div>
            <div>
              <p className="text-sm font-semibold uppercase text-primary-blue lg:text-sm">
                Chat N&apos; Rechat
              </p>
            </div>

            <div className="mt-4">
              <p className="text-2xl font-normal leading-relaxed text-dark-bold lg:text-3xl">
                Sebuah aplikasi chatting yang bisa bikin kamu lupa diri, tapi
                tidak lupa jasa pahlawan!
              </p>
            </div>

            <div className="mt-4">
              <p className="font-sourcesans text-base font-normal leading-7 text-dark-bold/60">
                Sebenernya banyak banget aplikasi chatting yang lebih bagus dari
                ini, maka dari itu lebih baik pake yang lain aja deh ya daripada
                pake aplikasi yang ini.
              </p>
            </div>

            <div className="mt-8">
              <div className="flex items-center xs:gap-4 ms:gap-8 lg:gap-4">
                <div>
                  <button className="button-primary flex duration-300 hover:-translate-y-1 hover:scale-110 hover:bg-primary-blue">
                    Register
                    <div className="ml-4 mt-2 items-center">
                      <Image
                        className="h-5 w-5"
                        src={ArrowRight}
                        alt="arrow-right"
                      ></Image>
                    </div>
                  </button>
                </div>

                <div>
                  <button className="button-secondary">Learn More</button>
                </div>
              </div>
            </div>

            <div className="mt-16">
              <div className="flex gap-6 ms:gap-16 sm:gap-32 lg:gap-11">
                <div className="flex gap-4 lg:gap-4">
                  <div className="h-5 w-5 lg:h-9 lg:w-9">
                    <Image src={Download} alt="download"></Image>
                  </div>

                  <div>
                    <p className="text-xs font-normal uppercase leading-4 text-dark-bold">
                      Total Don&apos;tloud
                    </p>
                    <div>
                      <p className="text-xl font-semibold text-dark-bold lg:text-2xl">
                        1,501,234
                      </p>
                    </div>
                  </div>
                </div>

                <div className="border-r-2 border-dark-bold/10"></div>

                <div className="flex gap-4 lg:gap-4">
                  <div className="h-5 w-5 lg:h-9 lg:w-9">
                    <Image src={User} alt="user"></Image>
                  </div>

                  <div>
                    <p className="text-xs font-normal uppercase leading-4 text-dark-bold">
                      Total User
                    </p>
                    <div>
                      <p className="text-xl font-semibold text-dark-bold lg:text-2xl">
                        1,501,234
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Content-hero-cols-2 */}
          <div className="hidden lg:block">
            <div className="flex justify-end">
              <div className="lg:w-11/12">
                <Image src={Phone} alt="phone"></Image>
              </div>
              <div className="absolute">
                <div className="mt-8 w-10/12">
                  <div className="absolute z-50 mt-4 ml-20 animate-slideright">
                    <span className="absolute mt-[6px] inline-flex h-3 w-3 animate-ping rounded-full bg-blue-500 opacity-75"></span>
                    <span className="inline-block h-3 w-3 rounded-full bg-blue-500"></span>
                  </div>

                  <div className="absolute z-50">
                    <div className="ml-56 mt-10">
                      <Image src={EmotLove} alt="emoticon-love"></Image>
                    </div>
                  </div>

                  <Image
                    className="animate-slideright"
                    src={Chat1}
                    alt="chatting"
                  ></Image>
                </div>
              </div>

              <div className="absolute">
                <div className="w-10/12 lg:mt-56 lg:ml-28 xl:mt-56 xl:ml-72">
                  <Image
                    className="animate-slideright"
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
          <div>
            <div className="grid grid-cols-2 items-center gap-8 md:flex md:justify-center lg:gap-10">
              <div>
                <Image src={Cnn} alt="cnn"></Image>
              </div>

              <div>
                <Image src={Tirto} alt="tirto"></Image>
              </div>

              <div>
                <Image src={Forbes} alt="forbes"></Image>
              </div>

              <div className="mt-2">
                <Image src={Google} alt="google"></Image>
              </div>

              <div className="mt-2 sx:w-52 xs:h-auto xs:w-52">
                <Image src={Newyork} alt="newyork-times"></Image>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="logo container xs:container xl:container">
        <div className="py-24">
          <div className="flex justify-center">
            <p className="text-center font-sourcesans text-xs font-semibold uppercase leading-5 text-dark-bold lg:text-sm">
              Nggak Harus Sih Sebenernya
            </p>
          </div>

          <div className="mt-4 xs:mt-2">
            <p className="text-center font-dmsans text-xl font-normal leading-loose lg:text-2xl">
              Kenapa Harus Pakai Chat N&apos; Rechat?
            </p>
          </div>

          <div className="mt-2 flex justify-center">
            <p className="text-center text-base font-normal leading-7 text-dark-bold/60 lg:w-8/12">
              Sebenernya yang bagus itu sih WhatsApp loh, mending pake WhatsApp
              aja deh. Yaudah berikut ini adalah fitur-fitur WhatsApp.
            </p>
          </div>

          <div className="mt-24 justify-center lg:grid lg:grid-cols-3 lg:gap-7">
            <div className="items-center">
              <div className="flex justify-center duration-300 hover:-translate-y-1 hover:scale-125">
                <Image src={Group} alt="groups"></Image>
              </div>

              <div className="mt-10">
                <p className="text-center text-lg font-normal leading-7 text-dark-bold">
                  Groups to keep in touch
                </p>
              </div>

              <div className="mt-3">
                <p className="text-center text-base font-normal leading-6">
                  Keep in touch with the groups of people that matter the most,
                  like your family or coworkers. With group chats, you can share
                  messages, photos, and videos.
                </p>
              </div>
            </div>

            <div className="items-center xs:mt-24 lg:mt-0">
              <div className="flex justify-center duration-300 hover:-translate-y-1 hover:scale-125">
                <Image src={Message} alt="message"></Image>
              </div>

              <div className="mt-9">
                <p className="text-center text-lg font-normal leading-7 text-dark-bold">
                  Simple, Reliable Messaging
                </p>
              </div>

              <div className="mt-3">
                <p className="text-center text-base font-normal leading-6">
                  Message your friends and family for free*. WhatsApp uses your
                  phone&apos;s Internet connection to send messages so you can
                  avoid SMS fees.
                </p>
              </div>
            </div>

            <div className="items-center xs:mt-24 lg:mt-0">
              <div className="flex justify-center duration-300 hover:-translate-y-1 hover:scale-125">
                <Image src={Speak} alt="speak"></Image>
              </div>

              <div className="mt-12">
                <p className="text-center text-lg font-normal leading-7 text-dark-bold">
                  Speak Freely
                </p>
              </div>

              <div className="mt-3">
                <p className="text-center text-base font-normal leading-6">
                  With voice calls, you can talk to your friends and family for
                  free*, even if they&apos;re in another country. And with free*
                  video calls, you can have face-to-face conversations.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="border-b-2 border-dark-bold/5"></div>
      </section>

      <section className="use-tech container xs:container xl:container">
        <div className="py-6 lg:py-24">
          <div className="lg:grid lg:grid-cols-2">
            {/* Content-cols-1 */}
            <div>
              <div>
                <Image src={Apps} alt="apps"></Image>
              </div>
            </div>

            {/* Content-cols-2 */}
            <div className="mt-3">
              <div>
                <p className="font-sourcesans text-sm font-semibold uppercase leading-3 text-dark-bold">
                  Teknologi yang digunakan
                </p>

                <div className="mt-4">
                  <p className="text-xl font-normal leading-10 text-dark-bold">
                    Teknologi Yang Kami Gunakan Di Dalam Aplikasi Ini Akan
                    Membuat DHH Dan Jason Fried Pensiun! 😱
                  </p>
                </div>

                <div className="mt-3">
                  <p className="text-base font-normal leading-7 text-dark-bold/60">
                    Lo bisa bayangin DHH sama Jason Fried aja jadi pensiun
                    gegara aplikasi ini, apalagi lo yang cuma user dan beban
                    kami, gegara lo pake dan daftar di aplikasi ini jadi kita
                    harus bayar server DO tiap bulan, mana pas bayar harus
                    tunjuk-tunjukan. Inilah alasan kenapa gak usah daftar:
                  </p>
                </div>

                <div className="mt-10">
                  <div className="flex">
                    <div className="absolute xs:w-12 lg:w-auto">
                      <Image src={Angry} alt="angry"></Image>
                    </div>

                    <div className="xs:ml-20 lg:ml-24">
                      <p className="text-lg font-medium leading-6 text-black">
                        Kamu Adalah Beban Kami
                      </p>

                      <div className="mt-2">
                        <p className="text-base font-normal leading-6 text-dark-bold/60">
                          Semakin banyak kamu yang mendaftar di aplikasi ini,
                          artinya semakin banyak data yang perlu disimpan, nah
                          kan jadi perlu server gede tuh. Makanya kamu beban!
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-7">
                  <div className="flex">
                    <div className="absolute xs:w-12 lg:w-auto">
                      <Image src={Bear} alt="bear"></Image>
                    </div>

                    <div className="xs:ml-20 lg:ml-24">
                      <p className="text-lg font-medium leading-6 text-black">
                        Males Buat Ngembangin
                      </p>

                      <div className="mt-2">
                        <p className="text-base font-normal leading-6 text-dark-bold/60">
                          Lo bakal nemu bug, entah pesan yang mau dikirim gak
                          bisa dikirim padahal lo belom pencet tombol enter atau
                          masalah lainnya. Nah soal itu kita males buat benerin.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-7">
                  <div className="flex">
                    <div className="absolute xs:w-12 lg:w-auto">
                      <Image src={Sleep} alt="sleep"></Image>
                    </div>

                    <div className="xs:ml-20 lg:ml-24">
                      <p className="text-lg font-medium leading-6 text-black">
                        Pokoknya Males Aja Lah
                      </p>

                      <div className="mt-2">
                        <p className="text-base font-normal leading-6 text-dark-bold/60">
                          Nggak tau lagi harus ngomong apa, pokoknya males aja
                          sih kita bikin aplikasi chat kek gini. Makannya
                          mending lo pake WhatsApp aja udah.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="download-apps container mt-16 xs:container xs:rounded-md xs:bg-primary-blue lg:mt-0 lg:bg-primary-bg-light xl:container">
        <div className="py-0 lg:py-24">
          <div className="card-download">
            <div className="grid py-10 xs:gap-10 md:grid-cols-2 lg:gap-0 lg:py-24 lg:px-20">
              {/* Content-cols-1 */}
              <div>
                <div>
                  <p className="text-xs font-semibold uppercase leading-5 text-white lg:text-sm">
                    Download Aplikasinya
                  </p>
                </div>

                <div className="mt-4">
                  <p className="text-2xl font-normal leading-10 text-white lg:text-3xl">
                    Download Aplikasi Chat n&apos; Rechat Di Play Store, App
                    Store, atau Symbian Store
                  </p>
                </div>

                <div className="mt-3">
                  <ul className="ml-5 list-disc">
                    <li className="text-base font-normal leading-6 text-white/60">
                      <p>Android Version: Mojave+ iOS</p>
                    </li>

                    <li className="text-base font-normal leading-6 text-white/60">
                      <p>Version: Lolipop+</p>
                    </li>

                    <li className="text-base font-normal leading-6 text-white/60">
                      <p> Symbian: 20.04+</p>
                    </li>
                  </ul>
                </div>

                <div className="mt-10">
                  <div className="flex gap-4">
                    <div>
                      <Image
                        className="cursor-pointer"
                        src={Appstore}
                        alt="app-store"
                      ></Image>
                    </div>

                    <div>
                      <Image
                        className="cursor-pointer"
                        src={Playstore}
                        alt="play-store"
                      ></Image>
                    </div>
                  </div>
                </div>
              </div>

              {/* Content-cols-2 */}
              <div className="flex items-center justify-center self-stretch">
                <div className="self-stretch lg:absolute lg:-mt-[96px] lg:w-[315px]">
                  <Image src={Elementapps} alt="element-apps"></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="faq container xs:container xl:container">
        <div className="py-24 lg:py-24">
          <div>
            <p className="text-center font-sourcesans text-sm font-semibold uppercase tracking-widest text-dark-bold">
              Banyak Yang Nanya
            </p>
          </div>

          <div className="mt-4">
            <p className="text-center text-2xl font-normal leading-10 text-dark-bold lg:text-3xl">
              Pertanyaan Yang Sering Ditanyain
            </p>
          </div>

          <div className="mt-3 flex justify-center">
            <p className="text-center text-base font-normal leading-6 text-dark-bold/60 lg:w-8/12">
              Sebenernya pertanyaan-pertanyaan ini kagak ada yang nanya sih,
              tapi ya ditaruh sini aja siapa tau lo mau baca &apos;kan.
            </p>
          </div>

          <div className="mt-16 lg:mt-24 lg:px-32">
            <Menu>
              <Menu.Button>
                <div className="flex justify-between py-5 ms:gap-6 sm:gap-36 lg:gap-52">
                  <div>
                    <p className="text-lg font-medium leading-6">
                      Apakah aplikasi ini sudah dapat izin dari MUI?
                    </p>
                  </div>

                  <div>
                    <Image src={Dropdown} alt="dropdown"></Image>
                  </div>
                </div>

                <div className="border-b-2 border-dark-bold/5"></div>
              </Menu.Button>
              <Menu.Items>
                <Menu.Item>
                  {({ active }) => (
                    <div className={`${active}` && "flex justify-center"}>
                      <div className="mt-5 rounded-md bg-primary-blue px-7 py-5 shadow-2xl shadow-primary-blue drop-shadow-3xl">
                        <p className="text-left text-base font-normal leading-6 text-white">
                          Lorem, ipsum dolor sit amet consectetur adipisicing
                          elit. Similique facere explicabo temporibus laudantium
                          voluptatibus illum corporis facilis, nesciunt sit
                          natus ea ullam ex placeat nisi vitae non fugit sint.
                          Repellat!
                        </p>
                      </div>
                    </div>
                  )}
                </Menu.Item>
              </Menu.Items>
            </Menu>

            <div className="mt-9">
              <Menu>
                <Menu.Button>
                  <div className="flex justify-between gap-24 py-5 ms:gap-[186px] sm:gap-[303px] lg:gap-[368px]">
                    <div>
                      <p className="text-lg font-medium leading-6">
                        Apakah aplikasi ini gratis?
                      </p>
                    </div>

                    <div>
                      <Image src={Dropdown} alt="dropdown"></Image>
                    </div>
                  </div>

                  <div className="border-b-2 border-dark-bold/5"></div>
                </Menu.Button>
                <Menu.Items>
                  <Menu.Item>
                    {({ active }) => (
                      <div className={`${active}` && "flex justify-center"}>
                        <div className="mt-5 rounded-md bg-primary-blue px-7 py-5 shadow-2xl shadow-primary-blue drop-shadow-3xl">
                          <p className="text-left text-base font-normal leading-6 text-white">
                            Ya gratis dong, masa aplikasi chat aja berbayar sih.
                            Lo kalo nanya yang bener dong. Bayangin aja kalo
                            aplikasi ini berbayar, masa pas chat lo harus bayar
                            setiap karakter. Kalo lo mau bayar mending pake MMS
                            aja dah.
                          </p>
                        </div>
                      </div>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>

            <div className="mt-9">
              <Menu>
                <Menu.Button>
                  <div className="flex justify-between py-5 sm:gap-[114px] lg:gap-[180px]">
                    <div>
                      <p className="text-lg font-medium leading-6">
                        Apakah data saya akan dijual ke agen khusus US?
                      </p>
                    </div>

                    <div>
                      <Image src={Dropdown} alt="dropdown"></Image>
                    </div>
                  </div>

                  <div className="border-b-2 border-dark-bold/5"></div>
                </Menu.Button>
                <Menu.Items>
                  <Menu.Item>
                    {({ active }) => (
                      <div className={`${active}` && "flex justify-center"}>
                        <div className="mt-5 rounded-md bg-primary-blue px-7 py-5 shadow-2xl shadow-primary-blue drop-shadow-3xl">
                          <p className="text-left text-base font-normal leading-6 text-white">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Saepe alias, culpa excepturi eius ipsa nobis,
                            minus ad aut tenetur, dolor perferendis cum amet
                            sunt iure impedit. Eum asperiores amet explicabo?
                          </p>
                        </div>
                      </div>
                    )}
                  </Menu.Item>
                </Menu.Items>
              </Menu>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer container rounded-t-md bg-slate-200 xs:container lg:rounded-none lg:bg-primary-bg-light xl:container">
        <div className="bg-slate-200/40 py-20 lg:rounded-t-md lg:px-20">
          <div className="gap-7 lg:grid lg:grid-flow-col">
            <div>
              <div className="flex items-center gap-3">
                <div className="w-7">
                  <Image
                    className="navbar-logo h-9 w-9"
                    src={SayHi}
                    alt="SayHi"
                  ></Image>
                </div>
                <p className="-mt-2 items-center text-lg font-normal uppercase text-black lg:text-lg">
                  Chat N&apos; Rechat
                </p>
              </div>

              <div className="mt-3">
                <div>
                  <p className="text-base font-normal leading-6 text-dark-bold/60">
                    Sebenernya banyak banget aplikasi chatting yang lebih bagus
                    dari ini, maka dari itu lebih baik pake yang lain aja deh ya
                    daripada pake aplikasi yang ini.
                  </p>
                </div>

                <div className="mt-5">
                  <p className="text-sm uppercase leading-4 tracking-widest text-dark-bold/60">
                    Copyright (C) 2021. Design By Nauval
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div>
                <p className="text-lg leading-6 text-black">Sitemap</p>
              </div>

              <div className="mt-5">
                <ul>
                  <li className="text-base leading-6 text-dark-bold/60">
                    <Link href="/">
                      <a>Beranda</a>
                    </Link>
                  </li>

                  <li className="mt-2 text-base leading-6 text-dark-bold/60">
                    <Link href="/">
                      <a>Fitur-fitur</a>
                    </Link>
                  </li>

                  <li className="mt-2 text-base leading-6 text-dark-bold/60">
                    <Link href="/">
                      <a>Teknologi</a>
                    </Link>
                  </li>

                  <li className="mt-2 text-base leading-6 text-dark-bold/60">
                    <Link href="/">
                      <a>FAQ</a>
                    </Link>
                  </li>

                  <li className="mt-2 text-base leading-6 text-dark-bold/60">
                    <Link href="/">
                      <a>Download</a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <div>
                <p className="text-lg leading-6 text-black">Tetap terhubung</p>
              </div>

              <div className="mt-5">
                <p className="text-base leading-6 text-dark-bold/60">
                  Lihat kami pansos di sosial media berikut:
                </p>
              </div>

              <div className="mt-5 flex justify-start gap-3">
                <div>
                  <Image src={Instagram} alt="instagram"></Image>
                </div>

                <div>
                  <Image src={Facebook} alt="facebook"></Image>
                </div>

                <div>
                  <Image src={Twitter} alt="twitter"></Image>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
