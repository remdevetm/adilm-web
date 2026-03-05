"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";

// Icons
import subLeftIcon from "@/public/images/icon/sub-left-icon.png";
import subRightIcon from "@/public/images/icon/sub-right-icon.png";

// Brand Logos
import amazonLogo from "@/public/images/logo/amazon.webp";
import discoveryLogo from "@/public/images/logo/discovery.webp";
import logo07 from "@/public/images/logo/logo07.webp";
import sanlamLogo from "@/public/images/logo/sanlam.webp";
import standardBankLogo from "@/public/images/logo/standard-bank.webp";
import vodacomLogo from "@/public/images/brand/logo03.png";

const BRAND_LOGOS = [
  { src: amazonLogo, alt: "Amazon", large: true },
  { src: discoveryLogo, alt: "Discovery" },
  { src: logo07, alt: "Partner" },
  { src: sanlamLogo, alt: "Sanlam" },
  { src: standardBankLogo, alt: "Standard Bank", large: true },
  { src: vodacomLogo, alt: "Vodacom", large: true },
];

/* ================================ */

export default function BrandSection() {
  return (
    <section className="brand">
      <div className="container">
        <div className="sec-title sec-title--two custom-sec-title text-center mb-30">
          <span className="sub-title">
            <Image src={subLeftIcon} alt="icon-left" width={24} height={24} />
            Trusted by 9000+ AI Assistants created
            <Image src={subRightIcon} alt="icon-right" width={24} height={24} />
          </span>
        </div>
      </div>

      <Marquee
        gradient={false}
        speed={30}
        pauseOnHover
        direction="left"
        className="brand-marquee ac-brand-marquee marquee-left"
      >
        <div className="ac-brand-inner ul_li_between">
          {BRAND_LOGOS.map((item, i) => (
            <div className={`xb-brand-item${item.large ? " xb-brand-item--large" : ""}`} key={i}>
              <Image
                src={item.src}
                alt={item.alt}
                width={item.large ? 180 : 140}
                height={item.large ? 72 : 56}
                priority={i < 3}
                unoptimized
                style={{ objectFit: "contain", width: "100%", height: "100%" }}
                sizes="140px"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
