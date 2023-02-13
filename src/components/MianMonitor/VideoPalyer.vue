<template>
    <video id="v_1" style="width:100%; height: 100%" class="video-js"></video>
</template>

<script>
import Videojs from "video.js";
export default {
    name: 'VideoPalyer',
    props: {
        vData: {
            type: Object,
            default: () => {
                return {
                    hlsurl: "", //视频url地址
                    cameraId: "", //id
                };
            },
        },
    },
    data() {
        return {
            options: {
                autoplay: true,
                muted: true,
                preload: "auto",
                controls: true,
                repeat:true
            },
            player: null,
            videoId: "",
        };
    },
    methods: {
        getVideo(nowPlayVideoUrl, nowPlayVideoId) {
            this.player = Videojs(nowPlayVideoId, this.options);
            this.player.src([
                {
                    src: nowPlayVideoUrl,
                    type: "application/x-mpegURL",
                },
            ]);
        },
    },

    watch: {
        vData: {
            deep: true,
            immediate: true,
            handler(val) {
                this.videoId = val.cameraId;
                this.$nextTick(() => {
                        this .getVideo(val.hlsurl, val.cameraId);
                });
            },
        },
    },
    beforeDestroy() {
        //  组件销毁时，清除播放器
        if (this.player) {
            this.player.dispose(); // 该方法会重置videojs的内部状态并移除dom
        }
    },
}
</script>

<style>

</style>