Text Analysis Tool

A text analysis application built using Python, FastAPI, HTML, CSS, and JavaScript.

- Word count
- Character count
- Sentence count
- Average word length
- Top 5 frequently used words (case-insensitive)
- Input validation for empty text
- Responsive frontend interface

Technologies Used

- Python 3.10+
- FastAPI
- Pydantic
- Uvicorn
- HTML
- CSS
- JavaScript
- Pytest

Project Structure

text
text-analysis-tools/
├── main.py
├── test_main.py
├── README.md
└── static/
    ├── index.html
    ├── style.css
    └── script.js

 Installation

Install the required packages:

bash
python -m pip install fastapi uvicorn pytest httpx


Run the Application

Start the FastAPI server:

bash
python -m uvicorn main:app --reload

Open the frontend:

http://127.0.0.1:8000/ui

Open the API documentation:

http://127.0.0.1:8000/docs

## Run Tests

bash
python -m pytest -v

## API Endpoint

- `GET /` — Welcome message
- `GET /ui` — Frontend page
- `POST /analyze` — Analyze the submitted text
Validation

Empty text input is rejected with an appropriate error response.

