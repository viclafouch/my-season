import produce from 'immer'

import { SET_VALUE } from './constants'

const reducer = (state = {}, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_VALUE:
        draft.isEditMode = true
        break
      default:
        break
    }
    return draft
  })

export default reducer
