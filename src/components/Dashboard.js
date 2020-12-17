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

    this.selectPanel = this.selectPanel.bind(this) // set scope of 'this' in the select panel function
  };

  selectPanel(id) {
    // if the foucsed is truth, set to null, else set to the id
    this.setState(prevState => ({
      focused : prevState.focused ? null : id
    }));
  }

  render() {
    const dashboardClasses = classnames("dashboard", {
      "dashboard--focused": this.state.focused
    });

    const panels = data
      .filter(
        panel => this.state.focused === null || this.state.focused === panel.id
        // if the focused is null, every panel pass, else, only the match goes through
      )
      .map((panel) => {
        return <Panel 
        key = {panel.id}
        label = {panel.label}
        value = {panel.value}
        onSelect = {event => this.selectPanel(panel.id)}
        />
      })

    if (this.state.loading) {
      return <Loading />
    }
    return <main className={dashboardClasses}> {panels} </main>;
  }
}

export default Dashboard;
