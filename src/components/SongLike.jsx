import React from 'react';
import '../styles/jam-items.css'

// song like component
// lists the like count from api
// once click create a new POST call to add like
class SongLike extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            results: [],
            failure: false
        };
    }

    componentDidMount(){
        document.querySelector('.jam-feed-like').addEventListener("click", this.likeItr) // add method to click event
    }
    
    //TODO fix this
    // api authorization blocked
    likeItr (){ // method to update likes count
        const url = "https://api-stg.jam-community.com/interact/like?"; 
        // const id = this.props.id.items.artist.id;

        var obj = { 
            method: 'POST',
            headers: {
              'Authorization': 'apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8', //TODO fix apikey
              "Access-Control-Allow-Headers": "*",
              "Access-Control-Allow-Headers": "Accept",
            },
            body: JSON.stringify({
                // 'id':  this.props.id.items.artist.id
              })
             
        }

       
        fetch(url,obj)
        .then( async (response) => response.json())
        .then( async results => { 
            await this.setState({results}) 
        })
        .then(() => {
            console.log(this.state.results);
        })
        .catch( err => {
            return {failure:true} // return failure state true
        })
        
    }
    render(){ // handle API data here. render each array object into DOM elements
        let likes = this.props.id.items.likes; // grab like from props

        return(
            <div>
                <div className="jam-feed-like">
                ❤️{likes}
                </div>
            </div>
            
        )
    }
}

export default SongLike;
