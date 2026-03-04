import Link from "next/link";
import Image from "next/image";

// Images
import img14 from "@/public/images/service/img14.jpg";
import img15 from "@/public/images/service/img15.jpg";
import img16 from "@/public/images/service/img16.jpg";

const galleryCards = [
  {
    img: img14,
    title: "What is a RAG?",
  },
  {
    img: img15,
    title: "What is a RAG as a Service?",
  },
  {
    img: img16,
    title: "Benefit of RAG as a Service",
  },
];

export default function GallerySection() {
  return (
    <div
      className="mt-125"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(3, 1fr)",
        gap: "2rem",
      }}
    >
      {galleryCards.map((card, index) => (
        <div
          key={index}
          style={{
            background: "var(--eco-bg-alt)",
            borderRadius: "16px",
            padding: "1.25rem",
            display: "flex",
            flexDirection: "column",
            boxShadow: "var(--eco-shadow-soft)",
          }}
        >
          {/* Image */}
          <div
            style={{
              borderRadius: "12px",
              overflow: "hidden",
              position: "relative",
              width: "100%",
              aspectRatio: "4 / 3",
            }}
          >
            <Image
              src={card.img}
              alt={card.title}
              fill
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Title */}
          <h3
            style={{
              marginTop: "1.25rem",
              marginBottom: "0.75rem",
              fontSize: "1.15rem",
              fontWeight: 700,
              color: "#0f1408",
              lineHeight: 1.35,
            }}
          >
            {card.title}
          </h3>

          {/* Read More */}
          <Link
            href={
              index === 0
                ? "/blog/what-is-rag"
                : index === 1
                ? "/blog/rag-as-a-service"
                : "/blog/benefits-of-rag-as-a-service"
            }
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.95rem",
              fontWeight: 600,
              color: "#3f5f50",
              textDecoration: "none",
              marginTop: "auto",
            }}
          >
            Read More
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              style={{ marginTop: "1px" }}
            >
              <path
                d="M1 13L13 1M13 1H3M13 1V11"
                stroke="#3f5f50"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </Link>
        </div>
      ))}
    </div>
  );
}
