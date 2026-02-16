import BlogSlider from "./BlogTopList";
import BlogSidebar from "../BlogSidebar/BlogSidebar";
import Link from "next/link";

// IMPORT ALL BLOG IMAGES
import blog05 from "@/public/images/blog/img05.jpg";
import blog06 from "@/public/images/blog/img06.jpg";
import blog07 from "@/public/images/blog/img07.jpg";

const Icons = {
  arrow: (
    <>
      <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
        <rect x="3.783" y="13.463" width="14.31" height="1.817" transform="rotate(-40.2798 3.783 13.463)" fill="white" />
        <rect x="5.807" y="4.605" width="1.817" height="1.817" transform="rotate(-40.2798 5.807 4.605)" fill="white" />
        <rect x="8.367" y="4.816" width="1.817" height="1.817" transform="rotate(-40.2798 8.367 4.816)" fill="white" />
        <rect x="10.926" y="5.028" width="1.817" height="1.817" transform="rotate(-40.2798 10.926 5.028)" fill="white" />
        <rect x="13.277" y="7.8" width="1.817" height="1.817" transform="rotate(-40.2798 13.277 7.8)" fill="white" />
        <rect x="13.066" y="10.361" width="1.817" height="1.817" transform="rotate(-40.2798 13.066 10.361)" fill="white" />
        <rect x="12.855" y="12.922" width="1.817" height="1.817" transform="rotate(-40.2798 12.855 12.922)" fill="white" />
      </svg>

      <svg width="20" height="19" viewBox="0 0 20 19" fill="none">
        <rect x="3.783" y="13.463" width="14.31" height="1.817" transform="rotate(-40.2798 3.783 13.463)" fill="white" />
        <rect x="5.807" y="4.605" width="1.817" height="1.817" transform="rotate(-40.2798 5.807 4.605)" fill="white" />
        <rect x="8.367" y="4.816" width="1.817" height="1.817" transform="rotate(-40.2798 8.367 4.816)" fill="white" />
        <rect x="10.926" y="5.028" width="1.817" height="1.817" transform="rotate(-40.2798 10.926 5.028)" fill="white" />
        <rect x="13.277" y="7.8" width="1.817" height="1.817" transform="rotate(-40.2798 13.277 7.8)" fill="white" />
        <rect x="13.066" y="10.361" width="1.817" height="1.817" transform="rotate(-40.2798 13.066 10.361)" fill="white" />
        <rect x="12.855" y="12.922" width="1.817" height="1.817" transform="rotate(-40.2798 12.855 12.922)" fill="white" />
      </svg>
    </>
  ),
};

export default function BlogList() {
  const blogPosts = [
    { title: "How AI is Transforming Businesses Across Industries", link: "/blog-details" },
    { title: "Getting started with AI Beginner Guide for Business Leaders", link: "/blog-details" },
    { title: "The Future of Work: How AI is Changing the Way We Work", link: "/blog-details" },
    { title: "How Artificial Intelligence Drives Decision-Making", link: "/blog-details" },
    { title: "Exploring AI Integration in Modern Business Solutions", link: "/blog-details" },
    { title: "Revolutionizing Industries with the Power of AI", link: "/blog-details" },
  ];
  return (
    <div>
      <BlogSlider />
      <section className="blog_details_section pt-120">
        <div className="container">
          <div className="row mt-none-50 g-0 align-items-start">
            <div className="col-lg-8 mt-50">
              <div className="blog_details_content">
                {blogPosts.map((post, idx) => (
                  <div className="blog_details_item xb-border" key={idx}>
                    <div className="xb-item--inner">
                      <h3 className="xb-item--title border-effect-2">
                        <Link href={post.link}>{post.title}</Link>
                      </h3>
                      <div className="xb-item--button mt-40">
                        <Link className="thm-btn agency-btn" href={post.link}>
                          <span className="text">Read more</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            {/* SIDEBAR */}
            <BlogSidebar />
          </div>
        </div>
      </section>
    </div>
  );
};