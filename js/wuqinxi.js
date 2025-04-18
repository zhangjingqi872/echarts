let wuqinxiData = {
    "categories": [{
        "name": "导引术",
        "color": "#2E86C1"
    }, {
        "name": "仿生动作",
        "color": "#E74C3C"
    }, {
        "name": "五行系统",
        "color": "#27AE60"
    }, {
        "name": "脏腑系统",
        "color": "#8E44AD"
    }, {
        "name": "经络穴位",
        "color": "#D35400"
    }, {
        "name": "养生功效",
        "color": "#16A085"
    }],
    "nodes": [
        // 导引术主体
        {
            "id": "wqx",
            "name": "五禽戏",
            "category": 0,
            "symbolSize": 60,
            "meta": {
                "创始人": "华佗",
                "年代": "东汉"
            }
        },

        // 虎戏体系
        {
            "id": "tiger",
            "name": "虎戏",
            "category": 1,
            "value": 9
        }, {
            "id": "wood",
            "name": "木",
            "category": 2,
            "value": 7
        }, {
            "id": "liver",
            "name": "肝",
            "category": 3,
            "value": 8
        }, {
            "id": "LV3",
            "name": "太冲穴",
            "category": 4,
            "value": 6
        }, {
            "id": "effect1",
            "name": "疏肝理气",
            "category": 5,
            "value": 9
        },

        // 鹿戏体系
        {
            "id": "deer",
            "name": "鹿戏",
            "category": 1,
            "value": 8
        }, {
            "id": "water",
            "name": "水",
            "category": 2,
            "value": 7
        }, {
            "id": "kidney",
            "name": "肾",
            "category": 3,
            "value": 9
        }, {
            "id": "KI3",
            "name": "太溪穴",
            "category": 4,
            "value": 6
        }, {
            "id": "effect2",
            "name": "固本培元",
            "category": 5,
            "value": 9
        },

        // 熊戏体系
        {
            "id": "bear",
            "name": "熊戏",
            "category": 1,
            "value": 7
        }, {
            "id": "earth",
            "name": "土",
            "category": 2,
            "value": 7
        }, {
            "id": "spleen",
            "name": "脾",
            "category": 3,
            "value": 8
        }, {
            "id": "SP6",
            "name": "三阴交",
            "category": 4,
            "value": 6
        }, {
            "id": "effect3",
            "name": "健脾和胃",
            "category": 5,
            "value": 8
        },

        // 猿戏体系
        {
            "id": "monkey",
            "name": "猿戏",
            "category": 1,
            "value": 8
        }, {
            "id": "fire",
            "name": "火",
            "category": 2,
            "value": 7
        }, {
            "id": "heart",
            "name": "心",
            "category": 3,
            "value": 8
        }, {
            "id": "HT7",
            "name": "神门穴",
            "category": 4,
            "value": 6
        }, {
            "id": "effect4",
            "name": "宁心安神",
            "category": 5,
            "value": 8
        },

        // 鸟戏体系
        {
            "id": "bird",
            "name": "鸟戏",
            "category": 1,
            "value": 9
        }, {
            "id": "metal",
            "name": "金",
            "category": 2,
            "value": 7
        }, {
            "id": "lung",
            "name": "肺",
            "category": 3,
            "value": 9
        }, {
            "id": "LU9",
            "name": "太渊穴",
            "category": 4,
            "value": 6
        }, {
            "id": "effect5",
            "name": "宣肺理气",
            "category": 5,
            "value": 9
        },

        // 公共节点
        {
            "id": "effect6",
            "name": "滑利关节",
            "category": 5,
            "value": 8
        }, {
            "id": "effect7",
            "name": "延年益寿",
            "category": 5,
            "value": 10
        }
    ],
    "links": [
        // 整体关联
        {
            "source": "wqx",
            "target": "tiger",
            "name": "包含"
        }, {
            "source": "wqx",
            "target": "deer",
            "name": "包含"
        }, {
            "source": "wqx",
            "target": "bear",
            "name": "包含"
        }, {
            "source": "wqx",
            "target": "monkey",
            "name": "包含"
        }, {
            "source": "wqx",
            "target": "bird",
            "name": "包含"
        }, {
            "source": "wqx",
            "target": "effect7",
            "name": "核心功效"
        },

        // 虎戏关系
        {
            "source": "tiger",
            "target": "wood",
            "name": "五行属性"
        }, {
            "source": "tiger",
            "target": "liver",
            "name": "对应脏腑"
        }, {
            "source": "tiger",
            "target": "LV3",
            "name": "刺激穴位"
        }, {
            "source": "tiger",
            "target": "effect1",
            "name": "主要功效"
        }, {
            "source": "tiger",
            "target": "effect6",
            "name": "辅助功效"
        },

        // 鹿戏关系
        {
            "source": "deer",
            "target": "water",
            "name": "五行属性"
        }, {
            "source": "deer",
            "target": "kidney",
            "name": "对应脏腑"
        }, {
            "source": "deer",
            "target": "KI3",
            "name": "刺激穴位"
        }, {
            "source": "deer",
            "target": "effect2",
            "name": "主要功效"
        }, {
            "source": "deer",
            "target": "effect6",
            "name": "辅助功效"
        },

        // 熊戏关系
        {
            "source": "bear",
            "target": "earth",
            "name": "五行属性"
        }, {
            "source": "bear",
            "target": "spleen",
            "name": "对应脏腑"
        }, {
            "source": "bear",
            "target": "SP6",
            "name": "刺激穴位"
        }, {
            "source": "bear",
            "target": "effect3",
            "name": "主要功效"
        }, {
            "source": "bear",
            "target": "effect6",
            "name": "辅助功效"
        },

        // 猿戏关系
        {
            "source": "monkey",
            "target": "fire",
            "name": "五行属性"
        }, {
            "source": "monkey",
            "target": "heart",
            "name": "对应脏腑"
        }, {
            "source": "monkey",
            "target": "HT7",
            "name": "刺激穴位"
        }, {
            "source": "monkey",
            "target": "effect4",
            "name": "主要功效"
        }, {
            "source": "monkey",
            "target": "effect6",
            "name": "辅助功效"
        },

        // 鸟戏关系
        {
            "source": "bird",
            "target": "metal",
            "name": "五行属性"
        }, {
            "source": "bird",
            "target": "lung",
            "name": "对应脏腑"
        }, {
            "source": "bird",
            "target": "LU9",
            "name": "刺激穴位"
        }, {
            "source": "bird",
            "target": "effect5",
            "name": "主要功效"
        }, {
            "source": "bird",
            "target": "effect6",
            "name": "辅助功效"
        },

        // 五行生克
        {
            "source": "wood",
            "target": "fire",
            "name": "木生火",
            "lineStyle": {
                "type": "dotted",
                "color": "#4CAF50"
            }
        }, {
            "source": "fire",
            "target": "earth",
            "name": "火生土",
            "lineStyle": {
                "type": "dotted"
            }
        }, {
            "source": "earth",
            "target": "metal",
            "name": "土生金",
            "lineStyle": {
                "type": "dotted"
            }
        }, {
            "source": "metal",
            "target": "water",
            "name": "金生水",
            "lineStyle": {
                "type": "dotted"
            }
        }, {
            "source": "water",
            "target": "wood",
            "name": "水生木",
            "lineStyle": {
                "type": "dotted"
            }
        }
    ]
};


// 初始化图表
document.addEventListener('DOMContentLoaded', function() {
    // 延迟初始化，确保卡片已经完全显示
    setTimeout(function() {
        // 五禽戏图表
        var wqxChartDom = document.getElementById('wqx-chart');
        var wqxChart = echarts.init(wqxChartDom);

        var wqxOption = {
            tooltip: {
                formatter: function(params) {
                    if (params.dataType === 'node') {
                        return `${params.name}<br>类型：${wuqinxiData.categories[params.data.category].name}`;
                    }
                    return `${params.source} → ${params.target}<br>关系：${params.data.name || '功能关联'}`;
                }
            },
            series: [{
                type: 'graph',
                layout: 'force',
                data: wuqinxiData.nodes,
                links: wuqinxiData.links,
                categories: wuqinxiData.categories,
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

        wqxChart.setOption(wqxOption);

        // 响应式调整
        window.addEventListener('resize', function() {
            wqxChart.resize();
        });
    }, 500); // 延迟500毫秒
});