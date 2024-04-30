const pool = require('../../dbConnect')
const express = require('express')

const queries = require('./queries')


const getIngredient = async (req,res) => {
    try {
        await pool.query(queries.getIngred,(err,result) => {
            if (err) throw err;    
            res.status(200).json(result.rows)
        })
        
    } catch (error) {
        res.status(500).json({error : 'Une erreur s\'est produite'}  )
    }
}
const getIngredById = async (req,res) =>{
    const id =  parseInt(req.params.id)
    try {
        await pool.query(queries.getIngredById,[id],(err,result) =>{
            if(err) throw err;
            res.status(200).json(result.rows)
        })
    } catch (error) {
        
    }
}
const searchIngred = async (req, res) => {

    const data = req.params.elementSearch;
    await pool.query(queries.research,[`%${data}%`], (err, result) => {
        if (err) {
            throw err;
        }
        res.status(200).json(result);
    });
}
const searchByCate = async (req,res) => {
    const id = parseInt(req.params.id)
    await pool.query(queries.getIngredByNomCate,[id],(error,result) =>{
        if(error){
            throw error
        }else{
            res.status(200).json(result.rows)
        }
    })
}
const listNomCate = async (req,res) =>{
    await pool.query(queries.getNomCate,(err,result) =>{
        if (err) throw err;
        res.status(200).json(result.rows)
    })
}

 
module.exports = {
    getIngredient, 
    searchIngred,
    getIngredById,
    searchByCate,
    listNomCate
}