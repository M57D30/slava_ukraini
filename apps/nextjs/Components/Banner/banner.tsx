import React from "react";
import Image from "next/image";
import Link from "next/link";

function Banner() {
  return (
    <section className="mx-full relative h-max w-full bg-gradient-to-b from-blue-500 to-blue-800 py-24 px-4">
      <div className="container relative z-20 mx-auto rounded-lg bg-gray-800 bg-opacity-60 p-8 text-white shadow-lg">
        <h1 className="mb-4 text-2xl font-bold md:text-5xl">
          Padovanokite vilties šypsena: pagelbėkime Ukrainos vaikams kartu
        </h1>

        <p className="text-lg leading-normal md:text-xl">
          Šiandien daugybė Ukrainos gyventojų kenčia nuo karinio konflikto, o
          šalies ekonomika taip pat kenčia dėl krizės. Tu gali padėti! Tapk
          humanitarine organizacijos inciatyvos nariu ir prisidėk prie gyventojų
          gerovės. Tavo paaukoti daiktai, kaip rūbai, maistas, vaistai, ir kita
          reikalinga medžiaga, padės tiems, kuriems reikia. Prisidėk dabar ir
          parodyk savo gerą širdį!
        </p>
        <Link
          href="/NewItemForm"
          className="mt-4 inline-block rounded bg-blue-500 p-4 font-bold text-white no-underline hover:bg-blue-800"
        >
          Įdėk skelbimą!
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
