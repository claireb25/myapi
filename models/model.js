
var dbconnect = require("./../dbconnect.js");

function sql(key, tabledata, sqlrequest){
    var result = dbconnect.query(sqlrequest, function (error, results, fields) {
        if (error) {
            var apiResult = {};
            apiResult.data = [];
            res.json(apiResult);
        }
        var resultJson = JSON.stringify(results);
        tabledata[key] = JSON.parse(resultJson);
        });
    }
module.exports.presentation = function(tabledata){
    sql('presentation', tabledata, "SELECT nom, description, email_address as email, phone_number as tel, linkedin_link as linkedin, github_link as github, places.place_name as entreprise, cities.city as ville, cv_link as cv FROM presentation INNER JOIN places ON presentation.place_id = places.id INNER JOIN cities ON places.city_id = cities.id");
}

module.exports.experiences = function(tabledata){
    sql('experiences', tabledata, 'SELECT dateStart.year as debut, dateEnd.year as fin, places.place_name as entreprise, cities.city as ville, countries.country as pays, exp_title as poste, exp_description as missions FROM experiences INNER JOIN dates dateStart ON experiences.date_start_id = dateStart.id INNER JOIN dates dateEnd ON experiences.date_end_id = dateEnd.id INNER JOIN places ON experiences.place_id = places.id INNER JOIN cities ON places.city_id = cities.id INNER JOIN cities_countries ON cities.id = cities_countries.cities_id INNER JOIN countries ON countries.id = cities_countries.countries_id'); 
}

module.exports.formations = function(tabledata){
    sql('formations', tabledata, 'SELECT dateStart.year as debut, dateEnd.year as fin, diploma_name as diplome, places.place_name as ecole, cities.city as ville, countries.country as pays FROM school INNER JOIN dates dateStart ON school.date_start_id = dateStart.id INNER JOIN dates dateEnd ON school.date_end_id = dateEnd.id INNER JOIN places ON school.place_id = places.id INNER JOIN cities ON places.city_id = cities.id INNER JOIN cities_countries ON cities.id = cities_countries.cities_id INNER JOIN countries ON countries.id = cities_countries.countries_id');    
}

module.exports.competences = function(tabledata){
    sql('competences',tabledata,'SELECT GROUP_CONCAT(skill SEPARATOR ", ") as skill FROM skills')
}

module.exports.projets = function(tabledata){
    sql('projets',tabledata, 'SELECT projects.id, project_name titre, places.place_name lieu, images.picture image FROM projects INNER JOIN images ON projects.main_img_id = images.id INNER JOIN places ON projects.place_id = places.id'); 
}

module.exports.projet = function(tabledata){
    sql('projet',tabledata, "SELECT projects.id, projects.project_name as projet, projects.project_description as description, projects.link_to_project as lien, dates.year as annee, places.place_name as ville, mainImg.picture as mainImg, SecImg.picture as secImg FROM projects INNER JOIN dates ON projects.project_year_id = dates.id INNER JOIN places ON projects.place_id = places.id INNER JOIN images as mainImg ON projects.main_img_id = mainImg.id INNER JOIN images as SecImg ON projects.sec_img_id = SecImg.id WHERE projects.id");      
}