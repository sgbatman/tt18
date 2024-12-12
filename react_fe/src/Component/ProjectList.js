import React, { Component } from "react";
import Project from "./Project";
import User from "./User";




export default class ProjectList extends Component {
    openProject() {
        console.log('opening project');
    }
    myUser = new User('xiaoming', [new Project('p1', 1000), new Project('p2', 2000), new Project('p3', 200)]);
    myList = this.myUser.projectList;
    render() {
        return (this.myList.map((project) => (
            <button onClick={this.openProject()}>{project.name}</button>
            ))

      );
    }
  }