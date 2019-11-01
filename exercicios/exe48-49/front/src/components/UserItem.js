import React from 'react'

class UserItem extends React.Component {

    constructor(props) {
        super(props)
    }

    handleDelete = () => {
        this.props.handleAction(this.props.value._id)
    }

    handleEdit = () => {
        this.props.handleAction(this.props.value._id)
    }

    render() {
        return (
            <div className="col-12">
                Nome: {this.props.value.name} Password: {this.props.value.password}
                <button style={{ marginRight: '5px' }} className="btn btn-danger btn-sm" href="#" onClick={this.handleDelete}>Deletar</button>

                <button className="btn btn-primary btn-sm" href="#" onClick={this.handleEdit}>Editar</button>
            </div>
        )
    }
}

export default UserItem