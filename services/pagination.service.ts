import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PaginationService {
  pageSize: number = 10;
  currentPage: number = 1;
  pagedItems!: any[];

  constructor() {}
}
