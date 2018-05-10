import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksList from './BooksList'
import SearchBooks from './SearchBooks'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  updateBook = (book, shelf) => {
    book.shelf = shelf
    BooksAPI.update(book, shelf).then(() => {
      this.setState(state => ({
        books: state.books.filter(b => b.id !== book.id).concat(book)
      }))
    })
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BooksList books={this.state.books} onChangeShelf={this.updateBook} />
        )}/>
        <Route path="/search" render={() => (
          <SearchBooks books={this.state.books} onChangeShelf={this.updateBook} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
