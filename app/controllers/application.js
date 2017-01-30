import Ember from 'ember';

export default Ember.Controller.extend({

  /**
   * Controls sidebar display.
   *
   * @property leftSideBarOpen
   * @type Boolean
   */
  leftSideBarOpen: true,


  sections: [
    {title: 'Home'},
    {
      title: 'Technologies',
      subsections: [
        {title: 'Frontend'},
        {title: 'Backend'}
      ]
    },
    {title: 'About Me'}
  ]


});
