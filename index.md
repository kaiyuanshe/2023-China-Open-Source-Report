---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "2023 中国开源年度报告"
  text: ""
  tagline: 开源社联合多家单位，纵横近十年对中国开源行业的综合性报告，每年发布一次
  actions:
    - theme: brand
      text: 立即阅读 2023 年度报告
      link: /preface
    - theme: alt
      text: 往年报告
      link: https://kaiyuanshe.feishu.cn/wiki/wikcnUDeVll6PNzw900yPV71Sxd

features:
  - icon:
      src: "/image/home/KaiYuanShe-logo.png"
      width: 40
      height: 40
    title: 开源社
    details: 开源社（英文名称为“KAIYUANSHE”）成立于 2014 年，是由志愿贡献于开源事业的个人志愿者，依 “贡献、共识、共治” 原则所组成的开源社区。开源社始终维持 “厂商中立、公益、非营利” 的理念，以 “立足中国、贡献全球，推动开源成为新时代的生活方式” 为愿景，以 “开源治理、国际接轨、社区发展、项目孵化” 为使命，旨在共创健康可持续发展的开源生态体系。
    link: https://kaiyuanshe.cn/
    linkText: 官网
  - icon:
      src: "/image/home/yunqi_partnets_logo.jpg"
      width: 138
      height: 40
    title: 云启资本
    details: 云启成立于 2014 年，国内最早专注于「科技创新+产业赋能」的专研型创投机构，投资范围覆盖前沿科技、先进制造、企业软件、产业供应链科技等赛道，多次蝉联清科、投中、36 氪等「中国最佳早期投资机构 TOP 10」。作为早期领投方，云启已投资了 170 多家优秀创业公司，其中 30 多家已成长为行业领头羊企业，包括 360 数科(NASDAQ:QFIN)、英科医疗(SZ:300677)、英科再生(SH:688087)、酷家乐、百布、元戎启行、MiniMax、擎朗智能、 XTransfer、环世物流、德风科技等优秀科技公司。同时，云启持续参与共创开源生态，领投了 PingCAP, Zilliz, Jina AI, RisingWave, TabbyML 等多家开源企业，并于 2021、2022、2023 年联合开源社出品中国开源年度报告商业化篇。
    link: https://www.yunqi.vc/
    linkText: 官网
---

<script setup>
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

// 召集人
const convener = [
  {
    avatar: 'https://github.com/wj23027.png',
    name: '王婕',
    title: '召集人',
    links: [
      { icon: 'github', link: 'https://github.com/wj23027' }
    ]
  },
]

// 大事记篇
const memorabiliaMembers = [
  {
    avatar: 'https://github.com/zhuangbiaowei.png',
    name: '庄表伟',
    title: '开源社执行长',
    links: [
      { icon: 'github', link: 'https://github.com/zhuangbiaowei' }
    ]
  },
]

// 数据篇
const dataPieceMembers = [
  {
    avatar: 'https://github.com/will-ww.png',
    name: '王伟',
    title: '开源社理事',
    links: [
      { icon: 'github', link: 'https://github.com/will-ww' }
    ]
  },
]

// 商业篇
// const commercializationMembers = []；

// 问卷设计
// const questionnaireDesignMembers = []；

// 整体报告汇总/编辑
// const copyreaders = []

// 设计/排版
// const artWorkers = []

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>感谢协作开源社区/单位</template>
  </VPTeamPageTitle>

  <VPTeamPageTitle>
    <template #title>特别感谢开源社——顾问委员会的点评和参与</template>
    <template #lead>
      （按姓氏字⺟顺序列名）
    </template>
  </VPTeamPageTitle>

  <VPTeamPageTitle>
    <template #title>参与志愿者</template>
  </VPTeamPageTitle>
  <VPTeamPageSection v-if="convener">
    <template #title>召集人</template>
    <template #members>
      <VPTeamMembers size="small" :members="convener" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection v-if="memorabiliaMembers">
    <template #title>开源大事记</template>
    <template #members>
      <VPTeamMembers size="small" :members="memorabiliaMembers" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection v-if="dataPieceMembers">
    <template #title>数据篇</template>
    <template #members>
      <VPTeamMembers size="small" :members="dataPieceMembers" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection v-if="commercializationMembers">
    <template #title>商业化篇</template>
    <template #members>
      <VPTeamMembers size="small" :members="commercializationMembers" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection v-if="questionnaireDesignMembers">
    <template #title>问卷设计</template>
    <template #members>
      <VPTeamMembers size="small" :members="questionnaireDesignMembers" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection v-if="copyreaders">
    <template #title>整体报告汇总/编辑</template>
    <template #members>
      <VPTeamMembers size="small" :members="copyreaders" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection v-if="artWorkers">
    <template #title>设计/排版</template>
    <template #members>
      <VPTeamMembers size="small" :members="artWorkers" />
    </template>
  </VPTeamPageSection>
</VPTeamPage>
