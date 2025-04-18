let daoyinData = {
    "categories": [{
        "name": "导引术",
        "color": "#2E86C1"
    }, {
        "name": "导引招式",
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
            "id": "mwdys",
            "name": "马王堆导引术",
            "category": 0,
            "symbolSize": 65,
            "meta": {
                "来源": "马王堆汉墓帛书",
                "年代": "西汉初期"
            }
        },

        // ===== 起势 =====
        {
            id: "m0",
            name: "1.起势",
            category: 1,
            value: 8
        },

        // ===== 十二式完整数据（示例展示前3式）=====
        // 第一式：挽弓（手太阴肺经）
        {
            id: "m1",
            name: "2.挽弓式",
            category: 1,
            value: 9
        }, {
            id: "LU",
            name: "手太阴肺经",
            category: 2
        }, {
            id: "LU9",
            name: "太渊穴",
            category: 4
        }, {
            id: "fei",
            name: "肺",
            category: 3
        }, // 修正ID为中文拼音
        {
            id: "e1",
            name: "宣肺理气",
            category: 5
        },

        // 第二式：引背（手阳明大肠经）
        {
            id: "m2",
            name: "3.引背式",
            category: 1,
            value: 8
        }, {
            id: "LI",
            name: "手阳明大肠经",
            category: 2
        }, {
            id: "LI4",
            name: "合谷穴",
            category: 4
        }, {
            id: "dachang",
            name: "大肠",
            category: 3
        }, // 修正ID
        {
            id: "e2",
            name: "通腑导滞",
            category: 5
        },

        // 第三式：凫浴（足阳明胃经）
        {
            id: "m3",
            name: "4.凫浴式",
            category: 1,
            value: 8
        }, {
            id: "ST",
            name: "足阳明胃经",
            category: 2
        }, {
            id: "ST36",
            name: "足三里",
            category: 4
        }, {
            id: "wei",
            name: "胃",
            category: 3
        }, // 修正ID
        {
            id: "e3",
            name: "和胃降逆",
            category: 5
        },

        // ===== 十二式完整数据 =====
        // 第四式：龙登（足太阴脾经）
        {
            id: "m4",
            name: "5.龙登式",
            category: 1,
            value: 7
        }, {
            id: "SP",
            name: "足太阴脾经",
            category: 2
        }, {
            id: "SP6",
            name: "三阴交",
            category: 4
        }, {
            id: "pi",
            name: "脾",
            category: 3
        }, {
            id: "e4",
            name: "健脾利湿",
            category: 5
        },

        // 第五式：鸟伸（手少阴心经）
        {
            id: "m5",
            name: "6.鸟伸式",
            category: 1,
            value: 8
        }, {
            id: "HT",
            name: "手少阴心经",
            category: 2
        }, {
            id: "HT7",
            name: "神门穴",
            category: 4
        }, {
            id: "xin",
            name: "心",
            category: 3
        }, {
            id: "e5",
            name: "宁心安神",
            category: 5
        },

        // 第六式：引腹（手太阳小肠经）
        {
            id: "m6",
            name: "7.引腹式",
            category: 1,
            value: 7
        }, {
            id: "SI",
            name: "手太阳小肠经",
            category: 2
        }, {
            id: "SI3",
            name: "后溪穴",
            category: 4
        }, {
            id: "xiaochang",
            name: "小肠",
            category: 3
        }, {
            id: "e6",
            name: "通调水道",
            category: 5
        },

        // 第七式：鸥视（足太阳膀胱经）
        {
            id: "m7",
            name: "8.鸥视式",
            category: 1,
            value: 8
        }, {
            id: "BL",
            name: "足太阳膀胱经",
            category: 2
        }, {
            id: "BL23",
            name: "肾俞穴",
            category: 4
        }, {
            id: "pangguang",
            name: "膀胱",
            category: 3
        }, {
            id: "e7",
            name: "温阳利水",
            category: 5
        },

        // 第八式：引腰（足少阴肾经）
        {
            id: "m8",
            name: "9.引腰式",
            category: 1,
            value: 9
        }, {
            id: "KI",
            name: "足少阴肾经",
            category: 2
        }, {
            id: "KI3",
            name: "太溪穴",
            category: 4
        }, {
            id: "shen",
            name: "肾",
            category: 3
        }, {
            id: "e8",
            name: "固肾强腰",
            category: 5
        },

        // 第九式：雁飞（手厥阴心包经）
        {
            id: "m9",
            name: "10.雁飞式",
            category: 1,
            value: 7
        }, {
            id: "PC",
            name: "手厥阴心包经",
            category: 2
        }, {
            id: "PC6",
            name: "内关穴",
            category: 4
        }, {
            id: "xinbao",
            name: "心包",
            category: 3
        }, {
            id: "e9",
            name: "宽胸理气",
            category: 5
        },

        // 第十式：鹤舞（手少阳三焦经）
        {
            id: "m10",
            name: "11.鹤舞式",
            category: 1,
            value: 8
        }, {
            id: "SJ",
            name: "手少阳三焦经",
            category: 2
        }, {
            id: "SJ5",
            name: "外关穴",
            category: 4
        }, {
            id: "sanjiao",
            name: "三焦",
            category: 3
        }, {
            id: "e10",
            name: "通调三焦",
            category: 5
        },

        // 第十一式：仰呼（足少阳胆经）
        {
            id: "m11",
            name: "12.仰呼式",
            category: 1,
            value: 7
        }, {
            id: "GB",
            name: "足少阳胆经",
            category: 2
        }, {
            id: "GB34",
            name: "阳陵泉",
            category: 4
        }, {
            id: "dan",
            name: "胆",
            category: 3
        }, {
            id: "e11",
            name: "疏肝利胆",
            category: 5
        },

        // 第十二式：折阴（足厥阴肝经）
        {
            id: "m12",
            name: "13.折阴式",
            category: 1,
            value: 9
        }, {
            id: "LR",
            name: "足厥阴肝经",
            category: 2
        }, {
            id: "LR3",
            name: "太冲穴",
            category: 4
        }, {
            id: "gan",
            name: "肝",
            category: 3
        }, {
            id: "e12",
            name: "疏肝理气",
            category: 5
        },

        // ===== 收势 =====
        {
            id: "m13",
            name: "14.收势",
            category: 1,
            value: 8
        },

        // ===== 公共节点 =====
        {
            id: "e13",
            name: "调和阴阳",
            category: 5,
            value: 10
        }, {
            id: "e14",
            name: "延年益寿",
            category: 5,
            value: 10
        }
    ],
    "links": [
        // 导引术主体连接
        {
            source: "mwdys",
            target: "m0",
            value: 10
        }, {
            source: "mwdys",
            target: "m1",
            value: 10
        }, {
            source: "mwdys",
            target: "m2",
            value: 10
        }, {
            source: "mwdys",
            target: "m3",
            value: 10
        }, {
            source: "mwdys",
            target: "m4",
            value: 10
        }, {
            source: "mwdys",
            target: "m5",
            value: 10
        }, {
            source: "mwdys",
            target: "m6",
            value: 10
        }, {
            source: "mwdys",
            target: "m7",
            value: 10
        }, {
            source: "mwdys",
            target: "m8",
            value: 10
        }, {
            source: "mwdys",
            target: "m9",
            value: 10
        }, {
            source: "mwdys",
            target: "m10",
            value: 10
        }, {
            source: "mwdys",
            target: "m11",
            value: 10
        }, {
            source: "mwdys",
            target: "m12",
            value: 10
        }, {
            source: "mwdys",
            target: "m13",
            value: 10
        },

        // 添加动作顺序连接
        {
            source: "m0",
            target: "m1",
            name: "顺序连接",
            lineStyle: {
                type: "dashed",
                color: "#999999"
            }
        }, {
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
        }, {
            source: "m12",
            target: "m13",
            name: "顺序连接",
            lineStyle: {
                type: "dashed",
                color: "#999999"
            }
        },

        // 招式关系链（示例）
        // 第一式
        {
            source: "m1",
            target: "LU",
            name: "刺激经络"
        }, {
            source: "LU",
            target: "fei",
            name: "属络脏腑"
        }, // 修正连接点
        {
            source: "m1",
            target: "LU9",
            name: "激活穴位"
        }, {
            source: "m1",
            target: "e1",
            name: "主要功效"
        }, {
            source: "e1",
            target: "e13",
            name: "系统关联"
        },

        // 第二式
        {
            source: "m2",
            target: "LI",
            name: "刺激经络"
        }, {
            source: "LI",
            target: "dachang",
            name: "属络脏腑"
        }, // 修正连接点
        {
            source: "m2",
            target: "LI4",
            name: "激活穴位"
        }, {
            source: "m2",
            target: "e2",
            name: "主要功效"
        }, {
            source: "e2",
            target: "e13",
            name: "系统关联"
        },

        // 第三式
        {
            source: "m3",
            target: "ST",
            name: "刺激经络"
        }, {
            source: "ST",
            target: "wei",
            name: "属络脏腑"
        }, // 修正连接点
        {
            source: "m3",
            target: "ST36",
            name: "激活穴位"
        }, {
            source: "m3",
            target: "e3",
            name: "主要功效"
        }, {
            source: "e3",
            target: "e13",
            name: "系统关联"
        },

        // 第四式：龙登
        {
            source: "m4",
            target: "SP",
            name: "刺激经络"
        }, {
            source: "SP",
            target: "pi",
            name: "属络脏腑"
        }, {
            source: "m4",
            target: "SP6",
            name: "激活穴位"
        }, {
            source: "m4",
            target: "e4",
            name: "主要功效"
        }, {
            source: "e4",
            target: "e13",
            name: "系统关联"
        },

        // 第五式：鸟伸
        {
            source: "m5",
            target: "HT",
            name: "刺激经络"
        }, {
            source: "HT",
            target: "xin",
            name: "属络脏腑"
        }, {
            source: "m5",
            target: "HT7",
            name: "激活穴位"
        }, {
            source: "m5",
            target: "e5",
            name: "主要功效"
        }, {
            source: "e5",
            target: "e13",
            name: "系统关联"
        },

        // 第六式：引腹
        {
            source: "m6",
            target: "SI",
            name: "刺激经络"
        }, {
            source: "SI",
            target: "xiaochang",
            name: "属络脏腑"
        }, {
            source: "m6",
            target: "SI3",
            name: "激活穴位"
        }, {
            source: "m6",
            target: "e6",
            name: "主要功效"
        }, {
            source: "e6",
            target: "e13",
            name: "系统关联"
        },

        // 第七式：鸥视
        {
            source: "m7",
            target: "BL",
            name: "刺激经络"
        }, {
            source: "BL",
            target: "pangguang",
            name: "属络脏腑"
        }, {
            source: "m7",
            target: "BL23",
            name: "激活穴位"
        }, {
            source: "m7",
            target: "e7",
            name: "主要功效"
        }, {
            source: "e7",
            target: "e14",
            name: "延年关联"
        },

        // 第八式：引腰
        {
            source: "m8",
            target: "KI",
            name: "刺激经络"
        }, {
            source: "KI",
            target: "shen",
            name: "属络脏腑"
        }, {
            source: "m8",
            target: "KI3",
            name: "激活穴位"
        }, {
            source: "m8",
            target: "e8",
            name: "主要功效"
        }, {
            source: "e8",
            target: "e14",
            name: "延年关联"
        },

        // 第九式：雁飞
        {
            source: "m9",
            target: "PC",
            name: "刺激经络"
        }, {
            source: "PC",
            target: "xinbao",
            name: "属络脏腑"
        }, {
            source: "m9",
            target: "PC6",
            name: "激活穴位"
        }, {
            source: "m9",
            target: "e9",
            name: "主要功效"
        }, {
            source: "e9",
            target: "e14",
            name: "延年关联"
        },

        // 第十式：鹤舞
        {
            source: "m10",
            target: "SJ",
            name: "刺激经络"
        }, {
            source: "SJ",
            target: "sanjiao",
            name: "属络脏腑"
        }, {
            source: "m10",
            target: "SJ5",
            name: "激活穴位"
        }, {
            source: "m10",
            target: "e10",
            name: "主要功效"
        }, {
            source: "e10",
            target: "e14",
            name: "延年关联"
        },

        // 第十一式：仰呼
        {
            source: "m11",
            target: "GB",
            name: "刺激经络"
        }, {
            source: "GB",
            target: "dan",
            name: "属络脏腑"
        }, {
            source: "m11",
            target: "GB34",
            name: "激活穴位"
        }, {
            source: "m11",
            target: "e11",
            name: "主要功效"
        }, {
            source: "e11",
            target: "e14",
            name: "延年关联"
        },

        // 第十二式：折阴
        {
            source: "m12",
            target: "LR",
            name: "刺激经络"
        }, {
            source: "LR",
            target: "gan",
            name: "属络脏腑"
        }, {
            source: "m12",
            target: "LR3",
            name: "激活穴位"
        }, {
            source: "m12",
            target: "e12",
            name: "主要功效"
        }, {
            source: "e12",
            target: "e14",
            name: "延年关联"
        },
    ]
};
// 初始化图表
document.addEventListener('DOMContentLoaded', function() {
    var dysChartDom = document.getElementById('dys-chart');
    var dysChart = echarts.init(dysChartDom);

    // 动态计算标签显示
    daoyinData.nodes.forEach(function(node) {
        node.label = {
            show: node.value > 6 || node.category === 0,
            fontSize: node.category === 0 ? 16 : 12
        };
    });

    var dysOption = {
        tooltip: {
            formatter: function(params) {
                if (params.dataType === 'node') {
                    return `${params.name}<br>类型：${daoyinData.categories[params.data.category].name}`;
                }
                return `${params.source} → ${params.target}<br>关系：${params.data.name || '功能关联'}`;
            }
        },
        series: [{
            type: 'graph',
            layout: 'force',
            data: daoyinData.nodes,
            links: daoyinData.links,
            categories: daoyinData.categories,
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

    dysChart.setOption(dysOption);

    // 响应式调整
    window.addEventListener('resize', function() {
        dysChart.resize();
    });
});