import{_ as n,W as s,X as a,a0 as e}from"./framework-eca38234.js";const i={},l=e(`<h2 id="linux-下环境搭建命令总结" tabindex="-1"><a class="header-anchor" href="#linux-下环境搭建命令总结" aria-hidden="true">#</a> Linux 下环境搭建命令总结</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 安装所需插件</span>
yum <span class="token parameter variable">-y</span> <span class="token function">install</span> gcc gcc-c++ automake pcre pcre-devel zlib zlib-devel <span class="token function">open</span> openssl-devel

<span class="token comment"># 将上传的 nginx 压缩包解压</span>
<span class="token function">tar</span> <span class="token parameter variable">-zxvf</span> nginx-1.18.0.tar.gz

<span class="token comment"># 切换到解压目录，执行如下2个命令</span>
./configure
 
<span class="token function">make</span> <span class="token operator">&amp;&amp;</span> <span class="token function">make</span> <span class="token function">install</span>

<span class="token comment"># 启动 nginx，进入 /usr/local/nginx/sbin</span>
./nginx

<span class="token comment"># 查看nginx启动的进程</span>
<span class="token function">ps</span> <span class="token parameter variable">-ef</span> <span class="token operator">|</span> <span class="token function">grep</span> nginx

<span class="token comment"># 访问nginx，如果80端口没开放，请自行开放或者禁用防火墙</span>
ip:80

<span class="token comment"># 配置系统环境变量，执行如下 3 条命令</span>
<span class="token assign-left variable"><span class="token environment constant">PATH</span></span><span class="token operator">=</span><span class="token environment constant">$PATH</span>:/usr/local/nginx/sbin
<span class="token builtin class-name">export</span>
<span class="token builtin class-name">source</span> /etc/profile

<span class="token comment"># 测试任意路径下 nginx 全局命令是否生效，验证 nginx 语法是否正确，显示 OK 表示成功</span>
nginx <span class="token parameter variable">-t</span>

<span class="token comment"># 添加电脑开机自启动</span>
<span class="token comment"># 添加 nginx 服务</span>
<span class="token builtin class-name">cd</span> /usr/lib/systemd/system/
<span class="token function">vi</span> nginx.service

<span class="token comment"># nginx.service 追加如下内容</span>
<span class="token punctuation">[</span>Unit<span class="token punctuation">]</span>
<span class="token assign-left variable">Description</span><span class="token operator">=</span>nginx
<span class="token assign-left variable">After</span><span class="token operator">=</span>network.target
  
<span class="token punctuation">[</span>Service<span class="token punctuation">]</span>
<span class="token assign-left variable">Type</span><span class="token operator">=</span>forking
<span class="token assign-left variable">ExecStart</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-c</span> /usr/local/nginx/conf/nginx.conf
<span class="token assign-left variable">ExecReload</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> reload
<span class="token assign-left variable">ExecStop</span><span class="token operator">=</span>/usr/local/nginx/sbin/nginx <span class="token parameter variable">-s</span> quit
<span class="token assign-left variable">PrivateTmp</span><span class="token operator">=</span>true
  
<span class="token punctuation">[</span>Install<span class="token punctuation">]</span>
<span class="token assign-left variable">WantedBy</span><span class="token operator">=</span>multi-user.target

<span class="token comment"># 启动 nginx 服务</span>
<span class="token comment"># 此时需要先用 ps 查看 nginx 进程是否已存在，若已存在，则服务会启动失败。启动服务前必须先将 nginx 进程 kill 掉)：</span>
<span class="token comment"># 设置开机自启动</span>
systemctl <span class="token builtin class-name">enable</span> nginx

<span class="token comment"># 启动nginx服务</span>
systemctl start nginx

<span class="token comment"># 停止nginx服务</span>
systemctl stop nginx

<span class="token comment"># 重新加载配置</span>
systemctl reload nginx

<span class="token comment"># 查看服务状态</span>
systemctl status nginx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="docker-下环境搭建命令总结" tabindex="-1"><a class="header-anchor" href="#docker-下环境搭建命令总结" aria-hidden="true">#</a> docker 下环境搭建命令总结</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token comment"># 拉取稳定版本镜像</span>
<span class="token function">docker</span> pull nginx:stable

<span class="token comment"># 新建挂载的配置文件，日志文件和数据目录</span>
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/lighthouse/docker/nginx/conf
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/lighthouse/docker/nginx/log
<span class="token function">mkdir</span> <span class="token parameter variable">-p</span> /home/lighthouse/docker/nginx/html

<span class="token comment"># 暂时先启动容器，后续要将改容器停掉并删除</span>
<span class="token function">docker</span> run <span class="token parameter variable">--name</span> nginx <span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token parameter variable">-d</span> nginx:stable

<span class="token comment"># 将容器 nginx.conf 文件复制到宿主机</span>
<span class="token function">docker</span> <span class="token function">cp</span> nginx:/etc/nginx/nginx.conf /home/lighthouse/docker/nginx/conf/nginx.conf

<span class="token comment"># 将容器 conf.d 文件夹下内容复制到宿主机</span>
<span class="token function">docker</span> <span class="token function">cp</span> nginx:/etc/nginx/conf.d /home/lighthouse/docker/nginx/conf/conf.d

<span class="token comment"># 将容器中的 html 文件夹复制到宿主机</span>
<span class="token function">docker</span> <span class="token function">cp</span> nginx:/usr/share/nginx/html /home/lighthouse/docker/nginx/

<span class="token comment"># 直接执行 docker rm nginx 或者以容器 id 方式关闭容器</span>
<span class="token comment"># 找到 nginx 对应的容器 id</span>
<span class="token function">docker</span> <span class="token function">ps</span> <span class="token parameter variable">-a</span>
<span class="token comment"># 关闭该容器</span>
<span class="token function">docker</span> stop nginx
<span class="token comment"># 删除该容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> nginx
 
<span class="token comment"># 删除正在运行的 nginx 容器</span>
<span class="token function">docker</span> <span class="token function">rm</span> <span class="token parameter variable">-f</span> nginx

<span class="token comment"># 启动命令</span>
<span class="token function">docker</span> run <span class="token punctuation">\\</span>
<span class="token parameter variable">--name</span> nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">--restart</span><span class="token operator">=</span>always <span class="token punctuation">\\</span>
<span class="token parameter variable">-p</span> <span class="token number">80</span>:80 <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/lighthouse/docker/nginx/conf/nginx.conf:/etc/nginx/nginx.conf <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/lighthouse/docker/nginx/conf/conf.d:/etc/nginx/conf.d <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/lighthouse/docker/nginx/log:/var/log/nginx <span class="token punctuation">\\</span>
<span class="token parameter variable">-v</span> /home/lighthouse/docker/nginx/html:/usr/share/nginx/html <span class="token punctuation">\\</span>
<span class="token parameter variable">-d</span> nginx:stable
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[l];function t(o,p){return s(),a("div",null,c)}const d=n(i,[["render",t],["__file","nginx-env-build-guide.html.vue"]]);export{d as default};
