import React from 'react';
import ReactDom from 'react-dom';
import Form from './../Form/Form';
import {render,fireEvent,cleanup,screen,container} from '@testing-library/react';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import Radio from '@material-ui/core/Radio';
import TextField from '@material-ui/core/TextField';
import RadioGroup from '@material-ui/core/RadioGroup';
import Typography from '@material-ui/core/Typography';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import 'firebase/firestore';
import firebase from 'firebase/app';
import "@testing-library/jest-dom/extend-expect";

import {shallow,configure,mount} from 'enzyme';

configure({ adapter: new Adapter() })

afterEach(() => {
    jest.clearAllMocks();
  });

it("Reflect value of input of Email",()=>{
    const handleEmailChange = jest.fn();
    const wrapper = shallow(<TextField label="Email"  id="EmailInput" onChange={handleEmailChange}/>);
    const changeEvent = { target:{ value: 'janedoe13@gmail.com'} };
    expect(handleEmailChange).not.toBeCalled();
    wrapper.find('#EmailInput').simulate('change', changeEvent);
    expect(handleEmailChange).toBeCalledWith(changeEvent);

})

it("Check if Input is of email type",()=>{
    const handleEmailChange = jest.fn();
    const uriRegEx = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const wrapper = shallow(<TextField label="Email"  id="EmailInput" onChange={handleEmailChange}/>);
    const changeEvent = { target:{ value: 'janedoe13@gmail.com'} };
    expect(handleEmailChange).not.toBeCalled();
    wrapper.find('#EmailInput').simulate('change', changeEvent);
    expect(changeEvent.target.value).toMatch(uriRegEx);

})


it("SignUp button works",()=>{

    const opensignin=jest.fn();
    const wrapper=shallow(<Button id="submit" onClick={opensignin}>Sign Up</Button>);
    wrapper.find("#submit").simulate("click");
    expect(opensignin.mock.calls.length).toEqual(1);

})
it("SignIn button works",()=>{
    const handleSignin=jest.fn();
    const wrapper=shallow(<Button id="signin" onClick={handleSignin}>Sign In</Button>);
    wrapper.find('#signin').simulate('click');
    expect(handleSignin.mock.calls.length).toEqual(1);
})


