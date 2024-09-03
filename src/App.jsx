
import styles from './App.module.css'
import { About } from './components/About/About'
import { Hero } from './components/Hero/hero'
import { Navbar } from './components/Navbar/Navbar'
import {Experience} from './components/Experience/Experience'
import { Project } from './components/Projects/Projects'
import { Contact } from './components/Contact/Contact'

function App() {
  
  return (
    <div className={styles.App}>
      <Navbar/>
      <Hero/>
      <About/>
      <Experience/>
      <Project/>
      <Contact/>
    </div>
  )
}

export default App
