import Login from './Login'
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import Textbox from '../UI/TextBox/Textbox'
import 'mock-local-storage'

configure({ adapter: new Adapter() });

describe('Login', () => {
    it('Login form is loaded as expected', () => {
        sessionStorage.clear();
        const wrapper = shallow(<Login/>);
        const form = wrapper.find('form');
        expect(form).toHaveLength(1);
        const textBox = wrapper.find('input');
        expect(textBox).toHaveLength(1);
        const anchor = wrapper.find('a');
        expect(anchor).toHaveLength(1);
    });
});