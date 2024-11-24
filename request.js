const http = {
  // baseURl
  baseURL: '',
  // 请求头
  header: {},
  // 请求拦截器
  beforeHttp(config) {
    return config
  },
  // 响应拦截器
  afterHttp(data) {
    return data
  },
  request(options) {
    const {
      url,
      data,
      method = 'get',
      header
    } = options
    return new Promise((r, j) => {
      const config = this.beforeHttp({
        url,
        data,
        method,
        header: {
          ...this.header,
          ...header
        }
      });
      config.url = this.baseURL + config.url
      wx.request({
        ...config,
        success: (res) => {
          res.config = {
            ...config,
            url: options.url
          }
          const data = this.afterHttp(res)
          r(data)
        },
        fail: (error) => {
          j(error)
        }
      })
    })
  }
}

export default http