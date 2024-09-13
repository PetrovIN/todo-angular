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
  @Input() newItem!: string;
  @Output() remove = new EventEmitter<Item>();

  editable: boolean = this.itemService.editable;
  hideElement: boolean = true;

  saveItem(description: string) {
    this.itemService.saveItem(description);
  }

  // remove(item: Item) {
  //   this.itemService.remove(item);
  // }
  //itemService: ItemService = inject(ItemService);


  // editable: boolean = false;
  // hideElement: boolean = true;

  // @Input() item!: Item;
  // @Input() newItem!: string;
  // @Output() remove = new EventEmitter<Item>();

  // saveItem(description: string) {
  //   if (!description) return;
  //   this.editable = false;
  //   this.item.description = description;
  // }
}
