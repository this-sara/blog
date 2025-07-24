import { blogPosts, categories } from './appData'
import { Routes, Route } from 'react-router-dom'
import BlogList from './components/blog/BlogList'
import CategoryList from './components/category/CategoryList'
import Footer from './components/footer/MultiColumnFooter'
import Navbar from './components/navbar/BlogNavbar'
import HomePage from './components/HomePage'

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogList posts={blogPosts} />} />
        <Route path="/categories" element={<CategoryList categories={categories} />} />
      </Routes>
      <Footer />
    </>
  )
}

export default App
