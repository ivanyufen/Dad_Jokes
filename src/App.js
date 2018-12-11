import React from 'react'
import axios from 'axios'
import Card from './Card';

class App extends React.Component {
    //state utk tampung data joke
    state = { jokeData: "" }

    // setelah ke mount langsung ambil data
    componentDidMount() {
        axios.get("https://safe-falls-22549.herokuapp.com/random_joke").then(
            (x) => {
                this.setState({
                    jokeData: x.data
                })
            }
        )
    }

    render() {
        return (
            <React.Fragment>
                <div className="container text-right py-5">
                    {/* tampilin dengan panggil component Card dengan props setup dan punchline */}
                    <Card setup={this.state.jokeData.setup} punchline={this.state.jokeData.punchline} />
                </div>

            </React.Fragment>
        )
    }
}
export default App;