import { Component, EventEmitter, Input, Output, output } from '@angular/core';

@Component({
  selector: 'app-search-input',
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.css'
})
export class SearchInputComponent {
// @Input() color = ""
// @Input() background = ""
// @Input() fontStyle = ""
// @Input() fontFamily = ""
// @Input() fontSize = ""
@Input() placeHolder = ""
@Input() type: "none"|"primary"|"secondary" = "primary"


@Output() textEmitter: EventEmitter<string> = new EventEmitter<string>();

handleSearch(value: string){
  this.textEmitter.emit(value);
  // console.log(value)
}
inputChange(value: string) {
  console.log(value)
}
// @Input() flex = ""
}
