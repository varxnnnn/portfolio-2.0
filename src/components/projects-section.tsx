import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Github, ExternalLink } from "lucide-react";
import { Badge } from "./ui/badge";

const projects = [
  {
    title: "Prakrith – Herbal Medical App",
    description:
      "A cross-platform application that recommends herbal remedies based on health issues. Integrated real-time database, image recognition, and user profiling to deliver accurate results. Currently enhancing features to provide personalized recommendations.",
    image: "https://picsum.photos/600/400?random=1",
    tags: ["Flutter", "Firebase"],
    liveUrl: "#",
    githubUrl: "https://github.com/krishnareddy066/prakriti",
    aiHint: "herbal medicine",
  },
  {
    title: "College Clubs & Events Announcements Platform",
    description:
      "A centralized platform built with Flutter and Firebase to manage multiple college clubs, events, and announcements under one digital space. Club admins can post updates, manage events, and interact with students seamlessly.",
    image: "https://picsum.photos/600/400?random=2",
    tags: ["Flutter", "Firestore"],
    liveUrl: "#",
    githubUrl: "https://github.com/varxnnnn/ConnectUs",
    aiHint: "college event",
  },
  {
    title: "Travel Pooling Application",
    description:
      "A Java-based mobile app that enables students to pool rides to common destinations, reducing cost and environmental impact. Implemented Firebase authentication, real-time ride tracking, and trip matching logic for smooth user experience.",
    image: "https://picsum.photos/600/400?random=3",
    tags: ["Java", "Firebase"],
    liveUrl: "#",
    githubUrl: "https://github.com/varxnnnn/PoolingApp",
    aiHint: "car pooling",
  },
  {
    title: "YouTube Auto-Reply Bot",
    description:
      "An automated workflow that replies to YouTube comments using ChatGPT, logs interactions into Google Sheets, and sends Telegram alerts for important comments. Built using n8n Cloud with seamless integration across APIs.",
    image: "https://picsum.photos/600/400?random=4",
    tags: ["n8n Cloud", "ChatGPT"],
    liveUrl: "#",
    githubUrl: "https://github.com/varxnnnn",
    aiHint: "youtube automation",
  },
  {
    title: "Automated Deployment Pipeline",
    description:
      "Designed and implemented a CI/CD pipeline to build, test, and deploy a Flask web application. Automated containerization using Docker, published images to Docker Hub, and deployed to a Kubernetes cluster for scalable delivery.",
    image: "https://picsum.photos/600/400?random=5",
    tags: ["GitHub Actions", "Docker"],
    liveUrl: "#",
    githubUrl: "https://github.com/varxnnnn/flask_project",
    aiHint: "code deployment",
  },
];

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
            My Work
          </h2>
          <p className="text-lg text-muted-foreground mt-2">
            A selection of my recent projects.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Card
              key={project.title}
              className="flex flex-col overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <CardHeader>
                <CardTitle className="font-headline text-2xl">
                  {project.title}
                </CardTitle>
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </CardHeader>
              <CardContent className="flex-grow space-y-4">
                <div className="relative aspect-video">
                  <Image
                    src={project.image}
                    alt={project.title}
                    width={600}
                    height={400}
                    className="object-cover rounded-md"
                    data-ai-hint={project.aiHint}
                  />
                </div>
                <CardDescription className="text-base">
                  {project.description}
                </CardDescription>
              </CardContent>
              <CardFooter className="flex justify-end gap-4">
                <Button variant="ghost" size="sm" asChild>
                  <Link href={project.githubUrl} target="_blank">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
