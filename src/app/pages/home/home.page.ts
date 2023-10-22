import { Component, OnInit } from '@angular/core';

import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {
    emailValue: string | undefined;
  passValue: string | undefined;

  constructor(private userService: UserService) { }

  ngOnInit() {
    this.emailValue = this.userService.emailValue;
    this.passValue = this.userService.passValue;
    
  }

}
