import { Component, OnInit } from '@angular/core';
import { AuthService } from '../login.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  loggedIn = false;

  constructor(
    private authService: AuthService
  ) { }

  ngOnInit() {
    if (this.authService.isLoggedIn) {
      this.loggedIn = true;
    } else {
      this.loggedIn = false;
    }
  }

}
