export default {
    demoMenus: [
        {
            icon: 'el-icon-fa-diamond',
            name: 'Demo Page',
            path: '/demo',
            children: [
                {
                    icon: 'el-icon-fa-diamond',
                    name: 'Form Panel',
                    path: '/demo/form'
                },
                {
                    icon: 'el-icon-fa-diamond',
                    name: 'Table Panel',
                    path: '/demo/table'
                }
            ]
        }
    ],
    menus: [
        {
            path: '/system',
            name: '系统管理',
            icon: 'el-icon-fa-bank',
            children: [
                {
                    path: '/menu',
                    name: '用户管理',
                    icon: 'el-icon-fa-user',
                    opts: [
                        {
                            name: '查看',
                            basic: true,
                            permission: 'system:user:query'
                        }
                    ]
                }
            ]
        },
        {
            path: '/alarmconfig',
            name: '报警设置',
            icon: 'el-icon-fa-bank',
            children: [
                {
                    path: '/sgmenu',
                    name: '项目报警设置',
                    icon: 'el-icon-fa-user',
                    opts: [
                        {
                            name: '查看',
                            basic: true,
                            permission: 'system:role:query'
                        }
                    ]
                },
                {
                    path: '/alarmconfig/projnotice',
                    name: '项目报警通知设置',
                    icon: 'el-icon-fa-user',
                    opts: [
                        {
                            name: '查看',
                            basic: true,
                            permission: 'system:role:query'
                        }
                    ]
                },
                {
                    path: '/alarmconfig/staffsetting',
                    name: '为断数报警设定通知人员',
                    icon: 'el-icon-fa-key',
                    opts: [
                        {
                            name: '查看',
                            basic: true,
                            permission: 'system:role:query'
                        }
                    ]
                }
            ]
        },
        // 与fm相关的配置
        {
            path: '/fm',
            name: '与FM相关设置',
            icon: 'el-icon-fa-bank',
            children: [
                {
                    path: '/fm/sopsetting',
                    name: '通用问题与项目sop对应关系配置',
                    icon: 'el-icon-fa-user',
                    opts: [
                        {
                            name: '查看',
                            basic: true,
                            permission: 'system:role:query'
                        }
                    ]
                },
                {
                    path: '/fm/rulesetting',
                    name: '项目计划抢单规则设定',
                    icon: 'el-icon-fa-user',
                    opts: [
                        {
                            name: '查看',
                            basic: true,
                            permission: 'system:role:query'
                        }
                    ]
                }
            ]
        },
        // 与fm相关的配置
        {
            path: '/point',
            name: '点位表管理',
            icon: 'el-icon-fa-bank',
            children: [
                {
                    path: '/point/pointsetting',
                    name: '点位表配置工具',
                    icon: 'el-icon-fa-user',
                    opts: [
                        {
                            name: '查看',
                            basic: true,
                            permission: 'system:role:query'
                        }
                    ]
                }
            ]
        },
        // 项目化配置
        {
            path: '/proj',
            name: '项目化配置',
            icon: 'el-icon-fa-bank',
            children: [
                {
                    path: '/proj/custominfo',
                    name: '自定义信息点',
                    icon: 'el-icon-fa-user',
                    opts: [
                        {
                            name: '查看',
                            basic: true,
                            permission: 'system:role:query'
                        }
                    ]
                },
                {
                    path: '/proj/collectsetting',
                    name: '配置项目需采集的信息',
                    icon: 'el-icon-fa-user',
                    opts: [
                        {
                            name: '查看',
                            basic: true,
                            permission: 'system:role:query'
                        }
                    ]
                }
            ]
        },
        //台账管理
        {
            path: '/ledger',
            name: '台账管理',
            icon: 'el-icon-fa-bank',
            children: [
                {
                    path: '/ledger/facility',
                    name: '设备管理',
                    icon: 'el-icon-fa-user',
                    opts: [
                        {
                            name: '查看',
                            basic: true,
                            permission: 'system:role:query'
                        }
                    ]
                },
                {
                    path: '/ledger/system',
                    name: '系统管理',
                    icon: 'el-icon-fa-user',
                    opts: [
                        {
                            name: '查看',
                            basic: true,
                            permission: 'system:role:query'
                        }
                    ]
                },
                {
                    path: '/ledger/property',
                    name: '资产管理',
                    icon: 'el-icon-fa-user',
                    opts: [
                        {
                            name: '查看',
                            basic: true,
                            permission: 'system:role:query'
                        }
                    ]
                }
            ]
        },
        //业务空间管理
        {
            path: '/business',
            name: '业务空间管理',
            icon: 'el-icon-fa-bank',
            children: [
                {
                    path: '/business/spacelist',
                    name: '业务空间清单',
                    icon: 'el-icon-fa-user',
                    opts: [
                        {
                            name: '查看',
                            basic: true,
                            permission: 'system:role:query'
                        }
                    ]
                }
            ]
        },
        //竖井管理
        {
            path: '/cenote',
            name: '竖井管理',
            icon: 'el-icon-fa-bank',
            children: [
                {
                    path: '/cenote/cenotelist',
                    name: '竖井清单',
                    icon: 'el-icon-fa-user',
                    opts: [
                        {
                            name: '查看',
                            basic: true,
                            permission: 'system:role:query'
                        }
                    ]
                }
            ]
        },
        //租户管理
        {
            path: '/rent',
            name: '租户管理',
            icon: 'el-icon-fa-bank',
            children: [
                {
                    path: '/rent/rentlist',
                    name: '租户清单',
                    icon: 'el-icon-fa-user',
                    opts: [
                        {
                            name: '查看',
                            basic: true,
                            permission: 'system:role:query'
                        }
                    ]
                }
            ]
        },
        //扫楼数据管理
        {
            path: '/floor',
            name: '扫楼数据管理',
            icon: 'el-icon-fa-bank',
            children: [
                {
                    path: '/floor/data',
                    name: '扫楼数据管理',
                    icon: 'el-icon-fa-user',
                    opts: [
                        {
                            name: '查看',
                            basic: true,
                            permission: 'system:role:query'
                        }
                    ]
                },
                {
                    path: '/floor/plan',
                    name: '楼层平面图管理',
                    icon: 'el-icon-fa-user',
                    opts: [
                        {
                            name: '查看',
                            basic: true,
                            permission: 'system:role:query'
                        }
                    ]
                },
                {
                    path: '/floor/abnormalprop',
                    name: '异常资产清单',
                    icon: 'el-icon-fa-user',
                    opts: [
                        {
                            name: '查看',
                            basic: true,
                            permission: 'system:role:query'
                        }
                    ]
                },
                {
                    path: '/floor/log',
                    name: '扫楼日志查看',
                    icon: 'el-icon-fa-user',
                    opts: [
                        {
                            name: '查看',
                            basic: true,
                            permission: 'system:role:query'
                        }
                    ]
                },
                {
                    path: '/floor/appuser',
                    name: '扫楼App用户管理',
                    icon: 'el-icon-fa-user',
                    opts: [
                        {
                            name: '查看',
                            basic: true,
                            permission: 'system:role:query'
                        }
                    ]
                }
            ]
        },
        //环境调节
        {
            path: '/environment',
            name: '环境调节',
            icon: 'el-icon-fa-bank',
            children: [
                {
                    path: '/environment/envlist',
                    name: '环境服务定制设置',
                    icon: 'el-icon-fa-user',
                    opts: [
                        {
                            name: '查看',
                            basic: true,
                            permission: 'system:role:query'
                        }
                    ]
                }
            ]
        },
        //市场及商务
        {
            path: '/market',
            name: '市场及商务',
            icon: 'el-icon-fa-bank',
            children: [
                {
                    path: '/market/own',
                    name: '业主管理',
                    icon: 'el-icon-fa-user',
                    opts: [
                        {
                            name: '查看',
                            basic: true,
                            permission: 'system:role:query'
                        }
                    ]
                }
            ]
        },
        //revit服务器端化的web功能
        {
            path: '/revitservice',
            name: 'revit服务器端化',
            icon: 'el-icon-fa-bank',
            children: [
                {
                    path: '/revitservice/revit',
                    name: '设计中',
                    icon: 'el-icon-fa-user',
                    opts: [
                        {
                            name: '查看',
                            basic: true,
                            permission: 'system:role:query'
                        }
                    ]
                }
            ]
        },
    ]
}
