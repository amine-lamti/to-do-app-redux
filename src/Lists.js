import React, { Component } from "react";
import { connect } from "react-redux";
import {addLists,deleteLists,completeLists,editLists} from './actions/listsActions'
import { v4 as uuidv4 } from 'uuid';


class Lists extends Component {
    constructor(props) {
      super(props);
      this.state={

      }
    }
    
    handelChange = (e) => {
        this.setState({
            text : e.target.value
        })
    }
    editTask = () => {
      this.props.editTodo(this.state.text, this.state.id)
      this.setState({editMode: false, text: ''})
    }
    add = ()=> {
      this.state.editMode ? this.editTask() :
        this.props.addTodo({
            name : this.state.text , 
            complete : false,
            id : uuidv4()
        })
        this.setState({text: ''})
      }

        handelDelete = (id) => {
          this.props.delTodo(id) 
          }

          handelComplete =(x) =>{
            this.props.comTodo(x)
          }

          handelEdit =(id,name) =>{
            this.setState ({
              text : name,
              id : id,
              editMode: true
            })
          }

    
          
      
  render() {
    return (
      <div>
        <div className="todo">
          <h1 className="txt">To-Do App!</h1>
          <br />
          <h3 className="txt">Add New To-Do</h3>
          <br />
          <input
            type="text"
            className="form-control"
            name="item"
            placeholder="Enter new task"
            onChange={this.handelChange}
            value={this.state.text}
          />
          <br />
          <button className="btn txt" onClick={this.add}>{this.state.editMode ? 'Edit' : 'Add'}</button>
          <div className="icon">
              {this.props.block.todos.map(el => <div className="item">
                  <button className="combtn delbtn" onClick={()=>this.handelDelete(el.id)}>delete</button>
                  <button className="combtn comtnp" onClick={()=>this.handelComplete(el.id)}>{el.class ? "Undo":"Complete"}</button>
                  <button className="combtn" onClick={()=>this.handelEdit(el.id,el.name)}>edit</button>
                  <h1 className={el.class ? "text":undefined}>{el.name}</h1>
              </div>)}
          </div>
          <div className="work">
            <h4>Let's get some work done</h4>
            <br />
            <div className="main">
              <hr />
              <div className="footer">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQS13Kjh3SeT8Fmcy73l5FKRiH8Tcq9w9SIAddixX-XHwODxe5C"
                  alt=""
                />
                <br />
                <h4>Proudly powered by Cosmic js</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    block: state.listsReducer
  };
};
const mapDispacthToProps = dispatch => {
  return {
    addTodo : todoNew => dispatch(addLists(todoNew)),
    delTodo : id => dispatch(deleteLists(id)),
    comTodo : x => dispatch(completeLists(x)),
    editTodo : (name,id) => dispatch(editLists(name,id)),

  };
};
export default connect(mapStateToProps, mapDispacthToProps)(Lists);
