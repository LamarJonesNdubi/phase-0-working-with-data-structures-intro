const theBeatles = [
    "John Lennon",
    "Paul McCartney",
    "Ringo Starr",
    "George Harrison",
];

//An Object is a collection data type that holds multiple pieces of data under a collected name whose members can be read and updated by using a key instead of an index. In daily conversation we use keys to retrieve values all the time: "Who was the guy who played drums in The Beatles?"
const enlishBandsBy City = {
    liverpool: "The Beatles",
    manchester: "The Smiths",
    coventry: "Delia Derbyshire and the BBC Radiophonic Band",
    london: "Ziggy Stardust and the Spiders from Mars",
};

const englishMusicByCity = {
    manchester; [
        {
            bandName; "The Smiths",
            memeberNames: ["Morrissey", "Johnny", "Andy", "Mike",]

        },
        {
            bandName: "Joy Division",
            memberNmaes: ["Peter", "Stephen", "Bernard", "Iam"],

        },
    ],
};

englishMusicByCity["manchester"][0]["bandName"]; //=> "The Smiths"
englishMusicByCity["manchester"][0]["memeberNames"]; //=> ["Morrissey", "Johnny", "Andy", "Mike"]

console.log(
    'There were ${englishMusicByCity["manchester"][0]["memberNmaes"].length} members in ${englishMusicByCity["manchester"][0]["bandName"]}'
);
//=> "There were 4 members in The Smiths"