import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-angular';

  filter: 'all' | 'active' | 'completed' = 'all'

  allItems = [
    { description: 'something', completed: true },
    { description: 'need to do', completed: false }
  ]

  addItem(description: string) {
    this.allItems.unshift({
      description,
      completed: false
    });
  }

  get items() {
    if (this.filter === 'all') {
      return this.allItems;
    }
    return this.allItems.filter(item => this.filter === 'completed' ? item.completed : !item.completed);
  }
 
}
