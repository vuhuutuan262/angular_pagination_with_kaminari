import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/toPromise';

import * as valSetting from '../constants/settings';

@Injectable()
export class PaginationService {
  lastPages: number;
  pages = new Subject<any>();
  currentPage = new Subject<number>();
  initCurrentPage = new Subject<number>();

  getPages = this.pages.asObservable();
  getCurrentPages = this.currentPage.asObservable();
  resetCurrentPage = this.initCurrentPage.asObservable();

  //Event
  eventOfPaginate = new Subject<any>();
  showEvent = this.eventOfPaginate.asObservable();

  getPagesInPaginate(pages, currentPage:  number = 1,
           pageDistance: number = valSetting.DEFAULT_PAGE_SPACE,
           pageSize: number = valSetting.DEFAULT_PAGE_SIZE) {

    //Get Pages

    const listPages = [];
    const totalPages: number = Math.ceil(pages / pageSize);
    let startPage: number, endPage: number;
    let event: boolean;

    if (totalPages === 0 || totalPages === 1) {
      event = false;
    } else if (totalPages < 2 * pageDistance) {
      startPage = 1;
      endPage = totalPages;
      event = true;
    } else {
      if (currentPage <= pageDistance) {
        startPage = 1;
        endPage = 2 * pageDistance + 1;
      } else if (currentPage + pageDistance > totalPages) {
        startPage = totalPages - 2 * pageDistance;
        endPage = totalPages;
      } else {
        startPage = currentPage - pageDistance;
        endPage = currentPage + pageDistance;
      }
      event = true;
    }
    for (let i = startPage ; i <= endPage; i++) {
      listPages.push(i);
    }

    this.pages.next(listPages);
    this.eventOfPaginate.next(event);
    this.lastPages = totalPages;
  }

  getCurrentPage(currentPage) {
    this.currentPage.next(currentPage);
  }

  resetCurrenPage(page) {
    this.initCurrentPage.next(page);
  }
}
