import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component , OnInit} from '@angular/core';
import { LaunchFilterComponent } from '../launch-filter/launch-filter.component';
import { consumerPollProducersForChange } from '@angular/core/primitives/signals';

@Component({
  standalone:true,
  selector: 'app-spacex-launches',
  templateUrl: './spacex-launches.component.html',
  styleUrl: './spacex-launches.component.css',
  imports:[
    CommonModule,
    LaunchFilterComponent
  ]
})
export class SpacexLaunchesComponent implements OnInit{
  launches:any[] = [];
  constructor(private http: HttpClient){}
  ngOnInit(){
    this.http.get<any[]>('https://api.spacexdata.com/v3/launches')
    .subscribe(data => this.launches = data);
    console.log()
  }
  filterLaunches(succesOnly:boolean){
    this.launches = this.launches.filter(launch => launch.success === succesOnly)
  }

}
