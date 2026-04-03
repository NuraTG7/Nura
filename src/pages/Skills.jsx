import { FaReact, FaJava, FaPython, FaNodeJs, FaDocker, FaGithub, FaDatabase, FaToolbox } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiMysql, SiSpringboot, SiExpress } from 'react-icons/si';

const TechCard = ({ icon, name }) => (
  <div className="flex items-center gap-3 bg-gray-100 border-2 dark:border-white border-black px-4 py-3 rounded-lg hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-pointer">
    <div className="text-xl text-black opacity-80">{icon}</div>
    <span className="text-sm font-bold text-black">{name}</span>
  </div>
);

const Skills = () => {
  return (
    <div className="animate-fade-in pb-12 cursor-default">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-display font-bold mb-4 uppercase tracking-wider text-textMain">My <span className="text-accent">Skills</span></h1>
        <p className="text-textMuted max-w-2xl mx-auto">A comprehensive overview of my technical expertise and tools across various domains.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-16">
        {/* FSD Column explicitly colored White for both themes, black border dynamically tracking light, white tracking dark */}
        <div className="bg-white border-4 dark:border-white border-black p-8 rounded-2xl relative overflow-hidden transition-colors hover:shadow-2xl cursor-pointer">
          <h2 className="text-2xl font-bold text-black mb-3 flex items-center gap-3">
            <span className="w-3 h-3 bg-accent rounded-full"></span> Full Stack Development
          </h2>
          <p className="text-gray-700 font-medium text-sm mb-8 pr-12">
            I specialize in building complete end-to-end applications using modern web technologies. Languages & Frameworks: React, Java, Python, TypeScript, Node.js.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-black text-accent uppercase tracking-wider mb-3">Frontend</h4>
              <div className="flex flex-wrap gap-3">
                <TechCard icon={<FaReact />} name="React" />
                <TechCard icon={<div className="font-bold text-center">B</div>} name="Bootstrap" />
                <TechCard icon={<div className="font-bold">H/C</div>} name="HTML/CSS" />
              </div>
            </div>
            
            <div>
              <h4 className="text-xs font-black text-accent uppercase tracking-wider mb-3">Backend</h4>
              <div className="flex flex-wrap gap-3">
                <TechCard icon={<FaNodeJs />} name="Node.js" />
                <TechCard icon={<div className="font-bold border border-current rounded-sm px-1">N</div>} name="NestJS" />
                <TechCard icon={<SiSpringboot />} name="Spring Boot" />
                <TechCard icon={<SiExpress />} name="Express.js" />
              </div>
            </div>

            <div>
              <h4 className="text-xs font-black text-accent uppercase tracking-wider mb-3">Databases & DevOps</h4>
              <div className="flex flex-wrap gap-3">
                <TechCard icon={<SiMongodb />} name="MongoDB" />
                <TechCard icon={<SiPostgresql />} name="PostgreSQL" />
                <TechCard icon={<SiMysql />} name="MySQL" />
                <TechCard icon={<FaDocker />} name="Docker" />
                <TechCard icon={<FaGithub />} name="Git/GitHub" />
              </div>
            </div>
          </div>
        </div>

        {/* AI Column clearly white on both sets */}
        <div className="bg-white border-4 dark:border-white border-black p-8 rounded-2xl relative overflow-hidden transition-colors hover:shadow-2xl cursor-pointer">
          <h2 className="text-2xl font-bold text-black mb-3 flex items-center gap-3">
            <span className="w-3 h-3 bg-accentSecondary rounded-full"></span> AI & Machine Learning
          </h2>
          <p className="text-gray-700 font-medium text-sm mb-8 pr-12">
            Expert in RAG pipelines, LLM integration, and AI agent orchestration. Skills: Fine-Tuning, Agent Orchestration, MCP Integration, Crew AI.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-black text-accentSecondary uppercase tracking-wider mb-3">AI/ML Frameworks</h4>
              <div className="flex flex-wrap gap-3">
                <TechCard icon={<FaToolbox />} name="LangChain" />
                <TechCard icon={<FaToolbox />} name="LangGraph" />
                <TechCard icon={<div className="font-bold border border-current px-1">TF</div>} name="TensorFlow" />
              </div>
            </div>
            
            <div>
              <h4 className="text-xs font-black text-accentSecondary uppercase tracking-wider mb-3">Vector DBs & LLMs</h4>
              <div className="flex flex-wrap gap-3">
                <TechCard icon={<FaDatabase />} name="Pinecone" />
                <TechCard icon={<FaDatabase />} name="Weaviate" />
                <TechCard icon={<FaDatabase />} name="FAISS" />
                <TechCard icon={<div className="font-bold">O</div>} name="Ollama" />
              </div>
            </div>

            <div>
              <h4 className="text-xs font-black text-accentSecondary uppercase tracking-wider mb-3">Specialized Tools</h4>
              <div className="flex flex-wrap gap-3">
                <TechCard icon={<FaToolbox />} name="RAGAS" />
                <TechCard icon={<FaToolbox />} name="Embeddings" />
                <TechCard icon={<FaToolbox />} name="Knowledge Graphs" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-center text-textMain mb-8 mt-12 cursor-auto">Tools & Support Stack</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {[
          { name: "Hugging Face", url: "https://huggingface.co" },
          { name: "GitHub", url: "https://github.com/arun-nehru" },
          { name: "Ollama", url: "https://ollama.ai" },
          { name: "VS Code", url: "https://code.visualstudio.com" },
          { name: "NotebookLM", url: "https://notebooklm.google.com" },
          { name: "Claude", url: "https://claude.ai" }
        ].map((tool, idx) => (
          <a key={idx} href={tool.url} target="_blank" rel="noreferrer" className="px-6 py-4 bg-white border-2 dark:border-white border-black rounded-xl text-center hover:-translate-y-2 hover:shadow-lg transition-all min-w-[140px] cursor-pointer">
            <span className="font-black text-sm text-black">{tool.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
