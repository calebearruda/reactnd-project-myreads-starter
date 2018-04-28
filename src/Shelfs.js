import React, { Component } from 'react'
import Book from './Book'

class Shelfs extends Component {
  state = {
    shelfs: [
      { 
        id: 'currentlyReading',
        name: 'Currently Reading'
      },
      {
        id: 'wantToRead',
        name: 'Want To Read'
      },
      {
        id: 'read',
        name: 'Read'
      }
    ]
  }

  render() {
    return(
      <div>
        {this.state.shelfs.map((shelf) => (
          <div key={shelf.id} className="bookshelf">
            <h2 className="bookshelf-title">{shelf.name}</h2>
            <div className="bookshelf-books">
              <ol className="books-grid">
                {this.props.books.filter((book) => book.shelf === shelf.id).map((book) => (
                  <Book key={book.id} book={book} onChangeShelf={this.props.onChangeShelf} printNone={true} />
                ))}
              </ol>
            </div>
          </div>                
        ))}
      </div>   
    )
  }
}

export default Shelfs