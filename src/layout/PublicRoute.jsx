import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import PublicLayout from './PublicLayout'
import Index from '../pages/Index'
import Contact from '../pages/Contact'
import PageNotFound from '../pages/PageNotFound'
import About from '../pages/About'
import Project from '../pages/Project'
import Blog from '../pages/Blog'

export default function PublicRoute() {
    
  return (
    <Routes>
        <Route path='/' element={<PublicLayout/>}>
            <Route index element={<Index/>}/>
            <Route path='/contact' element={<Contact/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path='/projects' element={<Project/>}/>
            <Route path='/blog' element={<Blog/>}/>
        </Route>
        <Route path='*' element={<PageNotFound/>}/>
    </Routes>
  )
}
