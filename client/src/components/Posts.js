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

    handleSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.txtPost.value);
        const post = {
            "text": event.target.txtPost.value,
        }
        this.setState({ posts: [...this.state.posts, post ]})
    }

    componentWillMount() {
        axios.get('http://localhost:3001/post').then(response => {
            console.log(response);
            this.setState({
                posts: response.data.data
            })
        })
    }


    render() {
        return (
            <>
                <div className="">
                <form className="row form-inline justify-content-center" onSubmit={this.handleSubmit}>
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
                
            </div>
            </>
        )
    }
}

export default Posts;