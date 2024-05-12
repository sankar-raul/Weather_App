import React, { Component } from 'react'
import style from './stylesheets/MainFrame.module.css'
class MainFrame extends Component {
 constructor(props) {
    super(props)
 }
 render() {
   return (
    <main className={style.mainFrame}>
        {this.props.children}
    </main>
   )
 }
}
export default MainFrame