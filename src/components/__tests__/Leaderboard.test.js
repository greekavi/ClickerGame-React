import React from 'react';
import ReactDom from 'react-dom';
import {render,fireEvent,cleanup,screen,container} from '@testing-library/react';
import Adapter from 'enzyme-adapter-react-16'
import "@testing-library/jest-dom/extend-expect";
import {shallow,configure} from 'enzyme';
import LeaderBoard from './../LeaderBoard/LeaderBoard';

configure({ adapter: new Adapter() })

afterEach(() => {
    jest.clearAllMocks();
  });

it("Close button works",()=>{
    
    const wrapper=shallow(<button id="close" onClick={leaderboardswitch}>X</button>);
    const leaderboardswitch=jest.fn();
    wrapper.find("#close").simulate("click");
    expect(leaderboardswitch.mock.calls.length).toEqual(1);

})