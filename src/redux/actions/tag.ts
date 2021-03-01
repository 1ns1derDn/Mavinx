import { IAddUser, IRemoveUser, TagActionsType } from '../types/tagTypes';

export const addTag = (tagName: string): IAddUser => ({
  type: TagActionsType.ADD_TAG,
  payload: tagName
})

export const removeTag = (tagName: string): IRemoveUser => ({
  type: TagActionsType.REMOVE_TAG,
  payload: tagName
})