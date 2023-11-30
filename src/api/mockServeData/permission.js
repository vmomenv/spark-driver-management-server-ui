import Mock from 'mockjs'
export default {
  getMenu: config => {
    const { username, password } = JSON.parse(config.body)
    // 先判断用户是否存在
    // 判断账号和密码是否对应
    if (username === 'admin' && password === 'admin') {
      return {
        code: 20000,
        data: {
          menu: [
            {
                path:"/",
                name:"home",
                label:"首页",
                icon:"s-home",
                url:"Home/home"
            }
            ,{
                path:"/file",
                name:"file",
                label:"文件管理",
                icon:"files",
                url:"File/file"
            }
            ,{
                path:"/user",
                name:"user",
                label:"用户管理",
                icon:"s-custom",
                url:"User/user"
            },{
              label:"其他",
              icon:"location",
              children:[
                {
                  path:"/page1",
                  name:"page1",
                  label:"页面1",
                  icon:"setting",
                  url:"Other/PageOne"
                },
                {
                  path:"/page2",
                  name:"page2",
                  label:"页面2",
                  icon:"setting",
                  url:"Other/PageTwo"
                }
              ]
              }
            ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else if (username === 'test' && password === '123') {
      return {
        code: 20000,
        data: {
          menu: [
            {
              path: '/home',
              name: 'home',
              label: '首页',
              icon: 's-home',
              url: 'Home.vue'
            },
            {
                path:"/user",
                name:"user",
                label:"用户管理",
                icon:"s-custom",
                url:"User/user"
            }
          ],
          token: Mock.Random.guid(),
          message: '获取成功'
        }
      }
    } else {
      return {
        code: -999,
        data: {
          message: '密码错误'
        }
      }
    }

  }
}