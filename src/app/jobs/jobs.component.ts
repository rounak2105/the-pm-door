import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss']
})
export class JobsComponent implements OnInit {
  
  jobs = [1,2,3,4,5,6]

  constructor() { }

  ngOnInit(): void {
  }

}
