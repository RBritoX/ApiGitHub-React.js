import React from 'react'

const Profile = ({ user }) => (
    <div className="row">
        <div className="col-md-4">
            <div className="card" style={{ width: "18rem" }}>
                <img className="card-img-top" src={user.avatar_url} alt="Card image cap" />
                <ul className="list-group list-group-flush">
                    <li className="list-group-item font-weight-bold">
                        <i className="fas fa-folder text-secondary"></i> Repositórios:
                        <span className="badge float-right">{user.public_repos}</span>
                    </li>
                    <li className="list-group-item font-weight-bold">
                        <i className="fas fa-users text-secondary"></i> Seguidores:
                        <span className="badge float-right">{user.followers}</span>
                    </li>
                    <li className="list-group-item font-weight-bold">
                        <i className="fas fa-user-friends text-secondary"></i> Seguindo:
                        <span className="badge float-right">{user.following}</span>
                    </li>
                </ul>
                <div className="card-body">
                    <a href="user.html_url" target="_blank" className="btn btn-info btn-block">Ver Perfil</a>
                </div>
            </div>
        </div>
    </div>
)

export default Profile;