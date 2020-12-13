// const words = ['web developer', 'graphic designer'];
// let count = 0,
//     index = 0,
//     text = '',
//     letter = '';
//
// (function type() {
//
//   if (count === words.length) {
//
//     count = 0;
//
//   }
//
//   text = words[count];
//   letter = text.slice(0, ++index);
//
//   let a = document.querySelector('.blink-text');
//   a.textContent = letter;
//
//
//   if (letter.length === text.length) {
//     count++;
//     index = 0;
//   }
//
//   setTimeout(type, 400);
//
// })();

class TypeWriter {

  words;
  currentword;
  currentletter;
  lettercount;
  wordindex;
  wait;
  isdeleting;

  constructor(words, wait, wordindex) {

    this.words = words;
    this.wait = wait;
    this.wordindex = wordindex;
    this.currentword = this.words[this.wordindex];
    this.lettercount = 0;
    this.isdeleting = false;

  }

}

TypeWriter.prototype.type = function() {

  if (this.isdeleting) {

    if (this.lettercount > 1) {
      this.lettercount--;
      this.wait = 100;
    } else {
      this.wordindex++;
      this.lettercount = 1;
      this.isdeleting = false;
    }

  } else {
    this.lettercount++;
    this.wait = 300;
  }

  if (this.wordindex === this.words.length) {
    this.wordindex = 0;
  }

  if (this.lettercount === this.currentword.length) {
    this.isdeleting = true;
  }

  this.currentword = this.words[this.wordindex];

  this.currentletter = this.currentword.substr(0, this.lettercount);

  let a = document.querySelector('.blink-text');
  a.textContent = this.currentletter;

  setTimeout(() => {
    this.type();
  }, this.wait);

};

window.addEventListener('load', init);

function init() {

  const words = [
    'web developer',
    'web designer',
    'graphic designer',
    'front end developer',
    'ceo devfolio'];
  const wait = 400;
  const wordindex = 0;

  let a = new TypeWriter(words, wait, wordindex);
  a.type();

}

let skills = [
  {
    name: 'html',
    percent: 85,
  },
  {
    name: 'css',
    percent: 93,
  },
  {
    name: 'js',
    percent: 70,
  },
  {
    name: 'angular',
    percent: 65,
  },

];

skills.forEach((value, index) => {
  let snippet = `
                  <div class="box">

                    <div class="skill-name">
                        <h5>${skills[index].name}</h5>
                        <p>${skills[index].percent}%</p>
                    </div>
                    <div class="progress-bar">
                        <div class="progressbar-value" style="width: ${skills[index].percent}%"></div>
                    </div>

                </div>
                  `;

  document.querySelector('.skill-wrapper').innerHTML += snippet;
});

let services = [
  {
    name: 'web design',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.',
    icon: 'fas fa-desktop',
  },
  {
    name: 'WEB DEVELOPMENT',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.',
    icon: 'fas fa-code',
  },
  {
    name: 'PHOTOGRAPHY',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.',
    icon: 'fas fa-camera',
  },
  {
    name: 'RESPONSIVE DESIGN',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.',
    icon: 'fas fa-mobile',
  },
  {
    name: 'GRAPHIC DESIGN',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.',
    icon: 'fas fa-paint-brush',
  },
  {
    name: 'MARKETING SERVICES',
    body: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni adipisci eaque autem fugiat! Quia, provident vitae! Magni tempora perferendis eum non provident.',
    icon: 'fas fa-poll',
  },
];

services.forEach((value, index) => {

  let snippet = `
                
                <div class="box box-shadow-card">

                <div class="icon-wrapper icon-box">
                    <i class="${value.icon}"></i>
                </div>
                <h3 class="title">
                    ${value.name}
                </h3>
                <p>${value.body}</p>

            </div>
                
                `;

  document.getElementById('a3').
      querySelector('.wrapper').
      querySelector('.bottom-section').innerHTML += snippet;

});

let achievements = [
  {
    count: 450,
    name: 'WORKS COMPLETED',
    icon: 'fas fa-check',
  },
  {
    count: 15,
    name: 'YEARS OF EXPERIENCE',
    icon: 'fas fa-calendar',
  },
  {
    count: 550,
    name: 'TOTAL CLIENTS',
    icon: 'fas fa-users',
  },
  {
    count: 36,
    name: 'AWARD WON',
    icon: 'fas fa-award',
  },
];

achievements.forEach((value, index) => {

  let snippet = `
                
                <div class="box">

                    <div class="icon-wrapper">
                        <i class="${value.icon}"></i>
                    </div>
                    <h3>${value.count}</h3>
                    <p>${value.name}</p>
        
                </div>
                
                `;

  document.getElementById('a4').querySelector('.wrapper').innerHTML += snippet;

});

let portfolio = [
  {
    image: 'image4.jpg',
    title: 'Lorem impsum dolor',
  },
  {
    image: 'image5.jpg',
    title: 'Loreda Cuno Nere',
  },
  {
    image: 'image6.jpg',
    title: 'Lorem impsum dolor',
  },
  {
    image: 'image7.jpg',
    title: 'Lorem impsum dolor',
  },
  {
    image: 'image8.jpg',
    title: 'Lorem impsum dolor',
  },
  {
    image: 'image9.jpg',
    title: 'Lorem impsum dolor',
  },
];

portfolio.forEach((value, index) => {

  let snippet = `
                
                <div class="box box-shadow-card">
                
                    <div class="img-wrapper">
                        <div class="card-image" style="background-image: url(assets/images/${value.image})"></div>
                    </div>

    
                    <div class="card-body">
                        <h3>${value.title}</h3>
                        <p>web design / 18 oct 2018</p>
                    </div>
    
    
                </div>
                
                
                `;

  document.getElementById('a5').
      querySelector('.bottom-section').innerHTML += snippet;

});

let blogs = [
  {
    image: 'image12.jpg',
    title: 'See more ideas about Travel',
    body: 'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
    user: 'morgan freeman',
    time: 10,
    about: 'web design',
    userphoto: 'image2.jpg',
  },
  {
    image: 'image13.jpg',
    title: 'See more ideas about Travel',
    body: 'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
    user: 'morgan freeman',
    time: 10,
    about: 'web design',
    userphoto: 'image2.jpg',
  },
  {
    image: 'image14.jpg',
    title: 'See more ideas about Travel',
    body: 'Proin eget tortor risus. Pellentesque in ipsum id orci porta dapibus. Praesent sapien massa, convallis a pellentesque nec, egestas non nisi.',
    user: 'morgan freeman',
    time: 10,
    about: 'web design',
    userphoto: 'image2.jpg',
  },

];

blogs.forEach((value, index) => {

  let snippet = `
                
                <div class="box box-shadow-card">

                <div class="card-image" style="background-image: url(assets/images/${value.image})"></div>

                <div class="card-body">

                    <button type="button">${value.about}</button>

                    <h3>${value.title}</h3>
                    <p>${value.body}</p>

                </div>

                <div class="card-footer">

                    <div class="info">
                        <div class="profile-img" style="background-image: url(assets/images/${value.userphoto})"></div>
                        <h4>${value.user}</h4>
                    </div>

                    <div class="time">
                        <i class="far fa-clock"></i>
                        <p>${value.time} min</p>
                    </div>

                </div>


            </div>
                
                `;

  document.getElementById('a7').
      querySelector('.bottom-section').innerHTML += snippet;

});

let moveup = document.getElementById('moveuparrow');

document.addEventListener('scroll', ev => {
  let desktopheader1 = document.querySelector('.desktop-header1');
  let desktopheader2 = document.querySelector('.desktop-header2');

  let mobileheader = document.getElementById('mobile-header');

  if (window.pageYOffset > 100) {
    // desktopheader1.style.display = 'none';

    desktopheader1.style.opacity = 0;
    desktopheader1.style.zIndex = -1;

    // desktopheader2.style.display = 'block';

    desktopheader2.style.opacity = 1;
    desktopheader2.style.zIndex = 1023;

    // moveup.style.display = 'flex';
    moveup.style.opacity = 1;

    mobileheader.style.backgroundColor = '#fff';
    mobileheader.style.padding = '1rem 0';
    document.getElementById('mobile-header').querySelector('.logo-wrapper').
        querySelector('a').style.color = '#0078ff';
    document.querySelector('.ham-wrapper').style.color = '#1e1e1e';

  } else {
    // desktopheader1.style.display = 'block';

    desktopheader1.style.opacity = 1;
    desktopheader1.style.zIndex = 1023;
    // desktopheader2.style.display = 'none';

    desktopheader2.style.opacity = 0;
    desktopheader2.style.zIndex = -1;

    // moveup.style.display = 'none';
    moveup.style.opacity = 0;

    mobileheader.style.backgroundColor = 'transparent';
    mobileheader.style.padding = '2rem 0';
    document.getElementById('mobile-header').querySelector('.logo-wrapper').
        querySelector('a').style.color = '#fff';
    document.querySelector('.ham-wrapper').style.color = '#fff';

  }

});

moveup.addEventListener('click', ev => {
  window.scrollTo(0, 0);
});

let a = document.querySelector('body');
a.addEventListener('mouseenter', evt => {

  if (evt.target.classList.contains('icon-box')) {

    if (evt.target.parentElement.parentElement.parentElement.parentElement.classList.contains(
        'contact')) {
      evt.target.style.border = '5px solid #cde1f8';
      evt.target.style.backgroundColor = '#0078ff';
      evt.target.style.color = '#fff';
    } else {
      evt.target.style.border = '10px solid #cde1f8';
      evt.target.style.backgroundColor = '#0078ff';
      evt.target.style.color = '#fff';
    }

  }
}, true);

a.addEventListener('mouseleave', evt => {

  if (evt.target.classList.contains('icon-box')) {

    if (evt.target.parentElement.parentElement.parentElement.parentElement.classList.contains(
        'contact')) {
      evt.target.style.border = '5px solid #0078ff';
      evt.target.style.backgroundColor = '#fff';
      evt.target.style.color = '#000';
    } else {
      evt.target.style.border = '10px solid #0078ff';
      evt.target.style.backgroundColor = '#fff';
      evt.target.style.color = '#000';
    }

  }
}, true);

let sidebartoggle = document.getElementById('header-wrapper');
sidebartoggle.addEventListener('click', ev => {

  let sidebar = document.getElementById('sidebar');

  if (ev.target.classList.contains('fa-bars')) {

    sidebar.style.height = '100vh';
    document.querySelector('body').style.overflow = 'hidden';

  } else if (ev.target.classList.contains('fa-times')) {

    sidebar.style.height = 0;
    document.querySelector('body').style.overflow = 'auto';
  }

});

let sidebarlinks = document.getElementById('sidebar').
    querySelector('.links-wrapper');
sidebarlinks.addEventListener('click', evt => {

  if (evt.target.tagName === 'A') {
    evt.target.parentElement.parentElement.parentElement.parentElement.style.height = 0;
    document.querySelector('body').style.overflow = 'auto';
  }

});

let sliderdata = [
  {
    photo: 'image11',
    name: 'Marta Socrate',
    message: 'CLorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    photo: 'image15',
    name: 'Xavi Alonso',
    message: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
  },
];

let count = 1;
setInterval(() => {

  renderSlidercontent(count);

  count++;
  if (count > sliderdata.length - 1) {
    count = 0;
  }

}, 4000);

function renderSlidercontent(count) {

  let snippet = `
                  <div class="img-wrapper" style="background-image: url(assets/images/${sliderdata[count].photo}.jpg)"></div>

                  <div class="content">
          
                      <h3>${sliderdata[count].name}</h3>
                      <p>${sliderdata[count].message}</p>
          
                  </div>
          
                  <div class="icon-wrapper">
          
                      <i class="fas fa-quote-right"></i>
          
          
                  </div>
                  
                  `;

  document.getElementById('a6').querySelector('.wrapper').innerHTML = snippet;

}
