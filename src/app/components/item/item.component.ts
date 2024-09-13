import { Component, Input, Output, EventEmitter, Inject, inject } from '@angular/core';
import { Item } from '../../item';
import { ItemService } from 'src/app/services/item/item.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
  providers: [ItemService]
})
export class ItemComponent {
  constructor(private itemService: ItemService) {

  }

  @Input() item!: Item;
  @Output() remove = new EventEmitter<Item>();

  editable: boolean = this.itemService.editable;
  hideElement: boolean = true;

  saveItem(description: string, item: Item) {
    this.itemService.editable = this.editable;
    this.itemService.saveItem(description, item);
  }

  getEditable = () => {
    console.log(this.editable);
  }
}
