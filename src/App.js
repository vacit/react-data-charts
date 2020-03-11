import React, { Component } from 'react';
import './App.css';
import LineChart from './charts/LineChart';
import { getData } from './helpers';
import PieChart from './charts/PieChart';
import { pieBaseObj } from './optionObjects/pieBaseObj';
import { lineBaseObj } from './optionObjects/lineBaseObj';
import LoginPage from './components/Login';
import Nav from './components/Nav';
import NotFound from './components/NotFound';
import PrivateRoute from './components/PrivateRouter';
import SelectMenu from './components/SelectMenu';
import ChartByTitle from './charts/ChartByTitle';
import chartObj from './optionObjects/chartObj';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartObj: {},
      pieOption: {},
      lineOption1: {},
      lineOption2: {},
      data: {},
      isAuthenticated: false,
      tableTitles: {},
      loading: 'initial',
      dataByTitels: {}
    };
    // this.name = 'test';
    this.email = 'test@test.com';
    this.password = 'test';
  }
  authenticate = ({ email, password }) => {
    if (email === this.email && password === this.password) {
      this.setState({
        isAuthenticated: true
      });
    }
  };
  signout = () => {
    this.setState({
      isAuthenticated: false
    });
  };

  getNames = data => {
    let names = [];
    data.result.forEach(obj => {
      names.push(obj.hotelname);
    });
    return names;
  };

  getDistribution = data => {
    let uniqueNames = [];
    let uniqueCount = [];

    const distribution = data.reduce(
      (acum, cur) => Object.assign(acum, { [cur]: (acum[cur] | 0) + 1 }),
      {}
    );
    for (let el in distribution) {
      if (distribution[el] > 20) {
        uniqueNames.push(el);
        uniqueCount.push(distribution[el]);
      }
    }
    return {
      uniqueNames,
      uniqueCount
    };
  };

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
  };

  componentDidMount() {
    const data = getData('hotelname,baseprice,commentcount');
    // console.log(data);
    const names = data.result.hotelname;
    const basePrice = data.result.baseprice;
    const commentCount = data.result.commentcount;
    const { uniqueNames, uniqueCount } = this.getDistribution(names);
    // console.log(names, basePrice, uniqueCount, data)
    const pieOption = this.getPieOption(uniqueNames, uniqueCount);
    let tableTitles = data.tableTitles.map((title, i) => {
      let dataObj = {
        value: title,
        label: title
      };
      return dataObj;
    });
    //   console.log(pieOption);
    //#region setState
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
            data: pieOption.seriesData
          }
        ]
      },
      lineOption1: {
        ...lineBaseObj,
        xAxis: {
          ...lineBaseObj.xAxis,
          data: uniqueNames
        },
        series: [
          {
            ...lineBaseObj.series[0],
            data: uniqueCount
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
          type: 'value'
        },
        series: [
          {
            data: basePrice,
            type: 'line'
          }
        ]
      },
      loading: 'false',
      data,
      tableTitles
    });
    //#endregion
  }
  getDataByTitles = columnsNames => {
    this.setState({ loading: 'true' });
    const data = getData(columnsNames);
    console.log('data tabels titles', data.tableTitles.toString());

    const result = data.result;

    const keys = Object.keys(result);

    // console.log('result', result);
    // console.log('key0', keys[0]);
    // console.log('typeOf keys0', typeof keys[0]);
    const result0 = result[keys[0]];
    const result1 = result[keys[2]];
    // console.log('d0--d1', data0, data1);

    this.setState({
      chartObj: {
        color: ['#2bab22'],
        legend: {
          data: result1
        },
        tooltip: {
          trigger: 'axis',
          formatter: ' {b}:</br>  {c}'
        },
        grid: {
          left: '3%',
          right: '4%',
          bottom: '3%',
          containLabel: true
        },
        xAxis: {
          type: 'value',
          splitLine: {
            show: true
          },
          axisLabel: {
            formatter: '{value}'
          }
        },
        yAxis: {
          type: 'category',
          axisLine: { onZero: false },
          axisLabel: {
            formatter: '{value}'
          },
          boundaryGap: true,
          data: result0
        },
        graphic: [
          {
            type: 'image',
            id: 'logo',
            right: 20,
            top: 20,
            z: -10,
            bounding: 'raw',
            origin: [75, 75]
          },
          {
            type: 'group',
            left: '10%',
            top: 'center',
            children: []
          }
        ],
        series: [
          {
            name: 'series name',
            type: 'bar',
            smooth: true,
            barCategoryGap: 25,
            lineStyle: {
              width: 10,
              shadowColor: 'rgba(200,0,0,0.4)',
              shadowBlur: 10,
              shadowOffsetY: 10
            },
            data: result1
          }
        ]
      },
      dataByTitels: data,
      loading: false
    });
  };
  render() {
    const authObj = {
      isAuthenticated: this.state.isAuthenticated,
      authenticate: this.authenticate,
      signout: this.signout
    };
    if (this.state.loading === 'initial') {
      return <h2>Intializing...</h2>;
    }
    if (this.state.loading === 'true') {
      return (
        <div>
          <h2>Loading...</h2>
          <div className=' m-5 p-5 spinner-grow text-success'></div>
        </div>
      );
    }
    // console.log('App render', typeof this.state.data.tableTitles);
    return (
      <Router>
        <div className='App'>
          <Nav authObj={authObj}></Nav>
          <Switch>
            <Route exact path={process.env.PUBLIC_URL + '/'}>
              <LoginPage authObj={authObj} />
            </Route>

            <Route path={process.env.PUBLIC_URL + '/login'}>
              <LoginPage authObj={authObj} />
            </Route>
            <PrivateRoute
              authObj={authObj}
              path={process.env.PUBLIC_URL + '/home'}
            >
              <SelectMenu
                getDataByTitles={this.getDataByTitles}
                tableTitles={this.state.tableTitles}
              />
              <ChartByTitle option={this.state.chartObj} />
            </PrivateRoute>
            <PrivateRoute
              authObj={authObj}
              path={process.env.PUBLIC_URL + '/piechart'}
            >
              <PieChart {...this.state.pieOption} />
            </PrivateRoute>

            <PrivateRoute
              authObj={authObj}
              path={process.env.PUBLIC_URL + '/linechart1'}
            >
              <LineChart {...this.state.lineOption1} />
            </PrivateRoute>

            <PrivateRoute
              authObj={authObj}
              path={process.env.PUBLIC_URL + '/linechart2'}
            >
              <LineChart {...this.state.lineOption2} />
            </PrivateRoute>

            <Route component={NotFound} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
