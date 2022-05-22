import { Component, OnInit } from '@angular/core';

export interface Person {
  id: number;
  firstName: string;
  lastName: string;
  age: number;
  symbol: string;
}

const ELEMENT_DATA: Person[] = [
  {id: 1, firstName: 'Tom', lastName: 'Smith', age: 12, symbol: 'H'},
  {id: 2, firstName: 'Jane', lastName: 'Smith', age: 10, symbol: 'He'},
  {id: 3, firstName: 'Fred', lastName: 'Flintstone', age: 43, symbol: 'Li'},
  {id: 4, firstName: 'Barney', lastName: 'Rubble', age: 39, symbol: 'Be'},
  {id: 5, firstName: 'Wilma', lastName: 'Flintstone', age: 42, symbol: 'B'},
  {id: 6, firstName: 'Betty', lastName: 'Rubble', age: 40, symbol: 'C'},
  {id: 7, firstName: 'BamBam', lastName: 'Rubble', age: 8, symbol: 'N'},
  {id: 8, firstName: 'Pebbles', lastName: 'Flintstone', age: 9, symbol: 'O'}
];


@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.sass']
})
export class PeopleComponent implements OnInit {

  displayedColumns: string[] = ['id', 'firstName', 'lastName', 'age', 'symbol'];
  dataSource = ELEMENT_DATA;

  constructor() { }

  ngOnInit(): void {
  }

}
