import { FaReact, FaJava, FaPython, FaNodeJs, FaDocker, FaGithub, FaDatabase, FaToolbox } from 'react-icons/fa';
import { SiTypescript, SiMongodb, SiPostgresql, SiMysql, SiSpringboot, SiExpress } from 'react-icons/si';

/* Each tech chip links to its official page */
const TechCard = ({ icon, name, url }) => (
  <a
    href={url}
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center gap-3 bg-gray-100 dark:bg-black border border-black dark:border-white px-4 py-3 rounded-lg hover:-translate-y-1 hover:shadow-[0_4px_15px_rgba(0,0,0,0.3)] transition-all duration-300 cursor-pointer"
  >
    <div className="text-xl text-black dark:text-white opacity-80">{icon}</div>
    <span className="text-sm font-bold text-black dark:text-white">{name}</span>
  </a>
);

const Skills = () => {
  return (
    <div className="animate-fade-in pb-12 cursor-default">
      <div className="mb-16 text-center">
        <h1 className="text-4xl font-display font-bold mb-4 uppercase tracking-wider text-textMain">My <span className="text-accent">Skills</span></h1>
        <p className="text-textMuted max-w-2xl mx-auto">A comprehensive overview of my technical expertise and tools across various domains.</p>
      </div>

      <div className="grid lg:grid-cols-2 gap-8 mb-16">

        {/* ── Full Stack Development ── */}
        <div className="bg-white dark:bg-black border-[3px] border-black dark:border-white p-8 rounded-2xl relative overflow-hidden transition-colors hover:shadow-2xl cursor-pointer">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-3 flex items-center gap-3">
            <span className="w-3 h-3 bg-accent rounded-full"></span> Full Stack Development
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-medium text-sm mb-8 pr-12">
            I specialize in building complete end-to-end applications using modern web technologies. Languages &amp; Frameworks: React, Java, Python, TypeScript, Node.js.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">Frontend</h4>
              <div className="flex flex-wrap gap-3">
                <TechCard icon={<FaReact />}                                          name="React"       url="https://react.dev" />
                <TechCard icon={<div className="font-bold text-center">B</div>}       name="Bootstrap"   url="https://getbootstrap.com" />
                <TechCard icon={<div className="font-bold">H/C</div>}                 name="HTML/CSS"    url="https://developer.mozilla.org/en-US/docs/Web" />
              </div>
            </div>

            <div>
              <h4 className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">Backend</h4>
              <div className="flex flex-wrap gap-3">
                <TechCard icon={<FaNodeJs />}                                                        name="Node.js"      url="https://nodejs.org" />
                <TechCard icon={<div className="font-bold border border-current rounded-sm px-1">N</div>} name="NestJS"  url="https://nestjs.com" />
                <TechCard icon={<SiSpringboot />}                                                     name="Spring Boot" url="https://spring.io/projects/spring-boot" />
                <TechCard icon={<SiExpress />}                                                        name="Express.js"  url="https://expressjs.com" />
              </div>
            </div>

            <div>
              <h4 className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">Databases &amp; DevOps</h4>
              <div className="flex flex-wrap gap-3">
                <TechCard icon={<SiMongodb />}    name="MongoDB"    url="https://www.mongodb.com" />
                <TechCard icon={<SiPostgresql />} name="PostgreSQL" url="https://www.postgresql.org" />
                <TechCard icon={<SiMysql />}      name="MySQL"      url="https://www.mysql.com" />
                <TechCard icon={<FaDocker />}     name="Docker"     url="https://www.docker.com" />
                <TechCard icon={<FaGithub />}     name="Git/GitHub" url="https://github.com" />
              </div>
            </div>
          </div>
        </div>

        {/* ── AI & Machine Learning ── */}
        <div className="bg-white dark:bg-black border-[3px] border-black dark:border-white p-8 rounded-2xl relative overflow-hidden transition-colors hover:shadow-2xl cursor-pointer">
          <h2 className="text-2xl font-bold text-black dark:text-white mb-3 flex items-center gap-3">
            <span className="w-3 h-3 bg-accentSecondary rounded-full"></span> AI &amp; Machine Learning
          </h2>
          <p className="text-gray-700 dark:text-gray-300 font-medium text-sm mb-8 pr-12">
            Expert in RAG pipelines, LLM integration, and AI agent orchestration. Skills: Fine-Tuning, Agent Orchestration, MCP Integration, Crew AI.
          </p>

          <div className="space-y-6">
            <div>
              <h4 className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">AI/ML Frameworks</h4>
              <div className="flex flex-wrap gap-3">
                <TechCard icon={<FaToolbox />}                                              name="LangChain"   url="https://www.langchain.com" />
                <TechCard icon={<FaToolbox />}                                              name="LangGraph"   url="https://www.langchain.com/langgraph" />
                <TechCard icon={<div className="font-bold border border-current px-1">TF</div>} name="TensorFlow" url="https://www.tensorflow.org" />
              </div>
            </div>

            <div>
              <h4 className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">Vector DBs &amp; LLMs</h4>
              <div className="flex flex-wrap gap-3">
                <TechCard icon={<FaDatabase />}                    name="Pinecone"  url="https://www.pinecone.io" />
                <TechCard icon={<FaDatabase />}                    name="Weaviate"  url="https://weaviate.io" />
                <TechCard icon={<FaDatabase />}                    name="FAISS"     url="https://faiss.ai" />
                <TechCard icon={<div className="font-bold">O</div>} name="Ollama"   url="https://ollama.ai" />
              </div>
            </div>

            <div>
              <h4 className="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-wider mb-3">Specialized Tools</h4>
              <div className="flex flex-wrap gap-3">
                <TechCard icon={<FaToolbox />} name="RAGAS"            url="https://docs.ragas.io" />
                <TechCard icon={<FaToolbox />} name="Embeddings"       url="https://platform.openai.com/docs/guides/embeddings" />
                <TechCard icon={<FaToolbox />} name="Knowledge Graphs" url="https://www.ontotext.com/knowledgehub/fundamentals/what-is-a-knowledge-graph/" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <h3 className="text-2xl font-bold text-center text-textMain mb-8 mt-12 cursor-auto">Tools &amp; Support Stack</h3>
      <div className="flex flex-wrap justify-center gap-4">
        {[
          { name: "Hugging Face",  url: "https://huggingface.co" },
          { name: "GitHub",        url: "https://github.com" },
          { name: "Ollama",        url: "https://ollama.ai" },
          { name: "VS Code",       url: "https://code.visualstudio.com" },
          { name: "NotebookLM",    url: "https://notebooklm.google.com" },
          { name: "Claude",        url: "https://claude.ai" }
        ].map((tool, idx) => (
          <a
            key={idx}
            href={tool.url}
            target="_blank"
            rel="noreferrer"
            className="px-6 py-4 bg-white dark:bg-black border border-black dark:border-white rounded-xl text-center hover:-translate-y-2 hover:shadow-lg transition-all min-w-[140px] cursor-pointer"
          >
            <span className="font-black text-sm text-black dark:text-white">{tool.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Skills;
