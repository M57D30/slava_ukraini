import React from "react";
import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/">
      <div className="m-2 h-10 w-auto">
        <Image src="/Logo.png" alt="Logo" height={100} width={200} />
      </div>
    </Link>
  );
}

export default Logo;
