import React from 'react';
import ReactDom from 'react-dom';
import {render,fireEvent,cleanup,screen,container} from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import "@testing-library/jest-dom/extend-expect";
import {shallow,configure} from 'enzyme';
import Reset from './../Reset/Reset';
import renderer from "react-test-renderer";

configure({ adapter: new Adapter() })

afterEach(() => {
    jest.clearAllMocks();
  });

  it("Check if Reset button works",()=>{
    const ResetEnable=jest.fn();
    const wrapper=shallow(<button id="button2" onClick={ResetEnable}>Reset</button>);
    wrapper.find("#button2").simulate("click");
    expect(ResetEnable.mock.calls.length).toEqual(1);
  })


  it("Passes variables correctly from counter to reset",()=>{
    const {getByTestId}=render(<Reset ResetGame="10"/>);
    expect(getByTestId('resetGameId')).toHaveTextContent("10");
})

it("Matches Snapshot",()=>{
    const tree=renderer.create(<Reset ResetGame="10"/>).toJSON();
    expect(tree).toMatchSnapshot();
  })

