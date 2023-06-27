import {
  CHANGE_CATEGORY,
  CHANGE_DIFFICULTY,
  CHANGE_TYPE,
  CHANGE_AMOUNT,
  CHANGE_SCORE,
} from './actionsType'

export const handleChangeCategory = (payload) => ({
  type: CHANGE_CATEGORY,
  payload,
})

export const handleChangeDifficulty = (payload) => ({
  type: CHANGE_DIFFICULTY,
  payload,
})

export const handleChangeType = (payload) => ({
  type: CHANGE_TYPE,
  payload,
})
export const handleChangeAmount = (payload) => ({
  type: CHANGE_AMOUNT,
  payload,
})

export const handleChangeScore = (payload) => ({
  type: CHANGE_SCORE,
  payload,
})
