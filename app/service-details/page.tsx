import HeaderThree from "@/components/HeaderThree/HeaderThree";
import PageTitle from "@/components/pagetitle/PageTitle";
import ServiceDetails from "./ServiceDetails";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Rag as a Service | Adilm – AI Agency & Technology",
  description:
    "Rag as a Service – scalable, production-ready Retrieval-Augmented Generation solutions tailored to your business.",
};

export default function ServiceSinglePage() {
  return (
    <div className="about-page inner-page service-details-page">
      <div className="body_wrap o-clip">
        <HeaderThree />

        <main>
          <PageTitle
            pageTitle={<>Rag <span style={{ textTransform: "lowercase" }}>as a</span> Service</>}
            pagesub={<>Rag <span style={{ textTransform: "lowercase" }}>as a</span> Service</>}
            disableBgImage
          />
          <ServiceDetails />
        </main>

        <Footer />
        <Scrollbar />
      </div>
    </div>
  );
}
