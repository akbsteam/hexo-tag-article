var render = hexo.render;

/**
 * Article tag
 *
 * Syntax:
 *   {% article [class] %}
 *   Quote string
 *   {% endarticle %}
 */

hexo.extend.tag.register('article', function(args, content) {
  var className = args.length ? ' ' + args.join(' ') : '';
  return '<article class="' + className + '">' + render.renderSync({text: content, engine: 'markdown'}) + '</article>';
});
