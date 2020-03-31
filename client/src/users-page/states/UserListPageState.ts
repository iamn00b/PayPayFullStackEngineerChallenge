import { UserModel } from '../../app-models/UserModel';
import { createStore, Dispatch } from 'redux';
import { TypedUseSelectorHook, useSelector, useDispatch } from 'react-redux';

//
// -- TYPE
//

export interface UserListPageState {
  state: 'NOT_ASKED' | 'LOADING' | 'SUCCESS_FETCH_LIST' | 'FAILED_FETCH_LIST';
  users: UserModel[];
}

//
// -- FACTORY
//

export function UserListPageState(): UserListPageState {
  return { state: 'NOT_ASKED', users: [] };
}

//
// -- UPDATE
//

const initialState: UserListPageState = UserListPageState();

export type ActionUserListPageState =
  | { type: 'FETCH_LIST' }
  | { type: 'SUCCESS_FETCH_LIST'; users: UserModel[] }
  | { type: 'FAILED_FETCH_LIST'; message?: string };

export function UserListPageStateReducer(
  state: UserListPageState = initialState,
  action: ActionUserListPageState
): UserListPageState {
  switch (action.type) {
    case 'FETCH_LIST':
      return { ...state, state: 'LOADING' };
    case 'SUCCESS_FETCH_LIST':
      return { ...state, state: 'SUCCESS_FETCH_LIST', users: action.users };
    case 'FAILED_FETCH_LIST':
      return { ...state, state: 'FAILED_FETCH_LIST' };
    default:
      return state;
  }
}

//
// -- STORE
//

export const StoreUserListPageState = createStore(
  UserListPageStateReducer,
  typeof window !== 'undefined' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

//
// -- HOOKS
//

export const useUserListPageStateSelector: TypedUseSelectorHook<UserListPageState> = useSelector;
export const useUserListPageStateDispatch: () => Dispatch<
  ActionUserListPageState
> = useDispatch;
