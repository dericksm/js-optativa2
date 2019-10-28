import React from 'react';
import Total from './Total'
import Meses from './Meses'
import Investimento from './Investimento'

class CalculaInvestimentos extends React.Component {
  constructor(props){
    super(props)
      this.state = {
        investimento: 1,
        meses: 1,
        total: 1
      }
  }

  handleInvestimento = (investimento) => {
    this.setState({
      investimento: investimento,
      total: this.state.meses * this.state.investimento,
      meses: this.state.total / this.state.investimento
    })
  }

  handleTotal = (total) => {
    this.setState({
      investimento: this.state.total / this.state.meses,
      total: total,
      meses: this.state.total / this.state.investimento
    })
  }

  handleMeses = (meses) => {
    this.setState({
      investimento: this.state.total / this.state.meses,
      total: meses * this.state.investimento,
      meses: meses
    })
  }

  render(){
    return <div>
      total: <Total  valor={this.state.total} onUnitChange={this.handleTotal} />
      meses: <Meses valor={this.state.meses} onUnitChange={this.handleMeses} />
      investimento: <Investimento valor={this.state.investimento} onUnitChange={this.handleInvestimento} />
      </div>
  }
}

export default CalculaInvestimentos