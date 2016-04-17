import Ember from 'ember';

export default Ember.Controller.extend({
  newReminder: {
    name: ``,
    done: false,
  },

  saveReminders(list, attrs) {
    const reminder = this.store.createRecord(`reminder`, attrs);
    reminder.set(`list`, list);

    reminder.save().then(() => {
      this.set(`newReminder`, {
        name: ``,
      });
    });
  },

  deleteList(list) {
    if (window.confirm(`Are you sure?`)) {
      list.destroyRecord();
      this.transitionToRoute(`lists`);
    }
  }
});