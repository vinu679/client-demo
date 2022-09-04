import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AppService } from 'src/app/services/app.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  hidePassword: boolean = true;
  loginForm!: FormGroup;
  formSubmitted: boolean = false;
  
  constructor(private fb: FormBuilder,private router: Router, private appService: AppService) { 
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email, Validators.pattern(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)]],
      password: ['', Validators.required],
    });
  }

  ngOnInit(): void {
  }

  get control() {
    return this.loginForm.controls;
  }

  onLogin() {
    this.formSubmitted = true;
    if (this.control['email'].value === 'admin@gmail.com' && this.control['password'].value === 'test123') {
      this.router.navigateByUrl('/post-auth/landing', { replaceUrl: true });
      this.appService.setItem('isAuthenticated', true);
    }
  }

}
