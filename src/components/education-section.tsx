const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    institution: "Vignan Institute of Technology and Science",
    years: "2022 - 2026",
    gpa: null,
  },
  {
    degree: "Intermediate",
    institution: "Rishi Junior College",
    years: "2020 - 2022",
    gpa: "GPA: 84%",
  },
  {
    degree: "Schooling",
    institution: "Prerana Brilliant High School",
    years: "2020",
    gpa: "GPA: 9.8",
  },
];

export function EducationSection() {
  return (
    <section id="education" className="py-20 md:py-28 bg-secondary/50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
            Education
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-12">
          {education.map((edu, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-3 gap-y-2 md:gap-x-8 items-start relative"
            >
              <div className="md:col-span-2">
                <h3 className="text-xl font-bold font-headline text-primary">
                  {edu.degree}
                </h3>
                <p className="text-muted-foreground mt-1">{edu.institution}</p>
                {edu.gpa && (
                  <p className="text-sm text-muted-foreground mt-1">
                    {edu.gpa}
                  </p>
                )}
              </div>
              <div className="md:text-right md:absolute md:top-0 md:right-0">
                <p className="text-sm text-muted-foreground">{edu.years}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
