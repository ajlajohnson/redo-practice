import { Component, OnInit, Input } from '@angular/core';
import { UserPreferenceService } from '../user-preference.service';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  name: string;

  constructor(private service: UserPreferenceService) { }

  ngOnInit(): void {
    this.name = this.service.getName();
  }


  updateName = (form: NgForm) => {
    let name = form.value.name;
    this.service.setName(name);
    this.name = this.service.getName();
  }

}
