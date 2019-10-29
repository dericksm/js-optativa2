import React from 'react';
const axios = require('axios')

class CalculaInvestimentos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      domain: '',
      updateDate: '',
      country: '1',
      ipAddress: '',
      search: ''
    }
  }

  handleChange = (e) => {
    this.setState({ search: e.target.value });
  }


  handleClick = () => {

    let config = {
      headers: { 'Access-Control-Allow-Origin': '*' }
    }

    console.log(this.state.search)
    let url = `https://api.domainsdb.info/v1/domains/search?${this.state.search}`
    axios.get(url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      }})
      .then(function (response) {
        this.setState({
          domain: response.domains.domain,
          updateDate: response.domains.update_main,
          country: response.domains.country,
          ipAddress: response.domains.A,
        })
      })
      .catch(function (error) {
        console.log(error);
      })




  }

  render() {
    return <div>


      <input type="text" onChange={this.handleChange} />
      <input type="button" value="Pesquisar" onClick={this.handleClick} />
      <div>
        <input type="text" value={this.state.ip} readOnly />
        <input type="text" value={this.state.domain} readOnly />
        <input type="text" value={this.state.country} readOnly />
        <input type="text" value={this.state.ipAddress} readOnly />
      </div>
    </div>

  }
}

export default CalculaInvestimentos