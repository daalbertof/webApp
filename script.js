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

        <div class="col p-5 song-card center">
        <a href = "index.html?id=${data.records[i].id}">${
          album
            ? `<img class="artists-img" src="${album[0].url}" ></img>` // Add album ALT!!!!!
            : ``
        }</a>
        </div>
      
        <div class="info">
        <div class="font2">${name}</div>
        <div class="font3">${genre}</div>
        </div>
        </div>
        

        
        `;
      }

      getResultElement.innerHTML = newHtml;
    });
}

async function getOneRecord(id) {
  let musicResultElement = document.getElementById("artists");

  const options = {
    method: "GET",
    headers: {
      Authorization: `Bearer patSjsYftN8dHvuLD.2a252c2c4acbf7903434fe61f13674cc5ed50e7c6bcc37d8bcb3e462cc52c3f2`,
    },
  };

  await fetch(
    `https://api.airtable.com/v0/appUpsniSDwFioCAm/Table/${id}`,
    options,
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data); // response is an object / .records array

      let artistPhoto = data.fields["ArtistPhoto"]; // here we are getting column values
      let name = data.fields["Name"]; //here we are using the Field ID to fecth the name property
      let song = data.fields["Song"];
      let genre = data.fields["Genre"];
      let songLink = data.fields["SongMP3"];
      let about = data.fields["About"];
      let album = data.fields["AlbumPhoto1"];
      let header = data.fields["Header"];
      let album2 = data.fields["AlbumPhoto2"];
      let album3 = data.fields["Album3"];
      let albumName = data.fields["AlbumRec2"];
      let albumName3 = data.fields["AlbumName3"];


      let albumName4 = data.fields["AlbumName4"];
      let album4 = data.fields["Album4"];
      let albumName5 = data.fields["AlbumName5"];
      let album5 = data.fields["Album5"];

      let sentence = "About ";
      let newHtml = `


  
      <div class="row cardImageText center p-3 fill">
        <div class=" info lacquer-regular">
        <div class="artist-name dm-sans">
            <div>${name}</div>
        </div>
      </div>
      </div>
        </div>

      <div class="rol  p-1 artists-background center">
                <div class="font2 center">${song}</div>
        ${album ? `<img class="artists-img2" src="${album[0].url}">` : ``}
     <div class="p-5">   
        <audio controls class="audio-position">
          <source src="${songLink[0].url}" type="audio/mpeg">
        </audio>
     </div>

     <div class="about-section dm-sans">
       <h2>${sentence}${name}</h2>
        <div>${about}</div>
      </div>  
      ${
        header
          ? `<img class="artist-about center" src="${header[0].url}">`
          : ``
      }
  
    <div>
    <h3>Other Albums by ${name}</h3>
    <div class="row center p-5">
        <div class="col">
          <div class="card center" style="width: 18rem;">
            <img src="${album2[0].url}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${albumName}</h5>
              <p class="card-text">Album: By ${name}</p>
            </div>
          </div>
        </div>

         <div class="col">
          <div class="card center" style="width: 18rem;">
            <img src="${album3[0].url}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${albumName3}</h5>
              <p class="card-text">Album: By ${name}</p>
            </div>
          </div>
        </div>

         <div class="col">
          <div class="card center" style="width: 18rem;">
            <img src="${album4[0].url}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${albumName4}</h5>
              <p class="card-text">Album: By ${name}</p>
            </div>
          </div>
        </div>
 
          <div class="col">
          <div class="card center" style="width: 18rem;">
            <img src="${album5[0].url}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${albumName5}</h5>
              <p class="card-text">Album: By ${name}</p>
            </div>
          </div>
        </div>
    </div>
     


        
    `;

      musicResultElement.innerHTML = newHtml;
    });
}
//Nose
// look up window.location.search and split, so this would take
// https://dmspr2021-airtable-app.glitch.me/index.html?id=receHhOzntTGZ44I5
// and look at the ?id=receHhOzntTGZ44I5 part, then split that into an array
// ["?id=", "receHhOzntTGZ44I5"] and then we only choose the second one
let idParams = window.location.search.split("?id=");
if (idParams.length >= 2) {
  // has at least ["?id=", "OUR ID"]
  // call function for the dropdown menu
  getOneRecord(idParams[1]); // create detail view HTML w/ our id
} else {
  // call function for the dropdown menu
  getAllRecords(); // no id given, fetch summaries
}

//getAllRecords();
