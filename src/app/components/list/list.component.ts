import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() title = 'Tasks';
  @Input() items: string[] = ['Task 1', 'Task 2'];
  @Input() backgroundColor: string = 'secondary';
  constructor() { }

  ngOnInit(): void {

  }
  drop(event: CdkDragDrop<string[]>) {
    if (event.container === event.previousContainer) {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }
    else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
        )
    }
  }
  edit(editBtn: HTMLButtonElement, saveBtn: HTMLButtonElement, listItem: HTMLTextAreaElement) {
    listItem.removeAttribute('readonly');
    listItem.focus();
    editBtn.style.display = 'none';
    saveBtn.style.display = 'inline';
  }
  save(i: number, saveBtn: HTMLButtonElement, editBtn: HTMLButtonElement, listItem: HTMLTextAreaElement) {
    this.items[i] = listItem.value;
    listItem.setAttribute('readonly', 'true');
    saveBtn.style.display = 'none';
    editBtn.style.display = 'inline';
  }
  del(i: number) {
    if (confirm('Do you want to delete this item?'))
    this.items.splice(i, 1);
  }
  
}
