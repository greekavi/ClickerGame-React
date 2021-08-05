import React from 'react';
import ReactDom from 'react-dom';
import {render,fireEvent,cleanup,screen,container,act} from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import "@testing-library/jest-dom/extend-expect";
import {shallow,configure,mount} from 'enzyme';


configure({ adapter: new Adapter() })

afterEach(() => {
    jest.clearAllMocks();
  });


  it("renders Reset component correctly",()=>{
    const wrapper=mount(<Reset/>);
    expect(wrapper.find('#button2')).toHaveLength(1);
})

it("The LeaderBoard renders properly",()=>{

    const wrapper=shallow(<LeaderBoard/>);
    expect(wrapper.find('.modal-content2')).toHaveLength(1);

})

it("renders Clicker component correctly",()=>{
    const wrapper=mount(<Clicker/>);
    expect(wrapper.find('#button1')).toHaveLength(1);
})


it("renders Timer component correctly",()=>{
    const wrapper=mount(<Timer/>);
    expect(wrapper.find('.Timer')).toHaveLength(1);
})

import Reset from './../Reset/Reset';
import Clicker from './../Clicker/Clicker';
import Timer from './../Timer/Timer';
import LeaderBoard from './../LeaderBoard/LeaderBoard';
import Counter from './../Counter/Counter';