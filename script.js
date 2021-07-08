window.onload = function(){

   // header auto next image 

     autoNextImage()

     // the default background of the current image index indicator

      currentImageIndicator[0].style.backgroundColor = 'rgb(0,200,0)'

     //header previous icon

     headerPreviousIcon();

     // header next icon

     headerNext();

     // side bar function 

     sideBarFunc()
}

//global variables

let headerImages = document.querySelector('header')
let counter = 0 ;
let currentImageIndicator = document.querySelectorAll('.caption > span');
let headerPrevIcon = document.querySelector('.left')
let headerNextIcon = document.querySelector('.right')
let navIcon = document.querySelector('.fa-bars')
let sideBar = document.querySelector('.sidebar')
let closeSidebar = document.querySelector('.close')

// an array of the image source

let imageSource = [
                 './worldMoviesImages/movie49.jpg' ,
                 './worldMoviesImages/movie13.jpg',
                 './worldMoviesImages/movie36.jpg',
   ]
   
  function autoNextImage(){
             setInterval( () => {
                 counter++;
                  if (counter > 2) {
                      counter = 0
                  }

                  //check counter

                   checkCounter()
                 headerImages.style.backgroundImage = `url(${imageSource[counter]})`;
              },5000)
  }

   // check counter and set image indicator background

    function checkCounter(){
                                 //check counter

                      for(let i = 0 ; i < imageSource.length ; i++){
                               if( i == counter){
                                    currentImageIndicator[i].style.backgroundColor = 'rgb(0,200,0)'   
                                }
                                if( i != counter){
                                    currentImageIndicator[i].style.backgroundColor = 'transparent'   
                                }
              }        
    }

   // header prev icon function 

   function headerPreviousIcon(){
             headerPrevIcon.addEventListener('click', () => {
                    if(counter <= 2){
                       if(counter <= 0){
                             counter = 2
                       }
                      else{
                           counter-= 1;
                      }
                      headerImages.style.backgroundImage = `url(${imageSource[counter]})`;
                    }

                 //   check Counter and set background Color for  current Image Indicator

                    checkCounter();
             })
    }

// header next icon function

      function headerNext(){
              headerNextIcon.addEventListener('click', () => {
                      if(counter <= 2){
                             counter += 1
                       }
                      if(counter > 2){
                          counter = 0 ;
                      }
                     headerImages.style.backgroundImage = `url(${imageSource[counter]})`;

                     //set background color of current image indicator

                     checkCounter();
              })
      }
      function sideBarFunc(){
                navIcon.addEventListener('click', () => {
                         sideBar.style.display = 'block'
                })
                closeSidebar.addEventListener('click', () => {
                        sideBar.style.display = 'none';
                })
      }
     