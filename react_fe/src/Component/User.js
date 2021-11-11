import React, { Component } from "react";




export default class User {
    name;
    projectList =[];

    constructor(name, projectList) {
        this.name = name;
        this.projectList = projectList;
    }
  }