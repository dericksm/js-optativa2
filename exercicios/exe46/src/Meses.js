import React from 'react'

class Meses extends React.Component {
    constructor(props) {
        super(props)
    }

    handleChange = (e) => {
        this.props.onUnitChange(e.target.value)
    }

    render() {
        return <div>
            <span>Meses</span>
            <input type="number" value={this.props.valor} onChange={this.handleChange}/>
            </div>
    }

}

export default Meses