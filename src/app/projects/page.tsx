"use client";

import type React from "react";
import { useState, useMemo } from "react";
import NonHomeHeader from "@/components/custom-ui/NonHomeHeader";
import ProjectGridCard from "@/components/projects/ProjectGridCard";
import ProjectModal from "@/components/projects/ProjectModal";
import { projects, IProject, ProjectCategoryEnum } from "@/data/projects";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ProjectsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategoryEnum>(
    ProjectCategoryEnum.ALL_CATEGORIES,
  );
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.mainDescription
          .toLowerCase()
          .includes(searchQuery.toLowerCase());

      const matchesCategory =
        selectedCategory === ProjectCategoryEnum.ALL_CATEGORIES ||
        project.category === selectedCategory;

      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleCardClick = (project: IProject) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleModalClose = (open: boolean) => {
    setIsModalOpen(open);
    if (!open) {
      // Delay clearing the selected project to allow closing animation to complete
      setTimeout(() => {
        setSelectedProject(null);
      }, 200); // Match the duration of the closing animation
    }
  };

  const categories = [
    ProjectCategoryEnum.ALL_CATEGORIES,
    ProjectCategoryEnum.WEB_DEVELOPMENT,
    ProjectCategoryEnum.DATA_SCIENCE,
  ];

  return (
    <main className="w-full overflow-x-hidden overflow-y-auto min-h-screen bg-black text-primary relative">
      <section className="w-(--w-mfull) mx-auto flex flex-col items-start gap-8 my-10 px-4 md:px-8">
        <NonHomeHeader
          title="Projects"
          description="Explore my personal projects, collaborations, and open-source contributions."
        />

        {/* Filters */}
        <div className="w-full flex flex-col md:flex-row gap-4 items-start md:items-center">
          <div className="flex-1 w-full md:max-w-md">
            <Input
              type="text"
              placeholder="Search projects by name or description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-black border-zinc-800 text-white placeholder:text-gray-500 focus-visible:ring-zinc-700"
            />
          </div>
          <div className="w-full md:w-64">
            <Select
              value={selectedCategory}
              onValueChange={(value) =>
                setSelectedCategory(value as ProjectCategoryEnum)
              }
            >
              <SelectTrigger className="bg-black border-zinc-800 text-white focus:ring-zinc-700">
                <SelectValue placeholder="Filter by category" />
              </SelectTrigger>
              <SelectContent className="bg-zinc-950 border-zinc-800 text-white">
                {categories.map((category) => (
                  <SelectItem
                    key={category}
                    value={category}
                    className="focus:bg-zinc-800"
                  >
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Results count */}
        <div className="text-sm text-gray-400 font-kanit">
          Showing {filteredProjects.length} of {projects.length} projects
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-2 gap-y-4">
            {filteredProjects.map((project, index) => (
              <ProjectGridCard
                key={index}
                project={project}
                onClick={() => handleCardClick(project)}
              />
            ))}
          </div>
        ) : (
          <div className="w-full text-center py-12">
            <p className="text-gray-400 font-kanit text-lg">
              No projects found matching your filters.
            </p>
          </div>
        )}

        {/* Project Modal */}
        <ProjectModal
          project={selectedProject}
          open={isModalOpen}
          onOpenChange={handleModalClose}
        />
      </section>
    </main>
  );
}
