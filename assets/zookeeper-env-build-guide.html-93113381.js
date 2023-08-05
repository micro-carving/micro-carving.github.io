import{_ as i,W as r,X as l,Y as e,Z as n,$ as s,a1 as o,C as t}from"./framework-158a71b3.js";const c="/assets/zookeeper-dir-load-737853cd.png",p="/assets/zookeeper-docker-status-f4cdd9b2.png",d="/assets/zookeeper-docker-cli-be00c575.png",v="/assets/zookeeper-inspector-cb69684d.png",u={},k=o(`<h2 id="dockerdesktop-版本-win10" tabindex="-1"><a class="header-anchor" href="#dockerdesktop-版本-win10" aria-hidden="true">#</a> DockerDesktop 版本（win10）</h2><h3 id="下载-zookeeper" tabindex="-1"><a class="header-anchor" href="#下载-zookeeper" aria-hidden="true">#</a> 下载 zookeeper</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 搜索镜像</span>
<span class="token function">docker</span> search zookeeper

<span class="token comment"># 拉取最新版本镜像</span>
<span class="token function">docker</span> pull zookeeper:latest

<span class="token comment"># 查看 zookeeper 详细信息</span>
<span class="token function">docker</span> inspect zookeeper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="启动容器" tabindex="-1"><a class="header-anchor" href="#启动容器" aria-hidden="true">#</a> 启动容器</h3><h4 id="创建挂载目录" tabindex="-1"><a class="header-anchor" href="#创建挂载目录" aria-hidden="true">#</a> 创建挂载目录</h4><figure><img src="`+c+`" alt="创建挂载目录" tabindex="0" loading="lazy"><figcaption>创建挂载目录</figcaption></figure><ul><li>data：数据挂载目录</li><li>config：配置文件挂载目录</li><li>logs：日志文件挂载目录</li></ul><h4 id="新增-zoo-cfg-配置文件" tabindex="-1"><a class="header-anchor" href="#新增-zoo-cfg-配置文件" aria-hidden="true">#</a> 新增 <code>zoo.cfg</code> 配置文件</h4><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>dataDir=/data
clientPort=2181
dataLogDir=/datalog
tickTime=2000
initLimit=5
syncLimit=2
autopurge.snapRetainCount=3
autopurge.purgeInterval=0
maxClientCnxns=60
standaloneEnabled=true
admin.enableServer=true
server.1=localhost:2888:3888;2181
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="单节点启动" tabindex="-1"><a class="header-anchor" href="#单节点启动" aria-hidden="true">#</a> 单节点启动</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 创建 docker 网络</span>
<span class="token function">docker</span> network create zookeeper

<span class="token comment">## 启动</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> zookeeper <span class="token parameter variable">--network</span> zookeeper <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-p</span> <span class="token number">2181</span>:2181 <span class="token parameter variable">-v</span> D:/DockerDesktop/docker-container-workspace/zookeeper/config:/conf <span class="token parameter variable">-v</span> D:/DockerDesktop/docker-container-workspace/zookeeper/data:/data <span class="token parameter variable">-v</span> D:/DockerDesktop/docker-container-workspace/zookeeper/logs:/datalog <span class="token parameter variable">-d</span> zookeeper:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong></p><p><code>--name zookeeper</code>：容器名称为 zookeeper <br><code>--network zookeeper</code>：连接容器网络 <br><code>--restart=always</code>：自启动 <br><code>-p 2181:2181</code>：将容器的服务端口映射到宿主机端口（宿主机端口:容器端口） <br><code>-v xxx/config:/conf</code>：容器启动配置文件挂载，将本地的配置文件路径映射到容器的配置路径 <br><code>-v xxx/data:/data</code>：容器启动数据目录挂载，容器数据自动映射到本地数据目录 <br><code>-v xxx/logs:/datalog</code>：容器启动日志目录挂载，容器日志自动映射到本地日志目录 <br><code>-d zookeeper:latest</code>：指定最新版本的镜像以容器方式在后台启动 <br></p></blockquote><h4 id="进入容器" tabindex="-1"><a class="header-anchor" href="#进入容器" aria-hidden="true">#</a> 进入容器</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入 zookeeper 容器内部</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> zookeeper /bin/bash
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="检查容器状态" tabindex="-1"><a class="header-anchor" href="#检查容器状态" aria-hidden="true">#</a> 检查容器状态</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 检查容器状态</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> zookeeper /bin/bash ./bin/zkServer.sh status
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+p+`" alt="检查容器状态" tabindex="0" loading="lazy"><figcaption>检查容器状态</figcaption></figure><h4 id="使用容器客户端" tabindex="-1"><a class="header-anchor" href="#使用容器客户端" aria-hidden="true">#</a> 使用容器客户端</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 进入容器并使用 zookeeper 客户端</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> zookeeper zkCli.sh
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>使用如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 创建持久化节点，节点名称为 \`/test\`，数据为 “测试”</span>
create /test <span class="token string">&#39;测试&#39;</span>

<span class="token comment"># 获取节点数据</span>
get /test
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+d+'" alt="zookeeper 容器客户端" tabindex="0" loading="lazy"><figcaption>zookeeper 容器客户端</figcaption></figure>',22),m={href:"https://zookeeper.apache.org/doc/r3.8.2/zookeeperCLI.html",target:"_blank",rel:"noopener noreferrer"},b=e("h3",{id:"参考",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#参考","aria-hidden":"true"},"#"),n(" 参考")],-1),h={href:"https://zookeeper.apache.org/",target:"_blank",rel:"noopener noreferrer"},g={href:"https://juejin.cn/post/7103406988079398942",target:"_blank",rel:"noopener noreferrer"},f={href:"https://blog.csdn.net/fengxiandada/article/details/124697818?ops_request_misc=%257B%2522request%255Fid%2522%253A%2522167196774816800186589963%2522%252C%2522scm%2522%253A%252220140713.130102334..%2522%257D&request_id=167196774816800186589963&biz_id=0&utm_medium=distribute.pc_search_result.none-task-blog-2~all~top_positive~default-1-124697818-null-null.142%5Ev68%5Econtrol,201%5Ev4%5Eadd_ask,213%5Ev2%5Et3_control2&utm_term=docker%E5%AE%89%E8%A3%85zookeeper&spm=1018.2226.3001.4187",target:"_blank",rel:"noopener noreferrer"},z=o(`<h2 id="docker-命令行版本-centos-7" tabindex="-1"><a class="header-anchor" href="#docker-命令行版本-centos-7" aria-hidden="true">#</a> Docker 命令行版本（CentOS 7）</h2><p>由于和 win10 下面的 docker 命令差不多，这里不再过多赘述，只贴出命令汇总，如下所示：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 拉取最新版本镜像</span>
<span class="token function">docker</span> pull zookeeper:latest

<span class="token comment">## 创建文件目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/你的用户名/docker/zookeeper/config
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/你的用户名/docker/zookeeper/data
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/你的用户名/docker/zookeeper/logs

<span class="token comment">## 或者</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/你的用户名/docker/zookeeper/<span class="token punctuation">{</span>config,data,logs<span class="token punctuation">}</span>

<span class="token comment">## 赋予文件权限，防止容器启动失败</span>
<span class="token function">chmod</span> <span class="token parameter variable">-R</span> <span class="token number">777</span> /home/你的用户名/docker/zookeeper/

<span class="token comment">## 新增如下内容到 /home/你的用户名/docker/zookeeper/config/zoo.cfg 配置文件</span>
<span class="token assign-left variable">dataDir</span><span class="token operator">=</span>/data
<span class="token assign-left variable">clientPort</span><span class="token operator">=</span><span class="token number">2181</span>
<span class="token assign-left variable">dataLogDir</span><span class="token operator">=</span>/datalog
<span class="token assign-left variable">tickTime</span><span class="token operator">=</span><span class="token number">2000</span>
<span class="token assign-left variable">initLimit</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token assign-left variable">syncLimit</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token assign-left variable">autopurge.snapRetainCount</span><span class="token operator">=</span><span class="token number">3</span>
<span class="token assign-left variable">autopurge.purgeInterval</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">maxClientCnxns</span><span class="token operator">=</span><span class="token number">60</span>
<span class="token assign-left variable">standaloneEnabled</span><span class="token operator">=</span>true
<span class="token assign-left variable">admin.enableServer</span><span class="token operator">=</span>true
<span class="token assign-left variable">server.1</span><span class="token operator">=</span>localhost:2888:3888<span class="token punctuation">;</span><span class="token number">2181</span>

<span class="token comment">## 创建 docker 网络</span>
<span class="token function">docker</span> network create zookeeper

<span class="token comment">## 启动</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> zookeeper <span class="token parameter variable">--network</span> zookeeper <span class="token punctuation">\\</span>
<span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-p</span> <span class="token number">2181</span>:2181 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/你的用户名/docker/zookeeper/config:/conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/你的用户名/docker/zookeeper/data:/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/你的用户名/docker/zookeeper/logs:/datalog <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> zookeeper:latest

<span class="token comment">## 进入 zookeeper 容器内部</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> zookeeper /bin/bash

<span class="token comment">## 检查容器状态</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> zookeeper /bin/bash ./bin/zkServer.sh status

<span class="token comment">## 进入容器并使用 zookeeper 客户端</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> zookeeper zkCli.sh

<span class="token comment">## 停止容器</span>
<span class="token function">docker</span> stop zookeeper

<span class="token comment">## 删除网络配置和容器</span>
<span class="token function">docker</span> network <span class="token function">rm</span> zookeeper
<span class="token function">docker</span> <span class="token function">rm</span> zookeeper
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="基于-docker-搭建-zookeeper-集群" tabindex="-1"><a class="header-anchor" href="#基于-docker-搭建-zookeeper-集群" aria-hidden="true">#</a> 基于 Docker 搭建 zookeeper 集群</h2><h3 id="基于-docker-普通方式启动集群" tabindex="-1"><a class="header-anchor" href="#基于-docker-普通方式启动集群" aria-hidden="true">#</a> 基于 docker 普通方式启动集群</h3><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment">## 分别创建 node1、node2、node3 目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/你的用户名/docker/zookeeper/node1/<span class="token punctuation">{</span>config,data,logs<span class="token punctuation">}</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/你的用户名/docker/zookeeper/node2/<span class="token punctuation">{</span>config,data,logs<span class="token punctuation">}</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/你的用户名/docker/zookeeper/node3/<span class="token punctuation">{</span>config,data,logs<span class="token punctuation">}</span>

<span class="token comment">## 三个节点下的 config 目录下的 zoo.cfg 配置填入如下相同配置</span>
<span class="token comment">## 同时设置 myid 标识，比如 node1 为 myid=1，node2 为 myid=2，依次类推</span>
<span class="token comment">## 除了 myid 不一样以外，其余配置均相同</span>
<span class="token assign-left variable">myid</span><span class="token operator">=</span><span class="token number">1</span>
<span class="token assign-left variable">clientPort</span><span class="token operator">=</span><span class="token number">2181</span>
<span class="token assign-left variable">dataDir</span><span class="token operator">=</span>/data
<span class="token assign-left variable">dataLogDir</span><span class="token operator">=</span>/data/log
<span class="token assign-left variable">tickTime</span><span class="token operator">=</span><span class="token number">2000</span>
<span class="token assign-left variable">initLimit</span><span class="token operator">=</span><span class="token number">5</span>
<span class="token assign-left variable">syncLimit</span><span class="token operator">=</span><span class="token number">2</span>
<span class="token assign-left variable">autopurge.snapRetainCount</span><span class="token operator">=</span><span class="token number">3</span>
<span class="token assign-left variable">autopurge.purgeInterval</span><span class="token operator">=</span><span class="token number">0</span>
<span class="token assign-left variable">maxClientCnxns</span><span class="token operator">=</span><span class="token number">60</span>
<span class="token assign-left variable">server.1</span><span class="token operator">=</span>node1:2888:3888
<span class="token assign-left variable">server.2</span><span class="token operator">=</span>node2:2888:3888
<span class="token assign-left variable">server.3</span><span class="token operator">=</span>node3:2888:3888

<span class="token comment">## 分别启动三个容器</span>
<span class="token comment">## 启动 node1 容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> node1 <span class="token parameter variable">--network</span> zookeeper <span class="token punctuation">\\</span>
<span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-p</span> <span class="token number">2181</span>:2181 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/你的用户名/docker/zookeeper/node1/config:/conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/你的用户名/docker/zookeeper/node1/data:/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/你的用户名/docker/zookeeper/node1/logs:/datalog <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> zookeeper:latest

<span class="token comment">## 启动 node2 容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> node2 <span class="token parameter variable">--network</span> zookeeper <span class="token punctuation">\\</span>
<span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-p</span> <span class="token number">2182</span>:2181 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/你的用户名/docker/zookeeper/node2/config:/conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/你的用户名/docker/zookeeper/node2/data:/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/你的用户名/docker/zookeeper/node2/logs:/datalog <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> zookeeper:latest

<span class="token comment">## 启动 node3 容器</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> node3 <span class="token parameter variable">--network</span> zookeeper <span class="token punctuation">\\</span>
<span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">-p</span> <span class="token number">2183</span>:2181 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/你的用户名/docker/zookeeper/node3/config:/conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/你的用户名/docker/zookeeper/node3/data:/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/你的用户名/docker/zookeeper/node3/logs:/datalog <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> zookeeper:latest
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="基于-docker-compose-方式启动集群" tabindex="-1"><a class="header-anchor" href="#基于-docker-compose-方式启动集群" aria-hidden="true">#</a> 基于 docker-compose 方式启动集群</h3><p>为了避免一个一个的启动，也可以使用 docker-compose 的方式来启动 zookeeper 集群。首先创建一个名为 <code>docker-compose.yml</code> 的文件，其内容如下:</p><div class="language-docker-compose.yml line-numbers-mode" data-ext="docker-compose.yml"><pre class="language-docker-compose.yml"><code>version: &#39;3.1&#39;

services:
  zoo1:
    image: zookeeper:latest
    restart: always
    hostname: zoo1
    ports:
      - 2181:2181
    environment:
      ZOO_MY_ID: 1
      ZOO_SERVERS: server.1=0.0.0.0:2888:3888;2181 server.2=zoo2:2888:3888;2181 server.3=zoo3:2888:3888;2181

  zoo2:
    image: zookeeper:latest
    restart: always
    hostname: zoo2
    ports:
      - 2182:2181
    environment:
      ZOO_MY_ID: 2
      ZOO_SERVERS: server.1=zoo1:2888:3888;2181 server.2=0.0.0.0:2888:3888;2181 server.3=zoo3:2888:3888;2181

  zoo3:
    image: zookeeper:latest
    restart: always
    hostname: zoo3
    ports:
      - 2183:2181
    environment:
      ZOO_MY_ID: 3
      ZOO_SERVERS: server.1=zoo1:2888:3888;2181 server.2=zoo2:2888:3888;2181 server.3=0.0.0.0:2888:3888;2181
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong></p><p>上述配置将以副本模式启动 zookeeper latest 版本，同时会告诉 Docker 运行三个 Zookeeper 容器：zoo1、zoo2、zoo3，并分别将本地的 2181, 2182, 2183 端口绑定到对应的容器的 2181 端口上。 <br> ZOO_MY_ID 和 ZOO_SERVERS 是搭建 zookeeper 集群需要设置的两个环境变量, 其中 ZOO_MY_ID 表示 zookeeper 服务的 id, 它是 1-255 之间的整数, 必须在集群中唯一。ZOO_SERVERS 是 Zookeeper 集群的主机列表。<br></p></blockquote><h4 id="启动容器-1" tabindex="-1"><a class="header-anchor" href="#启动容器-1" aria-hidden="true">#</a> 启动容器</h4><p>在 <code>docker-compose.yml</code> 当前目录下运行如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token assign-left variable">COMPOSE_PROJECT_NAME</span><span class="token operator">=</span>zookeeper_cluster <span class="token function">docker-compose</span> up <span class="token parameter variable">-d</span>

<span class="token comment"># 或者指定配置文件名称</span>
<span class="token assign-left variable">COMPOSE_PROJECT_NAME</span><span class="token operator">=</span>zookeeper_cluster <span class="token function">docker-compose</span> <span class="token parameter variable">-f</span> docker-compose.yml up <span class="token parameter variable">-d</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong></p><p>在 <code>docker-compose up</code> 前添加 <code>COMPOSE_PROJECT_NAME=zookeeper_cluster</code> 环境变量是为我们的 compose 工程起一个名字。</p></blockquote><p>看到如下信息表示容器启动成功：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>Creating network &quot;zookeeper_cluster_default&quot; with the default driver
Creating zookeeper_cluster_zoo1_1 ... done
Creating zookeeper_cluster_zoo3_1 ... done
Creating zookeeper_cluster_zoo2_1 ... done
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过如下命令查看运行中的 zookeeper 集群容器：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token function">ps</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>连接集群容器的方式和单机方式一样，只是需要分别进入对应节点容器即可。</p><h4 id="连接-zookeeper-集群" tabindex="-1"><a class="header-anchor" href="#连接-zookeeper-集群" aria-hidden="true">#</a> 连接 zookeeper 集群</h4><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> zkCli.sh <span class="token parameter variable">-server</span> localhost:2181,localhost:2182,localhost:2183
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="参考-1" tabindex="-1"><a class="header-anchor" href="#参考-1" aria-hidden="true">#</a> 参考</h3>`,22),_={href:"https://blog.csdn.net/duyun0/article/details/128437451",target:"_blank",rel:"noopener noreferrer"},x={href:"https://cloud.tencent.com/developer/article/1680299",target:"_blank",rel:"noopener noreferrer"},E=e("h2",{id:"安装-zooinspector-客户端连接",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#安装-zooinspector-客户端连接","aria-hidden":"true"},"#"),n(" 安装 ZooInspector 客户端连接")],-1),O={href:"https://issues.apache.org/jira/secure/attachment/12436620/ZooInspector.zip",target:"_blank",rel:"noopener noreferrer"},y=o(`<h3 id="启动-zooinspector-客户端" tabindex="-1"><a class="header-anchor" href="#启动-zooinspector-客户端" aria-hidden="true">#</a> 启动 ZooInspector 客户端</h3><p>将下载好的压缩包进行解压，执行如下命令：</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">java</span> <span class="token parameter variable">-jar</span> zookeeper-dev-ZooInspector.jar
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>运行结果如下：</p><figure><img src="`+v+'" alt="zookeeper-inspector" tabindex="0" loading="lazy"><figcaption>zookeeper-inspector</figcaption></figure>',5);function C(D,w){const a=t("ExternalLinkIcon");return r(),l("div",null,[k,e("p",null,[n("更详细的操作命令参考："),e("a",m,[n("zookeeperCLI"),s(a)])]),b,e("ul",null,[e("li",null,[e("a",h,[n("zookeeper官网"),s(a)])]),e("li",null,[e("a",g,[n("docker安装zookeeper&zookeeper基本使用"),s(a)])]),e("li",null,[e("a",f,[n("docker安装zookeeper&zookeeper基本使用"),s(a)])])]),z,e("ul",null,[e("li",null,[e("a",_,[n("Docker安装Zookeeper教程（超详细）"),s(a)])]),e("li",null,[e("a",x,[n("使用Docker搭建Zookeeper集群"),s(a)])])]),E,e("p",null,[n("下载地址："),e("a",O,[n("ZooInspector"),s(a)])]),y])}const S=i(u,[["render",C],["__file","zookeeper-env-build-guide.html.vue"]]);export{S as default};
