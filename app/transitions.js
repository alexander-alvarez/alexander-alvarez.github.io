export default function(){
  // Add your transitions here, like:

  this.transition(
    this.fromRoute('index'),
    this.toRoute(['about', 'technology', 'contact']),
    this.use('toLeft'),
    this.reverse('toRight')
  );

  this.transition(
    this.fromRoute('about'),
    this.toRoute(['technology', 'contact']),
    this.use('toLeft'),
    this.reverse('toRight')
  );


  this.transition(
    this.fromRoute('technology'),
    this.toRoute('contact'),
    this.use('toLeft'),
    this.reverse('toRight')
  );
}
