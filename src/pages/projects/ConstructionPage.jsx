import React from "react";
import ProjectDetail from "../../layouts/ProjectDetail";

import hero from "../../assets/projects/construction/hero.jpg";
import g1 from "../../assets/projects/construction/gallery-1.jpg";
import g2 from "../../assets/projects/construction/gallery-2.jpg";
import g3 from "../../assets/projects/construction/gallery-3.jpg";
import g4 from "../../assets/projects/construction/gallery-4.jpg";

export default function ConstructionPage() {
  const project = {
    category: "CONSTRUCTION PROJECT",
    title: "MOM-Approved Scaffolding for Construction Projects",
    summary:
      "Safe, compliant scaffolding delivered with certified manpower and coordinated planning.",
    hero,
    features: [
      { title: "MOM Approved", description: "Certified contractor with accredited procedures." },
      { title: "Safety Standards", description: "Strong safety planning and site supervision." },
      { title: "CSA & MEP Coordination", description: "Works seamlessly with other trades." },
      { title: "Cost-Effective", description: "Optimised layouts that reduce time and cost." }
    ],
    gallery: [g1, g2, g3, g4]
  };

  return <ProjectDetail project={project} />;
}
