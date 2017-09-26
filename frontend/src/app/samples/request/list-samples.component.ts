import { Component, OnInit } from '@angular/core';

import { UserRequest } from '../../interface/user_request';
import { Partner } from '../../interface/partner';

import { PartnerService } from '../partner.service';
import { PaginationService } from '../../services/pagination.service';

import * as valSetting from '../../constants/settings';

@Component({
  templateUrl: './list-samples.component.html'
})

export class RequestComponent implements OnInit {
  currentPage: number;

  requests: UserRequest[];
  partner: Partner;

  paramsSoftDefault: any;

  public items: Array<any> = valSetting.SELECT_USER_REQUEST_STATES;

  constructor(
    private partnerService: PartnerService,
    private paginationService: PaginationService) { }

  ngOnInit(): void {
    this.getCurrentPage();
    this.getRequest();
  }

  getRequest(state?, page?) {
    this.partnerService.getRequests(state, page).then(response => {
      this.requests = response.requests;
      this.partner = response.partner;
      this.setPagination(response.totalPages, this.currentPage);
    });
  }

  getCurrentPage() {
    this.paginationService.getCurrentPages.subscribe(currentPage => {
      this.currentPage = currentPage;
      this.getRequest(this.paramsSoftDefault, currentPage);
    });
  }

  changedState(state): void {
    if (state) {
      this.getRequest(state);
      this.paramsSoftDefault = state;
    } else {
      this.getRequest();
      this.paramsSoftDefault = undefined;
    }
    this.currentPage = 1;
    this.paginationService.resetCurrenPage(1);
  }

  setPagination(totalPages, currentPages) {
    this.paginationService.getPagesInPaginate(totalPages, currentPages);
  }
}
