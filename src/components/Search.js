import React, { Component } from 'react';
import {Input} from 'reactstrap'
class Search extends Component {
    state = {
        query: '',
        expenses: []
    }



    render() {
        const { query, expenses } = this.state

        return (
            <div className="search-expenses">
                <div className="search-expenses-bar">
                    <div
                        className="close-search"
                        to='/'>
                    </div>
                    <div className="search-expenses-input-wrapper">
                        <Input
                          type="text"
                          onChange={(e) => this.search(e.target.value)}
                          placeholder="Search by expense"
                          value={query}
                        />
                    </div>
                </div>
                <div className="search-expenses-results">
                    <ol className="expenses-grid">
                      {expenses.map((expense) => (
                        <li>
                          <div>
                             <p>{expense.expense_name}</p>
                          
                          </div>
                        </li>
                      ))}
                    </ol>
                </div>
            </div>
        )
    }
}

export default Search