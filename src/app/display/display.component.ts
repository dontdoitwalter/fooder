import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl } from '@angular/forms'
import { formControlBinding } from '@angular/forms/src/directives/ng_model';

@Component({
  selector: 'app-display',
  templateUrl: './display.component.html',
  styleUrls: ['./display.component.css']
})
export class DisplayComponent implements OnInit {
  searchFood:FormGroup
  price=[
    {value:1, view:'$'},
    {value:2, view:'$$'},
    {value:3, view:'$$$'},
    {value:4, view:'$$$$'},
  ]
  states=[
    'AL','AK','AZ','AR','CA','CO','CT','DE','FL','GA','HI',
    'ID','IL','IN','IA','KS','KY','LA','ME','MD','MA','MI',
    'MN','MS','MO','MT','NE','NV','NH','NJ','NM','NY','NC',
    'ND','OH','OK','OR','PA','RI','SC','SD','TN','TX','UT',
    'VT','VA','WA','WV','WI','WY'
  ]

  constructor(private _fb:FormBuilder) { }

  ngOnInit() {
    this.searchFood = this._fb.group({
      cityName: new FormControl(),
      states: new FormControl(),
      price: new FormControl(),
    })
  }
onSearchYelp () : void{
  
}
}
