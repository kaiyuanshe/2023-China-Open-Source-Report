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
  - icon:
      src: "/image/home/x_lab2017_logo.jpg"
      width: 40
      height: 40
    title: X-lab 开放实验室
    details: X-lab 开放实验室定位为一个开源研究与创新的开放群体，是一群由来自国内外著名高校、创业公司、部分互联网与IT企业的专家学者与工程师所构成，聚焦于开源软件产业开放式创新的共同体。专业背景包括计算机科学、软件工程、数据科学、工商管理学、社会学、经济学等跨学科领域，长期思考并实践开源战略、开源测量学、开源数字生态系统等主题。目前已在包括开源治理标准制定、开源社区行为度量与分析、开源社区流程自动化、开源全域数据治理与洞察等方面做出了较有影响力的工作。
    link: https://github.com/X-lab2017
    linkText: GitHub 主页
---

<script setup>
import { withBase } from 'vitepress'
import {
  VPTeamPage,
  VPTeamPageTitle,
  VPTeamMembers,
  VPTeamPageSection
} from 'vitepress/theme'

// 召集人
const convener = [
    {
    avatar: withBase('/image/home/avatar/王伟.jpg'),
    name: '王伟',
  },

]

// 大事记篇
const memorabiliaMembers = [
  {
    avatar: withBase('/image/home/avatar/袁滚滚.jpg'),
    name: '袁滚滚',
    title: '开源技术大事记、开源商业大事记',
  },
  {
    avatar: '',
    name: '王蓉',
    title: '开源技术大事记',
  },
  {
    avatar: withBase('/image/home/avatar/庄表伟.jpg'),
    name: '庄表伟',
    title: '开源生态大事记、开源榜单与报告汇总',
  },
  {
    avatar: withBase('/image/home/avatar/刘天栋.jpg'),
    name: '刘天栋',
    title: '开源治理大事记、开源安全大事记、',
  },
  {
    avatar: '',
    name: '梁尧',
    title: '开源安全大事记',
  },
  {
    avatar: '',
    name: 'INP',
    title: '',
  },
  {
    avatar: withBase('/image/home/avatar/李明康.jpg'),
    name: '李明康',
    title: '开源教育大事',
  },
]

// 数据篇
const dataPieceMembers = [
  {
    avatar: withBase('/image/home/avatar/王婕.jpg'),
    name: '王婕',
    title: '宏观洞察',
  },
  {
    avatar: withBase('/image/home/avatar/黄温瑞.jpg'),
    name: '黄温瑞',
    title: '宏观洞察、',
  },
  {
    avatar: withBase('/image/home/avatar/唐烨男.png'),
    name: '唐烨男',
    title: 'OpenRank 排行榜、',
  },
  {
    avatar: withBase('/image/home/avatar/赵生宇.jpg'),
    name: '赵生宇',
    title: 'OpenRank 排行榜、案例分析',
  },
  {
    avatar: withBase('/image/home/avatar/伍泰炜.jpg'),
    name: '伍泰炜',
    title: '企业洞察、',
  },
  {
    avatar: withBase('/image/home/avatar/宁志成.jpg'),
    name: '宁志成',
    title: '企业洞察、',
  },
  {
    avatar: withBase('/image/home/avatar/夏小雅.jpg'),
    name: '夏小雅',
    title: '基金会洞察、',
  },
  {
    avatar: withBase('/image/home/avatar/张欣然.jpg'),
    name: '张欣然',
    title: '基金会洞察、',
  },
  {
    avatar: withBase('/image/home/avatar/韩凡宇.jpg'),
    name: '韩凡宇',
    title: '技术领域洞察、开源项目洞察',
  },
  {
    avatar: withBase('/image/home/avatar/娄泽华.jpg'),
    name: '娄泽华',
    title: '技术领域洞察、开源项目洞察',
  },
  {
    avatar: withBase('/image/home/avatar/朱志炜.jpg'),
    name: '朱志炜',
    title: '开源项目洞察',
  },
  {
    avatar: withBase('/image/home/avatar/毕枫林.jpg'),
    name: '毕枫林',
    title: '开发者洞察',
  },
  {
    avatar: withBase('/image/home/avatar/张翔宇.jpg'),
    name: '张翔宇',
    title: '开发者洞察',
  },
  {
    avatar: withBase('/image/home/avatar/李鸿斌.jpg'),
    name: '李鸿斌',
    title: '开发者洞察',
  },
]

// 商业篇
const commercializationMembers = [
  {
    avatar: withBase('/image/home/avatar/云启资本.jpg'),
    name: '云启资本',
  },
];

// 问卷设计
const questionnaireDesignMembers = [
  {
    avatar: withBase('/image/home/avatar/王婕.jpg'),
    name: '王婕',
  },
];

// 整体报告汇总/编辑
const copyreaders = [
  {
    avatar: withBase('/image/home/avatar/王婕.jpg'),
    name: '王婕',
  },
  {
    avatar: withBase('/image/home/avatar/刘天栋.jpg'),
    name: '刘天栋',
  },
  {
    avatar: withBase('/image/home/avatar/丁文昊.png'),
    name: '丁文昊',
  },
  
];

// 设计/排版
// const artWorkers = []

</script>

<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>协作开源社区/单位</template>
  </VPTeamPageTitle>

  <VPTeamPageTitle>
    <template #title>合作媒体</template>
  </VPTeamPageTitle>

  <VPTeamPageTitle>
    <template #title>编写团队</template>
  </VPTeamPageTitle>
  <VPTeamPageSection v-if="convener">
    <template #title>召集人</template>
    <template #members>
      <VPTeamMembers size="small" :members="convener" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection v-if="memorabiliaMembers">
    <h5>开源技术大事记</h5>
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
    <template #title>问卷篇</template>
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

  <VPTeamPageTitle>
    <template #title>点评专家</template>
    <template #lead>
      （按姓氏字⺟顺序列名）
    </template>
  </VPTeamPageTitle>
</VPTeamPage>
