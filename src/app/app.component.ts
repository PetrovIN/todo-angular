import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-angular';

  filter: 'all' | 'active' | 'completed' = 'all'

  //done = false;

  allItems = [
    { description: 'something', completed: false },
    { description: 'need to do', completed: false }
  ]

  addItem(description: string) {
    this.allItems.unshift({
      description,
      completed: false
    });
  }

  remove(item: any) {
    this.allItems.splice(this.allItems.indexOf(item), 1);
  }

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'completed' ? item.completed : !item.completed);
  }
 
}
