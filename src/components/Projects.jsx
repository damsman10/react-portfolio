import Category from "./Category"
import Procard from "./Procard"


const Projects = () => {
  return (
    <div className="mt-12">
        <Category
        title = "Projects"
        paragraph = "Things I've built so far"
        />

        <div className="projects flex justify-center items-center gap-8">

            <Procard
            title = "My First Project"
            description = "dsnkjdi sdsjkb sdjk skjsjd kdsk"
            />
            <Procard
            title = "My Second Project"
            description = "dsnkjdi sdsjkb sdjk skjsjd kdsk"
            />
            <Procard
            title = "My Third Project"
            description = "dsnkjdi sdsjkb sdjk skjsjd kdsk"
            />
        </div>
    </div>
  )
}

export default Projects