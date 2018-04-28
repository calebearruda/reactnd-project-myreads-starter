import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Shelfs from './Shelfs'

class BooksList extends Component {
  render() {
    return(
      <div>
        <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <Shelfs books={this.props.books} onChangeShelf={this.props.onChangeShelf}/>
            </div>
            <div className="open-search">
              <Link to="/search">Add a book</Link>
            </div>
          </div>
      </div>
    )
  }
}

export default BooksList