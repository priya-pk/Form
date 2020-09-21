import { Component, OnInit } from '@angular/core';
import { UserService }  from  '../user.service';;
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginUserData = {email:'',password:''}

  constructor(private user: UserService, private router:Router) { }

  ngOnInit(): void {
  }

  loginUser(){
    // console.log(this.loginUserData)
    this.user.loginUser(this.loginUserData)
    .subscribe(
      res => {
        console.log(res)
        this.router.navigate(['home'])
      },
      err =>{
        alert('Invalid email or password');
        console.log(err)
      }   
    )
  }

}
