const express = require("express");
const Breakfast = require("../models/breakfast.model");

const BreakfastRecipeController={

    //test
    test:(req, res)=>{
        res.json({message:"Breakfast"})
    },

    //Read
    getAll : (req, res) => {
        Breakfast.find({})
        .then((recipe) => {
            res.status(200).json({breakfastRecipes:recipe})
        })
        .catch((err)=>{
            res.status(500).json({message: "Something went wrong", error:err})
        })
    },

    getOne: (req, res) => {
        Breakfast.findOne({_id: req.params.id})
        .then((recipe) =>{
            res.status(200).json({recipe})
        }) 
        .catch((err)=>{
            res.status(500).json({message: "Something went wrong", err})
        })
    },

    //create
    createOne : (req, res) => {
        Breakfast.create(req.body)
        .then((recipe) => {
            console.log("created breakfast recipe")
            res.status(201).json({recipe})
        })
        .catch((err)=>{
            res.status(400).json({message: "Something went wrong", err})
        })
    },

    //update
    updateOne: (req, res) => {
        Breakfast.findByIdAndUpdate({_id: req.params.id},req.body,{new: true, runValidators: true})
        .then((recipe) =>{
            res.status(200).json({updatedRecipe: recipe})
        })
        .catch((err)=>{
            res.status(500).json({message: "Something went wrong", err})
        })
    },

    //delete
    deleteOne: (req, res) => {
        Breakfast.findByIdAndDelete({_id: req.params.id})
        .then((recipe) =>{
            res.status(200).json({deletedRecipe: recipe})
        })
        .catch((err)=>{
            res.status(500).json({message: "Something went wrong", err})
        })
    },

}

module.exports = BreakfastRecipeController;