const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector('header button')

button.addEventListener('click',add)

function add(){
  const today = new Date().toLocaleDateString('pt-br').slice(0,5)
  // const today = '20/01'
  const dayExists = nlwSetup.dayExists(today)

  if(dayExists){
    alert('Dia já está incluso!')
    return
  }
  
  nlwSetup.addDay(today)
}

form.addEventListener('change', save)

function save(){
  localStorage.setItem('NLWSetup@Habits',JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@Habits')) || {
  study:["01-10","01-11","01-12","01-13","01-14","01-15","01-16","01-17","01-18","01-19","01-20","01-21"],
  water:["01-10","01-11","01-13","01-14","01-15","01-16","01-18","01-20","01-21"],
  exercise:["01-12","01-14","01-17","01-18","01-20"],
  healthy:["01-10","01-11","01-12","01-13","01-15","01-16","01-17","01-19","01-21"],
  sleep:["01-10","01-13","01-15","01-17","01-18","01-19","01-21"],
  dog:["01-11","01-14","01-17","01-20"]
}

// data = {
//   study:["01-10","01-11","01-12","01-13","01-14","01-15","01-16","01-17","01-18","01-19","01-20","01-21"],
//   water:["01-10","01-11","01-13","01-14","01-15","01-16","01-18","01-20","01-21"],
//   exercise:["01-12","01-14","01-17","01-18","01-20"],
//   healthy:["01-10","01-11","01-12","01-13","01-15","01-16","01-17","01-19","01-21"],
//   sleep:["01-10","01-13","01-15","01-17","01-18","01-19","01-21"],
//   dog:["01-11","01-14","01-17","01-20"]
// }

nlwSetup.setData(data)
nlwSetup.load() 