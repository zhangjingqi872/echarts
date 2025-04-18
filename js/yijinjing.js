// 易筋经图表数据
let yijinjingData = {
    "categories": [{
        "name": "功法体系",
        "color": "#2E86C1"
    }, {
        "name": "招式动作",
        "color": "#E74C3C"
    }, {
        "name": "经络系统",
        "color": "#27AE60"
    }, {
        "name": "对应脏腑",
        "color": "#8E44AD"
    }, {
        "name": "关键穴位",
        "color": "#D35400"
    }, {
        "name": "养生功效",
        "color": "#16A085"
    }],
    "nodes": [
        // 核心主体
        {
            "id": "yjjs",
            "name": "易筋经十二势",
            "category": 0,
            "symbolSize": 70,
            "meta": {
                "源流": "少林武学经典",
                "功效": "强筋健骨，调和气血"
            }
        },

        // ===== 十二势节点 =====
        { id: "m1", name: "1.韦驮献杵", category: 1, value: 9 },
        { id: "m2", name: "2.横担降魔杵", category: 1, value: 8 },
        { id: "m3", name: "3.掌托天门", category: 1, value: 9 },
        { id: "m4", name: "4.摘星换斗", category: 1, value: 8 },
        { id: "m5", name: "5.倒拽九牛尾", category: 1, value: 9 },
        { id: "m6", name: "6.出爪亮翅", category: 1, value: 8 },
        { id: "m7", name: "7.九鬼拔马刀", category: 1, value: 9 },
        { id: "m8", name: "8.三盘落地", category: 1, value: 8 },
        { id: "m9", name: "9.青龙探爪", category: 1, value: 9 },
        { id: "m10", name: "10.卧虎扑食", category: 1, value: 8 },
        { id: "m11", name: "11.打躬势", category: 1, value: 9 },
        { id: "m12", name: "12.掉尾势", category: 1, value: 10 },

        // ===== 经络系统 =====
        { id: "LU", name: "手太阴肺经", category: 2 },
        { id: "LI", name: "手阳明大肠经", category: 2 },
        { id: "ST", name: "足阳明胃经", category: 2 },
        { id: "SP", name: "足太阴脾经", category: 2 },
        { id: "SI", name: "手太阳小肠经", category: 2 },
        { id: "HT", name: "手少阴心经", category: 2 },
        { id: "BL", name: "足太阳膀胱经", category: 2 },
        { id: "KI", name: "足少阴肾经", category: 2 },
        { id: "PC", name: "手厥阴心包经", category: 2 },
        { id: "SJ", name: "手少阳三焦经", category: 2 },
        { id: "GB", name: "足少阳胆经", category: 2 },
        { id: "LR", name: "足厥阴肝经", category: 2 },

        // ===== 对应脏腑 =====
        { id: "fei", name: "肺", category: 3 },
        { id: "dachang", name: "大肠", category: 3 },
        { id: "wei", name: "胃", category: 3 },
        { id: "pi", name: "脾", category: 3 },
        { id: "xin", name: "心", category: 3 },
        { id: "pangguang", name: "膀胱", category: 3 },
        { id: "shen", name: "肾", category: 3 },
        { id: "xinbao", name: "心包", category: 3 },
        { id: "sanjiao", name: "三焦", category: 3 },
        { id: "dan", name: "胆", category: 3 },
        { id: "gan", name: "肝", category: 3 },

        // ===== 关键穴位 =====
        { id: "LU9", name: "太渊穴", category: 4 },
        { id: "LI4", name: "合谷穴", category: 4 },
        { id: "ST36", name: "足三里", category: 4 },
        { id: "SP6", name: "三阴交", category: 4 },
        { id: "HT7", name: "神门穴", category: 4 },
        { id: "BL23", name: "肾俞穴", category: 4 },
        { id: "KI3", name: "太溪穴", category: 4 },
        { id: "PC6", name: "内关穴", category: 4 },
        { id: "GB34", name: "阳陵泉", category: 4 },
        { id: "LR3", name: "太冲穴", category: 4 },

        // ===== 养生功效 =====
        { id: "e1", name: "宣肺益气", category: 5 },
        { id: "e2", name: "通调肠腑", category: 5 },
        { id: "e3", name: "和胃降逆", category: 5 },
        { id: "e4", name: "健脾化湿", category: 5 },
        { id: "e5", name: "强心通脉", category: 5 },
        { id: "e6", name: "固肾强腰", category: 5 },
        { id: "e7", name: "疏肝利胆", category: 5 },
        { id: "e8", name: "调和三焦", category: 5 },
        { id: "e9", name: "延年益寿", category: 5, value: 10 }
    ],
    "links": [
        // 主体连接
        { source: "yjjs", target: "m1", name: "起势" },
        { source: "yjjs", target: "m2", value: 10 },
        { source: "yjjs", target: "m3", value: 10 },
        { source: "yjjs", target: "m4", value: 10 },
        { source: "yjjs", target: "m5", value: 10 },
        { source: "yjjs", target: "m6", value: 10 },
        { source: "yjjs", target: "m7", value: 10 },
        { source: "yjjs", target: "m8", value: 10 },
        { source: "yjjs", target: "m9", value: 10 },
        { source: "yjjs", target: "m10", value: 10 },
        { source: "yjjs", target: "m11", value: 10 },
        { source: "yjjs", target: "m12", name: "收势" },

        // 添加动作顺序连接
        {
            source: "m1",
            target: "m2",
            name: "顺序连接",
            lineStyle: {
                type: "dashed",
                color: "#999999"
            }
        }, {
            source: "m2",
            target: "m3",
            name: "顺序连接",
            lineStyle: {
                type: "dashed",
                color: "#999999"
            }
        }, {
            source: "m3",
            target: "m4",
            name: "顺序连接",
            lineStyle: {
                type: "dashed",
                color: "#999999"
            }
        }, {
            source: "m4",
            target: "m5",
            name: "顺序连接",
            lineStyle: {
                type: "dashed",
                color: "#999999"
            }
        }, {
            source: "m5",
            target: "m6",
            name: "顺序连接",
            lineStyle: {
                type: "dashed",
                color: "#999999"
            }
        }, {
            source: "m6",
            target: "m7",
            name: "顺序连接",
            lineStyle: {
                type: "dashed",
                color: "#999999"
            }
        }, {
            source: "m7",
            target: "m8",
            name: "顺序连接",
            lineStyle: {
                type: "dashed",
                color: "#999999"
            }
        }, {
            source: "m8",
            target: "m9",
            name: "顺序连接",
            lineStyle: {
                type: "dashed",
                color: "#999999"
            }
        }, {
            source: "m9",
            target: "m10",
            name: "顺序连接",
            lineStyle: {
                type: "dashed",
                color: "#999999"
            }
        }, {
            source: "m10",
            target: "m11",
            name: "顺序连接",
            lineStyle: {
                type: "dashed",
                color: "#999999"
            }
        }, {
            source: "m11",
            target: "m12",
            name: "顺序连接",
            lineStyle: {
                type: "dashed",
                color: "#999999"
            }
        },

        // 招式-经络关联
        { source: "m1", target: "LU", name: "主调经络" },
        { source: "m2", target: "LI", name: "主调经络" },
        { source: "m3", target: "ST", name: "主调经络" },
        { source: "m4", target: "SP", name: "主调经络" },
        { source: "m5", target: "SI", name: "主调经络" },
        { source: "m6", target: "HT", name: "主调经络" },
        { source: "m7", target: "BL", name: "主调经络" },
        { source: "m8", target: "KI", name: "主调经络" },
        { source: "m9", target: "PC", name: "主调经络" },
        { source: "m10", target: "SJ", name: "主调经络" },
        { source: "m11", target: "GB", name: "主调经络" },
        { source: "m12", target: "LR", name: "主调经络" },

        // 经络-脏腑属络
        { source: "LU", target: "fei", name: "属络", lineStyle: { color: "#8E44AD" } },
        { source: "LI", target: "dachang", name: "属络" },
        { source: "ST", target: "wei", name: "属络" },
        { source: "SP", target: "pi", name: "属络" },
        { source: "SI", target: "xin", name: "属络" }, // 手太阳小肠经→心
        { source: "HT", target: "xin", name: "属络" }, // 手少阴心经→心
        { source: "BL", target: "pangguang", name: "属络" },
        { source: "KI", target: "shen", name: "属络" },
        { source: "PC", target: "xinbao", name: "属络" },
        { source: "SJ", target: "sanjiao", name: "属络" },
        { source: "GB", target: "dan", name: "属络" },
        { source: "LR", target: "gan", name: "属络" },

        // 招式-穴位关联
        { source: "m1", target: "LU9", name: "激活穴位", lineStyle: { type: "dotted" } },
        { source: "m2", target: "LI4", name: "激活穴位" },
        { source: "m3", target: "ST36", name: "激发经气" },
        { source: "m4", target: "SP6", name: "调和气血" },
        { source: "m6", target: "HT7", name: "宁心安神" },
        { source: "m8", target: "KI3", name: "补肾要穴" },
        { source: "m12", target: "LR3", name: "疏肝要穴" },

        // 功效系统
        { source: "m1", target: "e1", name: "核心功效" },
        { source: "m2", target: "e2", name: "核心功效" },
        { source: "m3", target: "e3", name: "核心功效" },
        { source: "m4", target: "e4", name: "核心功效" },
        { source: "m6", target: "e5", name: "核心功效" },
        { source: "m8", target: "e6", name: "核心功效" },
        { source: "m12", target: "e7", name: "核心功效" },
        { source: "m10", target: "e8", name: "核心功效" },

        // 总体功效关联
        { source: "e1", target: "e9", name: "系统功效" },
        { source: "e2", target: "e9", name: "系统功效" },
        { source: "e3", target: "e9", name: "系统功效" },
        { source: "e4", target: "e9", name: "系统功效" },
        { source: "e5", target: "e9", name: "系统功效" },
        { source: "e6", target: "e9", name: "系统功效" },
        { source: "e7", target: "e9", name: "系统功效" },
        { source: "e8", target: "e9", name: "系统功效" },

        // 系统级关联
        { source: "e1", target: "e5", name: "气血相生", lineStyle: { curveness: 0.5 } },
        { source: "e6", target: "e7", name: "肝肾同源" },
        { source: "ST36", target: "SP6", name: "调和脾胃", lineStyle: { color: "#FF5722" } }
    ]
};

// 初始化图表
document.addEventListener('DOMContentLoaded', function() {
    // 易筋经图表
    var yjjChartDom = document.getElementById('yjj-chart');
    var yjjChart = echarts.init(yjjChartDom);

    // 动态计算标签显示
    yijinjingData.nodes.forEach(function(node) {
        node.label = {
            show: node.value > 6 || node.category === 0,
            fontSize: node.category === 0 ? 16 : 12
        };
    });

    var yjjOption = {
        tooltip: {
            formatter: function(params) {
                if (params.dataType === 'node') {
                    return `${params.name}<br>类型：${yijinjingData.categories[params.data.category].name}`;
                }
                return `${params.source} → ${params.target}<br>关系：${params.data.name || '功能关联'}`;
            }
        },
        series: [{
            type: 'graph',
            layout: 'force',
            data: yijinjingData.nodes,
            links: yijinjingData.links,
            categories: yijinjingData.categories,
            roam: true,
            label: {
                show: true,
                position: 'right',
                formatter: '{b}'
            },
            force: {
                repulsion: 200,
                edgeLength: 100,
                gravity: 0.1
            },
            lineStyle: {
                color: 'source',
                curveness: 0.3
            },
            emphasis: {
                focus: 'adjacency',
                lineStyle: {
                    width: 5
                }
            }
        }]
    };

    yjjChart.setOption(yjjOption);

    // 响应式调整
    window.addEventListener('resize', function() {
        yjjChart.resize();
    });
});