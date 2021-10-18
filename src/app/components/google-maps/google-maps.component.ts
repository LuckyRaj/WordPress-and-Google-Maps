import { Component, OnInit, ViewChild } from '@angular/core';
import { GooglePlaceDirective } from 'ngx-google-places-autocomplete';
import { Address } from 'ngx-google-places-autocomplete/objects/address';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-google-maps',
  templateUrl: './google-maps.component.html',
  styleUrls: ['./google-maps.component.scss']
})
export class GoogleMapsComponent implements OnInit {

  latitude:any;
  longitude:any;
  location: string = '';

  options = {
    //Adding only few Country codes
    componentRestrictions: {
      country: ['US','CA','MX','GB','IN','CN','RU'],

    }
  }
  @ViewChild("placesRef")
  placesRef!: GooglePlaceDirective;
  constructor(private ngxSpinner: NgxSpinnerService) { }

  ngOnInit(): void {
   this.setCurrentLocation();
  }

  public setCurrentLocation(){
    this.ngxSpinner.show();
    if('geolocation' in navigator){
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude
        this.longitude = position.coords.longitude
        this.ngxSpinner.hide();
      })
    }
  }

  onLocation(event: any){
    this.latitude = event.coords.lat;
    this.longitude = event.coords.lng;
  }

  public handleAddressChange(address: Address) {
    this.ngxSpinner.show();
    this.latitude =  address.geometry.location.lat();
    this.longitude =  address.geometry.location.lng()
    this.ngxSpinner.hide();
  }

}
