function throttling (f, ms) {
    let isThrottled = false;
    let lastArgs;
    let lastThis;
    return function throttler (...args) {
        if (isThrottled) {
            lastArgs = args;
            lastThis = this;
            return
        };
        f.apply(this, args);
        isThrottled = true;
        setTimeout(() => {
            isThrottled=false;
            if (lastArgs) {
                throttler.apply(lastThis, lastArgs)
            }
            lastArgs = null;
            lastThis = null;
        }, ms)
    }
}

function f(a) {
    console.log(a)
  }
  
  // f1000 передаёт вызовы f максимум раз в 1000 мс
  let f1000 = throttle(f, 1000);
  
  f1000(1); // показывает 1
  f1000(2); // (ограничение, 1000 мс ещё нет)
  f1000(3); // (ограничение, 1000 мс ещё нет)
  
  // когда 1000 мс истекли ...
  // ...выводим 3, промежуточное значение 2 было проигнорировано