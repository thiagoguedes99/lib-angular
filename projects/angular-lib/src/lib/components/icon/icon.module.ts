import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IconComponent } from './icon.component';
import { PersonComponent } from './icons/person/person.component';
import { RefreshComponent } from './icons/refresh/refresh.component';
import { CartComponent } from './icons/cart/cart.component';
import { VerificationComponent } from './icons/verification/verification.component';
import { AtentionComponent } from './icons/atention/atention.component';



@NgModule({
  declarations: [
    IconComponent,
    PersonComponent,
    RefreshComponent,
    CartComponent,
    VerificationComponent,
    AtentionComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    IconComponent
  ]
})

export class IconModule { }
