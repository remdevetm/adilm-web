import HeaderThree from "@/components/HeaderThree/HeaderThree";
import PageTitle from "@/components/pagetitle/PageTitle";
import BlogList from "@/components/BlogList/BlogList";
import Scrollbar from "@/components/scrollbar/scrollbar";
import Footer from "@/components/footer/Footer";

export const metadata = {
  title: "Blog | Adilm – AI Agency & Technology",
  description:
    "Explore articles, news, and insights on AI, automation, machine learning, and business technology.",
};

export default function BlogPage() {
  return (
    <div className="about-page inner-page blog-page">
      <div className="body_wrap o-clip">
        <HeaderThree />

        <main>
          <PageTitle pageTitle="Blog" pagesub="Blog" disableBgImage />
          <BlogList />
        </main>

        <Footer />
        <Scrollbar />
      </div>
    </div>
  );
}
