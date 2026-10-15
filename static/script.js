
const button = document.getElementById("analyzeBtn");

button.addEventListener("click", analyzeText);

async function analyzeText() {
  const text = document.getElementById("textInput").value;
  const message = document.getElementById("message");
  const results = document.getElementById("results");

  message.textContent = "";
  results.replaceChildren();

  if (!text.trim()) {
    message.textContent = "Please enter some text.";
    return;
  }

  button.disabled = true;
  button.textContent = "Analyzing...";

  try {
    const response = await fetch("/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ text: text })
    });

    const data = await response.json();

    if (!response.ok) {
      throw new Error(data.detail || "Analysis failed.");
    }

    const metrics = [
      ["Word Count", data.word_count],
      ["Character Count", data.character_count],
      ["Sentence Count", data.sentence_count],
      ["Average Word Length", data.average_word_length]
    ];

    metrics.forEach(([label, value]) => {
      const card = document.createElement("div");
      card.className = "card";

      const heading = document.createElement("h2");
      heading.textContent = label;

      const number = document.createElement("div");
      number.className = "number";
      number.textContent = value;

      card.append(heading, number);
      results.appendChild(card);
    });

    const topCard = document.createElement("div");
    topCard.className = "card wide";

    const heading = document.createElement("h2");
    heading.textContent = "Top 5 Most Frequent Words";

    const list = document.createElement("ul");

    (data.top_words || []).forEach(item => {
      const li = document.createElement("li");
      li.textContent = item.word + " — " + item.count;
      list.appendChild(li);
    });

    topCard.append(heading, list);
    results.appendChild(topCard);

  } catch (error) {
    message.textContent = "Error: " + error.message;
  } finally {
    button.disabled = false;
    button.textContent = "Analyze Text";
  }
}
