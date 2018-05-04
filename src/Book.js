import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Book extends Component {

  static propTypes = {
    book: PropTypes.object.isRequired,
    printNone: PropTypes.bool.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  onChangeShelf(event, book) {
    this.props.onChangeShelf(book, event.target.value)
  }
  
  render() {
    const { book, printNone } = this.props

    return(
      <li>
        <div className="book">
          <div className="book-top">
            {book.imageLinks && book.imageLinks.smallThumbnail && (
              <div className="book-cover" style={{ width: 128, height: 193, backgroundImage: `url(${book.imageLinks.smallThumbnail})` }}></div>
            )}
            {!book.imageLinks && (
              <div className="book-cover" style={{ width: 128, height: 193 }}></div>
            )}
            <div className="book-shelf-changer">
              <select value={book.shelf} onChange={(e) => this.onChangeShelf(e, book)}>
                {!printNone && (
                  <option value="none" default>Move to...</option>
                )}
                {printNone && (
                  <option value="none" disabled>Move to...</option>
                )}
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
                {printNone && (
                  <option value="none">None</option>
                )}
              </select>
            </div>
          </div>
          <div className="book-title">{book.title}</div>
          <div className="book-authors">{book.authors}</div>
        </div>
      </li>                      
    )
  }
}

export default Book