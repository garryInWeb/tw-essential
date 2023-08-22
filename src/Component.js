import React, { useEffect } from "react";
import { initTE, Select } from "tw-elements";

const Component = (index) => {

  index = index.index

  useEffect(() => {
    initTE({ Select });
  }, []);

  return (
    <div className="mb-4" id={'index'+index} name={'index'+index}>
        <select data-te-select-init multiple>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
            <option value="4">Four</option>
            <option value="5">Five</option>
            <option value="6">Six</option>
            <option value="7">Seven</option>
            <option value="8">Eight</option>
        </select>
        <label data-te-select-label-ref>Example label</label>
    </div>
  );
};

export default Component;