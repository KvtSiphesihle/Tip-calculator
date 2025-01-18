
// bill input, tip input, number of people div, and per person total div

let billinput = document.getElementById('billTotalInput')
let tipinput = document.getElementById('tipInput')
let noofpeople = document.getElementById('numberOfPeople')
let perPersonTotal = document.getElementById('perPersonTotal')



// Get number of people from number of people div
let peoplewegot = Number(noofpeople.innerText)

// ** Calculate the total bill per person **
const calculateBill = () => {

  let billgot = Number(billinput.value)

  let tippercentage = Number(tipinput.value) / 100

  let totaltip = billgot * tippercentage

  let totalexpense = billgot + totaltip

  let spiltbill = totalexpense / peoplewegot

  perPersonTotal.innerText = `R${spiltbill.toFixed(2)}`

}


const increasePeople = () => {
  
  peoplewegot += 1
  noofpeople.innerText = peoplewegot

  calculateBill()

}


const decreasePeople = () => {
 
  if (peoplewegot <= 1) {
    alert('Hey! You cannot have less than one person')
    return
  }

 
  peoplewegot = peoplewegot-1
  noofpeople.innerText = peoplewegot
  
  calculateBill()

}