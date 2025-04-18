'use client'

import buttonStyles from "./button.module.css";
import contentStyles from "./content.module.css";
import titleStyles from "./title.module.css";
import "./App.css"
import React from "react"

export default function Home() {
  return (
    <Card className="App-card" title="Title" warning="Warning!!!" message="Hello world!!!" checkedButton={true} />
  );
}


export function Card(props) {
  return (
     <div className={props.className}>
      <Title text={props.title}/>
      <Content warning={props.warning} text={props.message} />
      <Button checkIt={props.checkedButton} />
     </div>
  );
}

export function Title(props) {
  return (
    <div className={titleStyles.normal}>{props.text}</div>
  );
}

export const Content = (props) => {
  return (
    <div>
      <span className={contentStyles.warning}>{props.warning}</span>
      <span className={contentStyles.normal}>{props.text}</span>
    </div>
  );
}


export class Button extends React.Component {
  state = {
    pressed: false,
    checked: false,
    enabled: true,
    selected: false
  };

  onSelect = () => this.setState({selected: true});

  onDeselect = () => this.setState({selected: false});

  onPressed = () => {
    if (this.props.checkIt) {
      if (this.state.checked) this.setState({checked: false})
        else this.setState({checked: true})
    }
    this.setState({pressed: true});
  };

  onDepressed = () => this.setState({pressed: false});

  render() {
    const { pressed, checked, enabled, selected } = this.state;

    let style = buttonStyles.normal;

    if (enabled) {
      if (selected) {
        style=buttonStyles.selected
      }

      if (checked) {
        style=buttonStyles.checked
      }

      if (pressed) {
        console.log("pressed")
        style=buttonStyles.pressed
      } else console.log("normal")

    } else {
      style=buttonStyles.disabled
    }

    console.log(style)

    return (
      <button 
          className={style} 
          onMouseOver={this.onSelect} 
          onMouseOut={this.onDeselect}
          onMouseDown={this.onPressed}
          onMouseUp={this.onDepressed}
      >OK</button>
    );
  }
}