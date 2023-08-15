import { Component, OnInit } from '@angular/core';
import { Gender } from 'src/app/models/gender';
import { GenderService } from 'src/app/services/gender.service';

@Component({
  selector: 'app-navi',
  templateUrl: './navi.component.html',
  styleUrls: ['./navi.component.css']
})
export class NaviComponent implements OnInit {

  genders: Gender[] = [];
  currentGender:Gender;
  dataLoaded=false;

  constructor(private genderService: GenderService) {}

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands() {
    this.genderService.getGenders().subscribe((response) => {
      this.genders = response.data;
      this.dataLoaded=true;
    });
  }
  setCurrentGender(gender:Gender){

    this.currentGender=gender;

  }



}