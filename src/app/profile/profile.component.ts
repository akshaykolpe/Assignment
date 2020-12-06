import { Meta } from '@angular/platform-browser';
import { StorageService } from './../services/storage.service';
import { ModalService } from './../services/modal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  formData;
  constructor(private meta: Meta, private modalService: ModalService, private storageService: StorageService) {
    this.meta.addTags([
      { name: 'description', content: 'Best leaders in Creative Digital Recruitment' },
      { name: 'author', content: 'twoBytes consulting' },
      { name: 'keywords', content: 'Angular, twobytes, consulting, recruitment, leader, jobs' }
    ]);
  }

  ngOnInit() {
    this.formData = JSON.parse(localStorage.getItem('formData'));
    this.storageService.getStorage().subscribe(_ => {
      this.formData = JSON.parse(localStorage.getItem('formData'));
      console.log(this.formData);
    });
  }

  onFileSelect(event) {
    const reader = new FileReader();
    reader.readAsDataURL(event.target.files.item(0));
    reader.onload = () => {
      this.formData.image = reader.result;
      this.storageService.setItem('formData', JSON.stringify(this.formData));
    };
  }

  openModal(id: string) {
    this.storageService.setItem('formData', JSON.stringify(this.formData));
    this.modalService.open(id);

  }
}
