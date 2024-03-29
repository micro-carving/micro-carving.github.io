import{_ as u,W as l,X as i,Y as n,Z as s,$ as a,a0 as r,a1 as p,C as e}from"./framework-158a71b3.js";const d="/assets/6-a3232ad5.png",k="/assets/5-635cf372.png",v="/assets/4-2d888f74.png",o="/assets/9-666f92fb.png",q="/assets/1-0b0a9ffa.png",m="/assets/7-74ae3b3d.png",b="/assets/8-c1b37cd8.png",g="/assets/10-fb4a96d4.png",y={},h=p('<h2 id="elasticsearch-概述" tabindex="-1"><a class="header-anchor" href="#elasticsearch-概述" aria-hidden="true">#</a> ElasticSearch 概述</h2><h3 id="elasticsearch-是什么" tabindex="-1"><a class="header-anchor" href="#elasticsearch-是什么" aria-hidden="true">#</a> ElasticSearch 是什么？</h3><p>在提到 ElasticSearch 之前，我们先来了解一下 Elastic Stack。Elastic Stack 核心产品包括 Elasticsearch、Kibana、Beats 和 Logstash（也称为 ELK Stack）等等。能够安全可靠地获取任何来源、任何格式的数据，然后实时地对数据进行搜索、分析和可视化。</p><p>ElasticSearch，简称为 ES， ES 是一个<strong>基于 JSON 的分布式、RESTFul 风格的搜索和数据分析引擎</strong>，能够解决不断涌现出的各种用例。作为 Elastic Stack 的核心，Elasticsearch 会集中存储数据，可以飞快完成搜索，微调相关性，进行强大的分析，并轻松缩放规模。</p><p>它可以近乎实时的存储、检索数据；本身扩展性很好，可以扩展到上百台服务器，处理 PB 级别的数据。</p><blockquote><p>elastic<br> 英 [ɪˈlæstɪk] 美 [ɪˈlæstɪk] <br> n. 橡皮圈(或带);松紧带 <br> adj. 橡皮圈(或带)的;有弹性的;有弹力的;灵活的;可改变的;可伸缩的</p></blockquote><h3 id="全文搜索引擎" tabindex="-1"><a class="header-anchor" href="#全文搜索引擎" aria-hidden="true">#</a> 全文搜索引擎</h3><p>Google，百度类的网站搜索，它们都是根据网页中的关键字生成索引，我们在搜索的时候输入关键字，它们会将该关键字即索引匹配到的所有网页返回；还有常见的项目中应用日志的搜索等等。对于这些非结构化的数据文本，关系型数据库搜索不是能很好的支持。</p><p>一般传统数据库，全文检索都实现的很鸡肋，因为一般也没人用数据库存文本字段。进行全文检索需要扫描整个表，如果数据量大的话即使对 SQL 的语法优化，也收效甚微。建立了索引，但是维护起来也很麻烦，对于 insert 和 update 操作都会重新构建索引。</p><p>基于以上原因可以分析得出，在一些生产环境中，使用常规的搜索方式，性能是非常差的：</p><ul><li>搜索的数据对象是大量的非结构化的文本数据。</li><li>文件记录量达到数十万或数百万个甚至更多。</li><li>支持大量基于交互式文本的查询。</li><li>需求非常灵活的全文搜索查询。</li><li>对高度相关的搜索结果的有特殊需求，但是没有可用的关系数据库可以满足。</li><li>对不同记录类型、非文本数据操作或安全事务处理的需求相对较少的情况。为了解决结构化数据搜索和非结构化数据搜索性能问题，我们就需要专业，健壮，强大的全文搜索引擎。</li></ul><p><strong>这里说到的全文搜索引擎指的是目前广泛应用的主流搜索引擎</strong> 。它的工作原理是计算机索引程序通过扫描文章中的每一个词，对每一个词建立一个索引，指明该词在文章中出现的次数和位置，当用户查询时，检索程序就根据事先建立的索引进行查找，并将查找的结果反馈给用户的检索方式。这个过程类似于通过字典中的检索字表查字的过程。</p><h3 id="elasticsearch-应用案例" tabindex="-1"><a class="header-anchor" href="#elasticsearch-应用案例" aria-hidden="true">#</a> ElasticSearch 应用案例</h3><ul><li>GitHub: 2013 年初，抛弃了 Solr，采取 Elasticsearch 来做 PB 级的搜索。 “GitHub 使用Elasticsearch 搜索 20TB 的数据，包括 13 亿文件和 1300 亿行代码”。</li><li>维基百科：启动以 Elasticsearch 为基础的核心搜索架构</li><li>百度：目前广泛使用 Elasticsearch 作为文本数据分析，采集百度所有服务器上的各类指标数据及用户自定义数据，通过对各种数据进行多维分析展示，辅助定位分析实例异常或业务层面异常。目前覆盖百度内部 20 多个业务线（包括云分析、网盟、预测、文库、直达号、钱包、 风控等），单集群最大 100 台机器， 200 个 ES 节点，每天导入 30TB+数据。</li><li>新浪：使用 Elasticsearch 分析处理 32 亿条实时日志。</li><li>阿里：使用 Elasticsearch 构建日志采集和分析体系。</li><li>Stack Overflow：解决 Bug 问题的网站，全英文，编程人员交流的网站。</li></ul><h2 id="elasticsearch-环境" tabindex="-1"><a class="header-anchor" href="#elasticsearch-环境" aria-hidden="true">#</a> ElasticSearch 环境</h2><h3 id="基础环境搭建" tabindex="-1"><a class="header-anchor" href="#基础环境搭建" aria-hidden="true">#</a> 基础环境搭建</h3>',16),_=n("h3",{id:"es-api-请求测试",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#es-api-请求测试","aria-hidden":"true"},"#"),s(" ES-api 请求测试")],-1),x=n("code",null,"HTTP Request",-1),f={href:"https://www.postman.com/",target:"_blank",rel:"noopener noreferrer"},w={href:"https://www.apifox.cn/",target:"_blank",rel:"noopener noreferrer"},j=p(`<ul><li>新建 <code>http-client.env.json</code> 文件；</li></ul><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;dev&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;baseUrl&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://127.0.0.1:9200&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>新建 <code>es-api-request.http</code> 文件</li></ul><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 验证 ES 是否成功
GET {{baseUrl}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下图所示：</p><figure><img src="`+d+'" alt="idea中HTTP-Request使用" tabindex="0" loading="lazy"><figcaption>idea中HTTP-Request使用</figcaption></figure><h2 id="elasticsearch-入门" tabindex="-1"><a class="header-anchor" href="#elasticsearch-入门" aria-hidden="true">#</a> ElasticSearch 入门</h2><h3 id="索引" tabindex="-1"><a class="header-anchor" href="#索引" aria-hidden="true">#</a> 索引</h3><p>正排索引（传统）</p><table><thead><tr><th>id</th><th>content</th></tr></thead><tbody><tr><td>1001</td><td>my name is zhang san</td></tr><tr><td>1002</td><td>my name is li si</td></tr></tbody></table><p>倒排索引</p><table><thead><tr><th>keyword</th><th>id</th></tr></thead><tbody><tr><td>name</td><td>1001, 1002</td></tr><tr><td>zhang</td><td>1001</td></tr></tbody></table><p>ElasticSearch 是<strong>面向文档型数据库</strong>，一条数据在这里就是一个文档。为了方便大家理解，我们将 Elasticsearch 里存储文档数据和关系型数据库 MySQL 存储数据的概念进行一个类比。</p><figure><img src="'+k+`" alt="Elasticsearch与MySQL对比" tabindex="0" loading="lazy"><figcaption>Elasticsearch与MySQL对比</figcaption></figure><p>ES 里的 <code>Index</code> 可以看做一个库，而 <code>Type</code> 相当于表， <code>Documents</code> 则相当于表的行。这里 <code>type</code> 的概念已经被逐渐弱化，ElasticSearch 6.X 中，一个 <code>index</code> 下已经只能包含一个 <code>type</code>， Elasticsearch 7.X 中, <code>type</code> 的概念已经被删除了。</p><h4 id="创建索引" tabindex="-1"><a class="header-anchor" href="#创建索引" aria-hidden="true">#</a> 创建索引</h4><p>对比关系型数据库，创建索引就等同于创建数据库。</p><p>向 ES 服务器发 PUT 请求：<code>http://127.0.0.1:9200/shopping</code>。</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 创建 shopping 索引
PUT {{baseUrl}}/shopping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>响应结果：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;acknowledged&quot;: true,            // 响应结果
  &quot;shards_acknowledged&quot;: true,     // 分片结果
  &quot;index&quot;: &quot;shopping&quot;              // 索引名称
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行日志</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">docker</span> logs <span class="token parameter variable">--tail</span> <span class="token number">10</span> elasticsearch <span class="token operator">|</span> <span class="token function">grep</span> shopping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{&quot;type&quot;: &quot;server&quot;, &quot;timestamp&quot;: &quot;2023-03-15T04:51:04,589Z&quot;, &quot;level&quot;: &quot;INFO&quot;, &quot;component&quot;: &quot;o.e.c.m.MetadataCreateIndexService&quot;, &quot;cluster.name&quot;: &quot;elasticsearch&quot;, &quot;node.na
me&quot;: &quot;dc5f02585eae&quot;, &quot;message&quot;: &quot;[shopping] creating index, cause [api], templates [], shards [1]/[1]&quot;, &quot;cluster.uuid&quot;: &quot;KGA6aFsyQw-LknyvkbAEHQ&quot;, &quot;node.id&quot;: &quot;ihXicpjjShO
SMitfRzUvRA&quot;  }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>效果如下图所示：</p><figure><img src="`+v+`" alt="docker查看指定日志并过滤" tabindex="0" loading="lazy"><figcaption>docker查看指定日志并过滤</figcaption></figure><p><strong>注意</strong>：</p><p>win 10 下执行 <code>grep</code> 命令，会提示如下错误：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>grep : 无法将“grep”项识别为 cmdlet、函数、脚本文件或可运行程序的名称。请检查名称的拼写，如果包括路径，请确保路径正确，然后再试一次。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,29),E=n("code",null,"grep",-1),S={href:"https://www.cnblogs.com/shenxiaolin/p/16662793.html",target:"_blank",rel:"noopener noreferrer"},T=p(`<h4 id="查询索引" tabindex="-1"><a class="header-anchor" href="#查询索引" aria-hidden="true">#</a> 查询索引</h4><h5 id="查询所有索引" tabindex="-1"><a class="header-anchor" href="#查询所有索引" aria-hidden="true">#</a> 查询所有索引</h5><p>向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/_cat/indices?v</code></p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 查询所有索引
GET {{baseUrl}}/_cat/indices?v
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这里请求路径中的 <code>_cat</code> 表示查看的意思， <code>indices</code> 表示索引，所以整体含义就是查看当前 ES 服务器中的所有索引，就好像 MySQL 中的 <code>show tables</code> 的感觉，服务器响应结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>health status index                           uuid                   pri rep docs.count docs.deleted store.size pri.store.size
green  open   .geoip_databases                m_2rhbeoQQW9xGX2rmdCfA   1   0         42            0     40.7mb         40.7mb
green  open   .apm-custom-link                n-W9098GR0-wGpEt5tvuhA   1   0          0            0       226b           226b
green  open   .kibana_7.17.9_001              g-Qu0wiyRNeHqK_y-W9-sw   1   0        624            1      2.4mb          2.4mb
green  open   .apm-agent-configuration        8ewjD7bCSZCKu5m7SycxkQ   1   0          0            0       226b           226b
green  open   .kibana_task_manager_7.17.9_001 EugcrviHQaKXRPEBd40Qog   1   0         17        24140      2.8mb          2.8mb
yellow open   shopping                        M25FBpYdQN6swLZmkpMBnw   1   1          0            0       226b           226b
green  open   .tasks                          fxZ7WSS9Q_qznYoHcR22VQ   1   0          2            0     13.9kb         13.9kb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><table><thead><tr><th style="text-align:center;"><strong>表头</strong></th><th style="text-align:center;"><strong>含义</strong></th></tr></thead><tbody><tr><td style="text-align:center;">health</td><td style="text-align:center;">当前服务器健康状态： green(集群完整) yellow(单点正常、集群不完整) red(单点不正常)</td></tr><tr><td style="text-align:center;">status</td><td style="text-align:center;">索引打开、关闭状态</td></tr><tr><td style="text-align:center;">index</td><td style="text-align:center;">索引名</td></tr><tr><td style="text-align:center;">uuid</td><td style="text-align:center;">索引统一编号</td></tr><tr><td style="text-align:center;">pri</td><td style="text-align:center;">主分片数量</td></tr><tr><td style="text-align:center;">rep</td><td style="text-align:center;">副本数量</td></tr><tr><td style="text-align:center;">docs.count</td><td style="text-align:center;">可用文档数量</td></tr><tr><td style="text-align:center;">docs.deleted</td><td style="text-align:center;">文档删除状态（逻辑删除）</td></tr><tr><td style="text-align:center;">store.size</td><td style="text-align:center;">主分片和副分片整体占空间大小</td></tr><tr><td style="text-align:center;">pri.store.size</td><td style="text-align:center;">主分片占空间大小</td></tr></tbody></table><h5 id="查询单个索引" tabindex="-1"><a class="header-anchor" href="#查询单个索引" aria-hidden="true">#</a> 查询单个索引</h5><p>向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/shopping</code></p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 查看单个索引
GET {{baseUrl}}/shopping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;shopping&quot;: { // 索引名
    &quot;aliases&quot;: {}, // 别名
    &quot;mappings&quot;: {}, // 映射
    &quot;settings&quot;: { // 设置
      &quot;index&quot;: {  // 设置 - 索引
        &quot;routing&quot;: {  // 设置 - 索引 - 路由
          &quot;allocation&quot;: {  // 设置 - 索引 - 路由 - 分片
            &quot;include&quot;: {  // 分片包含的数据层（节点）首选项
              &quot;_tier_preference&quot;: &quot;data_content&quot;
            }
          }
        },
        &quot;number_of_shards&quot;: &quot;1&quot;, // 设置 - 索引 - 主分片数量
        &quot;provided_name&quot;: &quot;shopping&quot;,
        &quot;creation_date&quot;: &quot;1678855864543&quot;, // 设置 - 索引 - 创建时间
        &quot;number_of_replicas&quot;: &quot;1&quot;, // 设置 - 索引 - 副本数量
        &quot;uuid&quot;: &quot;M25FBpYdQN6swLZmkpMBnw&quot;, // 设置 - 索引 - 索引统一编号
        &quot;version&quot;: {  // 设置 - 索引 - 版本 - 创建
          &quot;created&quot;: &quot;7170999&quot;
        }
      }
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除单个索引" tabindex="-1"><a class="header-anchor" href="#删除单个索引" aria-hidden="true">#</a> 删除单个索引</h4><p>向 ES 服务器发 DELETE 请求：<code>http://127.0.0.1:9200/shopping</code></p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 删除单个索引
DELETE {{baseUrl}}/shopping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;acknowledged&quot;: true
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次查看所有索引，<code>GET http://127.0.0.1:9200/_cat/indices?v</code> ，返回结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>health status index                           uuid                   pri rep docs.count docs.deleted store.size pri.store.size
green  open   .geoip_databases                m_2rhbeoQQW9xGX2rmdCfA   1   0         42            0     40.7mb         40.7mb
green  open   .apm-custom-link                n-W9098GR0-wGpEt5tvuhA   1   0          0            0       226b           226b
green  open   .kibana_7.17.9_001              g-Qu0wiyRNeHqK_y-W9-sw   1   0        627           12      2.4mb          2.4mb
green  open   .apm-agent-configuration        8ewjD7bCSZCKu5m7SycxkQ   1   0          0            0       226b           226b
green  open   .kibana_task_manager_7.17.9_001 EugcrviHQaKXRPEBd40Qog   1   0         17        38303      4.1mb          4.1mb
green  open   .tasks                          fxZ7WSS9Q_qznYoHcR22VQ   1   0          2            0     13.9kb         13.9kb
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>根据结果看出 <code>shopping</code> 索引已经不存在，说明成功！</p><h3 id="文档" tabindex="-1"><a class="header-anchor" href="#文档" aria-hidden="true">#</a> 文档</h3><h4 id="创建文档" tabindex="-1"><a class="header-anchor" href="#创建文档" aria-hidden="true">#</a> 创建文档</h4><p>这里的文档可以类比为关系型数据库中的表数据，添加的数据格式为 <strong>JSON</strong> 格式。</p><p>向 ES 服务器发 POST 请求：<code>http://127.0.0.1:9200/shopping/_doc</code> ，请求体 JSON 内容为：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">3999.00</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 创建文档（此方式不能使用 PUT；自动生成唯一标识，可以指定，比如：xxx/shopping/_doc/1，此方式可以使用 PUT）
POST {{baseUrl}}/shopping/_doc
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;category&quot;</span><span class="token operator">:</span><span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;images&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">3999.00</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意，此处发送请求的方式必须为 POST，不能是 PUT，否则会发生错误，提示的错误如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;error&quot;: &quot;Incorrect HTTP method for uri [/shopping/_doc] and method [PUT], allowed: [POST]&quot;,
  &quot;status&quot;: 405
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义唯一标识这种请求可以使用 PUT，如下所示：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 新增文档（当指定唯一标识时可以使用 PUT）
PUT {{baseUrl}}/shopping/_doc/2
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span><span class="token string">&quot;华为手机&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;category&quot;</span><span class="token operator">:</span><span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;images&quot;</span><span class="token operator">:</span><span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">4999.00</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;_index&quot;: &quot;shopping&quot;, // 索引
  &quot;_type&quot;: &quot;_doc&quot;,      // 类型 - 文档
  &quot;_id&quot;: &quot;t1eX6IYB1yjqbUaozmwa&quot;, // 唯一标识，可以类比为 MySQL 中的主键，随机生成
  &quot;_version&quot;: 1,    // 版本
  &quot;result&quot;: &quot;created&quot;, // 结果，这里的 created 表示创建成功
  &quot;_shards&quot;: {      // 分片
    &quot;total&quot;: 2,     // 分片 - 总数
    &quot;successful&quot;: 1, // 分片 - 成功数
    &quot;failed&quot;: 0 // 分片 - 失败数
  },
  &quot;_seq_no&quot;: 0, 
  &quot;_primary_term&quot;: 1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的数据创建后，由于没有指定数据唯一性标识（ID），默认情况下， ES 服务器会随机生成一个。</p><p>如果想要自定义唯一性标识，需要在创建时指定：<code>http://127.0.0.1:9200/shopping/_doc/1</code> 。</p><p><strong>注意</strong>：</p><p><strong>如果增加数据时明确数据主键，那么请求方式除了使用 POST 以外，也可以为 PUT</strong>。</p><h4 id="查询文档" tabindex="-1"><a class="header-anchor" href="#查询文档" aria-hidden="true">#</a> 查询文档</h4><h5 id="全查询" tabindex="-1"><a class="header-anchor" href="#全查询" aria-hidden="true">#</a> 全查询</h5><p>查看索引下所有数据，向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/shopping/_search</code></p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 查询文档（全查询）
GET {{baseUrl}}/shopping/_search
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;took&quot;: 9,
  &quot;timed_out&quot;: false,
  &quot;_shards&quot;: {
    &quot;total&quot;: 1,
    &quot;successful&quot;: 1,
    &quot;skipped&quot;: 0,
    &quot;failed&quot;: 0
  },
  &quot;hits&quot;: {
    &quot;total&quot;: {
      &quot;value&quot;: 2,
      &quot;relation&quot;: &quot;eq&quot;
    },
    &quot;max_score&quot;: 1.0,
    &quot;hits&quot;: [
      {
        &quot;_index&quot;: &quot;shopping&quot;,
        &quot;_type&quot;: &quot;_doc&quot;,
        &quot;_id&quot;: &quot;t1eX6IYB1yjqbUaozmwa&quot;,
        &quot;_score&quot;: 1.0,
        &quot;_source&quot;: {
          &quot;title&quot;: &quot;小米手机&quot;,
          &quot;category&quot;: &quot;小米&quot;,
          &quot;images&quot;: &quot;http://www.gulixueyuan.com/xm.jpg&quot;,
          &quot;price&quot;: 3999.00
        }
      },
      {
        &quot;_index&quot;: &quot;shopping&quot;,
        &quot;_type&quot;: &quot;_doc&quot;,
        &quot;_id&quot;: &quot;1&quot;,
        &quot;_score&quot;: 1.0,
        &quot;_source&quot;: {
          &quot;title&quot;: &quot;华为手机&quot;,
          &quot;category&quot;: &quot;华为&quot;,
          &quot;images&quot;: &quot;http://www.gulixueyuan.com/hw.jpg&quot;,
          &quot;price&quot;: 4999.00
        }
      }
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="主键查询" tabindex="-1"><a class="header-anchor" href="#主键查询" aria-hidden="true">#</a> 主键查询</h5><p>查询文档时，需要指明文档的唯一性标识，类似于 MySQL 中数据的主键查询。</p><p>向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/shopping/_doc/1</code></p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 查询文档（主键查询）
GET {{baseUrl}}/shopping/_doc/1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;_index&quot;: &quot;shopping&quot;,
  &quot;_type&quot;: &quot;_doc&quot;,
  &quot;_id&quot;: &quot;1&quot;,
  &quot;_version&quot;: 5,
  &quot;_seq_no&quot;: 9,
  &quot;_primary_term&quot;: 1,
  &quot;found&quot;: true,
  &quot;_source&quot;: {
    &quot;title&quot;: &quot;华为手机&quot;,
    &quot;category&quot;: &quot;华为&quot;,
    &quot;images&quot;: &quot;http://www.gulixueyuan.com/hw.jpg&quot;,
    &quot;price&quot;: 4999.00
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查找不存在的内容，向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/shopping/_doc/1001</code></p><p>服务器响应结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;_index&quot;: &quot;shopping&quot;,
  &quot;_type&quot;: &quot;_doc&quot;,
  &quot;_id&quot;: &quot;1001&quot;,
  &quot;found&quot;: false    // 为 false 表示未查询到
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="修改文档" tabindex="-1"><a class="header-anchor" href="#修改文档" aria-hidden="true">#</a> 修改文档</h4><h5 id="全量修改" tabindex="-1"><a class="header-anchor" href="#全量修改" aria-hidden="true">#</a> 全量修改</h5><p>和创建文档一样，输入相同的 URL 地址请求，如果请求体变化，会将原有的数据内容覆盖。</p><p>向 ES 服务器发 POST 请求：<code>http://127.0.0.1:9200/shopping/_doc/1</code> ，请求体 JSON 内容为：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为手机&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">4999.00</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 修改文档（全量修改）
PUT {{baseUrl}}/shopping/_doc/1
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为手机&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">4999.00</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;_index&quot;: &quot;shopping&quot;,
  &quot;_type&quot;: &quot;_doc&quot;,
  &quot;_id&quot;: &quot;1&quot;,
  &quot;_version&quot;: 2,       // 版本号，每次改变都 + 1
  &quot;result&quot;: &quot;updated&quot;, // 结果，这里的 updated 表示修改成功
  &quot;_shards&quot;: {
    &quot;total&quot;: 2,
    &quot;successful&quot;: 1,
    &quot;failed&quot;: 0
  },
  &quot;_seq_no&quot;: 5,
  &quot;_primary_term&quot;: 1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="局部修改" tabindex="-1"><a class="header-anchor" href="#局部修改" aria-hidden="true">#</a> 局部修改</h5><p>修改数据时，也可以只修改某一给条数据的局部信息。</p><p>向 ES 服务器发 POST 请求：<code>http://127.0.0.1:9200/shopping/_update/1</code> ，请求体 JSON 内容为：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 修改文档（局部修改）
POST {{baseUrl}}/shopping/_update/1
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;荣耀手机&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1999.00</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：</p><p><strong>全量修改既可以使用 POST 方式，也可以使用 PUT 方式；局部修改只能使用 POST 方式，不能使用 PUT 方式</strong>。</p><p>服务器响应结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;_index&quot;: &quot;shopping&quot;,
  &quot;_type&quot;: &quot;_doc&quot;,
  &quot;_id&quot;: &quot;1&quot;,
  &quot;_version&quot;: 3,
  &quot;result&quot;: &quot;updated&quot;,
  &quot;_shards&quot;: {
    &quot;total&quot;: 2,
    &quot;successful&quot;: 1,
    &quot;failed&quot;: 0
  },
  &quot;_seq_no&quot;: 10,
  &quot;_primary_term&quot;: 1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/shopping/_doc/1</code> ，查看修改内容：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;_index&quot;: &quot;shopping&quot;,
  &quot;_type&quot;: &quot;_doc&quot;,
  &quot;_id&quot;: &quot;1&quot;,
  &quot;_version&quot;: 16,
  &quot;_seq_no&quot;: 20,
  &quot;_primary_term&quot;: 1,
  &quot;found&quot;: true,
  &quot;_source&quot;: {
    &quot;title&quot;: &quot;荣耀手机&quot;,
    &quot;category&quot;: &quot;华为&quot;,
    &quot;images&quot;: &quot;http://www.gulixueyuan.com/hw.jpg&quot;,
    &quot;price&quot;: 1999.0
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="删除文档" tabindex="-1"><a class="header-anchor" href="#删除文档" aria-hidden="true">#</a> 删除文档</h4><p>删除一个文档不会立即从磁盘上移除，它只是被标记成已删除（逻辑删除）。</p><p>向 ES 服务器发 DELETE 请求：<code>http://127.0.0.1:9200/shopping/_doc/1</code></p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 删除文档（逻辑删除）
DELETE {{baseUrl}}/shopping/_doc/1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;_index&quot;: &quot;shopping&quot;,
  &quot;_type&quot;: &quot;_doc&quot;,
  &quot;_id&quot;: &quot;1&quot;,
  &quot;_version&quot;: 4,
  &quot;result&quot;: &quot;deleted&quot;, // 结果，这里的 deleted 表示删除成功，这里是逻辑删除
  &quot;_shards&quot;: {
    &quot;total&quot;: 2,
    &quot;successful&quot;: 1,
    &quot;failed&quot;: 0
  },
  &quot;_seq_no&quot;: 21,
  &quot;_primary_term&quot;: 1
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/shopping/_doc/1</code> ，查看是否删除成功：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;_index&quot;: &quot;shopping&quot;,
  &quot;_type&quot;: &quot;_doc&quot;,
  &quot;_id&quot;: &quot;1&quot;,
  &quot;found&quot;: false
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="批量操作文档" tabindex="-1"><a class="header-anchor" href="#批量操作文档" aria-hidden="true">#</a> 批量操作文档</h4>`,78),U=n("code",null,"bulk",-1),I=n("strong",null,"批量增删改",-1),R={href:"https://www.elastic.co/guide/en/elasticsearch/reference/7.17/docs-bulk.html",target:"_blank",rel:"noopener noreferrer"},P=p(`<ol><li>语法</li></ol><p><code>bulk</code> 对 JSON 串的有着严格的要求。<strong>每个 JSON 串不能换行，只能放在同一行</strong>。同时，<strong>相邻的 JSON 串之间必须要有换行</strong>（Linux 下是 <code>\\n</code>；Window 下是 <code>\\r\\n</code>）。bulk 的每个操作必须要一对 JSON 串（delete 语法除外）。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>action_and_meta_data\\n
optional_source\\n
action_and_meta_data\\n
optional_source\\n
....
action_and_meta_data\\n
optional_source\\n
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意</strong>：</p><p>最后一行数据必须以换行符 <code>\\n</code> 结束。每个换行符前可以加回车 <code>\\r</code>。将 <code>NDJSON</code> 数据发送到 <code>_bulk</code> 端点时，请使用 <code>application/json</code> 或 <code>application/x-ndjson</code> 的 <code>Content-Type</code> 标头。</p><ol start="2"><li>操作类型</li></ol><ul><li><code>create</code> 如果文档不存在就创建，但如果文档存在就返回错误；</li><li><code>index</code> 如果文档不存在就创建，如果文档存在就更新；</li><li><code>update</code> 更新一个文档，如果文档不存在就返回错误；</li><li><code>delete</code> 删除一个文档，如果要删除的文档id不存在，就返回错误。</li></ul><p>其实可以看得出来 index 是比较常用的。还有 bulk 的操作，某一个操作失败，是不会影响其他文档的操作的，它会在返回结果中告诉你失败的详细的原因。</p><ol start="3"><li>操作请求</li></ol><p>请求方式</p><ul><li><code>POST /_bulk</code></li></ul><p>如果使用此方式，需要在元数据中指定索引，也就是 <code>&quot;_index&quot;: &quot;index_name&quot;</code>，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST _bulk
{ &quot;index&quot; : { &quot;_index&quot; : &quot;test&quot;, &quot;_id&quot; : &quot;1&quot; } }
{ &quot;field1&quot; : &quot;value1&quot; }
{ &quot;delete&quot; : { &quot;_index&quot; : &quot;test&quot;, &quot;_id&quot; : &quot;2&quot; } }
{ &quot;create&quot; : { &quot;_index&quot; : &quot;test&quot;, &quot;_id&quot; : &quot;3&quot; } }
{ &quot;field1&quot; : &quot;value3&quot; }
{ &quot;update&quot; : {&quot;_id&quot; : &quot;1&quot;, &quot;_index&quot; : &quot;test&quot;} }
{ &quot;doc&quot; : {&quot;field2&quot; : &quot;value2&quot;} }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>POST /&lt;target&gt;/_bulk</code></li></ul><p>如果使用此方式，不需要在元数据中指定索引，也就是 <code>target</code> 处为索引，所以不需要指定，如下所示：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /index_name/_bulk
{ &quot;index&quot; : {&quot;_id&quot; : &quot;1&quot; } }
{ &quot;field1&quot; : &quot;value1&quot; }
{ &quot;delete&quot; : { &quot;_id&quot; : &quot;2&quot; } }
{ &quot;create&quot; : {&quot;_id&quot; : &quot;3&quot; } }
{ &quot;field1&quot; : &quot;value3&quot; }
{ &quot;update&quot; : {&quot;_id&quot; : &quot;1&quot;} }
{ &quot;doc&quot; : {&quot;field2&quot; : &quot;value2&quot;} }
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>操作工具</li></ol>`,17),A=n("code",null,"dev_tools",-1),C={href:"http://localhost:5601/app/dev_tools#/console",target:"_blank",rel:"noopener noreferrer"},G=n("p",null,[s("由于 idea 中的 HTTP Request 插件没有找到方法进行测试批量操作，这里主要采用 kibana 的 "),n("code",null,"dev_tools"),s("，或者使用 Apifox 工具进行测试。")],-1),O=n("p",null,"如下图所示：",-1),B=n("figure",null,[n("img",{src:o,alt:"kibana的dev_tools控制台测试bulk批量新增文档数据",tabindex:"0",loading:"lazy"}),n("figcaption",null,"kibana的dev_tools控制台测试bulk批量新增文档数据")],-1),H=n("figure",null,[n("img",{src:q,alt:"Apifox测试bulk新增文档数据",tabindex:"0",loading:"lazy"}),n("figcaption",null,"Apifox测试bulk新增文档数据")],-1),D=n("ol",{start:"4"},[n("li",null,"官方测试集")],-1),z={href:"https://download.elastic.co/demos/kibana/gettingstarted/accounts.zip",target:"_blank",rel:"noopener noreferrer"},N=p(`<h5 id="批量新增" tabindex="-1"><a class="header-anchor" href="#批量新增" aria-hidden="true">#</a> 批量新增</h5><p>新增的 <code>action</code> 为 <code>index</code> 或者 <code>create</code>，这里选择 <code>index</code> 。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /shopping/_bulk
{&quot;index&quot;: {&quot;_id&quot;: 1}}
{&quot;title&quot;: &quot;小米手机&quot;, &quot;category&quot;: &quot;小米&quot;, &quot;images&quot;: &quot;http://www.gulixueyuan.com/xm.jpg&quot;, &quot;price&quot;: 2999.00}
{&quot;index&quot;: {&quot;_id&quot;: 2}}
{&quot;title&quot;: &quot;红米手机&quot;, &quot;category&quot;: &quot;小米&quot;, &quot;images&quot;: &quot;http://www.gulixueyuan.com/xm.jpg&quot;, &quot;price&quot;: 1999.00}
{&quot;index&quot;: {&quot;_id&quot;: 3}}
{&quot;title&quot;: &quot;华为手机&quot;, &quot;category&quot;: &quot;华为&quot;, &quot;images&quot;: &quot;http://www.gulixueyuan.com/hw.jpg&quot;, &quot;price&quot;: 4999.00}
{&quot;index&quot;: {&quot;_id&quot;: 4}}
{&quot;title&quot;: &quot;荣耀手机&quot;, &quot;category&quot;: &quot;华为&quot;, &quot;images&quot;: &quot;http://www.gulixueyuan.com/hw.jpg&quot;, &quot;price&quot;: 1999.00}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">6</span><span class="token punctuation">,</span>
  <span class="token property">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;created&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">37</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">201</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;created&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">38</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">201</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;created&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">39</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">201</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;created&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">40</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">201</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+o+`" alt="kibana的dev_tools控制台测试bulk批量新增文档数据" tabindex="0" loading="lazy"><figcaption>kibana的dev_tools控制台测试bulk批量新增文档数据</figcaption></figure><h5 id="批量修改" tabindex="-1"><a class="header-anchor" href="#批量修改" aria-hidden="true">#</a> 批量修改</h5><p>修改的 <code>action</code> 为 <code>update</code> 。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /shopping/_bulk
{&quot;update&quot;: {&quot;_id&quot;: 1}}
{&quot;doc&quot;: {&quot;title&quot;: &quot;小米13手机&quot;, &quot;category&quot;: &quot;小米&quot;, &quot;price&quot;: 4599.00}}
{&quot;update&quot;: {&quot;_id&quot;: 3}}
{&quot;doc&quot;: {&quot;title&quot;: &quot;华为mate50手机&quot;, &quot;category&quot;: &quot;华为&quot;, &quot;price&quot;: 5499.00}}
{&quot;update&quot;: {&quot;_id&quot;: 4}}
{&quot;doc&quot;: {&quot;title&quot;: &quot;荣耀80pro手机&quot;, &quot;category&quot;: &quot;华为&quot;, &quot;price&quot;: 3799.00}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">11</span><span class="token punctuation">,</span>
  <span class="token property">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;update&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;updated&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">30</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;update&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;updated&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">31</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;update&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;updated&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">32</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+m+`" alt="kibana的dev_tools控制台测试bulk批量修改文档数据" tabindex="0" loading="lazy"><figcaption>kibana的dev_tools控制台测试bulk批量修改文档数据</figcaption></figure><h5 id="批量删除" tabindex="-1"><a class="header-anchor" href="#批量删除" aria-hidden="true">#</a> 批量删除</h5><p>修改的 <code>action</code> 为 <code>delete</code> 。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /shopping/_bulk
{&quot;delete&quot;: {&quot;_id&quot;: 1}}
{&quot;delete&quot;: {&quot;_id&quot;: 2}}
{&quot;delete&quot;: {&quot;_id&quot;: 3}}
{&quot;delete&quot;: {&quot;_id&quot;: 4}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;delete&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;deleted&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">33</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;delete&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;deleted&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">34</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;delete&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;deleted&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">35</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;delete&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;deleted&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">36</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+b+`" alt="kibana的dev_tools控制台测试bulk批量删除文档数据" tabindex="0" loading="lazy"><figcaption>kibana的dev_tools控制台测试bulk批量删除文档数据</figcaption></figure><h5 id="批量的混合操作" tabindex="-1"><a class="header-anchor" href="#批量的混合操作" aria-hidden="true">#</a> 批量的混合操作</h5><p>不过一般不推荐这种使用，项目中也用的极少。</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>POST /shopping/_bulk
{&quot;index&quot;: {&quot;_id&quot;: 1}}
{&quot;title&quot;: &quot;小米手机&quot;, &quot;category&quot;: &quot;小米&quot;, &quot;images&quot;: &quot;http://www.gulixueyuan.com/xm.jpg&quot;, &quot;price&quot;: 2999.00}
{&quot;delete&quot;: {&quot;_id&quot;: 1}}
{&quot;create&quot;: {&quot;_id&quot;: 3}}
{&quot;title&quot;: &quot;华为手机&quot;, &quot;category&quot;: &quot;华为&quot;, &quot;images&quot;: &quot;http://www.gulixueyuan.com/hw.jpg&quot;, &quot;price&quot;: 4999.00}
{&quot;update&quot;: {&quot;_id&quot;: 3}}
{&quot;doc&quot;: {&quot;title&quot;: &quot;荣耀80pro手机&quot;, &quot;category&quot;: &quot;华为&quot;, &quot;price&quot;: 3799.00}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">89</span><span class="token punctuation">,</span>
  <span class="token property">&quot;errors&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;items&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;created&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">45</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">201</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;delete&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;deleted&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">46</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;create&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
        <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;created&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">47</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">201</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;update&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
        <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;updated&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
          <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
          <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">48</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">3</span><span class="token punctuation">,</span>
        <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">200</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+g+`" alt="kibana的dev_tools控制台测试bulk批量混合操作文档数据" tabindex="0" loading="lazy"><figcaption>kibana的dev_tools控制台测试bulk批量混合操作文档数据</figcaption></figure><h3 id="查询" tabindex="-1"><a class="header-anchor" href="#查询" aria-hidden="true">#</a> 查询</h3><h4 id="条件查询" tabindex="-1"><a class="header-anchor" href="#条件查询" aria-hidden="true">#</a> 条件查询</h4><p>准备 4 条数据，可以使用 <a href="../elasticsearch-service/src/main/resources/dataset/bulk/batch-create.json">batch-create</a> 脚本新增数据；</p><h5 id="url-带参查询" tabindex="-1"><a class="header-anchor" href="#url-带参查询" aria-hidden="true">#</a> URL 带参查询</h5><p>查询的条件为：“查找 category 为小米的文档”，向 ES 服务器发 GET请求：<code>http://127.0.0.1:9200/shopping/_search?q=category:小米</code></p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#### 条件查询（URL带参查询）
GET {{baseUrl}}/shopping/_search?q=category:小米
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">7</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">1.3862942</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.3862942</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">2999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.3862942</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;红米手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上述为 URL 带参数形式查询，这很容易让不善者心怀恶意，或者参数值出现中文会出现乱码情况。为了避免这些情况，我们可用使用带 JSON 请求体请求进行查询。</p><h5 id="请求体带参查询" tabindex="-1"><a class="header-anchor" href="#请求体带参查询" aria-hidden="true">#</a> 请求体带参查询</h5><p>查询的条件为：“查找 category 为华为的文档”，向 ES 服务器发 GET请求：<code>http://127.0.0.1:9200/shopping/_search</code> ，JSON 请求体内容如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#### 条件查询（请求体带参查询）
GET {{baseUrl}}/shopping/_search
Content-Type: application/json

{
  &quot;query&quot;: {
    &quot;match&quot;: {
      &quot;category&quot;: &quot;华为&quot;
    }
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">1.3862942</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.3862942</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">4999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.3862942</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;荣耀手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="请求体查询所有内容" tabindex="-1"><a class="header-anchor" href="#请求体查询所有内容" aria-hidden="true">#</a> 请求体查询所有内容</h5>`,40),Q={href:"http://127.0.0.1:9200/shopping/_search",target:"_blank",rel:"noopener noreferrer"},L=p(`<div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#### 请求体查询所有
GET {{baseUrl}}/shopping/_search
Content-Type: application/json

{
  &quot;query&quot;: {
    &quot;match_all&quot;: {}
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">2999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;红米手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">4999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;荣耀手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="查询指定字段的所有内容" tabindex="-1"><a class="header-anchor" href="#查询指定字段的所有内容" aria-hidden="true">#</a> 查询指定字段的所有内容</h5><p>这里是查询指定字段，是返回所有指定字段查询的数据，向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/shopping/_search</code> ，JSON 请求体如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token string">&quot;title&quot;</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>#### 查询指定字段的所有内容
GET {{baseUrl}}/shopping/_search
Content-Type: application/json

{
  &quot;query&quot;: {
    &quot;match_all&quot;: {}
  },
  &quot;_source&quot;: [&quot;title&quot;]
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>{
  &quot;took&quot;: 0,
  &quot;timed_out&quot;: false,
  &quot;_shards&quot;: {
    &quot;total&quot;: 1,
    &quot;successful&quot;: 1,
    &quot;skipped&quot;: 0,
    &quot;failed&quot;: 0
  },
  &quot;hits&quot;: {
    &quot;total&quot;: {
      &quot;value&quot;: 4,
      &quot;relation&quot;: &quot;eq&quot;
    },
    &quot;max_score&quot;: 1.0,
    &quot;hits&quot;: [
      {
        &quot;_index&quot;: &quot;shopping&quot;,
        &quot;_type&quot;: &quot;_doc&quot;,
        &quot;_id&quot;: &quot;1&quot;,
        &quot;_score&quot;: 1.0,
        &quot;_source&quot;: {
          &quot;title&quot;: &quot;小米手机&quot;
        }
      },
      {
        &quot;_index&quot;: &quot;shopping&quot;,
        &quot;_type&quot;: &quot;_doc&quot;,
        &quot;_id&quot;: &quot;2&quot;,
        &quot;_score&quot;: 1.0,
        &quot;_source&quot;: {
          &quot;title&quot;: &quot;红米手机&quot;
        }
      },
      {
        &quot;_index&quot;: &quot;shopping&quot;,
        &quot;_type&quot;: &quot;_doc&quot;,
        &quot;_id&quot;: &quot;3&quot;,
        &quot;_score&quot;: 1.0,
        &quot;_source&quot;: {
          &quot;title&quot;: &quot;华为手机&quot;
        }
      },
      {
        &quot;_index&quot;: &quot;shopping&quot;,
        &quot;_type&quot;: &quot;_doc&quot;,
        &quot;_id&quot;: &quot;4&quot;,
        &quot;_score&quot;: 1.0,
        &quot;_source&quot;: {
          &quot;title&quot;: &quot;荣耀手机&quot;
        }
      }
    ]
  }
}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="分页查询" tabindex="-1"><a class="header-anchor" href="#分页查询" aria-hidden="true">#</a> 分页查询</h4><h5 id="from-size-浅分页" tabindex="-1"><a class="header-anchor" href="#from-size-浅分页" aria-hidden="true">#</a> from + size 浅分页</h5><p>&quot;浅&quot;分页可以理解为简单意义上的分页。它的原理很简单，就是查询前 20 条数据，然后截断前 10 条，只返回 10-20 的数据。这样其实白白浪费了前 10 条的查询。</p><p>向 ES 服务器发 GET请求：<code>http://127.0.0.1:9200/shopping/_search</code> ，JSON 请求体如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong></p><p>其中，<code>from</code> 定义了目标数据的偏移值，<code>size</code> 定义当前返回的数目。默认 <code>from</code> 为 0，<code>size</code> 为 2，即所有的查询默认仅仅返回前 2 条数据。</p></blockquote><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">299</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">4999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;荣耀手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>扩展</strong></p><p><strong>在这里有必要了解一下 from/size 的原理：</strong></p><p>因为 es 是基于分片的，假设有 5 个分片，<code>from=100,size=10</code>。则会根据排序规则从 5 个分片中各取回 100 条数据数据，然后汇总成 500 条数据后选择最后面的 10 条数据。</p><p>做过测试，越往后的分页，执行的效率越低。总体上会随着 from 的增加，消耗时间也会增加。而且数据量越大，就越明显！</p></blockquote><h5 id="scroll-深分页" tabindex="-1"><a class="header-anchor" href="#scroll-深分页" aria-hidden="true">#</a> scroll 深分页</h5><p><code>from + size</code> 查询在 10000-50000 条数据（1000 到 5000 页）以内的时候还是可以的，但是如果数据过多的话，就会出现<strong>深分页</strong>问题。</p><p>为了解决上面的问题，elasticsearch 提出了一个 <code>scroll</code> 滚动的方式。</p><p><code>scroll</code> 类似于 <code>sql</code> 中的 <code>cursor</code>，使用 <code>scroll</code>，每次只能获取一页的内容，然后会返回一个 <code>scroll_id</code>。根据返回的这个 scroll_id 可以不断地获取下一页的内容，<strong>所以 scroll 并不适用于有跳页的情景</strong>。</p><p>向 ES 服务器发 GET请求：<code>http://127.0.0.1:9200/shopping/_search?scroll=1m</code> ，JSON 请求体如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong></p><ol><li><code>scroll=1m</code> 表示 <code>scroll_id</code> 保留 <code>1</code> 分钟可用；</li><li>使用 <code>scroll</code> 必须要将 <code>from</code> 设置为 <code>0</code>；</li><li><code>size</code> 决定后面每次调用 <code>_search</code> 搜索返回的数量</li></ol></blockquote><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;_scroll_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;FGluY2x1ZGVfY29udGV4dF91dWlkDXF1ZXJ5QW5kRmV0Y2gBFm0zTUU4WHA2UUJDbnlPakt3SlV4Z2cAAAAAAANTSRZpaFhpY3BqalNoT1NNaXRmUnpVdlJB&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">436</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">2999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;红米手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们可以通过数据返回的 <code>_scroll_id</code> 读取下一页内容，每次请求将会读取下 <code>2</code> 条（一开始 <code>size</code> 设置的为 <code>2</code>）数据，直到数据读取完毕或者 <code>scroll_id</code> 保留时间截止（也就是 <code>&quot;scroll&quot;: &quot;5m&quot;</code>），示例代码如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 分页查询（查询 scroll 下一页数据）
GET {{baseUrl}}/_search/scroll
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;scroll_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;FGluY2x1ZGVfY29udGV4dF91dWlkDXF1ZXJ5QW5kRmV0Y2gBFm0zTUU4WHA2UUJDbnlPakt3SlV4Z2cAAAAAAANWHhZpaFhpY3BqalNoT1NNaXRmUnpVdlJB&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scroll&quot;</span><span class="token operator">:</span> <span class="token string">&quot;5m&quot;</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong></p><p>请求的接口不再使用索引名了，而是 <code>_search/scroll</code>，其中 <code>GET</code> 和 <code>POST</code> 方法都可以使用。</p></blockquote><h6 id="scroll-深分页删除" tabindex="-1"><a class="header-anchor" href="#scroll-深分页删除" aria-hidden="true">#</a> scroll 深分页删除</h6><p>根据官方文档的说法，<code>scroll</code> 的搜索上下文会在 <code>scroll</code> 的保留时间截止后自动清除，但是我们知道 <code>scroll</code> 是非常消耗资源的，所以一个建议就是当不需要了 <code>scroll</code> 数据的时候，尽可能快的把 <code>scroll_id</code> 显式删除掉。</p><ul><li>清除指定的 <code>scroll_id</code></li></ul><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>DELETE {{baseUrl}}/_search/scroll/FGluY2x1ZGVfY29udGV...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>清除所有的 scroll</li></ul><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>DELETE {{baseUrl}}/_search/scroll/_all
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="search-after-深分页" tabindex="-1"><a class="header-anchor" href="#search-after-深分页" aria-hidden="true">#</a> search_after 深分页</h5><p><code>scroll</code> 的方式，官方的建议不用于实时的请求（一般用于数据导出），因为每一个 <code>scroll_id</code> 不仅会占用大量的资源，而且会生成历史快照，对于数据的变更不会反映到快照上。</p><p><code>search_after</code> 分页的方式是根据上一页的最后一条数据来确定下一页的位置，同时在分页请求的过程中，如果有索引数据的增删改查，这些变更也会实时的反映到游标上。但是需要注意，因为每一页的数据依赖于上一页最后一条数据，所以无法跳页请求。</p><p><strong>为了找到每一页最后一条数据，每个文档必须有一个全局唯一值，官方推荐使用 <code>_uid</code> 作为全局唯一值</strong>，其实使用业务层的 <code>id</code> 也可以。</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### search_after 深分页
GET {{baseUrl}}/shopping/_search
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;荣耀手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1999.00</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;4&quot;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">4999.00</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token string">&quot;3&quot;</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong></p><ol><li>使用 <code>search_after</code> 必须要设置 <code>from=0</code>；</li><li>这里我使用 <code>timestamp</code> 和 <code>_id</code> 作为唯一值排序；</li><li>我们在返回的最后一条数据里拿到 <code>sort</code> 属性的值传入到 <code>search_after</code>。</li></ol></blockquote><p>使用 <code>sort</code> 返回的值搜索下一页</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### search_after 深分页，查询下一页数据
GET {{baseUrl}}/shopping/_search
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;from&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;search_after&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token number">3</span>
  <span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
    <span class="token punctuation">{</span>
      <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;order&quot;</span><span class="token operator">:</span> <span class="token string">&quot;desc&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">]</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="三种分页对比" tabindex="-1"><a class="header-anchor" href="#三种分页对比" aria-hidden="true">#</a> 三种分页对比</h5><table><thead><tr><th>分页方式</th><th>性能</th><th>优点</th><th>缺点</th><th>场景</th></tr></thead><tbody><tr><td><code>from + size</code></td><td>低</td><td>灵活性好，实现简单</td><td>深度分页问题</td><td>数据量比较小，能容忍深度分页问题</td></tr><tr><td><code>scroll</code></td><td>中</td><td>解决了深度分页问题</td><td>无法反应数据的实时性（快照版本）维护成本高，需要维护一个 scroll_id</td><td>海量数据的导出需要查询海量结果集的数据</td></tr><tr><td><code>search_after</code></td><td>高</td><td>性能最好不存在深度分页问题能够反映数据的实时变更</td><td>实现复杂，需要有一个全局唯一的字段连续分页的实现会比较复杂，因为每一次查询都需要上次查询的结果</td><td>海量数据的分页</td></tr></tbody></table><h4 id="查询排序" tabindex="-1"><a class="header-anchor" href="#查询排序" aria-hidden="true">#</a> 查询排序</h4><p>如果你想通过排序查出价格最高的手机，向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/shopping/_search</code> ，请求如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 查询排序
GET {{baseUrl}}/shopping/_search
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;order&quot;</span><span class="token operator">:</span><span class="token string">&quot;desc&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">9</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">4999.00</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token number">4999.0</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">2999.00</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token number">2999.0</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;红米手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1999.00</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token number">1999.0</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;荣耀手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1999.00</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sort&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
          <span class="token number">1999.0</span>
        <span class="token punctuation">]</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="多条件查询" tabindex="-1"><a class="header-anchor" href="#多条件查询" aria-hidden="true">#</a> 多条件查询</h4><h5 id="must-多条件查询" tabindex="-1"><a class="header-anchor" href="#must-多条件查询" aria-hidden="true">#</a> <code>must</code> 多条件查询</h5><p>假设想查询<strong>华为</strong>牌子，<strong>同时</strong>价格为 <strong>4999</strong> 元的手机信息。这里需要借助 <code>must</code> 字段，相当于编程语言中的 <code>&amp;&amp;</code> 与条件。</p><p>向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/shopping/_search</code> ，请求如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 多条件查询
GET {{baseUrl}}/shopping/_search
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;must&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span><span class="token string">&quot;华为&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
        <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token number">4999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">10</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">2.3862944</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">2.3862944</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">4999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="should-多条件查询" tabindex="-1"><a class="header-anchor" href="#should-多条件查询" aria-hidden="true">#</a> <code>should</code> 多条件查询</h5><p>假设想查询类别为<strong>华为</strong>牌子，<strong>或者</strong>类别为<strong>小米</strong>牌子的手机信息。这里需要借助 <code>should</code> 字段，相当于编程语言中的 <code>||</code> 或条件。</p><p>向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/shopping/_search</code> ，请求如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 多条件查询（should 多条件查询）
GET {{baseUrl}}/shopping/_search
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;should&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span><span class="token string">&quot;小米&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
        <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span><span class="token string">&quot;华为&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">1.3862942</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.3862942</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">2999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.3862942</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;红米手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.3862942</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">4999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.3862942</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;荣耀手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="范围查询" tabindex="-1"><a class="header-anchor" href="#范围查询" aria-hidden="true">#</a> 范围查询</h4><p>假设想查询<strong>小米</strong>和<strong>华为</strong>的牌子，<strong>价格大于 2000 元</strong>的手机。</p><p>向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/shopping/_search</code> ，请求如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 范围查询
GET {{baseUrl}}/shopping/_search
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;bool&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;should&quot;</span><span class="token operator">:</span><span class="token punctuation">[</span><span class="token punctuation">{</span>
        <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span><span class="token string">&quot;小米&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span><span class="token punctuation">{</span>
        <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span><span class="token string">&quot;华为&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">]</span><span class="token punctuation">,</span>
      <span class="token property">&quot;filter&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;range&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
            <span class="token property">&quot;gt&quot;</span><span class="token operator">:</span> <span class="token number">2000</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">1.3862942</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.3862942</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">2999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.3862942</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">4999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="全文检索" tabindex="-1"><a class="header-anchor" href="#全文检索" aria-hidden="true">#</a> 全文检索</h4><p>这功能像搜索引擎那样，如品牌输入“小华”，返回结果带回品牌有“小米”和”华为“的信息。</p><p>向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/shopping/_search</code> ，请求如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 全文检索
GET {{baseUrl}}/shopping/_search
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;category&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;小华&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">0.6931471</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">0.6931471</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">2999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">0.6931471</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;红米手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">0.6931471</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">4999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">0.6931471</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;荣耀手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="全匹配" tabindex="-1"><a class="header-anchor" href="#全匹配" aria-hidden="true">#</a> 全匹配</h4><p>向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/shopping/_search</code> ，请求如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 全匹配
GET {{baseUrl}}/shopping/_search
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match_phrase&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;category&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;为&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">0.6931471</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">0.6931471</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">4999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">0.6931471</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;荣耀手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="高亮查询" tabindex="-1"><a class="header-anchor" href="#高亮查询" aria-hidden="true">#</a> 高亮查询</h4><p>高亮查询中使用 <code>&lt;em&gt;&lt;/em&gt;</code> 来高亮查询指定的全匹配关键词。</p><p>向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/shopping/_search</code> ，请求如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 高亮查询
GET {{baseUrl}}/shopping/_search
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;match_phrase&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;category&quot;</span> <span class="token operator">:</span> <span class="token string">&quot;为&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;fields&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;category&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span><span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">35</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">0.6931471</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">0.6931471</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">4999.00</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;华&lt;em&gt;为&lt;/em&gt;&quot;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">0.6931471</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;荣耀手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1999.00</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;highlight&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
            <span class="token string">&quot;华&lt;em&gt;为&lt;/em&gt;&quot;</span>
          <span class="token punctuation">]</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="聚合查询" tabindex="-1"><a class="header-anchor" href="#聚合查询" aria-hidden="true">#</a> 聚合查询</h4><p>聚合允许使用者对 es 文档进行统计分析，类似与关系型数据库中的 <code>group by</code>，当然还有很多其他的聚合，例如取最大值 <code>max</code> 、平均值 <code>avg</code> 等等。</p><h5 id="分组-group-by" tabindex="-1"><a class="header-anchor" href="#分组-group-by" aria-hidden="true">#</a> 分组（group by）</h5><p>按 <strong>price</strong> 字段进行分组，向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/shopping/_search</code> ，请求如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 聚合查询-分组（group by）
GET {{baseUrl}}/shopping/_search
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;price_group&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;price&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong></p><ul><li><code>aggs</code> 聚合操作</li><li><code>price_group</code> 分组名称，可以随意起</li><li><code>terms</code> 分组项</li><li><code>filed</code> 分组字段</li></ul></blockquote><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">5</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">2999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;红米手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小米&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/xm.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;3&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">4999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span><span class="token punctuation">,</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;shopping&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;4&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;title&quot;</span><span class="token operator">:</span> <span class="token string">&quot;荣耀手机&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;category&quot;</span><span class="token operator">:</span> <span class="token string">&quot;华为&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;images&quot;</span><span class="token operator">:</span> <span class="token string">&quot;http://www.gulixueyuan.com/hw.jpg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;price&quot;</span><span class="token operator">:</span> <span class="token number">1999.00</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggregations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;price_group&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;doc_count_error_upper_bound&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sum_other_doc_count&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;buckets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token number">1999.0</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token number">2999.0</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token number">4999.0</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面返回结果会附带原始数据的。若想要不附带原始数据的结果，请增加 <code>&quot;size&quot;: 0</code> 条件字段。如下请求：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 聚合查询-分组（group by）
GET {{baseUrl}}/shopping/_search
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;price_group&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;terms&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;price&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span><span class="token number">0</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggregations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;price_group&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;doc_count_error_upper_bound&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;sum_other_doc_count&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;buckets&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token number">1999.0</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">2</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token number">2999.0</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token punctuation">{</span>
          <span class="token property">&quot;key&quot;</span><span class="token operator">:</span> <span class="token number">4999.0</span><span class="token punctuation">,</span>
          <span class="token property">&quot;doc_count&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">]</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="平均值" tabindex="-1"><a class="header-anchor" href="#平均值" aria-hidden="true">#</a> 平均值</h5><p>按 <strong>price</strong> 字段进行求平均值，向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/shopping/_search</code> ，请求如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 聚合查询-平均值（avg）
GET {{baseUrl}}/shopping/_search
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;price_avg&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;avg&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;price&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span><span class="token number">0</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong></p><ul><li><code>aggs</code> 聚合操作</li><li><code>price_avg</code> 分组名称，可以随意起</li><li><code>avg</code> 求平均值</li><li><code>filed</code> 字段</li></ul></blockquote><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggregations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;price_avg&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">2999.0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="最大值与最小值" tabindex="-1"><a class="header-anchor" href="#最大值与最小值" aria-hidden="true">#</a> 最大值与最小值</h5><p>按 <strong>price</strong> 字段取最大值与最小值，向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/shopping/_search</code> ，请求如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 聚合查询-最大值与最小值（max,min）
GET {{baseUrl}}/shopping/_search
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;aggs&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
    <span class="token property">&quot;price_max&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;max&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;price&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price_min&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
      <span class="token property">&quot;min&quot;</span><span class="token operator">:</span><span class="token punctuation">{</span>
        <span class="token property">&quot;field&quot;</span><span class="token operator">:</span><span class="token string">&quot;price&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;size&quot;</span><span class="token operator">:</span><span class="token number">0</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;aggregations&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;price_min&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1999.0</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;price_max&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">4999.0</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="映射" tabindex="-1"><a class="header-anchor" href="#映射" aria-hidden="true">#</a> 映射</h3><p>有了索引库，等于有了数据库中的 <code>database</code>。</p><p>接下来就需要建索引库（<code>index</code>）中的映射了，类似于数据库（<code>database</code>）中的表结构（<code>table</code>）。</p><p>创建数据库表需要设置字段名称，类型，长度，约束等；索引库也一样，需要知道这个类型下有哪些字段，每个字段有哪些约束信息，这就叫做映射（<code>mapping</code>）。</p><h4 id="创建或者修改映射" tabindex="-1"><a class="header-anchor" href="#创建或者修改映射" aria-hidden="true">#</a> 创建或者修改映射</h4><p>创建 <strong>user</strong> 索引，向 ES 服务器发 PUT 请求：<code>http://127.0.0.1:9200/user</code> ，请求如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 创建 user 索引
PUT {{baseUrl}}/user
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;acknowledged&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;shards_acknowledged&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
  <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;user&quot;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>为 <strong>user</strong> 索引创建新的映射，向 ES 服务器发 PUT 请求：<code>http://127.0.0.1:9200/user/_mapping</code> ，请求如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 创建或者修改映射
PUT {{baseUrl}}/user/_mapping
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;sex&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;tel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;long&quot;</span><span class="token punctuation">,</span>
      <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong></p><ul><li>text：类型适用于需要被全文检索的字段，例如新闻正文、邮件内容等比较长的文字。text 类型会被 Lucene 分词器（Analyzer）处理为一个个词项，并使用 Lucene 倒排索引存储。text 字段不能被用于排序。如果需要使用该类型的字段只需要在定义映射时指定 JSON 中对应字段的 type 为 text。</li><li>keyword：适合简短、结构化字符串，例如主机名、姓名、商品名称等，可以用于过滤、排序、聚合检索，也可以用于精确查询。</li><li>index：索引字段，是否能被搜索，默认为 <code>true</code></li></ul></blockquote><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;acknowledged&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="查询映射" tabindex="-1"><a class="header-anchor" href="#查询映射" aria-hidden="true">#</a> 查询映射</h4><h5 id="查询所有映射" tabindex="-1"><a class="header-anchor" href="#查询所有映射" aria-hidden="true">#</a> 查询所有映射</h5><p>向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/_mapping</code> ，请求如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 查询所有映射
GET {{baseUrl}}/_mapping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;account&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;shopping&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;.apm-agent-configuration&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;.kibana_7.17.9_001&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;.tasks&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;.kibana_task_manager_7.17.9_001&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;.apm-custom-link&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong></p><p>由于查询全部映射数据量信息较多，这里就不完全展示。</p></blockquote><h5 id="查询指定映射" tabindex="-1"><a class="header-anchor" href="#查询指定映射" aria-hidden="true">#</a> 查询指定映射</h5><p>向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/user/_mapping</code> ，请求如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 查询指定映射
GET {{baseUrl}}/user/_mapping
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sex&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="映射案例" tabindex="-1"><a class="header-anchor" href="#映射案例" aria-hidden="true">#</a> 映射案例</h5><p>关于下面的新增映射数据、修改映射数据以及删除映射数据的操作与文档操作中增改删操作类似，下面不再重复赘述。</p><h6 id="新增映射数据" tabindex="-1"><a class="header-anchor" href="#新增映射数据" aria-hidden="true">#</a> 新增映射数据</h6><p>向 ES 服务器发 PUT 请求：<code>http://127.0.0.1:9200/user/_create/1001</code> ，请求如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 新增映射数据
PUT {{baseUrl}}/user/_create/1001
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span><span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;sex&quot;</span><span class="token operator">:</span><span class="token string">&quot;男的&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;tel&quot;</span><span class="token operator">:</span><span class="token string">&quot;18312345678&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;created&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="修改映射数据" tabindex="-1"><a class="header-anchor" href="#修改映射数据" aria-hidden="true">#</a> 修改映射数据</h6><p>把上一步骤中新增的用户映射数据中的 <code>sex</code> 字段从 “男” 改成 “男的”。</p><p>向 ES 服务器发 POST 请求：<code>http://127.0.0.1:9200/user/_update/1001</code> ，请求如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 修改映射数据
POST {{baseUrl}}/user/_update/1001
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;doc&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;sex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;男的&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_version&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
  <span class="token property">&quot;result&quot;</span><span class="token operator">:</span> <span class="token string">&quot;updated&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">2</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_seq_no&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_primary_term&quot;</span><span class="token operator">:</span> <span class="token number">1</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="查询指定条件映射数据" tabindex="-1"><a class="header-anchor" href="#查询指定条件映射数据" aria-hidden="true">#</a> 查询指定条件映射数据</h6><p>上一步骤已经完成了映射数据的新增和修改操作，接下来进行查询操作。</p><p>查找 name 含有 ”小“ 的信息数据</p><p>向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/user/_search</code> ，请求如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 查询指定条件映射数据
GET {{baseUrl}}/user/_search
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">0.2876821</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">0.2876821</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;sex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;tel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;18312345678&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查找 sex 含有 ”男“ 的信息数据</p><p>向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/user/_search</code> ，请求如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 查询指定条件映射数据（查找 sex 含有 ”男“ 的信息数据）
GET {{baseUrl}}/user/_search
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;sex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;男&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token null keyword">null</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应结果中没有出现我们查询结果信息，只因创建映射时 <code>&quot;sex&quot;</code> 的 <code>type</code> 为 <code>&quot;keyword&quot;</code>。</p><p><code>&quot;sex&quot;</code> 只能完全为 ”男的“，才能得出原数据，请求如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 查询指定条件映射数据（查找 sex 含有 ”男的“ 的信息数据）
GET {{baseUrl}}/user/_search
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;sex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;男的&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">0.2876821</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">0.2876821</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;sex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;男的&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;tel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;18312345678&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>查找 tel 是 “18312345678” 的信息数据</p><p>向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/user/_search</code> ，请求如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 查询指定条件映射数据（查找 tel 是 “18312345678” 的信息数据）
GET {{baseUrl}}/user/_search
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;tel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;18312345678&quot;</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;error&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;root_cause&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query_shard_exception&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;reason&quot;</span><span class="token operator">:</span> <span class="token string">&quot;failed to create query: Cannot search on field [tel] since it is not indexed.&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;index_uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;STtI7jZvRvqy9zvvYbBtNg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;user&quot;</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;search_phase_execution_exception&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;reason&quot;</span><span class="token operator">:</span> <span class="token string">&quot;all shards failed&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;phase&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;grouped&quot;</span><span class="token operator">:</span> <span class="token boolean">true</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;shard&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;node&quot;</span><span class="token operator">:</span> <span class="token string">&quot;ihXicpjjShOSMitfRzUvRA&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;reason&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;query_shard_exception&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;reason&quot;</span><span class="token operator">:</span> <span class="token string">&quot;failed to create query: Cannot search on field [tel] since it is not indexed.&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;index_uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;STtI7jZvRvqy9zvvYbBtNg&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;caused_by&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;illegal_argument_exception&quot;</span><span class="token punctuation">,</span>
            <span class="token property">&quot;reason&quot;</span><span class="token operator">:</span> <span class="token string">&quot;Cannot search on field [tel] since it is not indexed.&quot;</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;status&quot;</span><span class="token operator">:</span> <span class="token number">400</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>响应结果中出现异常，只因创建映射时 <code>&quot;tel&quot;</code> 的 <code>&quot;index&quot;</code> 为 <code>false</code>。</p><h3 id="javaapi" tabindex="-1"><a class="header-anchor" href="#javaapi" aria-hidden="true">#</a> JavaAPI</h3><h4 id="api-环境准备" tabindex="-1"><a class="header-anchor" href="#api-环境准备" aria-hidden="true">#</a> API 环境准备</h4>`,177),J={href:"https://www.elastic.co/guide/en/elasticsearch/client/java-rest/7.17/_changing_the_client_8217_s_initialization_code.html",target:"_blank",rel:"noopener noreferrer"},M=n("strong",null,"弃用",-1),F=p(`<h5 id="elasticsearch-java-api-client-使用" tabindex="-1"><a class="header-anchor" href="#elasticsearch-java-api-client-使用" aria-hidden="true">#</a> Elasticsearch Java API Client 使用</h5><h6 id="添加依赖" tabindex="-1"><a class="header-anchor" href="#添加依赖" aria-hidden="true">#</a> 添加依赖</h6><p>添加 Maven 的 POM 坐标依赖，如下：</p><div class="language-xml line-numbers-mode" data-ext="xml"><pre class="language-xml"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>project</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependencies</span><span class="token punctuation">&gt;</span></span>
    <span class="token comment">&lt;!-- elasticsearch-java sdk 依赖--&gt;</span>
    <span class="token comment">&lt;!-- https://www.elastic.co/guide/en/elasticsearch/client/java-api-client/7.17/installation.html --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>co.elastic.clients<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>elasticsearch-java<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>7.17.9<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>com.fasterxml.jackson.core<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jackson-databind<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.12.3<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token comment">&lt;!-- 解决提示异常：java.lang.NoClassDefFoundError: jakarta/json/JsonException --&gt;</span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>jakarta.json<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>jakarta.json-api<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.0.1<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-web<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.7.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>dependency</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>groupId</span><span class="token punctuation">&gt;</span></span>org.springframework.boot<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>groupId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>artifactId</span><span class="token punctuation">&gt;</span></span>spring-boot-starter-test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>artifactId</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>version</span><span class="token punctuation">&gt;</span></span>2.7.8<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>version</span><span class="token punctuation">&gt;</span></span>
      <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>scope</span><span class="token punctuation">&gt;</span></span>test<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>scope</span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependency</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>dependencies</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>project</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="客户端连接测试" tabindex="-1"><a class="header-anchor" href="#客户端连接测试" aria-hidden="true">#</a> 客户端连接测试</h6><p>准备好依赖之后，编写 SpringBoot 测试类，测试类代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">co<span class="token punctuation">.</span>elastic<span class="token punctuation">.</span>clients<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span></span><span class="token class-name">ElasticsearchClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">co<span class="token punctuation">.</span>elastic<span class="token punctuation">.</span>clients<span class="token punctuation">.</span>json<span class="token punctuation">.</span>jackson<span class="token punctuation">.</span></span><span class="token class-name">JacksonJsonpMapper</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">co<span class="token punctuation">.</span>elastic<span class="token punctuation">.</span>clients<span class="token punctuation">.</span>transport<span class="token punctuation">.</span></span><span class="token class-name">ElasticsearchTransport</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">co<span class="token punctuation">.</span>elastic<span class="token punctuation">.</span>clients<span class="token punctuation">.</span>transport<span class="token punctuation">.</span>endpoints<span class="token punctuation">.</span></span><span class="token class-name">BooleanResponse</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">co<span class="token punctuation">.</span>elastic<span class="token punctuation">.</span>clients<span class="token punctuation">.</span>transport<span class="token punctuation">.</span>rest_client<span class="token punctuation">.</span></span><span class="token class-name">RestClientTransport</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>apache<span class="token punctuation">.</span>http<span class="token punctuation">.</span></span><span class="token class-name">HttpHost</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>elasticsearch<span class="token punctuation">.</span>client<span class="token punctuation">.</span></span><span class="token class-name">RestClient</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>junit<span class="token punctuation">.</span>jupiter<span class="token punctuation">.</span>api<span class="token punctuation">.</span></span><span class="token class-name">Test</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">org<span class="token punctuation">.</span>springframework<span class="token punctuation">.</span>boot<span class="token punctuation">.</span>test<span class="token punctuation">.</span>context<span class="token punctuation">.</span></span><span class="token class-name">SpringBootTest</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">IOException</span></span><span class="token punctuation">;</span>

<span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticSearchDemoTests</span> <span class="token punctuation">{</span>

  <span class="token comment">// 创建低级客户端</span>
  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">RestClient</span> restClient <span class="token operator">=</span> <span class="token class-name">RestClient</span><span class="token punctuation">.</span><span class="token function">builder</span><span class="token punctuation">(</span>
                  <span class="token keyword">new</span> <span class="token class-name">HttpHost</span><span class="token punctuation">(</span><span class="token string">&quot;localhost&quot;</span><span class="token punctuation">,</span> <span class="token number">9200</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
          <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  
  <span class="token comment">// 使用 Jackson 映射器创建传输层</span>
  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ElasticsearchTransport</span> transport <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">RestClientTransport</span><span class="token punctuation">(</span>
          restClient<span class="token punctuation">,</span> <span class="token keyword">new</span> <span class="token class-name">JacksonJsonpMapper</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token comment">// 创建 API 客户端</span>
  <span class="token keyword">private</span> <span class="token keyword">final</span> <span class="token class-name">ElasticsearchClient</span> client <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ElasticsearchClient</span><span class="token punctuation">(</span>transport<span class="token punctuation">)</span><span class="token punctuation">;</span>

  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testConnect</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token comment">// API 响应值，状态码 （1xx, 2xx 和 3xx 是 true 但是 4xx 是 false）</span>
    <span class="token keyword">final</span> <span class="token class-name">BooleanResponse</span> ping <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">ping</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ES 的 API 响应结果为：&quot;</span> <span class="token operator">+</span> ping<span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">closeClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>

  <span class="token doc-comment comment">/**
   * 关闭传输层和客户端
   *
   * <span class="token keyword">@throws</span> <span class="token reference"><span class="token class-name">IOException</span></span> IO异常
   */</span>
  <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">closeClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token comment">// 关闭 ES 客户端</span>
    transport<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    restClient<span class="token punctuation">.</span><span class="token function">close</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>2023-04-06 12:41:25.186  WARN 11104 --- [           main] org.elasticsearch.client.RestClient      : request [HEAD http://localhost:9200/] returned 1 warnings: [299 Elasticsearch-7.17.9-ef48222227ee6b9e70e502f0f0daa52435ee634d &quot;Elasticsearch built-in security features are not enabled. Without authentication, your cluster could be accessible to anyone. See https://www.elastic.co/guide/en/elasticsearch/reference/7.17/security-minimal-setup.html to enable security.&quot;]
ES 的 API 响应结果为：true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="api-索引操作" tabindex="-1"><a class="header-anchor" href="#api-索引操作" aria-hidden="true">#</a> API 索引操作</h4><h5 id="创建索引-1" tabindex="-1"><a class="header-anchor" href="#创建索引-1" aria-hidden="true">#</a> 创建索引</h5><p>这里通过 API 创建索引名称为 “order” 的索引，示例代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticSearchDemoTests</span> <span class="token punctuation">{</span>

  <span class="token comment">//  ...</span>

  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testCreateIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">CreateIndexResponse</span> createIndexResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">indices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>builder <span class="token operator">-&gt;</span> builder<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;order&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">final</span> <span class="token keyword">boolean</span> acknowledged <span class="token operator">=</span> createIndexResponse<span class="token punctuation">.</span><span class="token function">acknowledged</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ES 的 API 创建索引的响应结果为：&quot;</span> <span class="token operator">+</span> acknowledged<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">closeClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ES 的 API 创建索引的响应结果为：true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h5 id="查询索引-1" tabindex="-1"><a class="header-anchor" href="#查询索引-1" aria-hidden="true">#</a> 查询索引</h5><p>查询上一步创建好的 “order” 索引信息，示例代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticSearchDemoTests</span> <span class="token punctuation">{</span>

  <span class="token comment">//  ...</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testGetIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">GetIndexResponse</span> indexResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">indices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>builder <span class="token operator">-&gt;</span> builder<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;order&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">final</span> <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">IndexState</span><span class="token punctuation">&gt;</span></span> result <span class="token operator">=</span> indexResponse<span class="token punctuation">.</span><span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ES 的 API 获取索引的响应结果为：&quot;</span> <span class="token operator">+</span> result<span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ES 的 API 获取索引的响应结果为：{order=IndexState: {&quot;aliases&quot;:{},&quot;mappings&quot;:{},&quot;settings&quot;:{&quot;index&quot;:{&quot;number_of_shards&quot;:&quot;1&quot;,&quot;number_of_replicas&quot;:&quot;1&quot;,&quot;routing&quot;:{&quot;allocation&quot;:{&quot;include&quot;:{&quot;_tier_preference&quot;:&quot;data_content&quot;}}},&quot;provided_name&quot;:&quot;order&quot;,&quot;creation_date&quot;:&quot;1680773665064&quot;,&quot;uuid&quot;:&quot;k0G_yulUSIq5z6Ko3kNd8A&quot;,&quot;version&quot;:{&quot;created&quot;:&quot;7170999&quot;}}}}}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong></p><p>如果查询的索引不存在，控制台会输出 <code>co.elastic.clients.elasticsearch._types.ElasticsearchException: [es/indices.get] failed: [index_not_found_exception] no such index [xxx]</code> 异常信息</p></blockquote><h5 id="删除索引" tabindex="-1"><a class="header-anchor" href="#删除索引" aria-hidden="true">#</a> 删除索引</h5><p>这里把上一步查询的 “order”索引信息进行删除，示例代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticSearchDemoTests</span> <span class="token punctuation">{</span>

  <span class="token comment">// ...  </span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testDeleteIndex</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">DeleteIndexResponse</span> deleteIndexResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">indices</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>builder <span class="token operator">-&gt;</span> builder<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;order&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">final</span> <span class="token keyword">boolean</span> acknowledged <span class="token operator">=</span> deleteIndexResponse<span class="token punctuation">.</span><span class="token function">acknowledged</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ES 的 API 删除索引的响应结果为：&quot;</span> <span class="token operator">+</span> acknowledged<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">closeClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ES 的 API 删除索引的响应结果为：true
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再次查询 “order”索引信息，输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>co.elastic.clients.elasticsearch._types.ElasticsearchException: [es/indices.get] failed: [index_not_found_exception] no such index [order]
...
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>从输出的结果可知，我们已经成功将其删除。</p><h4 id="api-文档操作" tabindex="-1"><a class="header-anchor" href="#api-文档操作" aria-hidden="true">#</a> API 文档操作</h4><h5 id="创建文档-1" tabindex="-1"><a class="header-anchor" href="#创建文档-1" aria-hidden="true">#</a> 创建文档</h5><h6 id="查询-user-文档索引及所有数据" tabindex="-1"><a class="header-anchor" href="#查询-user-文档索引及所有数据" aria-hidden="true">#</a> 查询 <code>user</code> 文档索引及所有数据</h6><p>在进行文档的操作之前，我们先来查询一下是否存在对应的操作的索引信息以及存在的数据，以 <code>user</code> 为例：</p><ul><li><strong>查询索引信息</strong></li></ul><p>向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/user</code> ，请求如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 查询 user 索引
GET {{baseUrl}}/user
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;user&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;aliases&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;mappings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;properties&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;text&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;sex&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;tel&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;keyword&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;settings&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;index&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
        <span class="token property">&quot;routing&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;allocation&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
            <span class="token property">&quot;include&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
              <span class="token property">&quot;_tier_preference&quot;</span><span class="token operator">:</span> <span class="token string">&quot;data_content&quot;</span>
            <span class="token punctuation">}</span>
          <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">,</span>
        <span class="token property">&quot;number_of_shards&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;provided_name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;creation_date&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1680238424301&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;number_of_replicas&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;uuid&quot;</span><span class="token operator">:</span> <span class="token string">&quot;STtI7jZvRvqy9zvvYbBtNg&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;created&quot;</span><span class="token operator">:</span> <span class="token string">&quot;7170999&quot;</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><strong>查询所有数据</strong></li></ul><p>向 ES 服务器发 GET 请求：<code>http://127.0.0.1:9200/user/_search</code> ，请求如下：</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 查询 user 文档数据
GET {{baseUrl}}/user/_search
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>服务器响应结果如下：</p><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;took&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
  <span class="token property">&quot;timed_out&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token property">&quot;_shards&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;successful&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
    <span class="token property">&quot;skipped&quot;</span><span class="token operator">:</span> <span class="token number">0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;failed&quot;</span><span class="token operator">:</span> <span class="token number">0</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;total&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
      <span class="token property">&quot;value&quot;</span><span class="token operator">:</span> <span class="token number">1</span><span class="token punctuation">,</span>
      <span class="token property">&quot;relation&quot;</span><span class="token operator">:</span> <span class="token string">&quot;eq&quot;</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>
    <span class="token property">&quot;max_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
    <span class="token property">&quot;hits&quot;</span><span class="token operator">:</span> <span class="token punctuation">[</span>
      <span class="token punctuation">{</span>
        <span class="token property">&quot;_index&quot;</span><span class="token operator">:</span> <span class="token string">&quot;user&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;_doc&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_id&quot;</span><span class="token operator">:</span> <span class="token string">&quot;1001&quot;</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_score&quot;</span><span class="token operator">:</span> <span class="token number">1.0</span><span class="token punctuation">,</span>
        <span class="token property">&quot;_source&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
          <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;小明&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;sex&quot;</span><span class="token operator">:</span> <span class="token string">&quot;男的&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;tel&quot;</span><span class="token operator">:</span> <span class="token string">&quot;18312345678&quot;</span><span class="token punctuation">,</span>
          <span class="token property">&quot;age&quot;</span><span class="token operator">:</span> <span class="token number">20</span>
        <span class="token punctuation">}</span>
      <span class="token punctuation">}</span>
    <span class="token punctuation">]</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="创建文档实体" tabindex="-1"><a class="header-anchor" href="#创建文档实体" aria-hidden="true">#</a> 创建文档实体</h6><p>从上述查询的 <code>user</code> 文档索引及所有数据的响应结果，可以看出我们需要新建一个 <code>User</code> 实体类，用于作为文档操作的实体封装，示例代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@Data</span>
<span class="token annotation punctuation">@NoArgsConstructor</span>
<span class="token annotation punctuation">@AllArgsConstructor</span>
<span class="token annotation punctuation">@Accessors</span><span class="token punctuation">(</span>chain <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">)</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">User</span> <span class="token punctuation">{</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> name<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> sex<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">String</span> tel<span class="token punctuation">;</span>
  <span class="token keyword">private</span> <span class="token class-name">Integer</span> age<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h6 id="编写测试方法" tabindex="-1"><a class="header-anchor" href="#编写测试方法" aria-hidden="true">#</a> 编写测试方法</h6><p>这里通过 API 向之前已经建好的 user 索引中新增数据，示例代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticSearchDemoTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testCreateDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">CreateResponse</span> createResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>builder <span class="token operator">-&gt;</span>
            builder<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;1002&quot;</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">document</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;小芳&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;女&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;17712345678&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ES 的 API 创建文档的响应结果为：&quot;</span> <span class="token operator">+</span> createResponse<span class="token punctuation">.</span><span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">closeClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ES 的 API 创建文档的响应结果为：Created
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>再次执行查询 <code>user</code> 索引下的数据，发现已经新增成功！</p><div class="language-http line-numbers-mode" data-ext="http"><pre class="language-http"><code>#### 查询 user 文档数据
GET {{baseUrl}}/user/_search
<span class="token header"><span class="token header-name keyword">Content-Type</span><span class="token punctuation">:</span> <span class="token header-value">application/json</span></span>
<span class="token application-json">
<span class="token punctuation">{</span>
  <span class="token property">&quot;query&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;match_all&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</span></code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="查询文档-1" tabindex="-1"><a class="header-anchor" href="#查询文档-1" aria-hidden="true">#</a> 查询文档</h5><p>这里<strong>查询</strong> <code>user</code> 索引下的 <code>id</code> 为 “1002” 的数据信息，示例代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticSearchDemoTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testQueryDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">GetResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> getResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>builder <span class="token operator">-&gt;</span> builder<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;1002&quot;</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ES 的 API 查询文档的响应结果为：&quot;</span> <span class="token operator">+</span> getResponse<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">closeClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ES 的 API 查询文档的响应结果为：User(name=小芳, sex=女, tel=17712345678, age=18)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong></p><p>如果查不到对应的字段值（比如：id 为 1003 不存在）控制台输出 <code>null</code>，避免后续使用中发生 <code>NullPointerException</code> 异常。</p></blockquote><h5 id="修改文档-1" tabindex="-1"><a class="header-anchor" href="#修改文档-1" aria-hidden="true">#</a> 修改文档</h5><p>把 <code>user</code> 索引下的 <code>name</code> 为 “小芳” <strong>修改</strong>为 “小丽”，示例代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticSearchDemoTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testUpdateDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token comment">// 使用集合封装需要修改的内容</span>
    <span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> userInfoMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    userInfoMap<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;小丽&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token keyword">final</span> <span class="token class-name">UpdateResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> updateResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">update</span><span class="token punctuation">(</span>builder <span class="token operator">-&gt;</span> builder<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;1002&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">doc</span><span class="token punctuation">(</span>userInfoMap<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ES 的 API 修改文档的响应结果为：&quot;</span> <span class="token operator">+</span> updateResponse<span class="token punctuation">.</span><span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">closeClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ES 的 API 修改文档的响应结果为：Updated
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong></p><p>如果修改的文档信息不存在，控制台会输出 <code>co.elastic.clients.elasticsearch._types.ElasticsearchException: [es/update] failed: [document_missing_exception] [_doc][10023]: document missing</code> 等异常信息。</p></blockquote><h5 id="删除文档-1" tabindex="-1"><a class="header-anchor" href="#删除文档-1" aria-hidden="true">#</a> 删除文档</h5><p>这里<strong>删除</strong> <code>user</code> 索引下的 <code>id</code> 为 “1002” 的数据信息，示例代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticSearchDemoTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testDeleteDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">DeleteResponse</span> deleteResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>builder <span class="token operator">-&gt;</span> builder<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;1002&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ES 的 API 删除文档的响应结果为：&quot;</span> <span class="token operator">+</span> deleteResponse<span class="token punctuation">.</span><span class="token function">result</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">closeClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span> 
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ES 的 API 删除文档的响应结果为：Deleted
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong></p><p>如果删除的文档信息不存在，控制台会输出 <code>NotFound</code> 。</p></blockquote><h5 id="批量添加文档" tabindex="-1"><a class="header-anchor" href="#批量添加文档" aria-hidden="true">#</a> 批量添加文档</h5><p>之前有提到文档的创建，但是这种方式添加数据的效率太慢了，我们采用批量添加文档方式用于提高数据的插入效率，示例代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticSearchDemoTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testBatchAddDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token comment">// 构建一个批量数据集合</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">BulkOperation</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BulkOperation<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>
                    builder <span class="token operator">-&gt;</span> builder
                            <span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;1003&quot;</span><span class="token punctuation">)</span>
                            <span class="token punctuation">.</span><span class="token function">document</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;小强&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;17812345678&quot;</span><span class="token punctuation">,</span> <span class="token number">30</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BulkOperation<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>
                    builder <span class="token operator">-&gt;</span> builder
                            <span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;1004&quot;</span><span class="token punctuation">)</span>
                            <span class="token punctuation">.</span><span class="token function">document</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;晓彤&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;女&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;18112345678&quot;</span><span class="token punctuation">,</span> <span class="token number">18</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BulkOperation<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">create</span><span class="token punctuation">(</span>
                    builder <span class="token operator">-&gt;</span> builder
                            <span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;1005&quot;</span><span class="token punctuation">)</span>
                            <span class="token punctuation">.</span><span class="token function">document</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">User</span><span class="token punctuation">(</span><span class="token string">&quot;小李&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;男&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;15512345678&quot;</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 调用 bulk 方法执行批量插入操作</span>
    <span class="token keyword">final</span> <span class="token class-name">BulkResponse</span> bulkResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">bulk</span><span class="token punctuation">(</span>builder <span class="token operator">-&gt;</span> builder<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">operations</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ES 的 API 批量添加文档的响应结果为：&quot;</span> <span class="token operator">+</span> bulkResponse<span class="token punctuation">.</span><span class="token function">items</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">closeClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ES 的 API 批量添加文档的响应结果为：[BulkResponseItem: {&quot;create&quot;:{&quot;_id&quot;:&quot;1003&quot;,&quot;_index&quot;:&quot;user&quot;,&quot;status&quot;:201,&quot;_primary_term&quot;:3,&quot;result&quot;:&quot;created&quot;,&quot;_seq_no&quot;:6,&quot;_shards&quot;:{&quot;failed&quot;:0.0,&quot;successful&quot;:1.0,&quot;total&quot;:2.0},&quot;_type&quot;:&quot;_doc&quot;,&quot;_version&quot;:1}}, BulkResponseItem: {&quot;create&quot;:{&quot;_id&quot;:&quot;1004&quot;,&quot;_index&quot;:&quot;user&quot;,&quot;status&quot;:201,&quot;_primary_term&quot;:3,&quot;result&quot;:&quot;created&quot;,&quot;_seq_no&quot;:7,&quot;_shards&quot;:{&quot;failed&quot;:0.0,&quot;successful&quot;:1.0,&quot;total&quot;:2.0},&quot;_type&quot;:&quot;_doc&quot;,&quot;_version&quot;:1}}, BulkResponseItem: {&quot;create&quot;:{&quot;_id&quot;:&quot;1005&quot;,&quot;_index&quot;:&quot;user&quot;,&quot;status&quot;:201,&quot;_primary_term&quot;:3,&quot;result&quot;:&quot;created&quot;,&quot;_seq_no&quot;:8,&quot;_shards&quot;:{&quot;failed&quot;:0.0,&quot;successful&quot;:1.0,&quot;total&quot;:2.0},&quot;_type&quot;:&quot;_doc&quot;,&quot;_version&quot;:1}}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>批量添加的核心是需要构建一个泛型为 <code>BulkOperation</code> 的 <code>ArrayList</code> 集合，实质上是将多个请求包装到一个集合中，进行统一请求，进行构建请求时调用 <code>bulk</code> 方法，实现批量添加效果。</p><h5 id="批量删除文档" tabindex="-1"><a class="header-anchor" href="#批量删除文档" aria-hidden="true">#</a> 批量删除文档</h5><p>之前有提到文档的删除，但是这种方式删除数据的效率太慢了，我们采用批量删除文档方式用于提高数据的删除效率，示例代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticSearchDemoTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testBatchDeleteDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token comment">// 构建一个批量数据集合</span>
    <span class="token class-name">List</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">BulkOperation</span><span class="token punctuation">&gt;</span></span> list <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">ArrayList</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BulkOperation<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>
                    builder <span class="token operator">-&gt;</span> builder
                            <span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;1004&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    list<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BulkOperation<span class="token punctuation">.</span>Builder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">delete</span><span class="token punctuation">(</span>
                    builder <span class="token operator">-&gt;</span> builder
                            <span class="token punctuation">.</span><span class="token function">id</span><span class="token punctuation">(</span><span class="token string">&quot;1005&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">build</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token comment">// 调用 bulk 方法执行批量删除操作</span>
    <span class="token keyword">final</span> <span class="token class-name">BulkResponse</span> bulkResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">bulk</span><span class="token punctuation">(</span>builder <span class="token operator">-&gt;</span> builder<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">operations</span><span class="token punctuation">(</span>list<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ES 的 API 批量删除文档的响应结果为：&quot;</span> <span class="token operator">+</span> bulkResponse<span class="token punctuation">.</span><span class="token function">items</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">closeClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ES 的 API 批量删除文档的响应结果为：[BulkResponseItem: {&quot;delete&quot;:{&quot;_id&quot;:&quot;1004&quot;,&quot;_index&quot;:&quot;user&quot;,&quot;status&quot;:200,&quot;_primary_term&quot;:3,&quot;result&quot;:&quot;deleted&quot;,&quot;_seq_no&quot;:15,&quot;_shards&quot;:{&quot;failed&quot;:0.0,&quot;successful&quot;:1.0,&quot;total&quot;:2.0},&quot;_type&quot;:&quot;_doc&quot;,&quot;_version&quot;:3}}, BulkResponseItem: {&quot;delete&quot;:{&quot;_id&quot;:&quot;1005&quot;,&quot;_index&quot;:&quot;user&quot;,&quot;status&quot;:200,&quot;_primary_term&quot;:3,&quot;result&quot;:&quot;deleted&quot;,&quot;_seq_no&quot;:16,&quot;_shards&quot;:{&quot;failed&quot;:0.0,&quot;successful&quot;:1.0,&quot;total&quot;:2.0},&quot;_type&quot;:&quot;_doc&quot;,&quot;_version&quot;:3}}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong></p><p>注意和批量新增操作的区别，批量新增构建的数据用的是 <code>create</code> 方法，而批量删除用的是 <code>delete</code> 方法。</p></blockquote><h5 id="全量查询" tabindex="-1"><a class="header-anchor" href="#全量查询" aria-hidden="true">#</a> 全量查询</h5><p>全量查询 “user” 索引下的所有数据，示例代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticSearchDemoTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testFullQueryDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">SearchResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>builder <span class="token operator">-&gt;</span> builder<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>q <span class="token operator">-&gt;</span> q<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>item <span class="token operator">-&gt;</span> item<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">final</span> <span class="token class-name">HitsMetadata</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> hitsMetadata <span class="token operator">=</span> searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">for</span> <span class="token punctuation">(</span><span class="token class-name">Hit</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> hit <span class="token operator">:</span> hitsMetadata<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
      <span class="token keyword">final</span> <span class="token class-name">User</span> user <span class="token operator">=</span> hit<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
      <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;user -&gt; &quot;</span> <span class="token operator">+</span> user<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    <span class="token keyword">assert</span> hitsMetadata<span class="token punctuation">.</span><span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token keyword">final</span> <span class="token keyword">long</span> total <span class="token operator">=</span> hitsMetadata<span class="token punctuation">.</span><span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ES 的 API 全量查询文档的数据总数为：&quot;</span> <span class="token operator">+</span> total<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">closeClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>user -&gt; User(name=小明, sex=男的, tel=18312345678, age=20)
user -&gt; User(name=小强, sex=男, tel=17812345678, age=30)
ES 的 API 全量查询文档的数据总数为：2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="分页查询-1" tabindex="-1"><a class="header-anchor" href="#分页查询-1" aria-hidden="true">#</a> 分页查询</h5><p>分页查询就是在全量查询的基础上增加了从第几条开始，每页显示几条。分页查询 “user” 索引下的数据，示例代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticSearchDemoTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testPagingQueryDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span><span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">SearchResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>builder <span class="token operator">-&gt;</span> builder<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>q <span class="token operator">-&gt;</span> q<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>item <span class="token operator">-&gt;</span> item<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">from</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">size</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>userHit <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;user -&gt; &quot;</span> <span class="token operator">+</span> userHit<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">assert</span> searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ES 的 API 分页查询文档的数据为：&quot;</span> <span class="token operator">+</span> searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">closeClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出的结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>user -&gt; User(name=小李, sex=男, tel=15512345678, age=65)
user -&gt; User(name=小明, sex=男的, tel=18312345678, age=20)
ES 的 API 分页查询文档的数据为：[Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1005&quot;,&quot;_score&quot;:1.0,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=小李, sex=男, tel=15512345678, age=65)&quot;}, Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1001&quot;,&quot;_score&quot;:1.0,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=小明, sex=男的, tel=18312345678, age=20)&quot;}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong></p><p><code>from</code> 默认是从 <code>0</code> 开始，<code>0</code> 表示第一页，<code>size</code> 表示当前查询显示数据条数，在之前 ES API 中已经说过了。</p></blockquote><h5 id="查询排序-1" tabindex="-1"><a class="header-anchor" href="#查询排序-1" aria-hidden="true">#</a> 查询排序</h5><p>根据 <code>tel</code> 字段<strong>降序</strong>，查询 “user” 索引下的数据，示例代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticSearchDemoTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testSortQueryDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">SearchResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>builder <span class="token operator">-&gt;</span> builder<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>q <span class="token operator">-&gt;</span> q<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>item <span class="token operator">-&gt;</span> item<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>s <span class="token operator">-&gt;</span> s<span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span>f <span class="token operator">-&gt;</span> f<span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;tel&quot;</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">order</span><span class="token punctuation">(</span><span class="token class-name">SortOrder<span class="token punctuation">.</span>Desc</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>userHit <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;user -&gt; &quot;</span> <span class="token operator">+</span> userHit<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">assert</span> searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ES 的 API 查询排序的数据为：&quot;</span> <span class="token operator">+</span> searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">closeClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>user -&gt; User(name=小明, sex=男, tel=18312345678, age=20)
user -&gt; User(name=晓彤, sex=女, tel=18112345678, age=18)
user -&gt; User(name=小强, sex=男, tel=17812345678, age=30)
user -&gt; User(name=小芳, sex=女, tel=17712345678, age=18)
user -&gt; User(name=小李, sex=男, tel=15512345678, age=65)
ES 的 API 查询排序的数据为：[Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1001&quot;,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=小明, sex=男, tel=18312345678, age=20)&quot;,&quot;sort&quot;:[&quot;18312345678&quot;]}, Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1004&quot;,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=晓彤, sex=女, tel=18112345678, age=18)&quot;,&quot;sort&quot;:[&quot;18112345678&quot;]}, Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1003&quot;,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=小强, sex=男, tel=17812345678, age=30)&quot;,&quot;sort&quot;:[&quot;17812345678&quot;]}, Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1002&quot;,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=小芳, sex=女, tel=17712345678, age=18)&quot;,&quot;sort&quot;:[&quot;17712345678&quot;]}, Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1005&quot;,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=小李, sex=男, tel=15512345678, age=65)&quot;,&quot;sort&quot;:[&quot;15512345678&quot;]}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="条件查询-1" tabindex="-1"><a class="header-anchor" href="#条件查询-1" aria-hidden="true">#</a> 条件查询</h5><p>根据 <code>tel</code> 字段<strong>降序</strong>，同时只显示 <code>name</code> 和 <code>tel</code> 字段，不显示 <code>sex</code> 字段，查询 “user” 索引下的数据，示例代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticSearchDemoTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testConditionQueryDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">SearchResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>builder <span class="token operator">-&gt;</span> builder<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>q <span class="token operator">-&gt;</span> q<span class="token punctuation">.</span><span class="token function">matchAll</span><span class="token punctuation">(</span>item <span class="token operator">-&gt;</span> item<span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span>s <span class="token operator">-&gt;</span> s<span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span>f <span class="token operator">-&gt;</span> f<span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;tel&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">order</span><span class="token punctuation">(</span><span class="token class-name">SortOrder<span class="token punctuation">.</span>Desc</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span>f <span class="token operator">-&gt;</span> f<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>item <span class="token operator">-&gt;</span> item<span class="token punctuation">.</span><span class="token function">includes</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;tel&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">excludes</span><span class="token punctuation">(</span><span class="token string">&quot;sex&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>userHit <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;user -&gt; &quot;</span> <span class="token operator">+</span> userHit<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">assert</span> searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ES 的 API 条件查询的数据为：&quot;</span> <span class="token operator">+</span> searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">closeClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>user -&gt; User(name=小明, sex=null, tel=18312345678, age=null)
user -&gt; User(name=晓彤, sex=null, tel=18112345678, age=null)
user -&gt; User(name=小强, sex=null, tel=17812345678, age=null)
user -&gt; User(name=小芳, sex=null, tel=17712345678, age=null)
user -&gt; User(name=小李, sex=null, tel=15512345678, age=null)
ES 的 API 条件查询的数据为：[Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1001&quot;,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=小明, sex=null, tel=18312345678, age=null)&quot;,&quot;sort&quot;:[&quot;18312345678&quot;]}, Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1004&quot;,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=晓彤, sex=null, tel=18112345678, age=null)&quot;,&quot;sort&quot;:[&quot;18112345678&quot;]}, Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1003&quot;,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=小强, sex=null, tel=17812345678, age=null)&quot;,&quot;sort&quot;:[&quot;17812345678&quot;]}, Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1002&quot;,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=小芳, sex=null, tel=17712345678, age=null)&quot;,&quot;sort&quot;:[&quot;17712345678&quot;]}, Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1005&quot;,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=小李, sex=null, tel=15512345678, age=null)&quot;,&quot;sort&quot;:[&quot;15512345678&quot;]}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong></p><p><code>includes</code> 是显示的字段，<code>excludes</code> 是排除的字段。</p></blockquote><h5 id="组合查询" tabindex="-1"><a class="header-anchor" href="#组合查询" aria-hidden="true">#</a> 组合查询</h5><h6 id="must-查询" tabindex="-1"><a class="header-anchor" href="#must-查询" aria-hidden="true">#</a> must 查询</h6><p>只查询 <code>sex</code> 为 ”男“ 并且 <code>name</code> 字段包含 ”小“，同时 <code>sex</code> 不为 ”女“，“user” 索引下的数据，示例代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticSearchDemoTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testCombinationMustQueryDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">SearchResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>builder <span class="token operator">-&gt;</span> builder<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>q <span class="token operator">-&gt;</span> q<span class="token punctuation">.</span><span class="token function">bool</span><span class="token punctuation">(</span>b <span class="token operator">-&gt;</span> b<span class="token punctuation">.</span><span class="token function">must</span><span class="token punctuation">(</span>m <span class="token operator">-&gt;</span> m<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>f <span class="token operator">-&gt;</span> f<span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;sex&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&quot;男&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">must</span><span class="token punctuation">(</span>m <span class="token operator">-&gt;</span> m<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>f <span class="token operator">-&gt;</span> f<span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&quot;小&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">mustNot</span><span class="token punctuation">(</span>m <span class="token operator">-&gt;</span> m<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>f <span class="token operator">-&gt;</span> f<span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;sex&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&quot;女&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>userHit <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;user -&gt; &quot;</span> <span class="token operator">+</span> userHit<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">assert</span> searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ES 的 API 组合 Must 查询的数据为：&quot;</span> <span class="token operator">+</span> searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">closeClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>user -&gt; User(name=小明, sex=男, tel=18312345678, age=20)
user -&gt; User(name=小强, sex=男, tel=17812345678, age=30)
user -&gt; User(name=小李, sex=男, tel=15512345678, age=65)
ES 的 API 组合 Must 查询的数据为：[Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1001&quot;,&quot;_score&quot;:0.8266785,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=小明, sex=男, tel=18312345678, age=20)&quot;}, Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1003&quot;,&quot;_score&quot;:0.8266785,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=小强, sex=男, tel=17812345678, age=30)&quot;}, Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1005&quot;,&quot;_score&quot;:0.8266785,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=小李, sex=男, tel=15512345678, age=65)&quot;}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong></p><p><code>must</code> 是必须满足所有条件，相当于编程语言中的 <code>&amp;&amp;</code> 与条件。</p></blockquote><h6 id="should-查询" tabindex="-1"><a class="header-anchor" href="#should-查询" aria-hidden="true">#</a> should 查询</h6><p>查询 <code>sex</code> 为 ”男“ 或者 <code>name</code> 字段包含 ”小“，“user” 索引下的数据，示例代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticSearchDemoTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testCombinationShouldQueryDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">SearchResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>builder <span class="token operator">-&gt;</span> builder<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>q <span class="token operator">-&gt;</span> q<span class="token punctuation">.</span><span class="token function">bool</span><span class="token punctuation">(</span>b <span class="token operator">-&gt;</span> b<span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span>m <span class="token operator">-&gt;</span> m<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>f <span class="token operator">-&gt;</span> f<span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;sex&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&quot;男&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">should</span><span class="token punctuation">(</span>m <span class="token operator">-&gt;</span> m<span class="token punctuation">.</span><span class="token function">match</span><span class="token punctuation">(</span>f <span class="token operator">-&gt;</span> f<span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span><span class="token string">&quot;小&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>userHit <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;user -&gt; &quot;</span> <span class="token operator">+</span> userHit<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">assert</span> searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ES 的 API 组合 Should 查询的数据为：&quot;</span> <span class="token operator">+</span> searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">closeClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>user -&gt; User(name=小明, sex=男, tel=18312345678, age=20)
user -&gt; User(name=小强, sex=男, tel=17812345678, age=30)
user -&gt; User(name=小李, sex=男, tel=15512345678, age=65)
user -&gt; User(name=小芳, sex=女, tel=17712345678, age=18)
ES 的 API 组合 Should 查询的数据为：[Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1001&quot;,&quot;_score&quot;:0.8266785,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=小明, sex=男, tel=18312345678, age=20)&quot;}, Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1003&quot;,&quot;_score&quot;:0.8266785,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=小强, sex=男, tel=17812345678, age=30)&quot;}, Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1005&quot;,&quot;_score&quot;:0.8266785,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=小李, sex=男, tel=15512345678, age=65)&quot;}, Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1002&quot;,&quot;_score&quot;:0.2876821,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=小芳, sex=女, tel=17712345678, age=18)&quot;}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong></p><p><code>should</code> 是满足条件即可，相当于编程语言中的 <code>||</code> 或条件又或者取并集。</p></blockquote><h5 id="范围查询-1" tabindex="-1"><a class="header-anchor" href="#范围查询-1" aria-hidden="true">#</a> 范围查询</h5><p>查询 <code>age</code> 大于 20 岁并且 <code>age</code> 小于 45 岁，“user” 索引下的数据，示例代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticSearchDemoTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testRangeQueryDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token comment">// 范围查询，gte()表示取大于等于，gt()表示大于，lte()表示小于等于</span>
    <span class="token keyword">final</span> <span class="token class-name">SearchResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>builder <span class="token operator">-&gt;</span> builder<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>q <span class="token operator">-&gt;</span> q<span class="token punctuation">.</span><span class="token function">range</span><span class="token punctuation">(</span>r <span class="token operator">-&gt;</span> r<span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">gte</span><span class="token punctuation">(</span><span class="token class-name">JsonData</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">20</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">lt</span><span class="token punctuation">(</span><span class="token class-name">JsonData</span><span class="token punctuation">.</span><span class="token function">of</span><span class="token punctuation">(</span><span class="token number">45</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>userHit <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;user -&gt; &quot;</span> <span class="token operator">+</span> userHit<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">assert</span> searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ES 的 API 范围查询的数据为：&quot;</span> <span class="token operator">+</span> searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">closeClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>user -&gt; User(name=小明, sex=男, tel=18312345678, age=20)
user -&gt; User(name=小强, sex=男, tel=17812345678, age=30)
ES 的 API 范围查询的数据为：[Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1001&quot;,&quot;_score&quot;:1.0,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=小明, sex=男, tel=18312345678, age=20)&quot;}, Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1003&quot;,&quot;_score&quot;:1.0,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=小强, sex=男, tel=17812345678, age=30)&quot;}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h5 id="模糊查询" tabindex="-1"><a class="header-anchor" href="#模糊查询" aria-hidden="true">#</a> 模糊查询</h5><p>模糊查询 <code>name</code> 为 “小” ，“user” 索引下的数据，示例代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticSearchDemoTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testFuzzyQueryDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token comment">// 模糊查询，fuzziness 它可以被设置为 “0”，“1”，“2” 或 “auto”。“auto”是推荐的选项，它会根据查询词的长度定义距离。</span>
    <span class="token keyword">final</span> <span class="token class-name">SearchResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>builder <span class="token operator">-&gt;</span> builder<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>q <span class="token operator">-&gt;</span> q<span class="token punctuation">.</span><span class="token function">fuzzy</span><span class="token punctuation">(</span>r <span class="token operator">-&gt;</span> r<span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;name&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token string">&quot;小&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">fuzziness</span><span class="token punctuation">(</span><span class="token string">&quot;auto&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>userHit <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;user -&gt; &quot;</span> <span class="token operator">+</span> userHit<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">assert</span> searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ES 的 API 模糊查询的数据为：&quot;</span> <span class="token operator">+</span> searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">closeClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>user -&gt; User(name=小明, sex=男, tel=18312345678, age=20)
user -&gt; User(name=小芳, sex=女, tel=17712345678, age=18)
user -&gt; User(name=小强, sex=男, tel=17812345678, age=30)
user -&gt; User(name=小李, sex=男, tel=15512345678, age=65)
ES 的 API 模糊查询的数据为：[Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1001&quot;,&quot;_score&quot;:0.2876821,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=小明, sex=男, tel=18312345678, age=20)&quot;}, Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1002&quot;,&quot;_score&quot;:0.2876821,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=小芳, sex=女, tel=17712345678, age=18)&quot;}, Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1003&quot;,&quot;_score&quot;:0.2876821,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=小强, sex=男, tel=17812345678, age=30)&quot;}, Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1005&quot;,&quot;_score&quot;:0.2876821,&quot;_type&quot;:&quot;_doc&quot;,&quot;_source&quot;:&quot;User(name=小李, sex=男, tel=15512345678, age=65)&quot;}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong></p><p>在实际的搜索中，我们有时候会打错字，从而导致搜索不到。在Elasticsearch中，我们可以使用fuzziness属性来进行模糊查询，从而达到搜索有错别字的情形。</p><p>match 查询具有 “fuzziness” 属性。它可以被设置为 “0”，“1”，“2” 或 “auto”。“auto” 是推荐的选项，它会根据查询词的长度定义距离。</p><p>返回包含与搜索词相似的词的文档，以Levenshtein编辑距离测量。</p><p>编辑距离是将一个术语转换为另一个术语所需的一个字符更改的次数。 这些更改可以包括：</p><ul><li>更改字符（box→fox）</li><li>删除字符（black→lack）</li><li>插入字符（sic→sick）</li><li>转置两个相邻字符（act→cat）</li></ul><p>为了找到相似的词，模糊查询会在指定的编辑距离内创建搜索词的所有可能变化或扩展的集合。 查询然后返回每个扩展的完全匹配。</p></blockquote><h5 id="高亮查询-1" tabindex="-1"><a class="header-anchor" href="#高亮查询-1" aria-hidden="true">#</a> 高亮查询</h5><p>高亮查询 <code>sex</code> 为 “女” ，“user” 索引下的数据，示例代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticSearchDemoTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testHighlightQueryDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token comment">// 对查询的字段内容进行高亮显示，preTags-设置标签前缀，postTags-设置标签后缀</span>
    <span class="token keyword">final</span> <span class="token class-name">SearchResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>s <span class="token operator">-&gt;</span> s<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">query</span><span class="token punctuation">(</span>q <span class="token operator">-&gt;</span> q<span class="token punctuation">.</span><span class="token function">term</span><span class="token punctuation">(</span>t <span class="token operator">-&gt;</span> t<span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;sex&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token string">&quot;女&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
                    <span class="token punctuation">.</span><span class="token function">highlight</span><span class="token punctuation">(</span>h <span class="token operator">-&gt;</span> h<span class="token punctuation">.</span><span class="token function">fields</span><span class="token punctuation">(</span><span class="token string">&quot;sex&quot;</span><span class="token punctuation">,</span> f <span class="token operator">-&gt;</span> f<span class="token punctuation">.</span><span class="token function">preTags</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;font color=&#39;red&#39;&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">postTags</span><span class="token punctuation">(</span><span class="token string">&quot;&lt;/font&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>userHit <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;user -&gt; &quot;</span> <span class="token operator">+</span> userHit<span class="token punctuation">.</span><span class="token function">source</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token keyword">assert</span> searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">total</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">!=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
    <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ES 的 API 高亮查询的数据为：&quot;</span> <span class="token operator">+</span> searchResponse<span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">hits</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">closeClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>user -&gt; User(name=小芳, sex=女, tel=17712345678, age=18)
user -&gt; User(name=晓彤, sex=女, tel=18112345678, age=18)
ES 的 API 高亮查询的数据为：[Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1002&quot;,&quot;_score&quot;:0.87546873,&quot;_type&quot;:&quot;_doc&quot;,&quot;highlight&quot;:{&quot;sex&quot;:[&quot;&lt;font color=&#39;red&#39;&gt;女&lt;/font&gt;&quot;]},&quot;_source&quot;:&quot;User(name=小芳, sex=女, tel=17712345678, age=18)&quot;}, Hit: {&quot;_index&quot;:&quot;user&quot;,&quot;_id&quot;:&quot;1004&quot;,&quot;_score&quot;:0.87546873,&quot;_type&quot;:&quot;_doc&quot;,&quot;highlight&quot;:{&quot;sex&quot;:[&quot;&lt;font color=&#39;red&#39;&gt;女&lt;/font&gt;&quot;]},&quot;_source&quot;:&quot;User(name=晓彤, sex=女, tel=18112345678, age=18)&quot;}]
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong></p><p><code>highlight</code> 高亮查询方法，preTags-设置标签前缀，postTags-设置标签后缀</p></blockquote><h5 id="聚合查询-1" tabindex="-1"><a class="header-anchor" href="#聚合查询-1" aria-hidden="true">#</a> 聚合查询</h5><h6 id="最大值查询" tabindex="-1"><a class="header-anchor" href="#最大值查询" aria-hidden="true">#</a> 最大值查询</h6><p>聚合查询 <code>age</code> 为最大年龄，“user” 索引下的数据，示例代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticSearchDemoTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testAggregateMaxQueryDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token comment">// 聚合查询，取最大年龄</span>
    <span class="token class-name">SearchResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>s <span class="token operator">-&gt;</span> s<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">aggregations</span><span class="token punctuation">(</span><span class="token string">&quot;maxAge&quot;</span><span class="token punctuation">,</span> a <span class="token operator">-&gt;</span> a<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span>m <span class="token operator">-&gt;</span> m<span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
            <span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    searchResponse<span class="token punctuation">.</span><span class="token function">aggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> value<span class="token punctuation">)</span> <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ES 的 API 聚合查询的最大年龄（&quot;</span> <span class="token operator">+</span> key <span class="token operator">+</span> <span class="token string">&quot;）为：&quot;</span> <span class="token operator">+</span> value<span class="token punctuation">.</span><span class="token function">max</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">value</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;岁&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">closeClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ES 的 API 聚合查询的最大年龄（maxAge）为：65.0岁
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p><strong>注意</strong></p><p>聚合查询时，索引的字段映射的 <code>type</code> 不能为 <code>keyword</code> ，可以为 <code>float</code>、<code>long</code>、<code>integer</code>，否则查询时会提示异常信息 “Field [age] of type [keyword] is not supported for aggregation [max]”</p></blockquote><blockquote><p><strong>说明</strong></p><p>这里只列举最大值的查询，最小值的查询和平均值的查询可以直接把 API 中的 max 方法改成 min 方法和 avg 方法即可！</p></blockquote><h5 id="分组查询" tabindex="-1"><a class="header-anchor" href="#分组查询" aria-hidden="true">#</a> 分组查询</h5><p>对 <code>age</code> 进行分组查询，“user” 索引下的数据，示例代码如下：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token annotation punctuation">@SpringBootTest</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">ElasticSearchDemoTests</span> <span class="token punctuation">{</span>
  <span class="token annotation punctuation">@Test</span>
  <span class="token keyword">void</span> <span class="token function">testGroupQueryDocument</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">IOException</span> <span class="token punctuation">{</span>
    <span class="token keyword">final</span> <span class="token class-name">SearchResponse</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">User</span><span class="token punctuation">&gt;</span></span> searchResponse <span class="token operator">=</span> client<span class="token punctuation">.</span><span class="token function">search</span><span class="token punctuation">(</span>s <span class="token operator">-&gt;</span> s<span class="token punctuation">.</span><span class="token function">index</span><span class="token punctuation">(</span><span class="token string">&quot;user&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">aggregations</span><span class="token punctuation">(</span><span class="token string">&quot;ageGroup&quot;</span><span class="token punctuation">,</span>
            a <span class="token operator">-&gt;</span> a<span class="token punctuation">.</span><span class="token function">terms</span><span class="token punctuation">(</span>t <span class="token operator">-&gt;</span> t<span class="token punctuation">.</span><span class="token function">field</span><span class="token punctuation">(</span><span class="token string">&quot;age&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token class-name">User</span><span class="token punctuation">.</span><span class="token keyword">class</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    searchResponse<span class="token punctuation">.</span><span class="token function">aggregations</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span><span class="token string">&quot;ageGroup&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">lterms</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">buckets</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">array</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            <span class="token punctuation">.</span><span class="token function">forEach</span><span class="token punctuation">(</span>f <span class="token operator">-&gt;</span> <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;ES 的 API 分组查询的年龄为（&quot;</span> <span class="token operator">+</span> f<span class="token punctuation">.</span><span class="token function">key</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;）数量为：&quot;</span> <span class="token operator">+</span> f<span class="token punctuation">.</span><span class="token function">docCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token function">closeClient</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出结果如下：</p><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>ES 的 API 分组查询的年龄为（18）数量为：2
ES 的 API 分组查询的年龄为（20）数量为：1
ES 的 API 分组查询的年龄为（30）数量为：1
ES 的 API 分组查询的年龄为（65）数量为：1
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><blockquote><p><strong>说明</strong></p><p>分组查询实质上是聚合查询的一种，其实就是把聚合操作方法（比如：求最大值 <code>max</code>）换成了 <code>terms</code> 方法了。</p></blockquote><h2 id="elasticsearch-进阶" tabindex="-1"><a class="header-anchor" href="#elasticsearch-进阶" aria-hidden="true">#</a> ElasticSearch 进阶</h2><h2 id="elasticsearch-集成" tabindex="-1"><a class="header-anchor" href="#elasticsearch-集成" aria-hidden="true">#</a> ElasticSearch 集成</h2><h2 id="elasticsearch-优化" tabindex="-1"><a class="header-anchor" href="#elasticsearch-优化" aria-hidden="true">#</a> ElasticSearch 优化</h2><h2 id="参考" tabindex="-1"><a class="header-anchor" href="#参考" aria-hidden="true">#</a> 参考</h2>`,153),V={href:"https://www.bilibili.com/video/BV1hh411D7sb",target:"_blank",rel:"noopener noreferrer"},Y={href:"https://blog.csdn.net/u011863024/article/details/115721328",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://blog.csdn.net/ChengHuanHuaning/article/details/117696054",target:"_blank",rel:"noopener noreferrer"},W={href:"https://blog.csdn.net/abc123lzf/article/details/102957060",target:"_blank",rel:"noopener noreferrer"},X={href:"https://blog.csdn.net/b___w/article/details/123924063",target:"_blank",rel:"noopener noreferrer"};function K($,nn){const c=e("RouterLink"),t=e("ExternalLinkIcon");return l(),i("div",null,[h,n("p",null,[s("关于 ElasticSearch 环境的搭建，请参考文档："),a(c,{to:"/guide/develop/data-storage/elasticsearch%E7%8E%AF%E5%A2%83%E6%90%AD%E5%BB%BA%E6%8C%87%E5%8D%97.html"},{default:r(()=>[s("elasticsearch环境搭建指南")]),_:1})]),_,n("p",null,[s("为了省事，这里以 idea 开发工具中自带的 "),x,s(" 插件为例进行请求测试（下同），当然你可以选择 "),n("a",f,[s("postman"),a(t)]),s(" 或者 "),n("a",w,[s("Apifox"),a(t)]),s(" 或者其他工具来测试。")]),j,n("p",null,[s("出现上述错误，可以尝试安装 "),E,s(" ，安装参考链接："),n("a",S,[s("https://www.cnblogs.com/shenxiaolin/p/16662793.html"),a(t)])]),T,n("p",null,[s("提到批量操作文档，我们需要使用到 "),U,s(),I,s("的操作 API。官方说明："),n("a",R,[s("docs-bulk"),a(t)])]),P,n("p",null,[s("关于批量操作，我这里选择使用 kibana 的 "),A,s(" 终端控制台来操作（下同），在线测试地址："),n("a",C,[s("http://localhost:5601/app/dev_tools#/console"),a(t)])]),G,O,B,H,D,n("p",null,[s("测试集地址："),n("a",z,[s("https://download.elastic.co/demos/kibana/gettingstarted/accounts.zip"),a(t)])]),N,n("p",null,[s("查找所有文档内容，向 ES 服务器发 GET请求："),n("a",Q,[s("http://127.0.0.1:9200/shopping/_search"),a(t)]),s(" ，JSON 请求体如下：")]),L,n("p",null,[s("在 ES 7.15.0 版本之后，ES 官方将它的高级客户端 "),n("a",J,[s("RestHighLevelClient 标记为"),M,s("状态"),a(t)]),s("。同时推出了全新的 java API 客户端 Elasticsearch Java API Client，该客户端也将在 Elasticsearch8.0 及以后版本中成为官方推荐使用的客户端。")]),F,n("ul",null,[n("li",null,[n("a",V,[s("https://www.bilibili.com/video/BV1hh411D7sb"),a(t)])]),n("li",null,[n("a",Y,[s("https://blog.csdn.net/u011863024/article/details/115721328"),a(t)])]),n("li",null,[n("a",Z,[s("https://blog.csdn.net/ChengHuanHuaning/article/details/117696054"),a(t)])]),n("li",null,[n("a",W,[s("https://blog.csdn.net/abc123lzf/article/details/102957060"),a(t)])]),n("li",null,[n("a",X,[s("https://blog.csdn.net/b___w/article/details/123924063"),a(t)])])])])}const an=u(y,[["render",K],["__file","elasticsearch-study-guide.html.vue"]]);export{an as default};
