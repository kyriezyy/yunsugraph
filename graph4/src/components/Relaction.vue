<template>
    <div class="relactions">
        <div class="relaction-input">
            <el-input placeholder="请选择一个起点" v-model="a" style="margin-bottom: 10px">
                <template slot="prepend">A</template>
            </el-input>
            <el-input placeholder="请选择一个终点" v-model="b" style="margin-bottom: 10px">
                <template slot="prepend">B</template>
            </el-input>
            <div class="level">
                跳数限制: <el-input-number size="mini" v-model="num" @change="handleChange" :min="1" :max="10" label="" style="margin-left: 10px"></el-input-number>
                <i class="el-icon-refresh"></i>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "relaction",
        data(){
            return {
                a:'',
                b:'',
                num: 4
            }
        },
        methods: {
            handleChange(){

            }
        }
    }
</script>

<style scoped>
    .relactions{

    }
    .relaction-input{
        padding: 10px;
        background-color: #ffffff;
    }
    .level{
        display: flex;
        align-items: center;
    }
    .el-icon-refresh{
        margin-left: 10px;
        font-size: 20px;
    }
    .el-icon-refresh:hover{
        cursor: pointer;
    }
</style>
