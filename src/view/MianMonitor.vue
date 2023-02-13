<template>
    <div class="monitor-container">
        <div class="monitor-left-box">
            <div class="monitor-left-box-top">
                <div class="title">
                    <img src="../assets/images/MianMonitor/shebei.png" alt="" />
                    <p>设备列表</p>
                </div>
                <el-tree :data="videoData" :props="defaultProps" @node-click="handleNodeClick"></el-tree>
            </div>
            <div class="monitor-left-box-bottom">
                <div class="title">
                    <img src="../assets/images/MianMonitor/chuangkou.png" alt="" />
                    <p>窗口信息</p>
                </div>
                <div class="massage">
                    <p>暂无信息</p>
                </div>
            </div>
        </div>
        <div class="monitor-center-box">
            <div class="monitor-center-monitor">
                <!-- <video id="monitor-1" class="video-js video-box" muted></video> -->
                <VideoPalyer :vData="vData"></VideoPalyer>
                <p>家属区1</p>
            </div>
            <div class="monitor-center-monitor">
            </div>
        </div>
        <div class="monitor-right-box">
            <div class="monitor-right-box-top">
                <div class="title">
                    <img src="../assets/images/MianMonitor/yuntai.png" alt="" />
                    <p>云台操作</p>
                </div>
                <div class="PTZ-box">
                    <div class="PTZ-box-bg">
                        <div class="PTZ-box-circular">
                            <img src="../assets/images/MianMonitor/center.png" alt="" />
                            <div class="PTZ-box-circular-btn-1"></div>
                            <div class="PTZ-box-circular-btn-2"></div>
                            <div class="PTZ-box-circular-btn-3"></div>
                            <div class="PTZ-box-circular-btn-4"></div>
                            <div class="PTZ-box-circular-btn-5"></div>
                            <div class="PTZ-box-circular-btn-6"></div>
                            <div class="PTZ-box-circular-btn-7"></div>
                            <div class="PTZ-box-circular-btn-8"></div>
                        </div>
                    </div>
                </div>
                <div class="PTZ-contorl">
                    <div class="PTZ-contorl-box">
                        <p>变倍</p>
                        <button>+</button>
                        <input type="number" />
                        <button>-</button>
                    </div>
                    <div class="PTZ-contorl-box">
                        <p>变焦</p>
                        <button>+</button>
                        <input type="number" />
                        <button>-</button>
                    </div>
                    <div class="PTZ-contorl-box">
                        <p>光圈</p>
                        <button>+</button>
                        <input type="number" />
                        <button>-</button>
                    </div>
                    <div class="PTZ-contorl-box">
                        <p>步长</p>
                        <button>+</button>
                        <input type="number" />
                        <button>-</button>
                    </div>
                </div>
            </div>
            <div class="monitor-right-box-bottom">
                <div class="title">
                    <img src="../assets/images/MianMonitor/kongzhi.png" alt="" />
                    <p>设备控制</p>
                </div>
                <div class="massage">
                    <p>暂无信息</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import VideoPalyer from '../components/MianMonitor/VideoPalyer.vue'

// import Videojs from "video.js";
export default {
    components: {
        VideoPalyer: VideoPalyer
    },
    data() {
        return {
            isLoad: false,
            rememberLabel: '',
            vData: {
                hlsurl: "https://open.ys7.com/v3/openlive/K68561988_1_1.m3u8?expire=1706166560&id=540186762544488448&t=cfe609856f405319e381ad4f236855b02a4887f45cd2b2d6cc11e949b052e79d&ev=100",
                cameraId: "v_1",
            },
            videoData: [
                {
                    label: "家属区",
                    children: [
                        {
                            label: "家属区1",
                            src: "https://open.ys7.com/v3/openlive/K68561988_1_1.m3u8?expire=1706166560&id=540186762544488448&t=cfe609856f405319e381ad4f236855b02a4887f45cd2b2d6cc11e949b052e79d&ev=100",
                        },
                        {
                            label: "家属区2",
                            src: "https://open.ys7.com/v3/openlive/K68561988_2_1.m3u8?expire=1706166778&id=540187678973374464&t=9cbc44db8869d4d4bf9504fe484d06b51a0f8090dc5b3eb9af34320a8fd60380&ev=100",
                        },
                        {
                            label: "家属区3",
                            src: "https://open.ys7.com/v3/openlive/K68561988_3_2.m3u8?expire=1706167414&id=540190343170097152&t=da656473b93171e93cf005cbc716dd0eadc9a4aa593b822d6ffe23ec2afd8cb3&ev=100",
                        },
                    ],
                },
                {
                    label: "院区",
                    children: [
                        {
                            label: "院区1",
                            src: "https://open.ys7.com/v3/openlive/K68561988_4_1.m3u8?expire=1706165048&id=540180419958546432&t=80af6f110b76cdf356a58b42fc0bf8337602c0eba6aac0fb7a6af8edf55e4c73&ev=100",
                        },
                        {
                            label: "院区2",
                            src: "https://open.ys7.com/v3/openlive/K68561988_5_2.m3u8?expire=1706167464&id=540190555645157376&t=e38f2188346a2e67a5ef37888fa92fd00108b2a363523e9862255b07650f1aca&ev=100",
                        },
                        {
                            label: "院区3",
                            src: "https://open.ys7.com/v3/openlive/K68561988_6_2.m3u8?expire=1706167594&id=540191100801196032&t=3d4fece9258eda7f39121ffa8e4e682578904417bd2f310589c84bcf9cd96d56&ev=100",
                        },
                        {
                            label: "院区4",
                            src: "https://open.ys7.com/v3/openlive/K68561988_7_2.m3u8?expire=1706167629&id=540191246874836992&t=9f2a2e58d8dac4065e296aa88e597965244e88aa05c6b93c0a476ddb3a0f7734&ev=100",
                        },
                        {
                            label: " 燃气尾气环保检测",
                            src: "https://open.ys7.com/v3/openlive/K68561988_7_2.m3u8?expire=1706167900&id=540192384755970048&t=e55403b797560920eda58f110ec5014ac0b65527ff280f1d1e0d431323d089dc&ev=100",
                        },
                        {
                            label: "院区值班室",
                            src: "https://open.ys7.com/v3/openlive/K68561988_9_2.m3u8?expire=1706168001&id=540192805415292928&t=24562a72449db2f2d4a925806ddb7bb4cc91fcf8880db8f82f9d830d2c12e781&ev=100",
                        },
                    ],
                },
            ],
            defaultProps: {
                children: "children",
                label: "label",
            },
        };
    },
    created() {
    },
    mounted() {
    },
    methods: {
        handleNodeClick(data) {
            if (this.rememberLabel == data.label) {
                return;
            } else {
                if (data.src) {
                    this.vData.hlsurl =data.src
                }
            }
            this.rememberLabel=data.label
        },
    },
};
</script>

<style scoped lang='scss'>
.monitor-container {
    width: 100%;
    height: 100%;
    background: url("../assets/images/MainIndex/indexBg.png");
    background-size: 100% 100%;
    padding: 20px;
    box-sizing: border-box;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;

    .monitor-left-box {
        width: 10%;
        margin-right: 1%;
        height: 100%;

        .monitor-left-box-top {
            width: 100%;
            height: 65%;
            margin-bottom: 5%;
            background: url("../assets/images/MianMonitor/modelBg.png");
            background-size: 100% 100%;

            .title {
                width: 100%;
                height: 30px;
                background: url("../assets/images/MianMonitor/title.png");
                background-size: 100% 100%;
                display: flex;
                align-items: center;

                img {
                    margin-left: 8px;
                    margin-right: 4px;
                    width: 14px;
                    height: 14px;
                }

                p {
                    color: #fff;
                    font-size: 14px;
                }
            }

            .massage {
                width: 100%;
                height: 30px;
                box-sizing: border-box;
                padding: 0 5px 0 15px;
                display: flex;
                align-items: center;
                cursor: pointer;

                img {
                    margin-top: 2px;
                    margin-left: 8px;
                    margin-right: 4px;
                    width: 14px;
                    height: 14px;
                }

                p {
                    color: #fff;
                    font-size: 14px;
                }
            }

            .massage p:hover {
                color: #0177fe;
            }
        }

        .monitor-left-box-bottom {
            width: 100%;
            height: 34%;
            background: url("../assets/images/MianMonitor/modelBg.png");
            background-size: 100% 100%;

            .title {
                width: 100%;
                height: 30px;
                background: url("../assets/images/MianMonitor/title.png");
                background-size: 100% 100%;
                display: flex;
                align-items: center;

                img {
                    margin-left: 8px;
                    margin-right: 4px;
                    width: 14px;
                    height: 14px;
                }

                p {
                    color: #fff;
                    font-size: 14px;
                }
            }

            .massage {
                width: 100%;
                height: 30px;
                box-sizing: border-box;

                // padding: 10px 5px 0 15px;
                // display: flex;
                // align-items: center;
                p {
                    margin-top: 20px;
                    text-align: center;
                    color: #fff;
                }
            }
        }
    }

    .monitor-center-box {
        width: 75%;
        height: 100%;
        margin-right: 1%;
        display: flex;
        // justify-content: space-between;
        // align-items: center;
        flex-wrap: wrap;
        overflow: hidden;

        .monitor-center-monitor {
            width: 100%;
            height: 100%;
            background: url("../assets/images/MianMonitor/monitorBg.png");
            background-size: 100% 100%;
            color: #fff;
            // display: flex;
            // justify-content: center;
            // align-items: center;
            padding: 5px;
            box-sizing: border-box;

            .video-box {
                width: 100%;
                height: 95%;
            }

            p {
                text-align: center;
            }
        }
    }

    .monitor-right-box {
        width: 13%;
        height: 100%;

        .monitor-right-box-top {
            width: 100%;
            height: 50%;
            margin-bottom: 5%;
            background: url("../assets/images/MianMonitor/modelBg.png");
            background-size: 100% 100%;
            display: flex;
            flex-wrap: wrap;
            justify-content: center;

            .title {
                width: 100%;
                height: 30px;
                background: url("../assets/images/MianMonitor/title.png");
                background-size: 100% 100%;
                display: flex;
                align-items: center;

                img {
                    margin-left: 8px;
                    margin-right: 4px;
                    width: 14px;
                    height: 14px;
                }

                p {
                    color: #fff;
                    font-size: 14px;
                }
            }

            .PTZ-box {
                width: 180px;
                height: 180px;
                border-radius: 50%;
                background: #253d6c;
                display: flex;
                justify-content: center;
                align-items: center;

                .PTZ-box-bg {
                    width: 150px;
                    height: 150px;
                    border-radius: 50%;
                    background: #0c2879;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .PTZ-box-circular {
                        position: relative;
                        width: 90px;
                        height: 90px;
                        border-radius: 50%;
                        border: 2px solid #00ffdc;
                        display: flex;
                        justify-content: center;
                        align-items: center;

                        div {
                            cursor: pointer;
                        }

                        .PTZ-box-circular-btn-1 {
                            position: absolute;
                            top: -32px;
                            border-bottom: 12px solid #fff;
                            border-left: 12px solid transparent;
                            border-right: 12px solid transparent;
                            border-top: 12px solid transparent;
                        }

                        .PTZ-box-circular-btn-2 {
                            position: absolute;
                            top: -13px;
                            right: -20px;
                            transform: rotate(45deg);
                            border-bottom: 12px solid #fff;
                            border-left: 12px solid transparent;
                            border-right: 12px solid transparent;
                            border-top: 12px solid transparent;
                        }

                        .PTZ-box-circular-btn-3 {
                            position: absolute;
                            top: 34px;
                            right: -40px;
                            border-top: 12px solid transparent;
                            border-left: 12px solid #fff;
                            border-right: 12px solid transparent;
                            border-bottom: 12px solid transparent;
                        }

                        .PTZ-box-circular-btn-4 {
                            position: absolute;
                            top: 80px;
                            right: -20px;
                            transform: rotate(135deg);
                            border-bottom: 12px solid #fff;
                            border-left: 12px solid transparent;
                            border-right: 12px solid transparent;
                            border-top: 12px solid transparent;
                        }

                        .PTZ-box-circular-btn-5 {
                            position: absolute;
                            top: 102px;
                            border-top: 12px solid #fff;
                            border-left: 12px solid transparent;
                            border-right: 12px solid transparent;
                            border-bottom: 12px solid transparent;
                        }

                        .PTZ-box-circular-btn-6 {
                            position: absolute;
                            top: 80px;
                            left: -20px;
                            transform: rotate(225deg);
                            border-bottom: 12px solid #fff;
                            border-left: 12px solid transparent;
                            border-right: 12px solid transparent;
                            border-top: 12px solid transparent;
                        }

                        .PTZ-box-circular-btn-7 {
                            position: absolute;
                            top: 34px;
                            left: -40px;
                            border-top: 12px solid transparent;
                            border-left: 12px solid transparent;
                            border-right: 12px solid #fff;
                            border-bottom: 12px solid transparent;
                        }

                        .PTZ-box-circular-btn-8 {
                            position: absolute;
                            top: -13px;
                            left: -20px;
                            transform: rotate(-45deg);
                            border-bottom: 12px solid #fff;
                            border-left: 12px solid transparent;
                            border-right: 12px solid transparent;
                            border-top: 12px solid transparent;
                        }
                    }
                }
            }

            .PTZ-contorl {
                width: 180px;
                height: 180px;

                .PTZ-contorl-box {
                    width: 100%;
                    height: 35px;
                    display: flex;
                    justify-content: space-around;
                    align-items: center;
                    margin-top: 10px;

                    p {
                        color: #fff;
                    }

                    button {
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        background: #015aff;
                        color: #fff;
                        font-size: 20px;
                    }

                    input {
                        border: 0;
                        width: 40px;
                        background: #015aff;
                    }
                }
            }
        }

        .monitor-right-box-bottom {
            width: 100%;
            height: 48%;
            background: url("../assets/images/MianMonitor/modelBg.png");
            background-size: 100% 100%;

            .title {
                width: 100%;
                height: 30px;
                background: url("../assets/images/MianMonitor/title.png");
                background-size: 100% 100%;
                display: flex;
                align-items: center;

                img {
                    margin-left: 8px;
                    margin-right: 4px;
                    width: 14px;
                    height: 14px;
                }

                p {
                    color: #fff;
                    font-size: 14px;
                }
            }

            .massage {
                width: 100%;
                height: 30px;
                box-sizing: border-box;

                // padding: 10px 5px 0 15px;
                // display: flex;
                // align-items: center;
                p {
                    margin-top: 20px;
                    text-align: center;
                    color: #fff;
                }
            }
        }
    }
}
</style>
<style lang="scss">
.monitor-container {
    .el-tree {
        background: transparent;
        color: #fff;
    }

    .el-tree-node__content:hover,
    .el-upload-list__item:hover {
        background: rgb(74, 101, 163);
    }
    .el-tree-node .is-current{
        background: #000!important;
    }
}
</style>