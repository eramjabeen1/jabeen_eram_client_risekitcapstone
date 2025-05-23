const [quizStarted, setQuizStarted] = useState(false)
const [answers, setAnswers] = useState([])
const [result, setResult] = useState('')

<section>
  <h3>✨ Take the Matcha Mindness Quiz</h3>
  {!quizStarted && !result && (
    <button onClick={() => setQuizStarted(true)}>Start Quiz</button>
  )}

  {quizStarted && !result && (
    <div className="quiz-section">
      <p>1. What's your preferred way to learn?</p>
      <button onClick={() => setAnswers([...answers, 'matcha'])}>Calm & steady</button>
      <button onClick={() => setAnswers([...answers, 'espresso'])}>Fast & focused</button>
      <button onClick={() => setAnswers([...answers, 'smoothie'])}>Creative & flexible</button>
    </div>
  )}

  {answers.length === 1 && !result && (
    <div className="quiz-section">
      <p>2. How do you deal with pressure?</p>
      <button onClick={() => setAnswers([...answers, 'matcha'])}>I pace myself mindfully</button>
      <button onClick={() => setAnswers([...answers, 'espresso'])}>I thrive on deadlines</button>
      <button onClick={() => setAnswers([...answers, 'smoothie'])}>I need variety to stay engaged</button>
    </div>
  )}

  {answers.length === 2 && !result && (
    <div className="quiz-section">
      <p>3. What's your ideal day?</p>
      <button onClick={() => setAnswers([...answers, 'matcha'])}>Flowing with intention</button>
      <button onClick={() => setAnswers([...answers, 'espresso'])}>Efficient & productive</button>
      <button onClick={() => setAnswers([...answers, 'smoothie'])}>Exploring new ideas</button>
    </div>
  )}

  {answers.length === 3 && !result && (() => {
    const counts = { matcha: 0, espresso: 0, smoothie: 0 }
    answers.forEach(a => counts[a]++)
    const highest = Object.entries(counts).sort((a, b) => b[1] - a[1])[0][0]
    setResult(highest)
    return null
  })()}

  {result && (
    <div className="quiz-result">
      <h4>Your Result: {result.toUpperCase()}</h4>
      {result === 'matcha' && <p>You're a calm, growth-focused learner. Stick with steady wins.</p>}
      {result === 'espresso' && <p>You’re a fast-paced learner. Structure and intensity fuel you.</p>}
      {result === 'smoothie' && <p>You thrive in creative, flexible learning environments.</p>}
    </div>
  )}
</section>
