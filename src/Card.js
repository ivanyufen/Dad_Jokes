import React from 'react'

class Card extends React.Component {

    render() {
        return (
            <div className="card w-50 mx-auto" style={{ marginTop: "350px" }}>
                <div className="card-body">
                    <h5 className="card-title">{this.props.setup}</h5>
                    <p className="card-text font-weight-bold">{this.props.punchline} <i class="far fa-grin-squint-tears"></i></p>
                    <a href="#" class="btn btn-danger" onClick={() => { window.location.reload() }}>Reload <i class="fas fa-sync-alt"></i></a>
                </div>
            </div>
        )
    }
}

export default Card;