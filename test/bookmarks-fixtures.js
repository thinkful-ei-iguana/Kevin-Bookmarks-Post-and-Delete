function makeBookmarksArray() {
  [
    {
      id: 1,
      title: 'Google',
      url: 'https://www.google.com',
      rating: 5,
      description: 'A search engine'
    },
    {
      id: 2,
      title: 'Yahoo Answers',
      url: 'https://www.answers.yahoo.com',
      rating: 3,
      description: 'A source of entertainment but not advice',
    },
    {
      id: 3,
      title: 'Twitter',
      url: 'https://www.twitter.com',
      rating: 4
    }
  ];
}

function makeMaliciousBookmark() {
  const maliciousBookmark = {
    id: 911,
    title: 'Naughty naughty very naughty <script>alert("xss");</script>',
    url: 'https://www.hackers.com',
    description: 'Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.'
  };
  const expectedBookmark = {
    ...maliciousBookmark,
    title: 'Naughty naughty very naughty &lt;script&gt;alert(\"xss\");&lt;/script&gt;',
    description: 'Bad image <img src="https://url.to.file.which/does-not.exist">. But not <strong>all</strong> bad.'
  };
  return {
    maliciousBookmark,
    expectedBookmark,
  };
}

module.exports = { makeBookmarksArray, makeMaliciousBookmark };