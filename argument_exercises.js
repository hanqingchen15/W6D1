function sum() {
  let result = 0;
  for (i = 0; i < arguments.length; i ++) {
    result += arguments[i];
  }
  return result;
}

console.log(sum(1, 2, 3, 4, 5));

function sum1(...input) {
  let result = 0;
  for (i = 0; i < input.length; i ++) {
    result += input[i];
  }
  return result;
}

console.log(sum1(1, 2, 3, 4, 5));

Function.prototype.myBind() = function (ctx) {
  const func = this;

  const boundArgs = Array.from(arguments).slice(1);
  return function _boundFn() {
    const calledArgs = Array.from(arguments);
    return func.apply(ctx, boundArgs.concat(calledArgs));
  }
}

Function.prototype.myBind2() = function (ctx, ...boundArgs) {
  return (...calledArgs) => {
    this.apply(ctx, boundArgs.concat(calledArgs))
  }
}

function curriedSum(numArgs) {
  const numbers = [];

  function _curriedSum(number) {
    numbers.push(number);

    if (numbers.length === numArgs) {
      let result = 0;
      for (i = 0; i < numbers.length; i ++) {
        result += numbers[i];
      }
      return result;
    } else {
      return _curriedSum;
    }
  }
  return _curriedSum;
}
const sum = curriedSum(4);
console.log(sum(5)(30)(20)(1));

Function.prototype.curry = function(numArgs) {
  const args = [];

  function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      args.forEach(n) {
        return this(n);
      }
    } else {
      return _curry;
    }
  }
  return _curry;
}


Function.prototype.curry1 = function(numArgs) {
  const args = [];

  function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return this(...args);
    } else {
      return _curry;
    }
  }
  return _curry;
}

Function.prototype.curry2 = function(numArgs) {
  const args = [];
  const func = this;

  function _curry(arg) {
    args.push(arg);
    if (args.length === numArgs) {
      return func.apply(null, args);
    } else {
      return _curry;
    }
  }
  return _curry;
}
