import React, { Component } from 'react'
import * as BooksAPI from './BooksAPI'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import { Debounce } from 'react-throttle'
import Book from './Book'

class SearchBooks extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  state = {
    query: '',
    booksSearch: []
  }

  onChangeQuery = (query) => {
    this.setState({ query: query })
    if (query) {
      BooksAPI.search(query).then((books) => {
        this.setState({ booksSearch: books })
      })
    }
  }

  clearQuery = () => {
    this.setState({ query: '' })
  }

  render() {
    const { books, onChangeShelf } = this.props
    const { booksSearch, query } = this.state

    let showingBooks
    if (query) {
      if (books && (Array.isArray(booksSearch) && booksSearch.length > 0)) {
        showingBooks = booksSearch.map(b => {
          let book = books.find(bo => bo.id === b.id)
          if (book) {
            b.shelf = book.shelf
          }
          return b
        })
      } else {
        showingBooks = booksSearch
      }
    }

    return(
      <div className="search-books">
        <div className="search-books-bar">
          <Link to="/" className="close-search">Close</Link>
          <div className="search-books-input-wrapper">
            <input type="text" 
                  placeholder="Search by title or author"
                  value={query}
                  onChange={(event) => this.onChangeQuery(event.target.value)}/>
          </div>
        </div>
        <div className="search-books-results">
          <ol className="books-grid">
            {showingBooks && (Array.isArray(booksSearch) && booksSearch.length > 0) && (showingBooks.map(book => (
              <Book key={book.id} book={book} onChangeShelf={onChangeShelf} printNone={false} />
            )))}
          </ol>
        </div>
      </div>
    )
  }
}

export default SearchBooks