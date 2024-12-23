const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote');


const fallbackQuotes = [
  { content: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
  { content: "The purpose of our lives is to be happy.", author: "Dalai Lama" },
  { content: "Get busy living or get busy dying.", author: "Stephen King" },
];

async function fetchQuote() {
  try {
    const response = await fetch('https://api.quotable.io/random');
    if (!response.ok) throw new Error('Failed to fetch quote');
    const data = await response.json();
    quoteElement.textContent = `"${data.content}"`;
    authorElement.textContent = `- ${data.author}`;
  } catch (error) {
    const randomFallback = fallbackQuotes[Math.floor(Math.random() * fallbackQuotes.length)];
    quoteElement.textContent = `"${randomFallback.content}"`;
    authorElement.textContent = `- ${randomFallback.author}`;
  }
}

newQuoteButton.addEventListener('click', fetchQuote);
fetchQuote();
