import React from 'react'

class EntradUnidade extends React.Component {
    constructor(props) {
        super(props)
    }

    handleChange = (e) => {
        this.props.onUnitChange(e.target.value)
    }

    render() {
        return <div>
            <input type="text" value={this.props.valor} onChange={this.handleChange}/>
            </div>
    }

}