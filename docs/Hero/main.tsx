import React from "react"
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hero from './Hero.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Hero />
  </StrictMode>,
)
