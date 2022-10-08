import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }
  @Input() user=false;
  @Input() cartSize=0;
  @Output() loggedOutUser=new EventEmitter<boolean>();
  ngOnInit(): void {
  }
   
  logout(){
     this.loggedOutUser.emit(false);
  }
}
