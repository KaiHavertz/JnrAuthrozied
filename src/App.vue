<template>
  <div id="app">
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <el-row>
          <el-button>默认按钮</el-button>
          <el-button type="primary">主要按钮</el-button>
          <el-button type="success">成功按钮</el-button>
          <el-button type="info">信息按钮</el-button>
          <el-button type="warning">警告按钮</el-button>
          <el-button type="danger">危险按钮</el-button>
          <el-button type="danger"
                     style="background-color:#67C23A;">success</el-button>
        </el-row>
        <el-row>
          <div class="
                     block">
            <span class="demonstration">默认</span>
            <el-date-picker v-model="time"
                            type="datetime"
                            placeholder="选择日期时间">
            </el-date-picker>
          </div>
        </el-row>
        <el-row>
          <el-col>{{value}}</el-col>
        </el-row>
        <el-row>
          <el-col>
            <i class="el-icon-edit"></i>
          </el-col>
          <el-col>
            <i class="el-icon-share"></i>
          </el-col>
          <el-col>
            <i class="el-icon-delete"></i>
          </el-col>
          <el-col>
            <el-button type="primary"
                       icon="el-icon-search">搜索</el-button>
          </el-col>
          <el-col>
            <div style="border-radius:2px;">边框</div>
          </el-col>
        </el-row>
        <el-row>
          <div>
            <el-link href="https://element.eleme.io"
                     target="_blank">默认链接</el-link>
            <el-link type="primary">主要链接</el-link>
            <el-link type="success">成功链接</el-link>
            <el-link type="warning">警告链接</el-link>
            <el-link type="danger">危险链接</el-link>
            <el-link type="info">信息链接</el-link>
            <el-link :underline="false">无下划线</el-link>
            <el-link class="link-margin-right">有下划线</el-link>
          </div>
        </el-row>
        <el-row>
          <el-radio v-model="radio"
                    label="1"
                    border>备选项</el-radio>
          <el-radio v-model="radio"
                    label="2">备选项</el-radio>
        </el-row>
        <el-row>
          <div>
            <el-radio-group v-model="radio1">
              <el-radio-button label="上海"></el-radio-button>
              <el-radio-button label="北京"></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
          <div style="margin-top: 20px">
            <el-radio-group v-model="radio2"
                            size="medium">
              <el-radio-button label="上海"
                               border></el-radio-button>
              <el-radio-button label="北京"></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
          <div style="margin-top: 20px">
            <el-radio-group v-model="radio3"
                            size="small">
              <el-radio-button label="上海"
                               border></el-radio-button>
              <el-radio-button label="北京"
                               disabled></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
          <div style="margin-top: 20px">
            <el-radio-group v-model="radio4"
                            disabled
                            size="mini">
              <el-radio-button label="上海"
                               border></el-radio-button>
              <el-radio-button label="北京"
                               border></el-radio-button>
              <el-radio-button label="广州"></el-radio-button>
              <el-radio-button label="深圳"></el-radio-button>
            </el-radio-group>
          </div>
        </el-row>
        <el-row>
          <el-form ref="form"
                   :model="form"
                   label-width="80px">
            <el-form-item label="活动名称">
              <el-input v-model="form.name"></el-input>
            </el-form-item>
            <el-form-item label="活动区域">
              <el-select v-model="form.region"
                         placeholder="请选择活动区域">
                <el-option label="区域一"
                           value="shanghai"></el-option>
                <el-option label="区域二"
                           value="beijing"></el-option>
              </el-select>
            </el-form-item>
            <el-form-item label="活动时间">
              <el-col :span="11">
                <el-date-picker type="date"
                                placeholder="选择日期"
                                v-model="form.date1"
                                style="width: 100%;"></el-date-picker>
              </el-col>
              <el-col class="line"
                      :span="2">-</el-col>
              <el-col :span="11">
                <el-time-picker placeholder="选择时间"
                                v-model="form.date2"
                                style="width: 100%;"></el-time-picker>
              </el-col>
            </el-form-item>
            <el-form-item label="即时配送">
              <el-switch v-model="form.delivery"></el-switch>
            </el-form-item>
            <el-form-item label="活动性质">
              <el-checkbox-group v-model="form.type">
                <el-checkbox label="美食/餐厅线上活动"
                             name="type"></el-checkbox>
                <el-checkbox label="地推活动"
                             name="type"></el-checkbox>
                <el-checkbox label="线下主题活动"
                             name="type"></el-checkbox>
                <el-checkbox label="单纯品牌曝光"
                             name="type"></el-checkbox>
              </el-checkbox-group>
            </el-form-item>
            <el-form-item label="特殊资源">
              <el-radio-group v-model="form.resource">
                <el-radio label="线上品牌商赞助"></el-radio>
                <el-radio label="线下场地免费"></el-radio>
              </el-radio-group>
            </el-form-item>
            <el-form-item label="活动形式">
              <el-input type="textarea"
                        v-model="form.desc"></el-input>
            </el-form-item>
            <el-form-item>
              <el-button type="primary"
                         @click="onSubmit">立即创建</el-button>
              <el-button>取消</el-button>
            </el-form-item>
          </el-form>
        </el-row>
      </el-main>
    </el-container>

  </div>
</template>

<script>
var layer = null
export default {
  name: 'app',
  components: {
  },
  mounted () {
    const msg = layui.use(['laydate', 'layer'], function () {
      var laydate = layui.laydate
      var layer = layui.layer
      layer.msg('hello jnrAuthrozied project')

    })
  },
  methods: {
    initLayui () {

    },
    onSubmit () {
      console.log('submit!');
    }
  },
  data () {
    return {
      time: new Date(),
      layer: null,
      value: '傻逼1111',
      radio: '1',
      radio1: '上海',
      radio2: '上海',
      radio3: '上海',
      radio4: '上海',
      form: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
    }
  }
}
</script>
<style scoped>
.link-margin-right {
  margin-right: 10px !important;
  font: 100;
}
</style>
