// 确保 DOM 加载完成后执行
document.addEventListener('DOMContentLoaded', function() {
    const list = document.querySelector('.bottomtag ul');
    if (!list) return; // 如果找不到元素，直接返回
    
    const items = list.querySelectorAll('li');
    if (items.length === 0) return;
    
    // 初始化设置
    function initializeLayout() {
        // 计算最大宽度
        const maxWidth = Math.max(...Array.from(items).map(item => item.offsetWidth));
        list.style.setProperty('--article-width', maxWidth);
        
        // 设置初始列布局
        const initialCols = Array(items.length).fill().map((_, i) => {
            // 默认最后一个元素激活
            const isActive = i === items.length - 1;
            items[i].dataset.active = isActive.toString();
            return isActive ? '10fr' : '1fr';
        }).join(' ');
        
        list.style.setProperty('grid-template-columns', initialCols);
    }
    
    // 处理点击和鼠标移动事件
    function handleInteraction(event) {
        if (event.type === 'pointermove' && event.buttons > 0) return;
        
        const target = event.target.closest('li');
        if (!target) return;
        
        const index = Array.from(items).indexOf(target);
        
        // 更新激活状态和列布局
        const newCols = Array(items.length).fill().map((_, i) => {
            const isActive = i === index;
            items[i].dataset.active = isActive.toString();
            return isActive ? '10fr' : '1fr';
        }).join(' ');
        
        list.style.setProperty('grid-template-columns', newCols);
    }
    
    // 添加事件监听器
    list.addEventListener('click', handleInteraction);
    
    // 鼠标移动事件
    list.addEventListener('mouseenter', () => {
        list.addEventListener('pointermove', handleInteraction);
    });
    
    list.addEventListener('mouseleave', () => {
        list.removeEventListener('pointermove', handleInteraction);
    });
    
    // 窗口大小改变时重新计算
    window.addEventListener('resize', initializeLayout);
    
    // 初始化
    initializeLayout();
});