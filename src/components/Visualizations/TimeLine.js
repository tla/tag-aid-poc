import React from 'react';
import EditionHeader from './../Edition/EditionHeader'

const Timeline = (props) => {

  const { onSearch } = props;

  return (
    <>
      <EditionHeader  onSearch = {onSearch} />
      <div>
        time line here
      </div>
    </>
  );

}
export default Timeline;
