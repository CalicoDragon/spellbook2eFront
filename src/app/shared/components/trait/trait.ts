import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-trait',
  imports: [],
  templateUrl: './trait.html',
  styleUrl: './trait.css',
})
export class Trait {
  @Input() trait: String = 'trait';
}
