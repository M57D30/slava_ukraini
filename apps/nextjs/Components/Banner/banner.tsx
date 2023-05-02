import React from "react";
import Image from "next/image";

function banner() {
  return (
    <section className="relative mx-auto max-w-screen-lg py-24 px-4">
      <div className="container relative z-20 mx-auto  text-yellow-500">
        <h1 className="mb-4">Tailwind Banner with Object Fit Image</h1>
        <p className="leading-normal ">
          This is a banner that can be resized to your heart’s content without
          using a background image property.
        </p>
        <p className="leading-normal">
          Integer eu massa ipsum. Quisque dui purus, congue in urna sed,
          volutpat condimentum nisi. Ut elementum tellus quam, sit amet congue
          ante tempus id. Phasellus ultricies enim in est posuere, quis semper
          urna consequat.
        </p>
        <a
          href="#"
          className="mt-4 inline-block rounded bg-blue-500 p-4 font-bold text-white no-underline hover:bg-blue-800"
        >
          Įdėk skelbimą!
        </a>
      </div>
      <div className="absolute inset-0 z-10 h-auto">
        <Image
          src="/banner.png"
          alt=""
          className="object-fit-cover h-full w-full"
          layout="fill"
        />
      </div>
    </section>
  );
}

export default banner;
