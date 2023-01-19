const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
  study: ['01-16', '01-17', '01-18', '01-19'],
  water: [],
  exercise: [],
  healthy: [],
  sleep: ['01-17', '01-18'],
  dog: []
}

nlwSetup.setData(data)
nlwSetup.load()

