// This side for first draging. First part
const item = document.querySelector('.item')
item.addEventListener('dragover', dragstart)
item.addEventListener('dragend', dragend)

function dragstart(event) {
    event.target.classList.add('hold')
    setTimeout(() => {
     event.target.classList.add('hide')
    }, 0);
}

function dragend(event) {
    event.target.classList.remove('hold', 'hide')

    // {  another version of solution
    // event.target.className = 'item'   }
}


// this part for droping and putting file. Second part

const placeholders = document.querySelectorAll('.placeholder')

for (const placeholder of placeholders) {
    placeholder.addEventListener('dragover', dragover)
    placeholder.addEventListener('dragenter', dragenter)
    placeholder.addEventListener('dragleave', dragleave)
    placeholder.addEventListener('drop', dragdrop)
}



function dragover(event) {
    event.preventDefault()
}

function dragenter(event) {
    event.target.classList.add('hovered')
    
}

function dragleave(event) {
    event.target.classList.remove('hovered')
    
}

function dragdrop(event) {
    event.target.classList.remove('hovered')
    event.target.append(item)
}