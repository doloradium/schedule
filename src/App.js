import React, { Fragment } from 'react'
import { Routes, Route } from 'react-router-dom'

import { MarksList } from './components/MarksList/index'
import { WeeklyCalendar } from './components/Calendar/index'
import { Menu } from './components/Menu/index'
import { ErrorBoundary } from './components/ErrorBoundary'

import './App.css'

function App() {
  return (
    <ErrorBoundary>
      <div className='App'>
        <header className='App-header'>
          <Menu />
          <Routes >
            <Route path='/' element={<MarksList />} />
            <Route path='support' element={<WeeklyCalendar />} />
          </Routes>
        </header>
      </div>
    </ErrorBoundary>
  )
}

export default App 