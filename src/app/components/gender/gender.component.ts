import { Component, OnInit } from '@angular/core';
import { Gender } from 'src/app/models/gender';
import { GenderService } from 'src/app/services/gender.service';

@Component({
  selector: 'app-gender',
  templateUrl: './gender.component.html',
  styleUrls: ['./gender.component.css']
})
export class GenderComponent implements OnInit {

  genders: Gender[] = [];
  dataLoaded=false;

  constructor(private genderService: GenderService) {}
  ngOnInit(): void {
    this.getGenders();
  }

  getGenders() {
    this.genderService.getGenders().subscribe((response) => {
      this.genders = response.data;
      this.dataLoaded=true;
    });
  }

}