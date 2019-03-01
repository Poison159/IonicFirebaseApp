import { TodoService, Todo } from './../services/todo.service';
import { Component, OnInit } from '@angular/core';
import { LoadingController, NavController } from '@ionic/angular';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  todos: Todo[];

  constructor(private todoService: TodoService, private loadingController: LoadingController) {}

  ngOnInit() {
    this.todoService.getTodos().subscribe(res => {
        this.todos = res;
    });
  }

  async removeTodo(item) {
    const loading = await this.loadingController.create({
      message: 'removing Todo...'
    });
    await loading.present();
    this.todoService.removeTodo(item.id);
    loading.dismiss();
  }

}
