import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  arrValue = [];

  constructor(){
  }

  ngOnInit(){
    this.arrValue =   [
      {fname: 'John',lname:'Doe',gender:'Male',email:'john@example.com',phone:'123456789' },
	  {fname: 'Mary',lname:'Moe',gender:'Female',email:'mary@example.com',phone:'123456787' },
	  {fname: 'July',lname:'July',gender:'Female',email:'july@example.com',phone:'123456788' },
	 
 ];
  }
  onAddEmp(data){
    this.arrValue.push(data);
    console.log(data);

  }

}
