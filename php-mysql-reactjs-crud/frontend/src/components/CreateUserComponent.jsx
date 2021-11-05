import React, { Component } from 'react'
import UserService from '../services/UserService';
class CreateUserComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // step 2
            id: this.props.match.params.id,
            first_name: '',
            last_name: '',
            email_id: ''
        }
        this.changeFirstNameHandler = this.changeFirstNameHandler.bind(this);
        this.changeLastNameHandler = this.changeLastNameHandler.bind(this);
        this.saveOrUpdateUser = this.saveOrUpdateUser.bind(this);
    }
    // step 3
    componentDidMount() {
        // step 4
        if (this.state.id === '_add') {
            return
        } else {
            UserService.getUserById(this.state.id).then((res) => {
                let user = res.data;
                this.setState({
                    first_name: user.first_name,
                    last_name: user.last_name,
                    email_id: user.email_id
                });
            });
        }
    }
    saveOrUpdateUser = (e) => {
        e.preventDefault();
        let user = {
            id: this.state.id,
            first_name: this.state.first_name, 
            last_name: this.state.last_name,
            email_id: this.state.email_id
        };
        console.log('user => ' + JSON.stringify(user));
        // step 5
        if (this.state.id === '_add') {
            UserService.createUser(user).then(res => {
                this.props.history.push('/users');
            });
        } else {
            UserService.updateUser(user).then(res => {
                this.props.history.push('/users');
            });
        }
    }
    changeFirstNameHandler = (event) => {
        this.setState({ first_name: event.target.value });
    }
    changeLastNameHandler = (event) => {
        this.setState({ last_name: event.target.value });
    }
    changeEmailHandler = (event) => {
        this.setState({ email_id: event.target.value });
    }
    cancel() {
        this.props.history.push('/users');
    }
    getTitle() {
        if (this.state.id === '_add') {
            return <h3 className="text-center">Add User</h3>
        } else {
            return <h3 className="text-center">Update User</h3>
        }
    }
    render() {
        return (
            <div>
                <br></br>
                <div className="container">
                    <div className="row">
                        <div className="card col-md-6 offset-md-3 offset-md-3">
                            {
                                this.getTitle()
                            }
                            <div className="card-body">
                                <form>
                                    <div className="form-group">
                                        <label> First Name: </label>
   <input placeholder="First Name" name="first_name" className="form-control"
    value={this.state.first_name} onChange={this.changeFirstNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Last Name: </label>
      <input placeholder="Last Name" name="last_name" className="form-control"
          value={this.state.last_name} onChange={this.changeLastNameHandler} />
                                    </div>
                                    <div className="form-group">
                                        <label> Email Id: </label>
   <input placeholder="Email Address" name="email_id" className="form-control"
           value={this.state.email_id} onChange={this.changeEmailHandler} />
                                    </div>
  <button className="btn btn-success" onClick={this.saveOrUpdateUser}>
                                 Save</button>
   <button className="btn btn-danger" onClick={this.cancel.bind(this)} style=
                                        {{ marginLeft: "10px" }}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CreateUserComponent