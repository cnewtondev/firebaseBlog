import React, { Component } from 'react'
import { database } from './firebase'
import _ from 'lodash'

import renderHTML from 'react-render-html'


class App extends Component {
  constructor(props){
    super(props)
    this.state={
      title: '',
      body:'',
      posts:{}
    }
    this.onInputChange = this.onInputChange.bind(this)
    this.onHandleSubmit = this.onHandleSubmit.bind(this)
  }

  //lifecycle
    componentDidMount(){
      database.on('value', snapshot =>{
        this.setState({posts : snapshot.val()})
      })
    }
  //render posts from firebase
  renderPosts(){
    return _.map(this.state.posts, (post, key)=>{
      return(
        <div key={key}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      )
    })
  }

  onInputChange(e){
    this.setState({
      [e.target.name]: e.target.value
    })
   
  }

  onHandleSubmit(e){
    e.preventDefault()
    const post = {
      title: this.state.title,
      body: this.state.body
    }
    database.push(post)
    this.setState({
      title: '',
      body: ''
    })
  }

  
  render() { 
    return ( 
      <div>
        <form onSubmit={this.onHandleSubmit}>
          <input value={this.state.title} type="text" name="title" placeholder="Title" onChange={this.onInputChange} ref="title"/>
          <input value={this.state.body} type="text" name="body" placeholder="Body" onChange={this.onInputChange} ref="body"/>
          
          

          <button>Post</button>
        </form>
        <br/>
        {this.renderPosts()}
      </div>
     );
  }
}




 
export default App;

// import React, { Component } from 'react'
// import firebase from './FireConfig'
// import SunEditor from 'suneditor-react'
// import 'suneditor/dist/css/suneditor.min.css';

// class Create extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {
//       title: '',
//       body: '',
//       posts: {}
//     }
//     this.handleTitleChange = this.handleTitleChange.bind(this)
//     this.onInputChange = this.onInputChange.bind(this)
//     this.onHandleSubmit = this.onHandleSubmit.bind(this)
//   }

//   handleTitleChange(e){
//     this.setState({title: e})
//     console.log(this.state.title)
//   }

//   onInputChange(e) {
//     this.setState({
//       body: e
//     })
//     console.log(this.state.body)
//   }

//   logUser = () => {
//     const user = firebase.auth().currentUser.uid.toString()
//     console.log(user)
//   }

//   onHandleSubmit(e) {
//     e.preventDefault()
//     const user = firebase.auth().currentUser.uid.toString()
//     const post = {
//       title: this.state.title,
//       body: this.state.body
//     }
//     firebase.firebase()
//       .ref(`/workshopPosts/${user}`).push(post)
//     this.setState({
//       title: '',
//       body: ''
//     })
//     console.log(user)
//   }

//   render() {
//     return (
//     <div>
//       <form onSubmit={this.onHandleSubmit}>
//       <input
//               type="text"
//               name="title"
//               placeholder="Title"
//               onChange={this.onInputChange}
//               ref="title"
//               className="form-control"
//             />
//       <SunEditor setDefaultStyle="background-color: rgba(0, 0, 0,0)"
//       setOptions={{
//           buttonList: [
//             ['undo', 'redo'],
//             ['font', 'fontSize'],
//             ['fontColor', 'bold', 'underline', 'italic'],
//             ['image', 'video', 'link'],
//             ['align', 'list'],
//             ['table', 'template']
//           ]
//         }}
//       placeholder='Body'
//       value={
//         this.state.body
//       }
//       onChange={
//         this.onInputChange
//       }/>
//       <button>Post</button>
//       </form> <br/>
//       </div>
//     );
//   }
// }

// export default Create;
