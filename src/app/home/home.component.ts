import { Component, OnInit } from '@angular/core';
import { GetScoresService } from '../get-scores.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
   matches;
   errorMessage: string;

  constructor(private dataService: GetScoresService) { }

  ngOnInit(): void {
    this.dataService.getScore().subscribe(
      data => {
        this.matches = data;
        console.log(this.matches);
        
      },
      error => this.errorMessage = error as any
    );
  }

}
