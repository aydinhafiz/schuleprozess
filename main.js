let questionsData = [
    {
        questionContent: "Was war die Schwäche der Parteien in der Weimarer Republik",
        questionAnswer: "  die mangelnde Bereitschaft zusammenzuarbeiten und Kompromisse zu schließen und radikalen Bewegungen.",
        isQuestionOpen: false,
        id: Math.floor(Math.random() * 1000000),
    },
    {
        questionContent: "Machtergreifung der Nationalsozialisten",
        questionAnswer: "Der Einführung des Führerprinzips und alle anderen Parteien  eliminieren.",
        isQuestionOpen: false,
        id: Math.floor(Math.random() * 1000000),
    },
    {
        questionContent: "Verboten sämtliche politischen Parteien bis auf die NSDAP",
        questionAnswer: "Die Zerschlagung der gewerkschaftlichen Bewegung und verboten sämtliche politischen Parteien",
        isQuestionOpen: false,
        id: Math.floor(Math.random() * 1000000),
    },
    {
        questionContent: "Keine Chance Interessen durchzusetzen.",
        questionAnswer: "Radikalen Veränderung der politischen Landschaft und  einer massiven Einschränkung der Freiheit",
        isQuestionOpen: false,
        id: Math.floor(Math.random() * 1000000),
    },
    {
        questionContent: "Nach dem Zweiten Weltkrieg",
        questionAnswer: "Echten politischen Kraft.",
        isQuestionOpen: false,
        id: Math.floor(Math.random() * 1000000),
    },
]
const faqsElement = document.querySelector(".faqs")

function UpdateUi(questions) {
    faqsElement.innerHTML = "";
    questions.forEach(
        function (question) {
            const questionString = `<div class="faq">
        <div class="question">
          <span class="question-sentence" id="${question.id}">${question.questionContent}</span>
          <img class="${question.isQuestionOpen ? "rotate" : ""}" src="./assets/Path 2.png" alt="">
        </div>
        <span class="question-answer ${question.isQuestionOpen ? "" : "question-answer-hidden"} ">${question.questionAnswer}</span>
      </div>`
            faqsElement.insertAdjacentHTML("beforeend", questionString)
        }
    )
}
UpdateUi(questionsData)

faqsElement.addEventListener("click", (e) => {
    if (e.target.classList.contains("question-sentence")) {
        // e.target.parentElement.nextElementSibling.classList.toggle("question-answer-hidden");
        const id = Number(e.target.id)
        console.log(id);
        const newQuestions = questionsData.map(function (question) {
            if (question.id === id) {
                return {
                    ...question,
                    isQuestionOpen: !question.isQuestionOpen,
                }
            } else {
                return {
                    ...question,
                    isQuestionOpen: false,
                }
            }
        })
        questionsData = newQuestions
        UpdateUi(questionsData);
    }
})