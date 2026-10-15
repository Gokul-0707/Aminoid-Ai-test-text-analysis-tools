A text analysis application built using Python and FastAPI.
- Word count
- Character count
- Sentence count
- Average word length
- Top 5 frequently used words
- Input validation for empty text

- Python 3.10+
- FastAPI
- Uvicorn
- Pytest

Run the application
bash
python -m uvicorn main:app --reload

Open `http://127.0.0.1:8000/docs` to test the API.
 Run tests
bash
python -m pytest -v
