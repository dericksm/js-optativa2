import React from 'react'

class UserFormEdit extends React.Component {

    constructor(props) {
        super(props)
    }

    handleEdit = () => {
        this.props.handleAction(this.props.value._id)
    }

    render() {
        return (
            <div className="row">

                <label>Nome</label>
                <input value={this.props.value.name} ></input>

                <label>Nome</label>
                <input value={this.props.value.password}></input>

                <button className="btn btn-primary" href="#" onClick={this.handleEdit}>Editar</button>
            </div>
        )
    }
}

export default UserFormEdit