import Link from "next/link";
import Image from "next/image";
import HeaderThree from "@/components/HeaderThree/HeaderThree";
import PageTitle from "@/components/pagetitle/PageTitle";
import Footer from "@/components/footer/Footer";
import Scrollbar from "@/components/scrollbar/scrollbar";
import img15 from "@/public/images/service/img15.jpg";

export const metadata = {
  title: "What is RAG-as-a-Service (RAGaaS)? | Adilm",
};

export default function RagAsAService() {
  return (
    <div className="about-page inner-page blog-page">
      <div className="body_wrap o-clip">
        <HeaderThree />

        <main>
          <PageTitle pageTitle="RAG-as-a-Service" pagesub="Blog" disableBgImage />

          <section className="blog_details_section pt-70">
            <div className="container">
              <div className="single-item-image mb-70">
                <Image src={img15} alt="RAG as a Service" />
              </div>

              <div className="blog_details_content">
                <h3 className="item_details_info_heading mb-35">
                  What is RAG-as-a-Service (RAGaaS)?
                </h3>

                <div style={{ color: "var(--eco-text-body)", lineHeight: 1.8, fontSize: 18 }}>
                  <p>
                    Building a RAG system from scratch is hard. You need to manage vector
                    databases, handle &ldquo;embedding&rdquo; (turning text into math), and set
                    up complex search pipelines.
                  </p>

                  <p>
                    RAG-as-a-Service (RAGaaS) is the &ldquo;Easy Button.&rdquo; It&rsquo;s a
                    cloud-based model where a provider handles the heavy lifting. Instead of
                    building the engine, you just:
                  </p>

                  <ul>
                    <li>Upload your documents (PDFs, URLs, or spreadsheets).</li>
                    <li>Connect to an API.</li>
                    <li>Deploy a smart assistant.</li>
                  </ul>

                  <p>
                    It&rsquo;s the shift from building your own library from scratch to
                    subscribing to a digital library that organizes itself.
                  </p>

                  <p className="mt-35">
                    <Link href="/blog">&larr; Back to blog</Link>
                  </p>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
        <Scrollbar />
      </div>
    </div>
  );
}
