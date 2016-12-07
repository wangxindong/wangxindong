import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'root-app',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent {
  constructor(private router: Router){

  }

  jump(){
    this.router.navigateByUrl("/index");
  }
}