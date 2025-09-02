import {
  FaJsSquare,
  FaReact,
  FaNodeJs,
  FaPython,
  FaJava,
  FaDocker,
} from "react-icons/fa";
import {
  SiExpress,
  SiMongodb,
  SiFirebase,
  SiFlutter,
  SiN8N,
  SiKubernetes,
} from "react-icons/si";

const skills = [
  {
    icon: <FaJsSquare size="48" className="text-yellow-400" />,
    name: "JavaScript",
  },
  { icon: <FaReact size="48" className="text-sky-400" />, name: "ReactJS" },
  { icon: <FaNodeJs size="48" className="text-green-500" />, name: "NodeJS" },
  {
    icon: <SiExpress size="48" className="text-gray-600" />,
    name: "Express",
  },
  { icon: <SiMongodb size="48" className="text-green-500" />, name: "MongoDB" },
  { icon: <SiFlutter size="48" className="text-sky-500" />, name: "Flutter" },
  { icon: <SiFirebase size="48" className="text-amber-500" />, name: "Firebase" },
  { icon: <FaJava size="48" className="text-red-500" />, name: "Java" },
  { icon: <FaPython size="48" className="text-yellow-400" />, name: "Python" },
  { icon: <SiN8N size="48" className="text-purple-500" />, name: "n8n" },
  { icon: <FaDocker size="48" className="text-blue-600" />, name: "Docker" },
  {
    icon: <SiKubernetes size="48" className="text-blue-500" />,
    name: "Kubernetes",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center space-y-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
            Skills
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          My journey in tech has been shaped by hands-on experience across diverse domains, where I’ve learned to turn ideas into impactful solutions.Seeking an opportunity with an esteemed organisation where I can utilise my skills and enhance learning in the field of work. I am familiar with:
          </p>
        </div>
        <div className="mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="flex flex-col items-center justify-center gap-2 p-4 rounded-lg bg-background shadow-md hover:shadow-lg transition-all duration-300 transform hover:animate-jiggle"
              >
                {skill.icon}
                <p className="text-sm font-medium text-center">
                  {skill.name}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
