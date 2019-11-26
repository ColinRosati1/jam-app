import React from 'react';


class SongLike extends React.Component {
    constructor(props){
        super(props)
        this.state = {results: []};
    }
    componentDidMount(){
        // const url = "https://api-stg.jam-community.com/interact/like?apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8/"+this.props.id.items.id; 
        // console.log(this.props.id.items.id)
        // fetch(url,{
        //     method: 'POST'
        // })
        // .then( async (response) => response.json())
        // .then( async results => { 
        //     await this.setState({results}) 
        // })
        // .then(() => {
        //     console.log(this.state.results);
        // })
        // .catch( err => console.log("error with user fetch data"))
        
    }
    render(){ // handle API data here. render each array object into DOM elements
        let likes = this.state.results; // grab state data
        return(
            <div>
                <div className="jam-feed-like">
                ❤️
                    {/* {likes.map( res => {return <div className="jam-likes">❤️{res}</div>})} */}
                </div>
            </div>
            
        )
    }
}

export default SongLike;
