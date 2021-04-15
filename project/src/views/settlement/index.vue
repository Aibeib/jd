<template>
  <div class="settlement">
    <div class="footer">
      <van-nav-bar title="确认订单" left-text="" left-arrow @click-left="back">
        <template #right>
          <van-icon name="ellipsis" size="32" />
        </template>
      </van-nav-bar>
    </div>

    <div class="content">
      <!-- 收货地址 -->
      <div class="dz">
        <van-cell
          v-if="!list.length"
          title="添加收货地址"
          is-link
          to="deal"
          icon="location-o"
          :border="false"
        />
        <van-address-list
          v-model="chosenAddressId"
          :list="list"
          default-tag-text="默认"
          @edit="onEdit"
        />
      </div>

      <div class="dd">
        <van-cell title="吴松情趣用品店" icon="shop-o" :border="false" />
        <van-notice-bar
          color="#de8c17;"
          background="#fcf6ed"
          left-icon="thumb-circle-o"
        >
          恭喜你,挑选的商品好评度高达100%
        </van-notice-bar>
        <ul>
          <li v-for="v in shoplist" :key="v._id">
            <van-card
              :price="v.price"
              :desc="v.descriptions"
              :title="v.name"
              :thumb="v.coverImg"
            >
              <template #footer>
                <van-stepper v-model="value" />
              </template>
            </van-card>
          </li>
        </ul>

        <van-cell-group :border="false">
          <van-cell
            title="配送"
            value="快递运输"
            value-class=""
            label="中小件送货时间"
            is-link
          />
        </van-cell-group>

        <van-cell value="商家赠送" is-link :border="false">
          <!-- 使用 title 插槽来自定义标题 -->
          <template #title>
            <span class="custom-title" label="退换货可获运费赔付或免费取件"
              >退换无忧</span
            >
          </template>
        </van-cell>
        <van-field
          rows="1"
          autosize
          label="留言"
          type="textarea"
          placeholder="选填，给商家留言"
          input-align="right"
        />
      </div>
    </div>
    <div class="box">
      <van-cell-group :border="false">
        <van-cell title="商品总额" value="￥79.00" :border="false" />
        <van-cell title="运费" value="￥10.00" :border="false" />
        <van-cell title="促销优惠" is-link value="-￥10.00" />
        <van-cell title="总计" value="￥79.00" />
      </van-cell-group>
    </div>
    <div class="box2">
      <van-cell-group :border="false">
        <van-cell title="发票" value="不开发票" is-link :border="false" />
      </van-cell-group>
    </div>
    <div class="box3">
      <van-button type="primary" block round color="#3884ff"
        >在线支付</van-button
      >
      <van-divider>此订单不支持以下支付方式</van-divider>
      <van-cell
        title="货到付款"
        icon="send-gift"
        label="订单商品不支持以货到付款方式配送至您的地址"
      />
    </div>
    <div class="logo"></div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { AnAddress } from "../../utils/userInfo";
import { get } from "../../utils/request";
import { reqProductDetail } from "../../api/product";
export default {
  components: {},
  data() {
    return {
      value: 1,
      obj: null,
      chosenAddressId: "1",
      list: [
        // {
        //   id: "1",
        //   name: "张三",
        //   tel: "13000000000",
        //   address: "浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室",
        //   isDefault: true,
        // },
      ],
      shoplist: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    //获取单个订单信息
    async lists(id) {
      const result = await reqProductDetail(id);
      console.log(result);
      this.shoplist.push(result.data);
      console.log(this.shoplist);
    },
    back() {
      this.$router.go(-1);
    },
    onEdit(item, index) {
      this.$router.push("/deal");
    },
    //获取单个地址信息
    async getThisAddress() {
      var id = localStorage.getItem("itemid");
      this.chosenAddressId = id;
      let res = await AnAddress(id);
      res.data = [res.data];
      if (res.data) {
        res.data.forEach((item) => {
          this.list.push({
            id: item._id,
            name: item.receiver,
            address: item.regions + "-" + item.address,
            tel: item.mobile,
          });
        });
      }
    },
  },
  created() {
    const id = this.$route.query.id;
    console.log(id);

    console.log(typeof id);
    if (typeof id == "string") {
      this.lists(id);
    }
    if (typeof id == "object") {
      id.forEach((v) => {
        console.log(v);
        this.lists(v);
      });
    }
    // if (id.length > 0) {
    //   id.forEach((v) => {
    //     console.log(v);
    //     this.lists(v);
    //   });
    // } else {
    //   this.lists(id);
    // }

    this.getThisAddress();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
.settlement {
  background-color: #f3f3f3;
}
.custom-title {
  margin-right: 4px;
  vertical-align: middle;
}
.content {
  overflow: hidden;
}
.dz {
  background: #fff
    url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAAAKBAMAAACOO0tGAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAnUExURf///4u16Oxtbezz/J3B7NDh9vSmprjS8vGNjfjDw/vd3f7w8O57e0EOI68AAABSSURBVCjPY2CAAE4l7GACVJ4hUBArEIXJL8KuXw0mz4xdv2ABVJ77EHYDGmAGmGDXLwKT58CuX2cDTIEjdgOcYfJJ2A3Qgsmz4/CBwWgQUiMIAXzCOFELLk/nAAAAAElFTkSuQmCC) -20px
    bottom repeat-x;
  background-size: 64px 5px;
  position: relative;
  padding-bottom: 20px;
}
.van-address-list {
  padding: 0;
}
.van-cell {
  margin: 10px -10px 0;
}
.van-cell__title {
  font-size: 14px;
}
.dd {
  margin-top: 10px;
  margin-bottom: 5px;
  padding: 12px 10px;
  background: #fff;
  position: relative;
  border-radius: 10px;
}
.box {
  margin-top: 10px;
  margin-bottom: 5px;
  padding: 12px 10px;
  background: #fff;
  position: relative;
  border-radius: 10px;
}
.box2 {
  margin-top: 10px;
  margin-bottom: 5px;
  padding: 1px 10px;
  background: #fff;
  position: relative;
  border-radius: 10px;
}
.box3 {
  margin-top: 10px;
  margin-bottom: 5px;
  padding: 13px 10px;
  background: #fff;
  position: relative;
  border-radius: 10px;
  border-bottom: 1px solid #f3f3f3;
}
.van-notice-bar {
  margin: 10px -10px 0;
}
.van-card__price-currency,
.van-card__price-integer,
.van-card__price-decimal {
  color: #f2270c;
}
.search-icon {
  font-size: 16px;
  line-height: inherit;
}
.van-nav-bar__content {
  padding: 6px 0;
}

.van-cell__title {
  font-size: 18px;
  font-weight: 700;
}
.van-icon {
  font-size: 18px;
}
.logo {
  margin: 25px 0 75px;
  display: block;
  width: 100px;
  height: 80px;
  margin: 0 auto;
  background: url(data:image/png;base64,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)
    no-repeat center;
  background-size: 100%;
  padding: 20px 10px;
}
.van-address-list__bottom {
  display: none;
}
</style>