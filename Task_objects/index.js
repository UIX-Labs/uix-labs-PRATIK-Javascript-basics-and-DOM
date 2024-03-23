const cat = {
  name: "Bertie",
  breed: "Cymric",
  color: "white",
  greeting: function () {
    console.log("Meow!");
  },
};

// Write the code for 1st task below
let catName = cat["name"];

cat.greeting();

cat.color = "black"

//Write your code above




//Write your 2nd task below this

const myFavoriteBand = {
    name : "Led Zeppelin",
    nationality : "United Kingdom",
    genre: "Rock",
    members : 4,
    formed: 1968,
    split: 1980,
    albums : [
        {
            name : "Led Zeppelin",
            released : 1969
        },
        {
            name : "Led Zeppelin II",
            released : 1969
        }
    ]
};

const firstAlbum = myFavoriteBand.albums[0];
const bandInfo = `${myFavoriteBand.name} is a ${myFavoriteBand.genre} band from ${myFavoriteBand.nationality}. Formed in ${myFavoriteBand.formed}, they were active until ${myFavoriteBand.split}. Their first album, "${firstAlbum.name}", was released in ${firstAlbum.released}.`;

console.log(bandInfo)
//Write your code above


