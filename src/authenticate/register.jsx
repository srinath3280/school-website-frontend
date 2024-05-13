import React, { useState, useRef } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../scriptFiles/countries-states.js';

const Register = () => {
  const [Gender, setGender] = useState();
  const [selectedState, setSelectedState] = useState('');
  const [districts, setDistricts] = useState([]);
  const [State, setState] = useState();
  const [District, setDistrict] = useState();
  const navigate = useNavigate();

  const [recording, setRecording] = useState(false);
  const [audioData, setAudioData] = useState(null);
  const mediaRecorderRef = useRef(null);

  var AndraPradesh = ["Anantapur", "Chittoor", "East Godavari", "Guntur", "Kadapa", "Krishna", "Kurnool", "Prakasam", "Nellore", "Srikakulam", "Visakhapatnam", "Vizianagaram", "West Godavari"];
  var ArunachalPradesh = ["Anjaw", "Changlang", "Dibang Valley", "East Kameng", "East Siang", "Kra Daadi", "Kurung Kumey", "Lohit", "Longding", "Lower Dibang Valley", "Lower Subansiri", "Namsai", "Papum Pare", "Siang", "Tawang", "Tirap", "Upper Siang", "Upper Subansiri", "West Kameng", "West Siang", "Itanagar"];
  var Assam = ["Baksa", "Barpeta", "Biswanath", "Bongaigaon", "Cachar", "Charaideo", "Chirang", "Darrang", "Dhemaji", "Dhubri", "Dibrugarh", "Goalpara", "Golaghat", "Hailakandi", "Hojai", "Jorhat", "Kamrup Metropolitan", "Kamrup (Rural)", "Karbi Anglong", "Karimganj", "Kokrajhar", "Lakhimpur", "Majuli", "Morigaon", "Nagaon", "Nalbari", "Dima Hasao", "Sivasagar", "Sonitpur", "South Salmara Mankachar", "Tinsukia", "Udalguri", "West Karbi Anglong"];
  var Bihar = ["Araria", "Arwal", "Aurangabad", "Banka", "Begusarai", "Bhagalpur", "Bhojpur", "Buxar", "Darbhanga", "East Champaran", "Gaya", "Gopalganj", "Jamui", "Jehanabad", "Kaimur", "Katihar", "Khagaria", "Kishanganj", "Lakhisarai", "Madhepura", "Madhubani", "Munger", "Muzaffarpur", "Nalanda", "Nawada", "Patna", "Purnia", "Rohtas", "Saharsa", "Samastipur", "Saran", "Sheikhpura", "Sheohar", "Sitamarhi", "Siwan", "Supaul", "Vaishali", "West Champaran"];
  var Chhattisgarh = ["Balod", "Baloda Bazar", "Balrampur", "Bastar", "Bemetara", "Bijapur", "Bilaspur", "Dantewada", "Dhamtari", "Durg", "Gariaband", "Janjgir Champa", "Jashpur", "Kabirdham", "Kanker", "Kondagaon", "Korba", "Koriya", "Mahasamund", "Mungeli", "Narayanpur", "Raigarh", "Raipur", "Rajnandgaon", "Sukma", "Surajpur", "Surguja"];
  var Goa = ["North Goa", "South Goa"];
  var Gujarat = ["Ahmedabad", "Amreli", "Anand", "Aravalli", "Banaskantha", "Bharuch", "Bhavnagar", "Botad", "Chhota Udaipur", "Dahod", "Dang", "Devbhoomi Dwarka", "Gandhinagar", "Gir Somnath", "Jamnagar", "Junagadh", "Kheda", "Kutch", "Mahisagar", "Mehsana", "Morbi", "Narmada", "Navsari", "Panchmahal", "Patan", "Porbandar", "Rajkot", "Sabarkantha", "Surat", "Surendranagar", "Tapi", "Vadodara", "Valsad"];
  var Haryana = ["Ambala", "Bhiwani", "Charkhi Dadri", "Faridabad", "Fatehabad", "Gurugram", "Hisar", "Jhajjar", "Jind", "Kaithal", "Karnal", "Kurukshetra", "Mahendragarh", "Mewat", "Palwal", "Panchkula", "Panipat", "Rewari", "Rohtak", "Sirsa", "Sonipat", "Yamunanagar"];
  var HimachalPradesh = ["Bilaspur", "Chamba", "Hamirpur", "Kangra", "Kinnaur", "Kullu", "Lahaul Spiti", "Mandi", "Shimla", "Sirmaur", "Solan", "Una"];
  var JammuKashmir = ["Anantnag", "Bandipora", "Baramulla", "Budgam", "Doda", "Ganderbal", "Jammu", "Kargil", "Kathua", "Kishtwar", "Kulgam", "Kupwara", "Leh", "Poonch", "Pulwama", "Rajouri", "Ramban", "Reasi", "Samba", "Shopian", "Srinagar", "Udhampur"];
  var Jharkhand = ["Bokaro", "Chatra", "Deoghar", "Dhanbad", "Dumka", "East Singhbhum", "Garhwa", "Giridih", "Godda", "Gumla", "Hazaribagh", "Jamtara", "Khunti", "Koderma", "Latehar", "Lohardaga", "Pakur", "Palamu", "Ramgarh", "Ranchi", "Sahebganj", "Seraikela Kharsawan", "Simdega", "West Singhbhum"];
  var Karnataka = ["Bagalkot", "Bangalore Rural", "Bangalore Urban", "Belgaum", "Bellary", "Bidar", "Vijayapura", "Chamarajanagar", "Chikkaballapur", "Chikkamagaluru", "Chitradurga", "Dakshina Kannada", "Davanagere", "Dharwad", "Gadag", "Gulbarga", "Hassan", "Haveri", "Kodagu", "Kolar", "Koppal", "Mandya", "Mysore", "Raichur", "Ramanagara", "Shimoga", "Tumkur", "Udupi", "Uttara Kannada", "Yadgir"];
  var Kerala = ["Alappuzha", "Ernakulam", "Idukki", "Kannur", "Kasaragod", "Kollam", "Kottayam", "Kozhikode", "Malappuram", "Palakkad", "Pathanamthitta", "Thiruvananthapuram", "Thrissur", "Wayanad"];
  var MadhyaPradesh = ["Agar Malwa", "Alirajpur", "Anuppur", "Ashoknagar", "Balaghat", "Barwani", "Betul", "Bhind", "Bhopal", "Burhanpur", "Chhatarpur", "Chhindwara", "Damoh", "Datia", "Dewas", "Dhar", "Dindori", "Guna", "Gwalior", "Harda", "Hoshangabad", "Indore", "Jabalpur", "Jhabua", "Katni", "Khandwa", "Khargone", "Mandla", "Mandsaur", "Morena", "Narsinghpur", "Neemuch", "Panna", "Raisen", "Rajgarh", "Ratlam", "Rewa", "Sagar", "Satna",
    "Sehore", "Seoni", "Shahdol", "Shajapur", "Sheopur", "Shivpuri", "Sidhi", "Singrauli", "Tikamgarh", "Ujjain", "Umaria", "Vidisha"];
  var Maharashtra = ["Ahmednagar", "Akola", "Amravati", "Aurangabad", "Beed", "Bhandara", "Buldhana", "Chandrapur", "Dhule", "Gadchiroli", "Gondia", "Hingoli", "Jalgaon", "Jalna", "Kolhapur", "Latur", "Mumbai City", "Mumbai Suburban", "Nagpur", "Nanded", "Nandurbar", "Nashik", "Osmanabad", "Palghar", "Parbhani", "Pune", "Raigad", "Ratnagiri", "Sangli", "Satara", "Sindhudurg", "Solapur", "Thane", "Wardha", "Washim", "Yavatmal"];
  var Manipur = ["Bishnupur", "Chandel", "Churachandpur", "Imphal East", "Imphal West", "Jiribam", "Kakching", "Kamjong", "Kangpokpi", "Noney", "Pherzawl", "Senapati", "Tamenglong", "Tengnoupal", "Thoubal", "Ukhrul"];
  var Meghalaya = ["East Garo Hills", "East Jaintia Hills", "East Khasi Hills", "North Garo Hills", "Ri Bhoi", "South Garo Hills", "South West Garo Hills", "South West Khasi Hills", "West Garo Hills", "West Jaintia Hills", "West Khasi Hills"];
  var Mizoram = ["Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip", "Aizawl", "Champhai", "Kolasib", "Lawngtlai", "Lunglei", "Mamit", "Saiha", "Serchhip"];
  var Nagaland = ["Dimapur", "Kiphire", "Kohima", "Longleng", "Mokokchung", "Mon", "Peren", "Phek", "Tuensang", "Wokha", "Zunheboto"];
  var Odisha = ["Angul", "Balangir", "Balasore", "Bargarh", "Bhadrak", "Boudh", "Cuttack", "Debagarh", "Dhenkanal", "Gajapati", "Ganjam", "Jagatsinghpur", "Jajpur", "Jharsuguda", "Kalahandi", "Kandhamal", "Kendrapara", "Kendujhar", "Khordha", "Koraput", "Malkangiri", "Mayurbhanj", "Nabarangpur", "Nayagarh", "Nuapada", "Puri", "Rayagada", "Sambalpur", "Subarnapur", "Sundergarh"];
  var Punjab = ["Amritsar", "Barnala", "Bathinda", "Faridkot", "Fatehgarh Sahib", "Fazilka", "Firozpur", "Gurdaspur", "Hoshiarpur", "Jalandhar", "Kapurthala", "Ludhiana", "Mansa", "Moga", "Mohali", "Muktsar", "Pathankot", "Patiala", "Rupnagar", "Sangrur", "Shaheed Bhagat Singh Nagar", "Tarn Taran"];
  var Rajasthan = ["Ajmer", "Alwar", "Banswara", "Baran", "Barmer", "Bharatpur", "Bhilwara", "Bikaner", "Bundi", "Chittorgarh", "Churu", "Dausa", "Dholpur", "Dungarpur", "Ganganagar", "Hanumangarh", "Jaipur", "Jaisalmer", "Jalore", "Jhalawar", "Jhunjhunu", "Jodhpur", "Karauli", "Kota", "Nagaur", "Pali", "Pratapgarh", "Rajsamand", "Sawai Madhopur", "Sikar", "Sirohi", "Tonk", "Udaipur"];
  var Sikkim = ["East Sikkim", "North Sikkim", "South Sikkim", "West Sikkim"];
  var TamilNadu = ["Ariyalur", "Chennai", "Coimbatore", "Cuddalore", "Dharmapuri", "Dindigul", "Erode", "Kanchipuram", "Kanyakumari", "Karur", "Krishnagiri", "Madurai", "Nagapattinam", "Namakkal", "Nilgiris", "Perambalur", "Pudukkottai", "Ramanathapuram", "Salem", "Sivaganga", "Thanjavur", "Theni", "Thoothukudi", "Tiruchirappalli", "Tirunelveli", "Tiruppur", "Tiruvallur", "Tiruvannamalai", "Tiruvarur", "Vellore", "Viluppuram", "Virudhunagar"];
  var Telangana = ["Adilabad", "Bhadradri Kothagudem", "Hyderabad", "Jagtial", "Jangaon", "Jayashankar", "Jogulamba", "Kamareddy", "Karimnagar", "Khammam", "Komaram Bheem", "Mahabubabad", "Mahbubnagar", "Mancherial", "Medak", "Medchal", "Nagarkurnool", "Nalgonda", "Nirmal", "Nizamabad", "Peddapalli", "Rajanna Sircilla", "Ranga Reddy", "Sangareddy", "Siddipet", "Suryapet", "Vikarabad", "Wanaparthy", "Warangal Rural", "Warangal Urban", "Yadadri Bhuvanagiri"];
  var Tripura = ["Dhalai", "Gomati", "Khowai", "North Tripura", "Sepahijala", "South Tripura", "Unakoti", "West Tripura"];
  var UttarPradesh = ["Agra", "Aligarh", "Allahabad", "Ambedkar Nagar", "Amethi", "Amroha", "Auraiya", "Azamgarh", "Baghpat", "Bahraich", "Ballia", "Balrampur", "Banda", "Barabanki", "Bareilly", "Basti", "Bhadohi", "Bijnor", "Budaun", "Bulandshahr", "Chandauli", "Chitrakoot", "Deoria", "Etah", "Etawah", "Faizabad", "Farrukhabad", "Fatehpur", "Firozabad", "Gautam Buddha Nagar", "Ghaziabad", "Ghazipur", "Gonda", "Gorakhpur", "Hamirpur", "Hapur", "Hardoi", "Hathras", "Jalaun", "Jaunpur", "Jhansi", "Kannauj", "Kanpur Dehat", "Kanpur Nagar", "Kasganj", "Kaushambi", "Kheri", "Kushinagar", "Lalitpur", "Lucknow", "Maharajganj", "Mahoba", "Mainpuri", "Mathura", "Mau", "Meerut", "Mirzapur", "Moradabad", "Muzaffarnagar", "Pilibhit", "Pratapgarh", "Raebareli", "Rampur", "Saharanpur", "Sambhal", "Sant Kabir Nagar", "Shahjahanpur", "Shamli", "Shravasti", "Siddharthnagar", "Sitapur", "Sonbhadra", "Sultanpur", "Unnao", "Varanasi"];
  var Uttarakhand = ["Almora", "Bageshwar", "Chamoli", "Champawat", "Dehradun", "Haridwar", "Nainital", "Pauri", "Pithoragarh", "Rudraprayag", "Tehri", "Udham Singh Nagar", "Uttarkashi"];
  var WestBengal = ["Alipurduar", "Bankura", "Birbhum", "Cooch Behar", "Dakshin Dinajpur", "Darjeeling", "Hooghly", "Howrah", "Jalpaiguri", "Jhargram", "Kalimpong", "Kolkata", "Malda", "Murshidabad", "Nadia", "North 24 Parganas", "Paschim Bardhaman", "Paschim Medinipur", "Purba Bardhaman", "Purba Medinipur", "Purulia", "South 24 Parganas", "Uttar Dinajpur"];
  var AndamanNicobar = ["Nicobar", "North Middle Andaman", "South Andaman"];
  var Chandigarh = ["Chandigarh"];
  var DadraHaveli = ["Dadra Nagar Haveli"];
  var DamanDiu = ["Daman", "Diu"];
  var Delhi = ["Central Delhi", "East Delhi", "New Delhi", "North Delhi", "North East Delhi", "North West Delhi", "Shahdara", "South Delhi", "South East Delhi", "South West Delhi", "West Delhi"];
  var Lakshadweep = ["Lakshadweep"];
  var Puducherry = ["Karaikal", "Mahe", "Puducherry", "Yanam"];


  const [data, setData] = useState({
    firstname: '',
    lastname: '',
    dob: '',
    gender: Gender,
    fathername: '',
    fatherprofession: '',
    mothername: '',
    motherprofession: '',
    fathercontact: '',
    mothercontact: '',
    mobilenumber: '',
    emailaddress: '',
    city: '',
    district: '',
    state: '',
    country: 'India',
    postalcode: '',
    fulladdress: '',
    password: '',
    confirmpassword: ''
  })
  const { firstname, lastname, dob, gender, fathername, fatherprofession, fathercontact, mothername, motherprofession, mothercontact, mobilenumber, emailaddress, city, district, state, country, postalcode, fulladdress, password, confirmpassword } = data;
  const changeHandler = e => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });

    document.addEventListener('DOMContentLoaded', function () {
      document.getElementById('myForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent form submission

        var gender = document.querySelector('input[name="gender"]:checked');
        if (gender) {
          setGender(gender)
          console.log("Selected gender: " + gender.value);
        } else {
          console.log("Please select a gender.");
        }

        var SelectedState = document.getElementById('selectOption').value;
        setState(SelectedState);

        var selectedDistrict = document.getElementById('selectOption1').value;
        setDistrict(selectedDistrict);

      });
    });

    // const stateSelected = e.target.value;
    // setSelectedState(stateSelected);

    if (name === 'state') {
      setSelectedState(value);
      switch (value) {
        case "Andra Pradesh":
          setDistricts(AndraPradesh);
          break;
        case "Arunachal Pradesh":
          setDistricts(ArunachalPradesh);
          break;
        case "Assam":
          setDistricts(Assam);
          break;
        case "Bihar":
          setDistricts(Bihar);
          break;
        case "Chhattisgarh":
          setDistricts(Chhattisgarh);
          break;
        case "Goa":
          setDistricts(Goa);
          break;
        case "Gujarat":
          setDistricts(Gujarat);
          break;
        case "Haryana":
          setDistricts(Haryana);
          break;
        case "Himachal Pradesh":
          setDistricts(HimachalPradesh);
          break;
        case "Jammu and Kashmir":
          setDistricts(JammuKashmir);
          break;
        case "Jharkhand":
          setDistricts(Jharkhand);
          break;
        case "Karnataka":
          setDistricts(Karnataka);
          break;
        case "Kerala":
          setDistricts(Kerala);
          break;
        case "Madya Pradesh":
          setDistricts(MadhyaPradesh);
          break;
        case "Maharashtra":
          setDistricts(Maharashtra);
          break;
        case "Manipur":
          setDistricts(Manipur);
          break;
        case "Meghalaya":
          setDistricts(Meghalaya);
          break;
        case "Mizoram":
          setDistricts(Mizoram);
          break;
        case "Nagaland":
          setDistricts(Nagaland);
          break;
        case "Orissa":
          setDistricts(Odisha);
          break;
        case "Punjab":
          setDistricts(Punjab);
          break;
        case "Rajasthan":
          setDistricts(Rajasthan);
          break;
        case "Sikkim":
          setDistricts(Sikkim);
          break;
        case "Tamil Nadu":
          setDistricts(TamilNadu);
          break;
        case "Telangana":
          setDistricts(Telangana);
          break;
        case "Tripura":
          setDistricts(Tripura);
          break;
        case "Uttaranchal":
          setDistricts(Uttarakhand);
          break;
        case "Uttar Pradesh":
          setDistricts(UttarPradesh);
          break;
        case "West Bengal":
          setDistricts(WestBengal);
          break;
        case "Andaman and Nicobar Islands":
          setDistricts(AndamanNicobar);
          break;
        case "Chandigarh":
          setDistricts(Chandigarh);
          break;
        case "Dadar and Nagar Haveli":
          setDistricts(DadraHaveli);
          break;
        case "Daman and Diu":
          setDistricts(DamanDiu);
          break;
        case "Delhi":
          setDistricts(Delhi);
          break;
        case "Lakshadeep":
          setDistricts(Lakshadweep);
          break;
        case "Pondicherry":
          setDistricts(Puducherry);
          break;
        default:
          setDistricts([]);
          break;
      }
    }

    // setData({ ...data, [e.target.name]: e.target.value })
  }
  const submitHandler = e => {
    e.preventDefault();
    console.log(data)
    // navigate('/')
    axios({
      method: 'post',
      url: 'http://localhost:3750/register',
      data: data
    }).then(() => {
      alert('Registered Successfully')
      navigate('/login')
    })
  }

  const startRecording = async () => {
    const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    mediaRecorderRef.current = new MediaRecorder(stream);

    const chunks = [];
    mediaRecorderRef.current.ondataavailable = (e) => {
      chunks.push(e.data);
    };

    mediaRecorderRef.current.onstop = () => {
      const blob = new Blob(chunks, { type: 'audio/wav' });
      setAudioData(blob);
    };

    mediaRecorderRef.current.start();
    setRecording(true);
  };

  const stopRecording = () => {
    mediaRecorderRef.current.stop();
    setRecording(false);
  };

  const sendAudioToBackend = async () => {
    if (audioData) {
      const formData = new FormData();
      formData.append('audio', audioData, 'recording.wav');

      await fetch('http://localhost:3750/upload', {
        method: 'POST',
        body: formData,
      });

      setAudioData(null); // Clear the audio data after sending
    }
  };

  return (
    <div id='registerform'>
      <div id='register'>
        <div id='registerblock1'>
          <div>
            <img src="/images/logo.png" alt="" width="150px" height="125px" />
          </div>
          <div>
            <h1>Make My Baby Genius School</h1>
            <p>
              <i class="bi bi-telephone-fill">+91 8886800091</i>
              <i class="bi bi-envelope-at-fill">yaswanth@mmbg.in</i>
              <i class="bi bi-geo-alt-fill">Tirupati, Chittor,517501</i>
            </p>
          </div>
        </div>
        <hr />
        <form id='myform' action="" onSubmit={submitHandler}>
          <div id='registerblock2'>
            <h4>Student Information</h4>
            <hr />
            <div class="row">
              <div class="col">
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-3 col-form-label">First Name</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" name='firstname' onChange={changeHandler} />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-3 col-form-label">Last Name</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" name='lastname' onChange={changeHandler} />
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-3 col-form-label">Date of Birth</label>
                  <div class="col-sm-4">
                    <input type="date" class="form-control" name='dob' onChange={changeHandler} />
                  </div>
                </div>
              </div>
              <div class="col" id='genderinput'>
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-3 col-form-label" name=''>Gender</label>
                  <div class="form-check form-check-inline col-sm-2">
                    <input class="form-check-input" type="radio" name="gender" value="male" onChange={changeHandler} />
                    <label class="form-check-label" for="inlineRadio1">Male</label>
                  </div>
                  <div class="form-check form-check-inline col-sm-2">
                    <input class="form-check-input" type="radio" name="gender" value="female" onChange={changeHandler} />
                    <label class="form-check-label" for="inlineRadio2">Female</label>
                  </div>
                  <div class="form-check form-check-inline col-sm-2">
                    <input class="form-check-input" type="radio" name="gender" value="others" onChange={changeHandler} />
                    <label class="form-check-label" for="inlineRadio3">Others</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id='registerblock3'>
            <h4>Parents Information</h4>
            <hr />
            <div class="row">
              <div class="col">
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-3 col-form-label">Father's Name</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" name='fathername' onChange={changeHandler} />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-3 col-form-label">Mother's Name</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" name='mothername' onChange={changeHandler} />
                  </div>
                </div>

              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-3 col-form-label">Father's Profession</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" name='fatherprofession' onChange={changeHandler} />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-3 col-form-label">Mother's Profession</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" name='motherprofession' onChange={changeHandler} />
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-3 col-form-label">Father's Contact No</label>
                  <div class="col-sm-6">
                    <input type="number" class="form-control" name='fatherconatct' onChange={changeHandler} />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-3 col-form-label">Mother's Contact No</label>
                  <div class="col-sm-6">
                    <input type="number" class="form-control" name='mothercontact' onChange={changeHandler} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id='registerblock4'>
            <h4>Contact Information</h4>
            <hr />
            <div class="row">
              <div class="col">
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-3 col-form-label">Mobile Number</label>
                  <div class="col-sm-6">
                    <input type="number" class="form-control" name='mobilenumber' onChange={changeHandler} />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-3 col-form-label">Email Address</label>
                  <div class="col-sm-6">
                    <input type="email" class="form-control" name='emailaddress' onChange={changeHandler} />
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-3 col-form-label">City</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" name='city' onChange={changeHandler} />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-3 col-form-label">State</label>
                  <div class="col-sm-6 form-group">
                    <select class="form-control" id="inputState" name="state" value={selectedState} onChange={changeHandler}>
                      <option value="SelectState">Select State</option>
                      <option value="Andra Pradesh">Andra Pradesh</option>
                      <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                      <option value="Assam">Assam</option>
                      <option value="Bihar">Bihar</option>
                      <option value="Chhattisgarh">Chhattisgarh</option>
                      <option value="Goa">Goa</option>
                      <option value="Gujarat">Gujarat</option>
                      <option value="Haryana">Haryana</option>
                      <option value="Himachal Pradesh">Himachal Pradesh</option>
                      <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                      <option value="Jharkhand">Jharkhand</option>
                      <option value="Karnataka">Karnataka</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Madya Pradesh">Madya Pradesh</option>
                      <option value="Maharashtra">Maharashtra</option>
                      <option value="Manipur">Manipur</option>
                      <option value="Meghalaya">Meghalaya</option>
                      <option value="Mizoram">Mizoram</option>
                      <option value="Nagaland">Nagaland</option>
                      <option value="Orissa">Orissa</option>
                      <option value="Punjab">Punjab</option>
                      <option value="Rajasthan">Rajasthan</option>
                      <option value="Sikkim">Sikkim</option>
                      <option value="Tamil Nadu">Tamil Nadu</option>
                      <option value="Telangana">Telangana</option>
                      <option value="Tripura">Tripura</option>
                      <option value="Uttaranchal">Uttaranchal</option>
                      <option value="Uttar Pradesh">Uttar Pradesh</option>
                      <option value="West Bengal">West Bengal</option>
                      <option disabled style={{ backgroundColor: "#aaa", color: "#fff" }}>UNION Territories</option>
                      <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
                      <option value="Chandigarh">Chandigarh</option>
                      <option value="Dadar and Nagar Haveli">Dadar and Nagar Haveli</option>
                      <option value="Daman and Diu">Daman and Diu</option>
                      <option value="Delhi">Delhi</option>
                      <option value="Lakshadeep">Lakshadeep</option>
                      <option value="Pondicherry">Pondicherry</option>
                    </select>
                    {/* <input type="text" class="form-control" name='state' onChange={changeHandler} /> */}
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="mb-3 row">
                  <label for="inputPassword1" class="col-sm-3 col-form-label">District</label>
                  <div class="col-sm-6">
                    <select class="form-control" id="inputDistrict" name="district" onChange={changeHandler}>
                      <option value="">-- select one -- </option>
                      {
                        districts.map((district, index) => (
                          <option key={index} value={district}>{district}</option>
                        ))
                      }
                    </select>
                    {/* <input type="text" class="form-control" name='district' onChange={changeHandler} /> */}
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-3 col-form-label">Country</label>
                  <div class="col-sm-6">
                    <input type="text" class="form-control" name='country' value={!selectedState ? null : "India"} onChange={changeHandler} disabled />
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col">
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-3 col-form-label">Full Address</label>
                  <div class="col-sm-6">
                    <textarea name="fulladdress" id="" cols="30" rows="3" class="form-control" onChange={changeHandler}></textarea>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-3 col-form-label">Postal Code</label>
                  <div class="col-sm-6">
                    <input type="number" class="form-control" name='postalcode' onChange={changeHandler} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id='registerblock5'>
            <h4>Password Set</h4>
            <hr />
            <div class="row">
              <div class="col">
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-3 col-form-label">Password</label>
                  <div class="col-sm-6">
                    <input type="password" class="form-control" name='password' onChange={changeHandler} />
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="mb-3 row">
                  <label for="inputPassword" class="col-sm-3 col-form-label">Confirm Password</label>
                  <div class="col-sm-6">
                    <input type="password" class="form-control" name='confirmpassword' onChange={changeHandler} />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div id='registerblock6'>
            <h4>Record a voice</h4>
            <hr />
            <div id="voice">
              <h5>I tried to record my voice.</h5>
              <p>Please speak out above text after click on record button</p>
              <div>
                <span id='voicebutton' onClick={recording ? stopRecording : startRecording}>
                  {recording ? <i class="bi bi-mic-mute-fill"></i> : <i class="bi bi-mic-fill"></i>}
                </span>
                {audioData && <span class="btn btn-seconadry" onClick={sendAudioToBackend}>Submit</span>}
              </div>
            </div>
          </div>
          <button class="btn btn-primary" type='submit'>Register</button>
        </form>
      </div>
      {/* <center>
        <form onSubmit={submitHandler}>
          <input type="text" name="username" placeholder='username' value={username} onChange={changeHandler} /><br />
          <input type="email" name="email" placeholder='email' value={email} onChange={changeHandler} /><br />
          <input type="password" name="password" placeholder='password' value={password} onChange={changeHandler} /><br />
          <input type="password" name="confirmpassword" placeholder='confirm password' value={confirmpassword} onChange={changeHandler} /><br />
          <input type="submit" name="submit" /><br />
        </form>
      </center> */}
    </div>
  );
}

export default Register;