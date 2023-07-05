const e=JSON.parse('{"key":"v-35a5223f","path":"/guide/develop/data-storage/alibaba-develop-manual-db-guide.html","title":"阿里巴巴开发手册数据库规约","lang":"zh-CN","frontmatter":{"title":"阿里巴巴开发手册数据库规约","icon":"storage","order":1,"sticky":true,"star":true,"date":"2021-10-27T00:00:00.000Z","category":["data-storage"],"tag":["编程","数据持久化","数据库","规约"],"description":"阿里巴巴开发手册数据库规约 1.建表规约 表达是与否概念的字段，必须使用 is_xxx 的方式命名，数据类型是 unsigned tinyint （1 表示是，0 表示否）。任何字段如果为非负数，必须是 unsigned。POJO 类中的任何布尔类型的变量，都不要加 is 前缀，所以，需要在 &lt;resultMap&gt; 设置从 is_xxx 到 Xxx 的映射关系。数据库表示是与否的值，使用","head":[["meta",{"property":"og:url","content":"https://olinonee.com/./guide/develop/data-storage/alibaba-develop-manual-db-guide.html"}],["meta",{"property":"og:site_name","content":"字节微雕"}],["meta",{"property":"og:title","content":"阿里巴巴开发手册数据库规约"}],["meta",{"property":"og:description","content":"阿里巴巴开发手册数据库规约 1.建表规约 表达是与否概念的字段，必须使用 is_xxx 的方式命名，数据类型是 unsigned tinyint （1 表示是，0 表示否）。任何字段如果为非负数，必须是 unsigned。POJO 类中的任何布尔类型的变量，都不要加 is 前缀，所以，需要在 &lt;resultMap&gt; 设置从 is_xxx 到 Xxx 的映射关系。数据库表示是与否的值，使用"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"article:tag","content":"编程"}],["meta",{"property":"article:tag","content":"数据持久化"}],["meta",{"property":"article:tag","content":"数据库"}],["meta",{"property":"article:tag","content":"规约"}],["meta",{"property":"article:published_time","content":"2021-10-27T00:00:00.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"阿里巴巴开发手册数据库规约\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2021-10-27T00:00:00.000Z\\",\\"dateModified\\":null,\\"author\\":[]}"]]},"headers":[{"level":2,"title":"阿里巴巴开发手册数据库规约","slug":"阿里巴巴开发手册数据库规约","link":"#阿里巴巴开发手册数据库规约","children":[{"level":3,"title":"1.建表规约","slug":"_1-建表规约","link":"#_1-建表规约","children":[]},{"level":3,"title":"2.索引规约","slug":"_2-索引规约","link":"#_2-索引规约","children":[]},{"level":3,"title":"3.SQL 语句","slug":"_3-sql-语句","link":"#_3-sql-语句","children":[]},{"level":3,"title":"4.ORM 映射","slug":"_4-orm-映射","link":"#_4-orm-映射","children":[]}]}],"git":{"createdTime":null,"updatedTime":null,"contributors":[]},"readingTime":{"minutes":14.91,"words":4474},"filePathRelative":"guide/develop/data-storage/alibaba-develop-manual-db-guide.md","localizedDate":"2021年10月27日","excerpt":"<h2> 阿里巴巴开发手册数据库规约</h2>\\n<h3> 1.建表规约</h3>\\n表达是与否概念的字段，必须使用 <code>is_xxx</code> 的方式命名，数据类型是 <code>unsigned tinyint</code> （1 表示是，0 表示否）。<br><br>任何字段如果为非负数，必须是 <code>unsigned</code>。<br><br>POJO 类中的任何布尔类型的变量，都不要加 is 前缀，所以，需要在 <code>&lt;resultMap&gt;</code> 设置从 <code>is_xxx</code> 到 Xxx 的映射关系。数据库表示是与否的值，使用 ","autoDesc":true}');export{e as data};
