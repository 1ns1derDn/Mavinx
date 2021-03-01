import { ITagState, TagActionsType, TagAction } from '../types/tagTypes'

const initialState: ITagState = {
  tagArr: [
    '#Логотип',
    '#Landing-page',
    '#Промо-сайт',
    '#XX',
  ],
  count: 4,
}

const tagReducer = (state = initialState, action: TagAction) => {
  switch (action.type) {
    case TagActionsType.ADD_TAG: {
      return {
        ...state,
        tagArr: [...state.tagArr, action.payload],
        count: state.tagArr.length + 1
      }
    }

    case TagActionsType.REMOVE_TAG: {
      const filterArr = state.tagArr.filter((tag: string) => tag !== action.payload)

      return {
        ...state,
        tagArr: filterArr,
        count: filterArr.length
      }
    }

    default: {
      return state
    }
  }
}

export default tagReducer;