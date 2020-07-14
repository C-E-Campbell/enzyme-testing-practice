import React from 'react';
import CommentList from 'components/CommentList';
import CommentBox from 'components/CommentBox';
const App = (props) => {
  return (
    <>
      <CommentBox />
      <CommentList />
    </>
  );
};

export default App;
