import { useSelector, TypedUseSelectorHook, useDispatch } from 'react-redux';
import { UserModel } from '../../app-models/UserModel';
import { Dispatch, createStore } from 'redux';

//
// -- TYPE
//

export interface CreateUserPageState {
  nameInput?: string;
  emailInput?: string;
  roleInput?: UserModel['role'];
  titleInput?: string;
}

//
// -- FACTORY
//

export function CreateUserPageState(): CreateUserPageState {
  return {};
}

//
// -- UPDATE
//

const initialState: CreateUserPageState = CreateUserPageState();

export type ActionCreateUserPageState =
  | { type: 'SET_INPUT_NAME'; value: string }
  | { type: 'SET_INPUT_EMAIL'; value: string }
  | { type: 'SET_INPUT_ROLE'; value: UserModel['role'] }
  | { type: 'SET_INPUT_TITLE'; value: string };

export function CreateUserPageStateReducer(
  state: CreateUserPageState = initialState,
  action: ActionCreateUserPageState
): CreateUserPageState {
  switch (action.type) {
    case 'SET_INPUT_NAME':
      return { ...state, nameInput: action.value };
    case 'SET_INPUT_EMAIL':
      return { ...state, emailInput: action.value };
    case 'SET_INPUT_ROLE':
      return { ...state, roleInput: action.value };
    case 'SET_INPUT_TITLE':
      return { ...state, titleInput: action.value };
    default:
      return state;
  }
}

//
// -- STORE
//

export const StoreCreateUserPageState = createStore(
  CreateUserPageStateReducer,
  typeof window !== 'undefined' &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

//
// -- HOOKS
//

export const useCreateUserPageStateSelector: TypedUseSelectorHook<CreateUserPageState> = useSelector;
export const useCreateUserPageStateDispatch: () => Dispatch<
  ActionCreateUserPageState
> = useDispatch;
