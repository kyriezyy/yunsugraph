<template>
    <div >
        <el-container>
            <el-header>
                <Header/>
            </el-header>
            <!--<el-aside>-->
                <!--<Sider/>-->
            <!--</el-aside>-->
            <!--<el-main>main</el-main>-->
            <div class="container" :style="height">
                <div class="sider" :style="side" ref="side">
                    <Sider/>

                </div>
                <div class="main" :style="main" ref="main">
                    <div class="left" @click="left('left')" >
                        <i :class="`el-icon-arrow-${arrow}`"></i>
                    </div>
                </div>
            </div>
        </el-container>
    </div>
</template>

<script>
    import Header from '../components/Header'
    import Sider from '../components/Sider'

    export default {
        name: "BaseLayout",
        components: {
            Header,
            Sider,
        },
        data(){
            return{
                height:`height: ${(window.innerHeight-60).toString()}px;`,
                // width:`height: ${(window.innerWidth-60).toString()}px;`,
                side: {},
                main: {},
                arrow: 'left',
            }
        },
        methods: {
            left(flag){
                if(this.arrow===flag){
                    let side = this.$refs.side.clientWidth;
                    // let main = this.$refs.main.clientWidth;
                    // console.log(side, main)
                    this.side = {transform:`translate(-${side.toString()}px, 0)`};
                    this.main = {transform:`translate(-${side.toString()}px, 0)`};
                    this.arrow =  'right'
                }else {
                    // let side = this.$refs.side.clientWidth;
                    // let main = this.$refs.main.clientWidth
                    this.side = {transform:`translate(${0}px, 0)`};
                    this.main = {transform:`translate(${0}px, 0)`};
                    this.arrow =  'left'
                }
            }
        },
        mounted(){
            window.onresize = ()=>{
                this.left('right')
            }
        }
    }
</script>

<style scoped>
    .el-header{
        padding: 0;
    }
    .container{
        display: flex;
    }
    .sider{
        width: 380px;
        background-color: #dddddd;
        box-shadow: 0 2px 20px 0;
        position: relative;
        overflow: auto;
        transition: transform 0.3s;
    }
    .left{
        width: 20px;
        height: 80px;
        line-height: 80px;
        position: absolute;
        background-color: #ffffff;
        transform: translate(0,-50%);
        top: 50%;
        border-radius: 0 25px 25px 0;
        border: 1px #dddddd solid;
        border-left: 0;
        box-shadow: 3px 0 10px 0;
        z-index: 1000;
    }
    .left:hover{
        background-color: #dddddd;
        cursor: pointer;
    }
    .main{
        width: 100%;
        transition: transform 0.3s;
        position: relative;
    }
</style>
