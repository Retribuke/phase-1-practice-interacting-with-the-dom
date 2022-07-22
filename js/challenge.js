const counter = document.querySelector('#counter');
const countDown = document.querySelector('#minus');
const countUp = document.querySelector('#plus');
const like = document.querySelector('#heart');
const stahp = document.querySelector('#pause');
const submit = document.querySelector('#submit')
const input = document.querySelector('#comment-input')

let likeCounter = 1
document.addEventListener("DOMContentLoaded", () => {
    return myInterval = setInterval(increaseCount, 1000)
});

countUp.addEventListener('click', increaseCount);
countDown.addEventListener('click', decreaseCount);
like.addEventListener('click', likeNumber);
stahp.addEventListener('click', pauseCounter);
submit.addEventListener('click', (e) => {
    e.preventDefault()
    submitComment()
})

function submitComment() {
    let li = document.createElement('li')
    let comments = document.querySelector('.comments')
    li.textContent = input.value
    console.log(input.value)
    console.log(li) 
    comments.appendChild(li)
    input.reset()
}

function increaseCount() {
    counter.textContent = parseInt(counter.textContent, 10) +1
}

function decreaseCount() {
    counter.textContent = parseInt(counter.textContent, 10) -1
}

function likeNumber() {
    let lists = document.querySelectorAll('li')
    console.log(lists)

    if(lists.length >= 1) {
        let element = document.getElementById(`${counter.textContent}`) 
        let likedNumb = counter.textContent
        
        if(Array.from(lists).find((item => item.id == likedNumb))) {
            let countObj = JSON.parse([element.textContent])
            let likeCounter = parseInt(countObj.Likes)
            likeCounter = parseInt(likeCounter, 10) +1
            element.textContent = JSON.stringify({
                Number:   likedNumb,   
                Likes:   likeCounter
            })
        } else {
            createLi()
        }
    } else {
        createLi()
    }
}
    
function createLi() {
    let likedNumb = parseInt(counter.textContent, 10)
    let li = document.createElement('li')
        li.setAttribute('id', `${likedNumb}`)
        li.textContent = JSON.stringify({
            Number:   likedNumb,      
            Likes:   likeCounter
        })
        document.querySelector('.likes').appendChild(li)
}   

function pauseCounter() {
    if(stahp.textContent === 'resume') {
        stahp.textContent = 'pause'
        myInterval = setInterval(increaseCount, 1000)
    } else {
        stahp.textContent = 'resume'
        clearInterval(myInterval)
    }
    countDown.disabled = !countDown.disabled
    countUp.disabled = !countUp.disabled
    like.disabled = !like.disabled
    submit.disabled = !submit.disabled
}

function checkMatching(lists) {
    for(const element of lists) {
        let countObj = JSON.parse([element.textContent])
        let likedNumb = counter.textContent
        let likeCounter = countObj.Likes
        
        if(likedNumb == element.id) {
            likeCounter = parseInt(likeCounter, 10) +1
            element.textContent = JSON.stringify({
                Number:   likedNumb,   
                Likes:   likeCounter
            })
        } 
    }
}       
    


