const quizData = {
  junior: [
    {
      question: "What is the output of below code?",
      code: "<p>var car = new Vehicle('Honda', 'white', '2010', 'UK');</p><p>console.log(car);</p><p>function Vehicle(model, color, year, country) {</p><ul><li>this.model = model;</li><li>this.color = color;</li><li>this.year = year;</li><li>this.country = country;</li></ul>}",
      options: [
        "Undefined",
        "ReferenceError",
        "null",
        "{model: 'Honda', color: 'white', year: '2010', country: 'UK'}",
      ],
      answer: "{model: 'Honda', color: 'white', year: '2010', country: 'UK'}",
    },
    {
      question: "What is the output of below code?",
      code: '<p>Number("1") - 1 == 0</p>',
      options: ["false", "true", "NaN", "undefined"],
      answer: "true",
    },
    {
      question: "What is the output of below code?",
      code: "<p>function main(){</p><p>console.log('A');</p><p>setTimeout(</p><p>function print(){ console.log('B'); }</p><p>,0);</p><p>console.log('C');</p><p>}</p><p>main();</p>",
      options: ["A, B and C", "B, A and C", "A and C", "A, C and B"],
      answer: "A, C and B",
    },
    {
      question: "What is the output of below code?",
      code: "<p>console.log(1 < 2 < 3);",
      options: ["true", "false", "SyntaxError"],
      answer: "true",
    },
    {
      question: "What is the output of below code?",
      code: '<p>let msg = "Good morning!!"</p><p>msg.name = "John";</p><p>console.log(msg.name)</p>',
      options: ['""', "Error", "John", "Undefiend"],
      answer: "Undefiend",
      explanation:
        "Even though msg.name = 'John'; does not throw an error, the name property is not retained because msg is a primitive string. When you try to access msg.name, it does not exist on the primitive string, hence it returns undefined.",
    },
    {
      question: "What is the output of below code?",
      code: "<p>const obj = {'key': 'value'};</p><p>const array = [...obj];</p><p>console.log(array)</p>",
      options: ["['key', 'value']", "TypeError", "[]", "['key']"],
      answer: "TypeError",
    },
    {
      question: "What is the output of below code?",
      code: "<p>console.log('Starting');</p><p>SetTimeout(() => { console.log('2 Second Timer');}, 2000)</p><p>setTimeout(() => { console.log('0 Second Timer');},0)</p><p>console.log('Stopping')</p>",
      options: [
        "Starting, 2 Second Timer, 0 Second Timer, Stopping",
        "Starting, 0 Second Timer, 2 Second Timer ,Stopping",
        "Starting, Stopping, 0 Second Timer, 2 Second Timer",
        "2 Second Timer, 0 Second Timer, Starting, Stopping",
      ],
      answer: "Starting, Stopping, 0 Second Timer, 2 Second Timer",
    },
    {
      question: "What is the output of below code?",
      code: '<p>var elem;</p><p>if (11 == 11 && 12 < 10) {</p><p> elem = 12;</p><p>} else {</p><p>elem = "undefined";</p><p>}</p>',
      options: ["true", "12", "Error", "undefined"],
      answer: "undefined",
    },
    {
      question: "What is the output of below code?",
      code: "<p>console.log(12%5)</p>",
      options: ["7", "2", "60", "17"],
      answer: "2",
    },
    {
      question: "What is the output of below code?",
      code: "<p>a = (new Array(10)).toString()</p><p>console.log(a);</p>",
      options: [
        'string "10"',
        "array of 10 empty strings",
        'string ",,,,,,,,,,"',
        "Error",
      ],
      answer: '",,,,,,,,,,"',
    },
  ],
  medium: [
    {
      question: "What is the output of below code?",
      code: "<p>console.log(1);</p><p>setTimeout(function () { </p>console.log(2); <p>},0);</p><p>Promise.resolve()<p>.then(function() {</p><p>console.log(3); })</p><p>.then(function() { </p><p>console.log(4);</p><p>});</p>",
      options: ["1,2,3,4", "1,3,2,4", "2,3,4,1", "1,3,4,2"],
      answer: "1,3,4,2",
    },
    {
      question: "What is the output of below code?",
      code: "new String('This is a string') instanceof String;",
      options: ["true", "false", "undefined", "TypeError"],
      answer: "true",
    },
    {
      question: "What is the output of below code?",
      code: '"1" -- "1"',
      options: [2, 0, "error", '"11"'],
      answer: "2",
    },
    {
      question: "What is the output of below code?",
      code: "new Array(5).toString();",
      options: ["[]", '"[]"', "[5,5,5,5,5]", '",,,,,"'],
      answer: '",,,,,"',
    },
    {
      question: "What is the output of below code?",
      code: "<p>function aaa(){</p><p>return</p><p>{ <p>test: 1</p><p>};</p><p>}</p><p>alert(typeof aaa());</p>",
      options: ["function", "object", "undefined", "number"],
      answer: "undefined",
    },
    {
      question: "What is the output of below code?",
      code: "<p>function foo() {</p><p>let x = y = 1;</p><p>x++;</p><p>y++;</p><p>return x;</p><p>}</p><p>console.log(foo(), typeof x, typeof y);</p>",
      options: [
        "1, undefined and undefined",
        "ReferenceError: x is not defined",
        "1, undefined and number",
        "1, number and number",
      ],
      answer: "1, undefined and number",
    },
    {
      question: "What is the output of below code?",
      code: "(true + false) > 2 + true",
      options: ["NaN", "false", "true", "TypeError"],
      answer: "false",
    },
    {
      question: "What is the output of below code?",
      code: "String('Hello') === 'Hello';",
      options: ["true", "false", "TypeErorr"],
      answer: "true",
    },
    {
      question: "What is the output of below code?",
      code: "<p>var x = 3;</p><p> var foo = {</p><p>x: 2,</p><p>baz: {</p><p>x: 1,</p><p>bar: function() {</p><p>return this.x;</p><p>}</p><p>}</p><p>}</p><p>var go = foo.baz.bar;</p><p>alert(go());</p><p>alert(foo.baz.bar());</p>",
      options: ["1,3", "3,1", "2,1", "1,2"],
      answer: "3,1",
    },
    {
      question: "What is the output of below code?",
      code: "<p>function bar() {</p><p>return foo;</p><p>foo = 10;</p><p>function foo() {}</p><p>var foo = '11'</p><p>}</p><p>alert(typeof bar());</p>",
      options: ["undefined", "function", "array", "object"],
      answer: "function",
    },
  ],
  senior: [
    {
      question: "What is the output of below code?",
      code: "<p>console.log(1 < 2 < 3);</p><p>console.log(3 > 2 > 1);</p>",
      options: [
        "true, true",
        "true, false",
        "SyntaxError, SyntaxError",
        "false, false",
      ],
      answer: "true, false",
    },
    {
      question: "What is the output of below code?",
      code: "<p>const obj = {'key': 'value'}</p><p>const array = [...obj];</p><p>console.log(array)</p>",
      options: ["['key': 'value']", "[]", "TypeError", "['key']"],
      answer: "TypeError",
    },
    {
      question: "What is the output of below code?",
      code: "<p>(function () {})()</p>",
      options: ["true", "false", "undefined", "Error in the code"],
      answer: "undefined",
    },
    {
      question: "What is the output of below code?",
      code: "~~(-5.5)",
      options: ["5", "-6", "-5", "Error in the code"],
      answer: "-5",
    },
    {
      question: "What is the output of below code?",
      code: "<p>a = 5;</p><p>b= 4</p><p>alert(a + +(+(+(+b))));</p>",
      options: ["9", "14", "19", "18"],
      answer: "9",
    },
    {
      question: "What is the output of below code?",
      code: "?,,,,? == Array(4)",
      options: ["false", "true", "undefined"],
      answer: "false",
    },
    {
      question: "What is the output of below code?",
      code: "parseInt(null, 24) === 23",
      options: ["false", "true", "undefined"],
      answer: "true",
    },
    {
      question: "What is the output of below code?",
      code: "<p>[1,2,3,4][1,2]</p>",
      options: ["4", "30", "10", "3"],
      answer: "3",
    },
    {
      question: "What is the output of below code?",
      code: "<p>alert(parseInt(1/0, 19));</p>",
      options: ["19", "18", "20", "NaN"],
      answer: "18",
    },
    {
      question: "What is the output of below code?",
      code: "<p>function() {</p><p>var a = 10;</p><p>if(a > 5) {</p><p>a = 7;</p><p>}</p><p>alert(a)</p><p>}</p>",
      options: ["5", "7", "10", "null"],
      answer: "7",
    },
  ],
};

const difficultySelection = document.getElementById("difficulty-selection");
const testElement = document.getElementById("test");
const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const codeElement = document.getElementById("code");
const timerElement = document.getElementById("time-left");

let currentQuestion = 0;
let score = 0;
let userAnswers = [];
let selectedDifficulty = "";
let selectedQuizData = [];
let timer;
let timeLeft = 60;

document.getElementById("start-test").addEventListener("click", startQuiz);

function startQuiz() {
  selectedDifficulty = document.getElementById("difficulty").value;
  selectedQuizData = quizData[selectedDifficulty];
  difficultySelection.style.display = "none";
  testElement.style.display = "block";
  showQuestion();
}

function showQuestion() {
  resetTimer();
  const question = selectedQuizData[currentQuestion];
  questionElement.innerText = question.question;
  codeElement.innerHTML = question.code;
  optionsElement.innerHTML = "";
  question.options.forEach((option) => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectAnswer);
  });
  startTimer();
}

function selectAnswer(e) {
  const selectedButton = e.target;
  const answer = selectedQuizData[currentQuestion].answer;
  const userAnswer = selectedButton.innerText;

  userAnswers.push(userAnswer);

  if (userAnswer === answer) {
    score++;
  }

  currentQuestion++;

  if (currentQuestion < selectedQuizData.length) {
    showQuestion();
  } else {
    showResult();
  }
}

function showResult() {
  clearInterval(timer);
  testElement.innerHTML = `
    <h1>Test Completed!</h1>
    <p>Your score: ${score}/${selectedQuizData.length}</p>
    <ul id="user-answers"></ul>
  `;
  const userAnswersElement = document.getElementById("user-answers");
  selectedQuizData.forEach((question, index) => {
    const isCorrect = userAnswers[index] === question.answer;
    const listItem = document.createElement("li");
    listItem.innerHTML = `
      <p><strong>Question:</strong> ${question.question}</p>
      <p>${question.code}</p>
      <p><strong>Your Answer:</strong> <span class="answer ${
        isCorrect ? "correct" : "incorrect"
      }">${userAnswers[index]}</span></p>
      <p><strong>Correct Answer:</strong> ${question.answer}</p>
      <p>________________________________________________________</p>
    `;
    userAnswersElement.appendChild(listItem);
  });
}

function startTimer() {
  timeLeft = 60;
  timerElement.innerText = timeLeft;
  timer = setInterval(() => {
    timeLeft--;
    timerElement.innerText = timeLeft;
    if (timeLeft <= 0) {
      clearInterval(timer);
      selectAnswer({ target: { innerText: "No Answer" } });
    }
  }, 1000);
}

function resetTimer() {
  clearInterval(timer);
  timerElement.innerText = 60;
}
