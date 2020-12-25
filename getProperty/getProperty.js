function getProperty(obj, path) {
    let keys = [''];
    let num = 0;
    for (let i = 0; i < path.length; i = i + 1) {
        if (path[i] !== '.') {
            keys[num]=keys[num]+path[i]
        } else {
            num = num + 1;
            keys[num]=''
        }
    }
    let element = ''
    for (let k = 0; k < keys.length; k = k+1) {
        if (k===0) {
            element = obj[keys[k]]
        } else {
            element = element[keys[k]]
        }  
    }
    console.log(element)
  }
  
  const object = {
    one: 1,
    two: {
      three: 3
    },
    four: 4
  };
  
  getProperty(object, 'one'); // 1
  getProperty(object, 'two.three'); // 3