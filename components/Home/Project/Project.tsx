import SectionHeading from "@/components/Helper/SectionHeading"
import { projectData } from "@/Data/data"
import Image from "next/image"
import Link from "next/link"

const Project = () => {
  return (
    <div className="py-16 bg-[#050709]">
      <SectionHeading>
        My Projects
      </SectionHeading>
      <div className="w-[80%] mx-auto mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 items-center">
        {projectData.map((project, i) => (
          <div key={project.id} className="bg-blue-950 p-6 rounded-lg hover:scale-105 transition-all duration-300"
            data-aos="fade-up" data-aos-anchor-placement="top-center" data-aos-delay={`${i * 150}`}
          >
            <Link href={project.url} target="_blank">
              <Image src={project.image} alt="project" className="w-full" width={300} height={200} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Project