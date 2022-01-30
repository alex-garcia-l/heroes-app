import { mount } from "enzyme";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import { HeroScreen } from "../../../components/heros/HeroScreen";

const mockNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useNavigate: () => mockNavigate
}));


describe('Prueba para el componente <HeroScreen />', () => {

  const text = 'No hero page';

  test('NO debe mostrar el componente', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero']}>
        <Routes>
          <Route path='hero' element={<HeroScreen />} />
          <Route path='home' element={<h1>{text}</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect(wrapper.find('h1').text().trim()).toBe(text);
  });

  test('debe mostrar el hero correctamente', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/dc-batman']}>
        <Routes>
          <Route path='hero/:heroID' element={<HeroScreen />} />
        </Routes>
      </MemoryRouter>
    );

    expect(wrapper).toMatchSnapshot();
    expect(wrapper.find('.row.mt-5').exists()).toBe(true);
  });

  test('debe llamar el evento del botón regresar', () => {

    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/dc-batman']}>
        <Routes>
          <Route path='hero/:heroID' element={<HeroScreen />} />
        </Routes>
      </MemoryRouter>
    );

    wrapper.find('button').simulate('click', { preventDefaukt() { } });
    expect(mockNavigate).toHaveBeenCalledWith(-1);
  });

  test('debe de redireccionar si no encuentra un hero', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/hero/dc-batman123']}>
        <Routes>
          <Route path='hero/:heroID' element={<HeroScreen />} />
          <Route path='home' element={<h1>{text}</h1>} />
        </Routes>
      </MemoryRouter>
    );

    expect(wrapper.find('h1').text().trim()).toBe(text);
  });

});
