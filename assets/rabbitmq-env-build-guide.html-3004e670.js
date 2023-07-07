import{_ as a,W as n,X as s,a0 as e}from"./framework-eca38234.js";const t={},i=e(`<h2 id="docker-下环境搭建命令总结" tabindex="-1"><a class="header-anchor" href="#docker-下环境搭建命令总结" aria-hidden="true">#</a> docker 下环境搭建命令总结</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 1.查询可用镜像（一般选择官方或者使用最多的镜像）</span>
<span class="token function">docker</span> search rabbitmq

<span class="token comment"># 2.拉取镜像（默认拉取最新的，如果要选择指定版本的话，可以去 hub.docker.com 官网查找）</span>
<span class="token function">docker</span> pull rabbitmq

<span class="token comment"># 3.查看拉取的镜像，看看是否拉取成功</span>
<span class="token function">docker</span> images

<span class="token comment"># 4.启动rabbitmq容器，默认用户访问账密为：guest / guest，这里指定账密为：root / root</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--hostname</span> my-rabbit <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--name</span> rabbitmq <span class="token parameter variable">-e</span> <span class="token assign-left variable">RABBITMQ_DEFAULT_USER</span><span class="token operator">=</span><span class="token punctuation">[</span>访问账号<span class="token punctuation">]</span> <span class="token parameter variable">-e</span> <span class="token assign-left variable">RABBITMQ_DEFAULT_PASS</span><span class="token operator">=</span><span class="token punctuation">[</span>访问密码<span class="token punctuation">]</span>  <span class="token parameter variable">-p</span> <span class="token punctuation">[</span>管理后台访问的外网端口<span class="token punctuation">]</span>:15672 <span class="token parameter variable">-p</span> <span class="token punctuation">[</span>程序访问的外网端口<span class="token punctuation">]</span>:5672 rabbitmq

<span class="token comment"># 示例：</span>
<span class="token function">docker</span> run <span class="token parameter variable">-d</span> <span class="token parameter variable">--hostname</span> my-rabbit <span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token parameter variable">--name</span> rabbitmq <span class="token parameter variable">-e</span> <span class="token assign-left variable">RABBITMQ_DEFAULT_USER</span><span class="token operator">=</span>root <span class="token parameter variable">-e</span> <span class="token assign-left variable">RABBITMQ_DEFAULT_PASS</span><span class="token operator">=</span>root  <span class="token parameter variable">-p</span> <span class="token number">15672</span>:15672 <span class="token parameter variable">-p</span> <span class="token number">5672</span>:5672 rabbitmq

<span class="token comment"># 5.进入容器</span>
<span class="token function">docker</span> <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> <span class="token punctuation">[</span>容器id或者容器名称<span class="token punctuation">]</span> /bin/bash
示例：docker <span class="token builtin class-name">exec</span> <span class="token parameter variable">-it</span> rabbitmq /bin/bash

<span class="token comment"># 6.修改配置，启用 rabbit 管理后台，这里必须执行此命令才访问管理后台，并执行 exit 命令退出容器</span>
rabbitmq-plugins <span class="token builtin class-name">enable</span> rabbitmq_management

<span class="token comment"># 7.访问 rabbit 管理后台页面，将下面地址复制到浏览器进行访问，访问账密为设置的登录账密，这里为：root / root</span>
http://<span class="token punctuation">[</span>宿主机ip<span class="token punctuation">]</span>:<span class="token punctuation">[</span>外网映射端口<span class="token punctuation">]</span>
示例：http://localhost:15672
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),p=[i];function l(r,c){return n(),s("div",null,p)}const b=a(t,[["render",l],["__file","rabbitmq-env-build-guide.html.vue"]]);export{b as default};
