import React from 'react'
import axios from 'axios'
import UserItem from './UserItem'
import UserForm from './UserForm'

class UserPage extends React.Component {

    constructor(props) {
        super(props)
        this.BASE_URL = "http://localhost:4000/api/users"
        this.state = { users: [] }
        this.loadUsers()
    }

    loadUsers = () => {
        axios.get(this.BASE_URL).then((response) => {
            this.setState({ users: response.data })
        }).catch((error) => {
            console.error(error)
        })
    }

    handleInsert = (data) => {
        console.log(data)
        axios.post(this.BASE_URL, data).then(() => {
            this.loadUsers()
        }).catch((error) => {
            console.error(error)
        })
    }

    handleDelete = (id) => {
        console.log(id)
        axios.delete(this.BASE_URL + "/" + id).then(() => {
            this.loadUsers()
        })
    }

    handleEdit = (id, data) => {
        console.log(id, data)
        axios.put(this.BASE_URL + "/" + id, data).then(() => {
            this.loadUsers()
        })
    }

    render() {

        var userList = this.state.users.map((value) => {
            return <UserItem key={value._id} value={value} handleAction={(id) => this.handleDelete(id)} />
        })

        return (
            <div className="row">
                <div className="row">
                    <UserForm handleAction={(data) => this.handleInsert(data)} />
                </div>
                <div className="row">
                    {userList}
                </div>
            </div>
        )
    }
}

export default UserPage