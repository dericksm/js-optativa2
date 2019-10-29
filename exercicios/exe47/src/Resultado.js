import React from 'react'

class Pesquisa extends React.Component {
    constructor(props) {
        super(props)
    }

    handleChange = (e) => {
        this.props.onUnitChange(this.props.search)
    }


    handleChahandleClicknge = (e) => {
        this.props.onUnitChange(e.target.value)
    }
    
    render() {
        return <div>
            <input type="text" onChange={ this.handleChange } />
            <input type="button" value="Pesquisar" onClick={this.handleClick} />
            <div>
                <input type="text" value={this.props.ip} readOnly />
                <input type="text" value={this.props.domain} readOnly />
                <input type="text" value={this.props.country} readOnly />
                <input type="text" value={this.props.ipAddress} readOnly />
            </div>
        </div>
    }

}

export default Pesquisa