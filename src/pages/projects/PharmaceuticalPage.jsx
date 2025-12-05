import React from "react";
import ProjectDetail from "../../layouts/ProjectDetail";

import hero from "../../assets/projects/pharmaceutical/hero.jpg";
import g1 from "../../assets/projects/pharmaceutical/gallery-1.jpg";
import g2 from "../../assets/projects/pharmaceutical/gallery-2.jpg";
import g3 from "../../assets/projects/pharmaceutical/gallery-3.jpg";
import g4 from "../../assets/projects/pharmaceutical/gallery-4.jpg";

export default function PharmaceuticalPage() {
  const project = {
    category: "PHARMACEUTICAL PROJECT",
    title: "Clean & Compliant Scaffolding for Pharmaceutical Facilities",
    summary:
      "GMP-ready scaffolding solutions installed to maintain sterile manufacturing conditions.",
    hero,
    features: [
      { title: "Cleanroom Priority", description: "Installations protect sterile production zones." },
      { title: "Sanitised Components", description: "Scaffold components cleaned and bagged when required." },
      { title: "Hygiene Compliance", description: "Meets regulatory cleanliness and handling standards." },
      { title: "Contamination Prevention", description: "Barriers and workflows prevent cross-contamination." }
    ],
    gallery: [g1, g2, g3, g4]
  };

  return <ProjectDetail project={project} />;
}
