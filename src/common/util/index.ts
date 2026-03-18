/**
 * nextTick
 */
export const createNextTick = (time = 10) => {
  let callback: Function[] = []; // 任务集合
  let padding = false; // 当前执行状态

  function flushCallbacks() {
    padding = false;
    const copies = callback.slice(0);
    callback.length = 0;
    for (let i = 0; i < copies.length; i++) {
      copies[i]();
    }
  }

  // 这里直接宏任务作为一个事件循环
  let timerFun = () => {
    setTimeout(flushCallbacks, time);
  };

  return function nextTick(cb?: Function, ctx?: any): | Promise<any> {
    let _resolve: Function;
    callback.push(() => {
      if (cb) {
        cb.call(ctx);
      } else if (_resolve) {
        _resolve(ctx);
      }
    });

    if (!padding) {
      padding = true;
      timerFun();
    }

    if (!cb) {
      return new Promise((resolve) => {
        _resolve = resolve;
      });
    }
  };
};