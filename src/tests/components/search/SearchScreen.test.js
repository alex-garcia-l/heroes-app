import { mount } from 'enzyme';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import { SearchScreen } from '../../../components/search/SearchScreen';

// mook debe de ir
// evaluar cualquier hook
const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));

describe('Pruebas en el componente <SearchScreen />', () => {

  test('debe mostrarse correctamente con valores por defecto', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/home']}>
        <Routes>
          <Route path="home" element={<SearchScreen />} />
        </Routes>
      </MemoryRouter>
    );
    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-info').text().trim()).toBe('Search a hero');
  });

  test('debe mostrar a batman y el input con el valor al queryString', () => {
    const query = 'batman';
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/home?q=${query}`]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('input').prop('value')).toBe(query);
    expect(wrapper.find('.card').length).toBeGreaterThanOrEqual(1);
  });

  test('debe de mostrar un error si no se encuntra el hero', () => {
    const query = 'batman123';
    const wrapper = mount(
      <MemoryRouter initialEntries={[`/home?q=${query}`]}>
        <SearchScreen />
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.alert-danger').exists()).toBe(true);
    expect(wrapper.find('.alert-danger').text().trim()).toBe(`Not hero to match: ${query}`);
  });

  test('debe de llamar la función handleSubmit', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/home']}>
        <SearchScreen />
      </MemoryRouter>
    );

    const value = 'batman';

    wrapper.find('input').simulate('change', {
      target: {
        name: 'inputSearch',
        value: value
      }
    });

    wrapper.find('form').prop('onSubmit')({
      preventDefault() { }
    });

    expect(mockNavigate).toHaveBeenCalled();
    expect(mockNavigate).toHaveBeenCalledWith(`?q=${value}`);
  });

});
