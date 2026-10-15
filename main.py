from collections import Counter
import re
from  fastapi import FastAPI ,HTTPException  
from pydantic import BaseModel, Field

app = FastAPI(title="TEXT ANALYSIS TOOLS")
class TextInput(BaseModel):
    text: str= Field(min_length =0)
@app.get("/")
def home():
    return {"message": "Welcome to the Text Analysis Tools API!"}
@app.post("/analyze")
def analyze_text(data: TextInput):
    text =data.text.strip()
    if not text:
        raise HTTPException(status_code=400, detail="Input text cannot be empty.")
    words =re.findall(r'\b\w+\b', text)
    sentences=[
        s for s in re.split(r'[.!?]+', text) if s.strip()
    ]
    counts = Counter(word.lower() for word in words)
    return {
        "word_count": len(words),
        "character_count": len(text),
        "sentence_count": len(sentences),
        "average_word_length":round(sum(len(word) for word in words) / len(words), 2) if words else 0,
        "top_words": [
            {"word": word, "count": count} for word, count in counts.most_common(5)
      ]
    }