import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { MailSenderService } from '../email-sender.service';
import { MatDialog } from '@angular/material';
import { SuccessDialogComponent } from '../success-dialog/success-dialog.component';
import { ErrorDialogComponent } from '../error-dialog/error-dialog.component';

const EMAIL_REGEX = /^[\W]*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4}[\W]*;{1}[\W]*)*([\w+\-.%]+@[\w\-.]+\.[A-Za-z]{2,4})[\W]*$/;

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit {
  isSendingRequest = false

  fromFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)
  ])

  toFormControl = new FormControl('', [
    Validators.required,
    Validators.pattern(EMAIL_REGEX)
  ])
  
   cCFormControl = new FormControl('', [
  ])

  bcCFormControl = new FormControl('', [
    
  ])
  subjectFormControl = new FormControl('', [
    Validators.required
  ])

  messageFormControl = new FormControl('', [
    Validators.required
  ])

  constructor(
    private mailSenderService : MailSenderService,
    private dialog : MatDialog
  ) { }

  ngOnInit() {
  }

  isValid() : boolean {
    return [
      this.fromFormControl.valid,
      this.toFormControl.valid,
      this.subjectFormControl.valid,
      this.messageFormControl.valid,
      this.cCFormControl.valid,
      this.bcCFormControl.valid
    ].every(value => value === true);
  }

  async send() {
    if (!this.isValid()) {
      return this.openErrorDialog('Form is invalid.');
    }

    try {
      this.isSendingRequest = true;

      await this.mailSenderService.sendMail(
        this.fromFormControl.value,
        this.toFormControl.value,
        this.cCFormControl.value,
        this.bcCFormControl.value,
        this.subjectFormControl.value,
        this.messageFormControl.value
      );

      this.openSuccessDialog();
    } catch (error) {
      this.openErrorDialog(error);
    } finally {
      this.isSendingRequest = false;
    }
  }

  openSuccessDialog() : void {
    this.dialog.open(SuccessDialogComponent, {
      width: '600px'
    });
  }

  openErrorDialog(error : string) : void {
    this.dialog.open(ErrorDialogComponent, {
      width: '600px',
      data: {
        error
      }
    });
  }
}
