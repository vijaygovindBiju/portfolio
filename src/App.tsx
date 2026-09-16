import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { ThemeProvider } from '@/context/ThemeContext'
import Layout from '@/components/layout/Layout'
import HomePage from '@/pages/HomePage'
import ProjectDetailPage from '@/pages/ProjectDetailPage'

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/projects/:id" element={<ProjectDetailPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  )
}
