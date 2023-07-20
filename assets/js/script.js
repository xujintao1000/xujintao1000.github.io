'use strict';



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

const clubImage = document.querySelectorAll("[mainpage-club-image]")




// modal toggle function
const testimonialsModalFunc = function () {
  
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {

  testimonialsItem[i].addEventListener("click", function () {
    
    for (let j = 0; j < clubImage.length; j++) {
      console.log("value i")
      console.log(i)
      console.log("value j")
      console.log(j)
      if(i===j){
        clubImage[j].style.display = "block";
      } else {
        clubImage[j].style.display = "none";
      }
    }
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



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");
const pages_CN = ["主页", "简历", "文档", "English/中文"]
// const pages_CN = document.querySelectorAll("[data-page-CN]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    console.log(this.innerHTML.toLowerCase())
    console.log(pages[i].dataset.page)
    for (let i = 0; i < pages.length; i++) {
      if ((this.innerHTML.toLowerCase() === pages[i].dataset.page) || this.innerHTML.toLowerCase()===pages_CN[i]) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else if(this.innerHTML.toLowerCase() === "english" || this.innerHTML.toLowerCase() === "中文"){
        console.log("切换中文")
      } else {
        // pages[i].classList.remove("active");
        // navigationLinks[i].classList.remove("active");
        if(typeof navigationLinks[i] === 'undefined'){
          continue;
        } else {
          pages[i].classList.remove("active");
          navigationLinks[i].classList.remove("active");
        }
      }
    }

  });
}






// 切换中英文
var my_language=false; // true:英文， false：中文;

const switchLanguage = function () { 
  // console.log("优秀");
  var js_show_my_contact = document.getElementById("show_my_contact");
  var js_nav_bar_1 =  document.getElementById("About");
  var js_nav_bar_2 =  document.getElementById("Resume");
  var js_nav_bar_3 =  document.getElementById("Portfolio");
  // var js_nav_bar_4 =  document.getElementById("nav_bar_4");
  // var js_nav_bar_5 =  document.getElementById("Contact");
  // var js_nav_bar_6 =  document.getElementById("English/中文");


  // sidebar
  var js_name =  document.getElementById("my_name");
  var js_title_tag_1 =  document.getElementById("title_tag_1"); 
  var js_title_tag_2 =  document.getElementById("title_tag_2"); 
  // var js_title_tag_3 =  document.getElementById("title_tag_2"); 
  var js_email = document.getElementById("my_email");
  var js_phone = document.getElementById("my_phone");
  var js_birthday = document.getElementById("my_birthday");
  var js_my_birthday_date = document.getElementById("my_birthday_date");
  var js_location = document.getElementById("my_location");
  var js_location_detail = document.getElementById("my_location_detail");

  var js_about_myself = document.getElementById("about-about-myself");

  // sideBar-----end
  // main page
  var js_my_intro = document.getElementById("my_intro");
  var js_second_subtitle = document.getElementById("second_subtitle");
  var js_second_subtitle_1 = document.getElementById("second_subtitle_1");
  var js_second_subtitle_2 = document.getElementById("second_subtitle_2");
  var js_second_subtitle_3 = document.getElementById("second_subtitle_3");
  var js_second_subtitle_4 = document.getElementById("second_subtitle_4");
  var js_second_subtitle_5 = document.getElementById("second_subtitle_5");
  var js_second_subtitle_1_text = document.getElementById("second_subtitle_1_text");
  var js_second_subtitle_2_text = document.getElementById("second_subtitle_2_text");
  var js_second_subtitle_3_text = document.getElementById("second_subtitle_3_text");
  var js_second_subtitle_4_text = document.getElementById("second_subtitle_4_text");
  var js_second_subtitle_5_text = document.getElementById("second_subtitle_5_text");


  var js_third_subtitle = document.getElementById("third_subtitle");
  var js_third_subtitle_1_text = document.getElementById("third_subtitle_1_text");
  var js_third_subtitle_2_text = document.getElementById("third_subtitle_2_text");
  var js_third_subtitle_3_text = document.getElementById("third_subtitle_3_text");
  var js_third_subtitle_4_text = document.getElementById("third_subtitle_4_text");

  var js_fourth_subtitle = document.getElementById("fourth_subtitle");

  // resume
  var js_resume_page = document.getElementById("resume_page");
  var js_resume_page_title_1 = document.getElementById("resume_page_title_1");
  
  var js_education_1 = document.getElementById("education_1");
  var js_education_1_time = document.getElementById("education_1_time");
  var js_education_1_text = document.getElementById("education_1_text");
  var js_education_2 = document.getElementById("education_2");
  var js_education_2_time = document.getElementById("education_2_time");
  var js_education_2_text = document.getElementById("education_2_text");
  var js_education_3 = document.getElementById("education_3");
  var js_education_3_time = document.getElementById("education_3_time");
  var js_education_3_text = document.getElementById("education_3_text");

  var js_my_project_1 = document.getElementById("my_project_1");
  var js_my_project_2 = document.getElementById("my_project_2");
  var js_my_project_3 = document.getElementById("my_project_3");
  var js_my_project_4 = document.getElementById("my_project_4");
  var js_my_project_1_text = document.getElementById("my_project_1_text");
  var js_my_project_2_text = document.getElementById("my_project_2_text");
  var js_my_project_3_text = document.getElementById("my_project_3_text");
  var js_my_project_4_text = document.getElementById("my_project_4_text");
  var js_my_project_1_time = document.getElementById("my_project_1_time");
  var js_my_project_2_time = document.getElementById("my_project_2_time");
  var js_my_project_3_time = document.getElementById("my_project_3_time");
  var js_my_project_4_time = document.getElementById("my_project_4_time");

  var js_my_skill_level = document.getElementById("my_skill_level");
  var js_my_skill_level_1 = document.getElementById("my_skill_level_1");
  var js_my_skill_level_2 = document.getElementById("my_skill_level_2");
  var js_my_skill_level_3 = document.getElementById("my_skill_level_3");
  var js_my_skill_level_4 = document.getElementById("my_skill_level_4");
  var js_my_skill_level_5 = document.getElementById("my_skill_level_5");

  var portfolio = document.getElementById("portfolio");
  var project_experience = document.getElementById("project_experience");

  if(my_language == true){
    js_show_my_contact.innerHTML = "Show Contact";

    js_nav_bar_1.innerHTML="About";
    js_nav_bar_2.innerHTML="Resume";
    js_nav_bar_3.innerHTML="Portfolio";
    // js_nav_bar_4.innerHTML="Blog";
    // js_nav_bar_5.innerHTML="Contact";
    // js_nav_bar_6.innerHTML="切换中文";


    js_name.innerHTML="Jintao Xu";
    js_title_tag_1.innerHTML="New ECE Bachelor's Degree Students";
    js_title_tag_2.innerHTML="Seeking Full-Time Software Engineer Job";
    // js_title_tag_3.innerHTML="C, C++, Python, SQL, Matlab, Verilog";
    js_email.innerHTML="EMAIL";//改变内容
    js_phone.innerHTML="PHONE";
    js_birthday.innerHTML="BIRTHDAY";
    js_my_birthday_date.innerHTML="Nov, 1999";
    js_location.innerHTML="LOCATION";
    js_about_myself.innerText="About Me";
    js_location_detail.innerHTML="Toronto, ON., Canada";
    js_my_intro.innerHTML = "Hello, nice to meet you! I am a programmer with proficiency in various programming software and operating systems, allowing me to adapt to different programming environments. My programming journey started with C and C++, and I have continuously expanded my knowledge by taking courses and exploring different programming languages and environments.<br><br>I have experience working with languages such as Python, Processing, Java, Verilog, and technologies like Git, SQL, HTML, CSS, JavaScript, Markdown, WXML, and XML. In each of these environments, I have completed meaningful projects that have further honed my skills.";
    js_second_subtitle.innerHTML = "What I'm Doing";

    js_second_subtitle_1.innerHTML = "Software";
    js_second_subtitle_2.innerHTML = "Programming";
    js_second_subtitle_3.innerHTML = "Operating System (OS)";
    js_second_subtitle_4.innerHTML = "Machine Learning";
    js_second_subtitle_5.innerHTML = "Hardware";
    
    js_second_subtitle_1_text.innerHTML = "Extensive software background, adept in various programming languages and tools.";
    js_second_subtitle_2_text.innerHTML = "Proficient in managing databases, and ensuring data integrity for successful project outcomes.";
    js_second_subtitle_3_text.innerHTML = "Skilled in navigating and optimizing various operating systems to ensure seamless software development.";
    js_second_subtitle_4_text.innerHTML = "Applied AI algorithms to analyze data, driving insights decision-making for impactful projects.";
    js_second_subtitle_5_text.innerHTML = "Proficient in hardware design, testing, and troubleshooting, contributing to the implementation projects.";

    js_third_subtitle.innerHTML = "Club & Internship Experience";
    js_third_subtitle_1_text.innerHTML = "UTRA is the face of robotics at the University of Toronto (U of T). We design and build robots to compete in international competitions like RoboGames and the Intelligent Ground Vehicle Competition, among others. We have five different subteams that work independently and also host talks and workshops. Our mission is to foster interest in robotics and teach anybody who is interested all that they need to know to be able to contribute.";
    js_third_subtitle_2_text.innerHTML = "University of Toronto Application Development Association (UTADA). As the core department with the largest number of people in UTADA, the Technology Department is the origin of Development in the name of the club. The department has only one main job, which is to develop software or web pages for different platforms. In terms of project selection, the projects developed by the technical department are also divided into community-related content and project teams led by members.";
    js_third_subtitle_3_text.innerHTML = "Google Developer Student Clubs are university based community groups for students interested in Google developer technologies. Students from all undergraduate or graduate programs with an interest in growing as a developer are welcome. By joining a GDSC, students grow their knowledge in a peer-to-peer learning environment and build solutions for local businesses and their community.";
    js_third_subtitle_4_text.innerHTML = "During my tenure at Shenzhen Jinling Electronics Co., Ltd as an IT Project Manager from June 2021 to August 2022, I had the opportunity to contribute to several key projects and fulfill various responsibilities.";

    js_fourth_subtitle.innerHTML = "Certificate";

    js_resume_page.innerHTML = "Resume";
    js_resume_page_title_1.innerHTML = "Education";
    js_education_1.innerHTML = "University of Toronto - Bachelor of Applied Science <br> (Minor in Artificial Intelligence Engineering)";
    js_education_1_time.innerHTML = "2018.Sep — 2021.May and 2022.Sep — 2023.May";
    js_education_1_text.innerHTML = "The University of Toronto's Electrical and Computer Engineering (ECE) program is a highly regarded and comprehensive program that offers a wide range of courses and research opportunities in the fields of electrical engineering and computer engineering.";

    js_education_2.innerHTML = "University Of Toronto - International Foundation Program";
    js_education_2_time.innerHTML = "2017.Sep — 2018.May";
    js_education_2_text.innerHTML = "The International Foundation Program (IFP) is a unique offering that combines conditional acceptance to the University of Toronto with intensive English language and academic skills development instruction, combined with for-credit courses.";

    js_education_3.innerHTML = "SHENZHEN (NANSHAN) CONCORD COLLEGE OF SINO CANADA";
    js_education_3_time.innerHTML = "2014.Sep — 2017.Sep";
    js_education_3_text.innerHTML = "Shenzhen (Nanshan) Concord College of Sino-Canada is a private, bilingual Chinese-Canadian high school located in Shenzhen’s Nanshan district. SCCSC offers a dual diploma program to its more than 900 grade 10, 11, and 12 students. SCCSC students graduate with both a Chinese high school diploma and a Canadian high school diploma from the province of New Brunswick, Canada";

    js_my_project_1.innerHTML = "GIS Map Software Design Project";
    js_my_project_2.innerHTML = "Garbage Classification Design";
    js_my_project_3.innerHTML = "FPGA Software Design Project";

    js_my_project_1.innerHTML = "GIS Map Software Design Project (C/C++)";
    js_my_project_2.innerHTML = "Garbage Classification Design (AI)";
    js_my_project_3.innerHTML = "FPGA Hardware Design Project (Verilog)";
    js_my_project_4.innerHTML = "International Airport Database Management Project (SQL)";

    js_my_project_1_time.innerHTML = "2019.Sep — 2020.May";
    js_my_project_2_time.innerHTML = "2021.Jan — 2021.Mayn";
    js_my_project_3_time.innerHTML = "2020.Jan — 2020.May";
    js_my_project_4_time.innerHTML = "2021.Jan — 2021.May";


    
    js_my_project_1_text.innerHTML = "<b><u>Project goal:</u></b> Use C++ to design The GIS map software; The purpose of which is to provide users with &quot;search functions&quot; such as road location search, shortest path search, etc. <br> <b><u>Project description:</u></b> Import the Open Street Map data into the class, and use the object-oriented method to display the data step by step on the main user interface. Use the A* algorithm to search in both directions to find the shortest path. <br> <b><u> Project Responsibilities:</b></u> Responsible for team building, reasonable project layout, and assignment of tasks. In the project, I responsible for data structure and data visualization design; data algorithm analysis and design; user feedback time optimization design;";
    js_my_project_2_text.innerHTML =  "<b><u>Project goal:</u></b> Design software which is able to identify and classify common household garbage. <br> <b><u>Project description:</u></b> Carry out deep learning model training on existing data (40 types of garbage); Use Data Augmentation method to expand the data, and classify it into training set and test set; Make garbage classification model according to the principle of ResNet model; Constantly update super Parameters (number of model layers, mini-batch size, activation function, loss function) to increase the accuracy of training. <br> <b><u> Project Responsibilities:</b></u> I&apos;m primary Responsible for data augmentation, model building and testing.";
    js_my_project_3_text.innerHTML = "<b><u>Introduction:</b></u> A field-programmable gate array (FPGA) is an integrated circuit designed to be configured after manufacturing. The FPGA configuration is generally specified using a hardware description language (Verilog). Within this project, we are mainly used DE1_SoC Board to configure the project. <br> <b><u>Project goal:</u></b> Airplane Avoiding Obstacle project applied on DE1_SoC Board <br> <b><u>Project description:</u></b> We are trying to make an interesting game called “Moving Plane” for this project. The purpose of the game is to control the plane up and down to avoid coming walls. Users can collect 1 point by passing through the wall each time. Besides, the plane will be changed if the users hit the coin. the colour of the wall will be changed whenever the user is collecting 10 points. If the plane hits the wall, the game is over, and the user can press any KEY to start again. Below lists more detail of operating the &quot;Moving Plane&quot; game. <b><u> Project Responsibilities:</b></u> In this project, I am mainly responsible for the movement, touch, and upgrade of the aircraft. In addition, I am also responsible for adjusting the speed of the entire project and adjusting the setting of random obstacles in the game to ensure that the entire project can be fully implemented on FPGA. <br>";
    js_my_project_4_text.innerHTML = "<b><u>Introduction:</b></u> In this project, I developed an database file that utilizes an extensive international airports database to efficiently determine the most suitable flight options, including single or multiple transfer flights, tailored to each passenger's preferences and requirements. <br> <b><u>Project goal:</u></b> The primary goal of this project was to create a sophisticated database system that optimizes flight planning by utilizing passenger preferences and real-time airport data to recommend the most appropriate flight options. <br> <b><u>Project description:</u></b> The project involved designing and implementing a dynamic and scalable database, integrating passenger profiles, airport information, and aircraft capabilities to generate personalized flight recommendations for passengers based on their preferences and the available flight data. <br> <b><u> Project Responsibilities:</b></u> As a key member of the project team, my responsibilities included designing the database schema, developing SQL queries, implementing algorithms for flight optimization, and ensuring data accuracy and integrity throughout the project's lifecycle. <br>";
    

    js_my_skill_level.innerHTML = "My Skill";
    js_my_skill_level_1.innerHTML = "Software Programming(C/C++/Python/Matlab)";
    js_my_skill_level_2.innerHTML = "Software Programming(Arduino/Processing/PyQt/Verilog/Java)";
    js_my_skill_level_3.innerHTML = "Database(MySQL,Server,Git)";
    js_my_skill_level_4.innerHTML = "Network(Multi-Threading, Operating System, TCP/IP)";
    js_my_skill_level_5.innerHTML = "Hardware(PC Assembly, Verilog)";

    portfolio.innerHTML = "portfolio";
    project_experience.innerHTML = "Project Experience";

  } else {
    js_show_my_contact.innerHTML = "显示联络方式";

    js_nav_bar_1.innerHTML="主页";
    js_nav_bar_2.innerHTML="简历";
    js_nav_bar_3.innerHTML="文档";
    // js_nav_bar_4.innerHTML="Blog";
    // js_nav_bar_5.innerHTML="联系";
    // js_nav_bar_6.innerHTML="Engligh language";

    js_name.innerHTML="徐锦涛";
    js_title_tag_1.innerHTML="应用科学学士学位（辅修：人工智能工程）";
    js_title_tag_2.innerHTML="寻找全职软件工程师工作";
    // js_title_tag_3.innerHTML="C, C++, Python, SQL, Matlab, Verilog";
    js_email.innerHTML="邮箱";//改变内容
    js_phone.innerHTML="手机";
    js_birthday.innerHTML="生日";
    js_my_birthday_date.innerHTML = "1999年，11月";
    js_location.innerHTML="地址";
    js_about_myself.innerText="我的介绍";
    js_location_detail.innerHTML="深圳, 广东, 中国";
    js_my_intro.innerHTML = "你好！很高兴认识你！我是一名程序员，拥有广泛的编程软件和操作系统的经验，这使我能够在不同的编程环境中游刃有余。我的编程之旅始于C和C++，通过学习课程和深入探索各种编程语言和环境，我不断扩展自己的知识。<br><br>我熟练运用Python、Processing、Java、Verilog等编程语言，也掌握了Git、SQL、HTML、CSS、JavaScript、Markdown、WXML和XML等技术。在各种编程环境中，我都成功地完成了有意义的项目，这些项目进一步磨练了我的技能。<br><br> 在我的编程旅程中，我不断挑战自我，不断学习新知识，以不断提高自己的技能水平。我对编程充满热爱，愿意用我的技能来解决问题并创造有意义的作品。期待能够与您一起探索更多的编程世界！";
    js_second_subtitle.innerHTML = "追求卓越"; 


  
    js_second_subtitle_1.innerHTML = "软件";
    js_second_subtitle_2.innerHTML = "编程";
    js_second_subtitle_3.innerHTML = "操作系统 (OS)";
    js_second_subtitle_4.innerHTML = "机器学习";
    js_second_subtitle_5.innerHTML = "硬件";

    js_second_subtitle_1_text.innerHTML = "拥有广泛的软件经历，熟练掌握多种编程语言和工具，深入探索不同的编程环境，不断拓展技能。";
    js_second_subtitle_2_text.innerHTML = "熟练管理数据库，执行高效查询，确保数据完整性。积极解决数据相关挑战，提高业务效率和数据质量。";
    js_second_subtitle_3_text.innerHTML = "熟练操作多种操作系统，优化系统性能，确保软件开发流畅。熟悉处理各类系统问题。";
    js_second_subtitle_4_text.innerHTML = "具备深度学习与神经网络背景，熟练应用各类算法解决复杂问题，实践并优化智能化模型。";
    js_second_subtitle_5_text.innerHTML = "熟练设计单片机系统，精通集成线路测试与故障排除，";
    
    js_third_subtitle.innerHTML = "社团&实习经历";
    js_third_subtitle_1_text.innerHTML = "UTRA是多伦多大学（U of T）机器人领域的社团。是设计和制造机器人，参加国际竞赛，如RoboGames和智能地面车辆竞赛等。社团有五个不同的子团队独立工作，并举办讲座和工作坊。该社团的使命是培养对机器人技术的兴趣，并教授任何有兴趣的人所需的知识，以便他们能够做出贡献。";
    js_third_subtitle_2_text.innerHTML = "多伦多大学应用开发协会（UTADA）。作为UTADA人数最多的核心部门，技术部门是俱乐部名称下发展的起源。该部门只有一项主要工作，即为不同平台开发软件或网页。在项目选择上，技术部门开发的项目也分为社区相关内容和成员领导的项目团队。";
    js_third_subtitle_3_text.innerHTML = "谷歌开发者学生俱乐部是以大学为基础的社区团体，面向对谷歌开发者技术感兴趣的学生。欢迎来自所有本科生或研究生项目的学生，他们有兴趣成为一名开发人员。通过加入GDSC，学生们可以在对等学习环境中增长知识，并为当地企业及其社区构建解决方案。";
    js_third_subtitle_4_text.innerHTML = "2021年6月至2022年8月，我在深圳锦凌电子有限公司担任市场网络项目经理期间，有机会为几个关键项目做出贡献，并履行各种职责。";
    
    js_fourth_subtitle.innerHTML = "证书";

    // 简历
    js_resume_page.innerHTML = "简历";
    js_resume_page_title_1.innerHTML = "教育背景";

    js_education_1.innerHTML = "多伦多大学应用科学学士学位<br>（辅修：人工智能工程）";
    js_education_1_time.innerHTML = "2018年.9月-2021年.5月 以及 2022年.9月-2023年.5月";
    js_education_1_text.innerHTML = "多伦多大学（University of Toronto）的电子与计算机工程（Electrical and Computer Engineering，ECE）专业是一门卓越的工程学科，为学生提供广泛的学术和研究机会，涵盖了电子工程和计算机工程的多个领域。";

    js_education_2.innerHTML = "多伦多大学-IFP";
    js_education_2_time.innerHTML = "2017年.9月 — 2018年.5月";
    js_education_2_text.innerHTML = "多伦多大学（University of Toronto）的电子与计算机工程（Electrical and Computer Engineering，ECE）专业是一门卓越的工程学科，为学生提供广泛的学术和研究机会，涵盖了电子工程和计算机工程的多个领域。";

    js_education_3.innerHTML = "深圳（南山）中加学校";
    js_education_3_time.innerHTML = "2014年.9月 — 2017年.9月";
    js_education_3_text.innerHTML = "深圳（南山）中加协和学院是一所私立中加双语高中，位于深圳市南山区。SCCSC为900多名10年级、11年级和12年级的学生提供双文凭课程。SCCSC学生毕业于加拿大新不伦瑞克省，同时获得中国高中文凭和加拿大高中文凭。";

    
    js_my_project_1.innerHTML = "GIS (Map) 可视化地图软件设计项目 (C/C++)";
    js_my_project_2.innerHTML = "垃圾分类深度学习模型设计 (神经网络)";
    js_my_project_3.innerHTML = "FPGA 硬件编程项目 (Verilog)";
    js_my_project_4.innerHTML = "国际机场数据库管理项目 (SQL)";

    js_my_project_1_time.innerHTML = "2019年9月 — 2020年5月";
    js_my_project_2_time.innerHTML = "2021年1月 — 2021年5月";
    js_my_project_3_time.innerHTML = "2020年1月 — 2020年5月";
    js_my_project_4_time.innerHTML = "2021年1月 — 2021年5月";

    js_my_project_1_text.innerHTML = "<b><u>项目目标：</b></u> 使用C++设计GIS地图软件； 其目的是为用户提供“搜索功能”； 例如道路位置搜索、最短路径搜索等。<br> <b><u>项目描述：</b></u> 将Open Street Map数据导入到该类中，并使用面向对象的方法将数据逐步显示在主用户界面上。 使用A*算法在两个方向上搜索，找到最短路径。<br> <b><u>项目职责：</b></u>负责团队建设、合理项目布局、任务分配。 在项目中，我负责数据结构和数据可视化设计； 数据算法分析与设计； 用户反馈时间优化设计";
    js_my_project_2_text.innerHTML = "<b><u>项目目标：</b></u> 设计能够对常见生活垃圾进行识别和分类的软件。<br> <b><u>项目描述：</b></u> 对现有数据（40类垃圾）进行深度学习模型训练； 使用Data Augmentation方法扩充数据，并将其分为训练集和测试集； 根据ResNet模型原理制作垃圾分类模型； 不断更新超级参数（模型层数、mini-batch大小、激活函数、损失函数）以增加训练的准确性。<br> <b><u>项目职责：</b></u> 主要负责数据增强、模型构建和测试。<br>"; 
    js_my_project_3_text.innerHTML = "<b><u>简介：</b></u>现场可编程门阵列 (FPGA) 是一种设计为在制造后进行配置的集成电路。 FPGA配置通常使用硬件描述语言（Verilog）来指定。 在本项目中，我们主要使用DE1_SoC Board来配置项目。<br> <b><u>项目目标：</b></u> 飞机避障项目应用于DE1_SoC Board <br> <b><u>项目描述：</b></u>我们正在尝试为这个项目制作一个有趣的游戏，名为“移动飞机”。 游戏的目的是控制飞机上下移动，避免撞来的墙壁。 用户每次穿过墙壁可以获得1点积分。 此外，如果用户击中硬币，飞机也会发生变化。 每当用户收集到 10 点时，墙壁的颜色就会改变。 如果飞机撞到墙壁，游戏就结束，用户可以按任意KEY重新开始。 下面列出了操作“移动飞机”游戏的更多细节。 <br> <b><u>项目职责：</b></u> 在这个项目中，我主要负责飞行器的移动、触控和升级。 另外，我还负责调整整个项目的速度以及调整游戏中随机障碍物的设置，以确保整个项目能够完全在FPGA上实现。<br>";
    js_my_project_4_text.innerHTML = "<b><u>简介：</b></u>在这个项目中，我开发了一个数据库文件，该文件利用广泛的国际机场数据库来有效地确定最合适的航班选择，包括根据每位乘客的喜好和要求量身定制的单次或多次转机航班。<br> <b><u>项目目标：</b></u> 该项目的主要目标是创建一个复杂的数据库系统，通过利用乘客偏好和实时机场数据推荐最合适的航班选项来优化航班计划。<br> <b><u>项目描述：</b></u> 该项目涉及设计和实施一个动态且可扩展的数据库，集成乘客资料、机场信息和飞机功能，根据乘客的偏好和可用的航班数据为乘客生成个性化的航班建议。<br> <b><u>项目职责：</b></u> 作为项目团队的关键成员，我的职责包括设计数据库模式、开发 SQL 查询、实施飞行优化算法以及确保整个项目生命周期中数据的准确性和完整性。<br>";

    js_my_skill_level.innerHTML = "我的技能评估";
    js_my_skill_level_1.innerHTML = "软件编程(C/C++/Python/Matlab)";
    js_my_skill_level_2.innerHTML = "软件编程(Arduino/Processing/PyQt/Verilog/Java)";
    js_my_skill_level_3.innerHTML = "数据库(MySQL,Server,Git)";
    js_my_skill_level_4.innerHTML = "网络(多线程, 操作系统, TCP/IP)";
    js_my_skill_level_5.innerHTML = "硬件(台式电脑组装, Verilog)";

    portfolio.innerHTML = "文档";
    project_experience.innerHTML = "项目经历";
  }

  if(my_language == true){
    my_language=false;
  }else{
    my_language=true;
  }
  
}

const switch_language = document.querySelector("[switch-language]");
switch_language.addEventListener("click", switchLanguage);






const zoomin_image = document.querySelectorAll("[zoom-image]");
for (let i = 0; i < zoomin_image.length; i++) {
  zoomin_image[i].addEventListener("click", function() {
    console.log("image 进来啦");
    navigationLinks[i].classList.add("fullsize")
  });
}
// zoom in image
