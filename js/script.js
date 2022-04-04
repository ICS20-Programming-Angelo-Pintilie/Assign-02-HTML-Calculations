// Copyright (c) 2022 Angelo Pintilie All rights reserved
//
// Created by: Angelo Pintilie
// Created on: March 2022
// This file contains the JS functions for index.html

'use strict'
/**
 * These functions calculate the volume and surface area of a cube.
 */
function calculate () {
  // input
  const side = parseFloat(document.getElementById('side-length-of-cube').value)

  // process
  const area = (side **3)

  // output
  document.getElementById('area').innerHTML = 'Area is: ' + area + ' cm²'
}