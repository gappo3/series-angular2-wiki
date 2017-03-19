import { Component, OnInit } from '@angular/core';

import { PageService } from '../shared/page.service';
import { Page } from '../shared/page.model';

@Component({
  selector: 'app-page-list',
  templateUrl: './page-list.component.html',
  styleUrls: ['./page-list.component.scss']
})
export class PageListComponent implements OnInit {
  pages: Page[]

  constructor(private pageService: PageService) { }

  ngOnInit() {
    this.getPages();
  }

  getPages() {
    this.pages = this.pageService.getPages();
  }


}
