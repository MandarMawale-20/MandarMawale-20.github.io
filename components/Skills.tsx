import React from 'react';
import { MdSmartToy, MdDns, MdStorage, MdDescription, MdCloud, MdCode } from 'react-icons/md';
import { SectionHeader } from './common/SectionHeader';

export const Skills: React.FC = () => {
  const modules = [
    {
      title: "AI / LLM & Agentic Systems",
      icon: MdSmartToy,
      skills: ["LLMs", "RAG", "Agentic AI", "LangGraph", "LangChain", "Tool Calling", "Prompt Engineering", "LLM Evaluation"]
    },
    {
      title: "Backend Engineering",
      icon: MdDns,
      skills: ["Python", "FastAPI", "Flask", "REST APIs", "AsyncIO", "Pydantic", "Java", "Data Structures & Algorithms"]
    },
    {
      title: "Retrieval & Data",
      icon: MdStorage,
      skills: ["ChromaDB", "Pinecone", "FAISS", "PostgreSQL", "MongoDB", "Redis", "Vector Search", "Embeddings"]
    },
    {
      title: "Document Intelligence",
      icon: MdDescription,
      skills: ["OCR", "PDF Parsing", "Document Processing", "Semantic Chunking", "Metadata Extraction"]
    },
    {
      title: "Infrastructure & LLMOps",
      icon: MdCloud,
      skills: ["Docker", "vLLM", "LiteLLM", "OpenRouter", "LLM APIs", "AWS (EC2, S3)", "Git", "Linux"]
    },
    {
      title: "Frontend Engineering",
      icon: MdCode,
      skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "Tailwind CSS"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-12">
        <SectionHeader
          cmd="cat skills.json | jq '.'"
          title="Technical Stack"
          sub="Core technologies used to architect, build, and deploy production systems."
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {modules.map((mod) => {
          const IconComponent = mod.icon;
          return (
            <div
              key={mod.title}
              className="panel p-5 sm:p-6 transition-colors hover:border-[var(--border-strong)]"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="text-[var(--accent)]">
                  <IconComponent size={20} />
                </div>
                <h3 className="text-sm font-bold text-[var(--text-strong)] font-mono">
                  {mod.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-1.5">
                {mod.skills.map((skill) => (
                  <span key={skill} className="chip">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
