import _axios from "../utils/request";

//控制温度
export const demoApi = (data) => {
    return _axios({
        url: '/energy/updatenumber',
        method: 'post',
        data
    })
}
//通过锅炉airId获取相关参数
export const selectBoilerApi = (data) => {
    return _axios({
        url: '/boiler/selectBoiler',
        method: 'get',
        params:data
    })
}
//插入锅炉参数
export const newBoilerApi = (data) => {
    return _axios({
        url: '/boiler/newBoiler',
        method: 'post',
        data
    })
}
//设备编号 airId
//设备位置 location
//设备名称 eiName
//设备所属部门 deptId
//设置温度  installes


//更改锅炉设置温度
export const updateinstallesApi = (data) => {
    return _axios({
        url: '/boiler/updateinstalles',
        method: 'post',
        data
    })
}

//查询条件 airId
//设置温度  installes


//更改锅炉开关
export const updaterunstatusApi = (data) => {
    return _axios({
        url: '/boiler/updaterunstatus',
        method: 'post',
        data
    })
}

//查询条件airId
//运行状态  runstatus