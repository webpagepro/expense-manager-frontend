import React, { Component } from 'react';
import {Input} from 'reactstrap'
class Search extends Component {
    state = {
        query: '',
        cameras: []
    }



    render() {
        const { query, cameras } = this.state

        return (
            <div className="search-cameras">
                <div className="search-cameras-bar">
                    <div
                        className="close-search"
                        to='/'>
                    </div>
                    <div className="search-cameras-input-wrapper">
                        <Input
                          type="text"
                          onChange={(e) => this.search(e.target.value)}
                          placeholder="Search by title or camera"
                          value={query}
                        />
                    </div>
                </div>
                <div className="search-cameras-results">
                    <ol className="cameras-grid">
                      {cameras.map((camera) => (
                        <li>
                          <div>
                             <p>{camera.name}</p>
                          
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