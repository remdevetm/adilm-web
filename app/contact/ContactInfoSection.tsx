import Image from "next/image";
import Link from "next/link";

// --- contact images ---
import theBankImg from "@/public/images/contact/The-Bank.jpg";

// --- arrow icons ---
import arrowWhite from "@/public/images/icon/rotate-arrow-white02.svg";
import arrowBlack from "@/public/images/icon/rotate-arrow-black03.svg";
import emailIcon from "@/public/images/icon/email-icon.svg";

// ---- contact items data ----
const contactData = [
  {
    location: "Cnr Tyrwhitt & 24 Cradock Ave, Rosebank, JHB, 2196",
    phone: "+27 67 224 8032",
    email: "john@adilm.ai",
  },
];

export default function ContactInfoSection() {
  return (
    <section className="contact pb-150">
      <div className="container">
        <div className="row mt-none-30">

          {contactData.map((item, index) => (
            <div className="col-lg-4 col-md-6 mt-30" key={index}>
              <div className="xb-contact-items img-hove-effect xb-border">
                <div className="xb-item--inner">

                  {/* 555×391 hero image – The Bank */}
                  <div className="xb-img xb-img--contact-hero">
                    <Image
                      src={theBankImg}
                      alt="The Bank Voco – Adilm office location"
                      width={555}
                      height={391}
                      className="contact-hero-img"
                      sizes="(max-width: 768px) 100vw, 555px"
                    />
                  </div>

                  {/* Content */}
                  <div className="xb-item--holder">
                    <p className="xb-item--location">{item.location}</p>

                    <span className="xb-item--contact_info">{item.phone}</span>

                    <a
                      href="mailto:john@adilm.ai"
                      className="thm-btn form-btn contact-email-btn mt-20"
                    >
                      <Image src={emailIcon} alt="" aria-hidden className="contact-email-icon" />
                      john@adilm.ai
                    </a>

                    <Link href="/contact" className="thm-btn form-btn mt-45">
                      VIEW LOCATION
                      <span className="xb-icon">
                        <Image src={arrowWhite} alt="arrow icon" />
                        <Image src={arrowBlack} alt="arrow icon" />
                      </span>
                    </Link>
                  </div>

                </div>
              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
