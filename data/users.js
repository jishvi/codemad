

var populateDB = function(db) 
{
    console.log('Iside populate db for users');
    var users = [
    {
        name: "Jithin Puthiyattu",
        email: "jithinputhiyattu@gmail.com",
        url : "jithinputhiyattu",
        psw : "sha256code",
        dob : "03/12/1990",
        country: "India",
        joinon : "1/12/2016",
        picture: "jithinputhiyattu.jpg"
    },
    {
        name: "Nisamudheen M",
        email: "",
        url : "nisamudheenm",
        psw : "sha256code",
        dob : "03/12/1992",
        country: "India",
        joinon : "1/12/2016",
        picture: "nisamudheenm.jpg"
    },
    {
        name: "Jishnu Vasanth",
        email: "jishnuvasanth@gmail.com",
        url : "jishnuvasanth",
        psw : "sha256code",
        dob : "03/12/1992",
        country: "India",
        joinon : "1/12/2016",
        picture: "jishnuvasanth.jpg"
    },
    {
        name: "Renju Ashokan",
        email: "nomail@gmail.com",
        url : "renjuashokan",
        psw : "sha256code",
        dob : "03/12/1993",
        country: "India",
        joinon : "1/12/2016",
        picture: "renjuashokan.jpg"
    }];

    db.collection('users', function(err, collection) 
    {
        collection.insert(users, {safe:true}, function(err, result) {});
    });
   };

