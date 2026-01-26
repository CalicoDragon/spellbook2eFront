import { Component, input, Input } from '@angular/core';

@Component({
  selector: 'app-trait',
  imports: [],
  templateUrl: './trait.html',
  styleUrl: './trait.css',
})
export class Trait {
  trait = input.required<string>();
}
