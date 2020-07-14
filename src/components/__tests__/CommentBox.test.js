import React from 'react';
import { mount } from 'enzyme';
import CommentBox from 'components/CommentBox';

test('has an input and button', () => {
  const wrapped = mount(<CommentBox />);
  console.log(wrapped.find('input'));
});
