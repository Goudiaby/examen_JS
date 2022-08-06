// const express = require('express');
import express from 'express'
const app = express()
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);




const port = process.env.PORT || 8000
app.use(express.static(path.join(__dirname,"/public/")));


//route Home
app.get('/',function(req,res){
	res.sendFile(path.join(__dirname,'html/accueil.html'))

})

//route formulaire creation 
app.get('/cree',function(req,res){
	 
	res.sendFile(path.join(__dirname,'html/formulaire_creation.html'))

})

//route questinnaire 
app.get('/question',function(req,res){
	 
	res.sendFile(path.join(__dirname,'html/affichage_question.html'))

})













app.listen(port);

console.log('server: http://localhost:'+ port);