import React from 'react';
import axios from 'axios';
import moment from 'moment';

class Post extends React.Component {
    constructor(props) {
        super();
        this.state = props.postData
    }

    handleUpvote = () => {
        axios.post('/post/upvote', { id: this.state.id })
        .then(response => {
            console.log(response);
            const upvotes = this.state.upvotes + 1;
            this.setState({
                upvotes: upvotes
            })
        })
    }
   
    render() {
        return (       
            <div className="col-md-7 alert alert-dark">
                <strong>{this.state.text}</strong><br />
                <small><strong>Created on:</strong> {moment.unix(this.state.createdAt).format('dddd, MMMM Do, YYYY h:mm A')}</small> <br />
                <div className="form-group float-right">
                    <h4 onClick={this.handleUpvote} id="upvote">&#x1F44D; <span className="badge badge-pill badge-info">{this.state.upvotes}</span></h4>
                </div>
            </div>
        )
    }

}

export default Post;