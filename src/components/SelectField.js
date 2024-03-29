import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import { Box } from '@mui/system'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import {
  handleChangeCategory,
  handleChangeDifficulty,
  handleChangeType,
} from '../redux/action'

const SelectField = (props) => {
  const { label, options } = props
  const [value, setValue] = useState('')

  const dispatch = useDispatch()

  const handleChange = (e) => {
    setValue(e.target.value)

    switch (label) {
      case 'Category':
        dispatch(handleChangeCategory(e.target.value))
        break

      case 'Difficulty':
        dispatch(handleChangeDifficulty(e.target.value))
        break
      case 'Type':
        dispatch(handleChangeType(e.target.value))
        break
      default:
        return
    }
  }

  return (
    <Box mt={3} width="100%">
      <FormControl size="small" fullWidth>
        <InputLabel>{label}</InputLabel>
        <Select value={value} label={label} onChange={handleChange}>
          {options.map(({ id, name }) => (
            <MenuItem value={id} key={id}>
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  )
}

export default SelectField
