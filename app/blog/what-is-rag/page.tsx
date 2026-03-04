import Link from "next/link";
import HeaderThree from "@/components/HeaderThree/HeaderThree";
import PageTitle from "@/components/pagetitle/PageTitle";
import Footer from "@/components/footer/Footer";
import Scrollbar from "@/components/scrollbar/scrollbar";

export const metadata = {
  title: "Beyond the Training Data: What is RAG? | Adilm",
};

export default function WhatIsRag() {
  return (
    <div className="about-page inner-page blog-page">
      <div className="body_wrap o-clip">
        <HeaderThree />

        <main>
          <PageTitle pageTitle="What is RAG?" pagesub="Blog" disableBgImage />

          <section className="blog_details_section pt-70">
            <div className="container">
              <div className="blog_details_content">
                <h3 className="item_details_info_heading mb-35">
                  Beyond the Training Data: What is RAG?
                </h3>

                <div style={{ color: "var(--eco-text-body)", lineHeight: 1.8, fontSize: 18 }}>
                  <p>
                    In the world of Artificial Intelligence, Large Language Models (LLMs) like GPT-4
                    are incredibly smart, but they have a &ldquo;cutoff date.&rdquo; They only know
                    what they were trained on. If you ask a standard LLM about your
                    company&rsquo;s internal Q4 sales report from yesterday, it will likely
                    hallucinate or admit it doesn&rsquo;t know.
                  </p>

                  <p>Enter <strong>RAG</strong>, or <strong>Retrieval-Augmented Generation</strong>.</p>

                  <h4 className="item_details_info_heading mb-20 mt-35">How RAG Works</h4>

                  <p>
                    Think of an LLM as a brilliant student taking an exam. A standard LLM relies
                    purely on its memory. RAG, however, allows that student to bring a textbook
                    into the exam room.
                  </p>

                  <p>The process happens in two main steps:</p>

                  <ul>
                    <li>
                      <strong>Retrieval:</strong> When you ask a question, the system searches a
                      specific &ldquo;knowledge base&rdquo; (like your PDFs, databases, or live
                      web pages) for relevant information.
                    </li>
                    <li>
                      <strong>Augmentation &amp; Generation:</strong> The system takes that specific
                      info and hands it to the LLM. The LLM then uses that data to
                      &ldquo;generate&rdquo; a precise, factual answer.
                    </li>
                  </ul>

                  <h4 className="item_details_info_heading mb-20 mt-35">Why It Matters</h4>

                  <p>
                    RAG transforms an AI from a general-purpose chatbot into a specialized expert
                    on your specific data. It reduces &ldquo;hallucinations&rdquo; because the AI
                    is required to cite its sources from the provided text, ensuring your outputs
                    are grounded in reality.
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
