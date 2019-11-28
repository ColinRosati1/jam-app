import React from 'react';
import '../styles/jam-items.css'

// song like component
// lists the like count from api
// once click create a new POST call to add like
class SongLike extends React.Component {
    constructor(props){
        super(props)
        this.state = {results: []};
    }

    componentDidMount(){
        document.querySelector('.jam-feed-like').addEventListener("click", this.likeItr) // add method to click event
    }
    
    //TODO fix this
    // api authorization blocked
    likeItr (){ // method to update likes count
        const url = "https://api-stg.jam-community.com/interact/like?"; 
        // const url = "https://api-stg.jam-community.com/interact/like?"+this.props.id.items.id; 
        // const id = this.props.id.items.artist.id;

        var obj = {
            method: 'POST',
            headers: {
            //   'Accept': 'application/json',
            //   'Authorization': 'apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8',
            //   "Access-Control-Allow-Headers": 'apikey=___agAFTxkmMIWsmN9zOpM_6l2SkZPPy21LGRlxhYD8',
            //   'Content-Type': 'application/json',
            //   "Access-Control-Allow-Headers": "*",
              "Access-Control-Allow-Headers": "Accept",
            //   "Access-Control-Allow-Credentials": "true",
            //   "Access-Control-Allow-Methods": "GET,HEAD,OPTIONS,POST,PUT",
            //   "Access-Control-Allow-Headers": "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers"
            },
            body: JSON.stringify({
                'id': 'id'
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
        .catch( err => console.log("error with user fetch data"))
        
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
