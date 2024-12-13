import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { UserService } from '../../../services/user.service';
import { User } from '../../../shared/models/User';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [RouterLink, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})

export class HeaderComponent implements OnInit{
  user!:User;
  constructor(private userService:UserService){
    userService.userObservable.subscribe((newUser) => {
      this.user = newUser;
    })
  }
  ngOnInit(): void {
    
  }

  logout(){
    this.userService.logout();
  }
}
