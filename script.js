
let openQuestion = null

function expand(selectedQuestion){ 

    if (openQuestion !== null){
        let previousQuestion = document.getElementById("Q"+openQuestion)
        let previousAnswer = document.getElementById("P"+openQuestion)
        let previousArrow = document.getElementById("arrow"+openQuestion)
        previousQuestion.removeAttribute("class")
        previousAnswer.removeAttribute("class")
        previousArrow.removeAttribute("class")
    }

   
    if(openQuestion !== selectedQuestion){
    let question = document.getElementById("Q"+selectedQuestion)
    let answer = document.getElementById("P"+selectedQuestion)
    let arrow = document.getElementById("arrow"+selectedQuestion)
    question.setAttribute("class", "clicked")
    answer.setAttribute("class", "show")
    arrow.setAttribute("class", "flip")
    openQuestion = selectedQuestion}

    else{openQuestion = null}
}








