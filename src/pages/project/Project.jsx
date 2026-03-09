import { useMemo, useState } from "react";
import { projects } from "@/assets/data/Site";
import ProjectCard from "./components/ProjectCard";
import ProjectTable from "./components/ProjectTable";
import { useProjectAnimation } from "@/hooks/useAnimation";
import Header from "../../component/Header";
import { Separator } from "../../components/ui/separator";

export default function Project() {
  const [activeIndex, setActiveIndex] = useState(null)
  const [selectedProjectIndex, setSelectedProjectIndex] = useState(0)

  useProjectAnimation({
    sectionId: "project",
    wordClassName: ".subtitle",
    title: ".Heading",
    cardDiv: ".project-card",
  });

  const activeProject = useMemo(() => projects[activeIndex ?? selectedProjectIndex], [activeIndex, selectedProjectIndex])

  const projectsProps = { projects, activeIndex, setActiveIndex, selectedProjectIndex, setSelectedProjectIndex }

  return (
    <div className="container mx-auto">
      <div id="project" className="mainDivLayout">
        <Header title="Selected Work" description="Ideas that started as curiosity and turned into real products through research, design, and code." />
        <Separator className="bg-[var(--NavHeroSplit)]" />

        <div className="flex gap-8 lg:flex-row flex-col-reverse">
          {/* Left Side: Project Table (8 cols on lg) */}
          <div className="lg:flex-1">
            <h3 className="subtitle text-sm font-bold uppercase tracking-widest text-[var(--secondaryText)] mb-4 px-1">
              All Projects ({projects.length})
            </h3>
            <div className="project-card">
              <ProjectTable {...projectsProps} />
            </div>
          </div>

          {/* Right Side: Bento Project Card (4 cols on lg) */}
          <div className="flex-1 overflow-hidden">
            <h3 className="subtitle text-sm font-bold uppercase tracking-widest text-[var(--secondaryText)] mb-4 px-1">
              Project Details
            </h3>
            <div className="project-card">
              <ProjectCard item={activeProject} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
