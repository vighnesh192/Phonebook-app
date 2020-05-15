import { Injectable } from '@angular/core';
import { Contact } from './contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactsService {
  imgUrl: string = 'https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y'

  private contacts: Contact[] = [
    {
      id: 'u1',
      name: 'Idea Care',
      imageUrl: this.imgUrl,
      contactNo: 12345
    },
    {
      id: 'u2',
      name: 'Amazon Care',
      imageUrl: this.imgUrl,
      contactNo: 180030009009
    }
  ]

  constructor() { }

  getAllContacts() {
    return [...this.contacts]
  }

  getContact(conatactId: string) {
    return {
      ...this.contacts.find(contact => {
        return conatactId === contact.id;
      })
    }
  }

  deleteContact(conatactId: string) {
    this.contacts = this.contacts.filter(contact => {
      return conatactId !== contact.id
    })
  }
}
