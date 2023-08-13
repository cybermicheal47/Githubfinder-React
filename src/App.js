import  {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Navbar  from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Home from './components/pages/Home'
import About from './components/pages/About'
import Notfound from './components/pages/Notfound'
import { GithubProvider } from './context/github/Githubcontext'
import { Alertprovider } from './context/alert/Alertcontext'

import Alert from './components/layout/Alert'
import Userprofile  from './components/pages/Userprofile'
function App() {
  return (

	<GithubProvider>
		<Alertprovider>
	<Router>
		<div className='flex flex-col justify-between h-screen'>
			<Navbar />

<main className='container mx-auto px-3 pb-12'>
	<Alert />
	<Routes>

	<Route path='/' element={<Home />} />	
	<Route path='/about' element={<About />} />	
	<Route path='/userprofile/:login' element={<Userprofile />} />	
	<Route path='/*' element={<Notfound />} />	
		</Routes>
		
</main>

<Footer />




		</div>
		</Router>
		</Alertprovider>
		</GithubProvider>
  )
}

export default App
