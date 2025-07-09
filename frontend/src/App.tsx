import React, { useState } from 'react';
import axios from 'axios';
import './App.css';

function App() {
  const loadingMessages = [
  '🧠 Reading your feelings...',
  '💬 Understanding your thoughts...',
  '🔍 Digging into your emotions...',
  '🕵️‍♂️ Detecting emotional patterns...',
  '💡 Interpreting what you wrote...',
];

const [loadingMessage, setLoadingMessage] = useState('');

const emotionEmojis: { [key: string]: string } = {
  Anxious: "😰",
  Happy: "😊",
  Sad: "😢",
  Angry: "😡",
  Excited: "🤩",
  Neutral: "😐",
};


  const [text, setText] = useState('');
  const [result, setResult] = useState<{ emotion: string; confidence: number } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
const handleSubmit = async () => {
  if (!text.trim()) {
    setError('Please enter some text.');
    return;
  }

  setLoading(true);
  setResult(null);
  setError('');

  // Pick random loading message
  const randomMsg = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
  setLoadingMessage(randomMsg);

  try {
    const res = await axios.post('http://localhost:8000/analyze', { text });

    // Artificial 1-second delay before showing result
    setTimeout(() => {
      setResult(res.data);
      setLoading(false);
    }, 1000); // 1000 ms = 1 sec
  } catch (err) {
    setError('Could not connect to backend. Make sure it’s running.');
    setLoading(false);
  }
};

const emoji = result ? emotionEmojis[result.emotion] || "🧠" : "";


  return (
     <div className="App">
    <h2>Emotion Reflection Tool</h2>

    <textarea
      rows={5}
      value={text}
      onChange={(e) => {
        setText(e.target.value);
        setResult(null); // Clear previous result while typing
        setError('');
      }}
      placeholder="Type your thoughts here..."
    />

    <button onClick={handleSubmit} disabled={loading}>
      {loading ? 'Analyzing...' : 'Submit'}
    </button>

    {error && <p className="error-message">{error}</p>}

    {loading && (
      <div className="loader">
        <p>{loadingMessage}</p>
      </div>
    )}

    {result && !loading && (
      <div className="result-card">
        <p><strong>{emoji} Emotion:</strong> {result.emotion}</p>
        <p><strong>Confidence:</strong> {(result.confidence * 100).toFixed(0)}%</p>
      </div>
    )}
  </div>
);
}

export default App;
