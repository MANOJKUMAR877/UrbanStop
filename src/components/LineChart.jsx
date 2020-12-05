import React, { Component } from 'react'
import fetchApi from '../fetchApi';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend } from 'recharts'
export default class Linechart extends Component {
    constructor(props) {
        super(props)

        this.state = {
            data: []
        }


    }

    componentDidMount = async () => {
        let apiValue = await fetchApi()

        this.setState({ data: apiValue }, () => { console.log(this.state.data) })
    };



    render() {
        return (
            <>
                <LineChart width={1000} height={700} data={this.state.data}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                    <CartesianGrid vertical={false} />
                    <XAxis padding={{ left: 20 }} domain={[0, 50]} />
                    <YAxis type="number" domain={[25, 100]} />
                    <Tooltip />
                    <Legend />

                    <Line type="monotone" dataKey="data_error" stroke="#8884d8" />
                    <Line type="monotone" dataKey="incoming_data" stroke="#82ca9d" />
                </LineChart>
            </>
        )
    }
}
