import { Component, OnInit, Input } from '@angular/core';
import { Name } from '../interfaces/name';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-practice1',
  templateUrl: './practice1.component.html',
  styleUrls: ['./practice1.component.css']
})
export class Practice1Component implements OnInit {
  toggleButton: boolean = true;
  total: number;
  randomNames: string[] = ['Ajla', 'Ben', 'Millie'];

  names: Name[] =
    [
      {
        text: "Ajla",
        checked: false,
      },
      {
        text: "Ben",
        checked: false,
      }, {
        text: "Millie",
        checked: false,
      }
    ];

  constructor() { }
  ngOnInit(): void {
  }

  sumOfNumber = (form: NgForm) => {
    return this.total = form.value.number1 + form.value.number2;
  }

  changeButton = () => {
    this.toggleButton = !this.toggleButton;
  }

  checked = (name: Name) => {
    name.checked = true;
  }

}
