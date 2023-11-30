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
const studentList = document.querySelector('.student-list');
const resultsPerPage = 9;
/**
 * showPage();
 * take in data and page
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
 * @param {array} data is the array of students to page through
 * @param {int} page is the page number to display
 */
const showPage = (data, page) => {
  const startIndex = page * resultsPerPage - resultsPerPage;
  const endIndex = page * resultsPerPage - 1;

  //console.log(data[startIndex]);
  //console.log(data[endIndex]);

  for (i = startIndex; i <= endIndex; i++) {
    const student = data[i];
    // create elements to hold all the student info
    const li = createElement('li', ['student-item', 'cf']);
    const studentDiv = createElement('div', ['student-details']);
    const img = createElement('img', ['avatar'], [['src', student.picture.large], ['alt', 'Profile Picture']]);
    const h3 = createElement('h3', [], [], `${student.name.first} ${student.name.last}`);
    const emailSpan = createElement('span', ['email'], [['title', student.email]], `${student.email}`);
    const regDiv = createElement('div', ['joined-details']);
    const dateSpan = createElement('span', ['date'], [['title', `Joined ${student.registered.date}`]], `Joined ${student.registered.date}`);

    // student div contains image, name, email
    studentDiv.appendChild(img);
    studentDiv.appendChild(h3);
    studentDiv.appendChild(emailSpan);
    // registration div contains registration date
    regDiv.appendChild(dateSpan);
    // list item contains student details and registration details
    li.appendChild(studentDiv);
    li.appendChild(regDiv);
    // add list item to student list
    studentList.appendChild(li);
  };
};

/**
 * createElement() function creates elements and add classes, attributes, and textContent to the element
 * @param {string} htmlEl the html element to create
 * @param {array} classes classes to assign to the element
 * @param {array} attributes array of attributes where inner array stores attribute name and value
 * @param {string} text textContent to set for element
 */
function createElement(htmlEl, classes, attributes, text) {
  const elName = document.createElement(htmlEl); //creates the element and stores in variable
  // add classes
  if (classes && classes.length > 0) {
    for (let className of classes) {
      elName.classList.add(className);
    }
  }
  // set attributes
  if (attributes && attributes.length > 0) {
    for (let attribute of attributes) {
      console.log('hello');
      //console.log(attribute[0], attribute[1]);
      elName.setAttribute(attribute[0], attribute[1]);
    }
  }
  // set textContent
  if (text !== '') {
    elName.textContent = text;
  }

  return elName;
};

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
showPage(data, 4);
// call addPagination() with inital param: data (hardcode results per page for now)