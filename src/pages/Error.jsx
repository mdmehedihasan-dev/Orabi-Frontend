/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom"
import Container from "../components/layout/Container"
import Button from "../components/layout/Button"


const Error = () => {
  return (
    <Container>
        <div>
            <h1 className="mt-20 font-bold text-9xl text-primaryColor font-dm" >404</h1>
            <p className="max-w-2xl my-20 font-dm text-textColor">The page you were looking for couldn't be found. The page could be removed or you misspelled the word while searching for it. Maybe try a search?</p>
        </div>

        <Link to={'/'}>
        <Button title={"Back to Home"} />
        </Link>
    </Container>
  )
}

export default Error