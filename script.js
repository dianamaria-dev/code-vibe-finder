// ---------- DATA ----------
const questions = [
    // PYTHON (Questions 1-4)
    {
        q: "How do you prefer to solve problems?",
        options: ["Step-by-step planning", "Trial and error", "Ask a friend for help", "Figure it out alone"],
        optionCategories: ["python", "javascript", "typescript", "rust"],
        traits: {
            python: "you're a thoughtful planner",
            javascript: "you learn by doing",
            typescript: "you value collaboration",
            rust: "you trust your instincts"
        }
    },
    {
        q: "What's your ideal workspace?",
        options: ["Clean and minimal", "Organized chaos", "Loud and busy", "Dead silent"],
        optionCategories: ["python", "javascript", "typescript", "rust"],
        traits: {
            python: "you thrive in calm environments",
            javascript: "you adapt to any workspace",
            typescript: "you prefer structure",
            rust: "you need absolute focus"
        }
    },
    {
        q: "Pick a weekend activity:",
        options: ["Reading a book", "Playing video games", "Going to a party", "Learning a new skill"],
        optionCategories: ["python", "javascript", "typescript", "rust"],
        traits: {
            python: "you enjoy quiet intellectual time",
            javascript: "you love immersive experiences",
            typescript: "you're social and collaborative",
            rust: "you're always self-improving"
        }
    },
    {
        q: "What makes code 'good' to you?",
        options: ["Readability", "Speed", "Cleverness", "Safety"],
        optionCategories: ["python", "javascript", "typescript", "rust"],
        traits: {
            python: "you value clarity above all",
            javascript: "you appreciate clever solutions",
            typescript: "you prioritize maintainability",
            rust: "you obsess over performance"
        }
    },
    // TYPESCRIPT (Questions 5-8)
    {
        q: "How do you feel about rules?",
        options: ["Love them", "Hate them", "Need them", "Break them"],
        optionCategories: ["typescript", "javascript", "rust", "python"],
        traits: {
            typescript: "you find comfort in structure",
            javascript: "you rebel against constraints",
            rust: "you respect well-designed rules",
            python: "you prefer guidelines over rules"
        }
    },
    {
        q: "What's your ideal team size?",
        options: ["Small team", "Large team", "Solo", "Pair programming"],
        optionCategories: ["typescript", "javascript", "rust", "python"],
        traits: {
            typescript: "you thrive in collaborative teams",
            javascript: "you enjoy dynamic group energy",
            rust: "you prefer deep solo focus",
            python: "you work well in any setting"
        }
    },
    {
        q: "Your debugging style:",
        options: ["Use a debugger", "Console.log everywhere", "Walk away and come back", "Ask a rubber duck"],
        optionCategories: ["typescript", "javascript", "rust", "python"],
        traits: {
            typescript: "you use proper debugging tools",
            javascript: "you're pragmatic and fast",
            rust: "you're methodical",
            python: "you trust your logic"
        }
    },
    {
        q: "How do you handle surprises?",
        options: ["Embrace them", "Panic", "Plan for them", "Ignore them"],
        optionCategories: ["typescript", "javascript", "rust", "python"],
        traits: {
            typescript: "you adapt gracefully",
            javascript: "you thrive on surprise",
            rust: "you prepare for everything",
            python: "you stay calm and pivot"
        }
    },
    // JAVASCRIPT (Questions 9-12)
    {
        q: "What's your favorite food?",
        options: ["Pizza", "Sushi", "Burgers", "Tacos"],
        optionCategories: ["javascript", "python", "typescript", "rust"],
        traits: {
            javascript: "you love comfort food",
            python: "you appreciate simplicity",
            typescript: "you enjoy refinement",
            rust: "you prefer precision"
        }
    },
    {
        q: "How do you learn best?",
        options: ["By doing", "By reading", "By watching", "By teaching"],
        optionCategories: ["javascript", "python", "typescript", "rust"],
        traits: {
            javascript: "you're a hands-on learner",
            python: "you learn methodically",
            typescript: "you learn through collaboration",
            rust: "you learn by deep study"
        }
    },
    {
        q: "Your social battery:",
        options: ["Always full", "Drains fast", "Recharges alone", "Recharges with friends"],
        optionCategories: ["javascript", "python", "typescript", "rust"],
        traits: {
            javascript: "you're always energized",
            python: "you need quiet to recharge",
            typescript: "you balance social and solo time",
            rust: "you prefer deep one-on-ones"
        }
    },
    {
        q: "How do you handle stress?",
        options: ["Stay calm", "Get anxious", "Exercise", "Play games"],
        optionCategories: ["javascript", "python", "typescript", "rust"],
        traits: {
            javascript: "you keep cool under pressure",
            python: "you handle stress with grace",
            typescript: "you rely on systems to stay calm",
            rust: "you channel stress into focus"
        }
    },
    // RUST (Questions 13-16)
    {
        q: "Your ideal vacation:",
        options: ["Beach", "Mountains", "City", "Camping"],
        optionCategories: ["rust", "python", "typescript", "javascript"],
        traits: {
            rust: "you enjoy challenging environments",
            python: "you prefer relaxing getaways",
            typescript: "you like curated experiences",
            javascript: "you love adventure"
        }
    },
    {
        q: "What's your writing style?",
        options: ["Short and direct", "Long and detailed", "Poetic", "Technical"],
        optionCategories: ["rust", "python", "typescript", "javascript"],
        traits: {
            rust: "you're precise and concise",
            python: "you're clear and approachable",
            typescript: "you're thorough and structured",
            javascript: "you're expressive and creative"
        }
    },
    {
        q: "What's your favorite color?",
        options: ["Blue", "Green", "Red", "Black"],
        optionCategories: ["rust", "python", "typescript", "javascript"],
        traits: {
            rust: "you prefer calm cool tones",
            python: "you like natural colors",
            typescript: "you enjoy vibrant shades",
            javascript: "you're drawn to bold colors"
        }
    },
    {
        q: "Pick a motto that speaks to you:",
        options: ["Keep it simple", "Move fast and break things", "Type safety first", "Zero-cost abstractions"],
        optionCategories: ["rust", "python", "javascript", "typescript"],
        traits: {
            rust: "you believe in performance",
            python: "you value simplicity",
            javascript: "you embrace speed",
            typescript: "you prioritize correctness"
        }
    }
];

// ---------- CATEGORIES (with pixel icons) ----------
const categories = {
    python: {
        name: "Python",
        icon: "assets/python-pixel.png",
        primary: "you're a thoughtful, calm developer who values clarity and readability",
        ending: "You write code that looks like plain English, and your teammates secretly thank you for it. You'd rather solve a problem elegantly than show off. Your desk is probably clean, your coffee is probably black, and you definitely have a 'readme.md' file for your grocery list."
    },
    typescript: {
        name: "TypeScript",
        icon: "assets/typescript-pixel.png",
        primary: "you're a structured, safety-first developer who believes good code is safe code",
        ending: "You sleep better at night knowing your interfaces are solid and your types are strict. You're the person who adds `: void` to functions that return nothing, just because it feels right. Your IDE is a mess of extensions, but you know exactly where everything is."
    },
    javascript: {
        name: "JavaScript",
        icon: "assets/javascript-pixel.png",
        primary: "you're a flexible, energetic developer who thrives in dynamic environments",
        ending: "You've used `any` more times than you'll admit, and you've definitely debugged a production issue at 2 AM with console.log. You make things work when nobody else can – even if you don't fully understand why yet. You probably have 40 tabs open right now and you're fine with it."
    },
    rust: {
        name: "Rust",
        icon: "assets/rust-pixel.png",
        primary: "you're a precise, performance-obsessed developer who cares about every byte",
        ending: "You've read the Rust book cover to cover (twice). You write code that's safe, fast, and memory-efficient – and you judge people who don't. You probably own a mechanical keyboard and have strong feelings about tabs vs. spaces."
    }
};

// ---------- STATE ----------
let currentQuestion = 0;
let answers = [];
let userTraits = [];
let timer = 0;
let timerInterval = null;
let isQuizFinished = false;

// DOM refs
const introScreen = document.getElementById('intro-screen');
const quizScreen = document.getElementById('quiz-screen');
const resultsScreen = document.getElementById('results-screen');
const questionText = document.getElementById('question-text');
const answersContainer = document.getElementById('answers-container');
const nextBtn = document.getElementById('next-btn');
const progressFill = document.getElementById('progress-fill');
const questionCounter = document.getElementById('question-counter');
const timerDisplay = document.getElementById('timer-display');
const restartBtn = document.getElementById('restart-btn');
const startBtn = document.getElementById('start-btn');

// ---------- FUNCTIONS ----------
function showScreen(screenId) {
    document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
    document.getElementById(screenId).classList.add('active');
}

function renderQuestion() {
    const q = questions[currentQuestion];
    questionText.textContent = q.q;
    questionCounter.textContent = `Question ${currentQuestion + 1} / ${questions.length}`;
    progressFill.style.width = `${((currentQuestion + 1) / questions.length) * 100}%`;

    answersContainer.innerHTML = '';
    q.options.forEach((opt, index) => {
        const btn = document.createElement('button');
        btn.classList.add('answer-btn');
        btn.textContent = opt;
        btn.dataset.index = index;
        btn.addEventListener('click', () => selectAnswer(index));
        if (answers[currentQuestion] === index) btn.classList.add('selected');
        answersContainer.appendChild(btn);
    });

    nextBtn.disabled = answers[currentQuestion] === undefined;
}

function selectAnswer(index) {
    answers[currentQuestion] = index;
    const q = questions[currentQuestion];
    
    const selectedCategory = q.optionCategories[index];
    const trait = q.traits[selectedCategory];
    userTraits[currentQuestion] = trait;
    
    document.querySelectorAll('.answer-btn').forEach((btn, i) => {
        btn.classList.toggle('selected', i === index);
    });
    nextBtn.disabled = false;
}

function goToNext() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        renderQuestion();
    } else {
        finishQuiz();
    }
}

function finishQuiz() {
    isQuizFinished = true;
    clearInterval(timerInterval);
    showResults();
}

// ---------- RESULTS ----------
function showResults() {
    showScreen('results-screen');
    
    const scores = { python: 0, typescript: 0, javascript: 0, rust: 0 };
    answers.forEach((ansIdx, qIdx) => {
        if (ansIdx !== undefined) {
            const q = questions[qIdx];
            const category = q.optionCategories[ansIdx];
            scores[category]++;
        }
    });

    let maxScore = 0;
    let winner = 'python';
    for (const [cat, score] of Object.entries(scores)) {
        if (score > maxScore) { 
            maxScore = score; 
            winner = cat; 
        }
    }

    const tiedCategories = Object.keys(scores).filter(cat => scores[cat] === maxScore);
    if (tiedCategories.length > 1) {
        let lastIndex = -1;
        for (let i = answers.length - 1; i >= 0; i--) {
            if (answers[i] !== undefined) {
                const q = questions[i];
                const cat = q.optionCategories[answers[i]];
                if (tiedCategories.includes(cat)) {
                    winner = cat;
                    break;
                }
            }
        }
    }

    const result = categories[winner];
    
    const traitList = userTraits.filter(t => t !== undefined);
    const uniqueTraits = [...new Set(traitList)];
    let traitString = '';
    if (uniqueTraits.length >= 3) {
        traitString = uniqueTraits.slice(0, 3).join(', ');
    } else if (uniqueTraits.length === 2) {
        traitString = uniqueTraits.join(' and ');
    } else if (uniqueTraits.length === 1) {
        traitString = uniqueTraits[0];
    } else {
        traitString = "you have a unique personality";
    }

    const personalizedDesc = `We noticed that ${traitString}. You're clearly someone who ${result.primary}. ${result.ending}`;

    // Display result icon (pixel art)
    const resultEmoji = document.getElementById('result-emoji');
    if (resultEmoji) {
        resultEmoji.innerHTML = `<img src="${result.icon}" alt="${result.name} icon" class="result-icon-img">`;
    }
    
    const resultName = document.getElementById('result-name');
    if (resultName) {
        resultName.textContent = result.name;
    }
    
    const resultDesc = document.getElementById('result-description');
    if (resultDesc) {
        resultDesc.textContent = personalizedDesc;
    }

    const total = questions.length;
    const pythonFill = document.getElementById('python-fill');
    const tsFill = document.getElementById('ts-fill');
    const jsFill = document.getElementById('js-fill');
    const rustFill = document.getElementById('rust-fill');
    
    if (pythonFill) pythonFill.style.width = `${(scores.python / total) * 100}%`;
    if (tsFill) tsFill.style.width = `${(scores.typescript / total) * 100}%`;
    if (jsFill) jsFill.style.width = `${(scores.javascript / total) * 100}%`;
    if (rustFill) rustFill.style.width = `${(scores.rust / total) * 100}%`;

    // ---- POPULAR REPO RECOMMENDATION (API CALL) ----
    const langName = result.name;

    fetch(`https://api.github.com/search/repositories?q=language:${langName}&sort=stars&order=desc&per_page=1`)
        .then(res => {
            if (!res.ok) throw new Error('GitHub API limit');
            return res.json();
        })
        .then(data => {
            const repo = data.items[0];
            const recommendationElement = document.getElementById('repo-recommendation');
            if (recommendationElement) {
                if (repo) {
                    recommendationElement.innerHTML = `
                        <p>🔥 The hottest <strong>${langName}</strong> project right now is 
                        <a href="${repo.html_url}" target="_blank" style="color: var(--accent); font-weight: 600;">
                            ${repo.full_name}
                        </a> 
                        with ${repo.stargazers_count.toLocaleString()} ⭐ stars!</p>
                        <p style="font-size: 0.85rem; color: var(--text-gray); margin-top: 4px;">${repo.description || 'No description provided.'}</p>
                    `;
                } else {
                    recommendationElement.innerHTML = `
                        <p>💡 No trending ${langName} repos found right now. But you could be the first to build one!</p>
                    `;
                }
            }
        })
        .catch(() => {
            const recommendationElement = document.getElementById('repo-recommendation');
            if (recommendationElement) {
                recommendationElement.innerHTML = `
                    <p>📂 GitHub's API is rate-limited right now, but you can still explore 
                    <a href="https://github.com/search?q=${langName}" target="_blank" style="color: var(--accent);">${langName} projects</a>.</p>
                `;
            }
        });

    // Confetti
    if (typeof confetti === 'function') {
        confetti({ particleCount: 100, spread: 70, origin: { y: 0.6 } });
    }
}

// ---------- TIMER ----------
function startTimer() {
    timer = 0;
    timerInterval = setInterval(() => {
        timer++;
        const mins = Math.floor(timer / 60);
        const secs = timer % 60;
        timerDisplay.textContent = `⏱️ ${mins}:${secs.toString().padStart(2, '0')}`;
    }, 1000);
}

// ---------- RESTART ----------
function restartQuiz() {
    clearInterval(timerInterval);
    currentQuestion = 0;
    answers = [];
    userTraits = [];
    timer = 0;
    isQuizFinished = false;
    timerDisplay.textContent = '⏱️ 0:00';
    showScreen('intro-screen');
}

// ---------- EVENT LISTENERS ----------
startBtn.addEventListener('click', () => {
    showScreen('quiz-screen');
    renderQuestion();
    startTimer();
});

nextBtn.addEventListener('click', goToNext);
restartBtn.addEventListener('click', restartQuiz);

// ---------- KEYBOARD SUPPORT ----------
// Press "Enter" to go to the next question (if next button is enabled)
document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (!nextBtn.disabled) {
            nextBtn.click();
        }
    }
});

// ---------- ADD CONFETTI LIBRARY ----------
const script = document.createElement('script');
script.src = 'https://cdn.jsdelivr.net/npm/canvas-confetti@1';
document.head.appendChild(script);

// Start on Intro
showScreen('intro-screen');