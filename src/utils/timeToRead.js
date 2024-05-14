/*
  You'll notice in the original OverreactedLinks to an external site. 
  site, there's a 'minutes to read' indicator next to each article.

  If the article takes less than 30 minutes to read:

  For every 5 minutes (rounded up to the nearest 5), display a coffee cup 
  emoji. For example, if the article takes 3 minutes to read, 
  you should display "☕️ 3 min read". If the article takes 7 minute,
  you should display "☕️☕️ 7 min read".
  
  If the article takes 30 minutes or longer to read:
  For every 10 minutes (rounded up to the nearest 10), 
  display a bento box emoji. For example, if the article takes 35 minutes 
  to read, you should display "🍱🍱🍱🍱 35 min read". If the article takes 
  61 minutes to read, you should display "🍱🍱🍱🍱🍱🍱🍱 61 min read".
*/

const coffeeCup = "☕️";
const bentoBox = "🍱";

export const timeToRead = (minutes) => {
  let coffeeCups = Math.ceil(minutes / 5);
  let bentoBoxes = Math.ceil(minutes / 10);
  let coffeeCupString = coffeeCup.repeat(coffeeCups);
  let bentoBoxString = bentoBox.repeat(bentoBoxes);

  if (minutes === 0) {
    return "☕️ 0 min read";
  } else if (minutes < 30) {
    return `${coffeeCupString} ${minutes} min read`;
  } else {
    return `${bentoBoxString} ${minutes} min read`;
  }
}