async function getAllRecords() {
  let getResultElement = document.getElementById("daniela");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer patSjsYftN8dHvuLD.2a252c2c4acbf7903434fe61f13674cc5ed50e7c6bcc37d8bcb3e462cc52c3f2`,
    },
  };

  await fetch(`https://api.airtable.com/v0/appUpsniSDwFioCAm/Table`, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // response is an object / .records array

      getResultElement.innerHTML = ""; // clear brews

      let newHtml = "";

      for (let i = 0; i < data.records.length; i++) {
        let artistPhoto = data.records[i].fields["ArtistPhoto"]; // here we are getting column values
        let name = data.records[i].fields["Name"]; //here we are using the Field ID to fecth the name property
        let about = data.records[i].fields["About"];

        newHtml += `
        
         <div class="col-xl-4 cardImageText">
        <div>${name}</div>
        <img src="${artistPhoto[0].url}"></img>
        <div>${about}</div>
        </div>
    
        
        `;
      }

      getResultElement.innerHTML = newHtml;
    });
}

getAllRecords();
