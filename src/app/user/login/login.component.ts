import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {AuthService} from '../../auth.service';
import  {Router,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  errors:any[]=[];
  notifyMessage:string='';

  constructor(private fb:FormBuilder,
              private auth:AuthService,
              private router:Router,
              private route:ActivatedRoute) { }

  ngOnInit() {
   
    
  }

  initForm(){
    this.loginForm = this.fb.group({
      emailOrPhone: ['', Validators.required],
      password: ['', Validators.required]
    })
  }

  isInValidForm(fieldName):boolean{
    return this.loginForm.controls[fieldName].invalid && 
    (this.loginForm.controls[fieldName].dirty || this.loginForm.controls[fieldName].touched)

  }

  isRequired(fieldName):boolean{
    return this.loginForm.controls[fieldName].errors.required

  }

  login(){
    this.auth.login(this.loginForm.value).subscribe(
      (token)=>{
        this.router.navigate(['/home']);
      },(errorResponse)=>{
        this.errors=(errorResponse.error.errors);


      }
    )
  }

}


