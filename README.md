# angular_pagination_with_kaminari
service pagination angular

```
import { PaginationService } from '../../services/pagination.service';

constructor(
    private paginationService: PaginationService) { }

```

add selector with html 

```
<app-pagination></app-pagination>
```

set pages in pagination

```apple js
this.paginationService.getPagesInPaginate(totalPages, currentPages?, pageDistance? , pageSize?);
//currentPages 
//pageDistance -- distance from first or last page to current page 
//pageSize -- Number items in on page
```


BONUS


GO FIRST OR LAST PAGES 
```apple js
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
```


RESET CURRENT PAGES
(EX: When changed select)
```apple js
 this.paginationService.resetCurrenPage(number);
```
