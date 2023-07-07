import{_ as s,W as n,X as a,a1 as e}from"./framework-158a71b3.js";const i={},r=e(`<h2 id="docker-下环境搭建命令总结" tabindex="-1"><a class="header-anchor" href="#docker-下环境搭建命令总结" aria-hidden="true">#</a> docker 下环境搭建命令总结</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 拉取镜像</span>
<span class="token function">docker</span> pull redis:6.2.7

<span class="token comment"># 新建挂载的配置文件和数据目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/lighthouse/docker/redis/conf
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/lighthouse/docker/redis/data

<span class="token comment"># 上传 redis.conf 配置到 /home/lighthouse/docker/redis/conf 目录下或者复制 redis.conf 配置内容</span>
<span class="token comment"># 建议上传</span>

<span class="token comment"># 启动命令（带登录密码 root 并自启动）</span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> redis <span class="token punctuation">\\</span>
<span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
<span class="token parameter variable">-it</span> <span class="token parameter variable">-p</span> <span class="token number">6379</span>:6379 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/lighthouse/docker/redis/conf/redis.conf:/usr/local/etc/redis/redis.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/lighthouse/docker/redis/data:/usr/local/etc/redis/data <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> redis:6.2.7 <span class="token parameter variable">--requirepass</span> <span class="token string">&quot;root&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),c=[r];function l(t,o){return n(),a("div",null,c)}const p=s(i,[["render",l],["__file","redis-env-build-guide.html.vue"]]);export{p as default};
