// 监控 DOM 变化，检测空 div 的创建
(function() {
    // 创建一个 MutationObserver 实例
    const observer = new MutationObserver(function(mutations) {
        mutations.forEach(function(mutation) {
            // 检查是否有新节点添加
            if (mutation.addedNodes && mutation.addedNodes.length > 0) {
                mutation.addedNodes.forEach(function(node) {
                    // 检查是否是空的 div 元素
                    if (node.nodeName === 'DIV' && 
                        (!node.attributes || node.attributes.length === 0 || 
                         (node.attributes.length === 1 && node.hasAttribute('class') && node.getAttribute('class') === ''))) {
                        
                        console.log('发现空的 div 元素被添加:', node);
                        console.log('添加该元素的脚本堆栈:', new Error().stack);
                        
                        // 获取当前加载的脚本
                        const scripts = document.querySelectorAll('script');
                        const lastScript = scripts[scripts.length - 1];
                        console.log('最后加载的脚本:', lastScript ? lastScript.src : '未知');
                    }
                });
            }
        });
    });

    // 配置观察选项
    const config = { 
        childList: true, 
        subtree: true 
    };

    // 开始观察文档主体
    observer.observe(document.body, config);
    
    console.log('空 div 检测器已启动');
})();