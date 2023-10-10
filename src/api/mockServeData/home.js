 //mock数据模拟
 import Mock from 'mockjs'
 let List = []
 export default {
     getStatisticalData: () => {
         for (let i = 0; i < 7; i++) {
             List.push(
                 Mock.mock({
                     a: Mock.Random.float(100, 8000, 0, 0),
                     b: Mock.Random.float(100, 8000, 0, 0),
                     c: Mock.Random.float(100, 8000, 0, 0),
                     d: Mock.Random.float(100, 8000, 0, 0),
                     e: Mock.Random.float(100, 8000, 0, 0),
                     f: Mock.Random.float(100, 8000, 0, 0)
                 })
             )
         }
         return {
             code: 20000,
             data: {
                 typeData: [{
                         name: '显卡驱动',
                         value: 22
                     },
                     {
                         name: '网卡驱动',
                         value: 33
                     },
                     {
                         name: '声卡驱动',
                         value: 4
                     },
                     {
                         name: '打印机驱动',
                         value: 53
                     },
                     {
                         name: '摄像头驱动',
                         value: 6
                     },
                     {
                         name: '内核',
                         value: 7
                     }
                 ],
                 userData: [{
                     date: '周一',
                     new: 5,
                     active: 20

                 }, {
                     date: '周二',
                     new: 10,
                     active: 40
                 }, {
                     date: '周三',
                     new: 15,
                     active: 30
                 }, {
                     date: '周四',
                     new: 20,
                     active: 10
                 }, {
                     date: '周五',
                     new: 25,
                     active: 20
                 }, {
                     date: '周六',
                     new: 30,
                     active: 24
                 }, {
                     date: '周日',
                     new: 35,
                     active: 21
                 }],
                 orderData: {
                     date: ['20231001', '20231002', '20231003', '20231004', '20231005', '20231006', '20231007'],
                     data: List
                 },

                 tableData: [{
                     uploadDate: '2023-05-02',
                     packageName: 'chaoxin_1.8.3_amd64.deb',
                     packageStatus: '已驳回',
                 }, {
                     uploadDate: '2023-05-03',
                     packageName: 'com.huaweicloud.welink.spark',
                     packageStatus: '已上架',
                 }, {
                     uploadDate: '2023-05-04',
                     packageName: 'com.lhmeeting.client',
                     packageStatus: '未上架',
                 }]
             }
         }
     }
 }