import * as react from 'react'
import { Container, ContainerListItem } from './containerlistitem'

export class ContainerListProps {
    containers: Container[]
    title?: string
}

export class containerlist extends react.Component<ContainerListProps, {}> {
    render() {
        return (
            <div>
                <h3>{this.props.title}</h3>
                <p>{ this.props.containers.length == 0 ? "no containers to show" : "" }</p>
                <div className="row">
                    { this.props.containers.map(c => <ContainerListItem key={c.name} {...c} />) }
                </div>
            </div>
        )
    }
}