"use client";

import { useState } from "react";

export default function ServiceFaq() {
  // Active accordion index
  const [active, setActive] = useState<number>(1);

  const toggleAccordion = (index: number) => {
    setActive(active === index ? -1 : index);
  };

  const faqItems = [
    {
      id: 1,
      title: "01. Scoping Your Knowledge",
      content:
        "We map your data sources, access rules, and success metrics so retrieval is useful, safe, and measurable",
    },
    {
      id: 2,
      title: "02. Index Design",
      content:
        "We choose chunking, embeddings, and vector-store strategy to match your content and query patterns.",
    },
    {
      id: 3,
      title: "03. Pipeline Alignment",
      content:
        "We connect ingestion, retrieval, reranking, and tool-use so every answer is grounded and traceable.",
    },
    {
      id: 4,
      title: "04. Quality Reporting",
      content:
        "We measure retrieval quality, citation coverage, latency, and business impact, then iterate continuously.",
    },
  ];

  return (
    <div className="service-process-wrap pt-120 pb-125">
      <div className="row mt-none-50 align-items-center">
        {/* LEFT SIDE ACCORDION */}
        <div className="col-lg-6 mt-50">
          <h2 className="details-content-title mb-40">RAG implementation process</h2>

          <div className="service_process_faq">
            <div className="accordion">
              {faqItems.map((item) => (
                <div className="accordion-item" key={item.id}>
                  <div
                    className={`accordion-button ${
                      active === item.id ? "" : "collapsed"
                    }`}
                    role="button"
                    onClick={() => toggleAccordion(item.id)}
                  >
                    {item.title}
                  </div>

                  <div
                    className={`accordion-collapse collapse ${
                      active === item.id ? "show" : ""
                    }`}
                  >
                    <div className="accordion-body">
                      <p className="m-0">{item.content}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT SIDE CLICKABLE LIST */}
        <div className="col-lg-6 mt-50">
          <ul className="content_layer_group list-unstyled">
            {faqItems.map((item) => (
              <li
                key={item.id}
                onClick={() => toggleAccordion(item.id)}
                className={active === item.id ? "active" : ""}
              >
                <span>{item.title.replace(/^\d+\.\s/, "")}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};