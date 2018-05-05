# email-soft
Email fallback

Technologies used - Angular, Typescript, Dependency injection, Cookie, yarn 

Steps to build the project
Go to VSCode
Go to folder Emailer and open the same.
Switch to Integrated terminal
Type cd emailerapp
Run below commands
 npm install
 npm i @angular/core
 npm i @angular/material -- used for UI Components
 yarn install  -- used yarn for fast reliable dependency management for faster performance
 yarn upgrade
 ng build - to build the project
 ng serve - to run the app.
  
  Disable CORS :
  https://chrome.google.com/webstore/detail/allow-control-allow-origi/nlfbmbojpeacfghkpbjhddihlkkiljbi.
  OR open Chrome process with disable-web-security flag.
  
  Run http://localhost:4200/
  
  Use Testing account domain name for SendGrid and API Key and domain for MailGun.
  Enter in the form.
  To send the emails , add the emails as authorised recipient eg. in MailGun.
  
  Improvements - Unit Testing with Jasmine or Protractor to create unit tests, cross origin modifications and Error handling
  




