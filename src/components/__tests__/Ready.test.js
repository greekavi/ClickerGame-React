import {render,fireEvent,cleanup,screen,container,act} from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import "@testing-library/jest-dom/extend-expect";
import {shallow,configure} from 'enzyme';
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() })

afterEach(() => {
    jest.clearAllMocks();
  });

it("Timer should display number of seconds pending before starting the game",()=>{
    jest.useFakeTimers();
    //In Total has 3 seconds advance to 2 seconds should display 1
    const {getByText}=render(<Ready/>);
    act(() => {
        jest.advanceTimersByTime(2000);
      })
      expect(getByText('1')).toBeInTheDocument();
})
import Ready from './../Ready/Ready';