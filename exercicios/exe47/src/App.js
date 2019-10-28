import React from 'react';
import Total from './Total'
import Meses from './Meses'
import Investimento from './Investimento'
const axios = require('axios')
class CalculaInvestimentos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      domain: '',
      updateDate: '',
      country: '1',
      ipAddress: ''
    }
  }



  handleMeses = (meses) => {

    axios.get('/user?ID=12345')
      .then(function (response) {
        // handle success
        console.log(response);
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
      .finally(function () {
        // always executed
      });



    this.setState({
      investimento: this.state.total / this.state.meses,
      total: meses * this.state.investimento,
      meses: meses
    })
  }

  render() {
    return <div>
      total: <Total valor={this.state.total} onUnitChange={this.handleTotal} />
      meses: <Meses valor={this.state.meses} onUnitChange={this.handleMeses} />
      investimento: <Investimento valor={this.state.investimento} onUnitChange={this.handleInvestimento} />
    </div>
  }
}

export default CalculaInvestimentos