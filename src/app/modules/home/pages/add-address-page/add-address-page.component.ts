import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { UserServicesService } from 'src/app/core/services/user-services.service';

@Component({
  selector: 'app-add-address-page',
  templateUrl: './add-address-page.component.html',
  styleUrls: ['./add-address-page.component.css']
})
export class AddAddressPageComponent implements OnInit {

  checkoutForm;
  constructor(private formBuilder: FormBuilder, private userServicesService: UserServicesService) {
    this.checkoutForm = this.formBuilder.group({
      name: [''],
      address: '',
      subAddress: '',
      country: '',
      district: '',
      postCode: '',
      email: '',
      phone: '',
      moreInfomation: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(customerData) {
    // Process checkout data here
    console.warn('Your order has been submitted', customerData);
    this.userServicesService.addAddress(customerData).subscribe( data => {
      console.log(data);
    },
    err => {
      console.log(err);
    }
    );
    this.checkoutForm.reset();
  }

}
