import { Injectable } from '@angular/core';

@Injectable()
export class EmployeeService {

  constructor() { }

  getEmployees() {
    return [
      {'id': 1, 'name': 'ali', 'age': 20},
      {'id': 2, 'name': 'onur', 'age': 20},
      {'id': 3, 'name': 'ulker', 'age': 20},
    ];
  }
}
