---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "2023 China Open Source Annual Report"
  text: ""
  tagline: Kaiyuanshe collaborates with open-source communities and organizations to publish an annual report on global and China's open-source trends. The report provides valuable insights into the latest developments in the dynamic open-source field.

  actions:
    - theme: brand
      text: Read 2023 Annual Report Immediately
      link: /preface
    - theme: alt
      text: Previous Reports
      link: https://kaiyuanshe.feishu.cn/wiki/wikcnUDeVll6PNzw900yPV71Sxd

features:
  - icon:
      src: "/image/home/KaiYuanShe-logo.png"
      width: 40
      height: 40
    title: KAIYUANSHE
    details: KAIYUANSHE is a non-profit, vendor-neutral, open-source community formed in 2014. It comprises individual volunteers who contribute towards the cause of open source. The community envisions being "rooted in China, contributing globally, and promoting open-source as a way of life in the new era." Its mission is to achieve "open-source governance, global connection, community development, and project incubation." Its community governance principles are to practice "Contribution, Consensus, and Collegiality." The community's goal is to create a healthy and sustainable open-source ecosystem.
    link: https://kaiyuanshe.cn/
    linkText: website
  - icon:
      src: "/image/home/yunqi_partnets_logo.jpg"
      width: 40
      height: 40
    title: Yunqi Partners
    details: 
    link: https://www.yunqi.vc/
    linkText: website
  - icon:
      src: "/image/home/x_lab2017_logo.jpg"
      width: 40
      height: 40
    title: X-lab
    details: X-lab Open Lab is a community dedicated to open-source research and innovation. It comprises experts, scholars, and engineers from domestic and international universities, startups, and various Internet and IT companies. They focus on open innovation in the open-source software industry and come from diverse professional backgrounds, including computer science, software engineering, data science, business administration, sociology, economics, and other interdisciplinary fields. They have been practicing open source strategy, open source measurement, open source digital ecosystem, and other related topics for a long time. The group has significantly contributed to open-source governance standard development, open-source community behavior metrics and analysis, open-source community process automation, and open-source domain-wide data governance and insights.
    link: https://github.com/X-lab2017
    linkText: GitHub
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
    name: 'Will Wang',
  },

]

// 大事记篇
const memorabiliaMembers = [
  {
    avatar: withBase('/image/home/avatar/袁滚滚.jpg'),
    name: 'Roll-Roll Yuan',
    title: `OSS Technology Chronicle,OSS Commercialization Chronicle`,
  },
  {
    avatar: withBase('/image/home/avatar/王蓉.png'),
    name: 'Amber Wang ',
    title: 'OSS Technology Chronicle',
  },
  {
    avatar: withBase('/image/home/avatar/庄表伟.jpg'),
    name: 'Biaowei Zhuang',
    title: 'OSS Ecology Chronicle,OSS Ranklists & Reports',
  },
  {
    avatar: withBase('/image/home/avatar/刘天栋.jpg'),
    name: 'Ted Liu',
    title: 'OSS Governance Chronicle、OSS Security Chronicle',
  },
  {
    avatar: withBase('/image/home/avatar/梁尧.jpg'),
    name: 'Leon Liang ',
    title: 'OSS Governance Chronicle',
  },
  {
    avatar: withBase('/image/home/avatar/INP.png'),
    name: 'INP',
    title: 'OSS Commercialization Chronicle',
  },
  {
    avatar: withBase('/image/home/avatar/李明康.jpg'),
    name: 'Bright Li',
    title: 'OSS Education Chronicle',
  },
]

// 数据篇
const dataPieceMembers = [
  {
    avatar: withBase('/image/home/avatar/王婕.jpg'),
    name: 'Jie Wang',
    title: 'Holistic Insights',
  },
  {
    avatar: withBase('/image/home/avatar/黄温瑞.jpg'),
    name: 'Wenrui Huang',
    title: 'Holistic Insights',
  },
  {
    avatar: withBase('/image/home/avatar/唐烨男.png'),
    name: 'Yenan Tang',
    title: 'OpenRank Ranklists',
  },
  {
    avatar: withBase('/image/home/avatar/赵生宇.jpg'),
    name: 'Frank Zhao',
    title: 'OpenRank Ranklist、Case Studies',
  },
  {
    avatar: withBase('/image/home/avatar/伍泰炜.jpg'),
    name: 'Taiwei Wu',
    title: 'Enterprise Insights',
  },
  {
    avatar: withBase('/image/home/avatar/宁志成.jpg'),
    name: 'Zhicheng Ning',
    title: 'Enterprise Insights',
  },
  {
    avatar: withBase('/image/home/avatar/夏小雅.jpg'),
    name: 'Xiaoya Xia',
    title: 'OSS Foundation Insights',
  },
  {
    avatar: withBase('/image/home/avatar/张欣然.jpg'),
    name: 'Xinran Zhang',
    title: 'OSS Foundation Insights',
  },
  {
    avatar: withBase('/image/home/avatar/韩凡宇.jpg'),
    name: 'Fanyu Han',
    title: 'Technology Domain Insights、OSS Project Insights',
  },
  {
    avatar: withBase('/image/home/avatar/娄泽华.jpg'),
    name: 'Zehua Lou',
    title: 'Technology Domain Insights、OSS Project Insights',
  },
  {
    avatar: withBase('/image/home/avatar/朱志炜.jpg'),
    name: 'Zhiwei Zhu',
    title: 'OSS Project Insights',
  },
  {
    avatar: withBase('/image/home/avatar/毕枫林.jpg'),
    name: 'Fenglin Bi',
    title: 'Developer Insights',
  },
  {
    avatar: withBase('/image/home/avatar/张翔宇.jpg'),
    name: 'Xiangyu Zhang',
    title: 'Developer Insights',
  },
  {
    avatar: withBase('/image/home/avatar/李鸿斌.jpg'),
    name: 'Hongbin Li',
    title: 'Developer Insights',
  },
]

// 商业篇
const commercializationMembers = [
  {
    avatar: withBase('/image/home/avatar/云启资本.jpg'),
    name: 'Yunqi Partners',
  },
];

// 问卷设计
const questionnaireDesignMembers = [
  {
    avatar: withBase('/image/home/avatar/王婕.jpg'),
    name: 'Jie Wang',
  },
];

// 整体报告汇总/编辑
const copyreaders = [
  {
    avatar: withBase('/image/home/avatar/王婕.jpg'),
    name: 'Jie Wang',
  },
  {
    avatar: withBase('/image/home/avatar/刘天栋.jpg'),
    name: 'Ted Liu',
  },
  {
    avatar: withBase('/image/home/avatar/丁文昊.png'),
    name: 'Steve Ding',
  },
  
];

// 设计/排版
// const artWorkers = []

</script>



<VPTeamPage>
  <VPTeamPageTitle>
    <template #title>Writing Team</template>
  </VPTeamPageTitle>
  <VPTeamPageSection v-if="convener">
    <template #title>Convenor</template>
    <template #members>
      <VPTeamMembers size="small" :members="convener" />
    </template>
  </VPTeamPageSection>
  <VPTeamPageSection v-if="questionnaireDesignMembers">
    <template #title>OSS Questionnaire</template>
    <template #members>
      <VPTeamMembers size="small" :members="questionnaireDesignMembers" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection v-if="dataPieceMembers">
    <template #title>Data Analytics</template>
    <template #members>
      <VPTeamMembers size="small" :members="dataPieceMembers" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection v-if="commercializationMembers">
    <template #title>OSS Commercialization</template>
    <template #members>
      <VPTeamMembers size="small" :members="commercializationMembers" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection v-if="memorabiliaMembers">
    <template #title>OSS Chronicle</template>
    <template #members>
      <VPTeamMembers size="small" :members="memorabiliaMembers" />
    </template>
  </VPTeamPageSection>

  <VPTeamPageSection v-if="copyreaders">
    <template #title>Editorial & Compilation</template>
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

<VPTeamPageTitle>
  <template #title>Commentary Experts</template>
  <template #lead>
    (Sorted by Last Name)
  </template>
</VPTeamPageTitle>

<p :style="{fontSize: '1.5rem', textAlign: 'center'}">Xue Guo,Willem Jiang,Tao Jiang,tison,Jianfan Wei,Jack Yu</p>

<VPTeamPageTitle>
  <template #title>Media Partners</template>
</VPTeamPageTitle>

<div :style="{display: 'flex', width: '100%',center}">
  <img :style="{display: 'flex', width: '50%', objectFit: 'contain'}" src="/image/home/sf_logo.png"/>
  <img :style="{display: 'flex', width: '50%', objectFit: 'contain'}" src="/image/home/csdn_logo.jpg"/>
</div>
