from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel

app = FastAPI()

# Enable CORS so frontend can talk to backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Change this to your frontend origin in production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Request body model
class Reflection(BaseModel):
    text: str

@app.post("/analyze")
def analyze_emotion(data: Reflection):
    if not data.text.strip():
        raise HTTPException(status_code=400, detail="Input text is empty")

    # Mock emotion analysis logic
    return {
        "emotion": "Anxious",       # Static fake response for now
        "confidence": 0.85
    }
