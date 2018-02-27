export default function() {

  this.namespace = 'api';

  this.get('/profiles/:id', (schema, request) => {
    return schema.profiles.find(request.params.id);
  });

  this.get('/housings', (schema, request) => {
    return schema.housings.all();
  });

  this.get('/housings/:id', (schema, request) => {
    return schema.housings.find(request.params.id);
  });


  this.get('/meters/:id', (schema, request) => {
    return schema.meters.find(request.params.id);
  });

  this.put('/meters/:id');
  this.patch('/meters/:id');

  this.get('/meters/:id/readings', (schema, request) => {
    let meter = schema.meters.find(request.params.id);
    return meter.readings;
  });



}
