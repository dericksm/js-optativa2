import React from 'react'

class Total extends React.Component {
    constructor(props) {
        super(props)
    }

    handleChange = (e) => {
        this.props.onUnitChange(e.target.value)
    }

    render() {
        return <div>
            <span>Total</span>
            <input type="number" value={this.props.valor} onChange={this.handleChange}/>
            </div>
    }

}

export default Total