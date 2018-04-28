import React from 'react'
import { Route } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BooksList from './BooksList'
import './App.css'

class BooksApp extends React.Component {
  state = {
    books: []
  }

  componentDidMount() {
    this.updateListBooks()
  }

  updateListBooks = () => {
    BooksAPI.getAll().then((books) => {
      this.setState({ books: books })
    })
  }

  updateBook = (book, shelf) => {
    if (shelf === 'none') return
    this.setState((state => ({
        books: state.books.map((b) => {
          if (b.id === book.id) {
            b.shelf = shelf
          }
          return b
        })
      })
    ))
    BooksAPI.update(book, shelf)
  }

  render() {
    return (
      <div className="app">
        <Route exact path="/" render={() => (
          <BooksList books={this.state.books} onChangeShelf={this.updateBook} />
        )}/>
      </div>
    )
  }
}

export default BooksApp
