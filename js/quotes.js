const quotes = [
  {
    quote: '자가진단 잊지 말아요',
    author: '보건실'
  },
  {
    quote: '출결 현황 알려주세요',
    author: '보건실'
  },
  {
    quote: '오늘의 미세먼지 농도는 ~입니다',
    author: '보건실'
  },
  {
    quote: '우리 같이 코딩할래요?',
    author: '무한상상실'
  },
  {
    quote: '함께해요 블렌디드',
    author: '스마트클래스'
  },
  {
    quote: '전류가 흐르는 곳이라면',
    author: '교육정보부'
  }
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;