import React from 'react';
import ReactDom from 'react-dom';
import {render,fireEvent,cleanup,screen,container} from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import "@testing-library/jest-dom/extend-expect";
import {shallow,configure} from 'enzyme';
import Timer from './../Timer/Timer';
import renderer from "react-test-renderer";


it("Passes variables correctly from counter to Timer",()=>{
    const {getByTestId}=render(<Timer TimerSeconds="10"/>);
    expect(getByTestId('TimerTestId')).toHaveTextContent("10");
})

it("Matches Snapshot",()=>{
  const tree=renderer.create(<Timer TimerSeconds="10"/>).toJSON();
  expect(tree).toMatchSnapshot();
})

