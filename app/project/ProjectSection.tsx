import Link from "next/link";
import Image from "next/image";

// IMPORT IMAGES
import img02 from "@/public/images/project/img02.jpg";
import img03 from "@/public/images/project/img03.jpg";
import img04 from "@/public/images/project/img04.jpg";
import img05 from "@/public/images/project/img05.jpg";
import img06 from "@/public/images/project/img06.jpg";

// Arrow Icon
const ArrowIcon = () => (
  <>
    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <rect x="5.23" y="17.32" width="17.88" height="2.27" transform="rotate(-40.28 5.23 17.32)" fill="white" />
      <rect x="7.75" y="6.25" width="2.27" height="2.27" transform="rotate(-40.28 7.75 6.25)" fill="white" />
      <rect x="10.95" y="6.52" width="2.27" height="2.27" transform="rotate(-40.28 10.95 6.52)" fill="white" />
      <rect x="14.16" y="6.78" width="2.27" height="2.27" transform="rotate(-40.28 14.16 6.78)" fill="white" />
      <rect x="17.09" y="10.25" width="2.27" height="2.27" transform="rotate(-40.28 17.09 10.25)" fill="white" />
      <rect x="16.83" y="13.45" width="2.27" height="2.27" transform="rotate(-40.28 16.83 13.45)" fill="white" />
      <rect x="16.56" y="16.65" width="2.27" height="2.27" transform="rotate(-40.28 16.56 16.65)" fill="white" />
    </svg>

    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
      <rect x="5.23" y="17.32" width="17.88" height="2.27" transform="rotate(-40.28 5.23 17.32)" fill="white" />
      <rect x="7.75" y="6.25" width="2.27" height="2.27" transform="rotate(-40.28 7.75 6.25)" fill="white" />
      <rect x="10.95" y="6.52" width="2.27" height="2.27" transform="rotate(-40.28 10.95 6.52)" fill="white" />
      <rect x="14.16" y="6.78" width="2.27" height="2.27" transform="rotate(-40.28 14.16 6.78)" fill="white" />
      <rect x="17.09" y="10.25" width="2.27" height="2.27" transform="rotate(-40.28 17.09 10.25)" fill="white" />
      <rect x="16.83" y="13.45" width="2.27" height="2.27" transform="rotate(-40.28 16.83 13.45)" fill="white" />
      <rect x="16.56" y="16.65" width="2.27" height="2.27" transform="rotate(-40.28 16.56 16.65)" fill="white" />
    </svg>
  </>
);

// PROJECT DATA
const projectData = [
  {
    title: "Autonomous Customer Service Agent..",
    content:
      "An end-to-end support agent that chats with customers, logs tickets into the helpdesk, checks billing, reminds users to update payments, verifies receipts, and reinstates accounts automatically once cleared.",
    images: [img02, img02, img02, img02],
    reverse: false,
  },
  {
    title: "Co-pilot for Humans..",
    content:
      "A real-time co‑pilot that listens to support calls and suggests next questions, product recommendations, appointment scheduling, and clear explanations. After the call, it runs QA and highlights improvements.",
    images: [img03, img03, img03, img03],
    reverse: true,
  },
  {
    title: "AI Agents for Auditors..",
    content:
      "AI agents for auditors that ingest semi‑structured and structured data, trace anomalies, generate evidence trails, and auto‑populate audit templates. They summarize risk areas and support deep, repeatable reviews.",
    images: [img04, img04, img04, img04],
    reverse: false,
  },
  {
    title: "Proposal Writing Agent..",
    content:
      "A proposal-writing agent that turns sales conversations into polished, tailored proposals. It maps customer needs to your catalog, drafts scope and pricing language, and outputs ready-to-send documents fast.",
    images: [img05, img05, img05, img05],
    reverse: true,
  },
  {
    title: "AI Tutor & Simulation Coach..",
    content:
      "An AI tutor that teaches any subject and runs simulations for customer service, interviews, and tertiary learning. It practices dialogues, gives step-by-step coaching, and builds confidence through feedback.",
    images: [img06, img06, img06, img06],
    reverse: false,
  },
];

export default function ProjectSection() {
  return (
    <section className="service pos-rel">
      <div className="container mxw-1650">
        <div className="xb-project-wrap xb-project-wrap_2">

          {projectData.map((item, index) => (
            <div className="xb-project-item" key={index}>

              {!item.reverse ? (
                <>
                  <div className="xb-project-content">
                    <div className="xb-item--inner xb-border">
                      <h2 className="xb-item--title">{item.title}</h2>
                      <p className="xb-item--content clr-white">{item.content}</p>

                      <div className="xb-item--btn mt-40">
                        <Link className="thm-btn agency-btn" href="/project-details">
                          <span className="text">read more</span>
                          <span className="arrow">
                            <span className="arrow-icon"><ArrowIcon /></span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>

                  <div className="xb-project-img img-hove-effect">
                    <div className="xb-img">
                      {item.images.map((img, i) => (
                        <Link href="/project-details" key={i}>
                          <Image
                            src={img}
                            alt={item.title}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <>
                  <div className="xb-project-img img-hove-effect">
                    <div className="xb-img">
                      {item.images.map((img, i) => (
                        <Link href="/project-details" key={i}>
                          <Image
                            src={img}
                            alt={item.title}
                          />
                        </Link>
                      ))}
                    </div>
                  </div>

                  <div className="xb-project-content">
                    <div className="xb-item--inner xb-border">
                      <h2 className="xb-item--title">{item.title}</h2>
                      <p className="xb-item--content clr-white">{item.content}</p>

                      <div className="xb-item--btn mt-40">
                        <Link className="thm-btn agency-btn" href="/project-details">
                          <span className="text">read more</span>
                          <span className="arrow">
                            <span className="arrow-icon"><ArrowIcon /></span>
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </>
              )}

            </div>
          ))}

        </div>
      </div>
    </section>
  );
}
