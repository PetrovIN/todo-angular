import { Component } from '@angular/core';
import { Item } from './item';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-angular';

  filter: 'all' | 'active' | 'completed' = 'all'

  allItems: Item[] = [
    // { description: 'something', completed: false },
    // { description: 'need to do', completed: false }
  ]

  addItem(description: string): void {
    if (description) {
      this.allItems.unshift({
        description,
        completed: false
      });
    }
  }

  remove(item: any): void {
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

  // removeAllCompleted(): void {
  //   let a: Item[] = [];

  // }

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'completed' ? item.completed : !item.completed)                   ;
  }
 
}
