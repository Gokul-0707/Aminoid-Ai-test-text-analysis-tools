from fastapi import FastAPI
from fastapi.testclient import TestClient 
from main import app
client = TestClient(app)
def test_analyze_text():
    response = client.post("/analyze", json={"text": "Hello world! This is a test. Testing, one, two, three."})
    assert response.status_code == 200
    assert response.json()["word_count"] == 10
    assert response.json()["character_count"] == 49
    assert response.json()["sentence_count"] == 3
def test_analyze_text():
    response =client.post(
        "/analyze",
        json={"text":""}
    )
    
    assert response .json()["detail"]=="Input text cannot be empty."

def test_analyze_valid_text():
    response = client.post(
        "/analyze",json={"text":"hello world .This is a test "}

    )
    assert response.status_code==200
    assert response.json()["word_count"]==6
    assert response.json()["sentence_count"]==2