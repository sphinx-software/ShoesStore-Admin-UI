import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Badge, Card, CardBody, CardHeader, Col, Row, Table } from 'reactstrap';


async function upDateRole(id, role) {

  return await fetch(process.env.REACT_APP_URL+ process.env.REACT_APP_VERSION+"credentials/" + id, {
    method: 'PATCH', // *GET, POST, PUT, DELETE
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      role: role,
    })
  })

}

function deleteUSer(id) {
  return fetch(process.env.REACT_APP_URL+ process.env.REACT_APP_VERSION +"credentials/" + id, {
    method: 'DELETE', // *GET, POST, PUT, DELETE)
  })
}

// function Actionrole(dataUser) {
//
//
//   if (dataUser.currentRole == "user") {
//     return (
//       <td className={"btn btn-info"} onClick={()=>{
//         upDateRole(dataUser.id, "admin")
//       }}>Appoint</td>
//     )
//   }else if (dataUser.currentRole === "admin") {
//     return (
//       <td className={"btn btn-info"} onClick={()=>{
//         upDateRole(dataUser.id, "user")
//       }}>Demotion</td>
//     )
//   }
//   return null ;
// }

class ActionRole  extends Component{
  state = {
    profile:[]

  }

  async upDateRole(id, role) {
    console.log(id, role)

    return await fetch(process.env.REACT_APP_URL+ process.env.REACT_APP_VERSION+"credentials/" + id, {
      method: 'PATCH', // *GET, POST, PUT, DELETE
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        role: role,
      })
    })

  }

  render() {
    if (this.state.role == "user") {
      return (
        <td className={"btn btn-info"} onClick={()=>{
          this.setState({
            role:"admin"
          })
          this.upDateRole(this.props.profile.id, "admin")
        }}>Appoint</td>
      )
    }else if (this.state.role == "admin") {
      return (
        <td className={"btn btn-info"} onClick={ ()=>{
          this.setState({
            role:"user"
          })
          this.upDateRole(this.props.profile.id, "user")
        }}>Demotion</td>
      )
    }
    return null ;
  }
}

// function UserRow(profile) {
//   let newRole = '';
//   if (profile.profile.role === 'user') {
//     newRole = "admin";
//   }else if (profile.profile.role === 'admin') {
//     newRole = 'user'
//   }
//   const profileLink = `/profiles/${profile.profile.id}`;
//   const role = profile.profile.role;
//   const id = profile.profile.id;
//   return (
//     <tr key={profile.profile.id.toString()}>
//       <th scope="row"><Link to={profileLink}>{profile.profile.id}</Link></th>
//       <td><Link to={profileLink}>{profile.profile.name}</Link></td>
//       <td>{profile.profile.createdAt}</td>
//       <td>{profile.profile.role}</td>
//
//       {/*<td className={"btn btn-info"} onClick={*/}
//       {/*  ()=>{*/}
//       {/*  if (window.confirm("Are you sure")) {*/}
//       {/*    upDateRole(profile.profile.id, newRole);*/}
//       {/*  }*/}
//       {/*}}>*/}
//       {/*  { (()=>{*/}
//       {/*  if (profile.profile.role === "admin") {*/}
//       {/*    return "Demotion";*/}
//       {/*  }else if (profile.profile.role === "user") {*/}
//       {/*    return "Appoint";*/}
//       {/*  }*/}
//       {/*})()}</td>*/}
//       <Actionrole currentRole={role} id={id}/>
//       <td className={"btn btn-danger"} onClick={()=>{
//         if (window.confirm("Are you sure")) {
//           deleteUSer(profile.profile.id);
//         }
//       }
//       }>DELETE</td>
//     </tr>
//   )
// }

class UserRow  extends Component{
  state = {

  }

  render() {
    const profileLink = `/profiles/${this.props.profile.id}`;
    const profile = this.props.profile;
    const profiles = this.props.profiles;
    console.log(this.props.key)
    return (
      <tr key={this.props.profile.id.toString()}>
        <th scope="row"><Link to={profileLink}>{this.props.profile.id}</Link></th>
        <td><Link to={profileLink}>{this.props.profile.name}</Link></td>
        <td>{this.props.profile.createdAt}</td>
        <td>{this.props.profile.role}</td>

        <ActionRole profile={profile} />
        <td className={"btn btn-danger"} onClick={()=>{
          if (window.confirm("Are you sure")) {
            deleteUSer(this.props.profile.id);
          }
        }
        }>DELETE</td>
      </tr>
    )
  }
}

class Users extends Component {
  state = {
    profiles:[],

  }


  async loadAllUser(context) {
    await fetch(process.env.REACT_APP_URL+ process.env.REACT_APP_VERSION +"credentials")
      .then(response => response.json())
      .then(profiles =>  this.setState({
        profiles : profiles.profiles
      }))
  }

  async upDateRole(id, role) {

    return await fetch(process.env.REACT_APP_URL+ process.env.REACT_APP_VERSION+"credentials/" + id, {
      method: 'PATCH', // *GET, POST, PUT, DELETE
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        role: role,
      })
    })

  }

  async componentDidMount() {
    await this.loadAllUser();
  }

  render() {
    const profiles = this.state.profiles;
    return (
      <div className="animated fadeIn">
        <Row>
          <Col xl={6}>
            <Card>
              <CardHeader>
                <i className="fa fa-align-justify"></i> Users <small className="text-muted">example</small>
              </CardHeader>
              <CardBody>
                <Table responsive hover>
                  <thead>
                    <tr>
                      <th scope="col">id</th>
                      <th scope="col">name</th>
                      <th scope="col">registered</th>
                      <th scope="col">role</th>
                      <th className={"text-center"} colSpan={2} scope="col">ACTION</th>
                    </tr>
                  </thead>
                  <tbody>
                  {
                    profiles.map((profile, index) =>
                        <UserRow key={index} profile={profile.data} updateRole={()=>{

                        }}/>
                    )
                  }
                  </tbody>

                </Table>
              </CardBody>
            </Card>
          </Col>
        </Row>
      </div>
    )
  }
}

export default Users;
