import React from 'react';
import EntradaUnidade from './EntradUnidade'

class Calculadora extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        bytes: 20,
        kbytes: 2000
      }
  }

  handleByteChange = (unidade) => {
    this.setState({
      bytes: unidade,
      kbytes: unidade *1000
    })
  }

  handleKByteChange = (unidade) => {
    this.setState({
      bytes: unidade / 1000,
      kbytes: unidade
    })
  }

  render(){
    return <div>
      byte: <EntradaUnidade  valor={this.state.bytes} onUnitChange={this.handleByteChange} />
      kbyte: <EntradaUnidade valor={this.state.kbytes} onUnitChange={this.handleKByteChange} />
      </div>
  }
}

export default Calculadora