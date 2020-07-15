import React, { Component } from "react";

import NewsHeader from './NewsHeader';
import NewsItem from './NewsItem';

import arrNews from '../resources/news';

export default class NewsFeed extends Component {

  constructor(props) {
    super(props);
    this.state = {
      searchWords: [""],
      filter: undefined,
      order: 'date',
    };
  }

  searchText = value => {
    let searchWords = value.trim().split(" ");
    this.setState({
      searchWords,
    });
  }

  onFilterChange = value => {
    this.setState({
      filter: value,
    });
  }

  onOrderChange = value => {
    this.setState({
      order: value,
    });
  }

  render() {

    let arrNewsProcessed = arrNews.filter( val => !this.state.filter || val.tags.find( val => val === this.state.filter )) // фильтруем по выбранной категории
    
    arrNewsProcessed = arrNewsProcessed.filter( val => { // фильтруем по словам строки
      if ( !this.state.searchWords[0] ) return true;
      let stringForSearch = ( val.title + ' ' + val.caption ).toLowerCase();
      return this.state.searchWords.find( word => 
        stringForSearch.includes( word.toLowerCase() )
      )
    });
    
    arrNewsProcessed = arrNewsProcessed.sort( (a, b) => {
      if ( this.state.order === 'date' ) return +a.date - +b.date; // сортируем по юникс-времени
      // сортируем по латинскому алфавиту
      if (a.title > b.title) {
        return 1;
      }
      if (a.title < b.title) {
        return -1;
      }
      return 0;
    });

    return (
      <main>
        <NewsHeader
          { ...this.state }
          searchText = { this.searchText }
          onFilterChange = { this.onFilterChange }
          onOrderChange = { this.onOrderChange }
        />
        { arrNewsProcessed.map( val => 
          <NewsItem
            key = { val.id }
            { ...val }
            searchWords = {this.state.searchWords}
          />
        )}
      </main>
    );
  }
}