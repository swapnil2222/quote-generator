import React, { useEffect, useState } from 'react';
import { FaQuoteLeft, FaTumblrSquare } from 'react-icons/fa';
import { FiTwitter } from 'react-icons/fi';
function Quote(params) {
  const [quote, setQuote] = useState('');
  const [author, setAuthor] = useState('');
  useEffect(() => {
    addNewQuote();
  }, []);
  const addNewQuote = async () => {
    const data = await fetchQuote();
    setQuote(data.content);
    setAuthor(data.author);
  };
  const fetchQuote = async () => {
    const response = await fetch('https://api.quotable.io/random');
    const data = await response.json();
    return data;
  };
  return (
    <div id="quote-box">
      <div id="text">
        <FaQuoteLeft className="quote-icon" />
        <span>{quote}</span>
      </div>
      <div id="author">- {author}</div>
      <div className="footer flex">
        <div className="flex">
          <a
            className="button"
            target="_blank"
            rel="noreferrer"
            href={
              'https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text=' +
              quote
            }
          >
            <FiTwitter />
          </a>
        </div>
        <div className="flex flex-3 mr-1">
          <a
            className="button"
            target="_blank"
            rel="noreferrer"
            href={
              'https://www.tumblr.com/widgets/share/tool?posttype=quote&tags=quotes,freecodecamp&caption=Unknown&content=' +
              quote +
              '&canonicalUrl=https%3A%2F%2Fwww.tumblr.com%2Fbuttons&shareSource=tumblr_share_button'
            }
          >
            <FaTumblrSquare />
          </a>
        </div>
        <div className="flex">
          <button id="new-quote" className="button" onClick={addNewQuote}>
            New Quote
          </button>
        </div>
      </div>
    </div>
  );
}
export default Quote;
