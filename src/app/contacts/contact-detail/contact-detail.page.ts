import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ContactsService } from '../contacts.service';
import { Contact } from '../contact.model';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.page.html',
  styleUrls: ['./contact-detail.page.scss'],
})
export class ContactDetailPage implements OnInit {
  loadedContact: Contact;

  constructor(private activatedRoute: ActivatedRoute,
              private contactService: ContactsService,
              private router: Router,
              private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if(!paramMap.has('contactId')){
        //redirect
        this.router.navigate(['/contacts']);
        return
      }
      const contactId = paramMap.get('contactId');
      this.loadedContact = this.contactService.getContact(contactId);
    })
  }

  onDeleteContact() {
    this.alertCtrl.create({
      header: 'Are you sure?',
      message: 'Do you really want to delete the contact?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel'
        },
        {
          text: 'Delete',
          handler: () => {
            this.contactService.deleteContact(this.loadedContact.id);
            this.router.navigate(['/contacts']);
          }
        }
      ]
    }).then(alertEl => {
      alertEl.present();
    });
    
  }

}
