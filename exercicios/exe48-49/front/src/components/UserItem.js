import React from 'react'

class UserItem extends React.Component {

    constructor(props){
        super(props)
    }

    handleDelete = () => {
        this.props.handleAction(this.props.value._id)
    }

    handleEdit = () => {
        this.props.handleAction(this.props.value._id)
    }

    render(){
        return <div>Nome: {this.props.value.name} Password: {this.props.value.password} 
        <a href="#" onClick={this.handleDelete}>Deletar</a>
        <a href="#" onClick={this.handleEdit}>Editar</a>
        </div>
    }
}

export default UserItem