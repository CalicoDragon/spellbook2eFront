import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-guide',
  imports: [RouterLink],
  templateUrl: './guide.html',
  styleUrl: './guide.css',
})
export class Guide {
  protected scrollTo(element: HTMLElement) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
