import React from 'react';
import Hero from '../components/home/Hero';
import StatsShowcase from '../components/home/StatsShowcase';
import AboutArrow from '../components/home/AboutArrow';
import HomeServices from '../components/home/HomeServices';
import TestimonialSection from '../components/home/TestimonialSection';
import ProjectsSection from '../components/home/ProjectsSection';
import CertificatesSection from '../components/home/CertificatesSection';
import VideoGallerySection from '../components/home/VideoGallerySection';

export default function Home() {
  return (
    <>
      <Hero />
      <main className="bg-gray-50">
        <StatsShowcase />
        <AboutArrow />
        <HomeServices />
        <TestimonialSection />
        <ProjectsSection />
        <CertificatesSection />
        <VideoGallerySection />
      </main>
    </>
  );
}
