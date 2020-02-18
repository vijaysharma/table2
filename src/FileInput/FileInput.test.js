import React from 'react';

import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

import FileInput from './FileInput';

configure({adapter: new Adapter()});

describe('<FileInput/>', () => {
  it('should have file input', () => {
    const wrapper = shallow(<FileInput />);
    expect(wrapper.find('input').simulate('change', {
      target: {
        files: [
          'File Uploaded'
        ]
      }
    }));
  });
});