import Link from "next/link";
import Image from "next/image";
import { FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";

const socialLinks = [
  { icon: <FaLinkedin size="28" />, href: "https://linkedin.com/in/varun-kumar40", name: "LinkedIn" },
  { icon: <SiGmail size="28" />, href: "mailto:varunkumar615768@gmail.com", name: "Gmail" },
  { icon: <SiLeetcode size="28" />, href: "https://leetcode.com/u/varunkumar48", name: "LeetCode" },
  { icon: <FaInstagram size="28" />, href: "https://www.instagram.com/_varxnnnn", name: "Instagram" },
  { icon: <FaGithub size="28" />, href: "https://github.com/varxnnnn", name: "GitHub" },
];

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative flex min-h-[90vh] flex-col items-center justify-start bg-background text-center overflow-hidden pt-8"
    >
      {/* Image Section */}
      <div className="relative h-[730px] w-full max-w-5xl">
        <Image
          src="/varun.png"
          alt="Varun Kumar"
          fill
          className="object-contain object-top"
          priority
          data-ai-hint="professional portrait"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-background to-transparent" />
      </div>

      {/* Text & Social Links */}
      <div className="absolute top-20 container mx-auto px-4 md:px-6 h-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start h-full">
          <div className="text-left space-y-4">
            {/* Availability */}
            <div className="flex items-center gap-2">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
              </span>
              <p className="text-sm text-muted-foreground">Available for new projects</p>
            </div>

            {/* Heading */}
            <h1 className="font-headline text-4xl font-bold tracking-tighter text-foreground md:text-5xl">
              Hi, I'm Varun Kumar
            </h1>

            {/* Social Links Scroller */}
            <div className="relative mt-8 flex h-14 max-w-[24rem] flex-row items-center justify-center overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_64px,_black_calc(100%-64px),transparent_100%)]">
              <div className="animate-scroll flex w-max items-center gap-12">
                {[...socialLinks, ...socialLinks].map((social, index) => (
                  <Link
                    key={`${social.name}-${index}`}
                    href={social.href}
                    target="_blank"
                    className="flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div></div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-[150px] container mx-auto px-4 md:px-6 pb-16 pt-6">
        {/* Increased bottom offset from 90 → 120 to move text up */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          <div></div>
          <div className="text-left space-y-6">
            <p className="text-base text-muted-foreground">
              Eager to apply my technical expertise and in-depth product
              understanding to drive impactful contributions and exceed
              expectations in challenging projects. Passionate about continuous
              learning, innovation, and solving real-world problems, while
              striving to create meaningful solutions that deliver lasting value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
