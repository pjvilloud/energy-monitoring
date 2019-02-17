export default function(){
  // Add your transitions here, like:
     this.transition(
       this.debug(),
       this.toValue(function(toValue, fromValue) {
         return toValue && fromValue && toValue._internalModel && toValue.get('meter.id') === fromValue.get("meter.id") && toValue.get('readingDate') && toValue.get('readingDate').isAfter(fromValue.get("readingDate"));
       }),
       this.use('toLeft'),
     );

    this.transition(
      this.debug(),
      this.toValue(function(toValue, fromValue) {
        return toValue && fromValue && toValue._internalModel && toValue.get('meter.id') === fromValue.get("meter.id") && toValue.get('readingDate') && toValue.get('readingDate').isBefore(fromValue.get("readingDate"));
      }),
      this.use('toRight'),
    );

    this.transition(
      this.debug(),
      this.toValue(function(toValue, fromValue) {
        return toValue && fromValue && toValue._internalModel && toValue.get('housing.id') && toValue.get('housing.id') === fromValue.get("housing.id");
      }),
      this.use('toUp'),
    );
}
