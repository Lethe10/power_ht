import _axios from "../utils/request";

//验证码图片
export const getCodeImg = (data) => {
    return _axios({
        url: '/captchaImage',
        method: 'get',
        data
    })
}
//登录
export const login = (data) => {
    return _axios({
        url: '/login',
        method: 'post',
        data
    })
}