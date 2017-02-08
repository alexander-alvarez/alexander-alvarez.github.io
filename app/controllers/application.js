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
    {title: 'Home', link: 'home'},
    {
      title: 'Technologies',
      link: 'technologies',
      subsections: [
        {title: 'Frontend'},
        {title: 'Backend'}
      ]
    },
    {
      title: 'About Me',
      link: 'about-me'
    }
  ]


});
