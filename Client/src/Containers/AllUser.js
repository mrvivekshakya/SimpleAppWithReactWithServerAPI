import React from 'react';
import { connect } from 'react-redux';
import {addUserAction, removeUserAction,setIdAction,showAllUsersAction} from '../Actions/index';
import UserRow from '../Components/AllUser Components/UserRow';
import NoUser from '../Components/NoUser';
import axios from 'axios';

const ths = ["First Name",
    "Last Name",
    "Email",
    "Password",
    "Gender",
    "Department",
    "Message",
    "Update",
    "Delete",]; 

class AllUser extends React.Component{
    constructor(props){
        super(props);
        this.state={
            student_data:[]
        }
    }
    confirmHandler = index => {
        var flagDel = window.confirm("Confirm! Do You Want to Delete this User"+index);
        if(flagDel){
            this.props.delU(parseInt(index));
        }
    }

    componentWillMount(){
        this.props.showAllUser();
    }
    componentWillReceiveProps(props, nextProps){
        this.setState({student_data:props.users},()=>{
            // console.log("sdijsiufhusdkuwtwuyewyewuwuy", this.state)
            var {student_data} = this.state;
            var data = Object.values(student_data);
            this.setState({all_data:data})
            console.log("============> ", data);
        })
    }

    render() {
        if(this.props.users){
            return (
                <>
                   <div className="table-responsive">
                   <table  className="table table-striped">
                       <tr style={{borderTop:"2px solid lightgray",padding:"5px 10px"}}>
                          {
                              ths ? ths.map((thValue,index) => {
                                  return <th index ={index}>{thValue}</th>
                              }) :null
                          }
                       </tr>
                       {
                           
                           this.state.all_data ? this.state.all_data.map((user,index) => {
                               user.confirmHandler = this.confirmHandler;
                               console.log("in map"+user)
                               user.setId = this.props.setId;
                               return <UserRow {...user} index={user.id}  />
                           }) : null
                       }
   
                       
                   </table>
                   </div>
                  
                </>
           );
        }else{
            return(
                <NoUser panelHeading="No User" panelText="There is no User in Record" />
            );
        }
        
    }
}


function mapStateToProps(state) {
    return{
        users : state.userReducer,
        id : state.setIdReducer
    }
}

function matchDispatchToProps(dispatch){
    return {
        addU: (data) => dispatch(addUserAction(data)),
        delU: (index) => dispatch(removeUserAction(index)),
        setId: (index) => dispatch(setIdAction(index)),
        showAllUser: () => dispatch(showAllUsersAction())
    };
}

export default connect(mapStateToProps,matchDispatchToProps)(AllUser);