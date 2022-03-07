const arr = ['a', 'b', 'c', 'd', 'e']
const transfer = array => {
  let result = null
  for (let i = array.length - 1; i >= 0; i--) {
    const key = array[i]
    result = {[key]: result}
  }
  return result
}

console.log('taodawang transfer ===>', JSON.stringify(transfer(arr)))