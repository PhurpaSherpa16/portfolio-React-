import { Route, Routes } from 'react-router-dom'
import PublicLayout from '@/layout/PublicLayout'
import Index from '@/pages/Index'
import Contact from '@/pages/contact/Contact'
import PageNotFound from '@/pages/PageNotFound'
import About from '@/pages/about/About'
import Project from '@/pages/project/Project'
import Blog from '@/pages/blog/Blog'
import ProjectView from '../pages/project/ProjectView'

export default function MainRoutes() {
    
  return (
    <Routes>
        <Route path='/' element={<PublicLayout/>}>
            <Route index element={<Index/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Project/>}/>
            <Route path='/project/view/:id' element={<ProjectView/>}/>
            <Route path='/blog' element={<Blog/>}/>
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}
