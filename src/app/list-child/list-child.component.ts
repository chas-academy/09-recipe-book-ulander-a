import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-list-child',
  templateUrl: './list-child.component.html',
  styleUrls: ['./list-child.component.css']
})
export class ListChildComponent {

  @Input()

  lists: Array<any> = [];

}
