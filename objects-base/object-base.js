// first task
const user = {}
user.name = "John"
user.surname = "Smith"
user.name = "Pete"
delete user.name
// log
console.log(user)

// second task
function isEmpty(item) {
  for (const key in item) {
    if (Object.hasOwn(item, key)) {
      return false
    }
  }
  return true
}
const emptyItem = {}

console.log(isEmpty(user))
console.log(isEmpty(emptyItem))

// task 3
let salaries = {
  John: 100,
  Ann: 160,
  Pete: 130
}

function sum(item) {
  let sum = 0
  // loop on object
  for (const key in item) {
    if (!Object.hasOwn(item, key)) continue
    const number = item[key]
    sum += number
  }
  return sum
}

const total = sum(salaries)
console.log(total)

// task 4

// before the call
let menu = {
  width: 200,
  height: 300,
  title: "My menu"
}

function multiplyNumeric(object) {
  // loop
  for (const key in object) {
    // get current value
    let value = object[key]
    // check type
    if (typeof value === "number") {
      value *= 2
      object[key] = value
    }
  }
  return object
}

const result = multiplyNumeric(menu)
console.log(result)
