import { Injectable, Input } from '@angular/core';
import { Item } from 'src/app/item';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  @Input() item!: Item;

  editable: boolean = false;

  filter: 'all' | 'active' | 'completed' = 'all'

  allItems: Item[] = [];

  addItem(description: string): void {
    if (description) {
      this.allItems.unshift({
        description,
        completed: false
      });
    }
  }

  saveItem(description: string) {
    if (!description) return;
    this.editable = false;
    this.item.description = description;  
  }

  remove(item: Item): void {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

  removeAllCompleted = () => {
    //let newAllItems = [...this.allItems];
    let arr: Item[] = [];

    this.allItems.reduce<Item[]>((acc, curr) => {
      if(!curr.completed) {
        arr.push(curr);
        return arr;
      }
      return acc;
    }, []);
    this.allItems = arr;
  }

  allCompleted = (evt: Event) => {
    const isChecked = (evt.target as HTMLInputElement).checked
    this.allItems.forEach((item) => item.completed = isChecked);
  }

  get items() {
    if(this.filter === "all") {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === "completed" ? item.completed : !item.completed);

  }

  getItems = () => {
    return this.allItems;
  }
}
