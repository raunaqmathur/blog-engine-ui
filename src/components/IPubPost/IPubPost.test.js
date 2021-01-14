import IPubPost from './IPubPost'
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import 'mock-local-storage'

configure({ adapter: new Adapter() });

describe('IUnPubPost', () => {
    it('IPubPost form is loaded as expected', () => {
        sessionStorage.clear();
        const wrapper = shallow(<IPubPost location="search"/>);
        const form = wrapper.find('form');
        expect(form).toHaveLength(0);
        const anchor = wrapper.find('a');
        expect(anchor).toHaveLength(1);        
    });

    it('IPubPost form is loaded as expected with session', () => {
        sessionStorage.setItem("userName", "test");
        const wrapper = shallow(<IPubPost location="search"/>);
        const form = wrapper.find('form');
        expect(form).toHaveLength(1);
        const anchor = wrapper.find('a');
        expect(anchor).toHaveLength(0);
    });
});