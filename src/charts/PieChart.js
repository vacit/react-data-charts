import React from 'react';
import ReactEcharts from 'echarts-for-react';

const PieChart = (props) => {
    return (
        <div>
            <ReactEcharts
                option={props}
                notMerge={true}
                lazyUpdate={true}
                // theme={'dark'}
                // showLoading ={true}
                style={{ height: '400px',  }}
            // onChartReady={this.onChartReadyCallback}
            // onEvents={EventsDict}
            // opts={}
            />
            <br />
        </div>
    );
};

export default PieChart;

