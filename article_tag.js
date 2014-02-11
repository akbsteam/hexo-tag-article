/**
* Article tag
*
* Syntax:
*   {% particle [class] %}
*   String
*   {% endparticle %}
*/

module.exports = function(args, content){
  var className = args.length ? ' ' + args.join(' ') : '';
  return '<article class="' + className + '">' + hexo.render.renderSync({text: content, engine: 'markdown'}) + '</article>';
};