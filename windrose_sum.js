self.onInit = function() {
    var chartDiv = document.getElementById('windrose-chart');
    chartDiv.style.width = '100%';
    chartDiv.style.height = '100%';

    var myChart = echarts.init(chartDiv);
    console.log('ECharts instance initialized.');

    var updateChart = function(directions, speeds) {
        var option = {
            angleAxis: {
                type: 'category',
                data: directions,
                boundaryGap: true,
                startAngle: 90,
                splitLine: {
                    show: true
                },
                axisLine: {
                    show: true
                }
            },
            radiusAxis: {
                splitLine: {
                    show: true
                },
                axisLine: {
                    show: true
                }
            },
            polar: {
                center: ['50%', '50%'],
                radius: '75%'
            },
            series: [{
                type: 'bar',
                data: speeds,
                coordinateSystem: 'polar',
                name: 'Wind Speed',
                stack: 'a'
            }],
            tooltip: {
                trigger: 'item'
            }
        };

        console.log('Chart options set:', option);
        myChart.setOption(option);
        console.log('Chart updated with new options.');
    };

    self.onDataUpdated = function() {
        console.log('Data updated:', self.ctx.data);

        if (!self.ctx.data || self.ctx.data.length === 0) {
            console.error('No data available for the windrose chart.');
            return;
        }

        var binCount = 36; // Number of bins for 10-degree intervals
        var binSize = 360 / binCount;
        var directions = Array.from({ length: binCount }, (_, i) => (i * binSize).toString());
        var speedBins = Array.from({ length: binCount }, () => []);

        self.ctx.data.forEach(cellData => {
            if (cellData.dataKey.name === 'Wind_Direction') {
                cellData.data.forEach((item, index) => {
                    var dir = item[1];
                    var speed = self.ctx.data.find(d => d.dataKey.name === 'Wind_Speed').data[index][1];
                    console.log('Direction:', dir, 'Speed:', speed);
                    var binIndex = Math.floor(dir / binSize);
                    speedBins[binIndex].push(speed);
                });
            }
        });

        // Change to calculate the sum of wind speeds instead of the average
        var sumSpeeds = speedBins.map(speeds => {
            return speeds.reduce((a, b) => a + b, 0);
        });

        console.log('Direction Bins:', directions);
        console.log('Sum of Speeds:', sumSpeeds);

        updateChart(directions, sumSpeeds);
    };

    self.onLatestDataUpdated = function() {
        self.ctx.$scope.flotWidget.onLatestDataUpdated();
        self.onDataUpdated();
    };

    self.onResize = function() {
        myChart.resize();
    };

    self.onEditModeChanged = function() {
        myChart.resize();
    };

    self.onDestroy = function() {
        myChart.dispose();
    };

    self.typeParameters = function() {
        return {
            hasAdditionalLatestDataKeys: true,
            defaultDataKeysFunction: function() {
                return [
                    { name: 'Wind_Direction', label: 'Wind Direction', type: 'timeseries', units: '°', decimals: 0 },
                    { name: 'Wind_Speed', label: 'Wind Speed', type: 'timeseries', units: 'km/h', decimals: 2 }
                ];
            }
        };
    };

    self.onDataUpdated();
}