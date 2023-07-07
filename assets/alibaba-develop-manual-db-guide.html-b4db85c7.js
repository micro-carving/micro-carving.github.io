import{_ as c,W as _,X as d,$ as t,a1 as s,Z as o,Y as l,a0 as e,C as u}from"./framework-eca38234.js";const i={},r=l("h2",{id:"阿里巴巴开发手册数据库规约",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#阿里巴巴开发手册数据库规约","aria-hidden":"true"},"#"),o(" 阿里巴巴开发手册数据库规约")],-1),a=l("h3",{id:"_1-建表规约",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_1-建表规约","aria-hidden":"true"},"#"),o(" 1.建表规约")],-1),h=l("code",null,"is_xxx",-1),b=l("code",null,"unsigned tinyint",-1),f=l("br",null,null,-1),p=l("br",null,null,-1),L=l("code",null,"unsigned",-1),m=l("br",null,null,-1),g=l("br",null,null,-1),k=l("code",null,"<resultMap>",-1),x=l("code",null,"is_xxx",-1),N=l("code",null,"tinyint",-1),E=l("code",null,"is_xxx",-1),U=l("br",null,null,-1),v=l("br",null,null,-1),S=l("code",null,"is_deleted",-1),T=l("br",null,null,-1),y=l("br",null,null,-1),q=l("br",null,null,-1),C=l("br",null,null,-1),M=l("br",null,null,-1),O=l("br",null,null,-1),Q=l("br",null,null,-1),w=l("br",null,null,-1),R=l("br",null,null,-1),A=l("br",null,null,-1),B=l("br",null,null,-1),H=l("br",null,null,-1),I=l("br",null,null,-1),j=l("br",null,null,-1),D=l("code",null,"desc",-1),P=l("code",null,"range",-1),V=l("code",null,"match",-1),z=l("code",null,"delayed",-1),F=l("br",null,null,-1),G=l("br",null,null,-1),J=l("code",null,"pk_字段名",-1),W=l("code",null,"uk_字段名",-1),X=l("code",null,"idx_字段名",-1),Y=l("br",null,null,-1),$=l("br",null,null,-1),Z=l("code",null,"pk_",-1),K=l("code",null,"uk_",-1),ll=l("code",null,"idx_",-1),ol=l("br",null,null,-1),nl=l("br",null,null,-1),tl=l("code",null,"decimal",-1),sl=l("code",null,"float",-1),el=l("code",null,"double",-1),cl=l("br",null,null,-1),_l=l("br",null,null,-1),dl=l("br",null,null,-1),ul=l("br",null,null,-1),il=l("code",null,"char",-1),rl=l("br",null,null,-1),al=l("br",null,null,-1),hl=l("code",null,"varchar",-1),bl=l("strong",null,"5000",-1),fl=l("code",null,"text",-1),pl=l("br",null,null,-1),Ll=l("br",null,null,-1),ml=l("code",null,"id",-1),gl=l("code",null,"gmt_create",-1),kl=l("code",null,"gmt_modified",-1),xl=l("br",null,null,-1),Nl=l("br",null,null,-1),El=l("code",null,"bigint unsigned",-1),Ul=l("code",null,"gmt_create",-1),vl=l("code",null,"gmt_modified",-1),Sl=l("code",null,"datetime",-1),Tl=l("br",null,null,-1),yl=l("br",null,null,-1),ql=l("br",null,null,-1),Cl=l("br",null,null,-1),Ml=l("br",null,null,-1),Ol=l("br",null,null,-1),Ql=l("br",null,null,-1),wl=l("br",null,null,-1),Rl=l("br",null,null,-1),Al=l("br",null,null,-1),Bl=l("br",null,null,-1),Hl=l("blockquote",null,[l("p",null,[o("1） 不是频繁修改的字段。"),l("br"),o(" 2） 不是唯一索引的字段。"),l("br"),o(" 3） 不是 "),l("code",null,"varchar"),o(" 超长字段，更不能是 "),l("code",null,"text"),o(" 字段。")])],-1),Il=l("br",null,null,-1),jl=l("br",null,null,-1),Dl=l("strong",null,"500",-1),Pl=l("strong",null,"2GB",-1),Vl=l("br",null,null,-1),zl=l("br",null,null,-1),Fl=l("br",null,null,-1),Gl=l("br",null,null,-1),Jl=l("br",null,null,-1),Wl=l("br",null,null,-1),Xl=e('<br><br><table><thead><tr><th>对象</th><th>年龄区间</th><th>类型</th><th>字节</th><th>表示范围</th></tr></thead><tbody><tr><td>人</td><td>150 岁之内</td><td>tinyint unsigned</td><td>1</td><td>无符号值：0 到 255</td></tr><tr><td>龟</td><td>数百岁</td><td>smallint unsigned</td><td>2</td><td>无符号值：0 到 65535</td></tr><tr><td>恐龙化石</td><td>数千万年</td><td>int unsigned</td><td>4</td><td>无符号值：0 到约 43 亿</td></tr><tr><td>太阳</td><td>约 50 亿年</td><td>bigint unsigned</td><td>8</td><td>无符号值：0 到约 10 的 19 次方</td></tr></tbody></table><h3 id="_2-索引规约" tabindex="-1"><a class="header-anchor" href="#_2-索引规约" aria-hidden="true">#</a> 2.索引规约</h3>',4),Yl=l("br",null,null,-1),$l=l("br",null,null,-1),Zl=l("code",null,"insert",-1),Kl=l("br",null,null,-1),lo=l("br",null,null,-1),oo=l("code",null,"join",-1),no=l("code",null,"join",-1),to=l("br",null,null,-1),so=l("br",null,null,-1),eo=l("code",null,"join",-1),co=l("br",null,null,-1),_o=l("br",null,null,-1),uo=l("code",null,"varchar",-1),io=l("br",null,null,-1),ro=l("br",null,null,-1),ao=l("code",null,"count(distinct left(列名, 索引长度))/count(*)",-1),ho=l("br",null,null,-1),bo=l("br",null,null,-1),fo=l("br",null,null,-1),po=l("br",null,null,-1),Lo=l("br",null,null,-1),mo=l("br",null,null,-1),go=l("code",null,"order by",-1),ko=l("code",null,"order by",-1),xo=l("code",null,"file_sort",-1),No=l("br",null,null,-1),Eo=l("br",null,null,-1),Uo=l("code",null,"where a=? and b=? order by c",-1),vo=l("code",null,"a_b_c",-1),So=l("br",null,null,-1),To=l("br",null,null,-1),yo=l("code",null,"WHERE a > 10 ORDER BY b",-1),qo=l("code",null,"a_b",-1),Co=l("br",null,null,-1),Mo=l("br",null,null,-1),Oo=l("br",null,null,-1),Qo=l("br",null,null,-1),wo=l("br",null,null,-1),Ro=l("br",null,null,-1),Ao=l("code",null,"explain",-1),Bo=l("code",null,"extra",-1),Ho=l("code",null,"using index",-1),Io=l("br",null,null,-1),jo=l("br",null,null,-1),Do=l("br",null,null,-1),Po=l("br",null,null,-1),Vo=l("code",null,"offset",-1),zo=l("code",null,"offset+N",-1),Fo=l("code",null,"offset",-1),Go=l("code",null,"N",-1),Jo=l("code",null,"offset",-1),Wo=l("br",null,null,-1),Xo=l("br",null,null,-1),Yo=l("br",null,null,-1),$o=l("br",null,null,-1),Zo=l("p",null,[l("code",null,"SELECT a.* FROM 表 1 a, (select id from 表 1 where 条件 LIMIT 100000,20 ) b where a.id=b.id"),o(),l("br"),l("br")],-1),Ko=l("code",null,"range",-1),ln=l("code",null,"ref",-1),on=l("code",null,"consts",-1),nn=l("br",null,null,-1),tn=l("br",null,null,-1),sn=e("<br><blockquote><p>1） <code>consts</code> 单表中最多只有一个匹配行（主键或者唯一索引），在优化阶段即可读取到数据。<br> 2） <code>ref</code> 指的是使用普通的索引（<code>normal index</code>）。<br> 3） <code>range</code> 对索引进行范围检索。</p></blockquote>",2),en=l("code",null,"explain",-1),cn=l("code",null,"type=index",-1),_n=l("code",null,"index",-1),dn=l("code",null,"range",-1),un=l("br",null,null,-1),rn=l("br",null,null,-1),an=l("br",null,null,-1),hn=l("br",null,null,-1),bn=l("code",null,"where a=? and b=?",-1),fn=l("code",null,"idx_a",-1),pn=l("br",null,null,-1),Ln=l("br",null,null,-1),mn=l("code",null,"where c > ? and d = ?",-1),gn=l("code",null,"idx_d_c",-1),kn=l("br",null,null,-1),xn=l("br",null,null,-1),Nn=l("br",null,null,-1),En=l("br",null,null,-1),Un=l("br",null,null,-1),vn=l("blockquote",null,[l("p",null,[o("1） 索引宁滥勿缺。认为一个查询就需要建一个索引。"),l("br"),o(" 2） 吝啬索引的创建。认为索引会消耗空间、严重拖慢记录的更新以及行的新增速度。"),l("br"),o(" 3） 抵制惟一索引。认为惟一索引一律需要在应用层通过“先查后插”方式解决。")])],-1),Sn=l("h3",{id:"_3-sql-语句",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_3-sql-语句","aria-hidden":"true"},"#"),o(" 3.SQL 语句")],-1),Tn=l("code",null,"count(列名)",-1),yn=l("code",null,"count(常量)",-1),qn=l("code",null,"count(_)",-1),Cn=l("code",null,"count(_)",-1),Mn=l("code",null,"NULL",-1),On=l("code",null,"NULL",-1),Qn=l("br",null,null,-1),wn=l("br",null,null,-1),Rn=l("code",null,"count(*)",-1),An=l("code",null,"NULL",-1),Bn=l("code",null,"NULL",-1),Hn=l("br",null,null,-1),In=l("br",null,null,-1),jn=l("code",null,"count(distinct col)",-1),Dn=l("code",null,"NULL",-1),Pn=l("code",null,"count(distinct col1, col2)",-1),Vn=l("br",null,null,-1),zn=l("br",null,null,-1),Fn=l("code",null,"NULL",-1),Gn=l("code",null,"count(col)",-1),Jn=l("code",null,"sum(col)",-1),Wn=l("code",null,"NULL",-1),Xn=l("code",null,"sum()",-1),Yn=l("br",null,null,-1),$n=l("br",null,null,-1),Zn=l("code",null,"SELECT IFNULL(SUM(column), 0) FROM table;",-1),Kn=l("br",null,null,-1),lt=l("br",null,null,-1),ot=l("code",null,"ISNULL()",-1),nt=l("code",null,"NULL",-1),tt=l("br",null,null,-1),st=l("br",null,null,-1),et=l("code",null,"NULL",-1),ct=l("code",null,"NULL",-1),_t=e("<br><blockquote><p>1） <code>NULL&lt;&gt;NULL</code> 的返回结果是 <code>NULL</code>，而不是 <code>false</code>。<br> 2） <code>NULL=NULL</code> 的返回结果是 <code>NULL</code>，而不是 <code>true</code>。<br> 3） <code>NULL&lt;&gt;1</code> 的返回结果是 <code>NULL</code>，而不是 <code>true</code>。</p></blockquote>",2),dt=l("code",null,"null",-1),ut=l("code",null,"select * from table where column1 is null and column3 is not null;",-1),it=l("code",null,"ISNULL(column)",-1),rt=l("code",null,"ISNULL(column)",-1),at=l("br",null,null,-1),ht=l("br",null,null,-1),bt=l("code",null,"count",-1),ft=l("br",null,null,-1),pt=l("br",null,null,-1),Lt=l("br",null,null,-1),mt=l("br",null,null,-1),gt=l("code",null,"student_id",-1),kt=l("code",null,"student_id",-1),xt=l("code",null,"student_id",-1),Nt=l("code",null,"student_id",-1),Et=l("br",null,null,-1),Ut=l("br",null,null,-1),vt=l("br",null,null,-1),St=l("br",null,null,-1),Tt=l("code",null,"select",-1),yt=l("br",null,null,-1),qt=l("br",null,null,-1),Ct=l("br",null,null,-1),Mt=l("br",null,null,-1),Ot=l("br",null,null,-1),Qt=l("br",null,null,-1),wt=l("code",null,"select t1.name from table_first as t1 , table_second as t2 where t1.id=t2.id;",-1),Rt=l("br",null,null,-1),At=l("br",null,null,-1),Bt=l("code",null,"Column 'name' in field list is ambiguous",-1),Ht=l("br",null,null,-1),It=l("br",null,null,-1),jt=l("code",null,"as",-1),Dt=l("code",null,"t1、t2、t3、...",-1),Pt=l("br",null,null,-1),Vt=l("br",null,null,-1),zt=l("br",null,null,-1),Ft=l("blockquote",null,[l("p",null,[o("1）别名可以是表的简称，或者是根据表出现的顺序，以 "),l("code",null,"t1、t2、t3"),o(" 的方式命名。"),l("br"),o(" 2）别名前加 "),l("code",null,"as"),o(" 使别名更容易识别。")])],-1),Gt=l("code",null,"select t1.name from table_first as t1, table_second as t2 where t1.id=t2.id;",-1),Jt=l("br",null,null,-1),Wt=l("br",null,null,-1),Xt=l("code",null,"in",-1),Yt=l("code",null,"in",-1),$t=l("strong",null,"1000",-1),Zt=l("br",null,null,-1),Kt=l("br",null,null,-1),ls=l("code",null,"utf8",-1),os=l("br",null,null,-1),ns=l("br",null,null,-1),ts=l("br",null,null,-1),ss=l("blockquote",null,[l("p",null,[l("code",null,'SELECT LENGTH("轻松工作")'),o("； 返回为 12 "),l("br"),l("code",null,'SELECT CHARACTER_LENGTH("轻松工作")'),o("； 返回为 4 "),l("br"),o(" 如果需要存储表情，那么选择 "),l("code",null,"utf8mb4"),o(" 来进行存储，注意它与 "),l("code",null,"utf8"),o(" 编码的区别。")])],-1),es=l("code",null,"TRUNCATE TABLE",-1),cs=l("code",null,"DELETE",-1),_s=l("code",null,"TRUNCATE",-1),ds=l("code",null,"trigger",-1),us=l("br",null,null,-1),is=l("br",null,null,-1),rs=l("code",null,"TRUNCATE TABLE",-1),as=l("code",null,"WHERE",-1),hs=l("code",null,"DELETE",-1),bs=l("br",null,null,-1),fs=l("br",null,null,-1),ps=l("h3",{id:"_4-orm-映射",tabindex:"-1"},[l("a",{class:"header-anchor",href:"#_4-orm-映射","aria-hidden":"true"},"#"),o(" 4.ORM 映射")],-1),Ls=l("br",null,null,-1),ms=l("br",null,null,-1),gs=l("br",null,null,-1),ks=l("blockquote",null,[l("p",null,[o("1）增加查询分析器解析成本。"),l("br"),o(" 2）增减字段容易与 "),l("code",null,"resultMap"),o(" 配置不一致。"),l("br"),o(" 3）无用字段增加网络消耗，尤其是 "),l("code",null,"text"),o(" 类型的字段。")])],-1),xs=l("code",null,"is_",-1),Ns=l("code",null,"resultMap",-1),Es=l("br",null,null,-1),Us=l("br",null,null,-1),vs=l("code",null,"sql.xml",-1),Ss=l("br",null,null,-1),Ts=l("br",null,null,-1),ys=l("code",null,"resultClass",-1),qs=l("br",null,null,-1),Cs=l("br",null,null,-1),Ms=l("br",null,null,-1),Os=l("br",null,null,-1),Qs=l("code",null,"sql.xml",-1),ws=l("code",null,"#{}",-1),Rs=l("code",null,"#param#",-1),As=l("code",null,"${}",-1),Bs=l("br",null,null,-1),Hs=l("br",null,null,-1),Is=l("code",null,"queryForList(String statementName,int start,int size)",-1),js=l("br",null,null,-1),Ds=l("br",null,null,-1),Ps=l("code",null,"statementName",-1),Vs=l("code",null,"subList",-1),zs=l("code",null,"start,size",-1),Fs=l("br",null,null,-1),Gs=l("br",null,null,-1),Js=e(`<div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">Map</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token class-name">String</span><span class="token punctuation">,</span> <span class="token class-name">Object</span><span class="token punctuation">&gt;</span></span> map <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">HashMap</span><span class="token generics"><span class="token punctuation">&lt;</span><span class="token punctuation">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;start&quot;</span><span class="token punctuation">,</span> start<span class="token punctuation">)</span><span class="token punctuation">;</span>
map<span class="token punctuation">.</span><span class="token function">put</span><span class="token punctuation">(</span><span class="token string">&quot;size&quot;</span><span class="token punctuation">,</span> size<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),Ws=l("code",null,"HashMap",-1),Xs=l("code",null,"Hashtable",-1),Ys=l("br",null,null,-1),$s=l("br",null,null,-1),Zs=l("code",null,"<resultMap>",-1),Ks=l("code",null,"HashTable",-1),le=l("code",null,"bigint",-1),oe=l("code",null,"Long",-1),ne=l("code",null,"BigInteger",-1),te=l("br",null,null,-1),se=l("br",null,null,-1),ee=l("code",null,"gmt_modified",-1),ce=l("br",null,null,-1),_e=l("br",null,null,-1),de=l("code",null,"update table set c1=value1,c2=value2,c3=value3;",-1),ue=l("code",null,"binlog",-1),ie=l("br",null,null,-1),re=l("br",null,null,-1),ae=l("code",null,"@Transactional",-1),he=l("br",null,null,-1),be=l("br",null,null,-1),fe=l("code",null,"compareValue",-1),pe=l("code",null,"null",-1),Le=l("br",null,null,-1),me=l("br",null,null,-1);function ge(ke,xe){const n=u("font");return _(),d("div",null,[r,a,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("表达是与否概念的字段，必须使用 "),h,o(" 的方式命名，数据类型是 "),b,o(" （1 表示是，0 表示否）。"),f,p,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),o("任何字段如果为非负数，必须是 "),L,o("。"),m,g,t(n,{color:"#9d7c00"},{default:s(()=>[o("注意：")]),_:1}),o("POJO 类中的任何布尔类型的变量，都不要加 is 前缀，所以，需要在 "),k,o(" 设置从 "),x,o(" 到 Xxx 的映射关系。数据库表示是与否的值，使用 "),N,o(" 类型，坚持 "),E,o(" 的命名方式是为了明确其取值含 义与取值范围。"),U,v,t(n,{color:"#019858"},{default:s(()=>[o("正例：")]),_:1}),o("表达逻辑删除的字段名 "),S,o("，1 表示删除，0 表示未删除。"),T,y,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("表名、字段名必须使用小写字母或数字，禁止出现数字开头，禁止两个下划线中间只出现数字。数据库字段名的修改代价很大，因为无法进行预发布，所以字段名称需要慎重考虑。"),q,C,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),o("MySQL 在 Windows 下不区分大小写，但在 Linux 下默认是区分大小写。因此，数据库名、表名、字段名，都不允许出现任何大写字母，避免节外生枝。"),M,O,t(n,{color:"#019858"},{default:s(()=>[o("正例：")]),_:1}),o("aliyun_admin，rdc_config，level3_name "),Q,w,t(n,{color:"#ff4500"},{default:s(()=>[o("反例：")]),_:1}),o("AliyunAdmin，rdcConfig，level_3_name "),R,A,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("表名不使用复数名词。"),B,H,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),o("表名应该仅仅表示表里面的实体内容，不应该表示实体数量，对应于 DO 类名也是单数形式，符合表达习惯。"),I,j,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("禁用保留字，如 "),D,o("、"),P,o("、"),V,o("、"),z,o(" 等，请参考 MySQL 官方保留字。"),F,G,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("主键索引名为 "),J,o("；唯一索引名为 "),W,o("；普通索引名则为 "),X,o("。"),Y,$,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),Z,o(" 即 primary key；"),K,o(" 即 unique key；"),ll,o(" 即 index 的简称。"),ol,nl,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("小数类型为 "),tl,o("，禁止使用 "),sl,o(" 和 "),el,o("。"),cl,_l,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),o("在存储的时候，float 和 double 都存在精度损失的问题，很可能在比较值的时候，得到不正确的结果。如果存储的数据范围超过 decimal 的范围，建议将数据拆成整数和小数并分开存储。"),dl,ul,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("如果存储的字符串长度几乎相等，使用 "),il,o(" 定长字符串类型。"),rl,al,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),hl,o(" 是可变长字符串，不预先分配存储空间，长度不要超过 "),bl,o("，如果存储长度大于此值，定义字段类型为 "),fl,o("，独立出来一张表，用主键来对应，避免影响其它字段索引效率。"),pl,Ll,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("表必备三字段："),ml,o(", "),gl,o(", "),kl,o("。"),xl,Nl,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),o("其中 id 必为主键，类型为 "),El,o("、单表时自增、步长为 1。"),Ul,o(", "),vl,o(" 的类型均为 "),Sl,o(" 类型，前者现在时表示主动式创建，后者过去分词表示被动式更新。"),Tl,yl,t(n,{color:"#ffc000"},{default:s(()=>[o("【推荐】")]),_:1}),o("表的命名最好是遵循 “业务名称_表的作用”。"),ql,Cl,t(n,{color:"#019858"},{default:s(()=>[o("正例：")]),_:1}),o("alipay_task / force_project / trade_config "),Ml,Ol,t(n,{color:"#ffc000"},{default:s(()=>[o("【推荐】")]),_:1}),o("库名与应用名称尽量一致。"),Ql,wl,t(n,{color:"#ffc000"},{default:s(()=>[o("【推荐】")]),_:1}),o("如果修改字段含义或对字段表示的状态追加时，需要及时更新字段注释。"),Rl,Al,t(n,{color:"#ffc000"},{default:s(()=>[o("【推荐】")]),_:1}),o("字段允许适当冗余，以提高查询性能，但必须考虑数据一致。冗余字段应遵循："),Bl,Hl,t(n,{color:"#019858"},{default:s(()=>[o("正例：")]),_:1}),o("各业务线经常冗余存储商品名称，避免查询时需要调用 IC 服务获取。"),Il,jl,t(n,{color:"#ffc000"},{default:s(()=>[o("【推荐】")]),_:1}),o("单表行数超过 "),Dl,o(" 万行或者单表容量超过 "),Pl,o("，才推荐进行分库分表。"),Vl,zl,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),o("如果预计三年后的数据量根本达不到这个级别，请不要在创建表时就分库分表。"),Fl,Gl,t(n,{color:"#76923c"},{default:s(()=>[o("【参考】")]),_:1}),o("合适的字符存储长度，不但节约数据库表空间、节约索引存储，更重要的是提升检索速度。"),Jl,Wl,t(n,{color:"#019858"},{default:s(()=>[o("正例：")]),_:1}),o("无符号值可以避免误存负数，且扩大了表示范围。"),Xl,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("业务上具有唯一特性的字段，即使是组合字段，也必须建成唯一索引。"),Yl,$l,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),o("不要以为唯一索引影响了 "),Zl,o(" 速度，这个速度损耗可以忽略，但提高查找速度是明显的；另外，即使在应用层做了非常完善的校验控制，只要没有唯一索引，根据墨菲定律，必然有脏数据产生。"),Kl,lo,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("超过三个表禁止 "),oo,o("。需要 "),no,o(" 的字段，数据类型保持绝对一致；多表关联查询时，保证被关联的字段需要有索引。"),to,so,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),o("即使双表 "),eo,o(" 也要注意表索引、SQL 性能。"),co,_o,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("在 "),uo,o(" 字段上建立索引时，必须指定索引长度，没必要对全字段建立索引，根据实际文本区分度决定索引长度。"),io,ro,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),o("索引的长度与区分度是一对矛盾体，一般对字符串类型数据，长度为 20 的索引，区分度会高达 90% 以上，可以使用 "),ao,o(" 的区分度来确定。"),ho,bo,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("页面搜索严禁左模糊或者全模糊，如果需要请走搜索引擎来解决。"),fo,po,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),o("索引文件具有 B-Tree 的最左前缀匹配特性，如果左边的值未确定，那么无法使用此索引。"),Lo,mo,t(n,{color:"#ffc000"},{default:s(()=>[o("【推荐】")]),_:1}),o("如果有 "),go,o(" 的场景，请注意利用索引的有序性。"),ko,o(" 最后的字段是组合索引的一部分，并且放在索引组合顺序的最后，避免出现 "),xo,o(" 的情况，影响查询性能。"),No,Eo,t(n,{color:"#019858"},{default:s(()=>[o("正例：")]),_:1}),Uo,o("; 索引："),vo,o(),So,To,t(n,{color:"#ff4500"},{default:s(()=>[o("反例：")]),_:1}),o("索引如果存在范围查询，那么索引有序性无法利用，如："),yo,o("; 索引 "),qo,o(" 无法排序。"),Co,Mo,t(n,{color:"#ffc000"},{default:s(()=>[o("【推荐】")]),_:1}),o("利用覆盖索引来进行查询操作，避免回表。"),Oo,Qo,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),o("如果一本书需要知道第 11 章是什么标题，会翻开第 11 章对应的那一页吗？目录浏览一下就好，这个目录就是起到覆盖索引的作用。"),wo,Ro,t(n,{color:"#019858"},{default:s(()=>[o("正例：")]),_:1}),o("能够建立索引的种类分为主键索引、唯一索引、普通索引三种，而覆盖索引只是一种查询的一种效果，用 "),Ao,o(" 的结果，"),Bo,o(" 列会出现："),Ho,o("。"),Io,jo,t(n,{color:"#ffc000"},{default:s(()=>[o("【推荐】")]),_:1}),o("利用延迟关联或者子查询优化超多分页场景。"),Do,Po,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),o("MySQL 并不是跳过 "),Vo,o(" 行，而是取 "),zo,o(" 行，然后返回放弃前 "),Fo,o(" 行，返回 "),Go,o(" 行，那当 "),Jo,o(" 特别大的时候，效率就非常的低下，要么控制返回的总页数，要么对超过特定阈值的页数进行 SQL 改写。"),Wo,Xo,t(n,{color:"#019858"},{default:s(()=>[o("正例：")]),_:1}),o("先快速定位需要获取的 id 段，然后再关联："),Yo,$o,Zo,t(n,{color:"#ffc000"},{default:s(()=>[o("【推荐】")]),_:1}),o("SQL 性能优化的目标：至少要达到 "),Ko,o(" 级别，要求是 "),ln,o(" 级别，如果可以是 "),on,o(" 最好。"),nn,tn,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),o(),sn,t(n,{color:"#ff4500"},{default:s(()=>[o("反例：")]),_:1}),en,o(" 表的结果，"),cn,o("，索引物理文件全扫描，速度非常慢，这个 "),_n,o(" 级别比较 "),dn,o(" 还低，与全表扫描是小巫见大巫。"),un,rn,t(n,{color:"#ffc000"},{default:s(()=>[o("【推荐】")]),_:1}),o("建组合索引的时候，区分度最高的在最左边。"),an,hn,t(n,{color:"#019858"},{default:s(()=>[o("正例：")]),_:1}),o("如果 "),bn,o("，a 列的几乎接近于唯一值，那么只需要单建 "),fn,o(" 索引即可。"),pn,Ln,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),o("存在非等号和等号混合判断条件时，在建索引时，请把等号条件的列前置。如："),mn,o(" 那么即使 c 的区分度更高，也必须把 d 放在索引的最前列，即建立组合索引 "),gn,o("。"),kn,xn,t(n,{color:"#ffc000"},{default:s(()=>[o("【推荐】")]),_:1}),o("防止因字段类型不同造成的隐式转换，导致索引失效。"),Nn,En,t(n,{color:"#76923c"},{default:s(()=>[o("【参考】")]),_:1}),o("创建索引时避免有如下极端误解："),Un,vn,Sn,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("不要使用 "),Tn,o("或 "),yn,o("来替代 "),qn,o("，"),Cn,o("是 SQL92 定义的标准统计行数的语法，跟数据库无关，跟 "),Mn,o(" 和非 "),On,o(" 无关。"),Qn,wn,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),Rn,o("会统计值为 "),An,o(" 的行，而 count(列名)不会统计此列为 "),Bn,o(" 值的行。"),Hn,In,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),jn,o(" 计算该列除 "),Dn,o(" 之外的不重复行数，注意 "),Pn,o(" 如果其中一列全为 NULL，那么即使另一列有不同的值，也返回为 0。"),Vn,zn,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("当某一列的值全是 "),Fn,o(" 时，"),Gn,o("的返回结果为 0，但 "),Jn,o(" 的返回结果为 "),Wn,o("，因此使用 "),Xn,o(" 时需注意 NPE 问题。"),Yn,$n,t(n,{color:"#019858"},{default:s(()=>[o("正例：")]),_:1}),o("可以使用如下方式来避免 sum 的 NPE 问题："),Zn,o(),Kn,lt,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("使用 "),ot,o(" 来判断是否为 "),nt,o(" 值。"),tt,st,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),et,o(" 与任何值的直接比较都为 "),ct,o("。"),_t,t(n,{color:"#ff4500"},{default:s(()=>[o("反例：")]),_:1}),o("在 SQL 语句中，如果在 "),dt,o(" 前换行，影响可读性。"),ut,o(" 而 "),it,o(" 是一个整体，简洁易懂。从性能数据上分析，"),rt,o(" 执行效率更快一些。"),at,ht,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("代码中写分页查询逻辑时，若 "),bt,o(" 为 0 应直接返回，避免执行后面的分页语句。"),ft,pt,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("不得使用外键与级联，一切外键概念必须在应用层解决。"),Lt,mt,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),o("（概念解释）学生表中的 "),gt,o(" 是主键，那么成绩表中的 "),kt,o(" 则为外键。如果更新学生表中的 "),xt,o("，同时触发成绩表中的 "),Nt,o(" 更新，即为级联更新。外键与级联更新适用于单机低并发，不适合分布式、高并发集群；级联更新是强阻塞，存在数据库更新风暴的风险；外键影响数据库的插入速度。"),Et,Ut,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("禁止使用存储过程，存储过程难以调试和扩展，更没有移植性。"),vt,St,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("数据订正（特别是删除或修改记录操作）时，要先 "),Tt,o("，避免出现误删除，确认无误才能执行更新语句。"),yt,qt,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("对于数据库中表记录的查询和变更，只要涉及多个表，都需要在列名前加表的别名（或表名）进行限定。"),Ct,Mt,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),o("对多表进行查询记录、更新记录、删除记录时，如果对操作列没有限定表的别名（或表名），并且操作列在多个表中存在时，就会抛异常。"),Ot,Qt,t(n,{color:"#019858"},{default:s(()=>[o("正例：")]),_:1}),wt,o(),Rt,At,t(n,{color:"#ff4500"},{default:s(()=>[o("反例：")]),_:1}),o("在某业务中，由于多表关联查询语句没有加表的别名（或表名）的限制，正常运行两年后，最近在某个表中增加一个同名字段，在预发布环境做数据库变更后，线上查询语句出现出 1052 异常："),Bt,o("。 "),Ht,It,t(n,{color:"#ffc000"},{default:s(()=>[o("【推荐】")]),_:1}),o("SQL 语句中表的别名前加 "),jt,o("，并且以 "),Dt,o("的顺序依次命名。"),Pt,Vt,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),zt,Ft,t(n,{color:"#019858"},{default:s(()=>[o("正例：")]),_:1}),Gt,o(),Jt,Wt,t(n,{color:"#ffc000"},{default:s(()=>[o("【推荐】")]),_:1}),Xt,o(" 操作能避免则避免，若实在避免不了，需要仔细评估 "),Yt,o(" 后边的集合元素数量，控制在 "),$t,o(" 个之内。"),Zt,Kt,t(n,{color:"#76923c"},{default:s(()=>[o("【参考】")]),_:1}),o("因国际化需要，所有的字符存储与表示，均采用 "),ls,o(" 字符集，那么字符计数方法需要注意。"),os,ns,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),o(),ts,ss,t(n,{color:"#76923c"},{default:s(()=>[o("【参考】")]),_:1}),es,o(" 比 "),cs,o(" 速度快，且使用的系统和事务日志资源少，但 "),_s,o(" 无事务且不触发 "),ds,o("，有可能造成事故，故不建议在开发代码中使用此语句。"),us,is,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),rs,o(" 在功能上与不带 "),as,o(" 子句的 "),hs,o(" 语句相同。"),bs,fs,ps,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("在表查询中，一律不要使用 * 作为查询的字段列表，需要哪些字段必须明确写明。"),Ls,ms,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),o(),gs,ks,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("POJO 类的布尔属性不能加 is，而数据库字段必须加 "),xs,o("，要求在 "),Ns,o(" 中进行字段与属性之间的映射。"),Es,Us,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),o("参见定义 POJO 类以及数据库字段定义规定，在 "),vs,o(" 增加映射，是必须的。"),Ss,Ts,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("不要用 "),ys,o(" 当返回参数，即使所有类属性名与数据库字段一一对应，也需要定义；反过来，每一个表也必然有一个与之对应。"),qs,Cs,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),o("配置映射关系，使字段与 DO 类解耦，方便维护。"),Ms,Os,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),Qs,o(" 配置参数使用："),ws,o("，"),Rs,o(" 不要使用 "),As,o(" 此种方式容易出现 SQL 注入。"),Bs,Hs,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("iBATIS 自带的 "),Is,o(" 不推荐使用。"),js,Ds,t(n,{color:"#977c14"},{default:s(()=>[o("说明：")]),_:1}),o("其实现方式是在数据库取到 "),Ps,o(" 对应的 SQL 语句的所有记录，再通过 "),Vs,o(" 取 "),zs,o(" 的子集合。"),Fs,Gs,t(n,{color:"#019858"},{default:s(()=>[o("正例：")]),_:1}),Js,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("不允许直接拿 "),Ws,o(" 与 "),Xs,o(" 作为查询结果集的输出。"),Ys,$s,t(n,{color:"#ff4500"},{default:s(()=>[o("反例：")]),_:1}),o("某同学为避免写一个 "),Zs,o("，直接使用 "),Ks,o(" 来接收数据库返回结果，结果出现日常是把 "),le,o(" 转成 "),oe,o(" 值，而线上由于数据库版本不一样，解析成 "),ne,o("，导致线上问题。"),te,se,t(n,{color:"#c00000"},{default:s(()=>[o("【强制】")]),_:1}),o("更新数据表记录时，必须同时更新记录对应的 "),ee,o(" 字段值为当前时间。"),ce,_e,t(n,{color:"#ffc000"},{default:s(()=>[o("【推荐】")]),_:1}),o("不要写一个大而全的数据更新接口。传入为 POJO 类，不管是不是自己的目标更新字段，都进行 "),de,o(" 这是不对的。执行 SQL 时，不要更新无改动的字段，一是易出错；二是效率低；三是增加 "),ue,o(" 存储。"),ie,re,t(n,{color:"#76923c"},{default:s(()=>[o("【参考】")]),_:1}),ae,o(" 事务不要滥用。事务会影响数据库的 QPS，另外使用事务的地方需要考虑各方面的回滚方案，包括缓存回滚、搜索引擎回滚、消息补偿、统计修正等。"),he,be,t(n,{color:"#76923c"},{default:s(()=>[o("【参考】")]),_:1}),o("中的 "),fe,o(" 是与属性值对比的常量，一般是数字，表示相等时带上此条件；表示不为空且不为 "),pe,o(" 时执行；表示不为 null 值时执行。"),Le,me])}const Ee=c(i,[["render",ge],["__file","alibaba-develop-manual-db-guide.html.vue"]]);export{Ee as default};
