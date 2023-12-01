/*
Treehouse Techdegree:
FSJS Project 2 - Data Pagination and Filtering
*/

/**
For assistance:
   Check out the "Project Resources" section of the Instructions tab: https://teamtreehouse.com/projects/data-pagination-and-filtering#instructions
   Reach out in your Slack community: https://treehouse-fsjs-102.slack.com/app_redirect?channel=unit-2
*/
let activePage = 1;
const resultsPerPage = 9;

document.addEventListener('DOMContentLoaded', () => {
  const headerArea = document.querySelector('.header');
  const label = createElement('label', ['student-search'], [['for', 'search']]);
  const span = createElement('span', [], [], 'Search by name');
  const input = createElement('input', [], [['id', 'search'], ['placeholder', 'Search by name...']]);
  const button = createElement('button', [], [['type', 'button']]);
  const img = createElement('img', [], [['src', 'img/icn-search.svg'], ['alt', 'Magnifying glass icon'], ['title', 'Search']]);

  //add image to button
  button.appendChild(img);
  //add elements to label
  label.appendChild(span);
  label.appendChild(input);
  label.appendChild(button);

  headerArea.appendChild(label);
  
});

/*
Create the `showPage` function
This function will create and insert/append the elements needed to display a "page" of nine students
*/

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
const showPage = (list, page) => {
  const startIndex = page * resultsPerPage - resultsPerPage;
  const endIndex = page * resultsPerPage;
  const studentList = document.querySelector('.student-list');
  studentList.innerHTML = '';

  for (i = startIndex; i < endIndex; i++) {
    if (i === list.length) {
      break //stop looping once you're at the end of the data set
    }
    const student = list[i];
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
 * @param list array of students
 * @param resultsPerPage how many students should be shown per page -- if not hardcoded
 */
const addPagination = (list) => {
  const totalPages = Math.ceil(list.length / resultsPerPage);
  const ul = document.querySelector('.link-list');
  ul.innerHTML = '';

  for (i = 1; i <= totalPages; i++) {
    const li = createElement('li');
    const button = createElement('button', [], [], i);

    if (parseInt(button.textContent) === activePage) {
      button.className = 'active';
    }
    li.appendChild(button);
    ul.appendChild(li);
  }

  ul.addEventListener('click', (e) => {

    if (e.target.tagName === 'BUTTON') { //only run if click was on a button element
      const targetButton = e.target; //target button so active class can get added later
      const targetPage = parseInt(e.target.textContent); //target page is int to pass to showPage function
      const activeButton = document.querySelector('.active'); //get current active button to remove active class later
      activePage = activeButton.textContent; //get active page int to compare to target page int 
  
      if (targetPage !== activePage) {
        targetButton.className = 'active';
        activeButton.className = '';
        showPage(list, targetPage);
      }
    }
  });
};

// Call functions
showPage(data, 1); // pass 1 so app loads with page 1 selected
addPagination(data); // build initial page buttons