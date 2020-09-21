import { Component, OnInit } from '@angular/core';
import { UserService }  from  '../user.service';;
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerUserData={ userName:'',email:'',password:'',confirmPassword:'',phone:''}

  constructor(private user: UserService, private router:Router) { }

  ngOnInit(): void {
  }
  registerUser() {
    this.user.registeredUser(this.registerUserData).subscribe((res)=>{
      console.log(res)
      this.router.navigate(['login'])
    },
    (err)=>{
      console.log(err)
    }
    )
  }
}
