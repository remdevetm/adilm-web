import Header from "@/components/Header/Header";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import ProjectSection from "./ProjectSection";

export const metadata = {
  title: "Our AI agents | Aivora – AI Agency & Technology",
  description:
    "Explore Aivora's AI agents across chatbot, NLP, vision, marketing, and analytics—built to deliver real business impact.",
};

export default function ProjectPage() {
  return (
    <div className="service-page inner-page project-page">
      <div className="body_wrap o-clip">
        <Header />

        <main>
          <PageTitle
            pageTitle="Our AI agents"
            pagesub="Our AI agents"
            disableBgImage
          />
          <ProjectSection />
        </main>

        <Footer />
        <Scrollbar />
      </div>
    </div>
  );
}
