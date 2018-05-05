import { Component, OnInit, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatDialog } from '@angular/material';
import { MailProviderSendgridService } from '../email-provider-sendgrid.service';
import { MailProviderMailgunService } from '../email-provider-mailgun.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public defaultMailGunApiKey : string
  constructor(
    private dialog : MatDialog,
    public sendgrid : MailProviderSendgridService,
    public mailgun : MailProviderMailgunService
  ) { }
 
  
  ngOnInit() {
  }

}
