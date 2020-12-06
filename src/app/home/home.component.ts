import { Meta } from '@angular/platform-browser';
import { ModalService } from 'src/app/services/modal.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {


  constructor(private meta: Meta, private modalService: ModalService, private router: Router) {
  }

  ngOnInit() {
    this.meta.addTags([
      { name: 'description', content: 'Best leaders in Creative Digital Recruitment' },
      { name: 'author', content: 'twoBytes consulting' },
      { name: 'keywords', content: 'Angular, twobytes, consulting, recruitment, leader, jobs' }
    ]);

  }
  openModal(id: string) {
    this.modalService.open(id);
  }

  closeModal(id: string) {
    this.modalService.close(id);
  }

}
