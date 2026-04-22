async function getAllRecords() {
  let getResultElement = document.getElementById("artists");

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
        let song = data.records[i].fields["Song"];
        let genre = data.records[i].fields["Genre"];
        let album = data.records[i].fields["AlbumPhoto1"];

        newHtml += `
        
        <div class="col cardImageText p-5 song-card center">
        <a href = "details.html?id=${data.records[i].id}">${
          album ? `<img src="${album[0].url}" class="artists-img"></img>` 
          : ``
        }
                </a>

        </div>
      
        <div class="info">
        <div>${name}</div>
        <div>${song}</div>
        <div>${genre}</div>
        </div>
        </div>
        

        
        `;
      }

      getResultElement.innerHTML = newHtml;
    });
}


 async function getOneRecord(id) {
  let getResultElement = document.getElementById("artists");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer patSjsYftN8dHvuLD.2a252c2c4acbf7903434fe61f13674cc5ed50e7c6bcc37d8bcb3e462cc52c3f2`,
    },
  };

  await fetch(`https://api.airtable.com/v0/appUpsniSDwFioCAm/Table/${id}`, options)
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // response is an object / .records array

      getResultElement.innerHTML = ""; // clear brews

      let newHtml = "";

      for (let i = 0; i < data.records.length; i++) {
        let artistPhoto = data.records[i].fields["ArtistPhoto"]; // here we are getting column values
        let name = data.records[i].fields["Name"]; //here we are using the Field ID to fecth the name property
        let song = data.records[i].fields["Song"];
        let genre = data.records[i].fields["Genre"];


        newHtml += `
        
        <div class="col cardImageText p-5">
        <div>${name}</div>
        <div>${song}</div>
        <div>${genre}</div>
        <img src="${artistPhoto[0].url}"></img>
        </div>

        
        `;
      }

      getResultElement.innerHTML = newHtml;
    });
}

getAllRecords();
