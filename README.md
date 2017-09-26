# angular_pagination_with_kaminari
service pagination angular


#Using pagination service

####Samples
```
frontend/samples/request/list_samples.component.ts
```


```
import { PaginationService } from '../services/pagination.service';

constructor(
    private paginationService: PaginationService) { }

```

#####Add selector with html 

```
<app-pagination></app-pagination>
```

#####set pages in pagination

```apple js
this.paginationService.getPagesInPaginate(totalPages, currentPages?, pageDistance? , pageSize?);
//pageDistance -- distance from first or last page to current page 
//pageSize -- Number items in on page
can add default currentPages, pageDistance, pageSize in PaginationService
```


#####LISTENING CURRENT_PAGES WHEN CLICKED
```apple js
this.paginationService.getCurrentPages.subscribe(currentPage => {
      //To Do somethings
}
      
```

###BONUS


#####GO FIRST OR LAST PAGES 
```apple js
 method 'eventOfPagination' in pagination service 
```


#####RESET CURRENT PAGES
######(EX: When changed select)
```apple js
 this.paginationService.resetCurrenPage(number);
```
