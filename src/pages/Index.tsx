import Navigation from "@/components/Navigation";
import HomeSection from "@/components/HomeSection";
import TestSection from "@/components/TestSection";
import MethodicalGuideSection from "@/components/MethodicalGuideSection";
import EntertainingProblemsSection from "@/components/EntertainingProblemsSection";
import LessonPlansSection from "@/components/LessonPlansSection";
import ResourcesSection from "@/components/ResourcesSection";

import { useState } from "react";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const renderSection = () => {
    switch (activeSection) {
      case "tests":
        return <TestSection />;
      case "entertaining":
        return <EntertainingProblemsSection />;
      case "lesson-plans":
        return <LessonPlansSection />;
      case "guide":
        return <MethodicalGuideSection />;
      case "resources":
        return <ResourcesSection />;
      default:
        return <HomeSection onNavigate={setActiveSection} />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navigation activeSection={activeSection} onNavigate={setActiveSection} />
      <main className="container mx-auto px-4 py-8">{renderSection()}</main>
    </div>
  );
};

export default Index;
