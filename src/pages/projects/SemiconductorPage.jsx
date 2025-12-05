import React from "react";
import ProjectDetail from "../../layouts/ProjectDetail";

// image imports
import hero from "../../assets/projects/semiconductor/hero.jpg";
import g1 from "../../assets/projects/semiconductor/gallery-1.jpg";
import g2 from "../../assets/projects/semiconductor/gallery-2.jpg";
import g3 from "../../assets/projects/semiconductor/gallery-3.jpg";
import g4 from "../../assets/projects/semiconductor/gallery-4.jpg";

export default function SemiconductorPage() {
  const project = {
    category: "SEMICONDUCTOR PROJECT",
    title: "Precision Scaffolding for FAB & SUB-FAB Environments",
    summary:
      "ARROW delivers safe, precise and contamination-conscious scaffolding solutions for semiconductor fabs and sub-fab environments.",
    hero,
    features: [
      { title: "FAB & SUB-FAB Expertise", description: "Tailored scaffolding for high-cleanliness environments." },
      { title: "IPA Cleaning Protocol", description: "Strict IPA cleaning and gowning procedures." },
      { title: "Experienced Team", description: "Technicians trained for cleanroom handling." },
      { title: "Cleanroom Standards", description: "Compliance with semiconductor cleanliness protocols." }
    ],
    gallery: [g1, g2, g3, g4]
  };

  return <ProjectDetail project={project} />;
}
