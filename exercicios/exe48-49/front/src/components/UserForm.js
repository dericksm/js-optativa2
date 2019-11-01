import React from 'react'


class UserForm extends React.Component {

    constructor(props) {
        super(props)
        this.state = { name: "", "password": "" }
    }

    handleChange = (event) => {
        const inputName = event.target.name
        const inputValue = event.target.value
        this.setState({ [inputName]: inputValue })
    }

    handleClick = () => {
        var data = { "name": this.state.name, "password": this.state.password }
        this.props.handleAction(data)
    }

    render() {
        return <div className="form-control" style={{ marginBottom: '200px' }}>
        <div className="row">
        <form>
        <label>Nome:</label>
        <input type="text" className="form-control col-8" name="name" onChange={this.handleChange} />
                
        <label>Password: </label>
        <input type="password" className="form-control col-8"  name="password" onChange={this.handleChange} />
                <input onClick={this.handleClick} type="button" value="Inserir" />
            </form>
        </div>
        </div>
    }
}

export default UserForm