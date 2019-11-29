import React from 'react';
import '../styles/jam-items.css'

// song like component
// lists the like count from api
// once click create a new POST call to add like
class SongComment extends React.Component {
    constructor(props){
        super(props)
        this.state = {results: []};
    }

    componentDidMount(){
        document.querySelector('.form').addEventListener("submit", this.commentItr) // add form submit event
    }
    
    //TODO fix this
    // api authorization blocked
    commentItr (){ // method to update likes count
        console.log("comment")
        const url = "https://api-stg.jam-community.com/interact/like?"; 
        // const url = "https://api-stg.jam-community.com/interact/like?"+this.props.id.items.id; 
        const id = this.props.id.items.artist.id;

        var obj = {
            method: 'POST',
            headers: {
              "Access-Control-Allow-Headers": "Accept",
             },
            body: JSON.stringify({
                'id': id
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
            console.log("Failure")
            this.setState('Failure')
        })
        
    }
    render(){ // handle API data here.
        let comment = this.props.id.items.comments; // grab like from props
        return(
            <div>
                <div className="jam-feed-comment">
                <div className="comment-form-wrapper">
                    <form className="form">
                        <input type="texts" title="Write a comment" placeholder="Write a comment"  className="comment-form-input"></input>
                        <button type="submit"  className="comment-form-button">enter</button>
                    </form>
                    </div>
                Comments {comment}
              
                </div>
                
            </div>
            
        )
    }
}

export default SongComment;
