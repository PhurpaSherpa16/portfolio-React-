 const arr = ['apple',100,'c','dog','ram',8,'d']

  const number = []
  const char = []
  const word = []

  arr.forEach((item)=>{
    if (typeof(item) === 'number'){
      number.push(item)
    }
    if(typeof(item) === 'string' && item.length > 1){
      word.push(item)
    }
    if(typeof(item) === 'string' && item.length <= 1){
      char.push(item)
    }
  })

  console.log("Numbers:", number);
  console.log("Chars:", char);
  console.log("Words:", word);