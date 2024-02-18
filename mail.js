const firebaseConfig = {
    apiKey: "AIzaSyDWYq1s7s1IPAUnuewRfnNhp86bhOudGko",
    authDomain: "registration-form-ecellvssut.firebaseapp.com",
    databaseURL: "https://registration-form-ecellvssut-default-rtdb.firebaseio.com",
    projectId: "registration-form-ecellvssut",
    storageBucket: "registration-form-ecellvssut.appspot.com",
    messagingSenderId: "855263718926",
    appId: "1:855263718926:web:324db1f11cada2d458d65f"
  };

  //Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  //Reference for your database
  var regFormDB = firebase.database().ref('regForm');

  document.getElementById("regForm").addEventListener("submit",submitForm);

  function submitForm(e){
    e.preventDefault();

    var name = getElementVal('name');
    var email = getElementVal('email');
    var branch = getElementVal('branch');
    var Whatsapp = getElementVal('wno');
    var regd = getElementVal('regd');
    var domain = getElementVal('domain');
    var year = getElementVal('year');

    saveInfo(name, email, branch, Whatsapp, regd, domain, year);

    //Enable Alert
    document.querySelector('.alert').style.display = "block";

    //Remove Timeout
    setTimeout(()=>{
        document.querySelector('.alert').style.display = "none";
    },3000);

    //Reset the Form
    document.getElementById("regForm").reset();
  }

  const saveInfo = (name, email, branch, Whatsapp, regd, domain, year) =>{
    var newRegForm = regFormDB.push();

    newRegForm.set({
        name: name,
        email: email,
        branch: branch,
        whatsapp: wno,
        Registration: regd,
        Domain: domain,
        Year: year,
    })
  };

  const getElementVal = (id) =>{
    return document.getElementById(id).value;
  };