import IUnPubPost from './IUnPubPost'
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';

configure({ adapter: new Adapter() });

describe('IUnPubPost', () => {
    it('IUnPubPost form is loaded as expected', () => {
        const wrapper = shallow(<IUnPubPost location="search"/>);
        const form = wrapper.find('form');
        const textBoxes = wrapper.find('textarea');
        expect(textBoxes).toHaveLength(2);
        const buttons = wrapper.find('button');
        expect(buttons).toHaveLength(2);
    });
});

  