import { Button, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { handleChangeAmount, handleChangeScore } from '../redux/action'

const FinalScreen = () => {
  const { score } = useSelector((state) => state)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleClick = () => {
    dispatch(handleChangeScore(0))
    dispatch(handleChangeAmount(50))
    navigate('/')
  }
  return (
    <div>
      <Box mt={30}>
        <Typography variant="h4" fontWeight={'bold'} mb={3}>
          Final Score {score}
        </Typography>
        <Button onClick={handleClick} variant="outlined">
          Back to Settings!
        </Button>
      </Box>
    </div>
  )
}

export default FinalScreen
