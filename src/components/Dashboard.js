import React, { Component } from "react";

import classnames from "classnames";

import Loading from "./Loading";
import Panel from "./Panel";

const data = [
  {
    id: 1,
    label: "Total Interviews",
    value: 6
  },
  {
    id: 2,
    label: "Least Popular Time Slot",
    value: "1pm"
  },
  {
    id: 3,
    label: "Most Popular Day",
    value: "Wednesday"
  },
  {
    id: 4,
    label: "Interviews Per Day",
    value: "2.3"
  }
];

class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      loading: false,
      focused: null
    }
  };

  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused
    });

    const panels = data
      .filter(
        panel => this.state.focused = null || this.state.focused === panel.id
        // if the focused is null, every panel pass, else, only the match goes through
      )
      .map((panel) => {
        return <Panel 
        key = {panel.id}
        id = {panel.id}
        label = {panel.label}
        value = {panel.value}
        />
      })
    if (this.state.loading) {
      return <Loading />
    }
    return <main className={dashboardClasses}> {panels} </main>;
  }
}

export default Dashboard;
