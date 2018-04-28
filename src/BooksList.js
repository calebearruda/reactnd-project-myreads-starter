import React, { Component } from 'react'
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
              <a onClick={() => this.setState({ showSearchPage: true })}>Add a book</a>
            </div>
          </div>
      </div>
    )
  }
}

export default BooksList