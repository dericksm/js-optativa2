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



  handleMeses = (query) => {
    let url = `https://api.domainsdb.info/v1/domains/search?${query}`
    axios.get(url)
      .then(function (response) {
        this.setState({
          domain: 
          updateDate:
          country: 
          ipAddress :
        })
      })
      .catch(function (error) {
        console.log(error);
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