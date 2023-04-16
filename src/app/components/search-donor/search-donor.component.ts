import { Component } from '@angular/core';

@Component({
  selector: 'app-search-donor',
  templateUrl: './search-donor.component.html',
  styleUrls: ['./search-donor.component.scss']
})
export class SearchDonorComponent {
  searchTerm: string = '';
  donors = [
    { name: 'Nandhini', age: 20, centre: 'Retteri', mobile: '9876543210' },
    { name: 'Nivedha Lakshmi R S', age: 20, centre: 'Tambaram', mobile: '7659871482' },
    { name: 'Nivetha G R', age: 20, centre: 'Porur', mobile: '8761240987' },
    { name: 'Prashanthini K K', age: 20, centre: 'Guindy', mobile: '8764091234' }
  ];
  plasmaBank = [
    { name: 'Bank 1', centre: 'Retteri', mobile: '123456', donorsCount: 17 },
    { name: 'Bank 2', centre: 'Chromepet', mobile: '987532', donorsCount: 3 },
    { name: 'Bank 3', centre: 'Porur', mobile: '876534', donorsCount: 34 }
  ];
  hospitals = [
    { name: 'Hospital 1', centre: 'Tambaram', mobile: '876457', donorsCount: 8 },
    { name: 'Hospital 2', centre: 'Guindy', mobile: '564821', donorsCount: 20 },
  ];
  filteredDonor: any;
  filteredPlasmaBank: any;
  filteredHospitals: any;

  filterData() {
    this.filteredDonor = this.donors.filter(item => item.centre.toLowerCase().includes(this.searchTerm.toLowerCase()));
    this.filteredPlasmaBank = this.plasmaBank.filter(item => item.centre.toLowerCase().includes(this.searchTerm.toLowerCase()));
    this.filteredHospitals = this.hospitals.filter(item => item.centre.toLowerCase().includes(this.searchTerm.toLowerCase()));
    console.log(this.filteredDonor, this.filteredPlasmaBank, this.filteredHospitals);
  }
}
