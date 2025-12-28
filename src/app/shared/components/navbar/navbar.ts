import { Component, OnInit } from '@angular/core';
import { Api } from '../../services/api';

@Component({
  selector: 'app-navbar',
  imports: [],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar implements OnInit {
  spells: any[] = [];

  constructor(private apiService: Api) {}

  ngOnInit(): void {
    this.apiService.getSpells().subscribe(
      (data: any) => {
        this.spells = data;
        console.log(this.spells);
      },
      (error: any) => {
        console.error('Error happened', error);
      }
    );
  }
}
