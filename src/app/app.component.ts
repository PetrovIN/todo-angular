import { Component, inject } from '@angular/core';
import { Item } from './item';
import { ItemComponent } from './components/item/item.component';
import { ItemService } from './services/item/item.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [ItemService]
})
export class AppComponent {

  title = 'todo-angular';

  allItems: Item[] = [];

  constructor(private itemService: ItemService) {
    
  }

  filter = this.itemService.filter;


  addItem = (description: string) => {
    this.itemService.addItem(description);
  }

  ngOnInit = () => {
    //this.allItems = this.itemService.getItems();
  }

  remove(item: Item): void {
    this.itemService.remove(item);
  }

  removeAllCompleted = () => {
    this.itemService.removeAllCompleted();
  }

  allCompleted = (evt: Event) => {
    this.itemService.allCompleted(evt);
  }

  get items() {
    return this.itemService.items;                   ;
  }
 
}
