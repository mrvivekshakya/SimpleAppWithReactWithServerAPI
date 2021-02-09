import React from 'react';
import { connect } from 'react-redux';
import { updateUserAction, setIdAction } from '../Actions';
import UserId from '../Components/UpdateUser Components/UserId';
import NoUser from '../Components/NoUser';
import GenderComponent from '../Components/AddUser Components/GenderComponent';
import InputwithLable from '../Components/AddUser Components/InputwithLabel';
import Option from '../Components/AddUser Components/Option';
import RadiowithLabel from '../Components/AddUser Components/RadiowithLabel';
import SelectwithLabel from '../Components/AddUser Components/SelectwithLabel';

class UpdateUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {index: this.props.id}
    }
    changeId = event => {
        this.setState({index : parseInt(event.target.value)});
        alert(this.state.index)
    }
    changeHandler = event => {
        //incomming values
        this.state.fname = this.props.users[this.state.index].fname;
        this.state.lname = this.props.users[this.state.index].lname;
        this.state.email = this.props.users[this.state.index].email;
        this.state.password = this.props.users[this.state.index].password;
        this.state.gender = this.props.users[this.state.index].gender;
        this.state.department = this.props.users[this.state.index].department;
        this.state.message = this.props.users[this.state.index].message; 

        let nam = event.target.name;
        let val = event.target.value;
        this.setState({gender:"male"});
        this.setState({[nam]:val});

    }
    submitHandler = event => {
        event.preventDefault();
        var flagDel = window.confirm("Confirm! Do You Want to Delete this User");
        if(flagDel){
            this.props.updateU(this.state,parseInt(this.state.index));
        }
    }
    render() {
        //set incomming values
        // return(
        //     <>
        //     id is{this.state.id}

        //     </>
        // )
        if(this.props.users.length == 0){
            return(
                <NoUser panelHeading="User Unavailable" panelText="There is no User available to Update" />
            );
        }else if(this.props.users.length > 0){
            return (
                <>
                   <div className="container-fluid ">
                       <form onSubmit={e => this.submitHandler(e)}>
                            <div className="">
                                <div className="form-group">
                                    <label for="id">User ID</label>
                                    <select className="form-control" onChange={index => this.changeId(index)} defaultValue={this.props.id}>
                                        <option value="" style={{color:"black"}} disabled>--Select User ID--</option>
                                        {
                                            this.props.users ? this.props.users.map((user,index) => {
                                                user.index = index;
                                                return <UserId {...user} />
                                            }) : null
                                        }
                                    </select>
                                </div>
                            </div>
                            <div className="row">
                            <div className="col-sm-6">
                                {/* <div>{this.state.index}-- {typeof this.state.index} -- {this.props.users[this.state.index].fname}</div> */}
                                <InputwithLable forLabel="fnmae" defaultValue={this.props.users[this.state.index].fname} label="First Name" type="text" name="fname" placeholder="Enter First name" onchange={this.changeHandler} />
                            </div>
                            <div className="col-sm-6">
                                <InputwithLable forLabel="lname" defaultValue={this.props.users[this.state.index].lname} label="Last Name" type="text" name="lname" placeholder="Enter Last name" onchange={this.changeHandler} />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-sm-6">
                                <InputwithLable forLabel="email" defaultValue={this.props.users[this.state.index].email} label="E-Mail Address" type="email" name="email" placeholder="Enter Email Address" onchange={this.changeHandler} />
                            </div>
                            <div className="col-sm-6">
                                <InputwithLable forLabel="password" defaultValue={this.props.users[this.state.index].password} label="Password" type="password" name="password" placeholder="Enter Your Password" onchange={this.changeHandler} />
                            </div>
                        </div>
                        <div className="col-sm-6">
                           <GenderComponent defaultGender={this.props.users[this.state.index].gender} onchange={this.changeHandler}/>
                        </div>
                        <div className="col-sm-6">
                            <SelectwithLabel forLabel="department" defaultValue={this.props.users[this.state.index].department} label="Department"  name="department" onchange={this.changeHandler} />
                        </div>
                           <div className="form-group">
                               {/* <label for="address">Address</label> */}
                               <textarea name="message" defaultValue={this.props.users[this.state.index].message} placeholder="Enter Your Address Here..." style={{width:"100%"}} rows="10" onChange={e => this.changeHandler(e)}></textarea>
                           </div>
                           <input type="submit" value="Update Now" className="btn btn-block btn-primary" />
                       </form>
                   </div>
                </>
           );
        }
    }
}

function mapStateToProps(state) {
    console.log("reduces in update component"+state)
    return{
        users : state.userReducer,
        id : state.setIdReducer

    }
}

function matchDispatchToProps(dispatch){
    return {
        updateU: (data, index) => dispatch(updateUserAction(data,index)),
        setId: (index) => dispatch(setIdAction(index))
    };
}

export default connect(mapStateToProps,matchDispatchToProps)(UpdateUser);