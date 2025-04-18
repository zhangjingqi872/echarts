// 添加这个调试脚本来识别隐藏div的来源
document.addEventListener('DOMContentLoaded', function() {
    // 查找所有匹配特定样式模式的隐藏div
    const hiddenDivs = document.querySelectorAll('div[style*="visibility: hidden"][style*="position: absolute"]');
    
    console.log('找到隐藏div数量:', hiddenDivs.length);
    
    hiddenDivs.forEach((div, index) => {
        console.log(`隐藏div #${index}:`, div);
        console.log('样式:', div.getAttribute('style'));
        
        // 尝试查找创建该元素的脚本
        const scripts = document.querySelectorAll('script');
        console.log('页面中的脚本数量:', scripts.length);
        
        // 添加一个标记以便在DOM中识别
        div.setAttribute('data-debug-id', `hidden-div-${index}`);
    });
    
    // 监听DOM变化，检测新添加的隐藏div
    const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
            if (mutation.addedNodes) {
                mutation.addedNodes.forEach(node => {
                    if (node.nodeType === 1 && node.tagName === 'DIV') {
                        const style = node.getAttribute('style');
                        if (style && style.includes('visibility: hidden') && style.includes('position: absolute')) {
                            console.log('新添加的隐藏div:', node);
                            console.log('添加时的调用栈:', new Error().stack);
                        }
                    }
                });
            }
        });
    });
    
    observer.observe(document.body, { childList: true, subtree: true });
});