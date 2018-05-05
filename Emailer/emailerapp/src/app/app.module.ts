import { BrowserModule } from '@angular/platform-browser';
import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatProgressSpinnerModule,
  MatDialogModule,
  MatCheckboxModule,
} from '@angular/material';
import { RouterModule, Routes } from '@angular/router';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { SendComponent } from './send/send.component';

import { MailSenderService } from './email-sender.service';
import { MailProviderSendgridService } from './email-provider-sendgrid.service';
import { MailProviderMailgunService } from './email-provider-mailgun.service';
import { SettingsService } from './settings.service';

import { SuccessDialogComponent } from './success-dialog/success-dialog.component';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';


const appRoutes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    data: {
      state: 'home'
    }
  },
  {
    path: 'send',
    component: SendComponent,
    data: {
      state: 'emailsend'
    }
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SendComponent,
    SuccessDialogComponent,
    ErrorDialogComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes,
      {
        useHash: true
      }
    ),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
    MatInputModule,
    MatProgressSpinnerModule,
    MatDialogModule,
    MatCheckboxModule
  ],
  providers: [
    MailSenderService,
    MailProviderSendgridService,
    MailProviderMailgunService,
    SettingsService
  ],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA,
],
  entryComponents: [
    SuccessDialogComponent,
    ErrorDialogComponent,
    HomeComponent,
  ]
})
export class AppModule { }
