import { authReducer } from '../../auth/authReducer';
import { authType } from '../../types/auth';

describe('Test para el Reducer authReducer', () => {

  test('debe devolver el state inicial', () => {
    const state = authReducer({ logged: false }, {});
    expect(state).toEqual({ logged: false });
  });

  test('debe autenticar y agregar el "name" del usuario', () => {
    const action = {
      type: authType.login,
      payload: {
        name: 'Test'
      }
    }
    const state = authReducer({ logged: false }, action);

    expect(state).toEqual({ name: 'Test', logged: true });
  });

  test('debe des-autenticar y borrar el "name" del usuario', () => {
    const action = {
      type: authType.logout,
    }
    const state = authReducer({ name: 'Test', logged: true }, action);

    expect(state).toEqual({ logged: false });
  }); 

});
