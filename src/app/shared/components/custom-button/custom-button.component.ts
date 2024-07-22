import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-custom-button',
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.css'
})
export class CustomButtonComponent {
@Input() color = ""
@Input() background = ""
@Input() fontFamily = ""
@Input() fontStyle = ""
@Input() fontSize = ""
@Input() borderRadius = ""
@Input() opactity = ""
@Input() align: "none"|"start"|"center"|"end" = "none"
@Input() type:"none"|"primary"|"secondary" = "none"
@Input() hasIcon: boolean = false;
}
