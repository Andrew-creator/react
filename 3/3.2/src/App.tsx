/** @jsxImportSource @emotion/react */

import { jsx } from '@emotion/react'
import './App.css'
import {createState, useState} from "react";
import React from "react"
import { css } from '@emotion/react'

function App() {

  return (
    <>
       <Card className="App-card" title="Title" message="Hello world!!!" checkedButton={true} buttonTitle="Good" />
       <Ebutton checkIt={true} buttonTitle="Hello world" />
    </>
  )
}

export default App


export function Card(props) {
  return (
     <div className="rounded-2xl bordermx-auto max-w-sm items-center gap-x-4 rounded-xl bg-orange-50 p-6 shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
      <Title text={props.title}/>
      <Content message={props.message} />
      <Button checkIt={props.checkedButton} buttonTitle={props.buttonTitle} />
     </div>
  );
}

export function Title(props) {
  return (
    <div className="text-3xl font-bold underline p-4">{props.text}</div>
  );
}

export const Content = (props) => {
  return (
    <div className="text-xl p-2">{props.message}</div>
  );
}


export class Button extends React.Component {
  state = {
    pressed: false,
    checked: false,
    enabled: true,
    selected: false
  };

  onSelect = () => {
    console.log("selected")
    this.setState({selected: true});
  }

  onDeselect = () => {
    console.log("deselected")
    this.setState({selected: false});
  }

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

    const buttonStyle="p-2 rounded-lg"
    let style = "bg-sky-400 " + buttonStyle;

    if (enabled) {
      if (pressed) {
        console.log("pressed")
        style="bg-sky-800 text-white " + buttonStyle
      } else {
        if (selected) {
          if (checked) style="bg-yellow-200 " + buttonStyle
            else style="bg-sky-200 " + buttonStyle
        } else {
          if (checked) style="bg-yellow-400 " + buttonStyle
        }
      }
    } else {
      style="bg-gray-200 text-black " + buttonStyle
    }

    console.log(style)

    return (
      <button 
          className={style}
          onMouseOver={this.onSelect} 
          onMouseOut={this.onDeselect}
          onMouseDown={this.onPressed}
          onMouseUp={this.onDepressed}
      >{this.props.buttonTitle}</button>
    );
  }
}









export function Ebutton(props) {
  const [pressed, pressedChange] = useState(false);
  const [selected, selectedChange] = useState(false);
  
  const onSelect = () => {
    console.log("selected")
    selectedChange(true);
  }
  
  const onDepressed = () => pressedChange(false);
  
  const onDeselect = () => {
    console.log("deselected")
    selectedChange(false);
  }
  
  const onPressed = () => {
    pressedChange(true);
  };

  return (
    <EasyEbutton
          pressed={pressed}
          selected={selected}
          onSelect={onSelect} 
          onDeselect={onDeselect}
          onPressed={onPressed}
          onDepressed={onDepressed}
          buttonTitle={props.buttonTitle} />
  );
}

export function EasyEbutton(props) {
  let style = css`background-color: red;
  padding: 32px;
  font-size: 24px;
  border-radius: 4px;`;

  if (props.pressed) {
    console.log("pressed")
    style=css`background-color: yellow; color:white;padding: 32px;
      font-size: 24px;
      border-radius: 4px;`
  } else {
    if (props.selected) {
      style=css`background-color: green;padding: 32px;
        font-size: 24px;
        border-radius: 4px;`
    }
  }

  return (
    <button 
          css={style}
          onMouseOver={props.onSelect} 
          onMouseOut={props.onDeselect}
          onMouseDown={props.onPressed}
          onMouseUp={props.onDepressed}
      >{props.buttonTitle}</button>
  );
}
