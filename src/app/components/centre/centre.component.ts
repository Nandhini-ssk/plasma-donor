import { Component } from '@angular/core';

@Component({
  selector: 'app-centre',
  templateUrl: './centre.component.html',
  styleUrls: ['./centre.component.scss']
})
export class CentreComponent {
  city: string = '';
  centre: string = '';
  cities = [
    { label: 'Select', value: '', locations: [] },
    { label: 'Chennai', value: 'chennai', locations: ['Retteri', 'Tambaram', 'Chromepet', 'Porur', 'Guindy'] },
    { label: 'Tirunelveli', value: 'tirunelveli', locations: ['Palay', 'Melapalayam', 'Ambai'] }
  ];
  selectedCity: any;

  updateCity() {
    this.selectedCity = this.cities.find(item => item.value === this.city);
    if (this.selectedCity.value) {
      this.centre = this.selectedCity.locations[0];
    } else {
      this.selectedCity = undefined;
      this.centre = '';
    }
  }

  openMap() {
    window.open(`https://www.google.com/maps/place/${this.centre}/${this.city}`);
  }
}
