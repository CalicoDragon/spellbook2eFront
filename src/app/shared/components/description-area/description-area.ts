import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-description-area',
  imports: [],
  templateUrl: './description-area.html',
  styleUrl: './description-area.css',
})
export class DescriptionArea {
  @Input() description: string = '';
  @Output() descriptionChanged = new EventEmitter<string>();

  onWriting(desc: string) {
    this.description = desc;
    this.descriptionChanged.emit(this.description);
  }
}
