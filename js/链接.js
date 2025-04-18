// 使用AJAX加载JSON数据
fetch('../json/processed_bilibili_data.json')
    .then(response => response.json())
    .then(jsonData => {
        // 处理JSON数据，转换为需要的格式
        data = jsonData.map(item => ({
            id: item.id,
            r: item.r,
            視頻标题: item.标题,
            网址: item.网址
        }));

        // 数据加载完成后开始动画
        startAnimation();
    })
    .catch(error => {
        console.error('加载JSON数据出错:', error);
    });

var data = []; // 初始为空，等待AJAX加载

var width = 1000,
    height = 1000;

var fill = d3.scale.category10();

var colors = ['#91d3ff', '#C5C1FF', '#FFBAC3', '#ff8484', '#ffc688'];

var nodes = [],
    labels = [],
    // 焦点位置将在resize函数中动态计算
    foci = [];

// 创建缩放行为
var zoom = d3.behavior.zoom()
    .scaleExtent([0.1, 5]) // 设置缩放范围：最小0.5倍，最大5倍
    .on("zoom", zoomed);

// 修改这里：将SVG添加到#qigong-visualization而不是body
var svg = d3.select("#qigong-visualization")
    .append("svg")
    .attr("width", "100%")
    .attr("height", "1000px")
    .style("display", "block")
    .style("margin", "0 auto")
    .style("min-height", "1000px") // 添加最小高度确保不被压缩
    .call(zoom); // 添加缩放行为

// 添加一个容器g元素，用于整体居中和缩放
var container = svg.append("g")
    .attr("class", "container");

// 缩放函数
function zoomed() {
    // 获取当前视图的中心点
    var centerX = width / 1.5;
    var centerY = height / 2;

    // 计算缩放后的偏移量，保持视图中心不变
    var translate = d3.event.translate;
    var scale = d3.event.scale;

    container.attr("transform",
        "translate(" + translate[0] + "," + translate[1] + ")scale(" + scale + ")");
}

var force = d3.layout.force()
    .nodes(nodes)
    .links([])
    .charge(-400)
    .gravity(0.1)
    .friction(0.8)
    .size([width, height])
    .on("tick", tick);

var node = container.selectAll("g");

var counter = 0;

// 更新tick函数，使用动态计算的中心点
function tick(e) {
    var k = .1 * e.alpha;
    nodes.forEach(function(o, i) {
        o.y += (foci[o.id % foci.length].y - o.y) * k;
        o.x += (foci[o.id % foci.length].x - o.x) * k;
    });

    node.attr("transform", function(d) {
        return "translate(" + d.x + "," + d.y + ")";
    });
}

// 将动画逻辑封装到函数中，在数据加载完成后调用
function startAnimation() {
    var timer = setInterval(function() {
        if (nodes.length >= data.length) { clearInterval(timer); return; }

        var item = data[counter];
        nodes.push({ id: item.id, r: 2 * item.r, name: item.視頻标题, url: item.网址 });
        force.start();

        node = node.data(nodes);

        var n = node.enter().append("g")
            .attr("class", "node")
            .style('cursor', 'pointer')
            .on('contextmenu', function(d) {
                d3.event.preventDefault(); // 阻止默认的右键菜单  

                // 去除双引号  
                var urlWithoutQuotes = d.url.replace(/"/g, '');

                // 检查URL是否以http://或https://开头  
                if (!/^https?:\/\//.test(urlWithoutQuotes)) {
                    // 如果不是，则添加https://  
                    urlWithoutQuotes = 'https:' + urlWithoutQuotes;
                }

                // 打开新窗口  
                window.open(urlWithoutQuotes);

                // 输出处理后的URL  
                console.log(urlWithoutQuotes);
            })
            .call(force.drag);

        n.append("circle")
            .attr("r", function(d) { return d.r; })
            .style("fill", function(d) { return colors[d.id % colors.length]; });

        // 添加文本但初始设置为不可见
        var text = n.append("text")
            .text(function(d) {
                return d.name;
            })
            .style("font-size", function(d) {
                return Math.min(2 * d.r, (2 * d.r - 8) / this.getComputedTextLength() * 16) + "px";
            })
            .attr("dy", ".35em")
            .style("opacity", "0") // 初始设置为不可见
            .style("transition", "opacity 0.3s"); // 添加过渡效果

        // 添加鼠标悬停事件显示文本
        n.on("mouseover", function() {
                d3.select(this).select("text").style("opacity", "1");
            })
            .on("mouseout", function() {
                d3.select(this).select("text").style("opacity", "0");
            });

        counter++;
    }, 100);
}

d3.selection.prototype.moveToFront = function() {
    return this.each(function() {
        this.parentNode.appendChild(this);
    });
};

// 修改resize函数，使用容器的宽度而不是窗口宽度
// 修改resize函数，实现动态居中
// 修改resize函数中的高度设置
function resize() {
    var container = document.getElementById('qigong-visualization');
    width = container.clientWidth;
    height = 1000; // 将这里改为1000px，与SVG高度一致

    // 更新SVG尺寸
    svg.attr("width", width).attr("height", height);

    // 计算中心点
    var centerX = width / 2;
    var centerY = height / 2;

    // 动态计算焦点位置，使其围绕中心点分布
    foci = [
        { x: centerX - 100, y: centerY - 100 },
        { x: centerX + 100, y: centerY - 100 },
        { x: centerX, y: centerY + 100 }
    ];

    // 更新力导向图尺寸
    force.size([width, height]).resume();

    // 重新计算节点位置
    force.start();

    // 重置缩放并居中
    var scale = 0.5; // 缩小到0.5倍，使内容更紧凑

    // 计算居中所需的偏移量 - 调整为更精确的居中计算
    var offsetX = centerX;
    var offsetY = centerY;

    zoom.scale(scale);
    zoom.translate([offsetX, offsetY]);

    // 应用变换 - 使用绝对居中定位
    container.attr("transform",
        "translate(" + offsetX + "," + offsetY + ")scale(" + scale + ")");
}

// 初始调用resize以设置初始布局
resize();

d3.select(window).on('resize', resize);
