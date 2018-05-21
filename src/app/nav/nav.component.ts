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

  // TODO: Add Output to automatically update nav-status

  ngOnInit() {
    this.loggedIn = this.authService.isLoggedIn();
  }

}
