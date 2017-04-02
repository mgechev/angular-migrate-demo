import { Component } from '@angular/core';

/**
 * This class represents the lazy loaded AboutComponent.
 */
@Component({
  moduleId: module.id,
  selector: 'sd-about',
  template: `
    <template ngFor let-todo [ngForOf]="todos">
      {{ todo }}
    </template>
  `,
  styleUrls: ['header.component.css']
})
export class HeaderComponent {
  todos = ['Buy milk', 'Save world'];
  content = 'Using <template> element';
}
