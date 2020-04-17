import React from "react";

const useLatestValue = value => {
  const valueRef = React.useRef(value);
  valueRef.current = value;
  return React.useCallback(() => valueRef.current, []);
};

export default useLatestValue;
