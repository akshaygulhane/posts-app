import React from 'react';
import axios from 'axios';

import Post from './Post';

class Posts extends React.Component {

    constructor() {
        super();
        this.state = {
            posts : []
        }
    }

    addPost = (event) => {
        event.preventDefault();
        
        axios.put('/post', { "text": event.target.txtPost.value })
            .then(response => {
                console.log();
                this.setState({ posts: [...this.state.posts, response.data.posts ]})
            })
            .catch(err => {
                console.log(err);
            })
        
    }

    componentWillMount() {
        axios.get('/post')
            .then(response => {
                // console.log(response);
                this.setState({
                    posts: response.data.data
                })
            })
            .catch(err => {
                console.log(err);
            })
    }


    render() {
        return (
            <>
                <form className="row form-inline justify-content-center" onSubmit={this.addPost}>
                    
                    <div className="form-group mx-sm-3 mb-2">
                        <input className="form-control" type="text" id="txtPost" placeholder="Write a post here.." required></input>
                    </div>
                    <button type="submit" className="btn btn-secondary mb-2">Add Post</button>
                </form>
                <div className="row justify-content-center">
                {
                    this.state.posts.map(post => {
                        return <Post key={post.id} postData={post}/>
                    })
                }
                </div>
            </>
        )
    }
}

export default Posts;