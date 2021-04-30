import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit(): void {
  }

  rotaPerdi(){
    this.router.navigate(['/perdidos']);
  }
  rotaAchei(){
    this.router.navigate(['/encontrados']);

  }
}
