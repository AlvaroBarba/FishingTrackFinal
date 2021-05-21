import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-show-route',
  templateUrl: './show-route.page.html',
  styleUrls: ['./show-route.page.scss'],
})
export class ShowRoutePage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
