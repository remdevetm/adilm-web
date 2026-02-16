import Header from "@/components/Header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import ServiceDetails from "./ServiceDetails";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Rag as a Service | Aivora – AI Agency & Technology",
  description:
    "Rag as a Service – scalable, production-ready Retrieval-Augmented Generation solutions tailored to your business.",
};

export default function ServiceSinglePage() {
  return (
    <div className="about-page inner-page service-details-page">
      <div className="body_wrap o-clip">
        <Header />

        <main>
          <PageTitle
            pageTitle="Rag as a Service"
            pagesub="Rag as a Service"
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
