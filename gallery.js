const tomb = ['alma', 'körte', 'kutya', 'macska']
for (let elem of tomb) {
  console.log(elem)
  let tempDiv = document.createElement('div')
  tempDiv.innerHTML = elem
  newDiv.appendChild(tempDiv)
}
console.log('Hello')

const newDiv = document.createElement('div')
newDiv.innerHTML = 'HELLo'
document.body.appendChild(newDiv)
