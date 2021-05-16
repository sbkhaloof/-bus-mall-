'use strict';
let attempts=0;
let maxAttempt=25;
let attemptsEL=document.getElementById('attempts');
let busmall=[];
function BusmallImg(productName)
{
this.productName=productName;
this.imagePath='img/'+this.productName
this.shownTimes=0;
this.clicks=0;
this.name=this.productName.split('.')[0];
busmall.push(this);
}
let busmallImg=['bag.jpg','banana.jpg','bathroom.jpg','boots.jpg','breakfast.jpg','bubblegum.jpg','chair.jpg','cthulhu.jpg','dog-duck.jpg','dragon.jpg','pen.jpg','pet-sweep.jpg','scissors.jpg','shark.jpg','sweep.png','tauntaun.jpg','unicorn.jpg','water-can.jpg','wine-glass.jpg'];
for (let i=0;i<busmallImg.length;i++)
{
    new BusmallImg(busmallImg[i]);
}
function generateImg()
{
    return Math.floor(Math.random()*busmall.length);
}
let LimgEL=document.getElementById('left_img');
let MimgEL=document.getElementById('med_img');
let RimgEL=document.getElementById('right_img');

let leftImgIndex;
let midImgIndex;
let rightImgIndex;

function renderimg()
{
    leftImgIndex=generateImg();
    midImgIndex=generateImg();
    rightImgIndex=generateImg();
if(leftImgIndex===midImgIndex)
    {
    leftImgIndex=generateImg();
    }
    else if (midImgIndex===rightImgIndex)
    {
    midImgIndex=generateImg();
    }
LimgEL.setAttribute('src',busmall[leftImgIndex].imagePath);
LimgEL.setAttribute('title',busmall[leftImgIndex].imagePath);
busmall[leftImgIndex].shownTimes++;

MimgEL.setAttribute('src',busmall[ midImgIndex].imagePath);
MimgEL.setAttribute('title',busmall[ midImgIndex].imagePath);
busmall[ midImgIndex].shownTimes++;

RimgEL.setAttribute('src',busmall[rightImgIndex].imagePath);
RimgEL.setAttribute('title',busmall[rightImgIndex].imagePath);
busmall[rightImgIndex].shownTimes++;
}
renderimg();

LimgEL.addEventListener('click',Clicks);
MimgEL.addEventListener('click',Clicks);
RimgEL.addEventListener('click',Clicks);

function Clicks(event)
{
    attempts++;
    if(attempts<=maxAttempt)
    {
    console.log(event.target.id);
    if(event.target.id='left_img'){
    busmall[leftImgIndex].clicks++;
    }else if (event.target.id='mid_img'){
    busmall[midImgIndex].clicks++;
    }else if (event.target.id='right_img'){
    busmall[rightImgIndex].clicks++;
    
}
    // renderImg();
    }
    else 
    {
let buttEL=document.getElementById('butt');
buttEL.addEventListener('click',result);
function result()
{
    for (let i=0;i<busmall.length;i++){
    
document.write(`${busmall[i].name} had ${busmall[i].Clicks} votes, and was seen ${busmall[i].shownTimes} times.`);
    
}}
    }
    // LimgEL.removeEventListener('click',Clicks);
    // MimgEL.removeEventListener('click',Clicks);
    // RimgEL.removeEventListener('click',Clicks);
}