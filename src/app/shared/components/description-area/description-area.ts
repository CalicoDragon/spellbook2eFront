import { Component, Input, output } from '@angular/core';

@Component({
  selector: 'app-description-area',
  imports: [],
  templateUrl: './description-area.html',
  styleUrl: './description-area.css',
})
export class DescriptionArea {
  @Input() description = '';
  descriptionChanged = output<string>();

  onWriting(desc: string) {
    this.description = desc;
    this.descriptionChanged.emit(this.description);
  }
}
