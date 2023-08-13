import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  currentUrl: string = ""
  username: string|null = ""
  role: string|null = ""
  constructor(private router: Router) { }

  ngOnInit(): void {
    this.currentUrl = this.router.url
    this.username = localStorage.getItem("username")
    this.role = localStorage.getItem("role")
  }

  logout():void{
    localStorage.clear()
  }

}
