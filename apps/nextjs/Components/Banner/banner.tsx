import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useTranslation } from "react-i18next";

function Banner() {
  const { t } = useTranslation();
  return (
    <section className="mx-full relative h-max w-full bg-gradient-to-b from-blue-500 to-blue-800 py-24 px-4">
      <div className="container relative z-20 mx-auto rounded-lg bg-gray-800 bg-opacity-60 p-8 text-white shadow-lg">
        <h1 className="mb-4 text-2xl font-bold md:text-5xl">
          {t("banner.title")}
        </h1>

        <p className="text-lg leading-normal md:text-xl">{t("banner.text")}</p>
        <Link
          href="/NewItemForm"
          className="mt-4 inline-block rounded bg-blue-500 p-4 font-bold text-white no-underline hover:bg-blue-800"
        >
          {t("banner.button")}
        </Link>
      </div>
      <div className="absolute inset-0 z-10 h-auto">
        <Image
          src="/banner12.jpg"
          alt=""
          className="object-fit-cover h-full w-full"
          layout="fill"
        />
      </div>
    </section>
  );
}

export default Banner;
