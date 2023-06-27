import { Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import React from 'react'

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom'
import FinalScreen from './pages/FinalScreen'
import Questions from './pages/Questions'

import Settings from './pages/Settings'

function App() {
  return (
    <Router>
      <Container maxWidth="sm">
        <Box textAlign="center" mt={5}>
          <Routes>
            <Route
              exact
              path="/"
              element={
                <>
                  <Typography variant="h2" fontWeight={'bold'}>
                    Quiz App
                  </Typography>
                  <Settings />
                </>
              }
            ></Route>
            <Route exact path="/questions" element={<Questions />} />
            <Route exact path="/score" element={<FinalScreen />} />
          </Routes>
        </Box>
      </Container>
    </Router>
  )
}
export default App
