"use client";
import { useState } from "react";

export default function GenerateBlogPage() {
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<any>(null);
  const [error, setError] = useState("");

  async function handleGenerate(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");
    setResult(null);
    try {
      const res = await fetch("/api/generate-blog", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ topic }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to generate blog");
      setResult(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ maxWidth: 700, margin: "40px auto", padding: 24, background: "#fff", borderRadius: 16, boxShadow: "0 2px 16px #0001" }}>
      <h1 style={{ fontSize: 32, fontWeight: 700, marginBottom: 16, color: "#223" }}>AI Blog Generator</h1>
      <form onSubmit={handleGenerate} style={{ marginBottom: 32 }}>
        <label style={{ fontWeight: 500, fontSize: 18, color: "#223" }}>
          Topic:
          <input
            type="text"
            value={topic}
            onChange={e => setTopic(e.target.value)}
            placeholder="Enter a topic (e.g. AI in healthcare)"
            style={{
              marginLeft: 12,
              padding: "8px 14px",
              fontSize: 18,
              borderRadius: 8,
              border: "1px solid #bbb",
              width: 340,
              maxWidth: "100%",
              marginBottom: 8,
            }}
            required
          />
        </label>
        <button
          type="submit"
          disabled={loading || !topic.trim()}
          style={{
            marginLeft: 16,
            padding: "10px 28px",
            fontSize: 18,
            fontWeight: 600,
            borderRadius: 8,
            border: "none",
            background: "#355e4b",
            color: "#fff",
            cursor: loading ? "not-allowed" : "pointer",
            boxShadow: "0 1px 4px #0001",
            transition: "background 0.2s",
          }}
        >
          {loading ? "Generating..." : "Generate"}
        </button>
      </form>
      {error && <div style={{ color: "#c00", marginBottom: 16 }}>{error}</div>}
      {result && (
        <div style={{ background: "#f8f9fa", borderRadius: 12, padding: 20, marginTop: 16 }}>
          <h2 style={{ fontSize: 24, fontWeight: 700, color: "#223" }}>{result.title}</h2>
          <div style={{ color: "#666", marginBottom: 8 }}><b>Slug:</b> {result.slug}</div>
          <div style={{ color: "#666", marginBottom: 8 }}><b>Excerpt:</b> {result.excerpt}</div>
          <div style={{ color: "#666", marginBottom: 8 }}><b>Tags:</b> {result.tags?.join(", ")}</div>
          <div style={{ color: "#666", marginBottom: 8 }}><b>SEO Description:</b> {result.seoDescription}</div>
          <div style={{ color: "#666", marginBottom: 8 }}><b>Status:</b> {result.status}</div>
          <div style={{ color: "#666", marginBottom: 8 }}><b>Created By:</b> {result.createdBy}</div>
          <div style={{ color: "#666", marginBottom: 8 }}><b>Publish At:</b> {result.publishAt}</div>
          <div style={{ color: "#222", marginTop: 18 }}>
            <b>Body:</b>
            <pre style={{ whiteSpace: "pre-wrap", background: "#fff", padding: 12, borderRadius: 8, marginTop: 8, fontSize: 16 }}>{result.bodyMarkdown}</pre>
          </div>
        </div>
      )}
    </div>
  );
}
