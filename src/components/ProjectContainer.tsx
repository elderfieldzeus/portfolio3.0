"use client"

import { useState, useEffect } from "react"
import { Search} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import ProjectCard from "./ProjectCard"
import { CATEGORIES, IProject, ProjectCategoryEnum, projects } from "@/lib/data"
import BlurFade from "./ui/blur-fade"
import ProjectDialog from "./ProjectDialog"

export default function ProjectContainer() {
  const [searchQuery, setSearchQuery] = useState<string>("")
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategoryEnum>(ProjectCategoryEnum.ALL_CATEGORIES)
  const [filteredProjects, setFilteredProjects] = useState<IProject[]>(projects)
  const [selectedProject, setSelectedProject] = useState<IProject | null>(null)
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false)

  // Filter projects based on search query and selected category
  useEffect(() => {
    let result = projects

    // Filter by category
    if (selectedCategory !== ProjectCategoryEnum.ALL_CATEGORIES) {
      result = result.filter((project) => project.category === selectedCategory)
    }

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase()
      result = result.filter(
        (project) =>
          project.title.toLowerCase().includes(query) ||
          project.main_description.toLowerCase().includes(query) ||
          project.technologies.some((tag) => tag.toLowerCase().includes(query)),
      )
    }

    setFilteredProjects(result)
  }, [searchQuery, selectedCategory])

  // Handle project card click
  const handleProjectClick = (project: IProject) => {
    setSelectedProject(project)
    setIsModalOpen(true)
  }

  // Navigate to previous project in filtered list
  const goToPrevProject = () => {
    const currentIndex = filteredProjects.findIndex((p) => p.title === selectedProject?.title)
    const prevIndex = (currentIndex - 1 + filteredProjects.length) % filteredProjects.length
    setSelectedProject(filteredProjects[prevIndex])
  }

  // Navigate to next project in filtered list
  const goToNextProject = () => {
    const currentIndex = filteredProjects.findIndex((p) => p.title === selectedProject?.title)
    const nextIndex = (currentIndex + 1) % filteredProjects.length
    setSelectedProject(filteredProjects[nextIndex])
  }

  return (
    <div className="w-full flex flex-col items-center gap-8 mt-24 max-w-4xl mx-auto font-kanit">
      <BlurFade delay={0.25} inView>
          <p className='text-4xl'>My Projects</p>
      </BlurFade>
      <BlurFade delay={0.25} inView>
        <div className="max-w-[80vw] md:w-[50rem] border border-white border-opacity-20 rounded-lg shadow-sm h-[600px] flex flex-col bg-black z-10">
          {/* Search and Filter Section */}
          <div className="p-4 border-b border-white border-opacity-20 flex flex-col sm:flex-row gap-3">
            <div className="relative flex-1">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground opacity-20" />
              <Input
                type="text"
                placeholder="Search projects..."
                className="pl-8 border-white border-opacity-20"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            <Select value={selectedCategory} onValueChange={setSelectedCategory as (() => void)}>
              <SelectTrigger className="w-full sm:w-[180px] border-white border-opacity-20">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent>
                {CATEGORIES.map((category) => (
                  <SelectItem key={category} value={category} className="font-kanit">
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          {/* Projects Grid */}
          <div className="flex-1 overflow-y-auto p-4">
            {filteredProjects.length === 0 ? (
              <div className="flex items-center justify-center h-full text-muted-foreground">
                No projects found matching your criteria
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {filteredProjects.map((project) => (
                  <div
                      className="cursor-pointer"
                      onClick={() => handleProjectClick(project)}
                  >
                      <ProjectCard
                          project = {project}
                      />
                  </div>
                  // <Card
                  //   key={project.id}
                  //   className="cursor-pointer hover:shadow-md transition-shadow"
                  //   onClick={() => handleProjectClick(project)}
                  // >
                  //   <CardHeader className="p-0">
                  //     <div className="relative h-40 w-full">
                  //       <img
                  //         src={project.image || "/placeholder.svg"}
                  //         alt={project.title}
                  //         className="h-full w-full object-cover rounded-t-lg"
                  //       />
                  //     </div>
                  //   </CardHeader>
                  //   <CardContent className="p-4">
                  //     <CardTitle className="text-lg">{project.title}</CardTitle>
                  //     <p className="text-sm text-muted-foreground mt-1 line-clamp-2">{project.description}</p>
                  //   </CardContent>
                  //   <CardFooter className="px-4 pb-4 pt-0 flex flex-wrap gap-1">
                  //     {project.tags.slice(0, 3).map((tag) => (
                  //       <Badge key={tag} variant="secondary" className="mr-1">
                  //         {tag}
                  //       </Badge>
                  //     ))}
                  //   </CardFooter>
                  // </Card>
                ))}
              </div>
            )}
          </div>
        </div>
      </BlurFade>

      {/* Project Details Modal */}
      <ProjectDialog 
        selectedProject={selectedProject} 
        isModalOpen={isModalOpen} 
        setIsModalOpen={setIsModalOpen} 
        goToPrevProject={goToPrevProject} 
        goToNextProject={goToNextProject}        
      />
    </div>
  )
}

