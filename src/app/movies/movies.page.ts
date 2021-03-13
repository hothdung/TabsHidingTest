import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  public navigateTo() {
    console.log(this.router.url);
    this.router.navigate(['maintabs/movies/childtabs']);
  }
}
