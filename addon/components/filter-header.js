import Ember from 'ember';
import layout from '../templates/components/filter-header';

import { computed } from '@ember/object';

export default Ember.Component.extend({
  layout,

  classNames: [ 'filter-header' ],

  /**
   * @property label
   * @type {String}
   */
  label: computed.oneWay('column.label'),

  /**
   * @property sortIcons
   * @type {Object}
   */
  sortIcons: null,

  /**
   * @property sortIconProperty
   * @type {String|null}
   * @private
   */
  sortIconProperty: computed('column.{sortable,sorted,ascending}', function() {
    let sorted = this.get('column.sorted');

    if (sorted) {
      let ascending = this.get('column.ascending');
      return ascending ? 'iconAscending' : 'iconDescending';
    }

    let sortable = this.get('column.sortable');
    return sortable ? 'iconSortable' : null;
  }),

  filtering: false,

  actions: {
    click() {
      this.toggleProperty('filtering');
    }
  }

});
