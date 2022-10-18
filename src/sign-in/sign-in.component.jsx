import React from "react";
import FormInput from "../components/form-input/form-input.component";
import CustomButton from "../components/custom-button/custom-button.componets";
import { signInWithGoogle } from "../firebase/firebase.utils";
import './sign-in.styles.scss'

class SignIn extends React.Component{
    constructor(props){
        super(props);
        //NO
        this.state = {
            email :  '',
            password : '',

        }
    }
    handelSubmit= event =>{
        event.preventDefault();
        this.setState({email : '' , password : ''});
    }
    handelChange = event =>{
        const {value, name}= event.target;
        this.setState({[name]: value});
    }
    render(){
        return(
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form onSubmit={this.handelSubmit}>
                    <FormInput name="email"  type ="email" value={this.state.email}  handleChange = {this.handelChange}  label = "email" required/>
                    
                    <FormInput name="password"  type ="password" value={this.state.password} handleChange= {this.handelChange} label = "password" required/>
                    <div className='buttons'>
                    <CustomButton type = "submit"> Sign in </CustomButton>
                    <CustomButton onClick ={signInWithGoogle} isGoogleSignIn>
                        {''}
                    Sign in with Google {''}
                    </CustomButton>
                    </div>
                </form>
            </div>
        )
    }
}
export default SignIn;