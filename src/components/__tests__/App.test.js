import React from 'react';
import ReactDom from 'react-dom';
import {render,fireEvent,cleanup,screen,container} from '@testing-library/react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import "@testing-library/jest-dom/extend-expect";
import {shallow,configure,mount} from 'enzyme';


configure({ adapter: new Adapter() })

afterEach(() => {
    jest.clearAllMocks();
  });

it("renders Navbar component correctly",()=>{
    const wrapper=mount(<Navbar/>);
    expect(wrapper.find('.heading1')).toHaveLength(1);
})

it("renders Form component correctly",()=>{
    const wrapper=mount(<Form/>);
    expect(wrapper.find('.modal')).toHaveLength(1);
})

it("Enter button for game room works fine",()=>{
    const goToGameRoom=jest.fn();
    const wrapper=mount(<button id="enterbutton" onClick={goToGameRoom}>Enter</button>);
    wrapper.find("#enterbutton").simulate("click");
    expect(goToGameRoom.mock.calls.length).toEqual(1);
})

it("Passes variables correctly from App to Navbar component",()=>{
    const {getByTestId}=render(<Navbar childgame="ASDFG"/>);
    expect(getByTestId('GameRoomTestId')).toHaveTextContent("ASDFG");
})

it("Reflect value of input of Game Room",()=>{
    const handleGameCodeChange = jest.fn();
    const wrapper = shallow(<input placeholder="Game Code" id="gamecode"  color= "secondary"  onChange={handleGameCodeChange} />);
    const changeEvent = { target:{ value: 'ASDFG'} };
    expect(handleGameCodeChange).not.toBeCalled();
    wrapper.find('#gamecode').simulate('change', changeEvent);
    expect(handleGameCodeChange).toBeCalledWith(changeEvent);

})

it("renders Sign Up Form Correctly",()=>{

    //In Total has 3 seconds advance to 2 seconds should display 1
    const {getByText,getByTestId}=render(<Form/>);
    const signup=getByTestId('SignUpButton');
    fireEvent.click(signup);
    expect(getByText('Select Age')).toBeInTheDocument();
    expect(getByText('Select Gender')).toBeInTheDocument();
    
})

it("reflect value of username correctly",()=>{

    const {getByText,getByTestId}=render(<Form/>);
    const signup=getByTestId('SignUpButton');
    fireEvent.click(signup);
    const username=getByTestId('userNameInput');
    fireEvent.change(username,{
        target:{
            value:"greekavi"
        }
    });
    expect(username.value).toBe("greekavi");
    
})

it("reflect value of radio button correctly",()=>{

    const {getByText,getByTestId,getByLabelText}=render(<Form/>);
    const signup=getByTestId('SignUpButton');
    fireEvent.click(signup);
    const radio = getByLabelText('Male')
  fireEvent.change(radio, { target: { value: "Female" } });
  expect(radio.value).toBe('Female')
    
})

import Navbar from './../Navbar/Navbar';
import Form from './../Form/Form';
import App from './../App/App';
import Counter from './../Counter/Counter';