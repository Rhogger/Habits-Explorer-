const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)

const data = {
  study: ['01-16', '01-17', '01-18', '01-19', '01-20', '01-21', '01-22', '01-23', '01-24', '01-25', '01-26', '01-27', '01-28', '01-29', '01-30', '01-31'],
  water: [],
  exercise: [],
  healthy: [],
  sleep: ['01-17', '01-18'],
  dog: []
}

nlwSetup.setData(data)
nlwSetup.load()

