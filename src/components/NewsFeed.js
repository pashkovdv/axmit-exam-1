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

    const _arrNewsProcessed = (
      arrNews
      .filter( v => !this.state.filter || v.tags.find( v => v === this.state.filter )) // фильтруем по выбранной категории
      .filter( v =>
        !this.state.searchWords[0] || this.state.searchWords.find( word => // если задана строка
          ( v.title + ' ' + v.caption ).toLowerCase().includes( word.toLowerCase() ) // фильтруем по словам строки
        )
      )
      .sort( (a, b) => {
        if ( this.state.order === 'date' ) return +a.date - +b.date; // сортируем по юникс-времени
        // сортируем по латинскому алфавиту
        if (a.title > b.title) {
          return 1;
        }
        if (a.title < b.title) {
          return -1;
        }
        return 0;
      })
    );

    return (
      <div>
        <NewsHeader
          { ...this.state }
          searchText = { this.searchText }
          onFilterChange = { this.onFilterChange }
          onOrderChange = { this.onOrderChange }
        />
        { _arrNewsProcessed.map( (v,i) => 
          <NewsItem
            key = {i}
            { ...v }
            searchWords = {this.state.searchWords}
          />
        )}
      </div>
    );
  }
}