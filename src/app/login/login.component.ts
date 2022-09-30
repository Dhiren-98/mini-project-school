import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginDetails: any = {
    username: '',
    password: '',
    dropdownCheck: ''
  };

  constructor() {}
  //  {
  //   console.log(this.loginDetails);
  //   }

  ngOnInit(): void {
  }
  getValue() {
    console.log(this.loginDetails);
    
    if(!this.loginDetails.username)
    {
     alert('please fill the name');
    }
    else if (!(this.loginDetails.password.length>=8))
    {
      alert('password should be minimun 8 digits');
    }
    else if (!this.loginDetails.dropdownCheck===true)
    {
      alert('please tick checkbox to continue');
    }
  }
  
}
