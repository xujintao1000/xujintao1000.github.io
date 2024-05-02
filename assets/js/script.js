'use strict';


// 声明变量

// 姓名，个人标签1，个人标签2，
const my_info = ["徐锦涛", "编程开发人员 / 计算机工程背景", "摄影爱好者 / DIY台式机爱好者",]
// 导航栏
const js_sidebar_title = ["主页", "简历", "文档", "个人经历", "联系方式"]



document.getElementById('my_name').textContent = my_info[0];
document.getElementById('my_tag_1').textContent = my_info[1];
document.getElementById('my_tag_2').textContent = my_info[2];


// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {

    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;

    testimonialsModalFunc();

  });

}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);



// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



document.getElementById('sidebar_title_1').textContent = js_sidebar_title[0];
document.getElementById('sidebar_title_2').textContent = js_sidebar_title[1];
document.getElementById('sidebar_title_3').textContent = js_sidebar_title[2];
document.getElementById('sidebar_title_4').textContent = js_sidebar_title[3];
document.getElementById('sidebar_title_5').textContent = js_sidebar_title[4];

document.getElementById('article_title_1').setAttribute('data-page', js_sidebar_title[0]);
document.getElementById('article_title_2').setAttribute('data-page', js_sidebar_title[1]);
document.getElementById('article_title_3').setAttribute('data-page', js_sidebar_title[2]);
document.getElementById('article_title_4').setAttribute('data-page', js_sidebar_title[3]);
document.getElementById('article_title_5').setAttribute('data-page', js_sidebar_title[4]);


// page navigation variables
const navigationLinks =document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        // window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// 获取图片和模态框元素
// var img = document.getElementById('myImage');

var certificateImgSrc = document.querySelectorAll('[certificate-img-src]');
var imageModalImg = document.querySelector('.image-modal-content img');
var modal = document.getElementById('myModal');

// add click event to all modal items
for (let i = 0; i < certificateImgSrc.length; i++) {
  certificateImgSrc[i].addEventListener("click", function () {
    modal.style.display = "block";
    imageModalImg.src = this.src; // 将模态框中的图片源设置为被点击的图片源

  });

}

// 获取关闭按钮并为其添加点击事件监听器
var span = document.getElementsByClassName("image-close")[0];
span.onclick = function() { 
    modal.style.display = "none";
}

var modalImage = document.querySelector(".modal-content-image");
// 设置弹窗内图片的宽度
function setModalImageWidth() {
  
  // 将图片宽度设置为弹窗内容宽度的90%（或根据需要调整比例）
  // 获取当前页面宽度
  const pageWidth = window.innerWidth;
  // var modalContentWidth = document.querySelector(".image-modal-content").clientWidth;
  modalImage.style.width = pageWidth * 0.8 + 'px';
}

// 当窗口大小调整时，更新图片宽度
window.addEventListener('resize', setModalImageWidth);
