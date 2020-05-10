import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
  styles: [
    // you can add the css here
  ]
})
export class SearchComponent implements OnInit {
  searchText = '';

  @Output() searchEvent = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }

  searchTextChanged() {
    this.searchEvent.emit(this.searchText);
  }

  // reset() {  //to demonstrate using local variable for parent to child communication
  //   console.log("reset clicked");
  //   this.searchText = '';
  // }


}
