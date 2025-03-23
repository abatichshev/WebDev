import { CommonModule } from '@angular/common';
import { Component, EventEmitter,Output } from '@angular/core';

@Component({
  standalone :true,
  selector: 'app-launch-filter',
  templateUrl: './launch-filter.component.html',
  styleUrl: './launch-filter.component.css'

})
export class LaunchFilterComponent {
  @Output() filterEvent = new EventEmitter<boolean>;

  filterSuccessful(){
    this.filterEvent.emit(true);
  }


}
