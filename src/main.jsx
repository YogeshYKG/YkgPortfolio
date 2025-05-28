/**
 * @copyright 2024 YogeshYKG
 * @license Apache-2.0
 */
/** Node Modules */
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/** Components */
import VersionControl from './versioncontrol.jsx'

/** Css Links */
import './global.css'
import './index.css'
import 'lenis/dist/lenis.css'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename="/YkgPortfolio">
      <VersionControl />
    </BrowserRouter>
  </StrictMode>
)
