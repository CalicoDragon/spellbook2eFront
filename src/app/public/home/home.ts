import { Component } from '@angular/core';
import { Navbar } from '../../shared/components/navbar/navbar';
import { SpellCard } from '../../shared/components/spell-card/spell-card';

@Component({
  selector: 'app-home',
  imports: [Navbar, SpellCard],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {}
