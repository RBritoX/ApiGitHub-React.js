import React from 'react'

const Repos = ({ repo }) => (
    <div className="card card-body mb-2">
        <div className="row">
            <div className="col-md-6">
                <a href="repo.html_url" className="font-weight-bold" target="_blank" >{repo.name}</a>
            </div>
            <div className="col-md-6">
                <span className="badge"><i className="fas fa-star text-warning"></i> Stars: {repo.stargazers_count}</span>
                <span className="badge"><i className="fas fa-eye text-primary"></i> Watch: {repo.watchers_count}</span>
                <span className="badge"><i className="fas fa-code-branch text-success"></i> Forks: {repo.forks_count}</span>
            </div>
        </div>
    </div >
)

export default Repos;