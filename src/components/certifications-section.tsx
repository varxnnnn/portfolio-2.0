import Link from "next/link";
import { Button } from "./ui/button";

const certifications = [
  {
    name: "Oracle Cloud Database Services 2025 Certified Professional",
    issuer: "Oracle",
    year: "Issued: Aug 2025 · Expires: Aug 2027",
    credentialId: "102264537ODBCS25CP",
    url: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=5CC5910BCC501641D192031630827AEB0C78918A7BCC269AF0128AB18E041C91",
  },
  {
    name: "Introduction to Modern AI",
    issuer: "Cisco",
    year: "Issued: Apr 2025",
    credentialId: null,
    url: "https://www.credly.com/badges/51f537fe-d3f1-4566-aa76-3754b6e067c7/linked_in_profile",
  },
  {
    name: "Python 101 for Data Science",
    issuer: "IBM",
    year: "Issued: Apr 2025",
    credentialId: "53f442b7a4e9458cb055948ae43a429d",
    url: "https://courses.yl-ptech.skillsnetwork.site/certificates/53f442b7a4e9458cb055948ae43a429d",
  },
  {
    name: "Introduction to MongoDB",
    issuer: "Simplilearn",
    year: "Issued: Jan 2025",
    credentialId: null,
    url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiI0MTA4IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvODc2MDExMV82ODA2Nzg0MTc1NDc2NjUwNDUzMy5wbmciLCJ1c2VybmFtZSI6IlZhcnVuIEt1bWFyIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fcourses%2F7076%2FIntroduction%2520to%2520MongoDB%2Fcertificate%2Fdownload-skillup&%24web_only=true&_branch_match_id=1424650539689591220&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FVd0ozN0r3cCn0CEuyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAPcBL39BAAAA",
  },
  {
    name: "Introduction to DevOps",
    issuer: "Simplilearn",
    year: "Issued: Jan 2024",
    credentialId: null,
    url: "https://www.simplilearn.com/skillup-certificate-landing?token=eyJjb3Vyc2VfaWQiOiIxODA3IiwiY2VydGlmaWNhdGVfdXJsIjoiaHR0cHM6XC9cL2NlcnRpZmljYXRlcy5zaW1wbGljZG4ubmV0XC9zaGFyZVwvNzU1MzA1N182ODA2Nzg0MTczMTQyMTU3NTE1Ny5wbmciLCJ1c2VybmFtZSI6IlZhcnVuIEt1bWFyIn0%3D&utm_source=shared-certificate&utm_medium=lms&utm_campaign=shared-certificate-promotion&referrer=https%3A%2F%2Flms.simplilearn.com%2Fdashboard%2Fcertificate&%24web_only=true&_branch_match_id=1424650539689591220&_branch_referrer=H4sIAAAAAAAAA8soKSkottLXL87MLcjJ1EssKNDLyczL1k%2FV97V0CioOqir0CEuyrytKTUstKsrMS49PKsovL04tsvUBqkpN8cwDAKgEzfVBAAAA",
  },
  {
    name: "Programming Essentials in Python",
    issuer: "Cisco",
    year: "Issued: 2025",
    credentialId: null,
    url: "https://www.credly.com/badges/02911d8e-56f1-4908-b43a-d96a6c10d0bf/linked_in_profile",
  },
  {
    name: "Prompt Engineering for AI & ChatGPT",
    issuer: "Udemy",
    year: "Issued: 2025",
    credentialId: null,
    url: "https://www.udemy.com/certificate/UC-30aa47c6-2366-452b-8620-1f196e527bd2/",
  },
];

export function CertificationsSection() {
  return (
    <section id="certifications" className="py-20 md:py-28 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-primary">
            Certifications
          </h2>
        </div>
        <div className="max-w-3xl mx-auto space-y-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="flex flex-col md:flex-row items-start md:items-center justify-between"
            >
              <div className="mb-2 md:mb-0">
                <h3 className="text-xl font-bold font-headline text-primary">
                  {cert.name}
                </h3>
                <p className="text-muted-foreground mt-1">{cert.issuer}</p>
                {cert.credentialId && (
                  <p className="text-sm text-muted-foreground mt-1">
                    Credential ID: {cert.credentialId}
                  </p>
                )}
              </div>
              <div className="text-left md:text-right">
                <p className="text-sm text-muted-foreground">{cert.year}</p>
                <Button variant="link" asChild className="p-0 h-auto">
                  <Link href={cert.url} target="_blank">
                    Show Credential
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
