import { Component, OnInit } from "@angular/core";
import { ApiService } from "../api.service";
import { PageResponse } from "../models/PageResponse";

@Component({
  selector: "app-contact-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.css"]
})
export class ListComponent implements OnInit {
  people;
  starships;
  selectedItem;
  isLoading = true;
  type;
  species;
  pilots;

  constructor(public apiService: ApiService) {}

  ngOnInit() {
    this.getPeople();
    this.getStarships();
  }
  public selectItem(item, type) {
    this.selectedItem = item;
    this.type = type;

    if (type === "starship") {
      // get pilots
      if(this.selectedItem.pilots[0]){
        this.getPilots(this.selectedItem.pilots[0]);
      }else{
        
      }
    } else {
      // get species
      this.getSpecies(this.selectedItem.species[0]);
    }
  }

  public getPeople() {
    this.apiService.getPeople().subscribe((res: PageResponse) => {
      console.log(res);
      this.isLoading = false;
      this.people = res.results;
    });
  }

  public getStarships() {
    this.apiService.getStarships().subscribe((res: PageResponse) => {
      console.log(res);
      this.starships = res.results;
    });
  }

  public getSpecies(url: string) {
    this.apiService.getSpecies(url).subscribe((res: PageResponse) => {
      console.log(res);
      this.species = res;
    });
  }

  public getPilots(url: string) {
    this.apiService.getPilots(url).subscribe((res: PageResponse) => {
      console.log(res);
      this.pilots = res;
    });
  }
}
