import Register from './Register'
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import Textbox from '../UI/TextBox/Textbox'
import 'mock-local-storage'

configure({ adapter: new Adapter() });

describe('Register', () => {

    it('Register form is loaded as expected', () => {
        sessionStorage.clear();
        const wrapper = shallow(<Register/>);
        const cardPost = wrapper.find('form');
        expect(cardPost).toHaveLength(1);
        const input= wrapper.find('Textbox');
        expect(input).toHaveLength(6);
        const button= wrapper.find('input');
        expect(button).toHaveLength(1);
    });
});