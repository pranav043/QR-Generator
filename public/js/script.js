const wrapper = document.querySelector('.wrapper'),
  qrInput = wrapper.querySelector('.form input'),
  generateBtn = wrapper.querySelector('.form button'),
  qrImg = wrapper.querySelector('.qr-code img'),
  buttonSubmit = document.querySelector('.buttonSubmit')
let preValue

generateBtn.addEventListener('click', () => {
  let qrValue = qrInput.value.trim()
  if (!qrValue) generateBtn.innerText = 'Please enter some text!!!'
  if (preValue === qrValue) return
  preValue = qrValue
  buttonSubmit.classList.remove('blank')
  generateBtn.innerText = 'Generating...'
  qrImg.src = `https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=${qrValue}`
  qrImg.addEventListener('load', () => {
    wrapper.classList.add('active')
    generateBtn.innerText = 'Generate'
  })
})

qrInput.addEventListener('keyup', () => {
  if (!qrInput.value.trim()) {
    wrapper.classList.remove('active')
    preValue = ''
  }
})

qrInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault()
    buttonSubmit.click()
  }
})
