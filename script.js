const question = document.querySelectorAll('.question')
const answer = document.querySelectorAll('.answer')

for(let i = 0; i < question.length; i++){
    question[i].addEventListener('click', () => {
        if(question[i].classList.contains('close')){
            answer[i].classList.toggle('active')
            question[i].classList.toggle('close')
        }else{
            answer[i].classList.add('active')
            question[i].classList.add('close')
        }
    })
}