import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';
import { User } from '../../core/models/User'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  user: Omit<User, "id"> = {
    username: "",
    password: ""
  };

  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }

  onSubmit() {
    if (this.user.username === "") {

    }

    if (this.user.password === "") {

    }

    this.userService.loginAllowed(this.user).subscribe(
      (allowed) => allowed ? this.router.navigate(['/home']) : console.log("Credenziali errate"),
      (error) => console.error("Error: ", error)
    );

  }

}
