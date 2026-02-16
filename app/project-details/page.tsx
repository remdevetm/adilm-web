import Header from "@/components/Header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import ProjectDetailsSection from "./ProjectDetailsSection";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "AI Agent Details | Aivora – AI Agency & Technology",
  description:
    "Explore detailed information about our AI agents—chatbots, NLP, vision, marketing, and analytics—built to accelerate business growth.",
};

export default function ProjectDetails() {
  return (
    <div className="service-page inner-page project-details-page">
      <div className="body_wrap o-clip">
        <Header />

        <main>
          <PageTitle 
            pageTitle="AI Agent Details" 
            pagesub="AI Agent Details" 
            disableBgImage
          />
          <ProjectDetailsSection />
        </main>

        <Footer />
        <Scrollbar />
      </div>
    </div>
  );
}
