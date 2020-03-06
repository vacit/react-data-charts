import React, { Component } from 'react';
import LineChart from './charts/LineChart';
import { getData } from './helpers';
import PieChart from './charts/PieChart';
import { pieBaseObj } from './optionObjects/pieBaseObj'
import { lineBaseObj } from './optionObjects/lineBaseObj'

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            pieOption: {},
            lineOption1: {},
            lineOption2: {},
            data: {},

        }
    }


    getNames = data => {
        let names = [];
        data.result.forEach(obj => {
            names.push(obj.hotelname)
        });
        return names
    }


    getDistribution = data => {
        let uniqueNames = [];
        let uniqueCount = [];

        const distribution = data.reduce((acum, cur) => Object.assign(acum, { [cur]: (acum[cur] | 0) + 1 }), {});
        for (let el in distribution) {
            if (distribution[el] > 20) {
                uniqueNames.push(el)
                uniqueCount.push(distribution[el])
            }
        }
        return {
            uniqueNames,
            uniqueCount
        }
    }

    getPieOption = (names, commentCount) => {
        let legendData = [];
        let seriesData = [];
        let selected = {};
        names.map((name, index) => {
            legendData.push(name);
            seriesData.push({
                name: name,
                value: commentCount[index]
            });
            selected[name] = index < 10;

        });
        return {
            legendData,
            seriesData,
            selected
        };

    }

    componentDidMount() {
        const data = getData('hotelname,baseprice,commentcount');
            const names = data.result.hotelname;
            const basePrice = data.result.baseprice;
            const commentCount = data.result.commentcount;
            const { uniqueNames, uniqueCount } = this.getDistribution(names);
            // console.log(names, basePrice, uniqueCount, data)
            const pieOption = this.getPieOption(uniqueNames, uniqueCount)
            console.log(pieOption)
            //#region 
            this.setState({
                pieOption: {
                    ...pieBaseObj,
                    legend: {
                        ...pieBaseObj.legend,
                        data: pieOption.legendData,
                        selected: pieOption.selected
                    },
                    series: [
                        {
                            ...pieBaseObj.series[0],
                            data: pieOption.seriesData,
                        }
                    ]
                },
                lineOption1: {
                    ...lineBaseObj,
                    xAxis: {
                        ...lineBaseObj.xAxis,
                        data: uniqueNames,
                    },
                    series: [
                        {
                            ...lineBaseObj.series[0],
                            data: uniqueCount,
                        }
                    ]
                },
                lineOption2: {
                    title: {
                        text: 'Base Price',
                        subtext: 'Hotels base price in a sample search result'
                    },
                    xAxis: {

                        type: 'category',
                        data: names,
                        axisTick: {
                            alignWithLabel: true
                        },
                        axisLabel: {
                            rotate: -90
                        }
                    },
                    yAxis: {
                        type: 'value',

                    },
                    series: [{
                        data: basePrice,
                        type: 'line'
                    }]
                },


                data,
            })
            //#endregion

    }


    render() {
        return (
            <div style={{ 'padding': '20px' }} className="App" >
                <header className="App-header">
                    <PieChart {...this.state.pieOption}></PieChart>
                    <LineChart {...this.state.lineOption1}></LineChart>
                    <LineChart {...this.state.lineOption2}></LineChart>
                </header>
            </div>
        );
    }
}

export default App;
