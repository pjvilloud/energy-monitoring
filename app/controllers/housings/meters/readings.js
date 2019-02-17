import Controller from '@ember/controller';
import { computed } from '@ember/object';
import { inject as service } from '@ember/service';
import { observer } from '@ember/object';

export default Controller.extend({
  labels: computed("model.readings.@each.readingDate", function(){
    return this.get("model.readings").map(function(reading){
      return reading.get("readingDate");
    })
  }),
  data: computed("model.readings.@each.readingValue", function(){
    return this.get("model.readings").mapBy("readingValue")
  }),
  chartData: computed("labels", "data", function(){
    return {
      labels: this.get("labels"),
      datasets: [{
        label: this.get("model.name") + " en " + this.get("model.unit"),
        data: this.get("data"),
        /*backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
        ],
        borderColor: [
          'rgba(255,99,132,1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
        ],*/
        borderWidth: 1
      }]
    };
  }),
  chartOptions: computed("labels", "data", function(){
    let unit = this.get("model.unit");
    return {
      scales: {
        xAxes: [{
          type: 'time'
        }]
      },
      tooltips: {
        callbacks: {
          title: function (tooltipItem) {
            return tooltipItem[0].xLabel.format("D MMM YYYY");
          },
          label: function (tooltipItem, data) {
            return tooltipItem.yLabel + " " + unit;
          }
        }
      }
    }
  })
});
