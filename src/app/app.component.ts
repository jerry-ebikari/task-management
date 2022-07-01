import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  addTaskForm !: FormGroup;
  newTasks: string[] = ['Hire me', 'Get awesome product'];
  completedTasks: string[] = ['View Demo'];
  ngOnInit(): void {
      this.addTaskForm = new FormGroup({
        task: new FormControl(null, Validators.required)
      })
  }
  add() {
    if (this.addTaskForm.valid) {
      let task = this.addTaskForm.get('task');
      this.newTasks.unshift(task!.value);
      task?.setValue(null);
    }
  }
  toggleVisibility(elem: HTMLParagraphElement) {
    elem.style.display = elem.style.display == 'none' ? 'block' : 'none';
  }
}
