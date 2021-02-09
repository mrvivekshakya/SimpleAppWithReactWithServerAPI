import React from 'react';

class UserId extends React.Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    render() {
        const {fname, lname, email, password, gender, department, message,index} = this.props;
        //const {optionValue} = this.props;
        return (
             <>
                <option value={index} style={{color:"black"}}>{index+1} - {fname} {lname} - {email}</option>
             </>
        );
    }
}
export default UserId;