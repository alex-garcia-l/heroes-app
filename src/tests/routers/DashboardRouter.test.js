import { mount } from 'enzyme';
import { extract } from 'query-string';
import { MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../auth/authContext';
import { DashboardRouter } from '../../routers/DashboardRouter';

describe('Prueba para el componente <DashboardRouter />', () => {

  const contextValue = {
    user: {
      name: 'Name',
      logged: true
    }
  }

  test('debe mostrarse correctamente la ruta "/home"', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/home']} >
          <DashboardRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(extract).toMatchSnapshot();
    expect(wrapper.find('span.me-4').text().trim()).toBe(contextValue.user.name);
    expect(wrapper.find('h2').first().text().trim()).toBe('Search')
  });

  test('debe mostrarse correctamente la ruta "/marvel"', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/marvel']} >
          <DashboardRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(extract).toMatchSnapshot();
    expect(wrapper.find('h2').first().text().trim()).toBe('Marvel Heros')
  });

  test('debe mostrarse correctamente la ruta "/dc"', () => {
    const wrapper = mount(
      <AuthContext.Provider value={contextValue}>
        <MemoryRouter initialEntries={['/dc']} >
          <DashboardRouter />
        </MemoryRouter>
      </AuthContext.Provider>
    );

    expect(extract).toMatchSnapshot();
    expect(wrapper.find('h2').first().text().trim()).toBe('DC Heros')
  });

});
