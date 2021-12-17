import React from "react"
var classNames = require('classnames');

export interface Container{
    id: string,
    name: string,
    image: string,
    state: string,
    status: string
}

export class ContainerListItem extends React.Component<Container, {}>{
 isrunning() {
     return this.props.state === 'running'
 }

  render() {
    const buttontext = this.isrunning() ? 'stop': 'start'
    const panelclass = this.isrunning()? 'success': 'default'
    const classes = classNames('panel', `panel-${panelclass}`)

    return(
        <div className="col-sm-3">
        <div className={ classes }>
            <div className="panel-heading">{ this.props.name }</div>
            <div className="panel-body">
                status: {this.props.status}<br/>
                image: {this.props.image}
            </div>
            <div className="panel-footer">
                <button className="btn btn-default">{buttontext}</button>
            </div>
        </div>
    </div>
    )
  }
}