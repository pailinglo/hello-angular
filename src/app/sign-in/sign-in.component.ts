import { Component, OnInit } from '@angular/core';
import { AuthService} from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent implements OnInit {

  userId:string = "pailing";
  password:string = "1234";
  errorMsg:string;

  constructor(private authService:AuthService, private router:Router) { }

  ngOnInit() {
  
    
  
  }

  signIn(){

    this.authService.login();
    console.log('redirect 2:'+this.authService.redirectUrl);
    if(this.authService.redirectUrl){
      this.router.navigate([this.authService.redirectUrl]);
    }

    // if(this.logIn(this.userId,this.password)){
    //   this.errorMsg = "Sign In successfully!";

      
    // }
    // else{
    //   this.errorMsg = "Please check your user name and password are correct!";
    // }
  
  }

  logIn(userId:string,password:string):boolean{

    if(userId=="pailing"&&password=="1234"){
      return true;
    }
    return false;
  }

}
