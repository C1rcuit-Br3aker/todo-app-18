import { moduleForModel, test } from 'ember-qunit';

moduleForModel('reminders', 'Unit | Model | reminders', {
  // Specify the other units that are required for this test.
  needs: ['model:list']
});

test('it exists', function(assert) {
  let model = this.subject();
  // let store = this.store();
  assert.ok(!!model);
});
