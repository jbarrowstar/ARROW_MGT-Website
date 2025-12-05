import React from "react";
import ProjectDetail from "../../layouts/ProjectDetail";

import hero from "../../assets/projects/data-center/hero.jpg";
import g1 from "../../assets/projects/data-center/gallery-1.jpg";
import g2 from "../../assets/projects/data-center/gallery-2.jpg";
import g3 from "../../assets/projects/data-center/gallery-3.jpg";
import g4 from "../../assets/projects/data-center/gallery-4.jpg";

export default function DataCenterPage() {
  const project = {
    category: "DATA CENTER PROJECT",
    title: "Safe Scaffolding for High-Density Computing Facilities",
    summary:
      "Specialised scaffolding for data centres that protects sensitive equipment and maintains airflow integrity.",
    hero,
    features: [
      { title: "High-Density Computing", description: "Layouts avoid airflow or rack interference." },
      { title: "System Protection", description: "Dust and contamination-control practices." },
      { title: "Cleansec Access", description: "Controlled entry with clean procedures." },
      { title: "Infrastructure Safety", description: "Low-vibration anchoring and ESD-aware handling." }
    ],
    gallery: [g1, g2, g3, g4]
  };

  return <ProjectDetail project={project} />;
}
