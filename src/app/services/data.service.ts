import { Project } from "../models/project";
import { Todo } from "../models/todo";

export class DataService {
  private projects: Project[] = []

  getCards(): Project[] {
    return this.projects;
  }

  addProject(data: Project) {
    this.projects.push( data );
  }

  updateTodo(data: Todo) {
    let projectIndex: number = this.projects.findIndex(item => item.id == data.project_id);
    let todoIndex: number = this.projects[projectIndex].todos.findIndex(item => item.id == data.id);
    this.projects[projectIndex].todos.splice(todoIndex, 1, data);
  }

  addTodo(data: Todo) {
    let projectIndex: number = this.projects.findIndex(item => item.id == data.project_id);
    this.projects[projectIndex].todos.unshift( data );
  }
}