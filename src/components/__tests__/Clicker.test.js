import React from 'react';
import ReactDom from 'react-dom';
import {render,fireEvent,cleanup,screen,container} from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import "@testing-library/jest-dom/extend-expect";
import {shallow,configure} from 'enzyme';
import LeaderBoard from './../Clicker/Clicker';

configure({ adapter: new Adapter() })

afterEach(() => {
    jest.clearAllMocks();
  });

  it("",()=>{

  })