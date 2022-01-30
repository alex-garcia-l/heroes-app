import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { PrivateRoute } from '../../routers/PrivateRoute';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Navigate: () => <h2>Saliendo del componente</h2>
}));

describe('Prueba para el componente <PrivateRoute />', () => {

  Storage.prototype.setItem = jest.fn();

  test('debe mostrar el componente si está autenticado y guardar en el localstorage', () => {

    const contextValue = {
      user: {
        logged: true
      }
    }

    const text = 'Private Component';
    const path = '/';

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={[path]}>
          <PrivateRoute>
            <h1>{text}</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('Private Component');
    expect(localStorage.setItem).toHaveBeenCalledWith('last_path', path);
  });

  test('debe bloquear al componente si no está autenticado', () => {
    const contextValue = {
      user: {
        logged: false
      }
    }

    const text = 'Private Component';
    const path = '/';

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={[path]}>
          <PrivateRoute>
            <h1>{text}</h1>
          </PrivateRoute>
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(wrapper.find('h2').text().trim()).toBe('Saliendo del componente');
  });

});
