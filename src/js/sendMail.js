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
  while(gtg) {
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
  axios.post('http://api.primesystemsinc.com/mail', formData)
  .then(function(response) {
    console.log(response);
  })
  .catch(function (err) {
    console.log(err);
  });
}
