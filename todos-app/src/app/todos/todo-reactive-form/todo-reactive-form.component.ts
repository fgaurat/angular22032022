import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-reactive-form',
  templateUrl: './todo-reactive-form.component.html',
  styleUrls: ['./todo-reactive-form.component.css']
})
export class TodoReactiveFormComponent implements OnInit {
  todoForm = this.fb.group({
    todoTitle:['',Validators.required],
    todoComplete:[false]
  });
  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.todoForm.valueChanges.subscribe((formData:any) => {
      console.log(formData)
    })
  }

  doSubmit(){
    console.log(this.todoForm)
    

  }

}
