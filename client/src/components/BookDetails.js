import React, { Component } from 'react'
import { graphql } from 'react-apollo';

import { getBookQuery } from '../queries/queries';

class BookDetails extends Component {

	displayBookDetail() {
		const { book, loading } = this.props.data;
		if (book) {
			if (loading) {
				return <div>Loading...</div>
			} else {
				return (
					<div>
						<h2>{book.name}</h2>
						<p>{book.genre}</p>
						<p>{book.author.name}</p>
						<p>All books by this author</p>
						<ul className="author-books">
							{
								book.author.books.map(item => {
									return <li key={item.id}>{item.name}</li>
								})
							}
						</ul>
					</div>
				)
			}
		} else {
			return (
				<div>No book selected...</div>
			)
		}
	}

	render() {
		console.log(this.props);
		return (
			<div id="book-details">
				{this.displayBookDetail()}
			</div>
		)
	}
}

export default graphql(getBookQuery, {
	options: (props) => {
		return {
			variables: {
				id: props.bookId
			}
		}
	}
})(BookDetails);