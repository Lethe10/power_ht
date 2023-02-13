import axios from 'axios'
import Cookies from 'js-cookie'
import {Message } from 'element-ui'

// 是否显示重新登录
export let isRelogin = { show: false };

const _axios = axios.create({
        baseURL:'http://116.204.77.105:8080'
        // baseURL:'http://localhost:8080'
    })
    // 请求拦截
_axios.interceptors.request.use(
        (config) => {
            if (Cookies.get('token')) {
                config.headers.token = Cookies.get('token');
            }
            return config
        },
        (error) => {
            console.log(11111111);
            return Promise.reject(error)
        }
    )
    // 响应拦截
_axios.interceptors.response.use(
    (res) => {
        if (res.data.code == 200) {
            // 成功处理
            return res.data
        } else if (res.data.code == 403) {
            alert('登录已失效，请重新登录');
        } else {
            // 失败处理
            // 提示错误信息
            Message.error(res.data.msg)
                // 让接口调用执行.catch,中止.then的执行
            return Promise.reject(res)
        }
    },
    (error) => {
        console.log(error);
        return Promise.reject(error)
    }
)

export default _axios