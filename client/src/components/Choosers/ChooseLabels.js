import React, { useCallback } from 'react';
import Selector from 'react-select';
import { labelsChooserStyle } from './ChoosersStyle';

const ChooseLabels = ({ labels, chooseLabels, setLabels }) => {
  const selectionChange = useCallback((chosen) => {
    setLabels(chosen);
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      <Selector
        value={labels}
        maxMenuHeight={300}
        placeholder="select labels"
        isMulti
        name="labels"
        onChange={selectionChange}
        closeMenuOnSelect={false}
        options={chooseLabels}
        styles={labelsChooserStyle}
      />
    </div>
  );
};

export default ChooseLabels;
