import{_ as c,W as o,X as i,Y as a,Z as t,$ as n,a0 as r,C as s}from"./framework-eca38234.js";const p="/assets/tomcat-official-web-8fb68211.png",d="/assets/tomcat-unzip-1fa4b12d.png",m="/assets/tomcat-bin-path-39ea1ff3.png",l="/assets/tomcat-catalina-home-e27ccd03.png",g="/assets/tomcat-path-variable-66225cf1.png",h="/assets/tomcat-validate-install-15e3b60f.png",f="/assets/tomcat-startup-validate-79002c86.png",_={},u=a("h2",{id:"win10-下环境搭建",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#win10-下环境搭建","aria-hidden":"true"},"#"),t(" win10 下环境搭建")],-1),b=a("h3",{id:"下载-tomcat",tabindex:"-1"},[a("a",{class:"header-anchor",href:"#下载-tomcat","aria-hidden":"true"},"#"),t(" 下载 Tomcat")],-1),x={href:"https://tomcat.apache.org/",target:"_blank",rel:"noopener noreferrer"},A=r('<p>根据 <code>jdk</code> 版本选择合适的版本，这里笔者安装 <code>tomcat9.0.63</code> 版本</p><figure><img src="'+p+'" alt="Apache Tomcat 官网下载页面" tabindex="0" loading="lazy"><figcaption>Apache Tomcat 官网下载页面</figcaption></figure><p>解压即可</p><figure><img src="'+d+'" alt="Apache Tomcat 解压目录" tabindex="0" loading="lazy"><figcaption>Apache Tomcat 解压目录</figcaption></figure><h3 id="配置环境变量" tabindex="-1"><a class="header-anchor" href="#配置环境变量" aria-hidden="true">#</a> 配置环境变量</h3><p>新建系统环境变量名：<code>CATALINA_HOME</code></p><p>变量名的值：<code>tomcat 的 bin 目录的上一级目录</code></p><figure><img src="'+m+'" alt="Apache Tomcat 根目录" tabindex="0" loading="lazy"><figcaption>Apache Tomcat 根目录</figcaption></figure><figure><img src="'+l+'" alt="CATALINA_HOME 环境变量配置" tabindex="0" loading="lazy"><figcaption>CATALINA_HOME 环境变量配置</figcaption></figure><p><code>Path</code> 环境变量中追加如下内容：</p><p><code>%CATALINA_HOME%\\bin</code></p><figure><img src="'+g+'" alt="Path 环境变量" tabindex="0" loading="lazy"><figcaption>Path 环境变量</figcaption></figure><p>完成上述配置，点击确定完成环境变量的配置。</p><h3 id="查询环境变量是否配置成功" tabindex="-1"><a class="header-anchor" href="#查询环境变量是否配置成功" aria-hidden="true">#</a> 查询环境变量是否配置成功</h3><p>输入以下命令验证配置是否成功：<code>catalina -version</code></p><p>出现如图所示表示成功！</p><figure><img src="'+h+'" alt="验证 tomcat 是否安装成功" tabindex="0" loading="lazy"><figcaption>验证 tomcat 是否安装成功</figcaption></figure><h3 id="启动和关闭-tomcat" tabindex="-1"><a class="header-anchor" href="#启动和关闭-tomcat" aria-hidden="true">#</a> 启动和关闭 tomcat</h3><p>启动，这里有 2 种方式</p><p>①在命令行使用 <code>catalina start</code> 命令进行启动</p><p>②进入 tomcat 安装的 bin 目录下，点击 <code>startup.bat</code> 进行启动</p><p>关闭直接关掉命令行窗口即可！</p><p>验证 tomcat 有没有启动成功，在浏览器输入：<code>localhost:8080</code> 弹出 tomcat 主页表示成功，如下图所示：</p><figure><img src="'+f+'" alt="tomcat 验证是否启动成功" tabindex="0" loading="lazy"><figcaption>tomcat 验证是否启动成功</figcaption></figure><p>至此，这里完成了 tomcat 的安装！</p>',25);function T(v,z){const e=s("ExternalLinkIcon");return o(),i("div",null,[u,b,a("p",null,[t("官网地址："),a("a",x,[t("https://tomcat.apache.org/"),n(e)])]),A])}const N=c(_,[["render",T],["__file","tomcat-env-build-guide.html.vue"]]);export{N as default};