let state = 'idle'
let user = null
let calculated = '1'

// Only allowed to change below


const logCalc = () => { 
    const isString = typeof calculated === 'string'  //= 'numerical-string'
   //console.log(isString) 
    let calculatedAsNumber
   isString ?  calculatedAsNumber =  parseInt(calculated) : calculatedAsNumber= calculated 
   //console.log(calculatedAsNumber)
    calculated = calculatedAsNumber + 1 
}

//logCalc()

const calcUser = () => {
  logCalc()
  if (calculated > 2) user = 'John'
  if (calculated > 2) state = 'requesting'
  if (calculated > 3) state = 'idle'
}

const checkUser=  () => {
	if (user && state === 'requesting') {
		console.log(`User: ${user} (${calculated})`)
	}
}

// Only allowed to change code above

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()

checkUser()
calcUser()