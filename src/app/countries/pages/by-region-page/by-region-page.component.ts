import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: []
})
export class ByRegionPageComponent {
  public regions: Country[] = [];
  public regionsC = ["Africa", "Americas", "Asia", "Europe", "Oceania"];

  constructor(private countriesService: CountriesService){}

  searchByRegions(region: string): void{
    this.countriesService.searchRegion(region).subscribe(regions => {
      this.regions = regions;
    })

  }

}
