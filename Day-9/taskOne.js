// Day 9: DOM Manipulation

// Activity 1: Selecting and Manipulating Elements 

// Task 1:
const heading = document.getElementById('heading');
heading.innerText = 'Paragraph'

// Task 2:
const bgColor = document.querySelector('.bgColor')
bgColor.style.backgroundColor = 'red'

// Activity 2: Creating and Appending Elements 
// Task 3:
const body = document.querySelector('body')
const div = document.createElement('div')
div.innerHTML = 'Hello World!'
document.body.appendChild(div)

// Task 4:
const unorderList = document.querySelector('#unorderList')
const newListItem = document.createElement('li')
newListItem.textContent = 'About'
unorderList.appendChild(newListItem)

// Activity 3: Removing Elements 
// Task 5:
const html = document.querySelector('html')
// html.remove()

// Task 6:
// html.removeChild(html.lastChild);
// unorderList.removeChild(unorderList.lastChild)

// Activity 4: Modifying Attributes and classes
// Task 7:
const images = document.getElementById('images')
images.setAttribute('alt', 'Images')

// Task 8:
// Add class to heading
heading.classList.add('changeColor')
// Remove class from heading
heading.classList.remove('changeColor')

// Activity 5: Event Handling
// Task 9:
const para = document.querySelector('#para')
const changeText = () => {
    para.innerText = "Changed text"
}

// Task 10:
para.addEventListener('mouseover', () => {
    para.style.border = '2px solid black'
})