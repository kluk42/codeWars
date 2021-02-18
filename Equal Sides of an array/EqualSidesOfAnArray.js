function findEvenIndex (arr) {
  let res = -1;
  const withoutFirst = arr.slice(1,arr.length);
  const sumOfWithoutFirst = withoutFirst.reduce((acc, el) => acc+el, 0);
  if (sumOfWithoutFirst===0) res=0;
  function slicer(n) {
    if (n === arr.length) return
    const left = arr.slice(0,n);
    const right = arr.slice(n+1);
    const sumLeft = left.reduce((acc, el) => acc+el, 0);
    const sumRight = right.reduce((acc, el) => acc+el, 0);
    if (sumRight === sumLeft) {
      res = n
    } else {
      slicer(n+1);
    }
  }
  slicer(1);
  return res
}

console.log(findEvenIndex([1, 2, 2, 3]))