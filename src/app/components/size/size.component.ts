import { Component, OnInit } from '@angular/core';
import { Size } from 'src/app/models/size';
import { SizeService } from 'src/app/services/size.service';

@Component({
  selector: 'app-size',
  templateUrl: './size.component.html',
  styleUrls: ['./size.component.css']
})
export class SizeComponent implements OnInit {

  sizes: Size[] = [];
  dataLoaded=false;

  constructor(private sizeService: SizeService) {}
  ngOnInit(): void {
    this.getSizes();
  }

  getSizes() {
    this.sizeService.getSizes().subscribe((response) => {
      this.sizes = response.data;
      this.dataLoaded=true;
    });
  }

}
