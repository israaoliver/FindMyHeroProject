const unirest = require('unirest');



module.exports = {
    async heroById(request, response)
    {
        const req = unirest("GET", "https://superhero-search.p.rapidapi.com/");
        const {id_hero} = request.params;

        req.query({
            "id": id_hero
        });

        req.headers({
            "x-rapidapi-host": "superhero-search.p.rapidapi.com",
            "x-rapidapi-key": "c7952b8219mshc59deaa286c2130p15a64bjsn9fc1b81e3ddc"
        });

        req.end(function (res) {
            if (res.error) throw new Error(res.error);

            console.log(res.body);
            var heroObject = JSON.parse(res.body);
            return response.json(heroObject);
        });




        
    },

    async heroByName(request, response)
    {
        const req = unirest("GET", "https://superhero-search.p.rapidapi.com/");
        const {name_hero} = request.params;

        hero = req.query({
            "hero": name_hero
        });

        req.headers({
            "x-rapidapi-host": "superhero-search.p.rapidapi.com",
            "x-rapidapi-key": "c7952b8219mshc59deaa286c2130p15a64bjsn9fc1b81e3ddc"
        });

        req.end(function (res) {
            if (res.error) throw new Error(res.error);
        
            console.log(res.body);
            var heroObject = JSON.parse(res.body);
            return response.json(heroObject);
        });


    }

}