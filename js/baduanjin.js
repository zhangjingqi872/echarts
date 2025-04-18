// 八段锦图表数据
let bdjGraph = {
    "categories": [{
        "name": "导引术",
        "color": "#2E86C1"
    }, {
        "name": "动作招式",
        "color": "#E74C3C"
    }, {
        "name": "经络系统",
        "color": "#27AE60"
    }, {
        "name": "穴位节点",
        "color": "#8E44AD"
    }, {
        "name": "脏腑器官",
        "color": "#D35400" // 统一脏器颜色
    }, {
        "name": "核心功效",
        "color": "#16A085"
    }],
    "nodes": [
        // 导引术主体
        {
            "id": "bdj",
            "name": "八段锦",
            "category": 0,
            "symbolSize": 55,
            "meta": {
                "历史源流": "北宋·洪迈《夷坚志》"
            }
        },

        // 动作招式
        {
            "id": "bdj1",
            "name": "两手托天理三焦",
            "category": 1,
            "value": 8
        }, {
            "id": "bdj2",
            "name": "左右开弓似射雕",
            "category": 1,
            "value": 7
        }, {
            "id": "bdj3",
            "name": "调理脾胃须单举",
            "category": 1,
            "value": 8
        }, {
            "id": "bdj4",
            "name": "五劳七伤往后瞧",
            "category": 1,
            "value": 7
        }, {
            "id": "bdj5",
            "name": "摇头摆尾去心火",
            "category": 1,
            "value": 8
        }, {
            "id": "bdj6",
            "name": "两手攀足固肾腰",
            "category": 1,
            "value": 9
        }, {
            "id": "bdj7",
            "name": "攒拳怒目增气力",
            "category": 1,
            "value": 7
        }, {
            "id": "bdj8",
            "name": "背后七颠百病消",
            "category": 1,
            "value": 9
        },

        // 经络系统
        {
            "id": "SJ",
            "name": "手少阳三焦经",
            "category": 2,
            "value": 6
        }, {
            "id": "LU",
            "name": "手太阴肺经",
            "category": 2,
            "value": 5
        }, {
            "id": "SP",
            "name": "足太阴脾经",
            "category": 2,
            "value": 6
        }, {
            "id": "DU",
            "name": "督脉",
            "category": 2,
            "value": 7
        }, {
            "id": "HT",
            "name": "手少阴心经",
            "category": 2,
            "value": 5
        }, {
            "id": "BL",
            "name": "足太阳膀胱经",
            "category": 2,
            "value": 6
        }, {
            "id": "LR",
            "name": "足厥阴肝经",
            "category": 2,
            "value": 5
        }, {
            "id": "RN",
            "name": "任脉",
            "category": 2,
            "value": 7
        },

        // 穴位节点
        {
            "id": "SJ5",
            "name": "外关穴",
            "category": 3,
            "value": 4
        }, {
            "id": "LU9",
            "name": "太渊穴",
            "category": 3,
            "value": 4
        }, {
            "id": "ST36",
            "name": "足三里",
            "category": 3,
            "value": 5
        }, {
            "id": "GV14",
            "name": "大椎穴",
            "category": 3,
            "value": 4
        }, {
            "id": "KI1",
            "name": "涌泉穴",
            "category": 3,
            "value": 5
        }, {
            "id": "BL23",
            "name": "肾俞穴",
            "category": 3,
            "value": 5
        }, {
            "id": "LV3",
            "name": "太冲穴",
            "category": 3,
            "value": 4
        }, {
            "id": "GV20",
            "name": "百会穴",
            "category": 3,
            "value": 6
        },

        // 脏腑器官
        {
            "id": "SJ_organ",
            "name": "三焦",
            "category": 4,
            "value": 7
        }, {
            "id": "Lung",
            "name": "肺",
            "category": 4,
            "value": 6
        }, {
            "id": "Spleen",
            "name": "脾",
            "category": 4,
            "value": 7
        }, {
            "id": "Heart",
            "name": "心",
            "category": 4,
            "value": 6
        }, {
            "id": "Kidney",
            "name": "肾",
            "category": 4,
            "value": 8
        }, {
            "id": "Liver",
            "name": "肝",
            "category": 4,
            "value": 6
        },

        // 核心功效
        {
            "id": "E1",
            "name": "通调三焦",
            "category": 5,
            "value": 9
        }, {
            "id": "E2",
            "name": "宣肺理气",
            "category": 5,
            "value": 8
        }, {
            "id": "E3",
            "name": "健脾和胃",
            "category": 5,
            "value": 9
        }, {
            "id": "E4",
            "name": "疏肝明目",
            "category": 5,
            "value": 8
        }, {
            "id": "E5",
            "name": "固肾强腰",
            "category": 5,
            "value": 9
        }, {
            "id": "E6",
            "name": "平衡阴阳",
            "category": 5,
            "value": 10
        }
    ],
    "links": [
        // 八段锦与各招式的连接
        {
            "source": "bdj",
            "target": "bdj1",
            "value": 10
        }, {
            "source": "bdj",
            "target": "bdj2",
            "value": 10
        }, {
            "source": "bdj",
            "target": "bdj3",
            "value": 10
        }, {
            "source": "bdj",
            "target": "bdj4",
            "value": 10
        }, {
            "source": "bdj",
            "target": "bdj5",
            "value": 10
        }, {
            "source": "bdj",
            "target": "bdj6",
            "value": 10
        }, {
            "source": "bdj",
            "target": "bdj7",
            "value": 10
        }, {
            "source": "bdj",
            "target": "bdj8",
            "value": 10
        },

        // 各招式关系
        {
            "source": "bdj1",
            "target": "SJ",
            "value": 8
        }, {
            "source": "bdj1",
            "target": "SJ5"
        }, {
            "source": "bdj1",
            "target": "SJ_organ"
        }, {
            "source": "bdj1",
            "target": "E1"
        }, {
            "source": "bdj2",
            "target": "LU"
        }, {
            "source": "bdj2",
            "target": "LU9"
        }, {
            "source": "bdj2",
            "target": "Lung"
        }, {
            "source": "bdj2",
            "target": "E2"
        }, {
            "source": "bdj3",
            "target": "SP"
        }, {
            "source": "bdj3",
            "target": "ST36"
        }, {
            "source": "bdj3",
            "target": "Spleen"
        }, {
            "source": "bdj3",
            "target": "E3"
        }, {
            "source": "bdj4",
            "target": "DU"
        }, {
            "source": "bdj4",
            "target": "GV14"
        }, {
            "source": "bdj4",
            "target": "E6"
        }, {
            "source": "bdj5",
            "target": "HT"
        }, {
            "source": "bdj5",
            "target": "KI1"
        }, {
            "source": "bdj5",
            "target": "Heart"
        }, {
            "source": "bdj5",
            "target": "E6"
        }, {
            "source": "bdj6",
            "target": "BL"
        }, {
            "source": "bdj6",
            "target": "BL23"
        }, {
            "source": "bdj6",
            "target": "Kidney"
        }, {
            "source": "bdj6",
            "target": "E5"
        }, {
            "source": "bdj7",
            "target": "LR"
        }, {
            "source": "bdj7",
            "target": "LV3"
        }, {
            "source": "bdj7",
            "target": "Liver"
        }, {
            "source": "bdj7",
            "target": "E4"
        }, {
            "source": "bdj8",
            "target": "RN"
        }, {
            "source": "bdj8",
            "target": "GV20"
        }, {
            "source": "bdj8",
            "target": "E6"
        },

        // 系统关联
        {
            "source": "DU",
            "target": "RN",
            "name": "任督循环",
            "lineStyle": {
                "type": "dotted"
            }
        }, {
            "source": "GV20",
            "target": "KI1",
            "name": "天地交泰"
        }
    ]
};

// 初始化图表
document.addEventListener('DOMContentLoaded', function() {
    // 八段锦图表
    var bdjChartDom = document.getElementById('bdj-chart');
    var bdjChart = echarts.init(bdjChartDom);

    var bdjOption = {
        tooltip: {
            formatter: function(params) {
                if (params.dataType === 'node') {
                    return `${params.name}<br>类型：${bdjGraph.categories[params.data.category].name}`;
                }
                return `${params.source} → ${params.target}<br>关系：${params.data.name || '功能关联'}`;
            }
        },
        series: [{
            type: 'graph',
            layout: 'force',
            data: bdjGraph.nodes,
            links: bdjGraph.links,
            categories: bdjGraph.categories,
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

    bdjChart.setOption(bdjOption);

    // 响应式调整
    window.addEventListener('resize', function() {
        bdjChart.resize();
    });
});