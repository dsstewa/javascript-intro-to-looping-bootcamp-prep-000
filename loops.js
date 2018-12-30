
function forLoop(array) {
  for (let i = 0; i < 26; i++) {
  
      if(i === 1) {
      array.push("I am 1 strange loop.")
    }
      else if(i < 25) {
        array.push(`I am ${i} strange loops.`)
      }
      else {
      return array
      }
  
  }
}

function whileLoop(s) {
  while(s > 0) {
    console.log(--s)
  }
return "done"
  
}


