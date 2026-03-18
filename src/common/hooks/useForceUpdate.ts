/**
 * 强制更新
*/
import React from "react";
import { createNextTick } from "../util";

const nextTick = createNextTick(10);

const useForceUpdate = () => {
   const [key, update] = React.useReducer((x) => x + 1, 0);

  const forceUpdate = () => nextTick(() => update());

  return {key, forceUpdate};
};

export default useForceUpdate;
