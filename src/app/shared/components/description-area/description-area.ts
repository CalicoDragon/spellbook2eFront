import { Component, EventEmitter, Input, OnInit, output, Output } from '@angular/core';

@Component({
  selector: 'app-description-area',
  imports: [],
  templateUrl: './description-area.html',
  styleUrl: './description-area.css',
})
export class DescriptionArea {
  @Input() description: string = '';
  descriptionChanged = output<string>();

  onWriting(desc: string) {
    this.description = desc;
    this.descriptionChanged.emit(this.description);
  }
}
