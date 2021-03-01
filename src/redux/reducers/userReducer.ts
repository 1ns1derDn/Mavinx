import { UserAction, IUserState, UserActionsType } from '../types/userTypes';

export const initialState: IUserState = {
  currentUser: null,
  isAuth: false,
}

const userReducer = (state = initialState, action: UserAction): IUserState => {
  switch (action.type) {
    case UserActionsType.SET_USER: {
      return { ...state, currentUser: action.payload, isAuth: true }
    }

    case UserActionsType.LOGOUT: {
      localStorage.removeItem('token')

      return { ...state, currentUser: null, isAuth: false }
    }

    case UserActionsType.UPDATE_USER: {
      const { currentUser } = state;
      const newData = currentUser ? {...currentUser, ...action.payload} : null;
      return { ...state, currentUser: newData }
    }

    default: {
      return state
    }

  }
}

export default userReducer;