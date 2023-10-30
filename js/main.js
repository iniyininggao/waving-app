import '/src/css/style.css'

//setupCounter(document.querySelector('#counter'))

let feedbackContrastCount = document.getElementById('contrast-count');
let feedbackContrastDescription = document.getElementById('contrast-description');
let feedbackError = document.getElementById('error-count');
let feedbackFeature = document.getElementById('Feature-count');
let feedbackContrastData, feedbackContrastDescriptionData, feedbackErrorData, feedbackFeatureData;

let urlInputElement = document.getElementById("urlInput");
let urlSendBtnElement = document.getElementById("sendUrlBtn");
let submitBtnElement = document.getElementById("submitBtn");

// Request Init
let testedWebUrl = 'https://developer.mozilla.org/zh-CN/docs/Web/API/fetch';
//var testedWebUrl = ''; 
//var testedWebUrl,waveApiUrl;
const apiKey = 'U4ZH4frj3500';
//var waveApiUrl = waveApiUrl = `https://wave.webaim.org/api/request?key=${apiKey}&url=${testedWebUrl}&reporttype=2`;
const requestInit = {
  method: 'GET',
  /* headers: {
    'Content-Type': 'application/json',
  }, */
};

/* urlSendBtnElement.addEventListener('click', function() {
  //testedWebUrl = urlInputElement.value;
  //waveApiUrl = `https://wave.webaim.org/api/request?key=${apiKey}&url=${testedWebUrl}&reporttype=2`;
  console.log(testedWebUrl);

}); */
 
// Send a Request to WAVE API via fetch()
fetch(waveApiUrl,requestInit)
.then(response =>{
  if (!response.ok) {
    throw new Error(`Error: ${response.status}`);
  }
  return response.json();
}) 
.then(data => {
  console.log(data);
  feedbackContrastData = data.categories.contrast.count;
  feedbackContrastDescriptionData = data.categories.contrast.items.contrast.description;

  feedbackErrorData = data.categories.error.count;

  feedbackFeatureData = data.categories.feature.count;

  feedbackContrastCount.innerText = feedbackContrastData;
  feedbackContrastDescription.innerText = feedbackContrastDescriptionData;
  feedbackError.innerText = feedbackErrorData;
  feedbackFeature.innerText = feedbackFeatureData;
}) 

submitBtnElement.addEventListener('click', function() {
  //testedWebUrl = urlInputElement.value;
  //waveApiUrl = `https://wave.webaim.org/api/request?key=${apiKey}&url=${testedWebUrl}&reporttype=2`;
  let loginInfoElement = document.getElementById("loginInfo");
  let inputUserName = document.getElementById("name");
  let inputUserNameValue = inputUserName.value;
  loginInfoElement.innerText = "'You are now successfully logged in as ' + inputUserNameValue";
  
  console.log("123345");

}); 