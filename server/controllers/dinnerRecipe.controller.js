const express = require("express");
const Dinner = require("../models/dinner.model");

const DinnerRecipeController={

    //test
    test:(req, res)=>{
        res.json({message:"Dinner"})
    },

    //Read
    getAll : (req, res) => {
        Dinner.find({})
        .then((recipe) => {
            res.status(200).json({dinnerRecipes:recipe})
        })
        .catch((err)=>{
            res.status(500).json({message: "Something went wrong", error:err})
        })
    },

    getOne: (req, res) => {
        Dinner.findOne({_id: req.params.id})
        .then((recipe) =>{
            res.status(200).json({recipe})
        }) 
        .catch((err)=>{
            res.status(500).json({message: "Something went wrong", err})
        })
    },

    //create
    createOne : (req, res) => {
        Dinner.create(req.body)
        .then((recipe) => {
            res.status(201).json({recipe})
        })
        .catch((err)=>{
            res.status(400).json({message: "Something went wrong", err})
        })
    },

    //update
    updateOne: (req, res) => {
        Dinner.findByIdAndUpdate({_id: req.params.id},req.body,{new: true, runValidators: true})
        .then((recipe) =>{
            res.status(200).json({updatedRecipe: recipe})
        })
        .catch((err)=>{
            res.status(500).json({message: "Something went wrong", err})
        })
    },

    //delete
    deleteOne: (req, res) => {
        Dinner.findByIdAndDelete({_id: req.params.id})
        .then((recipe) =>{
            res.status(200).json({deletedRecipe: recipe})
        })
        .catch((err)=>{
            res.status(500).json({message: "Something went wrong", err})
        })
    },

}

module.exports = DinnerRecipeController;