import SideNav from './SideNav'
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import Textbox from '../UI/TextBox/Textbox'
import 'mock-local-storage'

configure({ adapter: new Adapter() });

describe('SideNav', () => {

    it('SideNav is loaded as expected', () => {
        sessionStorage.clear();
        const wrapper = shallow(<SideNav/>);
        const cardBlogs= wrapper.find('CardBlogs');
        expect(cardBlogs).toHaveLength(1);

    });
});