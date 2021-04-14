<template>
  <div class="areaList">
    <div class="header">
      <van-nav-bar title="收货地址" left-text="" left-arrow>
        <template #right>
          <van-icon name="ellipsis" size="32" />
        </template>
      </van-nav-bar>
    </div>
    <div class="content">
      <van-address-edit
        :area-list="areaList"
        show-postal
        show-delete
        show-set-default
        show-search-result
        :search-result="searchResult"
        :area-columns-placeholder="['请选择', '请选择', '请选择']"
        @save="onSave"
        @delete="onDelete"
        @change-detail="onChangeDetail"
      />
    </div>
  </div>
</template>

<script>
import { Toast } from "vant";
import { newAddress } from "../../utils/userInfo";
import areaList from "../../utils/address";

export default {
  components: {},
  data() {
    return {
      areaList,
      searchResult: [],
    };
  },
  computed: {},
  watch: {},

  methods: {
    async onSave(res) {
      console.log(res);
      await newAddress({
        receiver: res.name,
        mobile: res.tel,
        regions: res.province + "-" + res.county,
        address: res.addressDetail,
        isDefault: res.isDefault,
      });
      this.$router.back();
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
  created() {},
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
};
</script>
<style scoped>
</style>