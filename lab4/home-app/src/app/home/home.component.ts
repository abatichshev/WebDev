import { Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../housinglocation';
import { CommonModule } from '@angular/common';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [HousingLocationComponent,CommonModule],
  template: `
    <section>
      <form>
        <input type="text" placeholder="Filter by City" #filter>
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>

    <section class="results">
      <app-housing-location *ngFor="let housingLocation of filteredLocationList" [housingLocation]="housingLocation"></app-housing-location>
    </section>
`,
  styleUrl: './home.component.css'
})
export class HomeComponent {
    housingLocationList: HousingLocation[] = [];
    housingService: HousingService = inject (HousingService);
    filteredLocationList: HousingLocation[] = [];


    constructor() {
        this.housingService.getAllHousingLocations().then((housingLocationList: HousingLocation[]) => {
          this.housingLocationList = housingLocationList;
          this.filteredLocationList = housingLocationList;

        });
    }

    filterResults(text:string){
      
      if(!text) this.filteredLocationList = this.housingLocationList;
   
      console.log(this.filteredLocationList)
      this.filteredLocationList = this.housingLocationList.filter(housingLocation => housingLocation?.city.toLowerCase().includes(text.toLowerCase()));
      console.log(this.filteredLocationList)
    }
}


