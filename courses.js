// PyMasters v3 - Course Data
const COURSES = [
// ========== 1. Pythonをはじめよう ==========
{id:"py-start",title:"Pythonをはじめよう",desc:"プログラミングの世界へ最初の一歩。何も知らなくて大丈夫！",level:"b",icon:"🌱",free:true,nextCourse:"py-basics",lessons:[
{id:"s1",title:"プログラミングって何？",xp:30,
content:[
{type:"text",body:"## プログラミングって何だろう？\n\nプログラミングとは、**コンピュータへの指示書を書くこと**です。\n\n身近な例で考えてみましょう。料理のレシピを思い浮かべてください。\n\n「①卵を割る → ②フライパンで焼く → ③お皿に盛る」\n\nこのように、**やることを順番に書き出す**のがプログラミングです。コンピュータは人間と違って、曖昧な指示では動けません。「いい感じに焼いて」ではダメで、「中火で3分焼く」のように**具体的に**伝える必要があります。"},
{type:"text",body:"### なぜPythonなの？\n\nプログラミング言語はたくさんありますが、Pythonは**世界で最も人気のある言語のひとつ**です。\n\n人気の理由:\n- **読みやすい**: 英語に近い書き方で、初心者でも理解しやすい\n- **なんでもできる**: Webサイト、AI、データ分析、ゲーム開発…\n- **仲間が多い**: 困ったとき、ネットで日本語の情報がたくさん見つかる"},
{type:"tip",body:"💡 **安心してください！** このアプリでは、何かをインストールする必要はありません。ブラウザの中でPythonが動くので、右のエディタにコードを書いて、すぐに試せます！"}
],exercise:{instruction:"右のエディタに以下のコードを書いて、Enterキーで実行してみましょう！\nprint(\"プログラミング、楽しそう！\")",initialCode:"# ここにコードを書いてね！\n",expectedOutput:"プログラミング、楽しそう！",keywords:["print"],answer:'print("プログラミング、楽しそう！")',hints:["print() という命令を使います","カッコの中に表示したい文字を書きます","print(\"プログラミング、楽しそう！\") と書いてみてください"]}},

{id:"s2",title:"画面に文字を表示しよう - print文",xp:40,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"print\">print文</span>を覚えよう\n\n<span class=\"term\" data-term=\"print\">print()</span>は、カッコの中に書いたものを画面に表示する命令です。\n\nプログラミングで最初に覚える、一番大切な命令です。\n\n### 書き方のルール\n\n文字を表示するには、**ダブルクォート( \" )** か **シングルクォート( ' )** で囲みます。\n\nどちらでもOKですが、統一するのがコツです。\n\n<span class=\"copyable\">print(\"こんにちは\")</span>\n\n<span class=\"copyable\">print('こんにちは')</span>\n\nどちらも同じ結果になります。"},
{type:"code",code:"print(\"こんにちは！\")\nprint('Pythonへようこそ')\nprint(42)\nprint(3.14)",desc:"文字列はクォートで囲む。数字はクォート不要！"},
{type:"text",body:"### 数字はクォートなし\n\n数字を表示するときは、クォートで囲まなくてOKです。\n\n<span class=\"copyable\">print(100)</span> → 数字の100\n\n<span class=\"copyable\">print(\"100\")</span> → 文字としての100\n\n今は同じに見えますが、後で計算をするときに大きな違いが出ます！"},
{type:"tip",body:"💡 **よくあるミス**: print のスペルを間違えたり、カッコ () を忘れたりすることがあります。エラーが出たら、まずスペルとカッコを確認しましょう！"}
],exercise:{instruction:"3行で表示してください。\n1行目: 「Python」\n2行目: 「は」\n3行目: 「楽しい！」",initialCode:"# 3つのprint文を書いてね\n",expectedOutput:"Python\nは\n楽しい！",keywords:["print"],answer:"print(\"Python\")\nprint(\"は\")\nprint(\"楽しい！\")",hints:["print() を3回書きます","1つのprint()で1行表示されます","print(\"Python\")\\nprint(\"は\")\\nprint(\"楽しい！\")"]}},

{id:"s3",title:"計算もできる！",xp:40,
content:[
{type:"text",body:"## Pythonは超高性能な電卓\n\nPythonでは、<span class=\"term\" data-term=\"print\">print()</span>の中で計算もできます。\n\n<span class=\"copyable\">print(10 + 3)</span> → 13\n\n<span class=\"copyable\">print(100 - 25)</span> → 75\n\n<span class=\"copyable\">print(6 * 7)</span> → 42（掛け算は `*` を使います）\n\n<span class=\"copyable\">print(10 / 3)</span> → 3.3333...（割り算は `/`）"},
{type:"code",code:"print(10 + 3)\nprint(100 - 25)\nprint(6 * 7)\nprint(10 / 3)",desc:"足し算(+)、引き算(-)、掛け算(*)、割り算(/)"},
{type:"text",body:"### 文字と計算を混ぜる\n\n文字と数字を一緒に表示したい場合は、あとで学ぶ「f文字列」を使いますが、今はまず計算だけ試してみましょう。"},
{type:"tip",body:"💡 **掛け算は ×ではなく * （アスタリスク）** を使います。キーボードのShift+8で入力できます。割り算は ÷ ではなく / （スラッシュ）です。"}
],exercise:{instruction:"1980円の商品に消費税10%を足した合計金額を計算して表示してください。\nヒント: 1980 + 1980 * 0.1 または 1980 * 1.1",initialCode:"# 税込価格を計算して表示！\n",expectedOutput:"2178.0",keywords:["print","1980"],answer:"print(1980 * 1.1)",hints:["print() の中に計算式を書きます","1980 * 1.1 で税込価格が出ます","print(1980 * 1.1) と書いてみてください"]}}
]},

// ========== 2. Python基礎マスター ==========
{id:"py-basics",title:"Python基礎マスター",desc:"変数・データ型・文字列・計算。Pythonの土台をしっかり固めよう",level:"b",icon:"🐣",free:true,nextCourse:"py-control",lessons:[
{id:"b1",title:"変数 - データに名前をつける箱",xp:50,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"variable\">変数</span>とは？\n\n<span class=\"term\" data-term=\"variable\">変数</span>は、データを入れておく**名前つきの箱**です。\n\n想像してみてください。引っ越しのとき、段ボール箱に「食器」「本」「服」とラベルを貼りますよね。プログラミングの<span class=\"term\" data-term=\"variable\">変数</span>もまったく同じです。\n\nデータに名前をつけて保存し、あとから名前で取り出せます。\n\n### 書き方\n\n<span class=\"copyable\">name = \"太郎\"</span>\n\nこれは「nameという箱に、太郎という文字列を入れる」という意味です。`=` は「等しい」ではなく**「代入する（入れる）」**という意味です。"},
{type:"code",code:"name = \"太郎\"\nage = 20\nprint(name)\nprint(age)\n\n# 箱の中身は変えられる\nage = 21\nprint(age)",desc:"= で代入。中身はいつでも変更可能"},
{type:"text",body:"### 命名ルール\n\n- 英字、数字、`_`（アンダースコア）が使える\n- 数字で始めるのはNG（`1name` はダメ）\n- 大文字小文字は区別される（`Name` と `name` は別の箱）\n- <span class=\"term\" data-term=\"variable\">変数</span>名は**中身がわかる名前**にするのがコツ！"},
{type:"tip",body:"💡 `x = 25` より <span class=\"copyable\">age = 25</span> の方が「あ、年齢だな」とわかりますよね。プロのプログラマーは変数名にとてもこだわります！"}
],exercise:{instruction:"変数 fruit に \"りんご\" を代入し、変数 price に 150 を代入して、それぞれ表示してください。",initialCode:"# 変数を定義して表示しよう\n",expectedOutput:"りんご\n150",keywords:["fruit","price","print"],answer:"fruit = \"りんご\"\nprice = 150\nprint(fruit)\nprint(price)",hints:["fruit = \"りんご\" で変数に文字列を代入","price = 150 で数字を代入（クォートなし）","print(fruit) と print(price) で表示"]}},

{id:"b2",title:"データの種類 - データ型",xp:50,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"data-type\">データ型</span>って何？\n\nPythonのデータには「種類（型）」があります。\n\n日常生活でも、数字と文字は違うものですよね。「3 + 5」は計算できますが、「りんご + みかん」は計算できません。\n\nPythonも同じで、データの型によってできることが変わります。\n\n| 型の名前 | 何のデータ？ | 書き方の例 |\n|---|---|---|\n| <span class=\"term\" data-term=\"int\">int</span> | 整数（小数点なし） | `42`, `-10`, `0` |\n| <span class=\"term\" data-term=\"float\">float</span> | 小数（小数点あり） | `3.14`, `-0.5` |\n| <span class=\"term\" data-term=\"str\">str</span> | 文字列 | `\"Hello\"`, `'abc'` |\n| <span class=\"term\" data-term=\"bool\">bool</span> | 真偽値（はい/いいえ） | `True`, `False` |"},
{type:"code",code:"x = 10          # int（整数）\ny = 3.14        # float（小数）\nname = \"Python\" # str（文字列）\nis_fun = True   # bool（真偽値）\n\nprint(type(x))\nprint(type(y))\nprint(type(name))\nprint(type(is_fun))",desc:"type() で変数の型を確認できる"},
{type:"tip",body:"💡 <span class=\"copyable\">type()</span> は「この箱の中身はどんな種類？」と聞く命令です。デバッグで大活躍します！"}
],exercise:{instruction:"変数 a に 42 を、変数 b に 3.14 を、変数 c に \"Hello\" を代入し、それぞれのtype()を表示してください。",initialCode:"# 3つの変数を定義してtype()で確認\n",expectedOutput:"<class 'int'>\n<class 'float'>\n<class 'str'>",keywords:["type","print"],answer:"a = 42\nb = 3.14\nc = \"Hello\"\nprint(type(a))\nprint(type(b))\nprint(type(c))",hints:["a = 42 で整数を代入","type(a) で型を取得","print(type(a)) で型を表示"]}},

{id:"b3",title:"文字列を自在に操ろう",xp:60,
content:[
{type:"text",body:"## 文字列の結合と<span class=\"term\" data-term=\"f-string\">f文字列</span>\n\n文字列は `+` でつなげられます。\n\n<span class=\"copyable\">\"Hello\" + \" World\"</span> → `\"Hello World\"`\n\nでも、もっと便利なのが<span class=\"term\" data-term=\"f-string\">f文字列</span>（エフ文字列）です。\n\n文字列の前に `f` をつけて、`{}` の中に<span class=\"term\" data-term=\"variable\">変数</span>を入れるだけ！\n\n<span class=\"copyable\">f\"{name}さん、こんにちは！\"</span>"},
{type:"code",code:"name = \"太郎\"\nage = 20\n\n# f文字列（超便利！）\nprint(f\"{name}さんは{age}歳です\")\n\n# 文字列メソッド\nmsg = \"hello python\"\nprint(msg.upper())    # 全部大文字\nprint(msg.title())    # 先頭だけ大文字\nprint(len(msg))       # 文字数",desc:"f文字列と便利な文字列メソッド"},
{type:"tip",body:"💡 <span class=\"term\" data-term=\"f-string\">f文字列</span>はPython3.6以降の機能で、現在最もよく使われる文字列フォーマット方法です。`f` を忘れずに！"}
],exercise:{instruction:"変数 item に \"コーヒー\"、変数 price に 350 を代入し、f文字列で「コーヒーは350円です」と表示してください。",initialCode:"# f文字列で表示しよう\n",expectedOutput:"コーヒーは350円です",keywords:["print","f\""],answer:"item = \"コーヒー\"\nprice = 350\nprint(f\"{item}は{price}円です\")",hints:["item = \"コーヒー\" で文字列代入","f\"...\" でf文字列を作る","print(f\"{item}は{price}円です\")"]}},

{id:"b4",title:"Pythonで計算しよう - 演算子",xp:60,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"operator\">演算子</span>の一覧\n\n| <span class=\"term\" data-term=\"operator\">演算子</span> | 意味 | 例 | 結果 |\n|---|---|---|---|\n| `+` | 足し算 | `10 + 3` | 13 |\n| `-` | 引き算 | `10 - 3` | 7 |\n| `*` | 掛け算 | `10 * 3` | 30 |\n| `/` | 割り算 | `10 / 3` | 3.33... |\n| `//` | 切り捨て割り算 | `10 // 3` | 3 |\n| `%` | 余り | `10 % 3` | 1 |\n| `**` | べき乗 | `2 ** 3` | 8 |\n\n`//` と `%` は特に便利です。割り勘計算で「1人いくら？余りは？」という計算ができます。"},
{type:"code",code:"# 割り勘計算\ntotal = 5000\npeople = 3\nper_person = total // people  # 1人分（切り捨て）\namari = total % people        # 余り\nprint(f\"1人 {per_person}円（余り{amari}円）\")",desc:"実用例: 割り勘計算"},
{type:"tip",body:"💡 `%`（余り）を使うと「偶数か奇数か」を判定できます。<span class=\"copyable\">number % 2 == 0</span> なら偶数です！"}
],exercise:{instruction:"3人で4200円の食事を割り勘します。1人分（//で切り捨て）と余りを計算し「1人1400円（余り0円）」と表示してください。",initialCode:"# 割り勘を計算\n",expectedOutput:"1人1400円（余り0円）",keywords:["//","%","print"],answer:"total = 4200\npeople = 3\nprint(f\"1人{total // people}円（余り{total % people}円）\")",hints:["total // people で1人分","total % people で余り","f文字列で1つのprintにまとめる"]}},

{id:"b5",title:"型変換 - データの変身",xp:60,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"type-conversion\">型変換</span>\n\n文字列の `\"50\"` と数字の `50` は別物です。\n\n`\"50\" + \"30\"` → `\"5030\"`（文字列の結合！計算にならない！）\n\n`50 + 30` → `80`（数字の計算）\n\nデータの型を変えることを<span class=\"term\" data-term=\"type-conversion\">型変換</span>と言います。\n\n| 変換 | 関数 | 例 |\n|---|---|---|\n| 整数に | <span class=\"copyable\">int()</span> | `int(\"50\")` → `50` |\n| 小数に | <span class=\"copyable\">float()</span> | `float(\"3.14\")` → `3.14` |\n| 文字列に | <span class=\"copyable\">str()</span> | `str(100)` → `\"100\"` |"},
{type:"code",code:"# 文字列 → 数字\na = \"50\"\nb = \"30\"\nprint(a + b)          # 文字列の結合: 5030\nprint(int(a) + int(b))  # 数字の計算: 80\n\n# 数字 → 文字列\nage = 20\nprint(\"私は\" + str(age) + \"歳\")",desc:"型変換で文字と数字を行き来"},
{type:"tip",body:"💡 ユーザー入力は常に文字列です。計算したいときは必ず <span class=\"copyable\">int()</span> や <span class=\"copyable\">float()</span> で変換しましょう！"}
],exercise:{instruction:"変数 a に文字列 \"80\"、変数 b に文字列 \"20\" を代入し、int()で整数に変換してから足し算した結果を表示してください。",initialCode:"# 文字列を数字に変換して計算\n",expectedOutput:"100",keywords:["int","print"],answer:"a = \"80\"\nb = \"20\"\nprint(int(a) + int(b))",hints:["a = \"80\" で文字列として定義","int(a) で整数に変換","print(int(a) + int(b))"]}}
]},

// ========== 3. 条件分岐とループ ==========
{id:"py-control",title:"条件分岐とループ",desc:"if文・for文・while文で、プログラムに判断と繰り返しをさせよう",level:"b",icon:"🔀",free:true,nextCourse:"py-func",lessons:[
{id:"c1",title:"もし〜なら - if文の基本",xp:60,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"if\">if文</span>（条件分岐）\n\n日常生活でも「もし雨なら傘を持つ」と判断しますよね。プログラムにも同じ判断をさせられます。\n\n```python\nif 条件:\n    実行する処理\n```\n\n**超重要**: 条件の後ろにコロン `:` をつけて、次の行は**スペース4つ分右にずらす**（<span class=\"term\" data-term=\"indent\">インデント</span>）。この<span class=\"term\" data-term=\"indent\">インデント</span>がPythonの特徴で、「この処理はifの中ですよ」という意味になります。"},
{type:"code",code:"age = 20\n\nif age >= 18:\n    print(\"成人です\")\n\nif age < 18:\n    print(\"未成年です\")",desc:">=は「以上」、<は「より小さい」"},
{type:"text",body:"### <span class=\"term\" data-term=\"comparison\">比較演算子</span>\n\n| 演算子 | 意味 | 例 |\n|---|---|---|\n| `==` | 等しい | `x == 5` |\n| `!=` | 等しくない | `x != 5` |\n| `>` | より大きい | `x > 5` |\n| `<` | より小さい | `x < 5` |\n| `>=` | 以上 | `x >= 5` |\n| `<=` | 以下 | `x <= 5` |\n\n⚠️ `=` は<span class=\"term\" data-term=\"assignment\">代入</span>、`==` は比較です。混同注意！"},
{type:"tip",body:"💡 <span class=\"term\" data-term=\"indent\">インデント</span>は**スペース4つ**が標準です。Tabキーを押すと自動で入ります。インデントがずれるとエラーになるので注意！"}
],exercise:{instruction:"変数 score に 85 を代入し、80以上なら「合格！」と表示してください。",initialCode:"# スコアで合格判定\n",expectedOutput:"合格！",keywords:["if","print","score"],answer:"score = 85\nif score >= 80:\n    print(\"合格！\")",hints:["score = 85 で定義","if score >= 80: で条件判定","print(\"合格！\") をインデントして書く"]}},

{id:"c2",title:"もっと条件を - elif と else",xp:60,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"elif\">elif</span>と<span class=\"term\" data-term=\"else\">else</span>\n\n「もしAなら→Bなら→それ以外なら」と複数の条件を書けます。\n\n```python\nif 条件1:\n    処理1\nelif 条件2:\n    処理2\nelse:\n    それ以外の処理\n```\n\n<span class=\"term\" data-term=\"elif\">elif</span>は「else if」の略です。条件をいくつでも追加できます。"},
{type:"code",code:"score = 75\n\nif score >= 90:\n    print(\"Sランク\")\nelif score >= 80:\n    print(\"Aランク\")\nelif score >= 70:\n    print(\"Bランク\")\nelse:\n    print(\"Cランク\")",desc:"成績ランク判定の例"},
{type:"tip",body:"💡 条件は**上から順番に**チェックされます。最初にTrueになった条件だけが実行され、残りはスキップされます。"}
],exercise:{instruction:"変数 age に 17 を代入し、18以上なら「成人です」、そうでなければ「未成年です」と表示してください。",initialCode:"# 年齢判定\n",expectedOutput:"未成年です",keywords:["if","else","print"],answer:"age = 17\nif age >= 18:\n    print(\"成人です\")\nelse:\n    print(\"未成年です\")",hints:["age = 17 で定義","if age >= 18: で18歳以上チェック","else: で「それ以外」を処理"]}},

{id:"c3",title:"繰り返し① - for文",xp:60,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"for\">for文</span>\n\n同じ処理を何度も繰り返したいとき、<span class=\"term\" data-term=\"for\">for文</span>を使います。\n\n```python\nfor 変数 in 繰り返すもの:\n    処理\n```\n\n<span class=\"term\" data-term=\"range\">range()</span>と組み合わせると、指定回数だけ繰り返せます。\n\n<span class=\"copyable\">range(5)</span> → 0, 1, 2, 3, 4 の5回\n<span class=\"copyable\">range(1, 6)</span> → 1, 2, 3, 4, 5\n<span class=\"copyable\">range(0, 10, 2)</span> → 0, 2, 4, 6, 8（2つ飛ばし）"},
{type:"code",code:"# 5回繰り返し\nfor i in range(5):\n    print(f\"{i}番目\")\n\nprint(\"---\")\n\n# リストの繰り返し\nfruits = [\"りんご\", \"バナナ\", \"みかん\"]\nfor f in fruits:\n    print(f\"{f}が好き！\")",desc:"range()とリストでの繰り返し"},
{type:"tip",body:"💡 <span class=\"term\" data-term=\"range\">range(5)</span> は0から始まって4で終わります（5は含まない！）。1から始めたいなら <span class=\"copyable\">range(1, 6)</span> と書きます。"}
],exercise:{instruction:"for文を使って、1から5までの数字を1行ずつ表示してください。",initialCode:"# 1から5まで表示\n",expectedOutput:"1\n2\n3\n4\n5",keywords:["for","range","print"],answer:"for i in range(1, 6):\n    print(i)",hints:["range(1, 6) で1~5の範囲","for i in range(1, 6): でループ","print(i) で数字を表示"]}},

{id:"c4",title:"繰り返し② - while文",xp:70,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"while\">while文</span>\n\n<span class=\"term\" data-term=\"condition\">条件</span>がTrueの間、ずっと繰り返します。\n\n```python\nwhile 条件:\n    処理\n```\n\nfor文が「〇回繰り返す」なら、while文は「条件を満たす間ずっと繰り返す」です。\n\n⚠️ 条件がずっとTrueだと**無限ループ**になるので注意！必ず条件が変わるようにしましょう。\n\n<span class=\"term\" data-term=\"break\">break</span>: ループを途中で抜ける\n<span class=\"term\" data-term=\"continue\">continue</span>: 今回だけスキップして次へ"},
{type:"code",code:"count = 5\nwhile count > 0:\n    print(count)\n    count -= 1  # countを1減らす\nprint(\"発射！\")",desc:"カウントダウン"},
{type:"tip",body:"💡 `count -= 1` は `count = count - 1` の省略形です。`+=` や `*=` もあります！"}
],exercise:{instruction:"while文で n=1 から始めて、n<=5 の間 n を表示し、最後に「完了」と表示してください。",initialCode:"# while文で1~5表示\n",expectedOutput:"1\n2\n3\n4\n5\n完了",keywords:["while","print"],answer:"n = 1\nwhile n <= 5:\n    print(n)\n    n += 1\nprint(\"完了\")",hints:["n = 1 で初期化","while n <= 5: で条件","print(n) の後に n += 1 を忘れずに"]}},

{id:"c5",title:"条件の組み合わせ - and, or, not",xp:70,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"logical\">論理演算子</span>\n\n複数の条件を組み合わせられます。\n\n| 演算子 | 意味 | 例 |\n|---|---|---|\n| `and` | 両方True | 「晴れ **and** 休み」→ 両方満たすとき |\n| `or` | どちらかTrue | 「土曜 **or** 日曜」→ どちらかでOK |\n| `not` | 反転 | 「**not** 雨」→ 雨じゃないとき |"},
{type:"code",code:"age = 25\nhas_ticket = True\n\nif age >= 18 and has_ticket:\n    print(\"入場できます\")\nelse:\n    print(\"入場できません\")",desc:"2つの条件を and で組み合わせ"},
{type:"tip",body:"💡 `and` は「かつ（両方満たす）」、`or` は「または（どちらか）」です。日常語に置き換えると理解しやすい！"}
],exercise:{instruction:"score=75, attendance=True。「score>=60 かつ attendance==True」なら「合格」、そうでなければ「不合格」と表示。",initialCode:"# 合格判定\n",expectedOutput:"合格",keywords:["and","if","print"],answer:"score = 75\nattendance = True\nif score >= 60 and attendance:\n    print(\"合格\")\nelse:\n    print(\"不合格\")",hints:["score = 75, attendance = True","if score >= 60 and attendance:","条件を満たすので「合格」"]}}
]},

// ========== 4. 関数をマスター ==========
{id:"py-func",title:"関数をマスター",desc:"コードを整理して再利用。def・引数・戻り値を学ぼう",level:"b",icon:"⚡",free:true,nextCourse:"py-ds",lessons:[
{id:"f1",title:"関数って何？ - 料理レシピのように",xp:70,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"function\">関数</span>とは？\n\n<span class=\"term\" data-term=\"function\">関数</span>は「処理のレシピ」です。\n\n料理で例えると：「カレーの作り方」をレシピに書いておけば、何度でもそのレシピ通りに作れますよね。プログラミングの<span class=\"term\" data-term=\"function\">関数</span>も同じで、処理をまとめて名前をつけ、何度でも呼び出せます。\n\n```python\ndef 関数名(引数):\n    処理\n    return 戻り値\n```\n\n<span class=\"term\" data-term=\"def\">def</span> は「define（定義する）」の略です。"},
{type:"code",code:"def greet(name):\n    return f\"こんにちは、{name}さん！\"\n\nprint(greet(\"太郎\"))\nprint(greet(\"花子\"))",desc:"関数の定義と呼び出し"},
{type:"tip",body:"💡 <span class=\"term\" data-term=\"function\">関数</span>を使うと、同じコードを何度も書かなくて済みます。プロは「2回以上書くならら関数にする」を意識しています！"}
],exercise:{instruction:"引数 a と b の合計を返す関数 add を作り、add(3, 7) の結果を表示してください。",initialCode:"# add関数を定義\n",expectedOutput:"10",keywords:["def","return","print"],answer:"def add(a, b):\n    return a + b\nprint(add(3, 7))",hints:["def add(a, b): で定義","return a + b で合計を返す","print(add(3, 7)) で表示"]}},

{id:"f2",title:"引数と戻り値",xp:70,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"argument\">引数</span>と<span class=\"term\" data-term=\"return\">戻り値</span>\n\n<span class=\"term\" data-term=\"function\">関数</span>を自動販売機に例えると:\n\n- **<span class=\"term\" data-term=\"argument\">引数</span>** = 入れるお金とボタン（INPUT）\n- **処理** = 中でジュースを出す仕組み\n- **<span class=\"term\" data-term=\"return\">戻り値</span>** = 出てくるジュース（OUTPUT）\n\n<span class=\"term\" data-term=\"return\">return</span>がないと `None` が返ります。"},
{type:"code",code:"def calc_tax(price):\n    \"\"\"税込価格を計算する\"\"\"\n    return int(price * 1.1)\n\nresult = calc_tax(1000)\nprint(f\"税込: {result}円\")\nprint(f\"税込: {calc_tax(2500)}円\")",desc:"戻り値を変数に入れたり、直接printしたり"},
{type:"tip",body:"💡 `\"\"\"...\"\"\"`は<span class=\"term\" data-term=\"docstring\">ドキュメント文字列</span>（docstring）と言い、関数の説明を書くための特別なコメントです。"}
],exercise:{instruction:"価格を受け取り、10%割引後の価格を返す関数 discount を作り、discount(1000) の結果を表示してください。",initialCode:"# 割引関数\n",expectedOutput:"900",keywords:["def","return","print"],answer:"def discount(price):\n    return int(price * 0.9)\nprint(discount(1000))",hints:["def discount(price): で定義","price * 0.9 で10%割引","return int(...) で整数にして返す"]}},

{id:"f3",title:"デフォルト引数",xp:70,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"default-arg\">デフォルト引数</span>\n\n<span class=\"term\" data-term=\"argument\">引数</span>に初期値を設定できます。呼び出し時に省略すると初期値が使われます。\n\n<span class=\"copyable\">def greet(name, greeting=\"こんにちは\"):</span>\n\nこのように書くと、greeting を省略したら「こんにちは」が使われます。"},
{type:"code",code:"def greet(name, greeting=\"こんにちは\"):\n    print(f\"{greeting}、{name}さん！\")\n\ngreet(\"太郎\")\ngreet(\"花子\", \"おはよう\")",desc:"デフォルト引数で省略可能に"},
{type:"tip",body:"💡 <span class=\"term\" data-term=\"default-arg\">デフォルト引数</span>は、API設計で「省略可能なオプション」を作るときに大活躍します！"}
],exercise:{instruction:"greet(name, greeting=\"こんにちは\") を定義し、greet(\"太郎\") と greet(\"花子\", \"おはよう\") を呼び出してください。",initialCode:"# デフォルト引数付き関数\n",expectedOutput:"こんにちは、太郎さん！\nおはよう、花子さん！",keywords:["def","print"],answer:"def greet(name, greeting=\"こんにちは\"):\n    print(f\"{greeting}、{name}さん！\")\ngreet(\"太郎\")\ngreet(\"花子\", \"おはよう\")",hints:["def greet(name, greeting=\"こんにちは\"):","print(f\"{greeting}、{name}さん！\")","greet を2回呼び出す"]}},

{id:"f4",title:"ラムダ式 - 1行で関数を",xp:80,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"lambda\">ラムダ式</span>\n\n1行で書ける短い<span class=\"term\" data-term=\"function\">関数</span>です。\n\n```python\nlambda 引数: 戻り値の式\n```\n\n通常の関数:\n```python\ndef double(x):\n    return x * 2\n```\n\n<span class=\"term\" data-term=\"lambda\">ラムダ式</span>:\n<span class=\"copyable\">double = lambda x: x * 2</span>"},
{type:"code",code:"square = lambda x: x ** 2\nprint(square(5))\nprint(square(8))\n\n# sorted()でよく使う\ndata = [(\"B\", 2), (\"A\", 1), (\"C\", 3)]\nsorted_data = sorted(data, key=lambda x: x[1])\nprint(sorted_data)",desc:"ラムダ式の基本とsorted()での使用例"},
{type:"tip",body:"💡 <span class=\"term\" data-term=\"lambda\">ラムダ式</span>は `sorted()` や `filter()` と組み合わせるのが定番。データ処理で大活躍します！"}
],exercise:{instruction:"ラムダ式で引数を3倍する関数 triple を定義し、triple(7) の結果を表示してください。",initialCode:"# ラムダ式\n",expectedOutput:"21",keywords:["lambda","print"],answer:"triple = lambda x: x * 3\nprint(triple(7))",hints:["lambda x: x * 3","triple = lambda x: x * 3","print(triple(7))"]}}
]},

// ========== 5. データ構造 ==========
{id:"py-ds",title:"データ構造",desc:"リスト・辞書・タプル・リスト内包表記でデータを効率管理",level:"i",icon:"📦",free:true,nextCourse:"py-clean",lessons:[
{id:"d1",title:"リスト - データの列",xp:80,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"list\">リスト</span>\n\n<span class=\"term\" data-term=\"list\">リスト</span>は、複数のデータを**順番に並べて**保存するデータ構造です。\n\n買い物リストを想像してください。「牛乳、卵、パン」と順番に並んでいますよね。\n\n<span class=\"copyable\">fruits = [\"りんご\", \"バナナ\", \"みかん\"]</span>\n\n<span class=\"term\" data-term=\"index\">インデックス</span>（番号）は **0から** 始まります。\n\n- `fruits[0]` → \"りんご\"\n- `fruits[1]` → \"バナナ\"\n- `fruits[-1]` → \"みかん\"（最後の要素）"},
{type:"code",code:"fruits = [\"りんご\", \"バナナ\", \"みかん\"]\nprint(fruits[0])\nfruits.append(\"ぶどう\")\nprint(len(fruits))\nprint(fruits)",desc:"リストの作成・アクセス・追加"},
{type:"text",body:"### よく使う<span class=\"term\" data-term=\"method\">メソッド</span>\n\n- <span class=\"copyable\">.append(x)</span> 末尾に追加\n- <span class=\"copyable\">.insert(i, x)</span> 位置iに挿入\n- <span class=\"copyable\">.remove(x)</span> xを削除\n- <span class=\"copyable\">.sort()</span> ソート\n- <span class=\"copyable\">.pop()</span> 末尾を取り出し\n- <span class=\"copyable\">len(list)</span> 要素数"}
],exercise:{instruction:"[3, 1, 4, 1, 5] をsort()でソートして表示してください。",initialCode:"# ソートして表示\n",expectedOutput:"[1, 1, 3, 4, 5]",keywords:["sort","print"],answer:"numbers = [3, 1, 4, 1, 5]\nnumbers.sort()\nprint(numbers)",hints:["numbers = [3, 1, 4, 1, 5]","numbers.sort() でソート","print(numbers)"]}},

{id:"d2",title:"辞書 - 名前でデータを引く",xp:80,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"dict\">辞書</span>（dict）\n\n<span class=\"term\" data-term=\"dict\">辞書</span>は**キーと値のペア**でデータを管理します。\n\n本物の辞書のように、「単語（キー）」で引くと「意味（値）」が出てきます。\n\n<span class=\"copyable\">user = {\"name\": \"太郎\", \"age\": 25}</span>"},
{type:"code",code:"user = {\"name\": \"太郎\", \"age\": 25, \"city\": \"東京\"}\nprint(user[\"name\"])\nuser[\"email\"] = \"taro@example.com\"\n\nfor key, value in user.items():\n    print(f\"{key}: {value}\")",desc:"辞書の作成・アクセス・追加・ループ"},
{type:"tip",body:"💡 <span class=\"term\" data-term=\"dict\">辞書</span>はJSON（Web APIのデータ形式）そのものです。Web開発では毎日使います！"}
],exercise:{instruction:"商品辞書を作成。\"name\":\"ノートPC\", \"price\":98000。f文字列で「ノートPC: 98000円」と表示。",initialCode:"# 商品辞書\n",expectedOutput:"ノートPC: 98000円",keywords:["print"],answer:"item = {\"name\": \"ノートPC\", \"price\": 98000}\nprint(f\"{item['name']}: {item['price']}円\")",hints:["item = {\"name\": \"ノートPC\", \"price\": 98000}","item[\"name\"] でアクセス","f文字列でまとめて表示"]}},

{id:"d3",title:"タプルとセット",xp:80,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"tuple\">タプル</span>と<span class=\"term\" data-term=\"set\">セット</span>\n\n### <span class=\"term\" data-term=\"tuple\">タプル</span>（tuple）\n変更できないリスト。`()` で作ります。\n<span class=\"copyable\">colors = (\"赤\", \"青\", \"緑\")</span>\n\n一度作ったら中身を変えられないので、「絶対変わらないデータ」に使います。\n\n### <span class=\"term\" data-term=\"set\">セット</span>（set）\n重複なしの集合。`{}` で作ります。\n<span class=\"copyable\">unique = {1, 2, 3, 2, 1}</span> → `{1, 2, 3}`\n\n自動で重複が消えるので、ユニークな値を取り出すときに便利。"},
{type:"code",code:"# タプル\ncoords = (10, 20)\nprint(coords[0])\n\n# セット（重複を自動削除）\nnumbers = [1, 2, 3, 2, 1, 3, 4]\nunique = set(numbers)\nprint(unique)\nprint(len(unique))",desc:"タプルとセットの基本"},
],exercise:{instruction:"リスト [1, 2, 2, 3, 3, 3, 4] からset()で重複を除き、要素数をlen()で表示してください。",initialCode:"# 重複を除く\n",expectedOutput:"4",keywords:["set","len","print"],answer:"data = [1, 2, 2, 3, 3, 3, 4]\nprint(len(set(data)))",hints:["set() でセットに変換","len() で要素数","print(len(set(data)))"]}},

{id:"d4",title:"リスト内包表記",xp:90,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"list-comp\">リスト内包表記</span>\n\nPythonの強力機能。<span class=\"term\" data-term=\"list\">リスト</span>を1行で作れます。\n\n<span class=\"copyable\">[式 for 変数 in イテラブル if 条件]</span>\n\n通常のfor文で5行かかるものが、1行で書けます。"},
{type:"code",code:"# 通常\nsquares = []\nfor i in range(1, 6):\n    squares.append(i ** 2)\nprint(squares)\n\n# リスト内包表記で同じこと！\nsquares2 = [i ** 2 for i in range(1, 6)]\nprint(squares2)\n\n# 条件つき\nevens = [i for i in range(10) if i % 2 == 0]\nprint(evens)",desc:"通常のfor文とリスト内包表記の比較"},
{type:"tip",body:"💡 Pythonらしい書き方（Pythonic）の代表格。コードが短くなるだけでなく、処理速度も速いです！"}
],exercise:{instruction:"リスト内包表記で1~10の奇数リストを作り表示してください。",initialCode:"# 奇数リスト\n",expectedOutput:"[1, 3, 5, 7, 9]",keywords:["for","if"],answer:"odds = [i for i in range(1, 11) if i % 2 != 0]\nprint(odds)",hints:["range(1, 11) で1~10","i % 2 != 0 で奇数判定","[i for i in range(1, 11) if i % 2 != 0]"]}}
]},

// ========== 6. きれいなコードの書き方 ==========
{id:"py-clean",title:"きれいなコードの書き方",desc:"コメント・命名規則・コードの整理。読みやすいコードを書こう",level:"i",icon:"✨",free:true,nextCourse:"py-error",lessons:[
{id:"cl1",title:"コメント - 未来の自分へのメモ",xp:50,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"comment\">コメント</span>\n\nコードの中にメモを残せます。`#` の後に書いた文字はプログラムに無視されます。\n\n<span class=\"copyable\"># これはコメントです</span>\n\nコメントは「未来の自分」や「チームメンバー」への手紙です。3ヶ月後の自分は、今書いたコードを覚えていないかもしれません。\n\n### いつコメントを書く？\n- **なぜ**そのコードを書いたか（Whyを書く）\n- 複雑な処理の説明\n- TODOメモ（`# TODO: あとで修正する`）\n\n### 書かなくていいコメント\n- コードを見れば明らかなこと（`x = 5  # xに5を代入` ← 不要！）"},
{type:"code",code:"# 消費税率（2024年時点）\nTAX_RATE = 0.1\n\ndef calc_total(price):\n    \"\"\"税込価格を計算する\"\"\"\n    # 小数点以下を切り捨て\n    return int(price * (1 + TAX_RATE))\n\n# TODO: 軽減税率にも対応する\nprint(calc_total(1000))",desc:"実践的なコメントの書き方"},
{type:"tip",body:"💡 三重クォート <span class=\"copyable\">\"\"\"説明\"\"\"</span> は<span class=\"term\" data-term=\"docstring\">ドキュメント文字列</span>（docstring）。関数の先頭に書くと、関数の説明になります。"}
],exercise:{instruction:"以下のコードにコメントを追加して、何をしているか説明してください。\nresult = [i ** 2 for i in range(1, 6)]\nprint(result)\n\n1行目の上に # で「1~5の2乗リストを作成」というコメントを書いてください。",initialCode:"# ここにコメントを書いてね\nresult = [i ** 2 for i in range(1, 6)]\nprint(result)",expectedOutput:"[1, 4, 9, 16, 25]",keywords:["#","print"],answer:"# 1~5の2乗リストを作成\nresult = [i ** 2 for i in range(1, 6)]\nprint(result)",hints:["# でコメントを書く","コードの上に説明を書く","# 1~5の2乗リストを作成"]}},

{id:"cl2",title:"変数名のつけ方",xp:50,
content:[
{type:"text",body:"## 命名規則 - <span class=\"term\" data-term=\"pep8\">PEP8</span>\n\nPythonには<span class=\"term\" data-term=\"pep8\">PEP8</span>という「コードの書き方ガイド」があります。\n\n### 基本ルール\n\n| 種類 | 書き方 | 例 |\n|---|---|---|\n| 変数名 | snake_case | `user_name`, `total_price` |\n| 関数名 | snake_case | `calc_tax()`, `get_data()` |\n| 定数 | UPPER_CASE | `MAX_COUNT`, `TAX_RATE` |\n| クラス名 | PascalCase | `UserProfile`, `ShoppingCart` |\n\n### ❌ 悪い例 → ✅ 良い例\n- ❌ `x = 25` → ✅ `age = 25`\n- ❌ `d = []` → ✅ `scores = []`\n- ❌ `f()` → ✅ `calculate_average()`"},
{type:"code",code:"# ❌ 悪い例\nx = 25\ny = \"太郎\"\ndef f(a, b):\n    return a + b\n\n# ✅ 良い例\nuser_age = 25\nuser_name = \"太郎\"\ndef add_numbers(num1, num2):\n    return num1 + num2\n\nprint(add_numbers(3, 7))",desc:"読みやすい名前 vs 読みにくい名前"},
{type:"tip",body:"💡 変数名に悩んだら「この変数を知らない人が読んで、中身が想像できるか？」と自問してみてください。"}
],exercise:{instruction:"以下のコードの変数名をわかりやすく書き換えて、同じ結果を出してください。\nx = 1000\ny = 0.1\nprint(int(x + x * y))",initialCode:"# 変数名をわかりやすく！\n",expectedOutput:"1100",keywords:["print"],answer:"price = 1000\ntax_rate = 0.1\nprint(int(price + price * tax_rate))",hints:["x は何のデータ？→ price","y は何？→ tax_rate","わかりやすい名前に変えるだけ"]}},

{id:"cl3",title:"関数で整理整頓 - DRY原則",xp:60,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"dry\">DRY原則</span>\n\n**D**on't **R**epeat **Y**ourself（同じことを繰り返すな）\n\nコピペで同じコードが3箇所にあったら、1箇所を修正しても残り2箇所を忘れてバグの原因に。\n\n**解決策**: 繰り返すコードは<span class=\"term\" data-term=\"function\">関数</span>にまとめる！"},
{type:"code",code:"# ❌ DRYに反する\nprint(f\"りんご: {int(100 * 1.1)}円\")\nprint(f\"バナナ: {int(200 * 1.1)}円\")\nprint(f\"みかん: {int(150 * 1.1)}円\")\n\n# ✅ 関数でDRY\ndef show_price(name, price):\n    print(f\"{name}: {int(price * 1.1)}円\")\n\nshow_price(\"りんご\", 100)\nshow_price(\"バナナ\", 200)\nshow_price(\"みかん\", 150)",desc:"関数で重複コードを排除"},
{type:"tip",body:"💡 「同じようなコードを2回以上書いたら関数にする」。これだけでコードの品質が劇的に上がります！"}
],exercise:{instruction:"name と score を受け取り「{name}: {score}点」と表示する関数 show_score を作り、3人分呼び出してください。\nshow_score(\"太郎\", 85)\nshow_score(\"花子\", 92)\nshow_score(\"次郎\", 78)",initialCode:"# show_score関数を作ろう\n",expectedOutput:"太郎: 85点\n花子: 92点\n次郎: 78点",keywords:["def","print"],answer:"def show_score(name, score):\n    print(f\"{name}: {score}点\")\nshow_score(\"太郎\", 85)\nshow_score(\"花子\", 92)\nshow_score(\"次郎\", 78)",hints:["def show_score(name, score):","print(f\"{name}: {score}点\")","3回呼び出す"]}}
]},

// ========== 7. オブジェクト指向入門 ==========
{id:"py-oop",title:"オブジェクト指向入門",desc:"クラスと継承。現実世界をコードで表現しよう",level:"i",icon:"🏗️",free:true,nextCourse:"py-janken",lessons:[
{id:"o1",title:"クラスとは？ - 設計図を作ろう",xp:100,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"class\">クラス</span>\n\n<span class=\"term\" data-term=\"class\">クラス</span>は「設計図」、<span class=\"term\" data-term=\"instance\">インスタンス</span>は「設計図から作った実物」です。\n\nクッキー型（クラス）から、たくさんのクッキー（インスタンス）を作るイメージです。\n\n<span class=\"term\" data-term=\"init\">__init__</span>は<span class=\"term\" data-term=\"instance\">インスタンス</span>を作るときに自動で呼ばれる特別な<span class=\"term\" data-term=\"method-oop\">メソッド</span>です。\n\n<span class=\"term\" data-term=\"self\">self</span>は「自分自身」を指す特別な<span class=\"term\" data-term=\"argument\">引数</span>です。"},
{type:"code",code:"class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def bark(self):\n        return f\"{self.name}「ワン！」\"\n\ndog1 = Dog(\"ポチ\", 3)\ndog2 = Dog(\"タロウ\", 5)\nprint(dog1.bark())\nprint(f\"{dog2.name}は{dog2.age}歳\")",desc:"クラス定義→インスタンス作成→メソッド呼び出し"},
],exercise:{instruction:"Catクラスを作成。name, colorを受け取り、describe()で「ミケ は 三毛 色です」と返す。Cat(\"ミケ\",\"三毛\")で表示。",initialCode:"# Catクラス\n",expectedOutput:"ミケ は 三毛 色です",keywords:["class","def","self"],answer:"class Cat:\n    def __init__(self, name, color):\n        self.name = name\n        self.color = color\n    def describe(self):\n        return f\"{self.name} は {self.color} 色です\"\nprint(Cat(\"ミケ\", \"三毛\").describe())",hints:["class Cat: で定義","__init__ で name, color を保存","describe で f文字列を返す"]}},

{id:"o2",title:"メソッドを使いこなそう",xp:100,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"method-oop\">メソッド</span>\n\n<span class=\"term\" data-term=\"class\">クラス</span>の中に定義した<span class=\"term\" data-term=\"function\">関数</span>を<span class=\"term\" data-term=\"method-oop\">メソッド</span>と呼びます。\n\nオブジェクトに「動き」を持たせます。犬クラスなら「吠える」「お座りする」などの動きです。"},
{type:"code",code:"class Counter:\n    def __init__(self):\n        self.count = 0\n    \n    def add(self):\n        self.count += 1\n    \n    def show(self):\n        print(f\"カウント: {self.count}\")\n\nc = Counter()\nc.add()\nc.add()\nc.add()\nc.show()",desc:"カウンターをクラスで実装"},
],exercise:{instruction:"BankAccountクラスを作成。初期残高0、deposit(amount)で入金、show()で「残高: ○○円」と表示。1000円入金して表示。",initialCode:"# BankAccount\n",expectedOutput:"残高: 1000円",keywords:["class","def","self"],answer:"class BankAccount:\n    def __init__(self):\n        self.balance = 0\n    def deposit(self, amount):\n        self.balance += amount\n    def show(self):\n        print(f\"残高: {self.balance}円\")\nacc = BankAccount()\nacc.deposit(1000)\nacc.show()",hints:["__init__ で self.balance = 0","deposit で self.balance += amount","show で残高を表示"]}},

{id:"o3",title:"継承 - 設計図を受け継ぐ",xp:110,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"inheritance\">継承</span>\n\n既存の<span class=\"term\" data-term=\"class\">クラス</span>を拡張して新しいクラスを作れます。\n\n「動物」クラス（親）から「犬」「猫」クラス（子）を作るイメージ。共通部分は親に書き、特有の部分だけ子に書きます。"},
{type:"code",code:"class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return \"...\"\n\nclass Dog(Animal):\n    def speak(self):\n        return f\"{self.name}「ワン！」\"\n\nclass Cat(Animal):\n    def speak(self):\n        return f\"{self.name}「ニャー！」\"\n\nfor a in [Dog(\"ポチ\"), Cat(\"タマ\")]:\n    print(a.speak())",desc:"親クラスを継承して子クラスを作る"},
],exercise:{instruction:"親クラスShape(name)、子クラスCircle(name, radius)を作り、area()で面積(3.14*r**2)を返す。Circle(\"円\",5)のnameと面積を表示。",initialCode:"# Shape, Circle\n",expectedOutput:"円\n78.5",keywords:["class","def"],answer:"class Shape:\n    def __init__(self, name):\n        self.name = name\nclass Circle(Shape):\n    def __init__(self, name, radius):\n        super().__init__(name)\n        self.radius = radius\n    def area(self):\n        return 3.14 * self.radius ** 2\nc = Circle(\"円\", 5)\nprint(c.name)\nprint(c.area())",hints:["class Circle(Shape): で継承","super().__init__(name) で親の初期化","3.14 * self.radius ** 2"]}}
]},

// ========== 8. エラーと友達になろう ==========
{id:"py-error",title:"エラーと友達になろう",desc:"エラーメッセージの読み方・try/except・デバッグのコツ",level:"i",icon:"🛡️",free:true,nextCourse:"py-oop",lessons:[
{id:"e1",title:"エラーメッセージを読もう",xp:80,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"error\">エラー</span>は怖くない！\n\nプログラミングで<span class=\"term\" data-term=\"error\">エラー</span>が出るのは当たり前。プロでも毎日エラーを出します。\n\n大事なのは**エラーメッセージを読んで原因を見つける**こと。\n\n### よくある<span class=\"term\" data-term=\"error\">エラー</span>\n\n| エラー名 | 原因 | 例 |\n|---|---|---|\n| SyntaxError | 書き方の間違い | カッコ忘れ、コロン忘れ |\n| NameError | 未定義の名前 | 変数のスペルミス |\n| TypeError | 型の不一致 | 文字列+数字 |\n| IndexError | 範囲外 | リストの範囲外アクセス |\n| ZeroDivisionError | 0で割った | `10 / 0` |"},
{type:"code",code:"# エラーの例と対処\nname = \"太郎\"\nage = 25\n\n# TypeError を避ける\n# print(\"年齢: \" + age)  # ← エラー！\nprint(\"年齢: \" + str(age))  # ← OK\nprint(f\"年齢: {age}\")       # ← もっとOK",desc:"TypeErrorの例と対処法"},
{type:"tip",body:"💡 エラーメッセージの**最後の行**が一番重要。何のエラーかが書いてあります。"}
],exercise:{instruction:"文字列 \"100\" と数字 50 を足して 150 を表示してください（型変換を使って）。",initialCode:"# 型変換でエラーを避ける\n",expectedOutput:"150",keywords:["int","print"],answer:"a = \"100\"\nprint(int(a) + 50)",hints:["\"100\" は文字列なので計算できない","int() で整数に変換","print(int(\"100\") + 50)"]}},

{id:"e2",title:"try/except - エラーをキャッチ",xp:90,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"try\">try</span>/<span class=\"term\" data-term=\"except\">except</span>\n\nエラーが起きそうなコードを安全に実行できます。\n\n```python\ntry:\n    危険なコード\nexcept エラーの種類:\n    エラー時の処理\n```\n\nこれにより、プログラムがクラッシュせずに「エラーが起きたけど大丈夫！」と続行できます。"},
{type:"code",code:"def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return \"0では割れません\"\n\nprint(safe_divide(10, 3))\nprint(safe_divide(10, 0))",desc:"0除算エラーをキャッチ"},
{type:"tip",body:"💡 <span class=\"term\" data-term=\"try\">try/except</span>は「壊れないプログラム」を作る必須スキルです！"}
],exercise:{instruction:"[\"10\",\"abc\",\"30\"]をループし、int()変換できた数字の合計を表示。try/exceptでエラーをスキップ。",initialCode:"# 合計を求める\n",expectedOutput:"40",keywords:["try","except","print"],answer:"total = 0\nfor item in [\"10\", \"abc\", \"30\"]:\n    try:\n        total += int(item)\n    except ValueError:\n        pass\nprint(total)",hints:["total = 0 で初期化","try: total += int(item)","except ValueError: pass でスキップ"]}},

{id:"e3",title:"デバッグのコツ",xp:90,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"debug\">デバッグ</span>の基本テクニック\n\n<span class=\"term\" data-term=\"bug\">バグ</span>（プログラムの間違い）を見つけて直すことを<span class=\"term\" data-term=\"debug\">デバッグ</span>と言います。\n\n### テクニック1: print文デバッグ\n怪しい場所に <span class=\"copyable\">print(変数名)</span> を入れて、中身を確認する。最もシンプルで強力な方法。\n\n### テクニック2: エラーメッセージをよく読む\n最後の行に原因が書いてある。行番号も表示される。\n\n### テクニック3: 小さく試す\n一度にたくさん書かず、少し書いたら実行して確認。"},
{type:"code",code:"# バグのあるコード\ndef calculate_average(scores):\n    # print(f\"DEBUG: scores = {scores}\")  # デバッグ用\n    total = sum(scores)\n    count = len(scores)\n    # print(f\"DEBUG: total={total}, count={count}\")\n    return total / count\n\nresult = calculate_average([80, 90, 70])\nprint(f\"平均: {result}\")",desc:"print文デバッグの例"},
{type:"tip",body:"💡 「動かない！」と思ったら、まずエラーメッセージを読む。次にprint文で変数の中身を確認。この2ステップで9割のバグは見つかります。"}
],exercise:{instruction:"リスト [10, 20, 30, 40, 50] の平均値を計算して表示してください。",initialCode:"# 平均値を計算\n",expectedOutput:"30.0",keywords:["sum","len","print"],answer:"scores = [10, 20, 30, 40, 50]\naverage = sum(scores) / len(scores)\nprint(average)",hints:["sum() でリストの合計","len() で要素数","合計÷要素数=平均"]}}
]},

// ========== 9. エディタショートカット マスター ==========
{id:"shortcut-master",title:"エディタショートカット マスター",desc:"VS Code (Windows) の必須ショートカットで作業効率10倍",level:"s",icon:"⌨️",free:true,lessons:[
{id:"sc1",title:"保存・元に戻す・やり直し",xp:40,
content:[
{type:"text",body:"## まず覚える3つ\n\nこの3つは**すべてのアプリ**で共通です。\n\n| 操作 | ショートカット |\n|---|---|\n| **保存** | <span class=\"key\">Ctrl</span>+<span class=\"key\">S</span> |\n| **元に戻す** | <span class=\"key\">Ctrl</span>+<span class=\"key\">Z</span> |\n| **やり直し** | <span class=\"key\">Ctrl</span>+<span class=\"key\">Y</span> |\n\nマウスで「ファイル→保存」だと約3秒。<span class=\"key\">Ctrl</span>+<span class=\"key\">S</span>なら0.3秒。1日100回保存するなら、年間**約18時間**の差！"},
{type:"tip",body:"💡 コードを書いたら反射的に<span class=\"key\">Ctrl</span>+<span class=\"key\">S</span>を押す癖をつけましょう。保存忘れによるデータ消失は初心者の最大の悲劇です。"}
],exercise:{instruction:"変数 shortcut に \"Ctrl+S\" を代入し「保存: Ctrl+S」と表示してください。",initialCode:"# ショートカットを表示\n",expectedOutput:"保存: Ctrl+S",keywords:["print"],answer:"shortcut = \"Ctrl+S\"\nprint(f\"保存: {shortcut}\")",hints:["shortcut = \"Ctrl+S\"","f文字列で表示","print(f\"保存: {shortcut}\")"]}},

{id:"sc2",title:"カーソル移動と選択",xp:40,
content:[
{type:"text",body:"## 高速カーソル移動\n\n| 操作 | ショートカット |\n|---|---|\n| **行頭へ** | <span class=\"key\">Home</span> |\n| **行末へ** | <span class=\"key\">End</span> |\n| **単語単位で移動** | <span class=\"key\">Ctrl</span>+<span class=\"key\">←</span>/<span class=\"key\">→</span> |\n| **ファイル先頭** | <span class=\"key\">Ctrl</span>+<span class=\"key\">Home</span> |\n| **ファイル末尾** | <span class=\"key\">Ctrl</span>+<span class=\"key\">End</span> |\n\n### 選択の裏技\n\n上のどれも、<span class=\"key\">Shift</span>を同時に押すと**移動しながら選択**になります！\n\n例: <span class=\"key\">Shift</span>+<span class=\"key\">End</span> → カーソル位置から行末まで選択"},
],exercise:{instruction:"辞書にショートカットを格納しループで表示。{\"行頭\":\"Home\", \"行末\":\"End\", \"単語移動\":\"Ctrl+矢印\"}",initialCode:"# ショートカット辞書\n",expectedOutput:"行頭: Home\n行末: End\n単語移動: Ctrl+矢印",keywords:["for","print"],answer:"sc = {\"行頭\": \"Home\", \"行末\": \"End\", \"単語移動\": \"Ctrl+矢印\"}\nfor k, v in sc.items():\n    print(f\"{k}: {v}\")",hints:["辞書を作成","for k, v in sc.items():","print(f\"{k}: {v}\")"]}},

{id:"sc3",title:"コピー・切り取り・行操作",xp:50,
content:[
{type:"text",body:"## テキスト操作\n\n| 操作 | ショートカット |\n|---|---|\n| **コピー** | <span class=\"key\">Ctrl</span>+<span class=\"key\">C</span> |\n| **切り取り** | <span class=\"key\">Ctrl</span>+<span class=\"key\">X</span> |\n| **貼り付け** | <span class=\"key\">Ctrl</span>+<span class=\"key\">V</span> |\n| **行の複製** | <span class=\"key\">Ctrl</span>+<span class=\"key\">Shift</span>+<span class=\"key\">D</span> |\n| **行の削除** | <span class=\"key\">Ctrl</span>+<span class=\"key\">Shift</span>+<span class=\"key\">K</span> |\n| **行を上/下に移動** | <span class=\"key\">Alt</span>+<span class=\"key\">↑</span>/<span class=\"key\">↓</span> |\n\n💡 このエディタでも <span class=\"key\">Ctrl</span>+<span class=\"key\">/</span>（コメント）、<span class=\"key\">Alt</span>+<span class=\"key\">↑↓</span>（行移動）が使えます！試してみてね。"},
],exercise:{instruction:"リスト[\"Ctrl+C\",\"Ctrl+X\",\"Ctrl+V\"]を番号付きで表示。「1. Ctrl+C」のように。",initialCode:"# 番号付き表示\n",expectedOutput:"1. Ctrl+C\n2. Ctrl+X\n3. Ctrl+V",keywords:["for","enumerate","print"],answer:"keys = [\"Ctrl+C\", \"Ctrl+X\", \"Ctrl+V\"]\nfor i, k in enumerate(keys, 1):\n    print(f\"{i}. {k}\")",hints:["enumerate(list, 1) で1から番号","for i, k in enumerate(...):","print(f\"{i}. {k}\")"]}},

{id:"sc4",title:"検索・置換・マルチカーソル",xp:50,
content:[
{type:"text",body:"## 検索と置換\n\n| 操作 | ショートカット |\n|---|---|\n| **検索** | <span class=\"key\">Ctrl</span>+<span class=\"key\">F</span> |\n| **置換** | <span class=\"key\">Ctrl</span>+<span class=\"key\">H</span> |\n| **全ファイル検索** | <span class=\"key\">Ctrl</span>+<span class=\"key\">Shift</span>+<span class=\"key\">F</span> |\n\n## マルチカーソル（最強の時短技）\n\n| 操作 | ショートカット |\n|---|---|\n| **同じ単語を次に選択** | <span class=\"key\">Ctrl</span>+<span class=\"key\">D</span> |\n| **同じ単語を全選択** | <span class=\"key\">Ctrl</span>+<span class=\"key\">Shift</span>+<span class=\"key\">L</span> |\n| **カーソル追加** | <span class=\"key\">Alt</span>+クリック |\n\n<span class=\"key\">Ctrl</span>+<span class=\"key\">D</span>で変数名を一括変更するのは、最も生産性が上がるテクニックです！"},
],exercise:{instruction:"文字列\"user_name, user_age, user_email\"の\"user\"を全て\"customer\"に置換して表示。",initialCode:"# 一括置換\n",expectedOutput:"customer_name, customer_age, customer_email",keywords:["replace","print"],answer:"text = \"user_name, user_age, user_email\"\nprint(text.replace(\"user\", \"customer\"))",hints:["text = \"user_name, ...\"",".replace(\"user\", \"customer\")","print(text.replace(...))"]}},

{id:"sc5",title:"コマンドパレット・まとめ TOP10",xp:60,
content:[
{type:"text",body:"## コマンドパレット\n\n| 操作 | ショートカット |\n|---|---|\n| **コマンドパレット** | <span class=\"key\">Ctrl</span>+<span class=\"key\">Shift</span>+<span class=\"key\">P</span> |\n| **ファイルを開く** | <span class=\"key\">Ctrl</span>+<span class=\"key\">P</span> |\n| **ターミナル開閉** | <span class=\"key\">Ctrl</span>+<span class=\"key\">`</span> |\n| **コメント切替** | <span class=\"key\">Ctrl</span>+<span class=\"key\">/</span> |\n| **サイドバー** | <span class=\"key\">Ctrl</span>+<span class=\"key\">B</span> |\n\n## 🏆 TOP 10 まとめ\n1. <span class=\"key\">Ctrl</span>+<span class=\"key\">S</span> 保存\n2. <span class=\"key\">Ctrl</span>+<span class=\"key\">Z</span> 元に戻す\n3. <span class=\"key\">Ctrl</span>+<span class=\"key\">C/X/V</span> コピー/切取/貼付\n4. <span class=\"key\">Ctrl</span>+<span class=\"key\">D</span> 同じ単語選択\n5. <span class=\"key\">Ctrl</span>+<span class=\"key\">F</span> 検索\n6. <span class=\"key\">Ctrl</span>+<span class=\"key\">H</span> 置換\n7. <span class=\"key\">Ctrl</span>+<span class=\"key\">P</span> ファイルを開く\n8. <span class=\"key\">Ctrl</span>+<span class=\"key\">Shift</span>+<span class=\"key\">P</span> コマンドパレット\n9. <span class=\"key\">Ctrl</span>+<span class=\"key\">/</span> コメント切替\n10. <span class=\"key\">Alt</span>+<span class=\"key\">↑↓</span> 行移動"},
{type:"tip",body:"💡 1日1つ新しいショートカットを意識的に使い、2週間で体に染み込ませましょう。覚えたら一生の時短スキルです！"}
],exercise:{instruction:"TOP10ショートカットをリストに格納し、enumerate()で「1. Ctrl+S - 保存」形式で全表示。",initialCode:"# TOP 10\n",expectedOutput:"1. Ctrl+S - 保存\n2. Ctrl+Z - 元に戻す\n3. Ctrl+C - コピー\n4. Ctrl+X - 切り取り\n5. Ctrl+V - 貼り付け\n6. Ctrl+D - 同じ単語選択\n7. Ctrl+F - 検索\n8. Ctrl+H - 置換\n9. Ctrl+P - ファイルを開く\n10. Ctrl+/ - コメント切替",keywords:["for","enumerate","print"],answer:"top = [(\"Ctrl+S\",\"保存\"),(\"Ctrl+Z\",\"元に戻す\"),(\"Ctrl+C\",\"コピー\"),(\"Ctrl+X\",\"切り取り\"),(\"Ctrl+V\",\"貼り付け\"),(\"Ctrl+D\",\"同じ単語選択\"),(\"Ctrl+F\",\"検索\"),(\"Ctrl+H\",\"置換\"),(\"Ctrl+P\",\"ファイルを開く\"),(\"Ctrl+/\",\"コメント切替\")]\nfor i,(k,d) in enumerate(top,1):\n    print(f\"{i}. {k} - {d}\")",hints:["タプルのリストを作成","enumerate(top, 1) で番号付き","print(f\"{i}. {k} - {d}\")"]}}
]},

// ========== 10. ミニゲーム (PRO) ==========
{id:"py-game",title:"Pythonでミニゲーム作り",desc:"じゃんけん・数当て・クイズ。楽しみながら実力アップ",level:"i",icon:"🎮",free:false,lessons:[
{id:"g1",title:"じゃんけんゲーム",xp:100,
content:[
{type:"text",body:"## じゃんけんゲームを作ろう！\n\nPythonの `random` <span class=\"term\" data-term=\"module\">モジュール</span>を使って、コンピュータにランダムな手を出させます。\n\n<span class=\"copyable\">import random</span>\n<span class=\"copyable\">random.choice([\"グー\", \"チョキ\", \"パー\"])</span>\n\nこれで、リストの中からランダムに1つ選ばれます。"},
{type:"code",code:"import random\n\nhands = [\"グー\", \"チョキ\", \"パー\"]\nplayer = \"グー\"\ncomputer = random.choice(hands)\n\nprint(f\"あなた: {player}\")\nprint(f\"PC: {computer}\")\n\nif player == computer:\n    print(\"引き分け！\")\nelif (player==\"グー\" and computer==\"チョキ\") or \\\n     (player==\"チョキ\" and computer==\"パー\") or \\\n     (player==\"パー\" and computer==\"グー\"):\n    print(\"あなたの勝ち！\")\nelse:\n    print(\"あなたの負け…\")",desc:"じゃんけんゲームの全コード"}
],exercise:{instruction:"random.choice()を使って[\"赤\",\"青\",\"緑\"]からランダムに1つ選んで表示してください。",initialCode:"import random\n# ランダムに色を選ぶ\n",expectedOutput:"",keywords:["random.choice","print"],answer:"import random\ncolor = random.choice([\"赤\", \"青\", \"緑\"])\nprint(color)",hints:["import random","random.choice([...])","print(color)"]}},

{id:"g2",title:"数当てゲーム",xp:110,
content:[
{type:"text",body:"## 数当てゲーム\n\nコンピュータが1~100の数字を選び、プレイヤーが当てるゲーム。\n\n<span class=\"term\" data-term=\"while\">while</span>ループで「当たるまで繰り返す」を実装します。"},
{type:"code",code:"import random\nanswer = random.randint(1, 10)\n# 簡易版（ループなし）\nguess = 5\nif guess == answer:\n    print(\"正解！\")\nelif guess < answer:\n    print(\"もっと大きい！\")\nelse:\n    print(\"もっと小さい！\")\nprint(f\"答えは{answer}でした\")",desc:"数当てゲームの基本ロジック"}
],exercise:{instruction:"random.randint(1,10)で数字を生成し「答えは○です」と表示してください。",initialCode:"import random\n# 数を生成して表示\n",expectedOutput:"",keywords:["random.randint","print"],answer:"import random\nnum = random.randint(1, 10)\nprint(f\"答えは{num}です\")",hints:["random.randint(1, 10)","変数に代入","f文字列で表示"]}},

{id:"g3",title:"クイズアプリ",xp:120,
content:[
{type:"text",body:"## クイズアプリを作ろう\n\n<span class=\"term\" data-term=\"list\">リスト</span>と<span class=\"term\" data-term=\"dict\">辞書</span>を使って、問題データを管理します。\n\nfor文でループしてスコアを計算します。"},
{type:"code",code:"quizzes = [\n    {\"q\": \"Pythonの作者は？\", \"a\": \"グイド\"},\n    {\"q\": \"print()は何をする？\", \"a\": \"表示\"},\n]\n\nscore = 0\nfor quiz in quizzes:\n    print(quiz[\"q\"])\n    # answer = input()  # ブラウザでは使えないので省略\n    answer = quiz[\"a\"]  # 仮の回答\n    if answer == quiz[\"a\"]:\n        score += 1\nprint(f\"スコア: {score}/{len(quizzes)}\")",desc:"辞書リストでクイズデータ管理"}
],exercise:{instruction:"3つの問題の辞書リストを作り、スコア(正解数)を「3問中3問正解！」と表示してください。",initialCode:"# クイズアプリ\n",expectedOutput:"3問中3問正解！",keywords:["for","print"],answer:"quizzes = [\n    {\"q\": \"1+1=\", \"a\": 2},\n    {\"q\": \"2*3=\", \"a\": 6},\n    {\"q\": \"10//3=\", \"a\": 3}\n]\nscore = 0\nfor q in quizzes:\n    score += 1\nprint(f\"{len(quizzes)}問中{score}問正解！\")",hints:["辞書のリストを作成","forでループしてscore加算","f文字列で結果表示"]}}
]},

// ========== 11. Webスクレイピング (PRO) ==========
{id:"py-scraping",title:"Webスクレイピング入門",desc:"Webからデータを自動取得する基礎を学ぼう",level:"a",icon:"🌐",free:false,lessons:[
{id:"w1",title:"HTMLの基本を知ろう",xp:100,
content:[
{type:"text",body:"## HTMLとは？\n\nWebページは**HTML**という言語で書かれています。\n\n```\n<h1>タイトル</h1>\n<p>本文です</p>\n<a href=\"url\">リンク</a>\n```\n\nタグ（`<>`で囲まれた部分）がWebページの構造を作っています。スクレイピングとは、このHTMLからデータを取り出す技術です。"},
{type:"code",code:"# HTMLをPythonの文字列として扱う例\nhtml = '<h1>PyMasters</h1><p>Python学習サイト</p>'\n\n# 簡易的なデータ抽出\ntitle_start = html.find('<h1>') + 4\ntitle_end = html.find('</h1>')\ntitle = html[title_start:title_end]\nprint(f\"タイトル: {title}\")",desc:"文字列操作でHTMLからデータを取り出す概念"}
],exercise:{instruction:"html = '<title>PyMasters</title>' から <title> と </title> の間の文字列を取り出して表示してください。",initialCode:"html = '<title>PyMasters</title>'\n# タイトルを取り出す\n",expectedOutput:"PyMasters",keywords:["find","print"],answer:"html = '<title>PyMasters</title>'\nstart = html.find('<title>') + 7\nend = html.find('</title>')\nprint(html[start:end])",hints:["find() で位置を探す","<title> は7文字","スライスで切り出す"]}},

{id:"w2",title:"データ取得の仕組み",xp:110,
content:[
{type:"text",body:"## requestsライブラリ\n\n実際のスクレイピングでは `requests` <span class=\"term\" data-term=\"library\">ライブラリ</span>でWebページを取得します。\n\n```python\nimport requests\nresponse = requests.get(\"https://example.com\")\nprint(response.text)\n```\n\n※ このアプリのブラウザ環境では外部通信はできませんが、概念を学びましょう。"},
{type:"code",code:"# requestsの使い方（概念）\n# import requests\n# response = requests.get(url)\n# response.status_code  # 200=成功\n# response.text         # HTML全体\n\n# 代わりにシミュレーション\nstatus_code = 200\nif status_code == 200:\n    print(\"ページ取得成功！\")\nelse:\n    print(\"エラー発生\")",desc:"HTTPステータスコードの概念"}
],exercise:{instruction:"変数 status に 404 を代入し、200なら「成功」、404なら「ページが見つかりません」、それ以外は「エラー」と表示。",initialCode:"# ステータスコード判定\n",expectedOutput:"ページが見つかりません",keywords:["if","elif","print"],answer:"status = 404\nif status == 200:\n    print(\"成功\")\nelif status == 404:\n    print(\"ページが見つかりません\")\nelse:\n    print(\"エラー\")",hints:["if status == 200:","elif status == 404:","else: でその他"]}},

{id:"w3",title:"データを抽出しよう",xp:120,
content:[
{type:"text",body:"## BeautifulSoupの概念\n\nHTMLを解析するには `BeautifulSoup` <span class=\"term\" data-term=\"library\">ライブラリ</span>を使います。文字列操作より遥かに簡単にデータを取り出せます。\n\nここでは文字列操作でその基本概念を体験しましょう。"},
{type:"code",code:"# HTMLから複数のデータを抽出\nhtml_items = [\n    '<li class=\"item\">りんご 100円</li>',\n    '<li class=\"item\">バナナ 200円</li>',\n    '<li class=\"item\">みかん 150円</li>',\n]\n\nfor item in html_items:\n    start = item.find('>') + 1\n    end = item.find('</li>')\n    text = item[start:end]\n    print(text)",desc:"複数アイテムからデータ抽出"}
],exercise:{instruction:"HTMLリストからテキストを抽出して表示してください。\nhtml_items = ['<p>Hello</p>', '<p>World</p>', '<p>Python</p>']",initialCode:"html_items = ['<p>Hello</p>', '<p>World</p>', '<p>Python</p>']\n# テキストを抽出\n",expectedOutput:"Hello\nWorld\nPython",keywords:["for","print"],answer:"html_items = ['<p>Hello</p>', '<p>World</p>', '<p>Python</p>']\nfor item in html_items:\n    start = item.find('>') + 1\n    end = item.find('</p>')\n    print(item[start:end])",hints:["for item in html_items:","find('>') + 1 で開始位置","find('</p>') で終了位置"]}}
]},

// ========== 12. Python自動化 (PRO) ==========
{id:"py-auto",title:"Python自動化入門",desc:"ファイル操作・テキスト処理・レポート生成を自動化",level:"a",icon:"🤖",free:false,lessons:[
{id:"a1",title:"テキスト処理の基本",xp:100,
content:[
{type:"text",body:"## テキスト処理の自動化\n\nPythonはテキスト処理が得意です。CSVデータの整形、ログの解析、テキストの変換などが簡単にできます。\n\n### 便利な文字列メソッド\n- <span class=\"copyable\">.split(区切り文字)</span> 文字列を分割→リスト\n- <span class=\"copyable\">\",\".join(リスト)</span> リストを結合→文字列\n- <span class=\"copyable\">.strip()</span> 前後の空白を削除\n- <span class=\"copyable\">.replace(旧, 新)</span> 置換"},
{type:"code",code:"# CSVデータの処理\ncsv_line = \"太郎,25,東京\"\nparts = csv_line.split(\",\")\nprint(f\"名前: {parts[0]}\")\nprint(f\"年齢: {parts[1]}\")\nprint(f\"都市: {parts[2]}\")\n\n# リストを結合\nfruits = [\"りんご\", \"バナナ\", \"みかん\"]\nresult = \" / \".join(fruits)\nprint(result)",desc:"split()で分割、join()で結合"}
],exercise:{instruction:"\"Python-Java-JavaScript\" を \"-\" で分割し、各言語を1行ずつ表示してください。",initialCode:"# 文字列を分割して表示\n",expectedOutput:"Python\nJava\nJavaScript",keywords:["split","for","print"],answer:"text = \"Python-Java-JavaScript\"\nfor lang in text.split(\"-\"):\n    print(lang)",hints:["split(\"-\") で分割","for lang in ...:","print(lang)"]}},

{id:"a2",title:"データの集計・変換",xp:110,
content:[
{type:"text",body:"## データの集計\n\nリストや辞書を使って、データを集計・変換する方法を学びましょう。\n\n実務では、売上データの合計、平均、最大値/最小値の計算が頻出です。"},
{type:"code",code:"sales = [1200, 3400, 2800, 5100, 1900]\n\nprint(f\"合計: {sum(sales)}円\")\nprint(f\"平均: {sum(sales)//len(sales)}円\")\nprint(f\"最高: {max(sales)}円\")\nprint(f\"最低: {min(sales)}円\")\nprint(f\"件数: {len(sales)}件\")",desc:"組み込み関数で売上集計"}
],exercise:{instruction:"scores = [85, 92, 78, 95, 88] の合計、平均(小数)、最高点を表示してください。",initialCode:"scores = [85, 92, 78, 95, 88]\n# 集計して表示\n",expectedOutput:"合計: 438\n平均: 87.6\n最高: 95",keywords:["sum","max","print"],answer:"scores = [85, 92, 78, 95, 88]\nprint(f\"合計: {sum(scores)}\")\nprint(f\"平均: {sum(scores)/len(scores)}\")\nprint(f\"最高: {max(scores)}\")",hints:["sum() で合計","sum()/len() で平均","max() で最高点"]}},

{id:"a3",title:"レポート自動生成",xp:120,
content:[
{type:"text",body:"## レポート自動生成\n\nデータを集計し、見やすいレポートを自動生成する実践例です。\n\n複数の<span class=\"term\" data-term=\"function\">関数</span>を組み合わせて、実用的なプログラムを作ります。"},
{type:"code",code:"def generate_report(title, data):\n    print(f\"=== {title} ===\")\n    print(f\"データ数: {len(data)}\")\n    print(f\"合計: {sum(data)}\")\n    print(f\"平均: {sum(data)/len(data):.1f}\")\n    print(f\"最大: {max(data)}\")\n    print(f\"最小: {min(data)}\")\n    print(\"=\" * 20)\n\ngenerate_report(\"月間売上\", [12000, 34000, 28000, 51000])",desc:"関数でレポート生成を自動化"}
],exercise:{instruction:"generate_report(title, numbers) 関数を作り、「=== title ===」「合計: ○」「平均: ○」を表示してください。generate_report(\"テスト結果\", [80,90,70]) を呼び出し。",initialCode:"# レポート関数\n",expectedOutput:"=== テスト結果 ===\n合計: 240\n平均: 80.0",keywords:["def","print","sum"],answer:"def generate_report(title, numbers):\n    print(f\"=== {title} ===\")\n    print(f\"合計: {sum(numbers)}\")\n    print(f\"平均: {sum(numbers)/len(numbers)}\")\ngenerate_report(\"テスト結果\", [80, 90, 70])",hints:["def generate_report(title, numbers):","sum() と len() で計算","f文字列で整形"]}}
]},

// ========== NEW: じゃんけんゲームを作ろう ==========
{id:"py-janken",title:"じゃんけんゲームを作ろう",desc:"randomモジュールとif文を組み合わせて、じゃんけんゲームを完成させよう！",level:"b",icon:"🎮",free:true,nextCourse:"py-calc",lessons:[
{id:"jk1",title:"randomモジュールの使い方",xp:60,
content:[
{type:"text",body:"## ランダムに選ぶ - randomモジュール\n\nじゃんけんゲームを作るには、コンピュータに「ランダムに手を選ばせる」必要がありますね。\n\nPythonには**random**モジュールという便利な道具箱があります。使うには最初に`import random`と書きます。\n\n### random.choice() の使い方\n\n<span class=\"term\" data-term=\"import\">import</span>は「道具箱を開く」という意味です。\n\n`random.choice(リスト)` を使うと、リストの中からランダムに1つ選んでくれます。"},
{type:"code",code:"import random\n\nhands = [\"グー\", \"チョキ\", \"パー\"]\ncpu_hand = random.choice(hands)\nprint(f\"CPUの手: {cpu_hand}\")",desc:"random.choice()でリストからランダムに選択"},
{type:"tip",body:"💡 `random.choice()` は毎回ランダムな結果を返します。実行するたびに変わるので、何度か試してみましょう！"}
],exercise:{instruction:"import random を使い、hands = [\"グー\", \"チョキ\", \"パー\"] からランダムに1つ選んで「CPUの手: ○○」と表示してください。\n※採点のため random.seed(0) を最初に書いてください。",initialCode:"import random\nrandom.seed(0)\n# ここにコードを書いてね\n",expectedOutput:"CPUの手: パー",keywords:["random.choice","print"],answer:"import random\nrandom.seed(0)\nhands = [\"グー\", \"チョキ\", \"パー\"]\ncpu_hand = random.choice(hands)\nprint(f\"CPUの手: {cpu_hand}\")",hints:["hands = [\"グー\", \"チョキ\", \"パー\"] でリスト作成","random.choice(hands) でランダム選択","f文字列で結果を表示"]}},

{id:"jk2",title:"勝敗判定ロジック",xp:70,
content:[
{type:"text",body:"## じゃんけんの勝敗を判定しよう\n\nプレイヤーの手とCPUの手を比較して、勝ち・負け・あいこを判定します。\n\nif/elif/elseを使って条件分岐を組み立てましょう。\n\n### 勝敗のルール\n\n- グー → チョキに勝つ\n- チョキ → パーに勝つ\n- パー → グーに勝つ\n- 同じ手 → あいこ"},
{type:"code",code:"player = \"グー\"\ncpu = \"チョキ\"\n\nif player == cpu:\n    print(\"あいこ！\")\nelif (player == \"グー\" and cpu == \"チョキ\") or \\\n     (player == \"チョキ\" and cpu == \"パー\") or \\\n     (player == \"パー\" and cpu == \"グー\"):\n    print(\"あなたの勝ち！\")\nelse:\n    print(\"あなたの負け…\")",desc:"if/elif/elseで勝敗判定"},
{type:"tip",body:"💡 `\\`（バックスラッシュ）を行末に書くと、次の行に続けて書けます。長い条件式を見やすくするテクニックです。"}
],exercise:{instruction:"player = \"パー\"、cpu = \"グー\" として、勝敗を判定して結果を表示してください。「あなたの勝ち！」と表示されれば正解です。",initialCode:"player = \"パー\"\ncpu = \"グー\"\n# 勝敗判定を書いてね\n",expectedOutput:"あなたの勝ち！",keywords:["if","print"],answer:"player = \"パー\"\ncpu = \"グー\"\nif player == cpu:\n    print(\"あいこ！\")\nelif (player == \"グー\" and cpu == \"チョキ\") or (player == \"チョキ\" and cpu == \"パー\") or (player == \"パー\" and cpu == \"グー\"):\n    print(\"あなたの勝ち！\")\nelse:\n    print(\"あなたの負け…\")",hints:["まず player == cpu であいこチェック","勝つパターンを or でつなぐ","else で負けを処理"]}},

{id:"jk3",title:"勝敗判定を関数にまとめる",xp:80,
content:[
{type:"text",body:"## 関数にまとめよう\n\n勝敗判定のコードを<span class=\"term\" data-term=\"function\">関数</span>にまとめると、何度でも呼び出せて便利です。\n\n`judge(player, cpu)` という関数を作り、結果の文字列を返すようにしましょう。\n\n### 関数化のメリット\n\n- コードが整理される\n- 何度でも使い回せる\n- テストしやすい"},
{type:"code",code:"def judge(player, cpu):\n    if player == cpu:\n        return \"あいこ\"\n    elif (player == \"グー\" and cpu == \"チョキ\") or \\\n         (player == \"チョキ\" and cpu == \"パー\") or \\\n         (player == \"パー\" and cpu == \"グー\"):\n        return \"勝ち\"\n    else:\n        return \"負け\"\n\nresult = judge(\"グー\", \"チョキ\")\nprint(result)",desc:"関数にすると使い回しが簡単"},
{type:"tip",body:"💡 `return` で値を返す関数は、結果を変数に入れて後から使えます。printと違って「結果を持ち出せる」のがポイントです。"}
],exercise:{instruction:"judge(player, cpu) 関数を作り、judge(\"チョキ\", \"パー\") の結果を表示してください。勝ちなら「勝ち」と表示。",initialCode:"# judge関数を定義しよう\n",expectedOutput:"勝ち",keywords:["def","judge","return","print"],answer:"def judge(player, cpu):\n    if player == cpu:\n        return \"あいこ\"\n    elif (player == \"グー\" and cpu == \"チョキ\") or (player == \"チョキ\" and cpu == \"パー\") or (player == \"パー\" and cpu == \"グー\"):\n        return \"勝ち\"\n    else:\n        return \"負け\"\nprint(judge(\"チョキ\", \"パー\"))",hints:["def judge(player, cpu): で関数定義","return で結果を返す","print(judge(\"チョキ\", \"パー\"))"]}},

{id:"jk4",title:"3回勝負を実装しよう",xp:90,
content:[
{type:"text",body:"## 3回勝負にしよう！\n\nfor文を使って3回じゃんけんをし、勝敗をカウントしましょう。\n\nこれまで学んだ全てを組み合わせます:\n- randomモジュール\n- if/elif/else\n- for文\n- 関数\n- 変数（カウンター）"},
{type:"code",code:"import random\n\ndef judge(p, c):\n    if p == c: return \"あいこ\"\n    elif (p==\"グー\" and c==\"チョキ\") or (p==\"チョキ\" and c==\"パー\") or (p==\"パー\" and c==\"グー\"): return \"勝ち\"\n    else: return \"負け\"\n\nhands = [\"グー\", \"チョキ\", \"パー\"]\nwins = 0\nfor i in range(3):\n    cpu = random.choice(hands)\n    player = random.choice(hands)  # 本来はinput()で入力\n    result = judge(player, cpu)\n    print(f\"{i+1}回目: {player} vs {cpu} → {result}\")\n    if result == \"勝ち\": wins += 1\nprint(f\"勝利数: {wins}/3\")",desc:"3回勝負の完成形"},
{type:"tip",body:"💡 実際のゲームでは `input()` でユーザー入力を受け取りますが、このエディタではinput()が使えないため、random.choice()で代用しています。"}
],exercise:{instruction:"3回じゃんけんをし、固定の手（[\"グー\",\"パー\",\"チョキ\"]）でCPUの手（random.seed(1)使用）と勝負して、勝利数を表示してください。",initialCode:"import random\nrandom.seed(1)\n\ndef judge(p, c):\n    if p == c: return \"あいこ\"\n    elif (p==\"グー\" and c==\"チョキ\") or (p==\"チョキ\" and c==\"パー\") or (p==\"パー\" and c==\"グー\"): return \"勝ち\"\n    else: return \"負け\"\n\nhands = [\"グー\", \"チョキ\", \"パー\"]\nmy_hands = [\"グー\", \"パー\", \"チョキ\"]\nwins = 0\n# 3回ループで勝負して勝利数を表示\n",expectedOutput:"1回目: グー vs チョキ → 勝ち\n2回目: パー vs パー → あいこ\n3回目: チョキ vs グー → 負け\n勝利数: 1/3",keywords:["for","judge","print"],answer:"import random\nrandom.seed(1)\n\ndef judge(p, c):\n    if p == c: return \"あいこ\"\n    elif (p==\"グー\" and c==\"チョキ\") or (p==\"チョキ\" and c==\"パー\") or (p==\"パー\" and c==\"グー\"): return \"勝ち\"\n    else: return \"負け\"\n\nhands = [\"グー\", \"チョキ\", \"パー\"]\nmy_hands = [\"グー\", \"パー\", \"チョキ\"]\nwins = 0\nfor i in range(3):\n    cpu = random.choice(hands)\n    player = my_hands[i]\n    result = judge(player, cpu)\n    print(f\"{i+1}回目: {player} vs {cpu} → {result}\")\n    if result == \"勝ち\": wins += 1\nprint(f\"勝利数: {wins}/3\")",hints:["for i in range(3): で3回ループ","my_hands[i] でプレイヤーの手を取得","wins += 1 で勝利数カウント"]}}
]},

// ========== NEW: Pythonで電卓を作ろう ==========
{id:"py-calc",title:"Pythonで電卓を作ろう",desc:"四則演算の関数作成からエラーハンドリングまで、実用的な電卓を完成させよう",level:"b",icon:"🔢",free:true,nextCourse:"py-data-auto",lessons:[
{id:"ca1",title:"四則演算の関数を作る",xp:60,
content:[
{type:"text",body:"## 電卓の基本 - 四則演算関数\n\n電卓の基本は足し算・引き算・掛け算・割り算です。\n\nそれぞれを<span class=\"term\" data-term=\"function\">関数</span>にしましょう。\n\n### なぜ関数にする？\n\n`10 + 5` と直接書いてもいいですが、関数にすると:\n- 後から機能を追加しやすい（エラーチェック等）\n- コードが整理される\n- テストしやすい"},
{type:"code",code:"def add(a, b):\n    return a + b\n\ndef sub(a, b):\n    return a - b\n\ndef mul(a, b):\n    return a * b\n\ndef div(a, b):\n    return a / b\n\nprint(add(10, 5))\nprint(sub(10, 5))\nprint(mul(10, 5))\nprint(div(10, 5))",desc:"4つの計算関数"},
{type:"tip",body:"💡 関数名は短くてわかりやすいものにしましょう。add, sub, mul, div は「足す、引く、掛ける、割る」の英語略です。"}
],exercise:{instruction:"add(a,b)、sub(a,b)、mul(a,b)、div(a,b) の4つの関数を定義し、それぞれ (10, 3) で呼び出して結果を表示してください。",initialCode:"# 4つの計算関数を作ろう\n",expectedOutput:"13\n7\n30\n3.3333333333333335",keywords:["def","return","print"],answer:"def add(a, b):\n    return a + b\ndef sub(a, b):\n    return a - b\ndef mul(a, b):\n    return a * b\ndef div(a, b):\n    return a / b\nprint(add(10, 3))\nprint(sub(10, 3))\nprint(mul(10, 3))\nprint(div(10, 3))",hints:["def add(a, b): return a + b","4つの関数を定義","print(add(10, 3)) で呼び出し"]}},

{id:"ca2",title:"計算を選択して実行する",xp:70,
content:[
{type:"text",body:"## 演算の選択と実行\n\n電卓アプリでは、ユーザーが「どの計算をしたいか」を選択します。\n\n`calculate(op, a, b)` という関数を作り、演算子（`+`, `-`, `*`, `/`）に応じて正しい計算を実行しましょう。\n\n### if/elifを使った分岐\n\n演算子の文字列を判定して、対応する計算を行います。"},
{type:"code",code:"def calculate(op, a, b):\n    if op == \"+\":\n        return a + b\n    elif op == \"-\":\n        return a - b\n    elif op == \"*\":\n        return a * b\n    elif op == \"/\":\n        return a / b\n    else:\n        return \"不明な演算子です\"\n\nprint(calculate(\"+\", 15, 3))\nprint(calculate(\"*\", 15, 3))",desc:"演算子で分岐する計算関数"},
{type:"tip",body:"💡 `else` で「想定外の入力」に対応するのは、丈夫なプログラムを作るコツです。"}
],exercise:{instruction:"calculate(op, a, b) 関数を作り、以下の4つの計算結果を表示してください:\n(+, 20, 8), (-, 20, 8), (*, 20, 8), (/, 20, 8)",initialCode:"# calculate関数を作ろう\n",expectedOutput:"28\n12\n160\n2.5",keywords:["def","calculate","return","print"],answer:"def calculate(op, a, b):\n    if op == \"+\":\n        return a + b\n    elif op == \"-\":\n        return a - b\n    elif op == \"*\":\n        return a * b\n    elif op == \"/\":\n        return a / b\nprint(calculate(\"+\", 20, 8))\nprint(calculate(\"-\", 20, 8))\nprint(calculate(\"*\", 20, 8))\nprint(calculate(\"/\", 20, 8))",hints:["if op == \"+\": で演算子チェック","elif で各演算子を分岐","4回 print(calculate(...)) で呼び出し"]}},

{id:"ca3",title:"エラーハンドリング",xp:80,
content:[
{type:"text",body:"## エラーに備えよう\n\n電卓で一番多いエラーは**ゼロ除算**です。\n\n`10 / 0` はPythonでエラーになります。try/exceptで安全に処理しましょう。\n\n### try/except の使い方\n\n```python\ntry:\n    # エラーが起きるかもしれない処理\nexcept エラーの種類:\n    # エラー時の処理\n```"},
{type:"code",code:"def safe_div(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return \"エラー: 0で割ることはできません\"\n\nprint(safe_div(10, 3))\nprint(safe_div(10, 0))",desc:"try/exceptでゼロ除算を安全に処理"},
{type:"tip",body:"💡 `try/except` はプロのプログラマーが必ず使うテクニックです。「落ちないプログラム」を作る第一歩！"}
],exercise:{instruction:"safe_calculate(op, a, b) 関数を作ってください。ゼロ除算時は「エラー: 0で割れません」と返す。以下のテストで確認:\nsafe_calculate(\"/\", 10, 0) と safe_calculate(\"/\", 10, 2)",initialCode:"# 安全な計算関数\n",expectedOutput:"エラー: 0で割れません\n5.0",keywords:["def","try","except","return"],answer:"def safe_calculate(op, a, b):\n    try:\n        if op == \"+\": return a + b\n        elif op == \"-\": return a - b\n        elif op == \"*\": return a * b\n        elif op == \"/\": return a / b\n    except ZeroDivisionError:\n        return \"エラー: 0で割れません\"\nprint(safe_calculate(\"/\", 10, 0))\nprint(safe_calculate(\"/\", 10, 2))",hints:["try: の中に計算処理を書く","except ZeroDivisionError: でキャッチ","エラー時は文字列を return"]}},

{id:"ca4",title:"計算履歴をリストで管理",xp:90,
content:[
{type:"text",body:"## 計算履歴を保存しよう\n\n電卓に計算履歴機能をつけましょう！\n\nリストを使って、計算のたびに結果を追加していきます。\n\n### リストの append()\n\n`history = []` で空のリストを作り、`history.append(値)` で追加します。"},
{type:"code",code:"history = []\n\ndef calc_with_history(op, a, b):\n    if op == \"+\": result = a + b\n    elif op == \"-\": result = a - b\n    elif op == \"*\": result = a * b\n    elif op == \"/\": result = a / b\n    record = f\"{a} {op} {b} = {result}\"\n    history.append(record)\n    return result\n\ncalc_with_history(\"+\", 10, 5)\ncalc_with_history(\"*\", 3, 7)\ncalc_with_history(\"-\", 100, 42)\n\nprint(\"=== 計算履歴 ===\")\nfor h in history:\n    print(h)",desc:"リストで計算履歴を管理"},
{type:"tip",body:"💡 `append()` はリストの末尾に要素を追加するメソッドです。計算のたびに履歴が増えていきます！"}
],exercise:{instruction:"calc_with_history(op, a, b) を作り、3つの計算 (+,5,3), (*,4,6), (-,10,2) を実行後、「=== 計算履歴 ===」の後に履歴を表示してください。",initialCode:"history = []\n# calc_with_history関数を作ろう\n",expectedOutput:"=== 計算履歴 ===\n5 + 3 = 8\n4 * 6 = 24\n10 - 2 = 8",keywords:["def","append","history","print"],answer:"history = []\ndef calc_with_history(op, a, b):\n    if op == \"+\": result = a + b\n    elif op == \"-\": result = a - b\n    elif op == \"*\": result = a * b\n    elif op == \"/\": result = a / b\n    history.append(f\"{a} {op} {b} = {result}\")\n    return result\ncalc_with_history(\"+\", 5, 3)\ncalc_with_history(\"*\", 4, 6)\ncalc_with_history(\"-\", 10, 2)\nprint(\"=== 計算履歴 ===\")\nfor h in history:\n    print(h)",hints:["history.append(f\"{a} {op} {b} = {result}\")","3回 calc_with_history() を呼ぶ","for h in history: print(h)"]}}
]},

// ========== NEW: データ自動集計 ==========
{id:"py-data-auto",title:"データ自動集計",desc:"CSVデータの解析・集計・カテゴリ別分析。実務で使えるデータ処理を学ぼう",level:"i",icon:"📊",free:true,lessons:[
{id:"da1",title:"CSVデータをリストに変換",xp:80,
content:[
{type:"text",body:"## データの読み込み\n\n実務では、CSVファイル（カンマ区切りテキスト）からデータを読むことが多いです。\n\nここでは文字列としてCSVデータを扱い、リストに変換する方法を学びます。\n\n### split() で分割\n\n`\"a,b,c\".split(\",\")` → `[\"a\", \"b\", \"c\"]`\n\n行ごとに分割し、さらにカンマで分割すれば、2次元リスト（表）になります。"},
{type:"code",code:"csv_data = \"名前,数学,英語,理科\\n太郎,85,72,90\\n花子,92,88,78\\n次郎,68,95,82\"\n\nrows = csv_data.split(\"\\n\")\nheader = rows[0].split(\",\")\nprint(f\"列名: {header}\")\n\nfor row in rows[1:]:\n    cols = row.split(\",\")\n    print(f\"{cols[0]}: 数学{cols[1]}点\")",desc:"文字列のCSVデータをsplit()で解析"},
{type:"tip",body:"💡 `rows[1:]` は「2番目以降の全要素」を取得するスライスです。ヘッダ行をスキップするのによく使います！"}
],exercise:{instruction:"csv_data = \"品名,個数,単価\\nりんご,5,120\\nバナナ,8,80\\nみかん,12,60\" を解析し、各行を「○○: △個」の形式で表示してください。",initialCode:"csv_data = \"品名,個数,単価\\nりんご,5,120\\nバナナ,8,80\\nみかん,12,60\"\n# CSVデータを解析しよう\n",expectedOutput:"りんご: 5個\nバナナ: 8個\nみかん: 12個",keywords:["split","for","print"],answer:"csv_data = \"品名,個数,単価\\nりんご,5,120\\nバナナ,8,80\\nみかん,12,60\"\nrows = csv_data.split(\"\\n\")\nfor row in rows[1:]:\n    cols = row.split(\",\")\n    print(f\"{cols[0]}: {cols[1]}個\")",hints:["csv_data.split(\"\\n\") で行分割","rows[1:] でヘッダをスキップ","cols = row.split(\",\") で列分割"]}},

{id:"da2",title:"合計・平均・最大・最小",xp:90,
content:[
{type:"text",body:"## データの集計関数\n\n数値データを集計する関数を作りましょう。\n\nPythonの組み込み関数が便利です:\n- `sum(list)` - 合計\n- `len(list)` - 要素数\n- `max(list)` - 最大値\n- `min(list)` - 最小値\n\n平均は `sum(list) / len(list)` で計算します。"},
{type:"code",code:"def summarize(name, data):\n    print(f\"--- {name} ---\")\n    print(f\"合計: {sum(data)}\")\n    print(f\"平均: {sum(data)/len(data):.1f}\")\n    print(f\"最大: {max(data)}\")\n    print(f\"最小: {min(data)}\")\n\nscores = [85, 92, 68, 78, 95]\nsummarize(\"テスト結果\", scores)",desc:"組み込み関数で統計値を計算"},
{type:"tip",body:"💡 `:.1f` は小数点以下1桁に丸めるフォーマットです。`.2f` なら2桁になります。"}
],exercise:{instruction:"summarize(name, data) 関数を作り、sales = [12000, 34000, 28000, 51000, 19000] に対して「--- 月間売上 ---」「合計: ○」「平均: ○」「最大: ○」「最小: ○」を表示。",initialCode:"# 集計関数を作ろう\nsales = [12000, 34000, 28000, 51000, 19000]\n",expectedOutput:"--- 月間売上 ---\n合計: 144000\n平均: 28800.0\n最大: 51000\n最小: 12000",keywords:["def","sum","max","min","print"],answer:"def summarize(name, data):\n    print(f\"--- {name} ---\")\n    print(f\"合計: {sum(data)}\")\n    print(f\"平均: {sum(data)/len(data)}\")\n    print(f\"最大: {max(data)}\")\n    print(f\"最小: {min(data)}\")\nsales = [12000, 34000, 28000, 51000, 19000]\nsummarize(\"月間売上\", sales)",hints:["def summarize(name, data):","sum(), len(), max(), min() を使う","f文字列でフォーマット"]}},

{id:"da3",title:"カテゴリ別に集計する",xp:100,
content:[
{type:"text",body:"## 辞書を使ったカテゴリ別集計\n\nデータをカテゴリ（グループ）ごとに分けて集計するには、<span class=\"term\" data-term=\"dict\">辞書</span>が便利です。\n\n### パターン: カテゴリ別にリストを作る\n\n```python\ncategories = {}\nfor item in data:\n    cat = item[\"category\"]\n    if cat not in categories:\n        categories[cat] = []\n    categories[cat].append(item[\"value\"])\n```\n\nこれで各カテゴリに値のリストが集まります。"},
{type:"code",code:"data = [\n    (\"食品\", 500), (\"日用品\", 300),\n    (\"食品\", 800), (\"衣類\", 2000),\n    (\"日用品\", 150), (\"食品\", 1200)\n]\n\ncategories = {}\nfor cat, val in data:\n    if cat not in categories:\n        categories[cat] = []\n    categories[cat].append(val)\n\nfor cat, vals in categories.items():\n    print(f\"{cat}: 合計{sum(vals)}円 ({len(vals)}件)\")",desc:"タプルリストを辞書でカテゴリ集計"},
{type:"tip",body:"💡 `for cat, val in data:` はタプルのアンパック（分解代入）です。(\"食品\", 500) が cat=\"食品\", val=500 に分かれます。"}
],exercise:{instruction:"sales = [(\"A店\",100),(\"B店\",200),(\"A店\",150),(\"B店\",300),(\"A店\",250)] を店舗別に集計し、各店舗の合計を表示してください。",initialCode:"sales = [(\"A店\",100),(\"B店\",200),(\"A店\",150),(\"B店\",300),(\"A店\",250)]\n# 店舗別に集計しよう\n",expectedOutput:"A店: 合計500円\nB店: 合計500円",keywords:["for","if","print","sum"],answer:"sales = [(\"A店\",100),(\"B店\",200),(\"A店\",150),(\"B店\",300),(\"A店\",250)]\nshops = {}\nfor shop, val in sales:\n    if shop not in shops:\n        shops[shop] = []\n    shops[shop].append(val)\nfor shop, vals in shops.items():\n    print(f\"{shop}: 合計{sum(vals)}円\")",hints:["辞書 shops = {} で店舗ごとにリスト管理","if shop not in shops: で初期化","shops.items() でループして合計表示"]}},

{id:"da4",title:"結果をフォーマットして表示",xp:100,
content:[
{type:"text",body:"## f文字列で表組み風出力\n\n集計結果を見やすく整形して表示しましょう。\n\nf文字列の**幅指定**を使うと、テキストを揃えて表示できます。\n\n### 幅指定の書き方\n\n- `{name:<10}` : 左寄せ、幅10文字\n- `{value:>8}` : 右寄せ、幅8文字\n- `{price:>8,}` : 右寄せ、3桁区切り\n- `{rate:>6.1f}` : 右寄せ、小数1桁"},
{type:"code",code:"data = {\"りんご\": 1500, \"バナナ\": 800, \"みかん\": 2400, \"ぶどう\": 3200}\ntotal = sum(data.values())\n\nprint(f\"{'品名':<8}{'売上':>8}{'構成比':>8}\")\nprint(\"-\" * 24)\nfor name, val in data.items():\n    ratio = val / total * 100\n    print(f\"{name:<8}{val:>8,}{ratio:>7.1f}%\")\nprint(\"-\" * 24)\nprint(f\"{'合計':<8}{total:>8,}\")",desc:"f文字列で表組み風レポート"},
{type:"tip",body:"💡 `{val:>8,}` の `,` は3桁区切りのカンマです。大きな数字が読みやすくなります！"}
],exercise:{instruction:"items = {\"商品A\": 4500, \"商品B\": 3200, \"商品C\": 7800} の売上レポートを作成。ヘッダ「品名      売上」、区切り線、各商品、区切り線、合計を表示してください。",initialCode:"items = {\"商品A\": 4500, \"商品B\": 3200, \"商品C\": 7800}\n# 表組み風レポートを作ろう\n",expectedOutput:"品名      売上\n----------\n商品A     4500\n商品B     3200\n商品C     7800\n----------\n合計     15500",keywords:["for","print","sum"],answer:"items = {\"商品A\": 4500, \"商品B\": 3200, \"商品C\": 7800}\nprint(f\"{'品名':<6}{'売上':>8}\")\nprint(\"-\" * 10)\nfor name, val in items.items():\n    print(f\"{name:<6}{val:>8}\")\nprint(\"-\" * 10)\nprint(f\"{'合計':<6}{sum(items.values()):>8}\")",hints:["f\"{name:<6}{val:>8}\" で幅指定","sum(items.values()) で合計","- * 10 で区切り線"]}}
]}
];
