import '../styles/App.css'
import { NavBar } from './NavBar'
import { Analytics } from './Analytics'

function App () {
  return (
    <div className='App'>
      <NavBar />
      <main>
        <Analytics />
      </main>
    </div>
  )
}

export default App
