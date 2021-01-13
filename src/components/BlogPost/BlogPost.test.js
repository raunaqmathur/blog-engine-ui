import BlogPost from './BlogPost'
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import CardPost from '../UI/CardPost/CardPost';
import 'mock-local-storage'

configure({ adapter: new Adapter() });

describe('BlogPost', () => {

    it('BlogPost form is loaded as expected', () => {
        sessionStorage.clear();
        const wrapper = shallow(<BlogPost/>);
        const cardPost = wrapper.find('CardPost');
        expect(cardPost).toHaveLength(1);
    });
});