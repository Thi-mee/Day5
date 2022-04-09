const stringArray = [['timi/19/400 level'], ['tomisin/21/500 level']]

function reverseFizzBuzzProMax(array){
  const objectArray = []
  array.forEach(textString => {
    const splitString = textString.toString().split("/") 

    const person = {
      name: splitString[0],
      age: parseInt(splitString[1]),
      level: splitString[2]
    };
    objectArray.push(person)
  })
  return objectArray
}

console.log(reverseFizzBuzzProMax(stringArray))