# Emotion Reflection Tool

A simple React + FastAPI app to analyze user input and return a mock emotion.

---

## 📽️ Demo

[![Watch the demo](https://cdn.loom.com/sessions/thumbnails/34e54ac82e1d425eb989a0f15dd2e6b0-with-play.png)](https://www.loom.com/share/0e4fbdbcbb1c4e69b97cbf37ccbc4406?sid=1f821cdd-5260-4b55-8f14-a6a4d3991bce)



## 🚀 Setup

### 1. Clone the repo

```bash
git clone https://github.com/sorrav/emotion-reflection-tool.git
cd Emotion-Reflection-Tool
```

---

### 2. Start Backend (FastAPI)

```bash
cd backend
python -m venv venv
venv\Scripts\activate       # or source venv/bin/activate
pip install -r requirements.txt
uvicorn main:app --reload
```

Runs at: `http://localhost:8000`

---

### 3. Start Frontend (React + TypeScript)

```bash
cd ../frontend
npm install
npm start
```

Runs at: `http://localhost:3000`

---

## 🧪 Example Response

```json
{
  "emotion": "Anxious",
  "confidence": 0.85
}
```
