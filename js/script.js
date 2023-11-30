/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/**
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/



/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

/**
 * showPage();
 * take in data and page
 * define number of items per page
 * define startIndex and endIndex of page
 * loop through the data array
 * if index is within startIndex and endIndex
 *    create element li
 *       add classes student-item cf
 *    create element div (child of li)
 *       add class student-details
 *    create element img (child of div)
   *    add class avatar
   *    add attribute src, value
   *    add attribute alt, value
   *  create element h3 (child of div)
   *  create element span (child of div)
   *     add class email
   *  create element div (child of li)
   *     add class joined-details
   *  create element span (child of div)
   *     add class date
   *  append chilren to divs 
   *  append children to li 
 *    append children to ul 
 * endif
 * @param data is the array of students to page through
 * @param page is the page number to display
 */
const showPage = () => {};



/*
Create the `addPagination` function
This function will create and insert/append the elements needed for the pagination buttons
*/

/**
 * addPagination();
 * take in data (used to determine number of pages)
 * create event listener
 * set event to click
 * ensure event target is a button
 * using data length and resultsPerPage
 * determine how many total pages are needed
 * store pages needed as pageCount
 * run loop for each page of pageCount
 *    create element li
 *    create element button (child of li)
 *       add attribute type, button
 *    append child to li
 *    append children to ul
 * endloop
 * run loop for each page of pageCount
*     if event target is a button AND event target is not already active
*        remove active class from previous page
*        add active class to target page
*        call showPage(data, page) function with target page number as the page value
      endif
 * endloop
 * @param data array of students
 * @param resultsPerPage how many students should be shown per page -- if not hardcoded
 */
const addPagination = () => {};


// Call functions

// call showPage() with initial params: data, 1 (1 so app loads with page 1 active)
// call addPagination() with inital param: data (hardcode results per page for now)