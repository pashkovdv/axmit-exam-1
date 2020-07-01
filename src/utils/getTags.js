import arrNews from '../resources/news';

const arrTags = [ ...new Set( arrNews.reduce(
  (acc, curr) => {
    acc.push( ...curr.tags );
    return acc;
  },
  []
))];

export default arrTags;