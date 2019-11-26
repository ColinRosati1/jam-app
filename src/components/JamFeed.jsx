import React from 'react';


class JamFeed extends React.Component {
    constructor(){
        super()
        this.state = {results: []};
    }
    componentDidMount(){
        const url = "https://api-stg.jam-community.com/song/trending";
        fetch(url)
        .then( async (response) => {
            console.log(response)
        })
        .then( async results => { 
            await this.setState({results}) 
        })
        .catch( err => console.log("error with user fetch data"))
        
    }
    render(){ // handle API data here. render each array object into DOM elements
        let items = this.state.results; // grab state data
        return(
            <div className="jam-feed-wrapper">
                {items}
            </div>
            
        )
    }
}

export default JamFeed;
