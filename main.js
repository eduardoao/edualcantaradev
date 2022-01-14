(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
/*!**************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-navbar></app-navbar>\r\n<router-outlet></router-outlet>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/blog/blog.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/blog/blog.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"latest-blog-section p-3 p-lg-5\">\r\n  <div class=\"container\">\r\n    <h2 class=\"section-title font-weight-bold mb-5\">Últimas Postagens</h2>\r\n    <div class=\"row\">\r\n      <div *ngFor=\"let feed of feeds | slice: 0:3\" class=\"col-md-4 mb-5\">\r\n        <div class=\"card blog-post-card\">\r\n          <img class=\"card-img-top\" [src]=\"feed.thumbnail\" alt=\"image\" />\r\n          <div class=\"card-body\">\r\n            <h5 class=\"card-title\">\r\n              <a class=\"theme-link\" href=\"blog-post.html\">{{ feed.title }}</a>\r\n            </h5>\r\n            <p class=\"card-text\">{{ feed.description.substring(0, 300) }}...</p>\r\n            <p class=\"mb-0\">\r\n              <a class=\"more-link\" href=\"blog-post.html\"\r\n                >Continuar lendo &rarr;</a\r\n              >\r\n            </p>\r\n          </div>\r\n          <div class=\"card-footer\">\r\n            <small class=\"text-muted\">{{ feed.pubDate }}</small>\r\n          </div>\r\n        </div>\r\n        <!--//card-->\r\n      </div>\r\n    </div>\r\n    <!--//row-->\r\n    <div class=\"text-center py-3\">\r\n      <a href=\"https://medium.com/@lennonalvesdias\" target=\"_blank\" class=\"btn btn-primary\"\r\n        ><i class=\"fas fa-arrow-alt-circle-right mr-2\"></i>Ver Blog</a\r\n      >\r\n    </div>\r\n  </div>\r\n  <!--//container-->\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/me/me.component.html":
/*!************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/me/me.component.html ***!
  \************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"overview-section p-3 p-lg-5\">\r\n  <div class=\"container\">\r\n    <h2 class=\"section-title font-weight-bold mb-3\">What I do</h2>\r\n    <div class=\"section-intro mb-5\">\r\n      I have more than 10 years' experience building software for clients all\r\n      over the world. Below is a quick overview of my main technical skill sets\r\n      and technologies I use. Want to find out more about my experience? Check\r\n      out my <a href=\"resume.html\">online resume</a> and\r\n      <a href=\"portfolio.html\">project portfolio</a>.\r\n    </div>\r\n    <div class=\"row\">\r\n      <div class=\"item col-6 col-lg-3\">\r\n        <div class=\"item-inner\">\r\n          <div class=\"item-icon\"><i class=\"fab fa-js-square\"></i></div>\r\n          <h3 class=\"item-title\">Vanilla JavaScript</h3>\r\n          <div class=\"item-desc\">\r\n            List skills/technologies here. You can change the icon above to any\r\n            of the 1500+\r\n            <a\r\n              class=\"theme-link\"\r\n              href=\"https://fontawesome.com/\"\r\n              target=\"_blank\"\r\n              >FontAwesome 5 free icons</a\r\n            >\r\n            available. Aenean commodo ligula eget dolor.\r\n          </div>\r\n        </div>\r\n        <!--//item-inner-->\r\n      </div>\r\n      <!--//item-->\r\n      <div class=\"item col-6 col-lg-3\">\r\n        <div class=\"item-inner\">\r\n          <div class=\"item-icon\">\r\n            <i class=\"fab fa-angular mr-2\"></i><i class=\"fab fa-react mr-2\"></i\r\n            ><i class=\"fab fa-vuejs\"></i>\r\n          </div>\r\n          <h3 class=\"item-title\">Angular, React &amp; Vue</h3>\r\n          <div class=\"item-desc\">\r\n            List skills/technologies here. You can change the icon above to any\r\n            of the 1500+\r\n            <a\r\n              class=\"theme-link\"\r\n              href=\"https://fontawesome.com/\"\r\n              target=\"_blank\"\r\n              >FontAwesome 5 free icons</a\r\n            >\r\n            available. Aenean commodo ligula eget dolor.\r\n          </div>\r\n        </div>\r\n        <!--//item-inner-->\r\n      </div>\r\n      <!--//item-->\r\n\r\n      <div class=\"item col-6 col-lg-3\">\r\n        <div class=\"item-inner\">\r\n          <div class=\"item-icon\"><i class=\"fab fa-node-js\"></i></div>\r\n          <h3 class=\"item-title\">Node.js</h3>\r\n          <div class=\"item-desc\">\r\n            List skills/technologies here. You can change the icon above to any\r\n            of the 1500+\r\n            <a\r\n              class=\"theme-link\"\r\n              href=\"https://fontawesome.com/\"\r\n              target=\"_blank\"\r\n              >FontAwesome 5 free icons</a\r\n            >\r\n            available. Aenean commodo ligula eget dolor.\r\n          </div>\r\n        </div>\r\n        <!--//item-inner-->\r\n      </div>\r\n      <!--//item-->\r\n\r\n      <div class=\"item col-6 col-lg-3\">\r\n        <div class=\"item-inner\">\r\n          <div class=\"item-icon\"><i class=\"fab fa-python\"></i></div>\r\n          <h3 class=\"item-title\">Python &amp; Django</h3>\r\n          <div class=\"item-desc\">\r\n            List skills/technologies here. You can change the icon above to any\r\n            of the 1500+\r\n            <a\r\n              class=\"theme-link\"\r\n              href=\"https://fontawesome.com/\"\r\n              target=\"_blank\"\r\n              >FontAwesome 5 free icons</a\r\n            >\r\n            available. Aenean commodo ligula eget dolor.\r\n          </div>\r\n        </div>\r\n        <!--//item-inner-->\r\n      </div>\r\n      <!--//item-->\r\n      <div class=\"item col-6 col-lg-3\">\r\n        <div class=\"item-inner\">\r\n          <div class=\"item-icon\"><i class=\"fab fa-php\"></i></div>\r\n          <h3 class=\"item-title\">PHP</h3>\r\n          <div class=\"item-desc\">\r\n            List skills/technologies here. You can change the icon above to any\r\n            of the 1500+\r\n            <a\r\n              class=\"theme-link\"\r\n              href=\"https://fontawesome.com/\"\r\n              target=\"_blank\"\r\n              >FontAwesome 5 free icons</a\r\n            >\r\n            available. Aenean commodo ligula eget dolor.\r\n          </div>\r\n        </div>\r\n        <!--//item-inner-->\r\n      </div>\r\n      <!--//item-->\r\n      <div class=\"item col-6 col-lg-3\">\r\n        <div class=\"item-inner\">\r\n          <div class=\"item-icon\">\r\n            <i class=\"fab fa-npm mr-2\"></i><i class=\"fab fa-gulp mr-2\"></i\r\n            ><i class=\"fab fa-grunt\"></i>\r\n          </div>\r\n          <h3 class=\"item-title\">npm, Gulp &amp; Grunt</h3>\r\n          <div class=\"item-desc\">\r\n            List skills/technologies here. You can change the icon above to any\r\n            of the 1500+\r\n            <a\r\n              class=\"theme-link\"\r\n              href=\"https://fontawesome.com/\"\r\n              target=\"_blank\"\r\n              >FontAwesome 5 free icons</a\r\n            >\r\n            available. Aenean commodo ligula eget dolor.\r\n          </div>\r\n        </div>\r\n        <!--//item-inner-->\r\n      </div>\r\n      <!--//item-->\r\n      <div class=\"item col-6 col-lg-3\">\r\n        <div class=\"item-inner\">\r\n          <div class=\"item-icon\">\r\n            <i class=\"fab fa-html5 mr-2\"></i><i class=\"fab fa-css3-alt\"></i>\r\n          </div>\r\n          <h3 class=\"item-title\">HTML &amp; CSS</h3>\r\n          <div class=\"item-desc\">\r\n            List skills/technologies here. You can change the icon above to any\r\n            of the 1500+\r\n            <a\r\n              class=\"theme-link\"\r\n              href=\"https://fontawesome.com/\"\r\n              target=\"_blank\"\r\n              >FontAwesome 5 free icons</a\r\n            >\r\n            available. Aenean commodo ligula eget dolor.\r\n          </div>\r\n        </div>\r\n        <!--//item-inner-->\r\n      </div>\r\n      <!--//item-->\r\n      <div class=\"item col-6 col-lg-3\">\r\n        <div class=\"item-inner\">\r\n          <div class=\"item-icon\">\r\n            <i class=\"fab fa-sass mr-2\"></i><i class=\"fab fa-less\"></i>\r\n          </div>\r\n          <h3 class=\"item-title\">Sass &amp; LESS</h3>\r\n          <div class=\"item-desc\">\r\n            List skills/technologies here. You can change the icon above to any\r\n            of the 1500+\r\n            <a\r\n              class=\"theme-link\"\r\n              href=\"https://fontawesome.com/\"\r\n              target=\"_blank\"\r\n              >FontAwesome 5 free icons</a\r\n            >\r\n            available. Aenean commodo ligula eget dolor.\r\n          </div>\r\n        </div>\r\n        <!--//item-inner-->\r\n      </div>\r\n      <!--//item-->\r\n    </div>\r\n    <!--//row-->\r\n    <div class=\"text-center py-3\">\r\n      <a href=\"services.html\" class=\"btn btn-primary\"\r\n        ><i class=\"fas fa-arrow-alt-circle-right mr-2\"></i>Services &amp;\r\n        Pricing\r\n      </a>\r\n    </div>\r\n  </div>\r\n  <!--//container-->\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html":
/*!**************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html ***!
  \**************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"main-wrapper\">\r\n  <profile-resume [profile]=\"profile\"></profile-resume>\r\n  <!-- <profile-me></profile-me> -->\r\n  <div class=\"container\"><hr /></div>\r\n\r\n  <!-- <profile-testmonials></profile-testmonials> -->\r\n  <!-- <div class=\"container\"><hr /></div> -->\r\n\r\n  <!-- <profile-projects></profile-projects> -->\r\n  <!-- <div class=\"container\"><hr /></div> -->\r\n\r\n  <profile-blog></profile-blog>\r\n  \r\n  <app-footer></app-footer>\r\n</div>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html":
/*!************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html ***!
  \************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"featured-section p-3 p-lg-5\">\r\n  <div class=\"container\">\r\n    <h2 class=\"section-title font-weight-bold mb-5\">Featured Projects</h2>\r\n    <div class=\"row\">\r\n      <div class=\"col-md-6 mb-5\">\r\n        <div class=\"card project-card\">\r\n          <div class=\"row no-gutters\">\r\n            <div class=\"col-lg-4 card-img-holder\">\r\n              <img\r\n                src=\"assets/images/project/project-1.jpg\"\r\n                class=\"card-img\"\r\n                alt=\"image\"\r\n              />\r\n            </div>\r\n            <div class=\"col-lg-8\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">\r\n                  <a href=\"project.html\" class=\"theme-link\">Project Heading</a>\r\n                </h5>\r\n                <p class=\"card-text\">\r\n                  Project intro lorem ipsum dolor sit amet, consectetuer\r\n                  adipiscing elit. Cum sociis natoque penatibus et magnis dis\r\n                  parturient montes.\r\n                </p>\r\n                <p class=\"card-text\">\r\n                  <small class=\"text-muted\">Client: Google</small>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"link-mask\">\r\n            <a class=\"link-mask-link\" href=\"project.html\"></a>\r\n            <div class=\"link-mask-text\">\r\n              <a class=\"btn btn-secondary\" href=\"project.html\">\r\n                <i class=\"fas fa-eye mr-2\"></i>View Case Study\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <!--//link-mask-->\r\n        </div>\r\n        <!--//card-->\r\n      </div>\r\n      <!--//col-->\r\n      <div class=\"col-md-6 mb-5\">\r\n        <div class=\"card project-card\">\r\n          <div class=\"row no-gutters\">\r\n            <div class=\"col-lg-4 card-img-holder\">\r\n              <img\r\n                src=\"assets/images/project/project-2.jpg\"\r\n                class=\"card-img\"\r\n                alt=\"image\"\r\n              />\r\n            </div>\r\n            <div class=\"col-lg-8\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">\r\n                  <a href=\"project.html\" class=\"theme-link\">Project Heading</a>\r\n                </h5>\r\n                <p class=\"card-text\">\r\n                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum\r\n                  sociis natoque penatibus et magnis dis parturient montes,\r\n                  nascetur ridiculus mus.\r\n                </p>\r\n                <p class=\"card-text\">\r\n                  <small class=\"text-muted\">Client: Dropbox</small>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"link-mask\">\r\n            <a class=\"link-mask-link\" href=\"project.html\"></a>\r\n            <div class=\"link-mask-text\">\r\n              <a class=\"btn btn-secondary\" href=\"project.html\">\r\n                <i class=\"fas fa-eye mr-2\"></i>View Case Study\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <!--//link-mask-->\r\n        </div>\r\n        <!--//card-->\r\n      </div>\r\n      <!--//col-->\r\n      <div class=\"col-md-6 mb-5\">\r\n        <div class=\"card project-card\">\r\n          <div class=\"row no-gutters\">\r\n            <div class=\"col-lg-4 card-img-holder\">\r\n              <img\r\n                src=\"assets/images/project/project-3.jpg\"\r\n                class=\"card-img\"\r\n                alt=\"image\"\r\n              />\r\n            </div>\r\n            <div class=\"col-lg-8\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">\r\n                  <a href=\"project.html\" class=\"theme-link\">Project Heading</a>\r\n                </h5>\r\n                <p class=\"card-text\">\r\n                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum\r\n                  sociis natoque penatibus et magnis dis parturient montes,\r\n                  nascetur ridiculus mus.\r\n                </p>\r\n                <p class=\"card-text\">\r\n                  <small class=\"text-muted\">Client: Google</small>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"link-mask\">\r\n            <a class=\"link-mask-link\" href=\"project.html\"></a>\r\n            <div class=\"link-mask-text\">\r\n              <a class=\"btn btn-secondary\" href=\"project.html\">\r\n                <i class=\"fas fa-eye mr-2\"></i>View Case Study\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <!--//link-mask-->\r\n        </div>\r\n        <!--//card-->\r\n      </div>\r\n      <!--//col-->\r\n      <div class=\"col-md-6 mb-5\">\r\n        <div class=\"card project-card\">\r\n          <div class=\"row no-gutters\">\r\n            <div class=\"col-lg-4 card-img-holder\">\r\n              <img\r\n                src=\"assets/images/project/project-4.jpg\"\r\n                class=\"card-img\"\r\n                alt=\"image\"\r\n              />\r\n            </div>\r\n            <div class=\"col-lg-8\">\r\n              <div class=\"card-body\">\r\n                <h5 class=\"card-title\">\r\n                  <a href=\"project.html\" class=\"theme-link\">Project Heading</a>\r\n                </h5>\r\n                <p class=\"card-text\">\r\n                  Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Cum\r\n                  sociis natoque penatibus et magnis dis parturient montes,\r\n                  nascetur ridiculus mus.\r\n                </p>\r\n                <p class=\"card-text\">\r\n                  <small class=\"text-muted\">Client: Uber</small>\r\n                </p>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <div class=\"link-mask\">\r\n            <a class=\"link-mask-link\" href=\"project.html\"></a>\r\n            <div class=\"link-mask-text\">\r\n              <a class=\"btn btn-secondary\" href=\"project.html\">\r\n                <i class=\"fas fa-eye mr-2\"></i>View Case Study\r\n              </a>\r\n            </div>\r\n          </div>\r\n          <!--//link-mask-->\r\n        </div>\r\n        <!--//card-->\r\n      </div>\r\n      <!--//col-->\r\n    </div>\r\n    <!--//row-->\r\n    <div class=\"text-center py-3\">\r\n      <a href=\"portfolio.html\" class=\"btn btn-primary\"\r\n        ><i class=\"fas fa-arrow-alt-circle-right mr-2\"></i>View Portfolio</a\r\n      >\r\n    </div>\r\n  </div>\r\n  <!--//container-->\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/resume/resume.component.html":
/*!********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/resume/resume.component.html ***!
  \********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"about-me-section p-3 p-lg-5 theme-bg-light\">\r\n  <div class=\"container\">\r\n    <div class=\"profile-teaser media flex-column flex-lg-row\">\r\n      <div class=\"media-body\">\r\n        <h2 class=\"name font-weight-bold mb-1\">{{ profile.name }}</h2>\r\n        <div class=\"tagline mb-3\">{{ profile.title }}</div>\r\n        <div class=\"bio mb-4\">\r\n          <p [innerHTML]=\"profile.description\"></p>\r\n        </div>\r\n        <!--//bio-->\r\n        <!-- <div class=\"mb-4\">\r\n          <a class=\"btn btn-primary mr-2 mb-3\" href=\"portfolio.html\"\r\n            ><i class=\"fas fa-arrow-alt-circle-right mr-2\"></i\r\n            ><span class=\"d-none d-md-inline\">View</span> Portfolio</a\r\n          >\r\n          <a class=\"btn btn-secondary mb-3\" href=\"resume.html\"\r\n            ><i class=\"fas fa-file-alt mr-2\"></i\r\n            ><span class=\"d-none d-md-inline\">View</span> Resume</a\r\n          >\r\n        </div> -->\r\n      </div>\r\n    </div>\r\n  </div>\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/testimonials/testimonials.component.html":
/*!********************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/profile/testimonials/testimonials.component.html ***!
  \********************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<section class=\"testimonials-section p-3 p-lg-5\">\r\n  <div class=\"container\">\r\n    <h2 class=\"section-title font-weight-bold mb-5\">Testimonials</h2>\r\n\r\n    <div class=\"testiomonial-carousel-container\">\r\n      <div class=\"testimonial-carousel tiny-slider\">\r\n        <div class=\"item\">\r\n          <div class=\"item-inner\">\r\n            <div class=\"quote-holder\">\r\n              <blockquote class=\"quote-content\">\r\n                Simon is a brilliant software engineer! Lorem ipsum dolor sit\r\n                amet, consectetuer adipiscing elit. Aenean commodo ligula eget\r\n                dolor. Aenean massa. Cum sociis natoque penatibus et magnis.\r\n              </blockquote>\r\n              <i class=\"fas fa-quote-left\"></i>\r\n            </div>\r\n            <!--//quote-holder-->\r\n            <div class=\"source-holder\">\r\n              <div class=\"source-profile\">\r\n                <img src=\"assets/images/clients/profile-1.png\" alt=\"image\" />\r\n              </div>\r\n              <div class=\"meta\">\r\n                <div class=\"name\">Brandon James</div>\r\n                <div class=\"info\">Project Manager, Google</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--//item-inner-->\r\n        </div>\r\n        <!--//item-->\r\n\r\n        <div class=\"item\">\r\n          <div class=\"item-inner\">\r\n            <div class=\"quote-holder\">\r\n              <blockquote class=\"quote-content\">\r\n                Simon is a brilliant software engineer! Lorem ipsum dolor sit\r\n                amet, consectetuer adipiscing elit. Aenean commodo ligula eget\r\n                dolor. Aenean massa. Cum sociis natoque penatibus et magnis.\r\n              </blockquote>\r\n              <i class=\"fas fa-quote-left\"></i>\r\n            </div>\r\n            <!--//quote-holder-->\r\n            <div class=\"source-holder\">\r\n              <div class=\"source-profile\">\r\n                <img src=\"assets/images/clients/profile-2.png\" alt=\"image\" />\r\n              </div>\r\n              <div class=\"meta\">\r\n                <div class=\"name\">Kate Sanders</div>\r\n                <div class=\"info\">Project Manager, Uber</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--//item-inner-->\r\n        </div>\r\n        <!--//item-->\r\n\r\n        <div class=\"item\">\r\n          <div class=\"item-inner\">\r\n            <div class=\"quote-holder\">\r\n              <blockquote class=\"quote-content\">\r\n                Simon is a brilliant software engineer! Lorem ipsum dolor sit\r\n                amet, consectetuer adipiscing elit. Aenean commodo ligula eget\r\n                dolor. Aenean massa. Cum sociis natoque penatibus et magnis.\r\n              </blockquote>\r\n              <i class=\"fas fa-quote-left\"></i>\r\n            </div>\r\n            <!--//quote-holder-->\r\n            <div class=\"source-holder\">\r\n              <div class=\"source-profile\">\r\n                <img src=\"assets/images/clients/profile-3.png\" alt=\"image\" />\r\n              </div>\r\n              <div class=\"meta\">\r\n                <div class=\"name\">James Lee</div>\r\n                <div class=\"info\">Product Manager, Amazon</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--//item-inner-->\r\n        </div>\r\n        <!--//item-->\r\n\r\n        <div class=\"item\">\r\n          <div class=\"item-inner\">\r\n            <div class=\"quote-holder\">\r\n              <blockquote class=\"quote-content\">\r\n                Simon is a brilliant software engineer! Lorem ipsum dolor sit\r\n                amet, consectetuer adipiscing elit. Aenean commodo ligula eget\r\n                dolor. Aenean massa. Cum sociis natoque penatibus et magnis.\r\n              </blockquote>\r\n              <i class=\"fas fa-quote-left\"></i>\r\n            </div>\r\n            <!--//quote-holder-->\r\n            <div class=\"source-holder\">\r\n              <div class=\"source-profile\">\r\n                <img src=\"assets/images/clients/profile-4.png\" alt=\"image\" />\r\n              </div>\r\n              <div class=\"meta\">\r\n                <div class=\"name\">James Lee</div>\r\n                <div class=\"info\">Product Manager, Amazon</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--//item-inner-->\r\n        </div>\r\n        <!--//item-->\r\n\r\n        <div class=\"item\">\r\n          <div class=\"item-inner\">\r\n            <div class=\"quote-holder\">\r\n              <blockquote class=\"quote-content\">\r\n                Simon is a brilliant software engineer! Lorem ipsum dolor sit\r\n                amet, consectetuer adipiscing elit. Aenean commodo ligula eget\r\n                dolor. Aenean massa. Cum sociis natoque penatibus et magnis.\r\n              </blockquote>\r\n              <i class=\"fas fa-quote-left\"></i>\r\n            </div>\r\n            <!--//quote-holder-->\r\n            <div class=\"source-holder\">\r\n              <div class=\"source-profile\">\r\n                <img src=\"assets/images/clients/profile-5.png\" alt=\"image\" />\r\n              </div>\r\n              <div class=\"meta\">\r\n                <div class=\"name\">Olivia White</div>\r\n                <div class=\"info\">Product Manager, Dropbox</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--//item-inner-->\r\n        </div>\r\n        <!--//item-->\r\n\r\n        <div class=\"item\">\r\n          <div class=\"item-inner\">\r\n            <div class=\"quote-holder\">\r\n              <blockquote class=\"quote-content\">\r\n                Simon is a brilliant software engineer! Lorem ipsum dolor sit\r\n                amet, consectetuer adipiscing elit. Aenean commodo ligula eget\r\n                dolor. Aenean massa. Cum sociis natoque penatibus et magnis.\r\n              </blockquote>\r\n              <i class=\"fas fa-quote-left\"></i>\r\n            </div>\r\n            <!--//quote-holder-->\r\n            <div class=\"source-holder\">\r\n              <div class=\"source-profile\">\r\n                <img src=\"assets/images/clients/profile-6.png\" alt=\"image\" />\r\n              </div>\r\n              <div class=\"meta\">\r\n                <div class=\"name\">Samuel Reyes</div>\r\n                <div class=\"info\">CTO, StartupHub</div>\r\n              </div>\r\n            </div>\r\n          </div>\r\n          <!--//item-inner-->\r\n        </div>\r\n        <!--//item-->\r\n      </div>\r\n      <!--//testimonial-carousel-->\r\n    </div>\r\n    <!--//testimonial-carousel-container-->\r\n  </div>\r\n  <!--//container-->\r\n</section>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/medium/medium.component.html":
/*!*********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/medium/medium.component.html ***!
  \*********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"row justify-content-center text-center mb-4\">\r\n    <div class=\"col-lg-8\">\r\n        <div class=\"icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-primary\">\r\n            <i class=\"fa fa-medium text-primary\"></i>\r\n        </div>\r\n        <h2 class=\"display-3\">Últimos Artigos</h2>\r\n        <p class=\"lead text-muted\">Acesse o perfil completo em <a\r\n                href=\"https://medium.com/@lennonalvesdias\" target=\"_blank\">medium@lennonalvesdias</a>.</p>\r\n    </div>\r\n</div>\r\n\r\n<owl-carousel-o [options]=\"carouselOptions\">\r\n    <ng-container *ngFor=\"let feed of feeds\">\r\n        <ng-template carouselSlide [id]=\"feed.title\">\r\n            <div>\r\n                <div class=\"card card-lift--hover shadow border-0\">\r\n                    <div class=\"card-body py-5\">\r\n                        <div class=\"icon icon-shape icon-shape-primary rounded-circle mb-4\">\r\n                            <i class=\"fa fa-medium\"></i>\r\n                        </div>\r\n                        <h6 class=\"text-primary text-uppercase\"><a [href]=\"feed.link\" target=\"_blank\">{{ feed.title }}</a></h6>\r\n                        <p class=\"description mt-3\" [innerHTML]=\"feed.description.substring(0, 300)\"></p>\r\n                        <div>\r\n                            <span *ngFor=\"let category of feed.categories; let i = index\"\r\n                                class=\"badge badge-pill badge-primary\">{{ category }}</span>\r\n                        </div>\r\n                        <a [href]=\"feed.link\" target=\"_blank\" class=\"btn btn-primary mt-4\">Continuar lendo</a>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </ng-template>\r\n    </ng-container>\r\n</owl-carousel-o>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/sections.component.html":
/*!****************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/sections/sections.component.html ***!
  \****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<app-medium></app-medium>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<footer class=\"footer text-center py-4\">\r\n  <small class=\"copyright\"\r\n    >&copy; {{ dateTime | date: \"yyyy\" }}\r\n    <a\r\n      href=\"https://github.com/eduardoao\"\r\n      target=\"_blank\"\r\n      >Eduardo Alcantara de Oliveira</a\r\n    >\r\n  </small>\r\n</footer>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<header class=\"header text-center\">\r\n  <div class=\"force-overflow\">\r\n    <h1 class=\"blog-name pt-lg-4 mb-0\">\r\n      <a href=\"index.html\">{{ profile.name }}</a>\r\n    </h1>\r\n\r\n    <nav class=\"navbar navbar-expand-lg navbar-dark\">\r\n      <button\r\n        class=\"navbar-toggler\"\r\n        type=\"button\"\r\n        data-toggle=\"collapse\"\r\n        data-target=\"#navigation\"\r\n        aria-controls=\"navigation\"\r\n        aria-expanded=\"false\"\r\n        aria-label=\"Toggle navigation\"\r\n      >\r\n        <span class=\"navbar-toggler-icon\"></span>\r\n      </button>\r\n\r\n      <div id=\"navigation\" class=\"collapse navbar-collapse flex-column\">\r\n        <div class=\"profile-section pt-3 pt-lg-0\">\r\n          <img\r\n            class=\"profile-image mb-3 rounded-circle mx-auto\"\r\n            [src]=\"profile.image\"\r\n            alt=\"image\"\r\n          />\r\n\r\n          <div class=\"bio mb-3\">\r\n            {{ profile.description }}\r\n          </div>\r\n          <!--//bio-->\r\n          <ul class=\"social-list list-inline py-2 mx-auto\">\r\n            <li *ngFor=\"let social of socialNetworks\" class=\"list-inline-item\">\r\n              <a [href]=\"social.link\" [title]=\"social.title\" target=\"_blank\"\r\n                ><i [class]=\"social.icon\"></i\r\n              ></a>\r\n            </li>\r\n            <!-- <li class=\"list-inline-item\">\r\n              <a href=\"#\"><i class=\"fab fa-linkedin-in fa-fw\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a href=\"#\"><i class=\"fab fa-github-alt fa-fw\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a href=\"#\"><i class=\"fab fa-stack-overflow fa-fw\"></i></a>\r\n            </li>\r\n            <li class=\"list-inline-item\">\r\n              <a href=\"#\"><i class=\"fab fa-codepen fa-fw\"></i></a>\r\n            </li> -->\r\n          </ul>\r\n          <!--//social-list-->\r\n          <hr />\r\n        </div>\r\n        <!--//profile-section-->\r\n\r\n        <ul class=\"navbar-nav flex-column text-left\">\r\n          <li *ngFor=\"let item of menu\" class=\"nav-item active\">\r\n            <a class=\"nav-link\" [routerLink]=\"item.link\"\r\n              ><i [class]=\"item.icon\"></i>{{ item.title\r\n              }}<span class=\"sr-only\">(current)</span></a\r\n            >\r\n          </li>\r\n          <!-- <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"portfolio.html\"\r\n              ><i class=\"fas fa-laptop-code fa-fw mr-2\"></i>Portfolio</a\r\n            >\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"services.html\"\r\n              ><i class=\"fas fa-briefcase fa-fw mr-2\"></i>Services &amp;\r\n              Pricing</a\r\n            >\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"resume.html\"\r\n              ><i class=\"fas fa-file-alt fa-fw mr-2\"></i>Resume</a\r\n            >\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"blog-home.html\"\r\n              ><i class=\"fas fa-blog fa-fw mr-2\"></i>Blog</a\r\n            >\r\n          </li>\r\n          <li class=\"nav-item\">\r\n            <a class=\"nav-link\" href=\"contact.html\"\r\n              ><i class=\"fas fa-envelope-open-text fa-fw mr-2\"></i>Contact</a\r\n            >\r\n          </li>\r\n          <li class=\"nav-item dropdown\">\r\n            <a\r\n              class=\"nav-link dropdown-toggle\"\r\n              href=\"#\"\r\n              id=\"navbarDropdown\"\r\n              role=\"button\"\r\n              data-toggle=\"dropdown\"\r\n              aria-haspopup=\"true\"\r\n              aria-expanded=\"false\"\r\n            >\r\n              <i class=\"fas fa-cogs fa-fw mr-2\"></i>More Pages\r\n            </a>\r\n            <div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\">\r\n              <a class=\"dropdown-item\" href=\"project.html\">Project Page</a>\r\n              <a class=\"dropdown-item\" href=\"blog-home.html\">Blog Home 1</a>\r\n              <a class=\"dropdown-item\" href=\"blog-home-alt.html\">Blog Home 2</a>\r\n              <a class=\"dropdown-item\" href=\"blog-post.html\">Blog Post</a>\r\n            </div>\r\n          </li> -->\r\n        </ul>\r\n\r\n        <!-- <div class=\"my-2\">\r\n          <a class=\"btn btn-primary\" href=\"contact.html\" target=\"_blank\"\r\n            ><i class=\"fas fa-paper-plane mr-2\"></i>Hire Me</a\r\n          >\r\n        </div> -->\r\n\r\n        <div class=\"dark-mode-toggle text-center w-100\">\r\n          <hr class=\"mb-4\" />\r\n          <h4 class=\"toggle-name mb-3\">\r\n            <i class=\"fas fa-adjust mr-1\"></i>Dark Mode\r\n          </h4>\r\n\r\n          <input class=\"toggle\" id=\"darkmode\" type=\"checkbox\" />\r\n          <label class=\"toggle-btn mx-auto mb-0\" for=\"darkmode\"></label>\r\n        </div>\r\n        <!--//dark-mode-toggle-->\r\n      </div>\r\n    </nav>\r\n  </div>\r\n  <!--//force-overflow-->\r\n</header>\r\n");

/***/ }),

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var rxjs_add_operator_filter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/add/operator/filter */ "./node_modules/rxjs-compat/_esm5/add/operator/filter.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (undefined && undefined.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};





var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = 0;
var AppComponent = /** @class */ (function () {
    function AppComponent(renderer, router, document, element, location) {
        this.renderer = renderer;
        this.router = router;
        this.document = document;
        this.element = element;
        this.location = location;
    }
    AppComponent.prototype.hasScrolled = function () {
        var st = window.pageYOffset;
        // Make sure they scroll more than delta
        if (Math.abs(lastScrollTop - st) <= delta)
            return;
        var navbar = document.getElementsByTagName('nav')[0];
        // If they scrolled down and are past the navbar, add class .headroom--unpinned.
        // This is necessary so you never see what is "behind" the navbar.
        if (st > lastScrollTop && st > navbarHeight) {
            // Scroll Down
            if (navbar.classList.contains('headroom--pinned')) {
                navbar.classList.remove('headroom--pinned');
                navbar.classList.add('headroom--unpinned');
            }
            // $('.navbar.headroom--pinned').removeClass('headroom--pinned').addClass('headroom--unpinned');
        }
        else {
            // Scroll Up
            //  $(window).height()
            if (st + window.innerHeight < document.body.scrollHeight) {
                // $('.navbar.headroom--unpinned').removeClass('headroom--unpinned').addClass('headroom--pinned');
                if (navbar.classList.contains('headroom--unpinned')) {
                    navbar.classList.remove('headroom--unpinned');
                    navbar.classList.add('headroom--pinned');
                }
            }
        }
        lastScrollTop = st;
    };
    ;
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        var navbar = this.element.nativeElement.children[0].children[0];
        this._router = this.router.events.filter(function (event) { return event instanceof _angular_router__WEBPACK_IMPORTED_MODULE_1__["NavigationEnd"]; }).subscribe(function (event) {
            if (window.outerWidth > 991) {
                window.document.children[0].scrollTop = 0;
            }
            else {
                window.document.activeElement.scrollTop = 0;
            }
            _this.renderer.listen('window', 'scroll', function (event) {
                var number = window.scrollY;
                if (number > 150 || window.pageYOffset > 150) {
                    // add logic
                    navbar.classList.add('headroom--not-top');
                }
                else {
                    // remove logic
                    navbar.classList.remove('headroom--not-top');
                }
            });
        });
        this.hasScrolled();
    };
    AppComponent.ctorParameters = function () { return [
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"] },
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] },
        { type: undefined, decorators: [{ type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"], args: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"],] }] },
        { type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"] },
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"] }
    ]; };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["HostListener"])('window:scroll', ['$event']),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], AppComponent.prototype, "hasScrolled", null);
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __importDefault(__webpack_require__(/*! raw-loader!./app.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
        }),
        __param(2, Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Inject"])(_angular_common__WEBPACK_IMPORTED_MODULE_3__["DOCUMENT"])),
        __metadata("design:paramtypes", [_angular_core__WEBPACK_IMPORTED_MODULE_0__["Renderer2"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], Object, _angular_core__WEBPACK_IMPORTED_MODULE_0__["ElementRef"], _angular_common__WEBPACK_IMPORTED_MODULE_3__["Location"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
/* harmony import */ var _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./shared/navbar/navbar.component */ "./src/app/shared/navbar/navbar.component.ts");
/* harmony import */ var _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./shared/footer/footer.component */ "./src/app/shared/footer/footer.component.ts");
/* harmony import */ var _sections_sections_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./sections/sections.module */ "./src/app/sections/sections.module.ts");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var _shared_services_feed_service_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./shared/services/feed-service.service */ "./src/app/shared/services/feed-service.service.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/animations.js");
/* harmony import */ var _profile_resume_resume_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./profile/resume/resume.component */ "./src/app/profile/resume/resume.component.ts");
/* harmony import */ var _profile_me_me_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./profile/me/me.component */ "./src/app/profile/me/me.component.ts");
/* harmony import */ var _profile_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./profile/testimonials/testimonials.component */ "./src/app/profile/testimonials/testimonials.component.ts");
/* harmony import */ var _profile_projects_projects_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./profile/projects/projects.component */ "./src/app/profile/projects/projects.component.ts");
/* harmony import */ var _profile_blog_blog_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./profile/blog/blog.component */ "./src/app/profile/blog/blog.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



















var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"],
                _profile_profile_component__WEBPACK_IMPORTED_MODULE_7__["ProfileComponent"],
                _shared_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                _shared_footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                _profile_resume_resume_component__WEBPACK_IMPORTED_MODULE_14__["ProfileResumeComponent"],
                _profile_me_me_component__WEBPACK_IMPORTED_MODULE_15__["ProfileMeComponent"],
                _profile_testimonials_testimonials_component__WEBPACK_IMPORTED_MODULE_16__["ProfileTestimonialsComponent"],
                _profile_projects_projects_component__WEBPACK_IMPORTED_MODULE_17__["ProfileProjectsComponent"],
                _profile_blog_blog_component__WEBPACK_IMPORTED_MODULE_18__["ProfileBlogComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_3__["NgbModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormsModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_5__["AppRoutingModule"],
                _sections_sections_module__WEBPACK_IMPORTED_MODULE_10__["SectionsModule"],
                _angular_http__WEBPACK_IMPORTED_MODULE_11__["HttpModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_13__["BrowserAnimationsModule"]
            ],
            providers: [_shared_services_feed_service_service__WEBPACK_IMPORTED_MODULE_12__["FeedService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm5/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./profile/profile.component */ "./src/app/profile/profile.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





var routes = [
    { path: 'user-profile', component: _profile_profile_component__WEBPACK_IMPORTED_MODULE_4__["ProfileComponent"] },
    { path: '', redirectTo: 'user-profile', pathMatch: 'full' }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["BrowserModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterModule"].forRoot(routes, {
                    useHash: true
                })
            ],
            exports: [],
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/profile/blog/blog.component.css":
/*!*************************************************!*\
  !*** ./src/app/profile/blog/blog.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvYmxvZy9ibG9nLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/profile/blog/blog.component.ts":
/*!************************************************!*\
  !*** ./src/app/profile/blog/blog.component.ts ***!
  \************************************************/
/*! exports provided: ProfileBlogComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileBlogComponent", function() { return ProfileBlogComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var src_app_shared_services_feed_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/services/feed-service.service */ "./src/app/shared/services/feed-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var ProfileBlogComponent = /** @class */ (function () {
    function ProfileBlogComponent(feedService) {
        this.feedService = feedService;
        this.mediumUrl = "https%3A%2F%2Fmedium.com%2Ffeed%2F%40lennonalvesdias";
    }
    ProfileBlogComponent.prototype.ngOnInit = function () {
        this.refreshFeed();
    };
    ProfileBlogComponent.prototype.refreshFeed = function () {
        var _this = this;
        this.feedService.getFeedContent(this.mediumUrl).subscribe(function (feed) { return (_this.feeds = feed.items); }, function (error) { return console.log(error); });
    };
    ProfileBlogComponent.ctorParameters = function () { return [
        { type: src_app_shared_services_feed_service_service__WEBPACK_IMPORTED_MODULE_1__["FeedService"] }
    ]; };
    ProfileBlogComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "profile-blog",
            template: __importDefault(__webpack_require__(/*! raw-loader!./blog.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/blog/blog.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./blog.component.css */ "./src/app/profile/blog/blog.component.css")).default]
        }),
        __metadata("design:paramtypes", [src_app_shared_services_feed_service_service__WEBPACK_IMPORTED_MODULE_1__["FeedService"]])
    ], ProfileBlogComponent);
    return ProfileBlogComponent;
}());



/***/ }),

/***/ "./src/app/profile/me/me.component.css":
/*!*********************************************!*\
  !*** ./src/app/profile/me/me.component.css ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvbWUvbWUuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/me/me.component.ts":
/*!********************************************!*\
  !*** ./src/app/profile/me/me.component.ts ***!
  \********************************************/
/*! exports provided: ProfileMeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileMeComponent", function() { return ProfileMeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ProfileMeComponent = /** @class */ (function () {
    function ProfileMeComponent() {
    }
    ProfileMeComponent.prototype.ngOnInit = function () {
    };
    ProfileMeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile-me',
            template: __importDefault(__webpack_require__(/*! raw-loader!./me.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/me/me.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./me.component.css */ "./src/app/profile/me/me.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileMeComponent);
    return ProfileMeComponent;
}());



/***/ }),

/***/ "./src/app/profile/profile.component.scss":
/*!************************************************!*\
  !*** ./src/app/profile/profile.component.scss ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvZmlsZS5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/profile.component.ts":
/*!**********************************************!*\
  !*** ./src/app/profile/profile.component.ts ***!
  \**********************************************/
/*! exports provided: ProfileComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileComponent", function() { return ProfileComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ProfileComponent = /** @class */ (function () {
    function ProfileComponent() {
    }
    ProfileComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(ProfileComponent.prototype, "profile", {
        get: function () {
            return {
                name: "Eduardo Alcantara de Oliveira",
                title: "Computer Science / Cientista da Computação",
                description: "Profissional apaixonado por tecnologia e movido pelo prop\u00F3sito de impactar a vida das pessoas, criando ferramentas para que elas possam fazer melhor as suas atividades.\n      <br/><br/>\n      Em minha experi\u00EAncia profissional descobri que mudan\u00E7as acontecem e que tecnologias evoluem, com isso me tornei um profissional resiliente e flex\u00EDvel. Com essas mudan\u00E7as \u00E9 necess\u00E1rio o aprendizado e, para isso, conto com o autodidatismo e a organiza\u00E7\u00E3o. Passar por mudan\u00E7as sempre \u00E9 dif\u00EDcil, por\u00E9m sozinho se torna ainda mais, por isso sempre prezo pela colabora\u00E7\u00E3o e o trabalho em equipe, afinal, \"juntos somos mais fortes\".\n      <br/><br/>\n      Me formei em Ci\u00EAncia da Computa\u00E7\u00E3o pela Universidade Tecnol\u00F3gica Federal do Paran\u00E1 (UTFPR - 2015) e me especializei em Intelig\u00EAncia Artificial e Aprendizado de M\u00E1quina (Machine Learning) pela FIAP (2020), al\u00E9m de estar sempre me atualizando com cursos, palestras e artigos.\n      <br/><br/>\n      Que tal aquela partidinha de FIFA? \uD83C\uDFAE Ou um joguinho de truco? \uD83C\uDCCF Vamos conversar! \uD83D\uDCAC",
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "imagemPerfil", {
        get: function () {
            return "https://www.gravatar.com/avatar/d55c213eb8dadd014ca0d7085f0d7b4a?s=250&d=404";
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(ProfileComponent.prototype, "isMobile", {
        get: function () {
            var check = false;
            (function (a) {
                if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) ||
                    /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4)))
                    check = true;
            })(navigator.userAgent || navigator.vendor);
            return check;
        },
        enumerable: true,
        configurable: true
    });
    ProfileComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-profile",
            template: __importDefault(__webpack_require__(/*! raw-loader!./profile.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/profile.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./profile.component.scss */ "./src/app/profile/profile.component.scss")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileComponent);
    return ProfileComponent;
}());



/***/ }),

/***/ "./src/app/profile/projects/projects.component.css":
/*!*********************************************************!*\
  !*** ./src/app/profile/projects/projects.component.css ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcHJvamVjdHMvcHJvamVjdHMuY29tcG9uZW50LmNzcyJ9 */");

/***/ }),

/***/ "./src/app/profile/projects/projects.component.ts":
/*!********************************************************!*\
  !*** ./src/app/profile/projects/projects.component.ts ***!
  \********************************************************/
/*! exports provided: ProfileProjectsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileProjectsComponent", function() { return ProfileProjectsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ProfileProjectsComponent = /** @class */ (function () {
    function ProfileProjectsComponent() {
    }
    ProfileProjectsComponent.prototype.ngOnInit = function () {
    };
    ProfileProjectsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile-projects',
            template: __importDefault(__webpack_require__(/*! raw-loader!./projects.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/projects/projects.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./projects.component.css */ "./src/app/profile/projects/projects.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileProjectsComponent);
    return ProfileProjectsComponent;
}());



/***/ }),

/***/ "./src/app/profile/resume/resume.component.css":
/*!*****************************************************!*\
  !*** ./src/app/profile/resume/resume.component.css ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvcmVzdW1lL3Jlc3VtZS5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/profile/resume/resume.component.ts":
/*!****************************************************!*\
  !*** ./src/app/profile/resume/resume.component.ts ***!
  \****************************************************/
/*! exports provided: ProfileResumeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileResumeComponent", function() { return ProfileResumeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ProfileResumeComponent = /** @class */ (function () {
    function ProfileResumeComponent() {
    }
    ProfileResumeComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ProfileResumeComponent.prototype, "profile", void 0);
    ProfileResumeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "profile-resume",
            template: __importDefault(__webpack_require__(/*! raw-loader!./resume.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/resume/resume.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./resume.component.css */ "./src/app/profile/resume/resume.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileResumeComponent);
    return ProfileResumeComponent;
}());



/***/ }),

/***/ "./src/app/profile/testimonials/testimonials.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/profile/testimonials/testimonials.component.css ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3Byb2ZpbGUvdGVzdGltb25pYWxzL3Rlc3RpbW9uaWFscy5jb21wb25lbnQuY3NzIn0= */");

/***/ }),

/***/ "./src/app/profile/testimonials/testimonials.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/profile/testimonials/testimonials.component.ts ***!
  \****************************************************************/
/*! exports provided: ProfileTestimonialsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ProfileTestimonialsComponent", function() { return ProfileTestimonialsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var ProfileTestimonialsComponent = /** @class */ (function () {
    function ProfileTestimonialsComponent() {
    }
    ProfileTestimonialsComponent.prototype.ngOnInit = function () {
    };
    ProfileTestimonialsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'profile-testimonials',
            template: __importDefault(__webpack_require__(/*! raw-loader!./testimonials.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/profile/testimonials/testimonials.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./testimonials.component.css */ "./src/app/profile/testimonials/testimonials.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], ProfileTestimonialsComponent);
    return ProfileTestimonialsComponent;
}());



/***/ }),

/***/ "./src/app/sections/medium/medium.component.css":
/*!******************************************************!*\
  !*** ./src/app/sections/medium/medium.component.css ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("img{\r\n    max-width: 100%;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2VjdGlvbnMvbWVkaXVtL21lZGl1bS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksZUFBZTtBQUNuQiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL21lZGl1bS9tZWRpdW0uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImltZ3tcclxuICAgIG1heC13aWR0aDogMTAwJTtcclxufSJdfQ== */");

/***/ }),

/***/ "./src/app/sections/medium/medium.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/sections/medium/medium.component.ts ***!
  \*****************************************************/
/*! exports provided: MediumComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MediumComponent", function() { return MediumComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _shared_services_feed_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/services/feed-service.service */ "./src/app/shared/services/feed-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var MediumComponent = /** @class */ (function () {
    function MediumComponent(feedService) {
        this.feedService = feedService;
        this.mediumUrl = 'https%3A%2F%2Fmedium.com%2Ffeed%2F%40lennonalvesdias';
        this.carouselOptions = {
            stagePadding: 10,
            margin: 10,
            loop: false,
            mouseDrag: true,
            touchDrag: true,
            pullDrag: false,
            nav: true,
            navText: ['', ''],
            navSpeed: 700,
            dots: false,
            responsive: {
                0: {
                    items: 1
                },
                400: {
                    items: 2
                },
                740: {
                    items: 3
                },
                940: {
                    items: 3
                }
            }
        };
    }
    MediumComponent.prototype.ngOnInit = function () {
        this.refreshFeed();
    };
    MediumComponent.prototype.refreshFeed = function () {
        var _this = this;
        this.feedService.getFeedContent(this.mediumUrl)
            .subscribe(function (feed) { return _this.feeds = feed.items; }, function (error) { return console.log(error); });
    };
    MediumComponent.ctorParameters = function () { return [
        { type: _shared_services_feed_service_service__WEBPACK_IMPORTED_MODULE_1__["FeedService"] }
    ]; };
    MediumComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-medium',
            template: __importDefault(__webpack_require__(/*! raw-loader!./medium.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/medium/medium.component.html")).default,
            encapsulation: _angular_core__WEBPACK_IMPORTED_MODULE_0__["ViewEncapsulation"].None,
            styles: [__importDefault(__webpack_require__(/*! ./medium.component.css */ "./src/app/sections/medium/medium.component.css")).default]
        }),
        __metadata("design:paramtypes", [_shared_services_feed_service_service__WEBPACK_IMPORTED_MODULE_1__["FeedService"]])
    ], MediumComponent);
    return MediumComponent;
}());



/***/ }),

/***/ "./src/app/sections/sections.component.css":
/*!*************************************************!*\
  !*** ./src/app/sections/sections.component.css ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NlY3Rpb25zL3NlY3Rpb25zLmNvbXBvbmVudC5jc3MifQ== */");

/***/ }),

/***/ "./src/app/sections/sections.component.ts":
/*!************************************************!*\
  !*** ./src/app/sections/sections.component.ts ***!
  \************************************************/
/*! exports provided: SectionsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsComponent", function() { return SectionsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};

var SectionsComponent = /** @class */ (function () {
    function SectionsComponent() {
    }
    SectionsComponent.prototype.ngOnInit = function () {
    };
    SectionsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-sections',
            template: __importDefault(__webpack_require__(/*! raw-loader!./sections.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/sections/sections.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./sections.component.css */ "./src/app/sections/sections.component.css")).default]
        }),
        __metadata("design:paramtypes", [])
    ], SectionsComponent);
    return SectionsComponent;
}());



/***/ }),

/***/ "./src/app/sections/sections.module.ts":
/*!*********************************************!*\
  !*** ./src/app/sections/sections.module.ts ***!
  \*********************************************/
/*! exports provided: SectionsModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SectionsModule", function() { return SectionsModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
/* harmony import */ var _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @ng-bootstrap/ng-bootstrap */ "./node_modules/@ng-bootstrap/ng-bootstrap/__ivy_ngcc__/fesm5/ng-bootstrap.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm5/forms.js");
/* harmony import */ var ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ng2-nouislider */ "./node_modules/ng2-nouislider/__ivy_ngcc__/ng2-nouislider.es5.js");
/* harmony import */ var jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! jw-bootstrap-switch-ng2 */ "./node_modules/jw-bootstrap-switch-ng2/__ivy_ngcc__/fesm5/jw-bootstrap-switch-ng2.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
/* harmony import */ var _sections_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./sections.component */ "./src/app/sections/sections.component.ts");
/* harmony import */ var _medium_medium_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./medium/medium.component */ "./src/app/sections/medium/medium.component.ts");
/* harmony import */ var ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-owl-carousel-o */ "./node_modules/ngx-owl-carousel-o/__ivy_ngcc__/fesm5/ngx-owl-carousel-o.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var SectionsModule = /** @class */ (function () {
    function SectionsModule() {
    }
    SectionsModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            declarations: [
                _sections_component__WEBPACK_IMPORTED_MODULE_7__["SectionsComponent"],
                _medium_medium_component__WEBPACK_IMPORTED_MODULE_8__["MediumComponent"]
            ],
            entryComponents: [],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"],
                _ng_bootstrap_ng_bootstrap__WEBPACK_IMPORTED_MODULE_2__["NgbModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"],
                ng2_nouislider__WEBPACK_IMPORTED_MODULE_4__["NouisliderModule"],
                jw_bootstrap_switch_ng2__WEBPACK_IMPORTED_MODULE_5__["JwBootstrapSwitchNg2Module"],
                ngx_owl_carousel_o__WEBPACK_IMPORTED_MODULE_9__["CarouselModule"]
            ],
            exports: [
                _sections_component__WEBPACK_IMPORTED_MODULE_7__["SectionsComponent"],
                _medium_medium_component__WEBPACK_IMPORTED_MODULE_8__["MediumComponent"]
            ]
        })
    ], SectionsModule);
    return SectionsModule;
}());



/***/ }),

/***/ "./src/app/shared/footer/footer.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/footer/footer.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9mb290ZXIvZm9vdGVyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/footer/footer.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/footer/footer.component.ts ***!
  \***************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var FooterComponent = /** @class */ (function () {
    function FooterComponent(router) {
        this.router = router;
        this.dateTime = new Date();
    }
    FooterComponent.prototype.ngOnInit = function () { };
    FooterComponent.prototype.getPath = function () {
        return this.router.url;
    };
    FooterComponent.ctorParameters = function () { return [
        { type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }
    ]; };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-footer",
            template: __importDefault(__webpack_require__(/*! raw-loader!./footer.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/footer/footer.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./footer.component.scss */ "./src/app/shared/footer/footer.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL3NoYXJlZC9uYXZiYXIvbmF2YmFyLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/shared/navbar/navbar.component.ts":
/*!***************************************************!*\
  !*** ./src/app/shared/navbar/navbar.component.ts ***!
  \***************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm5/common.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __importDefault = (undefined && undefined.__importDefault) || function (mod) {
  return (mod && mod.__esModule) ? mod : { "default": mod };
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(location) {
        this.location = location;
        this.isCollapsed = true;
        this.yScrollStack = [];
    }
    NavbarComponent.prototype.ngOnInit = function () { };
    Object.defineProperty(NavbarComponent.prototype, "menu", {
        get: function () {
            return [
                {
                    title: "Sobre Mim",
                    link: "/user-profile",
                    icon: "fas fa-user fa-fw mr-2",
                },
            ];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(NavbarComponent.prototype, "profile", {
        get: function () {
            return {
                name: "Eduardo Alcantara de Oliveira",
                image: "https://media-exp1.licdn.com/dms/image/C4D03AQEF_R3rwT-h5g/profile-displayphoto-shrink_800_800/0/1641566381094?e=1647475200&v=beta&t=4Kt8fg4G1dT4LT-MapWXDDrcGA7tnXUk0omnF7-3E3Y",
                description: "Developer. MBA Arquitetura de Software distribuído (PUC/MG - 2021).",
            };
        },
        enumerable: true,
        configurable: true
    });
    NavbarComponent.prototype.getExtraContent = function () {
        return [
            {
                link: "https://site.lennon.cloud/assets/portfolio.html",
                icon: "ni ni-spaceship",
                title: "Portfólio Data Science",
                description: "Este portfólio tem como objetivo demonstrar conhecimentos abrangentes sobre análise e interpretação dos dados.",
            },
        ];
    };
    NavbarComponent.prototype.isHome = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === "#/home") {
            return true;
        }
        else {
            return false;
        }
    };
    NavbarComponent.prototype.getCertificates = function () {
        return [
            {
                name: "Diretor Voluntário - Associação Atlética dos Acadêmicos VII de Maio",
                link: "https://site.lennon.cloud/assets/certificates/atletica-2012.jpg",
            },
            {
                name: "Participante - XII Semana de Atualização em Tecnologia da Informação (SATI)",
                link: "https://site.lennon.cloud/assets/certificates/sati-2013.jpg",
            },
            {
                name: "Participante - XIII Semana de Atualização em Tecnologia da Informação (SATI)",
                link: "https://site.lennon.cloud/assets/certificates/sati-2014.jpg",
            },
            {
                name: "Participante - Fórum E-Commerce Brasil",
                link: "https://site.lennon.cloud/assets/certificates/forum-ecommerce-2016.pdf",
            },
            {
                name: "Participante - Bootcamp - Intermediário - Big Data & Machine Learning",
                link: "https://site.lennon.cloud/assets/certificates/google-bigdata-machinelearning-2018.pdf",
            },
        ];
    };
    NavbarComponent.prototype.isDocumentation = function () {
        var titlee = this.location.prepareExternalUrl(this.location.path());
        if (titlee === "#/documentation") {
            return true;
        }
        else {
            return false;
        }
    };
    Object.defineProperty(NavbarComponent.prototype, "socialNetworks", {
        get: function () {
            return [
                {
                    link: "https://www.facebook.com/lennonalvesdias",
                    title: "Like us on Facebook",
                    icon: "fab fa-facebook-square fa-fw",
                    name: "Facebook",
                },
                {
                    link: "https://www.instagram.com/lennonalvesdias",
                    title: "Follow us on Instagram",
                    icon: "fab fa-instagram fa-fw",
                    name: "Instagram",
                },
                {
                    link: "https://twitter.com/lennonalvesdias",
                    title: "Follow us on Twitter",
                    icon: "fab fa-twitter fa-fw",
                    name: "Twitter",
                },
                {
                    link: "https://github.com/lennonalvesdias",
                    title: "Star us on Github",
                    icon: "fab fa-github fa-fw",
                    name: "Github",
                },
                {
                    link: "https://www.linkedin.com/in/lennonalvesdias/",
                    title: "Connect us on LinkedIn",
                    icon: "fab fa-linkedin fa-fw",
                    name: "LinkedIn",
                },
                {
                    link: "http://lattes.cnpq.br/6379239457237236",
                    title: "Read us on Lattes",
                    icon: "fab fa-file-text-o fa-fw",
                    name: "Lattes",
                },
            ];
        },
        enumerable: true,
        configurable: true
    });
    NavbarComponent.ctorParameters = function () { return [
        { type: _angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"] }
    ]; };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: "app-navbar",
            template: __importDefault(__webpack_require__(/*! raw-loader!./navbar.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/shared/navbar/navbar.component.html")).default,
            styles: [__importDefault(__webpack_require__(/*! ./navbar.component.scss */ "./src/app/shared/navbar/navbar.component.scss")).default]
        }),
        __metadata("design:paramtypes", [_angular_common__WEBPACK_IMPORTED_MODULE_1__["Location"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/shared/services/feed-service.service.ts":
/*!*********************************************************!*\
  !*** ./src/app/shared/services/feed-service.service.ts ***!
  \*********************************************************/
/*! exports provided: FeedService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FeedService", function() { return FeedService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/__ivy_ngcc__/fesm5/http.js");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var FeedService = /** @class */ (function () {
    function FeedService(http) {
        this.http = http;
        this.rssToJsonServiceBaseUrl = 'https://rss2json.com/api.json?rss_url=';
    }
    FeedService.prototype.getFeedContent = function (url) {
        return this.http.get(this.rssToJsonServiceBaseUrl + url)
            .map(this.extractFeeds)
            .catch(this.handleError);
    };
    FeedService.prototype.extractFeeds = function (res) {
        var feed = res.json();
        return feed || {};
    };
    FeedService.prototype.handleError = function (error) {
        // In a real world app, we might use a remote logging infrastructure
        // We'd also dig deeper into the error to get a better message
        var errMsg = (error.message) ? error.message :
            error.status ? error.status + " - " + error.statusText : 'Server error';
        console.error(errMsg); // log to console instead
        return rxjs_Rx__WEBPACK_IMPORTED_MODULE_2__["Observable"].throw(errMsg);
    };
    FeedService.ctorParameters = function () { return [
        { type: _angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"] }
    ]; };
    FeedService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], FeedService);
    return FeedService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/__ivy_ngcc__/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/*!

=========================================================
* Argon Design System Angular - v1.0.0
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-design-system-angular
* Copyright 2019 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/argon-design-system-angular/blob/master/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\CODE\Portifolio\lennonalvesdias.github.io\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map