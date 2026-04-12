import { Component, input, linkedSignal, output, signal } from '@angular/core';

@Component({
  selector: 'app-paginator',
  imports: [],
  templateUrl: './paginator.html',
  styleUrl: './paginator.css',
})
export class Paginator {
  changePageEvent = output<number>();
  spellsLength = input.required<number>();
  currPage = input.required<number>();
  protected maxPage = linkedSignal(() => Math.ceil(this.spellsLength() / 50));
  protected Math: Math = Math; // need to math in template

  protected nextPage() {
    if (this.currPage() == this.maxPage()) return;
    this.changePageEvent.emit(this.currPage() + 1);
  }

  protected previousPage() {
    if (this.currPage() == 1) return;
    this.changePageEvent.emit(this.currPage() - 1);
  }

  protected firstPage() {
    this.changePageEvent.emit(1);
  }

  protected lastPage() {
    this.changePageEvent.emit(this.maxPage());
  }
}
