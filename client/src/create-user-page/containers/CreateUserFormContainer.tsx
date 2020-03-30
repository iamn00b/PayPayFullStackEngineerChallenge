import React from 'react';
import { useRouter } from 'next/router';
import CreateUserForm from '../components/CreateUserForm/CreateUserForm';
import {
  useCreateUserPageStateSelector,
  useCreateUserPageStateDispatch,
} from '../states/CreateUserPageState';
import { createUser } from '../../app-services/UserService';

function CreateUserFormContainer() {
  const router = useRouter();
  const name = useCreateUserPageStateSelector(state => state.nameInput);
  const email = useCreateUserPageStateSelector(state => state.emailInput);
  const role = useCreateUserPageStateSelector(state => state.roleInput);
  const title = useCreateUserPageStateSelector(state => state.titleInput);

  const dispatch = useCreateUserPageStateDispatch();

  const handleSubmit = () => {
    if (!name || !email || !role || !title) {
      return;
    }

    createUser({ name, email, role, title }).then(() => {
      router.push('/users');
    });
  };

  return (
    <CreateUserForm
      name={name}
      email={email}
      role={role}
      title={title}
      onChangeName={value => dispatch({ type: 'SET_INPUT_NAME', value })}
      onChangeEmail={value => dispatch({ type: 'SET_INPUT_EMAIL', value })}
      onChangeRole={value => dispatch({ type: 'SET_INPUT_ROLE', value })}
      onChangeTitle={value => dispatch({ type: 'SET_INPUT_TITLE', value })}
      onSubmit={handleSubmit}
    />
  );
}

export default CreateUserFormContainer;
