import { Component, OnInit, OnDestroy } from '@angular/core';
import { PaginationService } from '../../services/pagination.service';
import { ISubscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-pagination',
  templateUrl: 'pagination.component.html',
  styleUrls: ['pagination.component.scss']
})

export class PaginationComponent implements OnInit, OnDestroy {
  pages = [];

  totalPages = 0; currentPage: number;

  canJumpPage: boolean;

  private pagesSubscription; evenPaginateSubscription; currentPagesubscription: ISubscription;

  constructor(
    private paginationService: PaginationService) { }

  ngOnInit() {
    this.pagesSubscription = this.paginationService.getPages.subscribe(pages => {
      this.pages = pages;
    });

    this.evenPaginateSubscription = this.paginationService.showEvent.subscribe(flag => {
      this.canJumpPage = flag; // Show Event Of Pagination
    });

    this.currentPagesubscription = this.paginationService.resetCurrentPage.subscribe(pageReset => {
      this.currentPage = pageReset; // Listening when use reset pages
    });
  }

  ngOnDestroy() {
    this.pagesSubscription.unsubscribe();
    this.evenPaginateSubscription.unsubscribe();
    this.currentPagesubscription.unsubscribe();
  }

  selectPagination(page) { //transfer current page when clicked
    this.currentPage = page;
    this.paginationService.getCurrentPage(page);
  }


  //Use Event Of Pagination
  eventOfPagination(isPreview: boolean, final: boolean): void {
    const lastPages = this.paginationService.lastPages;
    let page = 0;
    if (isPreview) {
      final ? page = 1 : page = this.currentPage - 1 || 1;
    } else {
      if (final) {
        page = lastPages;
      } else {
        this.currentPage === lastPages ? page = lastPages : page = this.currentPage + 1 || 2;
      }
    }
    this.currentPage = page;
    this.selectPagination(page);
  }
}
