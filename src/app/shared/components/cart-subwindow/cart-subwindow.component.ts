import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { CartService } from 'src/app/core/services/cart.service';
import { CartModel } from '../../models/CartModel';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import * as firebase from 'firebase';

@Component({
  selector: 'app-cart-subwindow',
  templateUrl: './cart-subwindow.component.html',
  styleUrls: ['./cart-subwindow.component.css']
})
export class CartSubwindowComponent implements OnInit {
  item: CartModel;
  constructor(private cartService: CartService, private renderer: Renderer2, private el: ElementRef, public afAuth: AngularFireAuth,
    private router: Router) {
    this.item = cartService.getItems();
  }


  ngOnInit() {
  }

  logout() {
    this.afAuth.auth.signOut();
    this.router.navigate(['/']);
  }

  delete(id) {
    this.cartService.deleteCartitem(id);
  }

  closeCartWindow() {
    this.renderer.removeClass(this.el.nativeElement.querySelector('.minicart__active'), 'is-visible');
  }

  test() {
    this.afAuth.auth.signInWithCustomToken('eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1aWQiOiJJdVNJMzVOcldrUUtlbUJQUWtHVTloQzAwOEMzIiwiY2xhaW1zIjp7InByZW1pdW1BY2NvdW50Ijp0cnVlfSwiaXNzIjoiZmlyZWJhc2UtYWRtaW5zZGstODV0ZnZAY2xpY2sxMy02MGYwMC5pYW0uZ3NlcnZpY2VhY2NvdW50LmNvbSIsInN1YiI6ImZpcmViYXNlLWFkbWluc2RrLTg1dGZ2QGNsaWNrMTMtNjBmMDAuaWFtLmdzZXJ2aWNlYWNjb3VudC5jb20iLCJhdWQiOiJodHRwczovL2lkZW50aXR5dG9vbGtpdC5nb29nbGVhcGlzLmNvbS9nb29nbGUuaWRlbnRpdHkuaWRlbnRpdHl0b29sa2l0LnYxLklkZW50aXR5VG9vbGtpdCIsImV4cCI6MTU2NDM1MTk2OSwiaWF0IjoxNTY0MzQ4MzY5fQ.tOMfyRZufSIqqLy6ZsE9JoQTDJNm36ikQgOvhMUqOO3JxynyxL72sDzrDag9w76ck_rCZNccfExM02I7b3hMNNxa2BQZj01j6UozBueiVf3Zg4qJGUFEKXs6_SjKgahcUj9X0lSpTNVvFXKMjw80wiWgAnhiUNF8bRoYXO-4jNFjiQ7emw0uzHWmAlbKJF0v3So58B_DbhwoGeIFcsP0snEVX33fGa64AaAeHBUinuMtzcbB6kvo7ssU7kEe3K1AiL3lJR_oR1i13rnaRcmgFHV2JDYm9n3SjaIbK2S04urhaXpkQn4D9dMaiVoI0wS6Nzpbf129zCxANBVCvWUJyA').catch(function (error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });

  }

  get() {
    this.afAuth.auth.currentUser.getIdTokenResult()
      .then((idTokenResult) => {
        // Confirm the user is an Admin.
        if (!!idTokenResult.claims.admin) {
          // Show admin UI.
          console.log('11');
        } else {
          // Show regular user UI.
          console.log('22');
        }
      })
      .catch((error) => {
        console.log(error);
      });

  }


}
