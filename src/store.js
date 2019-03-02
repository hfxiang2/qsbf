import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0,
    name:'白发',
    say:'大家好我是',
    username:'青衫白发',
    sex:'女',
    birthday:'1993-09-05',
    password:123456,
    phone:18856781234,
    email:'850442777@qq.com',
    integral:666,
    integral2:1666,
    integral3:2666,
    integral4:3666,
    integral5:4666,
    integral6:5666,
    levelName:'钻石会员',
    headPhoto:'https://img.bosszhipin.com/beijin/mcs/useravatar/20181123/5346d99ca60b27c9d34d4d9cb62a54d53b598e7db16c619f5bcca59cd21400c5_s.jpg',
    searchhistory:[],
    books:{
      goodsId:'1315351313',
      goodsName:'好看的衣服',
      description:'这是一件很好看的衣服',
      num:1,
      yunfei:'免运费',
      tag:"热卖",
      price:"4.00",
      desc:"时尚女衣，范冰冰同款",
      title:"时尚女衣",
      originprice:"10.00",
      images: [
        'https://img.yzcdn.cn/2.jpg',
        'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=9b698df937f33a87816d061af65d1018/8d5494eef01f3a2963a5db079425bc315d607c8d.jpg',
        'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=ca66f12cffd3572c79e29adcba116352/3b87e950352ac65cd08fc0b6f6f2b21192138a69.jpg'
      ],
      picture: 'https://img.yzcdn.cn/2.jpg',
      // imageURL:'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=3669184205,246610592&fm=26&gp=0.jpg',
      imageURL: 'https://img.bosszhipin.com/beijin/mcs/useravatar/20181123/5346d99ca60b27c9d34d4d9cb62a54d53b598e7db16c619f5bcca59cd21400c5_s.jpg'
    },
    sku: {
      // 所有sku规格类目与其值的从属关系，比如商品有颜色和尺码两大类规格，颜色下面又有红色和蓝色两个规格值。
      // 可以理解为一个商品可以有多个规格类目，一个规格类目下可以有多个规格值。
      tree: [
        {
          k: '颜色', // skuKeyName：规格类目名称
          v: [
            {
              id: '30349', // skuValueId：规格值 id
              name: '红色', // skuValueName：规格值名称
              imgUrl: 'https://img.yzcdn.cn/2.jpg' // 规格类目图片，只有第一个规格类目可以定义图片
            },
            {
              id: '1215',
              name: '蓝色',
              imgUrl: 'https://ss3.baidu.com/-fo3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=9b698df937f33a87816d061af65d1018/8d5494eef01f3a2963a5db079425bc315d607c8d.jpg'
            },
            {
              id: '2259',
              name: '黑色',
              imgUrl: 'https://ss0.baidu.com/94o3dSag_xI4khGko9WTAnF6hhy/image/h%3D300/sign=ca66f12cffd3572c79e29adcba116352/3b87e950352ac65cd08fc0b6f6f2b21192138a69.jpg'
            }
          ],
          k_s: 's1' // skuKeyStr：sku 组合列表（下方 list）中当前类目对应的 key 值，value 值会是从属于当前类目的一个规格值 id
        }
      ],
      // 所有 sku 的组合列表，比如红色、M 码为一个 sku 组合，红色、S 码为另一个组合
      list: [
        {
          id: 2259, // skuId，下单时后端需要
          price: 100, // 价格（单位分）
          s1: '1215', // 规格类目 k_s 为 s1 的对应规格值 id
          s2: '1232', // 规格类目 k_s 为 s2 的对应规格值 id
          s3: '0', // 最多包含3个规格值，为0表示不存在该规格
          stock_num: 110 // 当前 sku 组合对应的库存
        }
      ],
      price: '4.00', // 默认价格（单位元）
      stock_num: 4, // 商品总库存
      collection_id: 2261, // 无规格商品 skuId 取 collection_id，否则取所选 sku 组合对应的 id
      none_sku: false, // 是否无规格商品
      messages: [
        {
          // 商品留言
          datetime: '0', // 留言类型为 time 时，是否含日期。'1' 表示包含
          multiple: '0', // 留言类型为 text 时，是否多行文本。'1' 表示多行
          name: '留言', // 留言名称
          type: 'text', // 留言类型，可选: id_no（身份证）, text, tel, date, time, email
          required: '0' // 是否必填 '1' 表示必填
        }
      ],
      hide_stock: false // 是否隐藏剩余库存
    },
    initialSku:{
      // 键：skuKeyStr（sku 组合列表中当前类目对应的 key 值）
      // 值：skuValueId（规格值 id）
      s1: '30349',
      s2: '1193'
    },
    skuData: {
      // 商品 id
      goodsId:'1315351313',
      // 留言信息
      messages: {
        message_0: '12',
        message_1: ''
      },
      // 另一种格式的留言，key 不同
      cartMessages: {
        '留言1': 'xxxx'
      },
      // 选择的商品数量
      selectedNum: 1,
      // 选择的 sku 组合
      selectedSkuComb: {
        id: 2257,
        price: 100,
        s1: '30349',
        s2: '1193',
        s3: '0',
        stock_num: 111
      }
    }
  },
  mutations: {
    ADD:(state)=>{
      state.count++;
      state.integral++;
    },
    DEL:(state)=>{
      state.count--;
      state.integral--;
      if(state.count<0)
        state.count=0;
    },
    RESET:(state)=>{
      state.count=0;
    },
    SUBMIT:(state)=>{
      return state.say='hello,everyone,I am';
    },
    SUBMITS:(state)=>{
      state.username='qinshnbaifa';
      return state.say='侬好不拉？,俺是';
    }
  },
  getters:{
    NAME:(state)=>{
      return state.name='青衫'+state.name;
    }
  },
  actions: {
    SUBMIT:({commit})=>{
      setTimeout(()=>{
        commit('SUBMIT');
      },1000)
    },
    SUBMITS:({commit})=>{
      setTimeout(()=>{
        commit('SUBMITS');
      },1000)
    }
  }
})
