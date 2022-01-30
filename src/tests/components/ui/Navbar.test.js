import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../../auth/authContext';
import { Navbar } from '../../../components/ui/Navbar';
import { authType } from '../../../types/auth';


const userDispatch = jest.fn();
const mockNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Pruebas en el componente <Navbar />', () => {

  const contextValue = {
    user: {
      name: 'Name',
      logged: true
    },
    userDispatch
  }

  const wrapper = mount(
    <AuthContext.Provider value={contextValue}>
      <MemoryRouter initialEntries={['/home']}>
        <Navbar />
      </MemoryRouter>
    </AuthContext.Provider>
  );

  test('debe mostrarse correctamente', () => {
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('span.me-4').text().trim()).toBe(contextValue.user.name);
  });

  test('debe llamar el logout, llamar el navigate y el userDispatch con los argumentos', () => {
    wrapper.find('button').simulate('click', {
      preventDefault() { }
    });

    expect(userDispatch).toHaveBeenCalledWith({ type: authType.logout });
    expect(mockNavigate).toHaveBeenCalledWith('/login', {
      replace: true
    });
  });

});
