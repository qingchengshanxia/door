/**
 * 封装axios，统一拦截、loading加载图、返回状态显示；
 */
/**
 *
 * 1.发送json格式数据：
 *   {"Content-type": "application/json; charset=utf-8"}
 *   JSON.stringify(data)
 * 2.发送表单数据：
 *   {"Content-type": "application/x-www-form-urlencoded; charset=utf-8"}
 *   data:{
 *     key:value
 *   }
 * 3.发送纯文本（默认值）：
 *   {"Content-type": "text/plain; charset=utf-8"}
 * 4.发送html文本：
 *   {"Content-type": "text/html; charset=utf-8"}
 * 5.上传文件：
 *   { "Content-Type": "multipart/form-data" }
 *
 *
 */
//请求格式如下：
// this.$http({
//     headers:'',                           //是否必选：否 （默认为：'application/x-www-form-urlencoded; charset=UTF-8'）
//     noservices:false,                     //是否必选：否 （默认为false）
//     method:'post',                        //是否必选：否 （默认为post请求）
//     url:'/api'+this.$api.system.login,    //是否必选：必选
//     data:{                                //是否必选：必选
//          userName:this.username,
//          pwd:this.password 
//     },
//     success:function(res){                //是否必选：必选

//     }.bind(this),
//     error:function(obj){                  //是否必选：否 （有统一的错误处理提示）
//         //在这里，我们可以让开发者用自己的方式单独处理错误
//     }.bind(this)
// })    



import Vue from "vue";
import axios from "axios";

let qs = require('querystring');
let isProduct = process.env.NODE_ENV == 'development' ? false : true;//线上环境还是本地环境

let service = axios.create({
    baseURL: '',
    timeout: 20000, //超时设置
    transformRequest: [function (data) {
        return data;
    }],
    transformResponse: [function (data) {
        // 对 data 进行任意转换处理
        return data;
    }]
});

// 请求格式


Vue.prototype.$http = function (option) {
    //更改headers请求格式
    service.defaults.headers.post['Content-Type'] = option.headers ? option.headers : "application/x-www-form-urlencoded; charset=utf-8";
    if (option.responseType == 'file') {
        service.defaults.responseType = 'arraybuffer';
    } else {
        delete service.defaults.responseType;
    }

    if (option.url.indexOf('/login') == -1 && option.url.indexOf('/register') == -1) {
        service.defaults.headers.common['Authorization'] = JSON.parse(localStorage.getItem('token'));
    } else {
        delete service.defaults.headers.common['Authorization'];
    }

    let data = option.data;
    if (option.headers && option.headers.indexOf('application/json') > -1) {
        data = JSON.stringify(data);
    } else {
        data = qs.stringify(data);
    }


    let url = '';
    if ((option.method && option.method.toLowerCase() == 'get') || (option.method && option.method.toLowerCase() == 'delete')) {
        url = option.url + '?' + this.$getStrSort(option.data);
    } else {
        url = option.url;
    }

    //noservices表示url是否需要处理
    service({
        method: option.method ? option.method : 'post',
        url: option.noservices ? url : (isProduct ? (url.replace("/api", "")) : url),
        data: data,
        dataType: option.dataType ? option.dataType : "json",
    }).then(obj => {
        let datas = '';
        if (option.responseType == 'file') {
            //数据流
            option.success && option.success(obj.data);
            return;
        }
        switch (typeof obj.data == 'string' && Number(JSON.parse(obj.data).code)) {
            case 100:
                //请求成功
                if (obj.data) {
                    datas = JSON.parse(obj.data);
                }
                option.success && option.success(datas);
                break;
            case 101:
                //请求成功，返回警告
                if (obj.data) {
                    datas = JSON.parse(obj.data);
                }
                if (option.error) {
                    option.error(JSON.parse(obj.data));
                } else {
                    this.$message({
                        message: JSON.parse(obj.data).msg,
                        showClose: true,
                        center: true,
                        type: 'warning'
                    });
                }
                break;
            default:
                //请求不成功
                option.error ? option.error(JSON.parse(obj.data)) : this.$message({
                    message: JSON.parse(obj.data).msg,
                    showClose: true,
                    center: true,
                    type: 'error'
                });
                break;
        }

    }).catch(err => {
        if (err.response && err.response.status) {
            switch (Number(err.response.status)) {
                case 400:
                    this.$message({
                        type: 'warning',
                        showClose: true,
                        message: '请求无效！'
                    });
                    break;
                case 401:
                    //token超时
                    this.$message({
                        type: 'warning',
                        showClose: true,
                        message: '登录超时，已自动退出登录！'
                    });
                    this.$loginOut();
                    break;
                case 404:
                    this.$message({
                        type: 'error',
                        showClose: true,
                        message: '请求失败，请联系管理员'
                    });
                    break;
                case 500:
                    if (err.response.message && err.response.message.indexOf('Read timed out') > -1) {
                        this.$message({
                            type: 'error',
                            showClose: true,
                            message: '编码超时'
                        });
                    } else if ((err.response.data && JSON.parse(err.response.data).errorCode == '3300') || err.response.data && JSON.parse(err.response.data).message.indexOf('Read timed out') > -1) {
                        this.$message({
                            type: 'error',
                            showClose: true,
                            message: '网关超时'
                        });
                    } else {
                        this.$message({
                            type: 'error',
                            showClose: true,
                            message: '非常抱歉，服务器出错了'
                        });
                    }
                    break;
                case 504:
                    this.$message({
                        type: 'error',
                        showClose: true,
                        message: '非常抱歉，服务已断开'
                    });
                    break;
                default:
                    if (err.response && err.response.errorCode == '3300') {
                        this.$message({
                            type: 'error',
                            showClose: true,
                            message: '网关超时'
                        });
                    } else {
                        option.error ? option.error(err.message ? err.message : err) : console.error(err.message);
                    }
            }
        }
    })
};