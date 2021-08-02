import React from 'react';
import ReactDom from 'react-dom';
import {render,fireEvent,cleanup,screen,container} from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import "@testing-library/jest-dom/extend-expect";
import {shallow,configure} from 'enzyme';
import Clicker from './../Clicker/Clicker';
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() })

afterEach(() => {
    jest.clearAllMocks();
  });

  it("Check if Clicking button works",()=>{
    const ClickerTick=jest.fn();
    const wrapper=shallow(<button id="button1"  onClick={ClickerTick}>Start Clicking!</button>);
    wrapper.find("#button1").simulate("click");
    expect(ClickerTick.mock.calls.length).toEqual(1);
  })

  it("Passes variables correctly from counter to Clicker",()=>{
    const {getByTestId}=render(<Clicker ClickerCount="10"/>);
    expect(getByTestId('clickerCountId')).toHaveTextContent("10");
})

it("Matches Snapshot",()=>{
  const tree=renderer.create(<Clicker TimerSeconds="10"/>).toJSON();
  expect(tree).toMatchSnapshot();
})