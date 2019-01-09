/**
@author:fugy
@date:2018.11.28
@info:项目报警通知列表表格
**/
<template>
    <div class='box'>
        <table class='table' border='1' cellpadding='0' cellspacing='0'>
            <tr v-for='(item,index) in tableData' :key='index'>
                <td v-show='item.isShow'>
                    <div class='td-box' :style='"margin-left:" + ( 30 * item.level ) + "px;"'>
                        <!-- 图标 -->
                        <div class='icon-box'>
                            <span v-if='item.isLow' @click='switchIcon(item)'>
                                <i v-show='!item.isExpend' class='el-icon-caret-right'></i>
                                <i v-show='item.isExpend' class='el-icon-caret-bottom'></i>
                            </span>
                        </div>
                        <div class='con-box'>
                            <!-- 1级 -->
                            <p v-if='item.level == 1'>
                                <span>{{item.name}}</span>
                            </p>
                            <!-- 2级 -->
                            <p v-else-if='item.level == 2'>
                                <span>{{item.object}}</span>
                            </p>
                            <!-- 3级 -->
                            <p v-else-if='item.level == 3'>
                                <span>{{item.objectName}}</span>
                            </p>
                            <!-- 4级 -->
                            <p v-else>
                                <span>{{item.alarm}}</span>
                            </p>
                        </div>
                    </div>
                </td>
            </tr>
        </table>
    </div>
</template>
<script>
export default {
    name: 'index-content-list',
    data() {
        return {
            /**
             * level: 级别
             * isExpend: 图标样式
             * isLow: 是否有下一级
             * isShow: 当前行是否显示
             * index: 下标
             */
            tableData: [
                {
                    userId: 0,
                    name: '张三',
                    object: '建筑',
                    objectName: '建筑名称',
                    alarm: '报警条目',
                    level: 1,
                    isExpend: false,
                    isLow: true,
                    isShow: true,
                    index: 0,
                    pid: null
                },
                {
                    userId: 0,
                    name: '张三',
                    objectId: 1,
                    object: '楼层',
                    objectName: '楼层名称',
                    alarm: '报警条目222',
                    level: 2,
                    isExpend: false,
                    isLow: true,
                    isShow: false,
                    index: 1,
                    pid: 0
                },
                {
                    userId: 0,
                    name: '张三',
                    objectId: 1,
                    object: '楼层',
                    objectName: '楼层名称',
                    alarm: '报警条目222',
                    level: 3,
                    isExpend: false,
                    isLow: true,
                    isShow: false,
                    index: 2,
                    pid: 1
                },
                {
                    userId: 0,
                    name: '张三',
                    object: '楼层',
                    objectId: 1,
                    objectName: '楼层名称',
                    alarm: '报警条目222',
                    level: 4,
                    isExpend: false,
                    isLow: false,
                    isShow: false,
                    index: 3,
                    pid: 2
                },
                {
                    userId: 0,
                    name: '张三',
                    object: '楼层',
                    objectId: 1,
                    objectName: '楼层名称',
                    alarm: '报警条目222',
                    level: 4,
                    isExpend: false,
                    isLow: false,
                    isShow: false,
                    index: 4,
                    pid: 2
                },
                {
                    userId: 0,
                    name: '张三',
                    object: '楼层',
                    objectId: 2,
                    objectName: '楼层名称',
                    alarm: '报警条目222',
                    level: 2,
                    isExpend: false,
                    isLow: true,
                    isShow: false,
                    index: 5,
                    pid: 0
                },
                {
                    userId: 0,
                    name: '张三',
                    object: '楼层',
                    objectId: 2,
                    objectName: '楼层名称',
                    alarm: '报警条目222',
                    level: 3,
                    isExpend: false,
                    isLow: true,
                    isShow: false,
                    index: 6,
                    pid: 5
                },
                {
                    userId: 0,
                    name: '张三',
                    object: '楼层',
                    objectId: 2,
                    objectName: '楼层名称',
                    alarm: '报警条目222',
                    level: 4,
                    isExpend: false,
                    isLow: false,
                    isShow: false,
                    index: 7,
                    pid: 6
                },
                {
                    userId: 0,
                    name: '张三',
                    objectId: 2,
                    object: '楼层',
                    objectName: '楼层名称',
                    alarm: '报警条目222',
                    level: 4,
                    isExpend: false,
                    isLow: false,
                    isShow: false,
                    index: 8,
                    pid: 6
                },
                {
                    userId: 1,
                    name: '李四',
                    objectId: 1,
                    object: '楼层',
                    objectName: '楼层名称',
                    alarm: '报警条目222',
                    level: 1,
                    isExpend: false,
                    isLow: false,
                    isShow: true,
                    index: 9,
                    pid: null
                }
            ],
            pidArr: []
        }
    },
    methods: {
        /********************************树形结构----up*************************************************************** */
        switchIcon(row) {
            row.isExpend = !row.isExpend
            if (row.isExpend) {
                //展开
                this.pidArr.push(row.index)
                this.pidArr.sort((a, b) => a - b)
                this.expend()
            } else {
                //折叠
                for (let i = 0; i < this.pidArr.length; i++) {
                    if (row.index == this.pidArr[i]) {
                        this.pidArr.splice(i, 1)
                    }
                }
                this.refresh()
            }
        },
        /********pidArr中存在，并且父级的isShow为true**** */
        // 展开
        expend() {
            this.pidArr.forEach(item => {
                this.tableData.forEach(ele => {
                    if (item == ele.pid) {
                        ele.isShow = true
                    }
                })
            })
            this.refresh()
        },
        // 刷新
        refresh() {
            this.tableData.forEach(ele => {
                let pidFlag = this.pidArr.includes(ele.pid)
                if (pidFlag) {
                    //pid存在
                    this.tableData.forEach(item => {
                        //父级是否show
                        if (item.index == ele.pid) {
                            if (item.level == 1) {
                                ele.isShow = item.isExpend
                            } else {
                                ele.isShow = item.isShow
                            }
                        }
                    })
                } else {
                    if (ele.level == 1) {
                        ele.isShow = true
                    } else {
                        ele.isShow = false
                    }
                }
            })
        },
        /********************************树形结构----down*************************************************************** */
        init() {}
    },
    created() {
        this.init()
    }
}
</script>
<style lang="less" scoped>
.box {
    .table {  
        width: 100%; 
        border-width: 1px;
        border-color: #ebeef5;
        border-collapse: collapse;     
        tr {
            td {
               
                border-width: 1px;
                padding: 8px;
                border-style: solid;
                border-color: #ebeef5;
                .td-box {
                    overflow: hidden;
                    .icon-box {
                        float:left;
                        width: 15px;
                        height: 20px;
                        cursor: pointer;
                    };
                    .con-box {
                        float: left;
                        margin-left: 10px; 
                        overflow: hidden;
                        p {
                            float: left;
                            margin-left: 10px;
                        }
                    }
                }
            } 
        }
    }
}
</style>

