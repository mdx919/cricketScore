import { Component, OnInit } from '@angular/core';
import { GetScoresService } from '../get-scores.service';

@Component({
  selector: 'app-score-board',
  templateUrl: './score-board.component.html',
  styleUrls: ['./score-board.component.css']
})
export class ScoreBoardComponent implements OnInit {
  matches;
  errorMessage: string;

 constructor(private dataService: GetScoresService) { }

 ngOnInit(): void {
   this.dataService.getScore().subscribe(
     data => {
       this.matches = data;
     },
     error => this.errorMessage = error as any
   );
 }

}
