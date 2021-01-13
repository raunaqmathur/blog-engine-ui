import PubPostByUserName from './PubPostByUserName'
import React from 'react';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { shallow, configure } from 'enzyme';
import CardPost from '../UI/CardPost/CardPost';
import 'mock-local-storage'

configure({ adapter: new Adapter() });

describe('PubPostByUserName', () => {

    it('PubPostByUserName form is loaded as expected', () => {
        sessionStorage.clear();
        sessionStorage.setItem("userName", "test");
        const wrapper = shallow(<PubPostByUserName/>);
        const cardPost = wrapper.find('CardPost');
        expect(cardPost).toHaveLength(1);
    });
});