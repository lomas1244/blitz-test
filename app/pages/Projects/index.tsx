import { BlitzPage } from "blitz"
import Layout from "app/layouts/Layout"
import NavBar from "../../components/NavBar/NavBar"

const Projects: BlitzPage = () => {
  return (
    <div>
      <NavBar />
      <h1>Hello, world!</h1>
    </div>
  )
}

Projects.getLayout = (page) => <Layout title="Home">{page}</Layout>

export default Projects
