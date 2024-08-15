import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: []
})
export class ByRegionPageComponent implements OnInit {
  public regions: Country[] = [];
  public regionsC: Region[] = ["Africa", "Americas", "Asia", "Europe", "Oceania"];
  public selectedRegion?: Region;


  constructor(private countriesService: CountriesService){}

  ngOnInit(): void {
    this.regions = this.countriesService.cacheStore.byRegions.countries;
    this.selectedRegion = this.countriesService.cacheStore.byRegions.region;
  }

  searchByRegions(region: Region): void{
    this.selectedRegion = region;
    this.countriesService.searchRegion(region).subscribe(regions => {
      this.regions = regions;
    })

  }

}
