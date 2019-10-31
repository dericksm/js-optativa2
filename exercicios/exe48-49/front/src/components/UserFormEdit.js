import React from 'react'

class UserFormEdit extends React.Component {

    constructor(props){
        super(props)
    }

    handleEdit = () => {
        this.props.handleAction(this.props.value._id)
    }

    render(){
        return <div>Nome: {this.props.value.name} 
        / Password: {this.props.value.password} 
        - <a href="#" onClick={this.handleEdit}>Editar</a>
        </div>
    }
}

export default UserFormEdit