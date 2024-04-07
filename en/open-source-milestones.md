---
outline: deep
---
# OSS Chronicle

## Overview

Why do we include a considerable amount of international open-source news in the Open Source Chronicle section of the China Open Source Annual Report? These are the significant events that Chinese open-source enthusiasts must be aware of, and they are the crucial events that impact China's open-source community or will do so in the future.

The Open Source Chronicle reflects the foremost open-source events of 2023 that have captured the attention of editorial volunteers from diverse backgrounds. The overarching theme underpinning our thought process is exploring open-source technologies' vast potential and accompanying benefits for a wide range of stakeholders. As editorial volunteers, we are committed to ensuring that our coverage of this landmark event is comprehensive, objective, and informative, enabling our readers to understand better the latest trends and developments in the open-source domain.

* Disruptive innovations in global "**Open-Source Technologies**" such as artificial intelligence and machine learning, are the main theme throughout the Chronicle;
* Global conflicts resulting from geopolitical dynamics indirectly impact "**Open-Source Ecology**", regardless of East vs. West;
* This has resulted in a shift towards "**Open-Source Governance**" in all areas, including regions, law, trade, and communities;
* whereas the topic "**Open Source Security**" is considered a top priority;
* The growth of "**Open Source Commercialization**" is a promising trend, and though 2023 may pose some challenges, it's encouraging to know that there is an abundance of open-source startups thriving worldwide, including in China.;
* In today's world, technology, ecology, governance, and commercialization are undergoing significant changes. This has made "**Open Source Education**" a crucial foundation for exploring new possibilities. Artificial intelligence is a prime example of disruptive innovation that requires persistent research and a robust higher education system to achieve its current level of success.
* The last part of the "**Open Source Ranklists, Papers and Reports**" is like a delightful dessert after dinner. It will be fascinating to observe if it provides valuable insights and accurately predicts the future of open-source development in China. We can only know for sure by the end of 2024.


This year, AI is present in all categories. A holistic approach is necessary for full comprehension.

In brief, we stand on the brink of a world where AI will transform the way things work. We hope to meet you at next year's Open Source Chronicle!

## 1. Open Source Technology Chronicle

### 1.1 Artificial Intelligence and Large Models

- **ZHIPU AI - GLM**
ZHIPU AI has open-sourced the ChatGLM-6B series, ChatGLM-6B is an open-source dialogue language model that supports bilingual Q&A. In addition, ZHIPU AI has open-sourced VisualGLM-6B (CogVLM), a multi-modal dialogue model, which combines the capabilities of image processing and natural language processing to support both Chinese and English dialogues, aiming to provide a richer and more intuitive interactive experience.
- **Baichuan**
Over the past year, Baichuan has released several versions of large models, including Baichuan-7B. Later, they launched the 13B model and the Baichuan2 series of models, and made the base and chat versions open-source. One of the latest models, Baichuan2-192K, has a large size and a context window length of 192K.
- **Intern general large model system**
Shanghai Artificial Intelligence Laboratory (AIL) released the newly upgraded "Intern General Large Model System", which includes three basic models, including Intern Multimodal - Large Model, InternLM - Large Language Model and InternLandMark - Large-scale 3D Neural Radiance Field, as well as the first Full-Chain Open Source System for the research, development and application of large models.
- **Alibaba - Qwen**
Alibaba open-sourced the 7B model of Tongyi QianWen (Qwen), and then successively open-sourced the base and chat models of 1.8B, 14B, and 72B, and provided the quantised versions of the corresponding int4 and int8. In the multimodal scenarios, QianWen also open-sourced the two multimodal models of vision and speech, qwen-vl and qwen-audio.
- **Kunlun - Skywork**
Kunlun Inc. released the 10 billion large language model "Skywork" Skywork-13B series and open-sourced the 600GB, 150B Tokens large and high-quality open-source Chinese dataset. Skypile/Chinese-Web-Text-150B dataset.
- **RWKV**
RWKV has been continuously open-sourced since its release as a non-Transformer structured model for large languages. In 2023, RWKV has released multiple versions and entered LF AI & Data for incubation.
- **Inspur - Yuan 2.0**
Inspur Electronic Information Industry Co., Ltd. officially released "Yuan 2.0", a 100-billion base model. This series of models is fully open-sourced and commercially available, including three versions with parameter values of 102B (102.6 billion), 51B (51.8 billion), and 2B (2.1 billion). Compared with Source 1.0, Source 2.0 has improved programming, reasoning, and logic.
- **01.AI - Yi**
In November 2023, 01.AI released the Yi series of models with parameter sizes between 6 and 34 billion and 30 billion tokens of training data.
- **Fire-Flyer Quant - DeepSeek**
DeepSeek, a division of High-Flyer Quant, has released its 67B open-source large model. DeepSeek has open-sourced the 7B and 67B scale models, which contain a base model (base) and an instruction tuning model (chat). No application is required, and it is free for commercial use. At the same time, the project team has also opened nine model checkpoints in the middle of training for download.
- **Ant Group - CodeFuse**
Ant Group has open-sourced CodeFuse-13B and CodeFuse-CodeLlama-34B for CodeLlama, which currently supports a variety of code-related tasks such as code completion, text-to-code, and unit test generation. The open source includes the MFT (Multi-Task Fine-Tuning) framework, a dataset for enhancing the coding capabilities of LLMs, and a deployment framework.

- **Meta Llama 2**
In July 2023, Meta announced the Llama 2 project and disclosed that they had successfully open-sourced three pre-trained models at different scales, which included the 7B, 13B, and 70B parameter versions. These models were trained on a massive 2 trillion token scale during the pre-training phase. In the Supervised Fine-Tuning (SFT) phase, they were fine-tuned with over 100,000 pieces of data to improve their performance on specific tasks. Additionally, Meta made the Llama2-Chat model open-source, which is SFT-optimized based on conversation data. Furthermore, Meta is continuing to open-source the CodeLlama programming language large model.
- **Mixtral 8x7B**
In December 2023, Mixtral open-sourced the Mixture of Experts (MoE) open-source model Mixtral 8x7B, commercially available under the Apache 2.0 license. Mixtral-8x7B is a Mixtrue of Experts consisting of eight networks of experts with 7 billion parameters, a structure that improves the model's efficiency in processing information and reduces operating costs. 
- **Falcon 180B**
Falcon 180B is an open source large language model released by the Technology Innovation Institute (TII). The model has 180 billion parameters and was trained using TII's RefinedWeb dataset.
- **Arabic AI Large Models Jais Open Sourced**
A team of UAE researchers has announced the open-sourcing of the Arabic large model Jais. Jais is a bilingual Arabic-English large language model pre-trained with 13 billion parameters.
- **Microsoft open-sourced visual foundation model Visual ChatGPT**
Microsoft has launched Visual ChatGPT, an open-source project that combines OpenAI's ChatGPT with a series of Visual Foundation Models (VFMs) to enable users to send and receive images during chats. The project aims to extend the functionality of ChatGPT so that it can not only process text but also understand and generate images, thus enabling a multimodal interactive experience.
- **NVIDIA officially open sourced TensorRT-LLM**
NVIDIA has officially released an optimized open-source library called TensorRT-LLM. This library helps to speed up the performance of large language models on AI GPUs such as Hopper. In order to test the performance, NVIDIA compared H100 with TensorRT-LLM-enabled H100, both based on A100. The results showed that in GPT-J 6B inference, the performance of H100 was 4 times better than A100, while the performance of TensorRT-LLM-enabled H100 was 8 times better than A100.
- **Elon Musk drives the efforts of X (formerly Twitter) to open source its recommendation algorithm**
X (Twitter) has released two repositories on GitHub (main repo , mlrepo) that cover much of the Twitter source code including recommendation algorithms, including the mechanisms used to control the tweets users see on the For You timeline.
- **Hugging Face changes its Text Generation Inference (TGI) licence**
Hugging Face has announced that in the latest release of TGI v1.0, its open-source license will change from Apache 2.0 to HFOIL 1.0. HFOIL stands for Hugging Face Optimized Inference License, which is HuggingFace's specifically designed license agreement for optimized inference solutions.
- **Hugging Face has open sourced Rust-based machine learning framework Candle**
Hugging Face recently open-sourced Candle, a novel and small Rust ML framework that runs extremely fast and supports a wide range of powerful models. It provides support for GPUs and has an optimised CPU backend that runs in the browser. Candle also includes several pre-trained models and use cases, such as speech recognition models, generic LLMs, computer vision models, and more.
- **Alibaba has open sourced AnyText**
Alibaba has recently released a multi-language visual text generation and editing model called AnyText. This model allows users to create text that is comparable to that of a professional Photoshop editor. With AnyText, users can customize the location, strength, intensity, and number of text seeds that appear in a picture. 
- **Jina AI launches world's first open source 8K Text embedding model**
Jina AI announced the release of the Jina-embeddings-v2 model, an open source product that supports 8K (8,192 tokens) context lengths and is similar in functionality and performance to OpenAI's text-embedding-ada-002.

### 1.2 Operating Systems and Programming Languages

- **The Long Term Support (LTS) version of Linux kernel now has 2-year maintenance period instead of 6**
The Linux kernel LTS releases were extended to six years in 2017. Recently, a tweak was made to the policy. Jonathan Corbet of Linux Weekly News said it doesn't make sense to maintain old kernels for so long because they're not used much.
- **India's Ministry of Defence develops its own Linux distribution, Maya OS, to fully replace Windows**
India's Ministry of Defence has announced a significant overhaul of its cybersecurity system. It plans to replace the Windows operating system with a Linux distribution called Maya in all its networked computers. The move is in response to the growing threat of malware and ransomware attacks. It aims at promoting independent innovation and reducing dependence on foreign software.
- **Red Hat Announces CentOS 7 and RHEL 7 end of support on 30 June 2024**
Red Hat has recently announced the discontinuation of support for CentOS 7 and RHEL 7. In addition, the complete source code for RHEL will no longer be publicly available. To maintain compatibility and support, downstream distributions of RHEL (such as CentOS, Rocky Linux, AlmaLinux, etc.) will need to recompile and release their versions within 30 days.
<br> However, it is important to note that Red Hat has assured the CentOS community that it will not be going away. Community contributors and CentOS users will still be able to collaborate on open-source Linux distributions that are part of the CentOS Stream project.
- **Google's open-source browser project Chromium announces the use of Rust**
Google has posted a blog post announcing that it will support using third-party Rust libraries from C++ in Chromium, with plans to include Rust code in Chrome binaries by the end of the year. It also said that Rust, a Mozilla-developed programming language that offers security along with high performance, was initially designed to be used for writing browsers, so it's only fitting that open-source operating systems like Chromium rely on the technology.
- **Open-source operating system openKylin 1.0 officially released, already supports Arm, RISC-V**
The latest version of openKylin, version 0.9, now supports Arm and RISC-V. Additionally, the new openKylin 1.0 version comes with 6.1+5.15 dual kernels by default, along with independent selection and upgrade of 20+ operating system core components. The latest version also adds many new features and fixes more than a thousand bugs, improving the overall stability and compatibility of the system to provide users with a better experience.
- **Huawei officially releases HarmonyOS 4**
Huawei officially released the HarmonyOS 4 operating system. The new HarmonyOS 4 is said to have breakthroughs in privacy and security, AI large model capability, and personalized interaction.
- **fit2cloud open sourced 1Panel**
1Panel is a modern, open-source Linux server operation and management panel that provides users with accessible server-building and management resource services.
- **AWS open source specific language Cedar Cedar**
AWS has released Cedar as open source. Cedar is a domain-specific language that enables defining policy access permissions. It is integrated into Amazon Verified Permissions and AWS Verified Access. Cedar can also be integrated into applications through SDKs and language specifications.<br> 
Cedar allows defining access policies separately from the application code, which facilitates writing, analyzing, and auditing the policies independently. Cedar supports both Role-Based Access Control (RBAC) and Attribute-Based Access Control (ABAC).
- **Microsoft releases Guidance language**
Microsoft has introduced a domain-specific language called Guidance, designed to enhance developers' ability to manage contemporary language models. The new framework integrates generation, prompting, and logic control into a unified development process. The programming language enables developers to 'organize generation, prompting and logic control into a continuous flow that matches how the language model processes text.'<br>
It integrates seamlessly with providers such as the Hugging Face model. It combines an intelligent seed-based generation caching system and token healing to optimize prompt boundaries and remove bias in the lexical slicing process.


### 1.3 Hardware Technology and the Internet of Things
    
- **China supports the building of humanoid robot open source communities**

    In October 2023, China's Ministry of Industry and Information Technology (MIIT) released the Guiding Opinions on the Innovative Development of Humanoid Robots. The document proposed the establishment of an open-source community for humanoid robots, which would promote the development of open-source foundations, provide support for key enterprise open-source projects, and encourage collaboration and innovation among developers around the world.

- **Stanford University unveiled Mobile ALOHA, an open source robot**

    In March 2023, Stanford University unveiled Mobile ALOHA (A Low-cost Open-source Hardware System), an open-source robot that can perform fine tasks via teleoperation, and by the end of 2023 is ready to be autonomously operated for simple tasks through joint training.

- **Tesla Open Sourced Roadster Runner Design and Engineering Details**

    Musk wrote on the social platform that Tesla is “fully open source” for the design and engineering details of its first-generation Roadster and has published research and development documents that are accessible to all.

- **openKylin officially joined the RISC-V Foundation**

    The openKylin community has recently become a member of the industry consortium of the RISC-V Foundation, with the aim to contribute towards the development of the RISC-V ecosystem. They intend to build an operating system that is in harmony with the hardware and software ecosystem of the RISC-V architecture.

- **Ali T-Head open-sourced the XuanTie RISC-V family of processors**

    Ali T-Head has made the XuanTie RISC-V series of processors open-source along with a range of tools and system software. This marks the first time a complete open-source stack of processors and necessary software has been made available, which will aid in the advancement of the RISC-V architecture, expedite the integration of RISC-V hardware and software technologies, and facilitate the adoption of innovative solutions.

- **AMD Open Sourced FSR**

    AMD open-sourced FSR (FidelityFX Super Resolution)3 under the MIT license, an upsampling technology that competes with NVIDIA's DLSS, but unlike DLSS, it doesn't rely on a proprietary CUDA core and is software-based.

- **Baidu open sourced its messaging middleware BifroMQ**

    China's Baidu has open-sourced BifroMQ, its high-performance and distributed messaging middleware. BifroMQ uses serverless architecture and has native multi-tenancy support. Developed over years by Baidu's IoT team, it facilitates IoT device connectivity and messaging systems at scale.

### 1.4 Data Infra

- **DragonflyDB 1.0**

    DragonflyDB is a modern open-source in-memory database that is compatible with the Redis and Memcached APIs. It is a viable alternative to both, as it requires no code changes during migration. The development team recently released DragonflyDB version 1.0, stating that it is ready for production use. DragonflyDB 1.0 supports the most common data types and commands of Redis, as well as snapshots, master-slave replication, high availability, and other features.

- **FerretDB 1.0 officially released**

    FerretDB 1.0, an open source alternative to MongoDB, has been released. FerretDB wants to bring MongoDB database workloads back to their open source roots, enabling PostgreSQL and other database backends to run MongoDB workloads, preserving the opportunities offered by the existing MongoDB ecosystem.

- **Apache Doris Version 2.0.0 Released**

    The official release of Apache Doris version 2.0.0 was on August 11, 2023. Over 275 contributors submitted more than 4,100 optimizations and fixes, resulting in significant improvements. Specifically, the blind query performance on the standard Benchmark dataset has improved by over 10x in version 2.0.0 of Apache Doris.

- **Apache SeaTunnel Graduated into Apache Top Level Project**

    Apache SeaTunnel is the first Chinese domestic-led, top-tier project in Big Data Integration to contribute to the ASF. Apache SeaTunnel, formerly known as Waterdrop, changed its name to SeaTunnel in October 2021 and applied for membership in the Apache Incubator. SeaTunnel is an easy-to-use, ultra-high-performance, distributed data integration platform that supports SeaTunnel is a very easy to use, ultra-high performance distributed data integration platform that supports real-time synchronization of massive amounts of data.

- **Aliyun's open-source graph computation engine GraphScope performance tops authoritative lists**

    GraphScope, which is an open-source graph computing engine developed by Aliyun, has set a new record in the "LDBC SNB Interactive" graph benchmark list. It achieved a throughput rate of over 30,000 QPS when a single node performed a graph database query, which is twice as fast as the previous record holder.GraphScope, the open-source graph computing engine from Aliyun, has broken the record of the international authoritative graph benchmark "LDBC SNB Interactive" list with a throughput rate of more than 30,000 QPS for a single node executing a graph database query, which is twice the performance of the previous record holder.

- **Baidu open-sourced its high-performance search engine Puck**

    Baidu announced that it has open-sourced its self-developed search engine, Puck, under the Apache 2.0 protocol, the first open-source vector search engine for large data sets in China.

- **ByteDance Open Sourced ByConity**

    ByteHouse has recently released its kernel to the community as ByConity, under the Apache 2.0 license agreement. 

    ByConity is an open-source cloud-native data warehouse that is based on the ClickHouse kernel but comes with a new storage-computation separation architecture. It supports several essential features such as tenant resource isolation, elastic scaling up and down, storage-computation separation, and strong consistency between data reading and writing. ByConity aims to provide a reliable and scalable solution for data storage and computation in a cloud-native environment.

- **Ali open sourced multi-database client tool Chat2DB**

    Chat2DB is an open-source and free multi-database client tool that supports local installation of Windows and Mac, server-side deployment, and web page access. Compared with traditional database client software Navicat and DBeaver, Chat2DB integrates AIGC's ability to convert natural language to SQL and SQL to natural language and can give developers SQL optimization suggestions.

- **ApeCloud open sourced KubeBlocks**

    KubeBlocks is an open-source system for managing and running data infrastructure on K8s. It helps developers, platform engineers, and SREs deploy and maintain a dedicated DBPaaS in the enterprise across various public and private cloud environments. KubeBlocks is the only open-source multi-engine data/database management system project in CNCF Cloud Native LANDSCAPE, supporting 32 databases, such as MySQL, PG, MongoDB, Redis, Kafka, Pulsar, and more.

### 1.5 Cloud Computing and Infrastructure Software

- **GragGAN Got 20,000 Stars One Day After Open Source**

    DragGAN is an image editing tool that was developed by Google researchers in collaboration with the Max Planck Institute for Informatics and MIT CSAIL. It allows users to easily adjust the position, pose, expression, size, and angle of the subject in a photo by manipulating the pixel points and orientation in the image. This intuitive tool is designed to make image editing quick and effortless.

- **LLMOps platform Dify.AI code is completely open-source**

    Dify.AI, the LLMOps platform, has announced that 46,558 lines of code are completely open-source and has temporarily decided to relax the open-source protocol from AGPL to Apache 2.0.

- **Huawei open-sourced cross-end, cross-framework, cross-version enterprise application front-end component library OpenTiny and high-performance service grid Kmesh**

    OpenTiny is a development kit for building web application front-ends using Vue2/Vue3/Angular. It includes a theme configuration system, back-end templates, a CLI command line, and other tool libraries.

    Kmesh's high-performance service grid offers developers a new level of grid performance through innovative architecture. It leverages eBPF+ programmable kernel technology to achieve OS-native service grid data plane capabilities. Traffic governance is integrated into the OS, which significantly enhances the accessibility of grid services and improves their access performance.

- **Baidu Intelligent Cloud Releases Open Source QianFan SDK Version**

    Baidu Intelligent Cloud officially released the Python SDK (QianFan SDK) version, which is fully open source and available for free download and use by enterprises and developers.

- **Volcano Engine Self-developed Universal Multimedia Processing Framework BMF**

    Volcano engine is an open source, cross-language multimedia processing framework that offers flexibility and scalability. It includes the BMF (Babit Multimedia Framework), an eight-bit multimedia processing framework, and provides a simple and easy-to-use interface.

    Dynamically manage and reuse video processing capabilities in a modular way to build high-performance multimedia processing links using Graph, enabling efficient project production for multimedia users.

- **ByteDance Released and Open Sourced Rspack**

    Rspack is a Rust-based bundler that has completed support for the Webpack Loader architecture. It is incubated by the ByteDance Web Infra team and offers high performance, customizability, and compatibility with the Webpack ecosystem.

## 2. Open Source Ecology Chronicle
    
An interesting phenomenon is that if something good happens in the open source community, it should mostly be written in the business chapter. And if something bad happens, it can mostly be filed in the ecology chapter. Of course, it's not just bad things, there's also some good news, as well as policies in various countries that can have a profound impact on the open source ecosystem.

### 2.1 Leading enterprises are laying off open source workforce
    
From the beginning of January, there have been rumours of layoffs at Google, GitHub and GItLab, and even companies like Red Hat are also laying off staff, and then there are news of layoffs vaguely disclosed by various large domestic companies. Although this chronicle focuses on the open source ecosystem and the situation of open source people, objectively speaking, it is true that the big companies are not specifically trying to lay off open source talent. It's just that once the layoffs start, the open source people within the company, will look "suspicious" and will be pressed with the question: what value have you really created for the company? And that's a question that's never easy to answer in a serious, positive way!

### 2.2 Famous open source gurus struggle to make ends meet

The next news is even more sobering. The 12,000 people Google laid off, dubbed the "Golden 12K", included some famous open source bigwigs. For example: Chris DiBona, who founded Google's OSPO 19 years ago, and Samba co-founder Jeremy Allison, 61, reluctantly tweeted, "Just got fired from Google. If anyone needs SMB 1/2/3 protocol or open source experience, I'd be interested".

There are also some famous open source people who have suffered even worse, let's briefly list the news titles:

- "The author of the open source framework NanUI turned to selling steel, and the development of the project was suspended"
- "10 months in prison, internet busts, and struggling to earn a living! Behind the 9 billion downloads of an open source project is 9 years of work".
- "Due to lack of funds, the full-time developer confesses: there may be no future for this open-source software!
- "Unemployed due to mania, author of acclaimed open-source project begs for money online"
- "The roots of free open source software have collapsed," complains the head of core-js, who has the entire modern web on his back, but has given up on open source for lacking of money"
- "Another popular open source project announces cessation of functionality as funding critically falls short“

It's really a case of "hear no evil, see no evil". In last year's Open Source Chronicle, we were still talking about the "twilight of individual heroism". Today, the trend has become more and more obvious.

:::info Expert Review
**Wei Jianfan**: If you are playing open source with a playful mindset, it's great, don't think about the money problem. If the livelihood issues have not been resolved, do not devote yourself to open source, as a hobby is good. Because open source itself is not used to make money.
:::
    
### 2.3 Well-known open source projects are ceasing development one after another
    
In 2023, there are a number of notable open source projects, both domestically and internationally, that have announced the cessation of development for different reasons.

The most outrageous one probably has to be AetherSX2, one of the best PlayStation 2 emulators on the Android platform. The developers had no choice but to announce the cessation of development because they suffered "endless impersonations, complaints, unreasonable demands, and even death threats" 

Most intolerable of all, aardio, a programming language focused on desktop software development, whose author announced that he no longer had the energy to maintain the project due to his wife's cancer.

There are also some common reasons, such as the developer's company is short of money or out of business: Touca, libjpeg-turbo; and developers lost interest or no longer have the energy to maintain: Peek, wangEditor, lodash; and technology outdated: Mokee.

### 2.4 40 years's rugged journey of the Free Software Foundation
    
On 27 September 1983, Richard Matthew Stallman (RMS) announced the "GNU Project" to develop a Unix-like free software operating system, and in doing so, launched the Free Software Movement. In 2023, the Free Software Foundation also published an article celebrating forty years of GNU and the Free Software Movement.

FSF Executive Director Zoë Kooyman said that "GNU is not only the most widely used operating system based on free software, but is also at the heart of the philosophy that has guided the free software movement for forty years. We hope that the 40th anniversary will inspire more hackers to join GNU in its goal of creating, improving and sharing free software around the world."

However, also in April 2023, an article was published claiming that after nearly 40 years, the Free Software Foundation (FSF) was dying. The author argued that "the FSF has failed to focus on spreading the free software philosophy, developing, distributing, and promoting copyleft licences, and overseeing the health of the core concepts of the free software movement, while at the same time devoting its resources to other, unproductive tasks".

In fact, we do talk more about open source software than free software these days. So has the Free Software Movement fulfilled its destiny, or is it likely to be revitalised through reform?

### 2.5 Ageing of the open source community

The aging of the open source community is an unavoidable phenomenon. Even the ever-tempered Linus Torvalds has begun to curb his temper and talk about "the aging of the kernel community". The Postgres community is also aging, with the main developer being 68 years old. There's also news of the death of Bram Moolenaar, the father of Vim, and the death of Thien-Thi Nguyen, a contributor to the GNU Free Software Project. What should we think about the phenomenon of "aging"?

In fact, we should see more young people joining the open source community, but they tend to join younger projects that are more interesting and newer, rather than older projects with a long history.

Maybe what we should really think about is: do those old open source projects really have to be active and release new versions all the time?
    
### 2.6 Some encouraging news on China's open-source efforts
    
There's still a lot of good news in China's open source community, such as the official report in April: "The number of China's open source software developers exceeded 8 million".

In January 2023, Apache Linkis, Apache Kyuubi, Apache bRPC; in February, Apache EventMesh; in June, Apache SeaTunnel, Apache Kvrocks, one after another, officially graduated to become the Apache Software Foundation top-level projects. In February, Jina AI officially donated DocArray to the Linux Foundation, Paralus officially became a sandbox project of the CNCF Foundation, and in July, the Istio project officially graduated from the CNCF.

openKylin officially joined the RISC-V Foundation, Huawei became China's first PyTorch Foundation Premier member, and Jiang Ning was re-elected as a director of the board of the Apache Software Foundation for the year 2023, all of which show that we are still actively participating in the international open source ecosystem, and are continuing to play an important role in it.

In February 2023, after ALC (Apache Local Community) Beijing and Shenzhen, ALC also set up Xi'an chapter. At the same time, KAIYUANSHE also launched the KCC (Kaiyuanshe City Community) programme, which by the end of the year had grown to eleven cities, including Beijing, Changsha, Chengdu, Dalian, Hangzhou, Nanjing, Guangzhou, Shanghai, Shenzhen, Singapore and Silicon Valley.

In March 2023, after the OpenAtom Open Source Foundation, China's second open source foundation, the CHANCE Foundation, was officially established in Chongqing. Later, it also launched "SigStore China Community", "Open Source Innovation Education Alliance", etc., and now three open source projects have been officially donated to the CHANCE Foundation. We look forward to the establishment of more quality foundations in China, for the world, in the future.
    
**2023 open source related conferences / activities**

- February
  - Shenzhen：First OpenHarmony Conference
- March
  - Beijing：The 1st OSPO Summit
  - Beijing：DevTogether Summit
- April
  - Suzhou：Mobile Cloud Conference - Open Source Forum
  - Shanghai：openEuler Developer Day
- May
  - Shanghai：Global Open Source Technology Summit (GOTC)
- June
  - Beijing：BAAI Conference — AI Open Source Forum
  - Beijing：OpenAtom Global Open Source Summit
  - Beijing：18th Open Source China Open Source World Summit
- July
  - Beijing：China Internet Conference - Open Source Supply Chain Forum
  - Taipei：2023 COSCUP (Conference for Open Source Coders, Users & Promoters)
- August：
  - Shanghai：World Artificial Intelligence Conference - Open Source Learning Forum
  - Beijing：CommunityOverCode Asia 2023
- September
  - Shanghai：KubeCon + CloudNativeCon + Open Source Summit
  - Shanghai：GOSIM (Global Open Source Innovation Conference)
  - Shanghai：2023 INCLUSION.Conference on the Bund - Open Source Forum
  - Beijing：Open Source Cloud Alliance for Industry (OSCAR) Conference
- October
  - Wuhan：CHANCE Foundation Diverse Cooperation Summit
  - Changsha：CCF ChinaOSC
  - Changsha：1024 Programmer Festival
  - Chengo：COSCon 8th Annual China Open Source Conference
- December
  - Beijing：OpenInfra Days China 2023
  - Sanya：OpenCS (Open-source Computer Systems) 2023
  - Beijing：Operating System Congress & openEuler Summit
  - Wuxi：OpenAtom Developer Conference
  - Shanghai：Open Source Industry Ecological Conference

### 2.7 The Impact of national policies on the open source ecosystem

When it comes to open source ecology, it is necessary to mention the open source-related policies formulated by various countries and regions, all of which will have an all-round impact on the open source community, business and ecology. Simply summarised, they can be divided into the following categories:

- **Government policies to support open source -** as reported in July 2023, a study found that "27% of the UK's total tech value-added comes from open source, valued at £13.59bn", and in China there are a range of policies in place, from the central government to the local level. There is dedicated support for specific open source projects (Shenzhen), targeted funding for specific foundation projects (Beijing), and promotion of the integration of open source technology with specific industries, to name but a few. We will see in the coming years how much impact this will have on the open source industry and ecosystem.
- **The emergence of open source as a weapon in international competition -** whether it's Github blocking developer contributions from Russian companies, a US lawmaker proposing to restrict Chinese development in the RISC-V space, and a wide variety of "export-restrictive" policies that have been put in place or attempted to be put in place - makes the following Reuters report, "Open-source software becoming a key part of trade war," seem imminent!
- **Around the open source security, the policy level also has a lot of action-** whether it is the United States, the European Union or China, have introduced a series of "open source security", "AI compliance" related bills and regulations. This also makes the open source community mixed feelings, happy that the security field is getting more and more attention from the government, and worried that unreasonable policies and regulations may hamper the development of open source technology.
    
## 3. Open Source Governance Chronicle
Open-source governance can be divided into three categories: community governance, project governance, and risk governance. Risk governance encompasses different types of risks such as ethical and social risks, legal compliance risks (including licenses), supply chain risks, security risks, and more. Given the importance of open-source security, we have included a separate chronology of open-source security events in the fifth part of this article.

In 2023, a significant breakthrough in the development of Artificial Intelligence (AI) caused widespread debate among experts worldwide. Whether or not to limit the pace of AI development was discussed. At the same time, major geopolitical powers such as the EU, the US, and China focused on creating legislation to regulate AI. Furthermore, open-source technology played a crucial role in catalyzing the development of AI, leading to efforts to define open-source AI.

During 2023, major open-source foundations and organizations from around the globe held online and offline discussions. They aimed to encourage policymakers and legislators worldwide to work together to face the challenges brought by the new era of AI through open-source cooperation and reject techno-nationalism and geopolitical hostility. Despite their efforts, the fragmented global open-source communities, particularly those from Asia and China, still need to gain significant influence on policymakers. Therefore, more attention and collaboration are necessary to address this issue.

We have given more importance to the crucial events related to open-source AI governance this year. Due to limited space, several project governance events have been included in the community and risk governance categories and will not be listed separately.


### 3.1 Community Governance

#### 3.1.1 Controversies in the Rust community

The Rust community underwent a series of crises and governance changes in 2023. Here are some of the major events and outcomes:

- The Rust programming language team faced internal disagreements and created a new Leadership Council to decentralize authority. External experts were attacked by some core members, causing them to leave and leading to resignations. These conflicts led to the announcement of a new programming language called Crab. Crab's developers wanted more support with Rust's design, aiming to be more flexible, efficient, and faithful to Rust's original intent and philosophy.
- The Rust Foundation's new Trademark Policy sparked community opposition over concerns that it could limit Rust's growth and innovation. The Foundation apologized, acknowledged its shortcomings, and promised to revisit and revise the policy while engaging in more dialogue with the community.
- The management of the Rust community faced issues again recently. The organizers of RustConf removed some scheduled keynote speakers without informing them, which led to an outcry and protests within the community. As a result, some well-known Rust developers and speakers decided to withdraw not only from RustConf, but also from the Rust community as a whole.
- Graydon Hoare, the founder of the Rust language, said in an interview that he was helpless and frustrated by the conflict and division in the Rust community, and that he believed that Rust had deviated from his original vision and goals, and that he was no longer able to control and save Rust, and that he hoped that the community would solve the problem on its own and leave him alone.

While the Rust language went through some community crises and governance changes in 2023, it also published a roadmap for 2024 that focuses on three directions: lowering the barrier to learning, expanding the ecosystem, and improving the development process.

The design team for the Rust language has stated that their goal is to simplify the program so that developers only have to deal with the inherent complexity of their domain and no longer have to deal with the unintended complexity of Rust, and also to give library authors more power and flexibility to meet the needs and innovations of their users.

In addition, some observers believe that the Rust language is evolving toward ease of use as it proves its stability, performance, and productivity in 2021. Rust will likely see explosive growth as the cost of learning and use decreases even further. The focus on security, concurrency, and performance, and the growing adoption of the language as a language designed not only for today's challenges but also for the challenges of the future, suggests that the Rust language will be here to stay, but that community governance will remain a top priority must be addressed.

#### 3.1.2 Controversies in the Red Hat community
Red Hat sparked a storm in the open source world in 2023 involving the source distribution and licensing of its two Linux distributions, RHEL (Red Hat Enterprise Linux) and CentOS (Community Enterprise Operating System). Here are some of the major events and outcomes:

- Red Hat, a popular software company, recently made an announcement that it will no longer share the complete source code of RHEL (Red Hat Enterprise Linux) publicly. Instead, it will only provide patches and updates. Additionally, downstream distributions of RHEL (like CentOS, Rocky Linux, and AlmaLinux) will need to recompile and release their versions within 30 days to maintain compatibility and support for RHEL. This decision has caused controversy among the open-source community. Many believe that Red Hat's actions go against the principles of open-source software and that the company is prioritizing profits over the spirit of open-source. The decision has also created difficulties and pressure for downstream distributions of RHEL.
- Red Hat has responded to this, stating that they have not broken their commitment to open source, but rather to protect the brand and quality of RHEL from some bad behavior and abuse, as well as to encourage more users and developers to use RHEL directly and enjoy the services and support it provides.
- CentOS, as the most extensive downstream distribution of RHEL, has been hit the hardest. Its ecosystem and community are facing a crisis of fragmentation and decline, and some users and developers have turned to other Linux distributions, such as Debian, Ubuntu, Fedora, etc., believing that CentOS has already lost its meaning and value of existence.
- Both Oracle and SUSE took advantage of the opportunity to mock and provoke Red Hat, stating that they would continue to support and maintain RHEL's downstream distributions and even invested heavily in creating their own RHEL offshoots, such as Oracle Linux and SUSE Linux Enterprise Server, in an attempt to capture RHEL's market and users.
- Red Hat has released a statement once again to explain why they are changing their RHEL source code release strategy. According to the statement, the company is making this change to improve the security, stability, and reliability of RHEL. The change will also promote innovation and development of RHEL. Red Hat assures that they still respect and support the open source community and welcomes more collaboration and feedback from it.

### 3.2 Risk Governance

#### 3.2.1 Ethics and social risks
AI technology development and application have triggered several ethical, moral, and societal risk debates and concerns related to human safety, freedom, privacy, and responsibility. The following are some of the significant events and viewpoints:

- **Over 1,000 tech leaders and researchers, including Elon Musk**, have called for artificial intelligence labs to suspend the development of advanced systems, warning in an open letter that AI tools pose significant risks to society and humanity. Conversely, Hongyi Zhou, CEO of 360, believes that not developing AI is the biggest insecurity. According to him, AI can help humans solve many problems, and its use can be regulated through laws and regulations.
- **A 22-word statement signed by nearly 400 experts and scholars in the field of AI**, including Geoffrey Hinton, the godfather of AI, Sam Altman, CEO of OpenAI, and Ilya Sutskever, its Chief Scientist, warns that AI could extinguish the human race! It states: "Mitigating the risk of extinction from AI should be a global priority alongside other societal-scale risks such as pandemics and nuclear war".
- **In July 2023, many open-source foundations and organizations from around the world held an international conference in Geneva** with the aim of exploring the relationship between AI and open-source, including the challenges and opportunities involved. The conference concluded that open source is essential in promoting AI innovation and cooperation, and is an effective means of ensuring AI ethics and social responsibility. Many experts from around the globe pointed out that open source is an inevitable trend in the development of AI. They also highlighted that open source makes AI research and application more transparent, fair, and credible. It allows more people to participate and contribute to the development of AI, preventing monopolization and abuse of AI.
- **Three Turing Award winners in the AI field - Andrew Ng, Geoffrey Hinton, and Yoshua Bengio - engaged in a lively debate on social media**. Their discussion focused on the U.S. government's restrictions and bans on AI technology. Andrew Ng criticized the U.S. bans, stating that they hinder the open exchange of AI and are detrimental to AI development and innovation. However, Hinton and Bengio argued that the U.S. bans are necessary controls on AI for security and ethical reasons.

The emergence and utilization of AI technology reflect the diverse ideologies and values worldwide, and their influence on the ongoing humanitarian crisis. AI is not merely a technological issue, but also a political, economic, and social one that necessitates international consensus and cooperation for the creation of sustainable and equitable AI development.

#### 3.2.2 AI Laws, Regulations and Policy Documents are emerging globally
In 2023, several laws, regulations, and policy documents related to AI were issued on a global scale. These included: 
- The Interim Measures for the Administration of Generative Artificial Intelligence Services were jointly announced by seven Chinese ministries and commissions, including China's National Internet Information Office.
- The Global Initiative on Artificial Intelligence Governance was issued by the Office of the Central Committee of the Communist Party of China's Committee on Cybersecurity and Informatization.
- The Executive Order on Safe, Reliable, and Trustworthy AI issued by the U.S. White House.
- The European Parliament, the EU member states, and the European Commission agreed upon the Artificial Intelligence Act.
- The Bletchley Declaration is an international declaration signed by representatives of the governments of 28 countries and the EU.

The documents of China's Global AI Governance Initiative and the European Union's Artificial Intelligence Act reflect the importance of promoting and protecting open source AI technology. For instance, China's initiative encourages the world to work together towards the healthy development of AI, sharing the knowledge and open sourcing AI technology. The EU's AI Act specifies that it does not apply to AI components provided under free and open source licenses unless they are part of a general base model or prohibited AI practices, or subject to transparency obligations as part of an AI system.

#### 3.2.3 Global open-source organizations are addressing new AI governance challenges
In June 2023, the Open Source Initiative (OSI) initiated the Defining Open Source AI campaign, which included online and offline global discussions and events to address the challenges of open-source AI governance. During the campaign, Kaiyuanshe actively participated in the mailing list discussions and organized the translation of the webinar series. The draft document of the Definition of Open Source AI, which has been published, consists of a preamble, a definition of Open Source AI, and a list of evaluation licenses. The document focuses on authorizing the use, study, modification, and sharing of AI systems.

The Apache Software Foundation published Generative AI Guidelines for Contributors in June 2023. The guidelines help contributors who use AI-generated code, documents, and images for ASF projects. They recommend disclosing the AI-generated part of contributions and labeling it as "Generated-by: ". The 

China Academy of Information and Communications Technology (CAICT) released a report titled "Compilation of Trusted Open Source Large Model Cases (Phase I)" in December 2023. The report provides a comprehensive overview of China's open-source large model industry, including technical aspects, application scenarios, business models, governance, and development trends. It serves as a reference guide for developing China's large model industry and analyzes the technology ecology of open-source large models and the industry chain.

#### 3.2.4 Open-source AI large models call for new types of licenses
Open source is becoming mainstream for AI large models, but traditional licenses can't meet their unique needs. New licenses are being explored.

The Open Source Initiative declared Meta's LLaMa license not open source due to commercial use limitations and purpose of use restrictions. Falcon-40B was also challenged for using a custom license with special restrictions and had to change to Apache 2.0. Hugging Face changed TGI's license from Apache 2.0 to HFOIL due to restrictions on selling hosted or managed services on TGI.

By 2023, Hugging Face will have almost half a million models available with different licenses, including Apache 2.0, MIT, and OpenRAIL. The OpenRAIL license is an upgrade from RAIL and has behavioral restrictions. It includes licenses for source code, applications, models, and data: OpenRAIL-S, OpenRAIL-A, OpenRAIL-M, and OpenRAIL-D.

China's domestic standards and research institutions are actively promoting innovative AI licensing practices. In May 2023, the China Academy of Information and Communications Technology (CAICT) jointly compiled and released the "Zhiyuan Open AI Model License Version 1." This license regulates the use of models (including their derivatives and supporting materials) but does not apply to the training data of the models. In August 2023, the Shanghai Jiao Tong University Intelligent Court Research Institute, along with the Artificial Intelligence Research Institute and Shanghai Magnolia Open Source and Open Research Institute, organized a workshop on designing the framework of the Mulan-Magnolia Open Data License 2.0. The license's function is to provide an open license for AI data. In December 2023, the OpenAtom Open Source Foundation and the Magnolia Open Source Community, the OpenI Qizhi Community, and other communities jointly developed the Mulan-Qizhi Model License (Beta). The license applies to models obtained through algorithmic training and supplementary materials, including model structure, parameters, weights, etc. However, it excludes the training models' algorithms and algorithmic source code.
> **Commentary**: 
> Wei Jianfan: I believe that these disputes will soon cease to exist, and as long as the law is clear, all similar problems will be solved.

#### 3.2.5 The development of China's open-source field standard is gaining momentum.
China supports open-source standards and will develop standards for open-source terminology, licenses, interoperability, project maturity, community operation, governance, and supply chain management for open-source software.

A new national standard for evaluating the open source code security of software products was drafted in April 2023 by the National Information Security Standardization Technical Committee, led by the China Academy of Information and Communications Technology. It is now open for public comment.

In July 2023, the Chinese Electronics Industry Standardization Technology Association (CESTA) approved three group standards related to open-source technology. These standards provide guidelines for open-source governance and project evaluation. They include T/CESA 1269-2023 Information Technology Open Source Terminology and Overview, T/CESA 1270.1-2023 Information Technology Open Source Governance Part 1: Overall Framework, and T/CESA 1270.4-2023 Information Technology Open Source Governance Part 4: Project Evaluation Model. The Chinese Research Institute of Electronic Technology (CRIET) released these standards. T/CESA 1270.4-2023 Information Technology Open Source Governance Part 4: Project Evaluation Model and three other open-source group standards have been approved and published for use.

In September 2023, the Chinese Academy for Electronic Technology Standardization formally approved four open-source standards. The China Electronics Industry Standardization Technology Association examined and approved these standards. The agreed standards are T/CESA 1270.2-2023 Information Technology Open Source Governance Part 2: Enterprise Governance Assessment Model, T/CESA 1270.3-2023 Information Technology Open Source Governance Part 3: Community Governance Framework, T/CESA 1270.5-2023 Information Technology Open Source Governance Part 5: Open Source Contributor Assessment Model, and T/CESA 1291-2023 Information Technology Open Source Metadata General Requirements. The Community Governance Framework, Open Source Contributor Assessment Model, and Information Technology Open Source Metadata Requirements are among the four open-source standards that have been formally approved and released.

In October 2023, two open-source software group standards were approved and released. These standards were titled "Open Source Software Governance Evaluation Methods Part 3: Maturity Models" and "Open Source Software Governance Evaluation Methods Part 5: Governance Tools and Platforms". The China Academy of Information and Communications Research (CAICR) led the development of these standards, and they were reviewed and supported by the China Association for Communications Standardization (CAICS).

## 4. Open Source Security Chronicle
In today's digital age, software has become an essential element that supports the normal functioning of our society. However, as the software supply chain becomes more complex, so do the security issues. The Log4Shell vulnerability recently brought open-source security into the spotlight. Despite 2022 being touted as the "Year of Supply Chain Security," the vulnerability is still widespread, and the rate of adoption of fixes is low. As a result, the frequency of attacks in the software supply chain has skyrocketed. The broad adoption of open-source code has turned supply chain security into an existential issue. Log4Shell has made headlines as it revealed the security risks present in the open-source community. Moreover, other projects that are heavily reliant on open-source in the ecosystem may have a more extensive reach and more severe consequences than Log4Shell. Supply chain attacks are on a sharp upward trend, averaging 742% annual growth since 2019. Therefore, we need to focus on improving the security of open-source software.

### 4.1 Latest trends and challenges
An analysis of the latest trends and challenges in open-source security, including the following:
- **Malware as a Service**: Hackers use open source code and tools to develop and distribute malware, creating a massive black market that threatens the security of the open source ecosystem.
- **Human Errors**: Open-source projects are vulnerable to attacks due to human errors, such as ignoring security updates, using weak passwords, and leaking sensitive information by developers and maintainers working with open-source code.
- **Supply Chain Attacks**: occur when hackers inject malicious code into open-source projects by manipulating repositories, dependency packages, or update channels, thereby compromising the reliability and trust of these projects.
- **Legal Risks**: Open source projects may face legal risks in complying with license agreements, dealing with copyright disputes, responding to policy changes, etc., which must be identified and resolved promptly.
- **Security Standards**: Open-source communities and organizations are developing and promoting some security standards and best practices, such as SLSA, OpenSSF, CII, etc., to improve the quality and security of open-source code.
- **Security Tools**: Open source projects can utilize some open source or commercial security tools, such as Snyk, Dependabot, CodeQL, etc., to detect and fix security vulnerabilities and improve security protection.
- **Security Education**: Open source projects need to strengthen security education and training, improve the security awareness and skills of developers and maintainers, establish a security culture and process, and prevent security risks.
- **Security Cooperation**: Open source projects must strengthen security cooperation with other open source projects, organizations, enterprises, governments, etc., share security information and resources, form a security community, and jointly address security threats.
- **Security Outlook**: The security landscape for open-source projects presents a mixed prospect. While the prevalence of increasingly intricate and severe security challenges is noteworthy, open-source projects are fortified by a sturdy and dynamic security force.

### 4.2 Legal liability of open source security
There is an ongoing debate concerning the legal liabilities of open-source software regarding security. The prevailing argument and accompanying legislation state that the authors of open-source software bear responsibility for any vulnerabilities detected in the code. Despite being offered free of charge, the authors are expected to guarantee the quality and security of their software. Vulnerabilities can cause significant harm, such as the compromise of user data and system attacks, making it imperative for authors to fix identified weaknesses and inform users promptly and swiftly. As such, the current trend in global legislation is to hold open-source legally accountable for cybersecurity.

- In **China**, providers of network products and services are forbidden from developing malicious programs. They must take immediate corrective action, promptly notify users according to regulations, and report to the relevant authorities if security flaws, loopholes, or risks are identified in their network products and services. Furthermore, network product and service providers must maintain ongoing security for their products and services. They are not permitted to terminate the provision of security maintenance within the period specified or agreed upon by the parties. If a network product or service can collect user information, its provider must obtain explicit consent and communicate this to users. Moreover, if personal information is involved, the provider must comply with the relevant laws and administrative regulations on personal information protection.
- **The EU Cyber Resilience Act (CRA)** aims to strengthen the cybersecurity of digital products in the EU by consolidating the existing cybersecurity regulatory framework. The Act imposes many cybersecurity requirements on digital products, including software. The Act is closely linked to the Highly Common Cybersecurity Directive (NIS 2 Directive), the Cybersecurity Act, the Artificial Intelligence Act, and the General Data Protection Regulation (GDPR). It could become one of the most critical EU cybersecurity laws.

### 4.3 Some important open source security incidents in 2023

#### 4.3.1 Log4j vulnerability resurrection
LLog4j is a tool for developers to track their programs. In Dec. 2020, a severe issue let hackers control computers using Log4j. Alibaba and Amazon were affected. The Log4j team quickly fixed it in Jan. 2021 with Log4j 2.15.0.

However, Log4j 2.15.0 has a new vulnerability, CVE-2021-44228. Attackers can exploit a Java problem by sending specific log messages. Log4j 2.16.0 turns off the Java feature in log messages to address this. Users must upgrade now and turn off unused logging. Use firewalls and intrusion detection to block malicious traffic. 

#### 4.3.2 Linux malware growth rate soars to 50%
Linux malware surged 50% to 1.9 million threats in 2022, with Trojans, botnets, ransomware and mining software used to steal data, control devices, and extort money. Infections spread through web services, email, web pages, and mobile devices exploiting vulnerabilities, weak passwords and social engineering. To protect against Linux malware, regularly update systems and software, use strong passwords and two-factor authentication, install reliable anti-virus software, and avoid opening suspicious links and attachments.

#### 4.3.3 New threats to the npm supply chain: "manifest confusion"
Manifest Confusion is a security problem that affects the npm registration process. Attackers exploit this vulnerability to hide harmful code or dependencies by providing incorrect manifest information that does not match the contents of a tarball package. This security issue can affect millions of npm users and projects, potentially leading to the theft of sensitive information, execution of remote commands, spreading malware, and more. Developers and maintainers can prevent this vulnerability by using npm shrinkwrap or package-lock.json to lock down dependency versions, using npm audit, avoiding installing packages from untrusted sources or mirrors, and checking that the manifest information matches the contents of the tarball package before releasing it.

#### 4.3.4 Electron's shocking Level 10 vulnerability!
Electron is a framework for cross-platform desktop apps. It has a significant vulnerability that lets hackers use a bad link to run harmful code. Apple and Google warned about this, but many apps have not been updated. The vulnerability is caused by an old version of Chromium. To fix it, Electron needs to use a newer version of Chromium. The Electron team has already released a new version that fixes the problem. It's important for developers to keep their software up-to-date and secure. Finally, developers should always check their code for vulnerabilities.

#### 4.3.5 Google awards $12 million for solving 2,900 vulnerabilities
Google's Vulnerability Reward Program (VRP) paid $12M in bonuses to security researchers from 68 countries who found 2,900 vulnerabilities in 2022. The highest reward for a single vulnerability was $605,000. The VRP now covers Google Nest and Fitbit.

#### 4.3.6 GitHub adds SBOM export feature to make it easier to comply with security requirements
GitHub's new feature helps developers quickly create and export software build bills of materials (SBOMs) to enhance security and transparency. SBOM documents contain information about the software components and dependencies used in the codebase. The resulting SBOM can be accessed from GitHub's Security Tab and exported as SPDX or CycloneDX-format files.

#### 4.3.7 OpenAI, Google, Microsoft and others create $10 million AI security fund
Tech companies and research organizations, including OpenAI, Google, and Microsoft, have created a $10 million fund for AI security and ethics research. The goal is to promote responsible and trustworthy AI development, prevent risks, and encourage more participation. The Fund will be managed by an independent committee, which will select the most outstanding projects for funding.

In brief, open-source software necessitates enhanced security risk governance mechanisms, including quality standards, security audits, vulnerability rewards, and shared responsibility. Similarly, open-source software necessitates more significant investment and support, including financial resources, workforce, and community engagement. The future of open-source software development relies on our response to the current situation and our ability to establish a more sustainable and secure open-source ecosystem.
    
## 5. Open Source Commercialization Chronicle

### 5.1 Early stage financing activities
    
- **DBeaver, an Open Source Database Management Tool, Secures $6 Million in Angel Round Funding**

    Open-sourced in 2013, DBeaver is a free and open-source general-purpose database management and development tool based on Java and running on a variety of operating systems. Its founders formed a commercialization company in 2017 to provide enterprise-level support and develop an enterprise version. DBeaver currently has 8 million users and more than 5,000 paying customers, including IBM, Samsung, and Moody's.

- **Open Source Large Model Company Together Raises $20 Million in Funding**

    Open-source prominent model startup Together, which hopes to "lead the Linux moment in AI by providing an open ecosystem across computational and best-in-class fundamental models," has secured a $20 million seed round of funding. Together is building a cloud-based platform for running, training, and fine-tuning open source models. One of Together's first projects, RedPajama, aims to foster open-source, generative models. Together now has a 1.2 trillion token training dataset in open source, allowing for commercialization.

- **Union AI, an open source AI and data stream orchestration platform, secures $19.1 million in Series A funding**

    Union AI provides Flyte hosting services (orchestrating ETL, machine learning workflows), has also built Pandera (a data testing framework) and Union ML (a framework that sits on top of Flyte to help teams build and deploy models using their existing toolsets), and this year launched the Union Cloud, which received $19.1 million in Series A funding funded by NEA.

- **MindDB, an Open Source DB for AI Company, Secures $25 Million Seed Funding Round**

    MindsDB is a platform that operates in the "DB for AI" scenario, connecting data and models using an AI-Table approach. This approach turns machine learning models into virtual tables in the database, enabling users to model directly in the database. It eliminates tedious steps such as data processing and building machine learning models and accelerates AI applications. In 2023, MindsDB received consecutive funding rounds totaling nearly $50 million.

- **Star Open Source LLM Company Mistral AI Raises Multiple Round of Funding, Ranks Among Unicorns**

    Mistral AI, founded by scientists from Meta and Google, recently released the open-source MOE large model Mixtral 8X7B, which has attracted enormous attention. Mistral AI has also completed multiple rounds of funding in the last year, securing $415 million in its most recent Series A round, and is currently valued at over $2 billion.

- **Model Continuous Testing Validation Tool Deepchecks Raises $14M Angel Round**

    Israeli company Deepchecks is positioned in the ML continuous test validation space, which allows customers to reuse and customize components to test ML models and datasets comprehensively. deepchecks launched an open-source version of its ML testing tool in 2020 and, earlier this year, launched a commercial version of the Deepchecks Hub.

    To date, the open source product Deepchecks has been downloaded more than 500,000 times, and its users include AWS, Booking.com, and Wix, among others. Deepchecks recently announced a $14 million angel round of funding.

- **Endor Labs, an Open Source Component Supply Chain Security Platform, Raises $70 Million in Series A Funding**

    Endor is positioned to help organizations monitor the security posture of their development pipeline, including both reachable and exploitable risks, manage developer access to code, and keep a close eye on the secrets hard-coded into their code base. They recently secured $70 million in Series A funding led by Lightspeed Venture Partners.

- **AutoGPT Closed $12 Million Financing Round**

    AutoGPT uses language models such as GPT-4 and GPT-3.5 to build multifunctional intelligence that can perform tasks independently and continuously improve performance. The project has been online for over 50 days and has 131k stars and 26.7k forks, making it one of the fastest-growing projects in GitHub's history.

### 5.2 Mid to late stage financing activities
    

- **UK-based MLOps company Seldon secures $20 million in Series B funding**

    Seldon was established in 2014 to address the issues of deployment, monitoring, management and interpretation of AI Model at the production level.2020 A Revolving Finance to date, Seldon's open-source product installation has increased by YoY 400%.

- **Temporal Secured $75 Million in Funding**

    Temporal, a startup based on Cadence, Uber's open-source distributed task orchestration and scheduling engine, has secured $7,500 million in a new round of funding, giving it a pre-investment valuation of $1.4 billion.

- **SAST/SCA Open Source Security Vendor Semgrep Raises Series C Funding**

    Semgrep entered the SAST space with its SAST (Static Application Security Testing) engine, which users can integrate with their CI/CD processes and code hosting platforms such as Github, Gitlab, etc., to inspect code using Semgrep's built-in and customized rules. Semgrep open-sourced its product in 2020 and already has over 2 million users and 7.5x revenue growth in 2022 compared to 2021.

- **French AI Research Lab Kyutai Receives $330 Million Investment, Aims to Open Source All Results**

    French billionaire and CEO of Iliad, Xavier Niel, has started an AI research lab in Paris called Kyutai. It's a privately funded non-profit organization focusing on research in artificial general intelligence. The lab has raised nearly €300 million in funding so far. Kyutai focuses on basic AI modeling, supported by top-tier computing resources in the form of Nvidia H100 GPUs from Scaleway.

- **Open Source Platform Replicate Secures $40 Million in Series B Funding**

    Replicate, an open-source machine learning modeling platform has announced the successful completion of a $40 million Series B funding round led by Andreessen Horowitz (a16z) to continue to enhance its open-source machine learning modeling platform.

### 5.3 Mergers and acquisitions (M&A)
    
- **AMD Acquires Open Source AI Software Nod.ai**

    AMD announced on its website the signing of a definitive agreement to acquire Nod.ai, which will accelerate the deployment of optimized artificial intelligence solutions on AMD's high-performance platforms and enhance AMD's open-source software strategy.

- **Snowflake intends to Acquire Ponder to Enhance Its Data Cloud Python Capabilities**

    Ponder is a leading company that connects popular data science libraries to where the data is and maintains the widely used open-source library Modin for scalable Pandas operations. Snowflake has announced its intent to acquire Ponder to serve Python data practitioners better.

- **Cisco announces plans to acquire cloud-native cybersecurity startup Isovalent**

    Isovalent is committed to developing two critical open-source technologies, eBPF and Cilium, that provide deep insight into operating systems and cloud-native applications. Isovalent is essential to the Cloud Native Computing Foundation (CNCF) and the eBPF Foundation. Continued community support is vital to keep these open-source projects active.

## 6. Open Source Education Chronicle

In the China Open Source Annual Report, a new element, "Open Source Education," has been added to its list of milestones for the year. The definition of open-source education may vary among distinct organizations. This chapter aims to provide unambiguous clarity by defining open-source education as the utilization of open-source software and open educational resources to support educational goals. **This encompasses the utilization of open-source software tools, teaching materials, and instructional resources, while promoting knowledge sharing and collaboration. One of the primary objectives of open-source education is to offer more inclusive and equitable educational opportunities, thereby enabling more individuals to access high-quality educational resources.**

In the open-source education model, educational resources like teaching plans, course content, and software tools are openly available to everyone. This means that anyone can use, modify, and share them. This model is highly beneficial in fostering students' innovative thinking, collaborative skills, and problem-solving abilities. By participating in open-source projects, students can gain exposure to the latest technologies and tools in the industry. They can also get a better understanding of the actual process of software development and contribute their own strengths to the open-source community.

At the same time, as the drafting party of the report, "Open Source Education" is not unfamiliar to the Open Source Society. Since its establishment in 2014, the Open Source Society has actively explored the integration of open source and education. Before formally introducing the milestones of open source education in 2023, let's review the work done by the Open Source Society in the field of open source education:

- In 2014, the Open Source Society initiated the first series of open source on-campus activities in China—"Open Sourcers on Tour";
- In 2017, the Open Source Society's executive committee established working groups dedicated to open-source education, such as the Open Education Group and University Collaboration Group;
- In 2018, the Open Source Society held the third China Open Source Conference (COSCon'18), which produced China's first "Open Source Education Track";
- In 2019, the Open Source Society, in partnership with East China Normal University, established China's first "Open Source Education Fund";
- In 2020, the Open Source Society produced the "Open Source Bootcamp" series, aiming to provide introductory training for open source education;
- In 2021, the Open Source Society invited six guests to share their insights on open-source education at the sixth China Open Source Conference (COSCon'21), and for the first time, invited open-source students from universities to discuss open-source education topics;
- In 2022, the Open Source Society actively began to explore directions related to open source education and training, such as specialized corporate open source training;
- In 2023, the Open Source Society, for the first time, set up a "Youth Open Source Education" track at the eighth China Open Source Conference (COSCon'23), inviting young students from primary and secondary schools to share their views on open source.


The integration of open-source principles with education has significantly deepened over the years. The Open Source Organization's development in "Open Source Education" has expanded the audience for open-source education from open-source communities to higher education institutions, secondary and primary schools, and even to a broader demographic of employed individuals.

Despite this progress, there is still a global need for more skilled open-source professionals. The Linux Foundation's "10th Annual Open Source Jobs Report" reveals that 93% of employers struggle to find professionals with adequate open-source skills, and the situation is not improving. Nearly half of these employers (46%) plan to increase their recruitment of open-source talent in the next six months. Additionally, 73% of open-source professionals report ease in finding new employment opportunities to continue their open-source endeavors.

This talent scarcity has elevated the importance of open-source education worldwide. China is actively fostering its open-source education landscape by encouraging participation in open-source community activities, soliciting contributions to open-source projects, establishing robust open-source education systems, and setting standards for evaluating open-source competencies. These efforts aim to stimulate a thriving open-source ecosystem and nurture talent. By doing so, students and professionals can gain a more profound understanding of the ethos behind open-source software, facilitating the integration of theory with practice, enhancing educational quality, and meeting the societal demand for innovative individuals. 

Lastly, let's review the significant milestones in China's open-source education journey during 2023.

### 6.1 Open-source education has been thriving with interactive practices, project-based learning, and innovation competitions

In 2023, China saw a significant increase in open-source educational activities. Some of the significant practical activities that took place include:

- **Open Source Promotion Plan (OSPP)**: Guided by the Institute of Software, Chinese Academy of Sciences, this summer program aimed to encourage students to participate in open-source software development. In 2023, 3,475 students from 592 universities registered, and 504 students were successfully selected.

- **GitLink Open Source Programming Summer Camp (GLCC)**: Hosted by the China Computer Federation, this event saw 341 students from 139 universities participate in 2023.

- **The Sixth China Software Open Source Innovation Competition**: Guided by the Department of Information Science, National Natural Science Foundation of China, and hosted by CCF, this competition focuses on "bottleneck" software fields and cutting-edge technologies, with multiple tracks.

- **The Twelfth "Kylin Cup" National Open Source Application Software Development Competition**: Guided by the China Software Industry Association, OpenAtom Foundation, the Open Source Development Committee of the China Computer Federation, and the China Open Source Software Promotion Alliance, this competition attracted 345 teams from over 60 universities.

- **2023 OpenAtom Open Source Competition**: Hosted by the Ministry of Industry and Information Technology, the People's Government of Jiangsu Province, and the People's Government of Hunan Province, this competition aimed to unite open-source organizations, enterprises, institutions, universities, research institutes, industry organizations, and investment and financing institutions.

- **The First China Postgraduate Operating System Open Source Innovation Competition**: Hosted by the China Postgraduate Innovation Practice Series Competitions, this event focused on open-source innovation in operating systems.

Additionally, the 2023 Open Source and Information Consumption Competition – The Fourth Industrial APP and Information Consumption Competition, hosted by the Ministry of Industry and Information Technology and other organizations, helps promote open-source education to the professional workforce.

These activities have enhanced students’ technical abilities and promoted the spread of open-source culture and the vitality of open-source communities, making significant contributions to the development of China’s open-source ecosystem.
    
### 6.2 Domestic open-source software & hardware education theory foundation is forming
    
In 2023, China's open-source education sector made significant progress in practice and saw a growing theoretical foundation. Teachers from higher education institutions and open-source experts began to pay more attention to the research on open-source education theory, publishing representative articles at different teaching levels and in various directions. These studies provided cases and theoretical analyses for open-source education, demonstrating its application potential in higher education and K12 education.

**In higher education**: Open-source education is regarded as an innovative teaching model that helps students acquire software and hardware development skills. For example, teachers from Peking University, East China Normal University, and Shanghai University of International Business and Economics have researched the application and value of open-source education in their respective disciplinary teachings.

**In K12 education**: Open-source education is often integrated with STEM, STEAM, robotics/uncrewed aerial vehicle (UAV) education, and maker education, mainly by including open-source hardware in teaching. For instance, teachers from Meihua Middle School in Zhuhai and Langya Road Primary School in Nanjing have explored the application of open-source hardware in project-based teaching.

Additionally, the Shanghai Education Commission's Educational Technology and Equipment Center hosted a symposium on the development of educational UAV and open-source hardware course resources, showcasing the application of open-source hardware in primary and secondary education. The open-source robotics sports event at the 11th Primary and Secondary STEAM Education Conference also demonstrated cases and new trends of open-source education in science and technology education in schools.

These activities and studies indicate that the future promotion of open-source education will differ between higher education and K12 education but will tend toward developing open-source general education and open-source software and hardware development education. Open-source education not only helps to enhance students' technical abilities but also promotes innovative thinking and teamwork spirit, contributing to the diversified development of China's education system.

Articles exploring the integration of open-source education and higher education include:
- "Exploration of a Dual-Track Open-Source Teaching Model under Industry-Education Integration: A Case Study of Peking University's 'Open-Source Software Development Fundamentals and Practice' Course" by Jing Qi and Hui Feng.
- "Insights into the Future of Open-Source Education from the Digitalization of Open-Source Technology" by Wei Wang and Shengyu Zhao.
- "The Value and Significance of Introducing Open-Source Education into Higher Education Institutions" by Guofeng Zhang.
- "Research on Software Engineering Education Integrating Open-Source Software Ideas and Examples" by Huang Haowei.
- "Construction of a New Medical Mathematics Curriculum Group Based on Blockchain from the Perspective of Open-Source Education in Colleges" by Xiaona Wang, Dan Ding, and Ge Ban.
- "Cultivation of Innovative Software Talent in the Open-Source Ecosystem" by Tao Zhuo, Kai Wang, and Wei Ge.

Articles exploring the integration of open-source education and K12 education include:
- "Exploration of Open-Source Hardware Project-Based Teaching Practice under the STEM Education Concept: A Case Study of 'Creative Illuminated Clothing'" by Suo Fang.
- "Promoting the Education of Young Masters Based on an Open-Source Architecture Project Research Community" by Yi Dong Qi.
- "Research on Open-Source Hardware Chips for Information Technology Education" by Lizhi Xin, Zhang Xiangling, Yao Ziming.
- "Injecting New Vitality into Education with Maker and Open-Source Hardware" by Jun Xi.


### 6.3 Open-source education forums are gaining momentum, with the open-source and education community continuing to grow.
    
In 2023, the development of open-source education in China showed a clear upward trend, as evidenced by the increased number, frequency, and quality of conferences dedicated to discussing open-source education. These conferences highlighted the influence of open-source education and fostered deep communication and collaboration between the educational and open-source communities.

Some notable conferences and forums include:
- **2023 GAIDC Global Developer Vanguard Conference**: This international developer conference featured an open-source technology forum showcasing the global application and development of open-source initiatives.
- **The 2nd China Open Source Education Symposium (SOSEC-2) and The 3rd China Open Source Education Symposium (SOSEC-3)**: Held in Guangzhou and Shanghai, respectively, these symposia focused on the current state and future trends of open-source education in China.
- **National College New Business Open Source Innovation Education Symposium**: Held in Shanghai, this event explored open-source applications in education, particularly its integration with business education.
- **The 4th China Computer Education Conference**: The first Computer Open Source Education Forum was part of this conference, emphasizing the importance of open-source in computer education.
- **2023 Zhongguancun Forum – World Open Source Innovation Development Forum**: Themed around "Open Science and Open Source Education," this forum discussed the role of open-source education in scientific research.
- **GOTC 2023**: Hosted the Linux Foundation's Open Source Education and Talent Development Summit, highlighting the crucial role of open-source technology in talent cultivation.
- **2023 OpenAtom Global Open Source Summit**: The successful convening of the Open Source Education and Talent Track further promoted the discussion and practice of open-source education globally.
- **COSCon'23 The 8th China Open Source Conference**: Featured a "Youth Open Source Education" track, inviting young OpenTeen primary and secondary school students to share their experiences with open-source practices.
    
Hosting these events and forums increased the influence of open-source education in academia and industry. It provided a platform for educators, students, and open-source community members to exchange ideas, promoting the sharing of open-source educational resources and the dissemination of best practices. As open-source education forums rise in prominence, integrating open-source and education is becoming a new trend in educational innovation and talent development.


### 6.4 The cultivation and certification of open-source talent is gradually becoming a standardized system.
    
In 2023, China's open-source education sector reached a significant milestone by initiating the "Open Source Talent Competency Requirements and Evaluation Standards." This standard is being developed under the leadership of the Ministry of Industry and Information Technology's Talent Exchange Center in partnership with the OpenAtom Foundation. The development meeting was attended by 36 experts from various universities and companies, including Beijing University of Aeronautics and Astronautics, Beijing Institute of Technology, East China Normal University, Huawei, Baidu, Tencent, and Xiaomi, signaling the formal inclusion of open-source talent education into the national talent cultivation strategy. Establishing this standard is crucial for constructing China's open-source talent development ecosystem, as it will help promote the high-quality development of open-source software and technology by establishing a set of scientific, industry-recognized talent competency standards through research, analysis, and refinement.
    
Moreover, the training of open-source educators has become an essential area of exploration. For instance, the Changsha Software and Information Technology Service Industry Promotion Association hosted the 2023 Hunan Province Higher Education OpenHarmony Faculty Training, aimed at deepening college teachers' application and understanding of OpenHarmony, enhancing their ability to teach and develop based on OpenHarmony and building a robust educational information and creation ecosystem.
    
These initiatives and developments indicate that China is actively establishing a standardized system for cultivating and certifying open-source talent. This will help enhance the professional capabilities of open-source talent and promote the widespread application and innovative development of open-source technology in the education sector. As the open-source education system continues to improve, more high-quality open-source talent is expected to emerge, starting from China, contributing to the global open-source community.


### 6.5 Enterprises are increasingly involved in open-source education, giving rise to a new model of industry-university-research cooperation.
    
In 2023, Chinese enterprises significantly increased their involvement in open-source education, forging more open and in-depth partnerships with universities. These collaborations typically involve integrating real-world open-source projects into the academic setting, enabling students to engage in meaningful, high-caliber open-source initiatives rather than mere operational tasks. Here are examples of such corporate-academic collaborations:
    
- **Answer Project**: This project, chosen as the capstone project for Peking University's Guanghua MBA program, allows students to participate in live open-source projects.
- **CloudWeGo Project**: Integrated into Peking University's graduate curriculum, it allows students to work on enterprise-backed open-source projects; it also collaborates with Nanjing University and Zhejiang University to foster campus partnerships and open-source talent development.
- **openKylin**: Established an academic station at Tianjin University of Science and Technology, focusing on cultivating open-source talent.
- **PingCAP**: Donated three years of partnership with the China Computer Federation (CCF) China Database Summer School, providing complete engineering practice experiments; signed a joint doctoral training agreement with East China Normal University to foster high-level talent in critical software.
- **OceanBase**: Collaborates with East China Normal University to tackle technical challenges and lead in distributed database research innovation and open-source talent cultivation.
- **StoneDB**: Completed the first intern training, attracting students from multiple renowned universities to focus on cultivating open-source database talent.
- **Tencent**: Supports open-source talent development through the "OpenAtom Campus Source Line" project and launched the RhinoBird Open Source Talent Plan for 2023, assisting in cultivating open-source talent at universities.
- **Shenkaihong**: Co-hosted an open-source Hongmeng talent training workshop with the Beijing Institute of Technology and established the "Open-source Hongmeng Talent Class" with multiple schools.
- **Tuowei Information**: Its subsidiary KAIHONGZhiGu was involved in the Yali Lu Gu Middle School project, which was selected as a "2023 Smart Education Excellence Case."
- **CSDC**: Collaborated with Beijing Institute of Technology and Shenkaihong to establish the first "Open-source Hongmeng Talent Class" in the Information Technology Innovation College.
- **Shenkaihong**: Collaborated with Southeast University to cultivate university open-source talent and promote the development of the OpenHarmony talent ecosystem.
- **Honghu Wanlian**Established a national OpenHarmony (Open-source Hongmeng) intelligent terminal and IoT industry integration of the production and education community in collaboration with multiple schools and companies.
    
These partnerships offer students hands-on experience with real-world open-source projects and facilitate the exchange of knowledge and technology between enterprises and academia. Through these collaborations, enterprises gain insights into students' abilities and needs. In contrast, university students can collaborate directly with industry experts, which is invaluable for honing their technical skills and professional acumen. Furthermore, these partnerships contribute to advancing and popularizing open-source technology and generating innovative contributions to the open-source community.


### 6.6 University open-source education programs are becoming more robust, and universities are enthusiastic about participating in open-source projects.
    
In 2023, Chinese universities have made significant strides in open-source education, with many institutions advancing the cause by introducing specialized courses, the establishment of alliances, and collaborations with enterprises. Tsinghua University, Beijing University of Aeronautics and Astronautics, Zhejiang University, Shanghai Jiao Tong University, East China Normal University, and nearly a hundred other universities nationwide have announced plans to roll out open-source software courses over the next three years. These courses will cover foundational subjects such as open-source professional technologies and digital public goods, aiding students in understanding the architecture of open-source knowledge from the ground up and accelerating the cultivation of talent in crucial software domains. Here are some specific examples:

- **Peking University**:
    - Collaborated with DouGe and GitLink to create an online practical course, "OSS Development: Open-Source Software Technology," combining theory and practice to develop students' open-source software development skills.
- **Tsinghua University**:
    - Hosted a 2023 autumn and winter open-source operating system boot camp, where students honed their programming skills by writing the code in Rust.
- **East China Normal University**:
    - Introduced the course "OSS101: Open-Source Software Literacy," which aims to cultivate students' open-source awareness and skills.
    - Led establishing the CCF Information System Professional Committee's Open-Source Education Working Group and created an "Institution-Course-Competition-Certification" integrated open-source talent development system to drive the growth of open-source education.
- **South University of Science and Technology**:
    - Participated in establishing an open-source university alliance at the Qizhi Developer Conference, which is dedicated to fostering the Greater Bay Area's open-source ecosystem and talent development and has a national impact.
- **Beijing Institute of Technology**:
    - Collaborated with Shenkaihong to hold an open-source Hongmeng talent training and scientific research cooperation workshop, enhancing industry-academia collaboration and improving the quality of talent development.

These initiatives and courses not only enrich the open-source education curriculum in universities but also boost student engagement in open-source projects. Through these practices, students gain a deeper understanding of the development process of open-source software, acquire relevant skills, and participate in the open-source community. These efforts are instrumental in nurturing high-quality open-source talent that meets the needs of modern digital economic development and promoting the popularization and application of open-source technology in China.


### 6.7 Diverse parties are driving the "Open Source into Campus" initiative to garner student interest.
    
In 2023, one of the most noticeable activities in open-source education was the "Open Source into Campus" campaign, organized by various organizations such as the OpenAtom Open Source Foundation, the Open Source Development Committee of the China Computer Federation (CCF), the Open Source Promotion Plan (OSPP) organizing committee, and Hongshan Open Source.
- **OpenAtom Open Source Foundation**
    - The OpenAtom Open Source Foundation and Tencent initiated the "OpenAtom Campus Source Tour" public welfare project. Together, they explore new paths of industry-education integration by establishing university open-source communities, popularizing open-source culture, and developing open-source curriculum systems.
- **CCF Open Source Development Committee**
    - The "Open Source University Tour" series initiated by the Open Source Development Committee of the China Computer Federation was successfully held at prestigious universities like Tsinghua, Peking, Beihang, and Fudan, leaving a significant impact and achieving successful practices.
- **OSPP Organizing Committee**
    - To enable more students to understand and participate in open-source projects deeply, the OSPP organizing committee partnered with many excellent open-source communities to launch the "OSPP Campus Tour." The OSPP Campus Tour series aims to ignite the energy and vitality of the new generation of developers, allowing more students to gain an in-depth understanding of well-known open-source technologies, projects, and communities both domestically and internationally and to popularize open-source culture in more universities.
- **Hongshan Open Source**
    - The Hongshan Open Source community launched the "Hongshan Open Source University Tour" for key universities and directions, enhancing the community's influence and popularity and attracting more outstanding innovative resources to construct the open-source creation ecosystem.

Such activities are expected to become one of the main channels through which college students can access open-source education in the future.


### 6.8 China's policies related to open-source education

In 2023, while notable advancements were made in the practical application of open-source education in China, supportive policies at the national level were relatively scarce.

Certain local governments, however, have started to recognize and foster the growth of open-source education. For instance, on December 29, 2022, the Changfeng Alliance Think Tank Base submitted "Suggestions for Strengthening Open-Source Talent Education in Beijing," which systematically addresses open-source talent education's current state and challenges. The proposal advocates for enhancing open-source talent training by the Beijing municipal government. As a leading hub for China's open-source ecosystem, Beijing's role in advancing open-source talent education is pivotal, contributing to the cultivation of software talent aligned with industrial demands, establishing a sustainable open-source ecosystem, and enhancing software technological innovation and supply capabilities.

Furthermore, the "Guide for the Construction of Demonstration Software Colleges with Characteristics (Trial)" jointly issued by the Ministry of Education and the Ministry of Industry and Information Technology in 2020 has prompted universities to engage more deeply in open-source education. The guide underscores the importance of cultivating software talent with distinctiveness, exploring professional development patterns, and focusing on the specific needs of open-source talent in critical areas such as foundational software, industrial software, and emerging platforms. It also encourages cultivating vital open-source projects and gathering outstanding talent, providing robust support for industrial innovation.

Despite the limited dissemination of policy-related messages in 2023 (which may be amid formulation), existing policy documents have already positively impacted open-source education. As we look ahead to 2024, more national-level policies are anticipated to be released, further guiding and promoting the practice of open-source education in China.

## 7. Open source ranklists and reports summary

Besides KAIYUANSHE, multiple media outlets, organizations, and institutions have published numerous open-source-related rank lists, reports, blue papers, and more. To provide readers with a comprehensive understanding of this topic, we have compiled a summary in this section.

### 7.1 A few valuable reports

- In February 2023, KAIYUANSHE released the **China Open Source Annual Report 2022**, which has four parts: questionnaire, data, commercialization, and chronicles. The questionnaire includes data analysis measures and reports on open-source community metrics and commercialization. X-lab Open Lab, Apache Devlake Community, and Gitee produce the data chapter. Yunqi Partners wrote the commercialization chapter and focused on promoting open-source software globally. The open source chronicles chapter comprises five parts: commercialization, security, technology, law, community, and ecology.
- In April 2023, the InfoQ Research Center released the **China Open Source Ecology Atlas 2023**. It's a user-friendly directory and map of China's open-source projects. The map includes 931 Chinese open-source projects, covering seven segments: operating systems, databases, artificial intelligence, cloud-native, big data, front-end, and middleware. Additionally, the map includes ecological organizations such as labs/institutes, open-source foundations, open-source industry alliances, developer communities, and code-hosting platforms.
- In June 2023, the China Open Source Promotion Union (COPU) collaborated with 106 organizations, including CSDN, the Institute of Software Research of the Chinese Academy of Sciences, the Open Atom Open Source Foundation, the Beijing Open Source Innovation Committee, the Open Source Society, OSChina, Peking University, East China Normal University, National University of Defense Technology, and more than 120 open source experts and volunteers. Together, they released the **2023 Blue Book of China's Open Source Development**, which provides a comprehensive overview of China's open source industry ecosystem in 2023. The book also showcases China's current open-source technology innovation and industrial development.
- In December 2023, the 2023 China Open Source Developer Report, co-authored by OSChina and Gitee, was officially released. The report is divided into three parts: Open Source Developer Event Review, 2023 LLM Technical Report, and Insight: New Open Source Trends for Chinese Developers.
- In December 2023, the iResearch Consulting Group published the **2023 China Open Source Infrastructure Software Industry Research White Paper**. This report examines the growth trajectory of China's open-source software by comparing and analyzing the development experiences of the domestic and international open-source software industries. The whitepaper summarizes the open source software industry chain and main drivers, analyzes the business model and value of open source software, examines the main characteristics of open source projects and all the parties involved in the industry, and presents readers with an ecological landscape of the open source industry rooted in China.
- The China Academy of Information and Communications Technology (CAICT) Trusted Open Source Team has been researching open source for an extended period. In 2023, they released a series of trusted open-source reports, which include "Panoramic Observations on China's Enterprise Open Source Governance", "O"pen Source Intellectual Property R"ig"hts Casebook (Copyright Chapte"r)", "Digital Public Goods Insight Report", "OSPO Case Compilation (Issue 2)", research reports or casebooks on open source technologies for front-ends, databases, and communications, and other research reports or case collections on open source technology for niche industries.

### 7.2 A reference-worthy ranklist
    
- **The 2023 Open Source Innovation List** is a selection activity co-sponsored by the Science and Technology Communication Center of the China Association for Science and Technology, the China Computer Federation, the China Institute of Communications, and the Institute of Software, Chinese Academy of Sciences. It is being undertaken by CSDN and evaluated by over 20 open-source experts from national associations, universities, research institutes, enterprises, open-source foundations, and industry alliances. The selection process is serious and rigorous.
- A new initiative called **China Open Source Coding Hero** has been launched by SegmentFault, KAIYUANSHE, and X-lab Lab. Each year, 99 developers from China are ranked according to their contribution to open source development using the OpenRank algorithm. These developers are recognized for their valuable contributions to the open source community.
- **OSS Compass**: Released in February 2023, OSS Compass is a platform for open-source ecological health assessment (https://oss-compass.org), open to all open-source projects on GitHub, Gitee, and other platforms. The platform is jointly initiated and collaboratively developed by the National Industrial Information Security Development and Research Center, Open Source China, Nanjing University, Huawei, Peking University, the New Generation of Artificial Intelligence Open Source Open Platform (OpenI), Baidu, and Tencent Open Source. At the same time, the platform itself is an open-source project around which an open-source and open-minded community has been formed. The platform has built an open-source ecological assessment system that includes three dimensions of productivity, robustness, and innovation, covering 14 indicator models.
- **Alibaba Open Source Developer Contribution List**: a list that ranks open-source developers based on their contributions. This list uses the OpenRank algorithm. Two PhD students conducted research on the impact of this list. They analyzed statistical indicators of community projects and interviewed developers. The research provides valuable insights to the open-source community and has been included in ICSE 2024.

### 7.3 Ranklist to watch
    
- **China's Open Source Pioneers** is a list of 33 individuals from previous years whom Open Source Pioneers recommended. This list is co-organized by SegmentFault and KAIYUANSHE and is based entirely on preference. The selection process starts with a simple idea: "I want to introduce this friend, an open-source person, to you." The nominees are then voted on based on the principle: "I'd love to meet this friend, an open-source person, and I hope more people will meet this friend." This list is an excellent resource for anyone interested in open-source pioneers and is worth checking out to learn more about these individuals.
- **OSC China Open Source Project Selection List**：OSChina conducted a series of selection activities in 2021 and 2022, which included evaluating the health of Chinese open source project communities, identifying the most popular Chinese open source projects, recognizing excellent international open source projects in the Chinese community, and more. However, for some reason, these selection activities were not continued in 2023.

### 7.4 Worthless rank list
    
- There is an organization called the "International Testing Committee BenchCouncil" that claims to have created a fair and scientific process for ranking open source contributors. They have published a list claiming to be "the world's first open source contribution list." However, the list ranks Linus, the creator of the Linux operating system kernel, only at 12th place, which seems absurd.
