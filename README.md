# wx请求封装

#### 说明

1.  beforeHttp:请求拦截器，需要接收参数,并返回回去。参数说明：url(请求路径),method(请求方式，默认为get)，header（请求头参数）,data（请求参数）
2.  afterHttp:相应拦截器，需要接收参数，并返回回去。参数说明:是请求回来的一个Promise以及config参数
3.  baseURL:请求根路径
4.  请求方式：需要传递一个对象，参数跟请求拦截器拿到的一样
5.  调用请求方法request


#### 使用说明
在全局引用，并挂载在全局
