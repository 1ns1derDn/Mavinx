export interface ITagState {
  tagArr: string[];
  count: number;
}

export enum TagActionsType {
  ADD_TAG = 'ADD_TAG',
  REMOVE_TAG = 'REMOVE_TAG',
}

export interface IAddUser {
  type: TagActionsType.ADD_TAG,
  payload: string
}

export interface IRemoveUser {
  type: TagActionsType.REMOVE_TAG,
  payload: string
}

export type TagAction = IAddUser | IRemoveUser