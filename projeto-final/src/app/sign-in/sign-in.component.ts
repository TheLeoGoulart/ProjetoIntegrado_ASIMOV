import { Component, OnInit } from '@angular/core';
import { AuthService } from "../shared";
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})

export class SignInComponent implements OnInit {

  constructor(
    public router: Router,
    public authService: AuthService
  ) { }
  ngOnInit() { }
}