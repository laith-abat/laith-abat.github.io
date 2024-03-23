import { Link } from "react-router-dom"
const Home =()=>{
      return (
            <div>
                  <Link to="/">Home</Link>
                  <Link to="/about">About</Link>
                  <Link to="/careers">Careers</Link>
            </div>
      )
}
export default Home;
