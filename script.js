let value = Math.floor(Math.random() * 20) + 1;

let count = 1;
const inputValues =document.querySelector('input')
const score = document.querySelector('.score')
const highScore = document.querySelector('.highscore')
const bodyEle = document.querySelector('body');
const checkBtn = document.querySelector('.check')
const againBtn = document.querySelector('.again')
const message = document.querySelector('.message')

checkElement = () =>{
    
    if(count < 5){
        checkNumber()
        count += 1
    }
    else{
        checkNumber()
        checkBtn.disabled = true;
        let high = parseInt(highScore.textContent);
        let current = parseInt(score.textContent)

        if( current > high)
            highScore.textContent = current;
        score.textContent = 0;
        highScore.style.color = 'black'

        message.textContent = 'You have reached the limit, continue by clicking on \" Again!\"';
        changeBackground("blue", 500);
        message.style.color = 'red'
        
    }

}

let changeBackground = (color, num) => {
    setTimeout(() => {
                bodyEle.style.backgroundColor = color;
                inputValues.value = ''
            },num)
}

againBtn.addEventListener('click',() => {
    bodyEle.style.backgroundColor = 'black'
    checkBtn.disabled = false;
    highScore.style.color = 'white'

    message.textContent = 'Start guessing...';
    message.style.color = 'white';
    count = 1;
    value = Math.floor(Math.random() * 20) + 1
})

let checkNumber = () => {
    const inputValue = inputValues.value.trim()
        if(inputValue === ''){
            alert('Enter the value')
            return ;
        }

        if(parseInt(inputValue) === value){
            score.textContent = parseInt(score.textContent) + 20;
            bodyEle.style.backgroundColor = 'green'
            changeBackground('black', 500)
            value = Math.floor(Math.random() * 20) + 1
           
        }
        else{
            bodyEle.style.backgroundColor = 'red';
            changeBackground('black',500)  
        }
}