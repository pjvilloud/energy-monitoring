export default function() {

  this.namespace = 'api';

  this.get('/profiles/:id', (schema, request) => {
    return schema.profiles.find(request.params.id);
  });

  this.get('/housings', (schema) => {
    return schema.housings.all();
  });

  this.get('/housings/:id', (schema, request) => {
    return schema.housings.find(request.params.id);
  });

  this.get('/readings/:id', (schema, request) => {
    return schema.readings.find(request.params.id);
  });


  this.post('/housings');
  this.put('/housings/:id');
  this.patch('/housings/:id');
  this.delete('/housings/:id');

  this.get('/meters/:id', (schema, request) => {
    return schema.meters.find(request.params.id);
  });

  this.post('/meters');
  this.put('/meters/:id');
  this.patch('/meters/:id');
  this.delete('/meters/:id');

  this.post('/readings');
  this.put('/readings/:id');
  this.patch('/readings/:id');
  this.delete('/readings/:id');

  this.get('/meters/:id/readings', (schema, request) => {
    let meter = schema.meters.find(request.params.id);
    return meter.readings;
  });



}
