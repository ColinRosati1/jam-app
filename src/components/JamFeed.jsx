import React from 'react';
import JamItem from './JamItem.jsx'


// Component Class which on mount calls API and returns JSON
class JamFeed extends React.Component {
    constructor(){
        super()
        this.state = {results: []};
    }
    componentDidMount(){
        const url = "https://api-stg.jam-community.com/song/trending"; 

        fetch(url)
        .then( async (response) => response.json())
        .then( async results => { 
            await this.setState({results}) 
        })
        .then(() => {
            // console.log(this.state.results);
        })
        .catch( err => console.log("error with user fetch data"))
        
    }
    render(){ // handle API data here. render each array object into DOM elements
        let items = this.state.results; // grab state data
        return(
            <div>
                <div className="jam-feed-wrapper">
                    {items.map(res => {
                        return <JamItem key={res.id} items={res}/>  // map each result into its own unique component
                    })}
                </div>
            </div>
            
        )
    }
}

export default JamFeed;
