﻿//Instead of setting timer check if the DOM Changes -- BETTER APPROACH
// CLEAN UP IS NEEDED!

setInterval(function () {

var opts = {
    lines: 12, // The number of lines to draw
    angle: 0, // The span of the gauge arc
    lineWidth: 0.46, // The line thickness
    pointer: {
        length: 0.68, // The radius of the inner circle
        strokeWidth: 0.035, // The thickness
        color: '#424242' // Fill color
    },
    limitMax: false,     // If true, the pointer will not go past the end of the gauge
    colorStart: '#363636',   // Colors
    colorStop: '#03A9F4',    // just experiment with them
    strokeColor: '#f5f5f5',
    // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true     // High resolution support
};

var current = document.getElementById('minVal').textContent;
//console.log(document.getElementById('maxVal').textContent);
var target = document.getElementById('canvas-preview'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge.maxValue = document.getElementById('maxVal').textContent; // set max gauge value --- HERE WE RETRIEVE THE GOAL VALUE
gauge.setMinValue(0); /// 
gauge.animationSpeed = 1; // set animation speed (32 is default value)
//var gauageMin = parseInt(document.getElementById('minVal').textContent);
gauge.set(parseInt(current)) // set the value HERE WE NEED TO SET THE CURRENT VALUE
gauge.setTextField(document.getElementById("preview-textfield"));
/////////////////////////////////////////////////////////////////////////////////////////////

var opts = {
    lines: 12, // The number of lines to draw
    angle: 0, // The span of the gauge arc
    lineWidth: 0.46, // The line thickness
    pointer: {
        length: 0.68, // The radius of the inner circle
        strokeWidth: 0.035, // The thickness
        color: '#424242' // Fill color
    },
    limitMax: false,     // If true, the pointer will not go past the end of the gauge
    colorStart: '#363636',   // Colors
    colorStop: '#03A9F4',    // just experiment with them
    strokeColor: '#f5f5f5',
    // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true     // High resolution support
};
var current = document.getElementById('minVal2').textContent;

var target = document.getElementById('canvas-preview2'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge.maxValue = document.getElementById('maxVal2').textContent; // set max gauge value
gauge.animationSpeed = 1; // set animation speed (32 is default value)
gauge.set(parseInt(current));
gauge.setTextField(document.getElementById("preview-textfield"));

var opts = {
    lines: 12, // The number of lines to draw
    angle: 0, // The span of the gauge arc
    lineWidth: 0.46, // The line thickness
    pointer: {
        length: 0.68, // The radius of the inner circle
        strokeWidth: 0.035, // The thickness
        color: '#424242' // Fill color
    },
    limitMax: false,     // If true, the pointer will not go past the end of the gauge
    colorStart: '#363636',   // Colors
    colorStop: '#03A9F4',    // just experiment with them
    strokeColor: '#f5f5f5',
    // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true     // High resolution support
};
console.log(document.getElementById('maxVal3').textContent);
var target = document.getElementById('canvas-preview3'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge.maxValue = document.getElementById('maxVal').textContent; // set max gauge value
gauge.animationSpeed = 1; // set animation speed (32 is default value)
gauge.set(80);
gauge.setTextField(document.getElementById("preview-textfield"));


var opts = {
    lines: 12, // The number of lines to draw
    angle: 0, // The span of the gauge arc
    lineWidth: 0.46, // The line thickness
    pointer: {
        length: 0.68, // The radius of the inner circle
        strokeWidth: 0.035, // The thickness
        color: '#424242' // Fill color
    },
    limitMax: false,     // If true, the pointer will not go past the end of the gauge
    colorStart: '#363636',   // Colors
    colorStop: '#03A9F4',    // just experiment with them
    strokeColor: '#f5f5f5',
    // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true     // High resolution support
};
console.log(document.getElementById('maxVal4').textContent);
var target = document.getElementById('canvas-preview4'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge.maxValue = document.getElementById('maxVal').textContent; // set max gauge value
gauge.animationSpeed = 1; // set animation speed (32 is default value)
gauge.set(30);
gauge.setTextField(document.getElementById("preview-textfield"));


var opts = {
    lines: 12, // The number of lines to draw
    angle: 0, // The span of the gauge arc
    lineWidth: 0.46, // The line thickness
    pointer: {
        length: 0.68, // The radius of the inner circle
        strokeWidth: 0.035, // The thickness
        color: '#424242' // Fill color
    },
    limitMax: false,     // If true, the pointer will not go past the end of the gauge
    colorStart: '#363636',   // Colors
    colorStop: '#03A9F4',    // just experiment with them
    strokeColor: '#f5f5f5',
    // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true     // High resolution support
};
console.log(document.getElementById('maxVal5').textContent);
var target = document.getElementById('canvas-preview5'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge.maxValue = document.getElementById('maxVal').textContent; // set max gauge value
gauge.animationSpeed = 1; // set animation speed (32 is default value)
gauge.set(5);
gauge.setTextField(document.getElementById("preview-textfield"));


var opts = {
    lines: 12, // The number of lines to draw
    angle: 0, // The span of the gauge arc
    lineWidth: 0.46, // The line thickness
    pointer: {
        length: 0.68, // The radius of the inner circle
        strokeWidth: 0.035, // The thickness
        color: '#424242' // Fill color
    },
    limitMax: false,     // If true, the pointer will not go past the end of the gauge
    colorStart: '#363636',   // Colors
    colorStop: '#03A9F4',    // just experiment with them
    strokeColor: '#f5f5f5',
    // to see which ones work best for you
    generateGradient: true,
    highDpiSupport: true     // High resolution support
};
console.log(document.getElementById('maxVal6').textContent);
var target = document.getElementById('canvas-preview6'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge.maxValue = document.getElementById('maxVal').textContent; // set max gauge value
gauge.animationSpeed = 1; // set animation speed (32 is default value)
gauge.set(34);
gauge.setTextField(document.getElementById("preview-textfield"));
}, 1000);