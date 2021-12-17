import * as React from 'react'
import * as _ from 'lodash'
import { Container, ContainerListItem } from './containerlistitem'

const containers: Container[] = [
  {
      id: '1',
      name: 'test container',
      image: 'some image',
      state: 'running',
      status: 'running'
  },
  {
      id: '2',
      name: 'another test container',
      image: 'some image',
      state: 'stopped',
      status: 'running'
  }
]

class AppState {
  containers?: Container[]
  stoppedcontainers?: Container[]
}

export class AppComponent extends React.Component<{}, AppState> {

  constructor(props) {
    super(props)
  }

  render() {
    const partitioned = _.partition(containers, c => c.state == 'running')
    this.state = {
      containers: partitioned[0],
      stoppedcontainers: partitioned[1]
    }

    return (<div className="container"></div>)
  }
}