const getIngred = 'SELECT * FROM ingredient'
const research = 'SELECT * FROM ingredient WHERE "nomIngred" ILIKE $1'  
const getIngredById = 'SELECT * FROM ingredient WHERE "idIngred" = $1'
const getIngredByNomCate = 'SELECT * from ingredient where "idCate" = $1'
const getNomCate = 'SELECT "NomCate" FROM categorie '

module.exports ={
    getIngred,
    research,
    getIngredById,
    getIngredByNomCate,
    getNomCate
}