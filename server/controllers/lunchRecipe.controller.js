const express = require("express");
const Lunch = require("../models/lunch.model");

const LunchRecipeController={

    //test
    test:(req, res)=>{
        res.json({message:"Lunch"})
    },

    //Read
    getAll : (req, res) => {
        Lunch.find({})
        .then((recipe) => {
            res.status(200).json({lunchRecipes:recipe})
        })
        .catch((err)=>{
            res.status(500).json({message: "Something went wrong", error:err})
        })
    },

    getOne: (req, res) => {
        Lunch.findOne({_id: req.params.id})
        .then((recipe) =>{
            res.status(200).json({recipe})
        }) 
        .catch((err)=>{
            res.status(500).json({message: "Something went wrong", err})
        })
    },

    //create
    createOne : (req, res) => {
        Lunch.create(req.body)
        .then((recipe) => {
            console.log("created lunch recipe")
            res.status(201).json({recipe})
        })
        .catch((err)=>{
            res.status(400).json({message: "Something went wrong", err})
        })
    },

    //update
    updateOne: (req, res) => {
        Lunch.findByIdAndUpdate({_id: req.params.id},req.body,{new: true, runValidators: true})
        .then((recipe) =>{
            res.status(200).json({updatedRecipe: recipe})
        })
        .catch((err)=>{
            res.status(500).json({message: "Something went wrong", err})
        })
    },

    //delete
    deleteOne: (req, res) => {
        Lunch.findByIdAndDelete({_id: req.params.id})
        .then((recipe) =>{
            res.status(200).json({deletedRecipe: recipe})
        })
        .catch((err)=>{
            res.status(500).json({message: "Something went wrong", err})
        })
    },

}

module.exports = LunchRecipeController;