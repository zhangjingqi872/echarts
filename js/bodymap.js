// 部位中英文映射表
const bodyPartMap = {
    'calves': '小腿',
    'quads': '股四头肌',
    'abdominals': '腹肌',
    'obliques': '腹斜肌',
    'hands': '手部',
    'forearms': '前臂',
    'biceps': '肱二头肌',
    'front-shoulders': '前三角肌',
    'chest': '胸部',
    'traps': '斜方肌',
    'ankles': '脚踝',
    'glutes': '大腿',
    'knees': '膝盖',
    'scapula': '股骨',
    'elbow': '手肘',
    'wrist': '手腕',
    'lowerback': '下背部',
    'triceps': '三角肌',
    'hands': '手部',
    'upper-spine': '上脊柱',
    'lower-spine': '下脊柱'
};

// 穴位名称映射
const acupointNames = {
    'shousanli-left': '手三里穴',
    'shousanli-right': '手三里穴',
    'guanyuan': '关元穴',
    'zusanli-left': '足三里穴',
    'zusanli-right': '足三里穴',
    'taichong-left': '太冲穴',
    'taichong-right': '太冲穴',
    'yongquan-left': '涌泉穴',
    'yongquan-right': '涌泉穴',
    'dazhui': '大椎穴',
    'jianjing-left': '肩井穴',
    'jianjing-right': '肩井穴',
    'mingmen': '命门穴',
    'shenshu-left': '肾俞穴',
    'shenshu-right': '肾俞穴',
    'feishu-left': '肺俞穴',
    'feishu-right': '肺俞穴'
};

// 肌肉组映射
const muscleGroups = {
    'backmucle': ['lowerback', 'upper-spine', 'lower-spine'],
    'trapsmucle': ['traps', 'front-shoulders']
};

// JavaScript部分
document.addEventListener('DOMContentLoaded', function() {
    const links = document.querySelectorAll('.acupoint-link');

    links.forEach(link => {
        link.addEventListener('mouseover', function() {
            const acupointIds = this.getAttribute('data-acupoints').split(',');
            acupointIds.forEach(id => {
                const acupoint = document.getElementById(id);
                if (acupoint) {
                    const ellipse = acupoint.querySelector('.acupoint');
                    if (ellipse) {
                        ellipse.style.fill = '#f695ab';
                        ellipse.style.opacity = '0.9';
                    }
                }
            });
        });

        link.addEventListener('mouseleave', function() {
            const acupointIds = this.getAttribute('data-acupoints').split(',');
            acupointIds.forEach(id => {
                const acupoint = document.getElementById(id);
                if (acupoint) {
                    const ellipse = acupoint.querySelector('.acupoint');
                    if (ellipse) {
                        ellipse.style.fill = 'url(#acupointsradial)';
                        ellipse.style.opacity = '0';
                    }
                }
            });
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    // 为所有穴位链接添加事件
    document.querySelectorAll('[data-acupoint]').forEach(link => {
        const acupointIds = link.dataset.acupoint.split(' ');

        link.addEventListener('mouseenter', function() {
            // 高亮对应穴位点
            acupointIds.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    highlightElement(element, '#f77a14');
                }
            });

            // 高亮当前链接
            this.style.color = '#ffffff';
            this.style.backgroundColor = '#7990b9ef';
        });

        link.addEventListener('mouseleave', function() {
            // 取消高亮穴位点
            acupointIds.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    resetElementHighlight(element);
                } else if (id.startsWith('yongquan-left ')) {
                    // 移除涌泉穴临时高亮元素
                    removeYongquanHighlight();
                }
            });

            // 恢复链接样式
            this.style.color = '';
            this.style.backgroundColor = '';
        });
    });

    // 为所有肌肉链接添加事件
    document.querySelectorAll('[data-muscle]').forEach(link => {
        const muscleId = link.dataset.muscle;
        const muscleElements = muscleGroups[muscleId] || [];

        link.addEventListener('mouseenter', function() {
            // 高亮对应肌肉组
            muscleElements.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    highlightElement(element, '#d88497d5');
                }
            });

            // 高亮当前链接
            this.style.color = '#ffffff';
            this.style.backgroundColor = '#7990b9ef';
        });

        link.addEventListener('mouseleave', function() {
            // 取消高亮肌肉组
            muscleElements.forEach(id => {
                const element = document.getElementById(id);
                if (element) {
                    resetElementHighlight(element);
                }
            });

            // 恢复链接样式
            this.style.color = '';
            this.style.backgroundColor = '';
        });
    });

    // 为SVG中的肌肉部位添加事件
    document.querySelectorAll('.bodymap').forEach(element => {
        const id = element.id;

        element.addEventListener('mouseenter', function() {
            // 高亮当前肌肉部位
            highlightElement(this, '#d88497d5');

            // 高亮对应链接
            document.querySelectorAll(`[data-muscle]`).forEach(link => {
                const muscleId = link.dataset.muscle;
                const muscleElements = muscleGroups[muscleId] || [];

                if (muscleElements.includes(id)) {
                    link.style.color = '#ffffff';
                    link.style.backgroundColor = '#7990b9ef';
                }
            });
        });

        element.addEventListener('mouseleave', function() {
            // 取消高亮当前肌肉部位
            resetElementHighlight(this);

            // 恢复对应链接样式
            document.querySelectorAll(`[data-muscle]`).forEach(link => {
                link.style.color = '';
                link.style.backgroundColor = '';
            });
        });
    });
});




// 高亮元素
function highlightElement(element, color) {
    // 对于SVG元素，需要修改fill属性而不是color
    if (element.tagName.toLowerCase() === 'g' || element.tagName.toLowerCase() === 'path') {
        // 保存原始颜色以便恢复
        if (!element.dataset.originalColor) {
            element.dataset.originalColor = window.getComputedStyle(element).fill;
        }

        // 如果是穴位组(acupoint-group)，特殊处理
        if (element.classList.contains('acupoint-group')) {
            // 高亮穴位的外圈
            const acupoint = element.querySelector('.acupoint');
            if (acupoint) {
                acupoint.style.fill = color;
                acupoint.style.opacity = '0.8';
            }

            // 高亮穴位的中心点
            const centerPoint = element.querySelector('ellipse:not(.acupoint)');
            if (centerPoint) {
                centerPoint.style.fill = '#ff0000';
                centerPoint.style.stroke = '#ffffff';
                centerPoint.style.strokeWidth = '2px';
            }
        } else {
            // 设置所有子路径的填充颜色
            element.querySelectorAll('path').forEach(path => {
                path.style.fill = color;
            });

            // 如果元素本身是路径，也设置它的填充颜色
            if (element.tagName.toLowerCase() === 'path') {
                element.style.fill = color;
            }
        }
    } else {
        // 对于非SVG元素，使用color属性
        element.style.color = color;
    }
    element.classList.add('hover');
}

// 重置元素高亮
function resetElementHighlight(element) {
    // 对于SVG元素，恢复原始填充颜色
    if (element.tagName.toLowerCase() === 'g' || element.tagName.toLowerCase() === 'path') {
        // 如果是穴位组(acupoint-group)，特殊处理
        if (element.classList.contains('acupoint-group')) {
            // 恢复穴位的外圈
            const acupoint = element.querySelector('.acupoint');
            if (acupoint) {
                acupoint.style.fill = 'url(#acupointsradial)';
                acupoint.style.opacity = '';
            }

            // 恢复穴位的中心点
            const centerPoint = element.querySelector('ellipse:not(.acupoint)');
            if (centerPoint) {
                centerPoint.style.fill = '#ffd700';
                centerPoint.style.stroke = '';
                centerPoint.style.strokeWidth = '';
            }
        } else {
            // 恢复所有子路径的填充颜色
            element.querySelectorAll('path').forEach(path => {
                path.style.fill = '';
            });

            // 如果元素本身是路径，也恢复它的填充颜色
            if (element.tagName.toLowerCase() === 'path') {
                element.style.fill = '';
            }
        }
    } else {
        // 对于非SVG元素，清除color属性
        element.style.color = '';
    }
    element.classList.remove('hover');
}

// 创建涌泉穴高亮
function createYongquanHighlight(id, isPersistent = false) {
    // 移除已有的涌泉穴高亮
    removeYongquanHighlight();

    // 获取SVG容器
    const svg = document.querySelector('.body-box svg');
    if (!svg) return;

    // 创建涌泉穴高亮元素
    const yongquanGroup = document.createElementNS('http://www.w3.org/2000/svg', 'g');
    yongquanGroup.id = 'yongquan-highlight';
    yongquanGroup.classList.add('yongquan-point'); // 添加类名以便使用yhighlightElement函数
    yongquanGroup.classList.add(isPersistent ? 'active' : 'hover');

    // 确定左右脚位置
    const isLeft = id === 'yongquan-left';
    const x = isLeft ? 250 : 410;
    const y = 1150; // 脚底位置

    // 创建涌泉穴外圈
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    circle.setAttribute('cx', x);
    circle.setAttribute('cy', y);
    circle.setAttribute('r', 15);
    circle.setAttribute('class', 'acupoint');
    circle.setAttribute('fill', isPersistent ? '#ff5500' : '#f77a14');
    circle.setAttribute('opacity', '0.8');

    // 创建涌泉穴中心点
    const centerPoint = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    centerPoint.setAttribute('cx', x);
    centerPoint.setAttribute('cy', y);
    centerPoint.setAttribute('r', 5);
    centerPoint.setAttribute('fill', '#ffb700');
    centerPoint.setAttribute('stroke', '#ffffff');
    centerPoint.setAttribute('stroke-width', '2');

    // 添加到组中
    yongquanGroup.appendChild(circle);
    yongquanGroup.appendChild(centerPoint);

    // 添加到SVG中
    svg.appendChild(yongquanGroup);

    // 添加文本标签
    const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
    text.setAttribute('x', x);
    text.setAttribute('y', y - 25);
    text.setAttribute('text-anchor', 'middle');
    text.setAttribute('fill', '#ffffff');
    text.setAttribute('font-size', '14');
    text.setAttribute('font-weight', 'bold');
    text.textContent = '涌泉穴';

    yongquanGroup.appendChild(text);

    // 使用专门的涌泉穴高亮函数
    yhighlightElement(yongquanGroup, isPersistent ? '#ff5500' : '#f77a14');
}

// 移除涌泉穴高亮
function removeYongquanHighlight() {
    const highlight = document.getElementById('yongquan-highlight');
    if (highlight) {
        // 使用专门的涌泉穴重置函数
        yresetElementHighlight(highlight);
        highlight.remove();
    }
}