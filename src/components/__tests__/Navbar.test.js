import React from 'react';
import ReactDom from 'react-dom';
import {render,fireEvent,cleanup,screen,container} from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import Button from '@material-ui/core/Button';
import "@testing-library/jest-dom/extend-expect";
import {shallow,configure,mount} from 'enzyme';
import LeaderBoard from './../LeaderBoard/LeaderBoard';
import Navbar from './../Navbar/Navbar';

configure({ adapter: new Adapter() })

afterEach(() => {
    jest.clearAllMocks();
  });

it("The playGame/Home button works",()=>{

    const onChildClick=jest.fn();
    const childbutton=jest.fn();
    const wrapper=shallow(<Button  id="playhome2" onClick={onChildClick}>{childbutton}</Button>);
    expect(onChildClick).not.toBeCalled();
    wrapper.find("#playhome2").simulate("click");
    expect(onChildClick.mock.calls.length).toEqual(1);

})

it("The LeaderBoard button works",()=>{

    const Leaderboardswitch=jest.fn();
    const wrapper=shallow(<Button id="leaderposition" onClick={Leaderboardswitch}>Leaderboard</Button>);
    expect(Leaderboardswitch).not.toBeCalled();
    wrapper.find("#leaderposition").simulate("click");
    expect(Leaderboardswitch.mock.calls.length).toEqual(1);

})

it("The LeaderBoard renders properly",()=>{

    const wrapper=shallow(<LeaderBoard/>);
    expect(wrapper.find('.modal-content2')).toHaveLength(1);

})
