const fetch = url => new Promise((resolve, reject) => {
  const xhr = new XMLHttpRequest();
  xhr.onreadystatechange = () => {
    if (xhr.readyState === XMLHttpRequest.DONE) {
      if (xhr.status === 200) resolve(xhr.responseText);
      else reject(`Status Code: ${xhr.status}`);
    }
  };
  xhr.open('GET', url, true);
  xhr.send();
});

// Usage
//fetch('/user/name/zEXJrnPeI04J2Du8')
//  .then(body => console.log(body))
//  .catch(err => console.log(err));