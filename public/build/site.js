/*!
 * classie - class helper functions
 * from bonzo https://github.com/ded/bonzo
 *
 * classie.has( elem, 'my-class' ) -> true/false
 * classie.add( elem, 'my-new-class' )
 * classie.remove( elem, 'my-unwanted-class' )
 * classie.toggle( elem, 'my-class' )
 */

/*jshint browser: true, strict: true, undef: true */
/*global define: false */

(function (window) {

  'use strict';

  // class helper functions from bonzo https://github.com/ded/bonzo

  function classReg(className) {
    return new RegExp("(^|\\s+)" + className + "(\\s+|$)");
  }

  // classList support for class management
  // altho to be fair, the api sucks because it won't accept multiple classes at once
  var hasClass, addClass, removeClass;

  if ('classList' in document.documentElement) {
    hasClass = function (elem, c) {
      return elem.classList.contains(c);
    };
    addClass = function (elem, c) {
      elem.classList.add(c);
    };
    removeClass = function (elem, c) {
      elem.classList.remove(c);
    };
  } else {
    hasClass = function (elem, c) {
      return classReg(c).test(elem.className);
    };
    addClass = function (elem, c) {
      if (!hasClass(elem, c)) {
        elem.className = elem.className + ' ' + c;
      }
    };
    removeClass = function (elem, c) {
      elem.className = elem.className.replace(classReg(c), ' ');
    };
  }

  function toggleClass(elem, c) {
    var fn = hasClass(elem, c) ? removeClass : addClass;
    fn(elem, c);
  }

  var classie = {
    // full names
    hasClass: hasClass,
    addClass: addClass,
    removeClass: removeClass,
    toggleClass: toggleClass,
    // short names
    has: hasClass,
    add: addClass,
    remove: removeClass,
    toggle: toggleClass
  };

  // transport
  if (typeof define === 'function' && define.amd) {
    // AMD
    define(classie);
  } else {
    // browser global
    window.classie = classie;
  }
})(window);
var product = '<div class="product">  <h3 class="product" id="product-name"></h3>  <img src="" alt="" id="product-image" />  <h4 class="product" id="product-slug"></h4>  <p class="product" id="product-description"></p>  <h2 class="product" id="product-price"></h2></div>';

var components = {
  product: product,
  null: 'null'
};
function sendMail() {
  var formData = {
    name: 'test',
    email: 'email',
    msg: 'msg'
  };
  var form = document.getElementsByName('contact-form');
  form = form[0];
  var gtg = true;
  var i = 0;
  while (gtg) {
    console.log(form[i]);
    if (!form[i]) {
      gtg = false;
      break;
    }
    var value = form[i].value;
    var name = form[i].name;
    if (formData[name]) {
      formData[name] = value;
    }
    i++;
  }
  form = form[0];
  axios.post('http://api.primesystemsinc.com/mail', formData).then(function (response) {
    console.log(response);
  }).catch(function (err) {
    console.log(err);
  });
}
