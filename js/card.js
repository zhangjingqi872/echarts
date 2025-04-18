$.fn.commentCards = function(){
  return this.each(function(){
    var $this = $(this),
        $cards = $this.find('.card'),
        $current = $cards.filter('.card--current'),
        $next;

    // 修改点击事件处理逻辑
    $this.on('click', '.card', function() { // 改为监听父容器点击
      $cards.removeClass('card--current card--out card--next');
      
      // 计算下一张卡片
      $current = $(this);
      $next = $current.next().length ? $current.next() : $cards.first();
      
      $current.addClass('card--out');
      $next.addClass('card--current');
      $next.next().addClass('card--next');
    });

    // 初始化第一个卡片状态
    if (!$current.length) {
      $cards.first().addClass('card--current');
      $cards.eq(1).addClass('card--next');
    }
    
    $this.addClass('cards--active');
  });
};

$('.cards').commentCards();