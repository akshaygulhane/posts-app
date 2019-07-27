import React from 'react';
import axios from 'axios';
import moment from 'moment';

class Post extends React.Component {
    constructor(props) {
        super();
        this.state = props.postData
    }

    handleUpvote(event) {
        axios.post('')
        .then()
    }
   
    render() {
        return (       
            <div className="col-md-7 alert alert-dark">
                <strong>{this.state.text}title</strong><br />
                <small>Created on: {moment.unix(this.state.createdAt).format('dddd, MMMM Do, YYYY h:mm A')}</small> <br />
                <div className="form-group float-right">
                    <button type="button" className="btn btn-outline-info btn-sm p-6">Upvote</button> 
                    <span className="badge badge-pill badge-info">{this.state.upvotes}</span>
                </div>
            </div>
        )
    }

}

export default Post;