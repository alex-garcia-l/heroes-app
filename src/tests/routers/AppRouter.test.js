import { mount } from 'enzyme';
import { AuthContext } from '../../auth/authContext';
import { AppRouter } from '../../routers/AppRouter';

describe('Prueba para el componente <AppRouter />', () => {
  
  test('debe mostrar el login si no está autenticado', () => {

    const contextValue = {
      user: {
        logged: false
      }
    }

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('h1').text().trim()).toBe('Please sign in');
  });

  test('debe mostrar la página home si está autenticado', () => {

    const contextValue = {
      user: {
        name: 'Name',
        logged: true
      }
    }

    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <AppRouter />
      </AuthContext.Provider>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('header').exists()).toBe(true);
    expect(wrapper.find('span.fs-4').text().trim()).toBe('Heroes App');
    expect(wrapper.find('h2').first().text().trim()).toBe('Search');
  });
  

});
