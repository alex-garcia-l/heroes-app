import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { LoginScreen } from '../../../components/login/LoginScreen';
import { authType } from '../../../types/auth';

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Prueba para el componente <LoginScreen />', () => {

  const action = {
    type: authType.login,
    payload: {
      name: 'My name'
    }
  }

  const contextValue = {
    user: {
      logged: false
    },
    userDispatch: jest.fn()
  }

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={['/login']}>
        <Routes>
          <Route path="login" element={<LoginScreen />} />
        </Routes>
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test('debe de mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
  });

  test('debe realizar el userDispatch y la navegación', () => {

    const handleSubmit = wrapper.find('form').prop('onSubmit');
    
    handleSubmit({
      preventDefault() { }
    });

    expect(contextValue.userDispatch).toHaveBeenCalledWith(action);
    expect(mockNavigate).toHaveBeenCalledWith('/home', {
      replace: true
    });

    const lastPath = '/marvel';
    localStorage.setItem('last_path', lastPath);

    handleSubmit({
      preventDefault() { }
    });

    expect(mockNavigate).toHaveBeenCalledWith(lastPath, {
      replace: true
    });

  });

});
