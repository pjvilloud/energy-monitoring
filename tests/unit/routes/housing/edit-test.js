import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | housing/edit', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:housing/edit');
    assert.ok(route);
  });
});
