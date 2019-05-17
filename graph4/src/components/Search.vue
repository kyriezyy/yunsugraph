<template>
    <div class="container">
        <div class="search-pane">
            <el-input placeholder="请输入内容" v-model="keyword" class="input-with-select">
                <el-select v-model="type" slot="prepend" placeholder="请选择" style="width: 80px">
                    <el-option label="实体" value="entity"></el-option>
                    <el-option label="关系" value="relaction"></el-option>
                </el-select>
                <!--<el-button slot="append" icon="el-icon-search"></el-button>-->
            </el-input>
        </div>

        <el-collapse  class="filter" v-model="shows">
            <el-collapse-item name="1">
                <template slot="title">
                    <p>类别过滤</p>
                </template>
                <div class="tags">
                    <el-tag>标签一</el-tag>
                    <el-tag type="success">标签二</el-tag>
                    <el-tag type="info">标签三</el-tag>
                    <el-tag type="warning">标签四</el-tag>
                    <el-tag type="danger">标签五</el-tag>
                    <el-tag type="info">标签三</el-tag>
                    <el-tag type="warning">标签四</el-tag>
                    <el-tag type="danger">标签五</el-tag>
                    <el-tag type="info">标签三</el-tag>
                    <el-tag type="warning">标签四</el-tag>
                    <el-tag type="danger">标签五</el-tag>
                </div>
                <div class="selected-tags">
                    <el-tag type="info" closable>标签三</el-tag>
                    <el-tag type="warning" closable>标签四</el-tag>
                    <el-tag type="danger" closable>标签五</el-tag>
                    <el-tag type="info" closable>标签三</el-tag>
                    <el-tag type="warning" closable>标签四</el-tag>
                    <el-tag type="danger" closable>标签五</el-tag>
                    <el-tag type="info" closable>标签三</el-tag>
                    <el-tag type="warning" closable>标签四</el-tag>
                    <el-tag type="danger" closable>标签五</el-tag>
                </div>
            </el-collapse-item>
            <el-collapse-item name="2">
                <template slot="title">
                    <p>属性过滤</p>
                </template>
                <div class="tags">
                    <el-tag>标签一</el-tag>
                    <el-tag type="success">标签二</el-tag>
                    <el-tag type="info">标签三</el-tag>
                    <el-tag type="warning">标签四</el-tag>
                    <el-tag type="danger">标签五</el-tag>
                    <el-tag type="info">标签三</el-tag>
                    <el-tag type="warning">标签四</el-tag>
                    <el-tag type="danger">标签五</el-tag>
                    <el-tag type="info">标签三</el-tag>
                    <el-tag type="warning">标签四</el-tag>
                    <el-tag type="danger">标签五</el-tag>
                </div>
            </el-collapse-item>
            <el-collapse-item name="3">
                <template slot="title" >
                    <p>排序</p>
                </template>
                <p style="color: #bec4ca">没有相关属性</p>
            </el-collapse-item>
            <div class="result">
                <div class="header">
                    <h5>共925条结果,当前展示1-5</h5>
                    <div class="page">
                        每页展示数:
                        <span>
                        <el-select v-model="pageSize" size="mini">
                            <el-option
                                    v-for="item in pagesSizes"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                            </span>
                    </div>
                </div>

            </div>
        </el-collapse>
    </div>
</template>

<script>
    export default {
        name: "Search",
        data(){
            return {
                keyword: '',
                type: 'entity',
                options:[
                    {
                        label: '实体',
                        value: 'entity'
                    },
                    {
                        label: '关系',
                        value: 'relation'
                    },
                ],
                shows: ['1','2','3'],
                pageSize: '5',
                pagesSizes: [{
                    value: 5,
                    label:5
                },{
                    value: 10,
                    label:10
                },{
                    value: 20,
                    label:20
                }]
            }
        }
    }
</script>

<style scoped lang="scss">

    .container{
        /*background-color: #ffffff;*/
        /*padding: 5px;*/
        overflow: auto;
        height: calc(100%- 1px);
    }

    .el-input-group__prepend{
        width: 40px;
    }

    .search-pane{
        padding: 10px;
        background-color: #ffffff;
    }

    .filter{
        margin-top: 5px;
    }
    .filter p{
        text-indent: 15px;
    }

    .tags{
        display: flex;
        flex-wrap: wrap;
        /*justify-content: space-evenly;*/
        padding: 10px;
    }
    .selected-tags{
        border-top: 1px #dddddd solid;
        display: flex;
        flex-wrap: wrap;
        background: #f3f3f3;
        padding: 10px;
    }
    .el-tag{
        margin: 5px 5px;
    }
    .header{
        display: flex;
        justify-content: space-between;
        font-size: 14px;
        align-items: center;
        padding: 0 10px;
        border-bottom: 1px #dddddd solid;
    }
    .page{
        width: 130px;
        font-size: 12px;
        display: flex;
        justify-content: space-between;
        align-items: center;
        span{
            width: 60px;
        }
    }

    .result{
        background-color: #ffffff;
        margin-top: 10px;
    }


</style>
