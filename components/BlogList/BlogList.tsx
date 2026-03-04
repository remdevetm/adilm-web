"use client";
import BlogSlider from "./BlogTopList";
import BlogSidebar from "../BlogSidebar/BlogSidebar";
import Link from "next/link";
import { useEffect, useState } from "react";

type BlogPost = {
  _id: string;
  title: string;
  slug: string;
  excerpt: string;
  bodyMarkdown?: string;
  tags?: string[];
  seoDescription?: string;
  status?: string;
  publishAt?: string;
  createdBy?: string;
  createdAt?: string;
  imageUrl: string;
};

export default function BlogList() {
  const [posts, setPosts] = useState<BlogPost[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const res = await fetch("/api/posts");
        if (!res.ok) throw new Error("no api");
        const data = await res.json();
        if (Array.isArray(data) && data.length > 0) {
          setPosts(data);
        } else {
          // fallback posts if API missing or empty
          setPosts([
            {
              _id: "rag-1",
              title: "What is RAG? The Secret to Fact-Checking Your AI",
              slug: "what-is-rag",
              excerpt:
                "RAG gives AI a search engine for your data — search, read, and answer from trusted documents.",
              imageUrl: "/images/service/img14.jpg",
            },
            {
              _id: "rag-2",
              title: "What is RAG-as-a-Service (RAGaaS)?",
              slug: "rag-as-a-service",
              excerpt:
                "RAGaaS is the easy, cloud-hosted option — upload documents, call an API, deploy assistants.",
              imageUrl: "/images/service/img15.jpg",
            },
            {
              _id: "rag-3",
              title: "4 Reasons Why Your Business Needs RAG-as-a-Service",
              slug: "benefits-of-rag-as-a-service",
              excerpt:
                "Zero maintenance, instant scale, enterprise security, and faster time-to-market.",
              imageUrl: "/images/service/img16.jpg",
            },
          ]);
        }
      } catch (e) {
        // API not available — use local fallback posts
        setPosts([
          {
            _id: "rag-1",
            title: "What is RAG? The Secret to Fact-Checking Your AI",
            slug: "what-is-rag",
            excerpt:
              "RAG gives AI a search engine for your data — search, read, and answer from trusted documents.",
            imageUrl: "/images/service/img14.jpg",
          },
          {
            _id: "rag-2",
            title: "What is RAG-as-a-Service (RAGaaS)?",
            slug: "rag-as-a-service",
            excerpt:
              "RAGaaS is the easy, cloud-hosted option — upload documents, call an API, deploy assistants.",
            imageUrl: "/images/service/img15.jpg",
          },
          {
            _id: "rag-3",
            title: "4 Reasons Why Your Business Needs RAG-as-a-Service",
            slug: "benefits-of-rag-as-a-service",
            excerpt:
              "Zero maintenance, instant scale, enterprise security, and faster time-to-market.",
            imageUrl: "/images/service/img16.jpg",
          },
        ]);
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  return (
    <div>
      <BlogSlider />
      <section className="blog_details_section pt-120">
        <div className="container">
          <div className="row mt-none-50 g-0 align-items-start">
            <div className="col-lg-8 mt-50">
              <div className="blog_details_content">
                {loading ? (
                  <div>Loading...</div>
                ) : posts.length === 0 ? (
                  <div>No posts found.</div>
                ) : (
                  posts.map((post) => (
                    <div className="blog_details_item xb-border" key={post._id}>
                      <div className="xb-item--inner">
                        {post.imageUrl && (
                          <img src={post.imageUrl} alt={post.title} style={{ maxWidth: "100%", marginBottom: 16 }} />
                        )}
                        <h3 className="xb-item--title border-effect-2">
                          <Link href={`/blog/${post.slug}`}>{post.title}</Link>
                        </h3>
                        <p>{post.excerpt}</p>
                        <div className="xb-item--button mt-40">
                          <Link className="thm-btn agency-btn" href={`/blog/${post.slug}`}>
                            <span className="text">Read more</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
            {/* SIDEBAR */}
            <BlogSidebar />
          </div>
        </div>
      </section>
    </div>
  );
}