import { useParams, useNavigate } from "react-router-dom"
import { projects } from "@/assets/data/Site";
import CaseStudy from "./components/CaseStudy";
import { useEffect } from "react";

export default function ProjectView() {
    const { id } = useParams()
    const navigate = useNavigate()

    const projectIndex = projects.findIndex((item) => item.id === id)
    const project = projects[projectIndex]

    useEffect(() => {
        const mainContent = document.querySelector('main');
        if (mainContent) {
            mainContent.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [id])

    if (!project) {
        return (
            <div className="flex flex-col items-center justify-center h-[60vh] gap-4">
                <h1 className="text-2xl font-bold">Project not found</h1>
                <button
                    onClick={() => navigate('/projects')}
                    className="px-6 py-2 bg-indigo-600 text-white rounded-full font-medium"
                >
                    Back to Projects
                </button>
            </div>
        )
    }

    const onPrev = () => {
        if (projectIndex > 0) {
            navigate(`/project/view/${projects[projectIndex - 1].id}`)
        }
    }

    const onNext = () => {
        if (projectIndex < projects.length - 1) {
            navigate(`/project/view/${projects[projectIndex + 1].id}`)
        }
    }

    const onBack = () => {
        navigate('/projects')
    }

    const caseStudyProps = {
        project,
        onPrev,
        onNext,
        onBack,
        prevProject: projectIndex > 0 ? projects[projectIndex - 1] : null,
        nextProject: projectIndex < projects.length - 1 ? projects[projectIndex + 1] : null
    }

    return (
        <div className="mainDivLayout" id="project">
            <CaseStudy {...caseStudyProps} />
        </div>
    )
}
