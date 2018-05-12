<template>
<div>
  <el-tabs type="border-card">
    <el-tab-pane label="基础参数">
      <el-row>
        <el-row>
          <el-col :span="24">
            <el-tag>工程参数</el-tag>
          </el-col>
        </el-row>
        <el-row>
          <el-row type="flex" justify="start">
            <el-col :span="10" :offset="1">
              <div>
                <el-input placeholder="请输入内容">
                  <template slot="prepend">工程名称</template>
                </el-input>
              </div>
            </el-col>
            <el-col :span="10">
              <div>
                <el-input placeholder="请输入内容">
                  <template slot="prepend">投产经营</template>
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row type="flex" justify="start">
            <el-col :span="10" :offset="1">
              <div>
                <el-input placeholder="请输入内容">
                  <template slot="prepend">工程类型</template>
                </el-input>
              </div>
            </el-col>
            <el-col :span="10">
              <div>
                <el-input placeholder="请输入内容">
                  <template slot="prepend">基准收益率</template>
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row type="flex" justify="start">
            <el-col :span="10" :offset="1">
              <div>
                <el-input placeholder="请输入内容">
                  <template slot="prepend">动态投资（万元）</template>
                </el-input>
              </div>
            </el-col>
            <el-col :span="10">
              <div>
                <el-input placeholder="请输入内容">
                  <template slot="prepend">建设期可抵押的增值税（万元）</template>
                </el-input>
              </div>
            </el-col>
          </el-row>
          <el-row type="flex" justify="start">
            <el-col :span="10" :offset="1">
              <div>
                <el-input placeholder="请输入内容">
                  <template slot="prepend">注资比例（占动态投资百分比）</template>
                </el-input>
              </div>
            </el-col>
            <el-col :span="10">
              <div>
                <el-input placeholder="请输入内容">
                  <template slot="prepend">建设期贷款利息（万元）</template>
                </el-input>
              </div>
            </el-col>
          </el-row>
        </el-row>
        <el-row>
          <el-row>
            <el-tag>项目参数</el-tag>
          </el-row>
          <el-row>
            <el-col :span="2" :offset="1">项目个数</el-col>
            <el-col :span="2">
              <el-input-number :min="1" :max="10">
              </el-input-number>
            </el-col>
          </el-row>
          <el-row>
            <el-col :offset="1" :span="20">
              <el-table :data="tableData" border style="width: 100%">
                <el-table-column prop="date" label="项目名称" width="180">
                </el-table-column>
                <el-table-column prop="name" label="开工日期" width="180">
                </el-table-column>
                <el-table-column prop="address" label="投产日期">
                </el-table-column>
              </el-table>
            </el-col>
          </el-row>
        </el-row>
        <el-row>
          <el-row>
            <el-tag>投资参数</el-tag>
          </el-row>
          <el-row>
            <el-col :offset="1" :span="20">
              <el-table :data="abc" border style="width: 100%">
                <el-table-column prop="date" label="建设年限">
                </el-table-column>
                <el-table-column prop="name" label="年投资比例（%）">
                </el-table-column>
                <el-table-column prop="address" label="年投资额度(万元)">
                </el-table-column>
                <el-table-column prop="address" label="年注资比例(%)">
                </el-table-column>
                <el-table-column prop="address" label="年注资额度(万元)">
                </el-table-column>
                <el-table-column prop="address" label="年融资比例(%)">
                </el-table-column>
                <el-table-column prop="address" label="年融资额度(万元)">
                </el-table-column>
              </el-table>
            </el-col>
          </el-row>
        </el-row>
        <el-row>
          <el-row>
            <el-tag>报表参数</el-tag>
          </el-row>
          <el-row>
            <el-col :offset="1" :span="20">
              <el-table :data="abc" border style="width: 100%">
                <el-table-column prop="date" label="可供利润">
                </el-table-column>
                <el-table-column prop="name" label="资本成本率" width="180">
                </el-table-column>
                <el-table-column prop="address" label="编制单位">
                </el-table-column>
                <el-table-column prop="address" label="编制时间">
                </el-table-column>
              </el-table>
            </el-col>
          </el-row>
        </el-row>
        <el-row type="flex" justify="center">
          <el-col :span="2">
            <el-button type="primary">下一步<i class="el-icon-arrow-right el-icon--right"></i></el-button>
          </el-col>
        </el-row>
      </el-row>
    </el-tab-pane>

    <el-tab-pane label="资金筹备">
      <el-row>
        <el-row>
          <el-tag>自有资金</el-tag>
        </el-row>
        <el-row>
          <el-col :offset="1" :span="20">
            <el-table :data="abc" border style="width: 100%">
              <el-table-column prop="date" label="注资来源">
              </el-table-column>
              <el-table-column prop="name" label="注资比(%)">
              </el-table-column>
              <el-table-column prop="address" label="融资比(%)">
              </el-table-column>
              <el-table-column prop="address" label="币种">
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
        <el-row>
          <el-tag>融资资金</el-tag>
        </el-row>
        <el-row>
          <el-col :offset="1" :span="20">
            <el-table :data="abc" border style="width: 100%">
              <el-table-column prop="date" label="注资来源">
              </el-table-column>
              <el-table-column prop="name" label="融资比(%)">
              </el-table-column>
              <el-table-column prop="address" label="融资金额(万元)">
              </el-table-column>
              <el-table-column prop="address" label="币种">
              </el-table-column>
              <el-table-column prop="address" label="偿还期（年）">
              </el-table-column>
              <el-table-column prop="address" label="宽限期">
              </el-table-column>
              <el-table-column prop="address" label="利率">
              </el-table-column>
              <el-table-column prop="address" label="计息次数">
              </el-table-column>
            </el-table>
          </el-col>
        </el-row>
        <el-row type="flex" justify="start" :gutter="100">
          <el-col :span="2" :offset="8">
            <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
          </el-col>
          <el-col :span="2">
            <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
          </el-col>
        </el-row>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="财务费用">

      <el-row>
        <el-tag>财务费用</el-tag>
      </el-row>
      <el-row>
        <el-table :data="tableData3" fixed style="width: 100%">
          <el-table-column prop="date" label="银行名称">
          </el-table-column>
          <el-table-column prop="date" label="名称">
          </el-table-column>
          <el-table-column label="2014">
            <el-table-column prop="name" label="第1年">
            </el-table-column>
          </el-table-column>
          <el-table-column label="2015">
            <el-table-column prop="name" label="第2年">
            </el-table-column>
          </el-table-column>
          <el-table-column label="2015">
            <el-table-column prop="name" label="第2年">
            </el-table-column>
          </el-table-column>
          <el-table-column label="2015">
            <el-table-column prop="name" label="第2年">
            </el-table-column>
          </el-table-column>
        </el-table>
      </el-row>
      <el-row type="flex" justify="start" :gutter="100">
        <el-col :span="2" :offset="8">
          <el-button type="primary" icon="el-icon-arrow-left">上一页</el-button>
        </el-col>
        <el-col :span="2">
          <el-button type="primary">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
        </el-col>
      </el-row>
    </el-tab-pane>
    <el-tab-pane label="折旧摊销">
      <el-row>
        <el-row type="flex" justify="start">
          <el-col :span="10" :offset="1">
            <div>
              <el-input placeholder="请输入内容">
                <template slot="prepend">固定资产形成的比率(%)</template>
              </el-input>
            </div>
          </el-col>
          <el-col :span="10">
            <div>
              <el-input placeholder="请输入内容">
                <template slot="prepend">固定资产折旧年限（年）：</template>
              </el-input>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" justify="start">
          <el-col :span="10" :offset="1">
            <div>
              <el-input placeholder="请输入内容">
                <template slot="prepend">固定资产残值率(%)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp</template>
              </el-input>
            </div>
          </el-col>
          <el-col :span="10">
            <div>
              <el-input placeholder="请输入内容">
                <template slot="prepend">无形资产摊销年限（年）：</template>
              </el-input>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" justify="start">
          <el-col :span="10" :offset="1">
            <div>
              <el-input placeholder="请输入内容">
                <template slot="prepend">无形资产形成的比例（%）：</template>
              </el-input>
            </div>
          </el-col>
          <el-col :span="10">
            <div>
              <el-input placeholder="请输入内容">
                <template slot="prepend">其他资产摊销年限（年）：</template>
              </el-input>
            </div>
          </el-col>
        </el-row>
        <el-row type="flex" justify="start">
          <el-col :span="10" :offset="1">
            <div>
              <el-input placeholder="请输入内容">
                <template slot="prepend">其他资产形成的比率（%）：</template>
              </el-input>
            </div>
          </el-col>
        </el-row>
      </el-row>
    </el-tab-pane>
  </el-tabs>
</div>
</template>
<script>
export default {
  data() {
    return {
      msg: "我是About组件"
    }
  }

}
</script>
<style >

</style>
