import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"
import About from "./About"
import Home from "./Home"
import Contact from "./Contact"
import Gallery from "./Gallery"
import Counter from "./Counter"
import EventDemo from "./EventDemo"

function App(){
	return <div>
	<h1> My React App</h1>
	<Router>
		<Link to='home'>|| Home || </Link>
		<Link to='about'>About ||  </Link>
		<Link to='contact'>Contact ||  </Link>
		<Link to='gallery'>Gallery ||  </Link>
        <Link to='counter'>Counter ||  </Link> 
        <Link to='eventDemo'>EventDemo ||  </Link>



		<Routes>
			<Route element={<Home/>}path="/home"/>
			<Route element={<About/>}path="/about"/>
			<Route element={<Contact/>}path="/contact"/>
			<Route element={<Gallery/>}path="/gallery"/>
            <Route element={<Counter/>}path="/counter"/>
            <Route element={<EventDemo/>}path="/eventDemo"/>
            <Route element={<h1>404 page not found</h1>}path="*"/>
		</Routes>
	</Router>
	</div>
}
export default App