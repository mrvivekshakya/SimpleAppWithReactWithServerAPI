import React from 'react';
import { connect } from 'react-redux';
import UserId from '../Components/UpdateUser Components/UserId';
import { addUserAction, removeUserAction } from "../Actions/index";
import NoUser from '../Components/NoUser';

class RemoverUser extends React.Component{
    constructor(props){
        super(props);
        this.state = {index: null}
    }
    changeHandler = event => {
        event.preventDefault();
        this.setState({index: event.target.value});
    }
    confirmHandler = event => {
        var flagDel = window.confirm("Confirm! Do You Want to Delete this User");

        if(flagDel){
            this.props.delU(parseInt(this.state.index));
        }
    }
    render() {
        if(this.props.users.length == 0){
            return(
                <NoUser panelHeading="User Unavailable" panelText="There is no User available to Update" />
            );
        }
        return (
            <>
               <div className="container-fluid ">
                   <form >
                        <div className="">
                            <div className="form-group">
                                <label for="id">User ID</label>
                                <select className="form-control" onChange={index => this.changeHandler(index)}>
                                    <option value="" style={{color:"black"}}>--Select User ID--</option>
                                    {
                                        this.props.users ? this.props.users.map((user,index) => {
                                            user.index = index;
                                            return <UserId {...user} />
                                        }) : null
                                    }
                                </select>
                            </div>
                        </div>
                       <input type="button" onClick={(e) => this.confirmHandler(e)} value="Delete This User Now" className="btn btn-block btn-danger" />
                   </form>
               </div>
            </>
       );
    }
}

function mapStateToProps(state) {
    return{
        users : state.userReducer,
    }
}

function matchDispatchToProps(dispatch){
    return {
        addU: (data) => dispatch(addUserAction(data)),
        delU: (index) => dispatch(removeUserAction(index))
    };
}

export default connect(mapStateToProps,matchDispatchToProps)(RemoverUser);
