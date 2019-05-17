<template>
    <div>
        <div class="tabs">
            <el-button-group>
                <el-button :type="types[0]" size="small" icon="el-icon-search" @click="selected(0)">搜索</el-button>
                <el-button :type="types[1]" size="small" icon="el-icon-share" @click="selected(1)">路径</el-button>
                <el-button :type="types[2]" size="small" icon="el-icon-s-data" @click="selected(2)">统计</el-button>
            </el-button-group>
        </div>
        <Search v-if="current===0" class="search"/>
        <Relaction v-if="current===1" class="relaction"/>
    </div>
</template>

<script>
    import Search from './Search';
    import Relaction from './Relaction'

    export default {
        name: "Sider",
        components:{
            Search,
            Relaction
        },
        data(){
            return {
                // Types: ['','info',''],
                current: 1,
            }
        },
        methods:{
            selected(type){
                this.current = type
            }
        },
        computed: {
            types(){
                let val = Array.apply(null, {length: 3}).map( () =>'');
                val[this.current] = 'info';
                return val
            }
        },
        mounted(){


        }
    }
</script>

<style scoped>

    .tabs{
        height: 40px;
        width: 100%;
        background-color: #ffffff;
        padding: 10px 0;
        margin-bottom: 5px;
    }
    .el-button:hover{
        color: #9E9E9E;
        border-color: #9e9e9e8c;
        background-color: rgba(115, 115, 115, 0.25);
    }

    /*.search{*/
        /*margin-top: 20px;*/
    /*}*/
</style>
