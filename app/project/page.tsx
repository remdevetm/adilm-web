import HeaderThree from "@/components/HeaderThree/HeaderThree";
import PageTitle from "@/components/pagetitle/PageTitle";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";
import ProjectSection from "./ProjectSection";

export const metadata = {
  title: "AI agents | Adilm – AI Agency & Technology",
  description:
    "Explore Adilm's AI agents across chatbot, NLP, vision, marketing, and analytics—built to deliver real business impact.",
};

export default function ProjectPage() {
  return (
    <div className="service-page inner-page project-page adilm-ci">
      <div className="body_wrap o-clip">
        <HeaderThree />

        <main>
          <PageTitle
            pageTitle="AI agents"
            pagesub="AI agents"
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
