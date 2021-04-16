<template>
  <div class="deal">
    <div class="header">
      <van-nav-bar title="收货地址" left-text="" left-arrow @click-left="back">
        <template #right>
          <van-icon name="ellipsis" size="32" />
        </template>
      </van-nav-bar>
    </div>
    <div class="content">
      <ul>
        <li>
          <van-address-list
            v-model="chosenAddressId"
            :list="list"
            :disabled-list="disabledList"
            disabled-text="以下地址超出配送范围"
            default-tag-text="默认"
            @add="onAdd"
            @edit="onEdit"
            @select="dz"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { addList, delAddress, loadUserInfo } from "../../utils/userInfo";
import { Dialog } from "vant";
export default {
  components: {},
  data() {
    return {
      chosenAddressId: "1",
      id: "",
      list: [],
      disabledList: [
        {
          id: "3",
          name: "吴松二郎",
          tel: "13854385438",
          address: "小日本大儿子市我孙子县",
        },
      ],
      isDefault: false,
      addId: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    //获取收货地址列表
    async getaddressList() {
      const res = await addList();
      console.log(res);
      // this.list = res.data.addresses;
      res.data.addresses.forEach((item) => {
        this.list.push({
          id: item._id,
          name: item.receiver,
          address: item.regions + "-" + item.address,
          tel: item.mobile,
          isDefault: item.isDefault,
        });
        this.addId.push(item._id);
      });
      if (this.list[0].isDefault == true) {
        for (var i = 1; i <= this.list.length; i++) {
          this.list[i].isDefault = false;
        }
      }
      this.list.forEach((item) => {});
      // console.log(this.list);
    },
    //跳转新增地址
    onAdd() {
      this.$router.push("/areaList");
    },
    //编辑收货地址
    onEdit(item, index) {
      console.log(item.id);

      var id = (this.id = item.id);
      // Toast("编辑地址:" + index);
      Dialog.confirm({
        title: "删除",
        message: "是否要删除这个地址",
      })
        .then(async () => {
          console.log(this.id);
          // on confirm
          await delAddress(this.id);
          this.list.forEach((v, i) => {
            if (v.id == id) {
              this.list.splice(i, 1);
            }
          });
        })
        .catch(() => {
          // on cancel
        });
    },
    //设置默认地址
    dz(item, index) {
      console.log(item.id);
      this.$router.push("/settlement");
      localStorage.setItem("itemid", item.id);
    },
    back() {
      this.$router.go(-1);
    },
  },
  created() {
    const id = this.$route.query.id;
    console.log(id);
    console.log(this.addId);
    this.addId.forEach(function (v, i) {
      console.log(v);
      console.log(v.id);
      if (v == id) {
        this.chosenAddressId = i + 1;
        console.log(this.chosenAddressId);
      }
    });
    this.getaddressList();
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
</style>