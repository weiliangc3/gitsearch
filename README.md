# Git Searcher

## Instructions

Run app.js to serve the page, then just go to localhost:3000 to view the page.

I use grunt to compile my javascript and scss (mostly because I prefer to use scss). The uncompiled code is in the src folder. The html pages are in app/views.

## Technology used
- AngularJS
- SCSS (with Grunt)
- HTML/CSS
- JavaScript
- Node/Express

## Considerations

#### Pagination
I've written my own way of paginating, and I haven't quite figured out how to make the current page have a selected attribute within the select options. I'm aware there are plugins for pagination, and I considered using a Bootstrap one, but I've chosen instead to write my own pagination, as I've never written one before and wanted to try it out.

On reflection, I would change the URL and thus the UI-state to reflect the search and the page, so that the url of searches could be sent to others, but I've written it without that ability for now.

There is the ability to change the items per page and the sort-by asc/desc but has not been fully written into the front end, but the variables are made to be manipulated

#### Front-end CSS Framework
I'm not against front-end CSS frameworks like Bootstrap or Foundation, but I've chosen consciously not to use one, even though the page may be more presentable and faster to make with it. That being said, they do make things look cleaner and more consistant at the cost of some overhead and a bit of 'sameness' with other pages using the same front-end CSS framework..
