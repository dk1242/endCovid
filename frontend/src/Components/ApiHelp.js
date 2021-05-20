export const AddHelp = (helpData) => {
  console.log(helpData);
  return fetch(`https://endcorona.herokuapp.com/addhelp`, {
    method: "POST",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
      // 'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: JSON.stringify(helpData),
  })
    .then((res) => {
      //  console.log(res);
      return res.json();
    })
    .catch((err) => {
      console.log(err);
    });
};
