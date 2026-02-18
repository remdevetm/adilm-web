import { redirect } from "next/navigation";

export const metadata = {
  title: "AI Chatbot | Adilm – AI Agency & Technology",
  description:
    "Landing route redirects to the AI Chatbot page.",
};

export default function HomePage() {
  redirect("/ai-chatbot");
}
