import { Component } from '@angular/core';

@Component({
  moduleId: module.id,
  selector: 'sd-todo',
  template: `
    <template ngFor let-todo [ngForOf]="todos">
      {{ todo }}
    </template>
  `,
  styleUrls: ['todo.component.css']
})
export class TodoComponent {
  todos = ['Buy milk', 'Save world'];
  content = 'Using <template> element';
}
