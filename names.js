var names = {};

names.nameList = [
    "ThijsInsanity"
   
];

names.getRandomName = function() {
    return names.nameList[Math.floor((Math.random() * names.nameList.length))];
};

module.exports = names;
