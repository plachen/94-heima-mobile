// 这个文件专门处理token的读取写入和删除
// creat by plachen 2020/3/19
const USER_TOKEN = 'heima-toutiao-mobile-94' // 专门用来存储用户信息
// 导出方法 export

// setUser 设置用户的token信息
export function setUser (user) {
//   user应该是一个对象
  window.localStorage.setItem(USER_TOKEN, JSON.stringify(user)) // 对象需要转换成字符串
}
// 获取用户的token信息
export function getUser () {
  // 取出来 将这个字符串在转换成对象  然后返回出去
  return JSON.parse(window.localStorage.getItem(USER_TOKEN) || '{}') // 短路表达式 意思就是如果前面是false 后面就会执行 如果前面是true后面就不执行
}
// 删除用户的token信息
export function delUser () {
  localStorage.removeItem(USER_TOKEN) // 删除用户信息
}
