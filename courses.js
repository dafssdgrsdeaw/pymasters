// PyMasters v3 - Course Data
const COURSES = [
// ========== 1. Pythonを�Eじめよう ==========
{id:"py-start",title:"Pythonを�Eじめよう",desc:"プログラミングの世界へ最初�E一歩。何も知らなくて大丈夫�E�E,level:"b",icon:"🌱",free:true,nextCourse:"py-basics",lessons:[
{id:"s1",title:"プログラミングって何！E,xp:30,
content:[
{type:"text",body:"## プログラミングって何だろう�E�\n\nプログラミングとは、E*コンピュータへの持E��書を書くこと**です、En\n身近な例で老E��てみましょぁE��料琁E�Eレシピを思い浮かべてください、En\n「①卵を割めEↁE②フライパンで焼ぁEↁE③お皿に盛る」\n\nこ�Eように、E*めE��ことを頁E��に書き�EぁE*のが�Eログラミングです。コンピュータは人間と違って、曖昧な持E��では動けません。「いぁE��じに焼ぁE��」ではダメで、「中火で3刁E��く」�Eように**具体的に**伝える忁E��があります、E},
{type:"text",body:"### なぜPythonなの�E�\n\nプログラミング言語�Eたくさんありますが、Pythonは**世界で最も人気�Eある言語�Eひとつ**です、En\n人気�E琁E��:\n- **読みめE��ぁE*: 英語に近い書き方で、�E忁E��E��も理解しやすい\n- **なんでもできる**: Webサイト、AI、データ刁E��、ゲーム開発…\n- **仲間が多い**: 困ったとき、ネチE��で日本語�E惁E��がたくさん見つかる"},
{type:"tip",body:"💡 **安忁E��てください�E�E* こ�Eアプリでは、何かをインスト�Eルする忁E���Eありません。ブラウザの中でPythonが動く�Eで、右のエチE��タにコードを書ぁE��、すぐに試せます！E}
],exercise:{instruction:"右のエチE��タに以下�Eコードを書ぁE��、Enterキーで実行してみましょぁE��\nprint(\"プログラミング、楽しそぁE��\")",initialCode:"# ここにコードを書ぁE��ね�E�\n",expectedOutput:"プログラミング、楽しそぁE��E,keywords:["print"],answer:'print("プログラミング、楽しそぁE��E)',hints:["print() とぁE��命令を使ぁE��ぁE,"カチE��の中に表示したぁE��字を書きまぁE,"print(\"プログラミング、楽しそぁE��\") と書ぁE��みてください"]}},

{id:"s2",title:"画面に斁E��を表示しよぁE- print斁E,xp:40,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"print\">print斁E/span>を覚えよう\n\n<span class=\"term\" data-term=\"print\">print()</span>は、カチE��の中に書ぁE��も�Eを画面に表示する命令です、En\nプログラミングで最初に覚える、一番大刁E��命令です、En\n### 書き方のルール\n\n斁E��を表示するには、E*ダブルクォーチE \" )** ぁE**シングルクォーチE ' )** で囲みます、En\nどちらでもOKですが、統一するのがコチE��す、En\n<span class=\"copyable\">print(\"こんにちは\")</span>\n\n<span class=\"copyable\">print('こんにちは')</span>\n\nどちらも同じ結果になります、E},
{type:"code",code:"print(\"こんにちは�E�\")\nprint('Pythonへようこそ')\nprint(42)\nprint(3.14)",desc:"斁E���Eはクォートで囲む。数字�Eクォート不要E��E},
{type:"text",body:"### 数字�Eクォートなし\n\n数字を表示するとき�E、クォートで囲まなくてOKです、En\n<span class=\"copyable\">print(100)</span> ↁE数字�E100\n\n<span class=\"copyable\">print(\"100\")</span> ↁE斁E��としての100\n\n今�E同じに見えますが、後で計算をするときに大きな違いが�Eます！E},
{type:"tip",body:"💡 **よくあるミス**: print のスペルを間違えたり、カチE�� () を忘れたりすることが�!=ります。エラーが�Eたら、まずスペルとカチE��を確認しましょぁE��E}
],exercise:{instruction:"3行で表示してください、En1行目: 「Python」\n2行目: 「�E」\n3行目: 「楽しい�E�、E,initialCode:"# 3つのprint斁E��書ぁE��ね\n",expectedOutput:"Python\nは\n楽しい�E�E,keywords:["print"],answer:"print(\"Python\")\nprint(\"は\")\nprint(\"楽しい�E�\")",hints:["print() めE回書きまぁE,"1つのprint()で1行表示されまぁE,"print(\"Python\")\\nprint(\"は\")\\nprint(\"楽しい�E�\")"]}},

{id:"s3",title:"計算もできる�E�E,xp:40,
content:[
{type:"text",body:"## Pythonは趁E��性能な電卓\n\nPythonでは、Espan class=\"term\" data-term=\"print\">print()</span>の中で計算もできます、En\n<span class=\"copyable\">print(10 + 3)</span> ↁE13\n\n<span class=\"copyable\">print(100 - 25)</span> ↁE75\n\n<span class=\"copyable\">print(6 * 7)</span> ↁE42�E�掛け算�E `*` を使ぁE��す）\n\n<span class=\"copyable\">print(10 / 3)</span> ↁE3.3333...�E�割り算�E `/`�E�E},
{type:"code",code:"print(10 + 3)\nprint(100 - 25)\nprint(6 * 7)\nprint(10 / 3)",desc:"足し箁E+)、引き箁E-)、掛け箁E*)、割り箁E/)"},
{type:"text",body:"### 斁E��と計算を混ぜる\n\n斁E��と数字を一緒に表示したぁE��合�E、�!=とで学ぶ「f斁E���E」を使ぁE��すが、今�Eまず計算だけ試してみましょぁE��E},
{type:"tip",body:"💡 **掛け算�E ×ではなぁE* �E�アスタリスク�E�E* を使ぁE��す。キーボ�Eド�EShift+8で入力できます。割り算�E ÷ ではなぁE/ �E�スラチE��ュ�E�です、E}
],exercise:{instruction:"1980冁E�E啁E��に消費稁E0%を足した合計��額を計算して表示してください、EnヒンチE 1980 + 1980 * 0.1 また�E 1980 * 1.1",initialCode:"# 税込価格を計算して表示�E�\n",expectedOutput:"2178.0",keywords:["print","1980"],answer:"print(1980 * 1.1)",hints:["print() の中に計算式を書きまぁE,"1980 * 1.1 で税込価格が�EまぁE,"print(1980 * 1.1) と書ぁE��みてください"]}}
]},

// ========== 2. Python基礎�Eスター ==========
{id:"py-basics",title:"Python基礎�Eスター",desc:"変数・チE�Eタ型�E斁E���E・計算。Pythonの土台をしっかり固めよぁE,level:"b",icon:"🐣",free:true,nextCourse:"py-control",lessons:[
{id:"b1",title:"変数 - チE�Eタに名前をつける箱",xp:50,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"variable\">変数</span>とは�E�\n\n<span class=\"term\" data-term=\"variable\">変数</span>は、データを�Eれておく**名前つき�E箱**です、En\n想像してみてください。引っ越しのとき、段ボ�Eル箱に「食器」「本」「服」とラベルを貼りますよね。�Eログラミングの<span class=\"term\" data-term=\"variable\">変数</span>もまったく同じです、En\nチE�Eタに名前をつけて保存し、�!=とから名前で取り出せます、En\n### 書き方\n\n<span class=\"copyable\">name = \"太郎\"</span>\n\nこれは「nameとぁE��箱に、太郎とぁE��斁E���Eを�Eれる」とぁE��意味です。`=` は「等しぁE��ではなぁE*「代入する�E��Eれる�E�、E*とぁE��意味です、E},
{type:"code",code:"name = \"太郎\"\nage = 20\nprint(name)\nprint(age)\n\n# 箱の中身は変えられる\nage = 21\nprint(age)",desc:"= で代入。中身はぁE��でも変更可能"},
{type:"text",body:"### 命名ルール\n\n- 英字、数字、`_`�E�アンダースコア�E�が使える\n- 数字で始める�EはNG�E�E1name` はダメ�E�\n- 大斁E��小文字�E区別される！EName` と `name` は別の箱�E�\n- <span class=\"term\" data-term=\"variable\">変数</span>名�E**中身がわかる名前**にするのがコチE��E},
{type:"tip",body:"💡 `x = 25` より <span class=\"copyable\">age = 25</span> の方が「�!=、年齢だな」とわかりますよね。�Eロのプログラマ�Eは変数名にとてもこだわります！E}
],exercise:{instruction:"変数 fruit に \"りんご\" を代入し、変数 price に 150 を代入して、それぞれ表示してください、E,initialCode:"# 変数を定義して表示しよぁEn",expectedOutput:"りんご\n150",keywords:["fruit","price","print"],answer:"fruit = \"りんご\"\nprice = 150\nprint(fruit)\nprint(price)",hints:["fruit = \"りんご\" で変数に斁E���Eを代入","price = 150 で数字を代入�E�クォートなし！E,"print(fruit) と print(price) で表示"]}},

{id:"b2",title:"チE�Eタの種顁E- チE�Eタ垁E,xp:50,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"data-type\">チE�Eタ垁E/span>って何？\n\nPythonのチE�Eタには「種類（型�E�」があります、En\n日常生活でも、数字と斁E���E違うも�Eですよね。、E + 5」�E計算できますが、「りんご + みかん」�E計算できません、En\nPythonも同じで、データの型によってできることが変わります、En\n| 型�E名前 | 何�EチE�Eタ�E�E| 書き方の侁E|\n|---|---|---|\n| <span class=\"term\" data-term=\"int\">int</span> | 整数�E�小数点なし！E| `42`, `-10`, `0` |\n| <span class=\"term\" data-term=\"float\">float</span> | 小数�E�小数点あり�E�E| `3.14`, `-0.5` |\n| <span class=\"term\" data-term=\"str\">str</span> | 斁E���E | `\"Hello\"`, `'abc'` |\n| <span class=\"term\" data-term=\"bool\">bool</span> | 真偽値�E��EぁEぁE��え！E| `True`, `False` |"},
{type:"code",code:"x = 10          # int�E�整数�E�\ny = 3.14        # float�E�小数�E�\nname = \"Python\" # str�E�文字�E�E�\nis_fun = True   # bool�E�真偽値�E�\n\nprint(type(x))\nprint(type(y))\nprint(type(name))\nprint(type(is_fun))",desc:"type() で変数の型を確認できる"},
{type:"tip",body:"💡 <span class=\"copyable\">type()</span> は「この箱の中身はどんな種類？」と聞く命令です。デバッグで大活躍します！E}
],exercise:{instruction:"変数 a に 42 を、変数 b に 3.14 を、変数 c に \"Hello\" を代入し、それぞれ�Etype()を表示してください、E,initialCode:"# 3つの変数を定義してtype()で確認\n",expectedOutput:"<class 'int'>\n<class 'float'>\n<class 'str'>",keywords:["type","print"],answer:"a = 42\nb = 3.14\nc = \"Hello\"\nprint(type(a))\nprint(type(b))\nprint(type(c))",hints:["a = 42 で整数を代入","type(a) で型を取征E,"print(type(a)) で型を表示"]}},

{id:"b3",title:"斁E���Eを�E在に操ろぁE,xp:60,
content:[
{type:"text",body:"## 斁E���Eの結合と<span class=\"term\" data-term=\"f-string\">f斁E���E</span>\n\n斁E���Eは `+` でつなげられます、En\n<span class=\"copyable\">\"Hello\" + \" World\"</span> ↁE`\"Hello World\"`\n\nでも、もっと便利なのぁEspan class=\"term\" data-term=\"f-string\">f斁E���E</span>�E�エフ文字�E�E�です、En\n斁E���Eの前に `f` をつけて、`{}` の中に<span class=\"term\" data-term=\"variable\">変数</span>を�Eれるだけ！\n\n<span class=\"copyable\">f\"{name}さん、こんにちは�E�\"</span>"},
{type:"code",code:"name = \"太郎\"\nage = 20\n\n# f斁E���E�E�趁E��利�E�E��\nprint(f\"{name}さんは{age}歳です\")\n\n# 斁E���EメソチE��\nmsg = \"hello python\"\nprint(msg.upper())    # 全部大斁E��\nprint(msg.title())    # 先頭だけ大斁E��\nprint(len(msg))       # 斁E��数",desc:"f斁E���Eと便利な斁E���EメソチE��"},
{type:"tip",body:"💡 <span class=\"term\" data-term=\"f-string\">f斁E���E</span>はPython3.6以降�E機�Eで、現在最もよく使われる文字�Eフォーマット方法です。`f` を忘れずに�E�E}
],exercise:{instruction:"変数 item に \"コーヒ�E\"、変数 price に 350 を代入し、f斁E���Eで「コーヒ�Eは350冁E��す」と表示してください、E,initialCode:"# f斁E���Eで表示しよぁEn",expectedOutput:"コーヒ�Eは350冁E��ぁE,keywords:["print","f\""],answer:"item = \"コーヒ�E\"\nprice = 350\nprint(f\"{item}は{price}冁E��す\")",hints:["item = \"コーヒ�E\" で斁E���E代入","f\"...\" でf斁E���Eを作る","print(f\"{item}は{price}冁E��す\")"]}},

{id:"b4",title:"Pythonで計算しよう - 演算孁E,xp:60,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"operator\">演算孁E/span>の一覧\n\n| <span class=\"term\" data-term=\"operator\">演算孁E/span> | 意味 | 侁E| 結果 |\n|---|---|---|---|\n| `+` | 足し箁E| `10 + 3` | 13 |\n| `-` | 引き箁E| `10 - 3` | 7 |\n| `*` | 掛け箁E| `10 * 3` | 30 |\n| `/` | 割り箁E| `10 / 3` | 3.33... |\n| `//` | 刁E��捨て割り箁E| `10 // 3` | 3 |\n| `%` | 余り | `10 % 3` | 1 |\n| `**` | べき乁E| `2 ** 3` | 8 |\n\n`//` と `%` は特に便利です。割り勘計算で、E人ぁE��ら？余りは�E�」とぁE��計算ができます、E},
{type:"code",code:"# 割り勘計算\ntotal = 5000\npeople = 3\nper_person = total // people  # 1人刁E���Eり捨て�E�\namari = total % people        # 余り\nprint(f\"1人 {per_person}冁E��余り{amari}冁E��\")",desc:"実用侁E 割り勘計箁E},
{type:"tip",body:"💡 `%`�E�余り�E�を使ぁE��「�E数か奁E��か」を判定できます、Espan class=\"copyable\">number % 2 == 0</span> なら�E数です！E}
],exercise:{instruction:"3人で4200冁E�E食事を割り勘します、E人刁E��E/で刁E��捨て�E�と余りを計算し、E人1400冁E��余り0冁E��」と表示してください、E,initialCode:"# 割り勘を計算\n",expectedOutput:"1人1400冁E��余り0冁E��E,keywords:["//","%","print"],answer:"total = 4200\npeople = 3\nprint(f\"1人{total // people}冁E��余り{total % people}冁E��\")",hints:["total // people で1人刁E,"total % people で余り","f斁E���Eで1つのprintにまとめる"]}},

{id:"b5",title:"型変換 - チE�Eタの変身",xp:60,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"type-conversion\">型変換</span>\n\n斁E���Eの `\"50\"` と数字�E `50` は別物です、En\n`\"50\" + \"30\"` ↁE`\"5030\"`�E�文字�Eの結合�E�計算にならなぁE��E��\n\n`50 + 30` ↁE`80`�E�数字�E計算）\n\nチE�Eタの型を変えることめEspan class=\"term\" data-term=\"type-conversion\">型変換</span>と言ぁE��す、En\n| 変換 | 関数 | 侁E|\n|---|---|---|\n| 整数に | <span class=\"copyable\">int()</span> | `int(\"50\")` ↁE`50` |\n| 小数に | <span class=\"copyable\">float()</span> | `float(\"3.14\")` ↁE`3.14` |\n| 斁E���Eに | <span class=\"copyable\">str()</span> | `str(100)` ↁE`\"100\"` |"},
{type:"code",code:"# 斁E���E ↁE数字\na = \"50\"\nb = \"30\"\nprint(a + b)          # 斁E���Eの結合: 5030\nprint(int(a) + int(b))  # 数字�E計箁E 80\n\n# 数孁EↁE斁E���E\nage = 20\nprint(\"私�E\" + str(age) + \"歳\")",desc:"型変換で斁E��と数字を行き来"},
{type:"tip",body:"💡 ユーザー入力�E常に斁E���Eです。計算したいとき�E忁E�� <span class=\"copyable\">int()</span> めE<span class=\"copyable\">float()</span> で変換しましょぁE��E}
],exercise:{instruction:"変数 a に斁E���E \"80\"、変数 b に斁E���E \"20\" を代入し、int()で整数に変換してから足し算した結果を表示してください、E,initialCode:"# 斁E���Eを数字に変換して計算\n",expectedOutput:"100",keywords:["int","print"],answer:"a = \"80\"\nb = \"20\"\nprint(int(a) + int(b))",hints:["a = \"80\" で斁E���Eとして定義","int(a) で整数に変換","print(int(a) + int(b))"]}}
]},

// ========== 3. 条件刁E��とルーチE==========
{id:"py-control",title:"条件刁E��とルーチE,desc:"if斁E�Efor斁E�Ewhile斁E��、�Eログラムに判断と繰り返しをさせよぁE,level:"b",icon:"🔀",free:true,nextCourse:"py-func",lessons:[
{id:"c1",title:"もし〜なめE- if斁E�E基本",xp:60,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"if\">if斁E/span>�E�条件刁E��）\n\n日常生活でも「もし雨なら傘を持つ」と判断しますよね。�Eログラムにも同じ判断をさせられます、En\n```python\nif 条件:\n    実行する�E琁En```\n\n**趁E��要E*: 条件の後ろにコロン `:` をつけて、次の行�E**スペ�Eス4つ刁E��にずらぁE*�E�Espan class=\"term\" data-term=\"indent\">インチE��チE/span>�E�。この<span class=\"term\" data-term=\"indent\">インチE��チE/span>がPythonの特徴で、「この処琁E�Eifの中ですよ」とぁE��意味になります、E},
{type:"code",code:"age = 20\n\nif age >= 18:\n    print(\"成人です\")\n\nif age < 18:\n    print(\"未成年です\")",desc:">=は「以上」、Eは「より小さぁE��E},
{type:"text",body:"### <span class=\"term\" data-term=\"comparison\">比輁E��算孁E/span>\n\n| 演算孁E| 意味 | 侁E|\n|---|---|---|\n| `==` | 等しぁE| `x == 5` |\n| `!=` | 等しくなぁE| `x != 5` |\n| `>` | より大きい | `x > 5` |\n| `<` | より小さぁE| `x < 5` |\n| `>=` | 以丁E| `x >= 5` |\n| `<=` | 以丁E| `x <= 5` |\n\n⚠�E�E`=` は<span class=\"term\" data-term=\"assignment\">代入</span>、`==` は比輁E��す。混同注意！E},
{type:"tip",body:"💡 <span class=\"term\" data-term=\"indent\">インチE��チE/span>は**スペ�Eス4つ**が標準です。Tabキーを押すと自動で入ります。インチE��トがずれるとエラーになる�Eで注意！E}
],exercise:{instruction:"変数 score に 85 を代入し、E0以上なら「合格�E�」と表示してください、E,initialCode:"# スコアで合格判定\n",expectedOutput:"合格�E�E,keywords:["if","print","score"],answer:"score = 85\nif score >= 80:\n    print(\"合格�E�\")",hints:["score = 85 で定義","if score >= 80: で条件判宁E,"print(\"合格�E�\") をインチE��トして書ぁE]}},

{id:"c2",title:"もっと条件めE- elif と else",xp:60,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"elif\">elif</span>と<span class=\"term\" data-term=\"else\">else</span>\n\n「もしAなら�EBなら�Eそれ以外なら」と褁E��の条件を書けます、En\n```python\nif 条件1:\n    処琁E\nelif 条件2:\n    処琁E\nelse:\n    それ以外�E処琁En```\n\n<span class=\"term\" data-term=\"elif\">elif</span>は「else if」�E略です。条件をいくつでも追加できます、E},
{type:"code",code:"score = 75\n\nif score >= 90:\n    print(\"Sランク\")\nelif score >= 80:\n    print(\"Aランク\")\nelif score >= 70:\n    print(\"Bランク\")\nelse:\n    print(\"Cランク\")",desc:"成績ランク判定�E侁E},
{type:"tip",body:"💡 条件は**上から頁E��に**チェチE��されます。最初にTrueになった条件だけが実行され、残りはスキチE�Eされます、E}
],exercise:{instruction:"変数 age に 17 を代入し、E8以上なら「�E人です」、そぁE��なければ「未成年です」と表示してください、E,initialCode:"# 年齢判定\n",expectedOutput:"未成年でぁE,keywords:["if","else","print"],answer:"age = 17\nif age >= 18:\n    print(\"成人です\")\nelse:\n    print(\"未成年です\")",hints:["age = 17 で定義","if age >= 18: で18歳以上チェチE��","else: で「それ以外」を処琁E]}},

{id:"c3",title:"繰り返し① - for斁E,xp:60,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"for\">for斁E/span>\n\n同じ処琁E��何度も繰り返したいとき、Espan class=\"term\" data-term=\"for\">for斁E/span>を使ぁE��す、En\n```python\nfor 変数 in 繰り返すも�E:\n    処琁En```\n\n<span class=\"term\" data-term=\"range\">range()</span>と絁E��合わせると、指定回数だけ繰り返せます、En\n<span class=\"copyable\">range(5)</span> ↁE0, 1, 2, 3, 4 の5回\n<span class=\"copyable\">range(1, 6)</span> ↁE1, 2, 3, 4, 5\n<span class=\"copyable\">range(0, 10, 2)</span> ↁE0, 2, 4, 6, 8�E�Eつ飛�Eし！E},
{type:"code",code:"# 5回繰り返し\nfor i in range(5):\n    print(f\"{i}番目\")\n\nprint(\"---\")\n\n# リスト�E繰り返し\nfruits = [\"りんご\", \"バナナ\", \"みかん\"]\nfor f in fruits:\n    print(f\"{f}が好き！\")",desc:"range()とリストでの繰り返し"},
{type:"tip",body:"💡 <span class=\"term\" data-term=\"range\">range(5)</span> は0から始まって4で終わります！Eは含まなぁE��E��、Eから始めたいなめE<span class=\"copyable\">range(1, 6)</span> と書きます、E}
],exercise:{instruction:"for斁E��使って、Eから5までの数字を1行ずつ表示してください、E,initialCode:"# 1から5まで表示\n",expectedOutput:"1\n2\n3\n4\n5",keywords:["for","range","print"],answer:"for i in range(1, 6):\n    print(i)",hints:["range(1, 6) で1~5の篁E��","for i in range(1, 6): でルーチE,"print(i) で数字を表示"]}},

{id:"c4",title:"繰り返し② - while斁E,xp:70,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"while\">while斁E/span>\n\n<span class=\"term\" data-term=\"condition\">条件</span>がTrueの間、ずっと繰り返します、En\n```python\nwhile 条件:\n    処琁En```\n\nfor斁E��「、E��繰り返す」なら、while斁E�E「条件を満たす間ずっと繰り返す」です、En\n⚠�E�E条件がずっとTrueだと**無限ルーチE*になる�Eで注意！忁E��条件が変わるよぁE��しましょぁE��En\n<span class=\"term\" data-term=\"break\">break</span>: ループを途中で抜ける\n<span class=\"term\" data-term=\"continue\">continue</span>: 今回だけスキチE�Eして次へ"},
{type:"code",code:"count = 5\nwhile count > 0:\n    print(count)\n    count -= 1  # countめE減らす\nprint(\"発封E��\")",desc:"カウントダウン"},
{type:"tip",body:"💡 `count -= 1` は `count = count - 1` の省略形です。`+=` めE`*=` も�!=ります！E}
],exercise:{instruction:"while斁E�� n=1 から始めて、n<=5 の閁En を表示し、最後に「完亁E��と表示してください、E,initialCode:"# while斁E��1~5表示\n",expectedOutput:"1\n2\n3\n4\n5\n完亁E,keywords:["while","print"],answer:"n = 1\nwhile n <= 5:\n    print(n)\n    n += 1\nprint(\"完亁E")",hints:["n = 1 で初期匁E,"while n <= 5: で条件","print(n) の後に n += 1 を忘れずに"]}},

{id:"c5",title:"条件の絁E��合わぁE- and, or, not",xp:70,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"logical\">論理演算孁E/span>\n\n褁E��の条件を絁E��合わせられます、En\n| 演算孁E| 意味 | 侁E|\n|---|---|---|\n| `and` | 両方True | 「晴めE**and** 休み」�E 両方満たすとぁE|\n| `or` | どちらかTrue | 「土曁E**or** 日曜」�E どちらかでOK |\n| `not` | 反転 | 、E*not** 雨」�E 雨じゃなぁE��ぁE|"},
{type:"code",code:"age = 25\nhas_ticket = True\n\nif age >= 18 and has_ticket:\n    print(\"入場できます\")\nelse:\n    print(\"入場できません\")",desc:"2つの条件めEand で絁E��合わぁE},
{type:"tip",body:"💡 `and` は「かつ�E�両方満たす�E�」、`or` は「また�E�E�どちらか�E�」です。日常語に置き換えると琁E��しやすい�E�E}
],exercise:{instruction:"score=75, attendance=True。「score>=60 かつ attendance==True」なら「合格」、そぁE��なければ「不合格」と表示、E,initialCode:"# 合格判定\n",expectedOutput:"合格",keywords:["and","if","print"],answer:"score = 75\nattendance = True\nif score >= 60 and attendance:\n    print(\"合格\")\nelse:\n    print(\"不合格\")",hints:["score = 75, attendance = True","if score >= 60 and attendance:","条件を満たすので「合格、E]}}
]},

// ========== 4. 関数を�Eスター ==========
{id:"py-func",title:"関数を�Eスター",desc:"コードを整琁E��て再利用。def・引数・戻り値を学ぼぁE,level:"b",icon:"⚡",free:true,nextCourse:"py-ds",lessons:[
{id:"f1",title:"関数って何！E- 料理レシピ�Eように",xp:70,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"function\">関数</span>とは�E�\n\n<span class=\"term\" data-term=\"function\">関数</span>は「�E琁E�Eレシピ」です、En\n料理で例えると�E�「カレーの作り方」をレシピに書ぁE��おけば、何度でもそのレシピ通りに作れますよね。�Eログラミングの<span class=\"term\" data-term=\"function\">関数</span>も同じで、�E琁E��まとめて名前をつけ、何度でも呼び出せます、En\n```python\ndef 関数吁E引数):\n    処琁En    return 戻り値\n```\n\n<span class=\"term\" data-term=\"def\">def</span> は「define�E�定義する�E�」�E略です、E},
{type:"code",code:"def greet(name):\n    return f\"こんにちは、{name}さん�E�\"\n\nprint(greet(\"太郎\"))\nprint(greet(\"花子\"))",desc:"関数の定義と呼び出ぁE},
{type:"tip",body:"💡 <span class=\"term\" data-term=\"function\">関数</span>を使ぁE��、同じコードを何度も書かなくて済みます。�Eロは、E回以上書くならら関数にする」を意識してぁE��す！E}
],exercise:{instruction:"引数 a と b の合計を返す関数 add を作り、add(3, 7) の結果を表示してください、E,initialCode:"# add関数を定義\n",expectedOutput:"10",keywords:["def","return","print"],answer:"def add(a, b):\n    return a + b\nprint(add(3, 7))",hints:["def add(a, b): で定義","return a + b で合計を返す","print(add(3, 7)) で表示"]}},

{id:"f2",title:"引数と戻り値",xp:70,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"argument\">引数</span>と<span class=\"term\" data-term=\"return\">戻り値</span>\n\n<span class=\"term\" data-term=\"function\">関数</span>を�E動販売機に例えると:\n\n- **<span class=\"term\" data-term=\"argument\">引数</span>** = 入れるお��とボタン�E�ENPUT�E�\n- **処琁E* = 中でジュースを�Eす仕絁E��\n- **<span class=\"term\" data-term=\"return\">戻り値</span>** = 出てくるジュース�E�EUTPUT�E�\n\n<span class=\"term\" data-term=\"return\">return</span>がなぁE�� `None` が返ります、E},
{type:"code",code:"def calc_tax(price):\n    \"\"\"税込価格を計算する\"\"\"\n    return int(price * 1.1)\n\nresult = calc_tax(1000)\nprint(f\"税込: {result}冁E")\nprint(f\"税込: {calc_tax(2500)}冁E")",desc:"戻り値を変数に入れたり、直接printしためE},
{type:"tip",body:"💡 `\"\"\"...\"\"\"`は<span class=\"term\" data-term=\"docstring\">ドキュメント文字�E</span>�E�Eocstring�E�と言ぁE��E��数の説明を書くため�E特別なコメントです、E}
],exercise:{instruction:"価格を受け取り、E0%割引後�E価格を返す関数 discount を作り、discount(1000) の結果を表示してください、E,initialCode:"# 割引関数\n",expectedOutput:"900",keywords:["def","return","print"],answer:"def discount(price):\n    return int(price * 0.9)\nprint(discount(1000))",hints:["def discount(price): で定義","price * 0.9 で10%割弁E,"return int(...) で整数にして返す"]}},

{id:"f3",title:"チE��ォルト引数",xp:70,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"default-arg\">チE��ォルト引数</span>\n\n<span class=\"term\" data-term=\"argument\">引数</span>に初期値を設定できます。呼び出し時に省略すると初期値が使われます、En\n<span class=\"copyable\">def greet(name, greeting=\"こんにちは\"):</span>\n\nこ�Eように書くと、greeting を省略したら「こんにちは」が使われます、E},
{type:"code",code:"def greet(name, greeting=\"こんにちは\"):\n    print(f\"{greeting}、{name}さん�E�\")\n\ngreet(\"太郎\")\ngreet(\"花子\", \"お�Eよう\")",desc:"チE��ォルト引数で省略可能に"},
{type:"tip",body:"💡 <span class=\"term\" data-term=\"default-arg\">チE��ォルト引数</span>は、API設計で「省略可能なオプション」を作るときに大活躍します！E}
],exercise:{instruction:"greet(name, greeting=\"こんにちは\") を定義し、greet(\"太郎\") と greet(\"花子\", \"お�Eよう\") を呼び出してください、E,initialCode:"# チE��ォルト引数付き関数\n",expectedOutput:"こんにちは、太郎さん！\nお�Eよう、花子さん！E,keywords:["def","print"],answer:"def greet(name, greeting=\"こんにちは\"):\n    print(f\"{greeting}、{name}さん�E�\")\ngreet(\"太郎\")\ngreet(\"花子\", \"お�Eよう\")",hints:["def greet(name, greeting=\"こんにちは\"):","print(f\"{greeting}、{name}さん�E�\")","greet めE回呼び出ぁE]}},

{id:"f4",title:"ラムダ弁E- 1行で関数めE,xp:80,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"lambda\">ラムダ弁E/span>\n\n1行で書ける短ぁEspan class=\"term\" data-term=\"function\">関数</span>です、En\n```python\nlambda 引数: 戻り値の式\n```\n\n通常の関数:\n```python\ndef double(x):\n    return x * 2\n```\n\n<span class=\"term\" data-term=\"lambda\">ラムダ弁E/span>:\n<span class=\"copyable\">double = lambda x: x * 2</span>"},
{type:"code",code:"square = lambda x: x ** 2\nprint(square(5))\nprint(square(8))\n\n# sorted()でよく使ぁEndata = [(\"B\", 2), (\"A\", 1), (\"C\", 3)]\nsorted_data = sorted(data, key=lambda x: x[1])\nprint(sorted_data)",desc:"ラムダ式�E基本とsorted()での使用侁E},
{type:"tip",body:"💡 <span class=\"term\" data-term=\"lambda\">ラムダ弁E/span>は `sorted()` めE`filter()` と絁E��合わせるのが定番。データ処琁E��大活躍します！E}
],exercise:{instruction:"ラムダ式で引数めE倍する関数 triple を定義し、triple(7) の結果を表示してください、E,initialCode:"# ラムダ式\n",expectedOutput:"21",keywords:["lambda","print"],answer:"triple = lambda x: x * 3\nprint(triple(7))",hints:["lambda x: x * 3","triple = lambda x: x * 3","print(triple(7))"]}}
]},

// ========== 5. チE�Eタ構造 ==========
{id:"py-ds",title:"チE�Eタ構造",desc:"リスト�E辞書・タプル・リスト�E匁E��記でチE�Eタを効玁E��琁E,level:"i",icon:"📦",free:true,nextCourse:"py-clean",lessons:[
{id:"d1",title:"リスチE- チE�Eタの刁E,xp:80,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"list\">リスチE/span>\n\n<span class=\"term\" data-term=\"list\">リスチE/span>は、褁E��のチE�EタめE*頁E��に並べて**保存するデータ構造です、En\n買ぁE��リストを想像してください。「牛乳、卵、パン」と頁E��に並んでぁE��すよね、En\n<span class=\"copyable\">fruits = [\"りんご\", \"バナナ\", \"みかん\"]</span>\n\n<span class=\"term\" data-term=\"index\">インチE��クス</span>�E�番号�E��E **0から** 始まります、En\n- `fruits[0]` ↁE\"りんご\"\n- `fruits[1]` ↁE\"バナナ\"\n- `fruits[-1]` ↁE\"みかん\"�E�最後�E要素�E�E},
{type:"code",code:"fruits = [\"りんご\", \"バナナ\", \"みかん\"]\nprint(fruits[0])\nfruits.append(\"ぶどぁE")\nprint(len(fruits))\nprint(fruits)",desc:"リスト�E作�E・アクセス・追加"},
{type:"text",body:"### よく使ぁEspan class=\"term\" data-term=\"method\">メソチE��</span>\n\n- <span class=\"copyable\">.append(x)</span> 末尾に追加\n- <span class=\"copyable\">.insert(i, x)</span> 位置iに挿入\n- <span class=\"copyable\">.remove(x)</span> xを削除\n- <span class=\"copyable\">.sort()</span> ソーチEn- <span class=\"copyable\">.pop()</span> 末尾を取り�Eし\n- <span class=\"copyable\">len(list)</span> 要素数"}
],exercise:{instruction:"[3, 1, 4, 1, 5] をsort()でソートして表示してください、E,initialCode:"# ソートして表示\n",expectedOutput:"[1, 1, 3, 4, 5]",keywords:["sort","print"],answer:"numbers = [3, 1, 4, 1, 5]\nnumbers.sort()\nprint(numbers)",hints:["numbers = [3, 1, 4, 1, 5]","numbers.sort() でソーチE,"print(numbers)"]}},

{id:"d2",title:"辞書 - 名前でチE�Eタを引く",xp:80,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"dict\">辞書</span>�E�Eict�E�\n\n<span class=\"term\" data-term=\"dict\">辞書</span>は**キーと値のペア**でチE�Eタを管琁E��ます、En\n本物の辞書のように、「単語（キー�E�」で引くと「意味�E�値�E�」が出てきます、En\n<span class=\"copyable\">user = {\"name\": \"太郎\", \"age\": 25}</span>"},
{type:"code",code:"user = {\"name\": \"太郎\", \"age\": 25, \"city\": \"東京\"}\nprint(user[\"name\"])\nuser[\"email\"] = \"taro@example.com\"\n\nfor key, value in user.items():\n    print(f\"{key}: {value}\")",desc:"辞書の作�E・アクセス・追加・ルーチE},
{type:"tip",body:"💡 <span class=\"term\" data-term=\"dict\">辞書</span>はJSON�E�Eeb APIのチE�Eタ形式）そのも�Eです。Web開発では毎日使ぁE��す！E}
],exercise:{instruction:"啁E��辞書を作�E、E"name\":\"ノ�EチEC\", \"price\":98000。f斁E���Eで「ノーチEC: 98000冁E��と表示、E,initialCode:"# 啁E��辞書\n",expectedOutput:"ノ�EチEC: 98000冁E,keywords:["print"],answer:"item = {\"name\": \"ノ�EチEC\", \"price\": 98000}\nprint(f\"{item['name']}: {item['price']}冁E")",hints:["item = {\"name\": \"ノ�EチEC\", \"price\": 98000}","item[\"name\"] でアクセス","f斁E���Eでまとめて表示"]}},

{id:"d3",title:"タプルとセチE��",xp:80,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"tuple\">タプル</span>と<span class=\"term\" data-term=\"set\">セチE��</span>\n\n### <span class=\"term\" data-term=\"tuple\">タプル</span>�E�Euple�E�\n変更できなぁE��スト。`()` で作ります、En<span class=\"copyable\">colors = (\"赤\", \"青\", \"緑\")</span>\n\n一度作ったら中身を変えられなぁE�Eで、「絶対変わらなぁE��ータ」に使ぁE��す、En\n### <span class=\"term\" data-term=\"set\">セチE��</span>�E�Eet�E�\n重褁E��し�E雁E��。`{}` で作ります、En<span class=\"copyable\">unique = {1, 2, 3, 2, 1}</span> ↁE`{1, 2, 3}`\n\n自動で重褁E��消える�Eで、ユニ�Eクな値を取り�Eすときに便利、E},
{type:"code",code:"# タプル\ncoords = (10, 20)\nprint(coords[0])\n\n# セチE���E�重褁E��自動削除�E�\nnumbers = [1, 2, 3, 2, 1, 3, 4]\nunique = set(numbers)\nprint(unique)\nprint(len(unique))",desc:"タプルとセチE��の基本"},
],exercise:{instruction:"リスチE[1, 2, 2, 3, 3, 3, 4] からset()で重褁E��除き、要素数をlen()で表示してください、E,initialCode:"# 重褁E��除く\n",expectedOutput:"4",keywords:["set","len","print"],answer:"data = [1, 2, 2, 3, 3, 3, 4]\nprint(len(set(data)))",hints:["set() でセチE��に変換","len() で要素数","print(len(set(data)))"]}},

{id:"d4",title:"リスト�E匁E��訁E,xp:90,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"list-comp\">リスト�E匁E��訁E/span>\n\nPythonの強力機�E、Espan class=\"term\" data-term=\"list\">リスチE/span>めE行で作れます、En\n<span class=\"copyable\">[弁Efor 変数 in イチE��ブル if 条件]</span>\n\n通常のfor斁E��5行かかるも�Eが、E行で書けます、E},
{type:"code",code:"# 通常\nsquares = []\nfor i in range(1, 6):\n    squares.append(i ** 2)\nprint(squares)\n\n# リスト�E匁E��記で同じこと�E�\nsquares2 = [i ** 2 for i in range(1, 6)]\nprint(squares2)\n\n# 条件つき\nevens = [i for i in range(10) if i % 2 == 0]\nprint(evens)",desc:"通常のfor斁E��リスト�E匁E��記�E比輁E},
{type:"tip",body:"💡 PythonらしぁE��き方�E�Eythonic�E��E代表格。コードが短くなるだけでなく、�E琁E��度も速いです！E}
],exercise:{instruction:"リスト�E匁E��記で1~10の奁E��リストを作り表示してください、E,initialCode:"# 奁E��リスチEn",expectedOutput:"[1, 3, 5, 7, 9]",keywords:["for","if"],answer:"odds = [i for i in range(1, 11) if i % 2 != 0]\nprint(odds)",hints:["range(1, 11) で1~10","i % 2 != 0 で奁E��判宁E,"[i for i in range(1, 11) if i % 2 != 0]"]}}
]},

// ========== 6. きれぁE��コード�E書き方 ==========
{id:"py-clean",title:"きれぁE��コード�E書き方",desc:"コメント�E命名規則・コード�E整琁E��読みめE��ぁE��ードを書こう",level:"i",icon:"✨",free:true,nextCourse:"py-error",lessons:[
{id:"cl1",title:"コメンチE- 未来の自刁E��のメモ",xp:50,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"comment\">コメンチE/span>\n\nコード�E中にメモを残せます。`#` の後に書ぁE��斁E���Eプログラムに無視されます、En\n<span class=\"copyable\"># これはコメントでぁE/span>\n\nコメント�E「未来の自刁E��や「チームメンバ�E」への手紙です、Eヶ月後�E自刁E�E、今書ぁE��コードを覚えてぁE��ぁE��もしれません、En\n### ぁE��コメントを書く？\n- **なぁE*そ�Eコードを書ぁE��か！Ehyを書く）\n- 褁E��な処琁E�E説明\n- TODOメモ�E�E# TODO: あとで修正する`�E�\n\n### 書かなくてぁE��コメンチEn- コードを見れば明らかなこと�E�Ex = 5  # xに5を代入` ↁE不要E��E��E},
{type:"code",code:"# 消費税率�E�E024年時点�E�\nTAX_RATE = 0.1\n\ndef calc_total(price):\n    \"\"\"税込価格を計算する\"\"\"\n    # 小数点以下を刁E��捨て\n    return int(price * (1 + TAX_RATE))\n\n# TODO: 軽減税率にも対応する\nprint(calc_total(1000))",desc:"実践皁E��コメント�E書き方"},
{type:"tip",body:"💡 三重クォーチE<span class=\"copyable\">\"\"\"説明\"\"\"</span> は<span class=\"term\" data-term=\"docstring\">ドキュメント文字�E</span>�E�Eocstring�E�。関数の先頭に書くと、E��数の説明になります、E}
],exercise:{instruction:"以下�Eコードにコメントを追加して、何をしてぁE��か説明してください、Enresult = [i ** 2 for i in range(1, 6)]\nprint(result)\n\n1行目の上に # で、E~5の2乗リストを作�E」とぁE��コメントを書ぁE��ください、E,initialCode:"# ここにコメントを書ぁE��ね\nresult = [i ** 2 for i in range(1, 6)]\nprint(result)",expectedOutput:"[1, 4, 9, 16, 25]",keywords:["#","print"],answer:"# 1~5の2乗リストを作�E\nresult = [i ** 2 for i in range(1, 6)]\nprint(result)",hints:["# でコメントを書ぁE,"コード�E上に説明を書ぁE,"# 1~5の2乗リストを作�E"]}},

{id:"cl2",title:"変数名�Eつけ方",xp:50,
content:[
{type:"text",body:"## 命名規則 - <span class=\"term\" data-term=\"pep8\">PEP8</span>\n\nPythonには<span class=\"term\" data-term=\"pep8\">PEP8</span>とぁE��「コード�E書き方ガイド」があります、En\n### 基本ルール\n\n| 種顁E| 書き方 | 侁E|\n|---|---|---|\n| 変数吁E| snake_case | `user_name`, `total_price` |\n| 関数吁E| snake_case | `calc_tax()`, `get_data()` |\n| 定数 | UPPER_CASE | `MAX_COUNT`, `TAX_RATE` |\n| クラス吁E| PascalCase | `UserProfile`, `ShoppingCart` |\n\n### ❁E悪ぁE��EↁE✁E良ぁE��\n- ❁E`x = 25` ↁE✁E`age = 25`\n- ❁E`d = []` ↁE✁E`scores = []`\n- ❁E`f()` ↁE✁E`calculate_average()`"},
{type:"code",code:"# ❁E悪ぁE��\nx = 25\ny = \"太郎\"\ndef f(a, b):\n    return a + b\n\n# ✁E良ぁE��\nuser_age = 25\nuser_name = \"太郎\"\ndef add_numbers(num1, num2):\n    return num1 + num2\n\nprint(add_numbers(3, 7))",desc:"読みめE��ぁE��剁Evs 読みにくい名前"},
{type:"tip",body:"💡 変数名に悩んだら「この変数を知らなぁE��が読んで、中身が想像できるか？」と自問してみてください、E}
],exercise:{instruction:"以下�Eコード�E変数名をわかりやすく書き換えて、同じ結果を�Eしてください、Enx = 1000\ny = 0.1\nprint(int(x + x * y))",initialCode:"# 変数名をわかりやすく�E�\n",expectedOutput:"1100",keywords:["print"],answer:"price = 1000\ntax_rate = 0.1\nprint(int(price + price * tax_rate))",hints:["x は何�EチE�Eタ�E��E price","y は何？�E tax_rate","わかりやすい名前に変えるだぁE]}},

{id:"cl3",title:"関数で整琁E��頁E- DRY原則",xp:60,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"dry\">DRY原則</span>\n\n**D**on't **R**epeat **Y**ourself�E�同じことを繰り返すな�E�\n\nコピ�Eで同じコードが3箁E��にあったら、E箁E��を修正しても残り2箁E��を忘れてバグの原因に、En\n**解決筁E*: 繰り返すコード�E<span class=\"term\" data-term=\"function\">関数</span>にまとめる�E�E},
{type:"code",code:"# ❁EDRYに反する\nprint(f\"りんぁE {int(100 * 1.1)}冁E")\nprint(f\"バナチE {int(200 * 1.1)}冁E")\nprint(f\"みかん: {int(150 * 1.1)}冁E")\n\n# ✁E関数でDRY\ndef show_price(name, price):\n    print(f\"{name}: {int(price * 1.1)}冁E")\n\nshow_price(\"りんご\", 100)\nshow_price(\"バナナ\", 200)\nshow_price(\"みかん\", 150)",desc:"関数で重褁E��ードを排除"},
{type:"tip",body:"💡 「同じよぁE��コードを2回以上書ぁE��ら関数にする」。これだけでコード�E品質が劇皁E��上がります！E}
],exercise:{instruction:"name と score を受け取り「{name}: {score}点」と表示する関数 show_score を作り、E人刁E��び出してください、Enshow_score(\"太郎\", 85)\nshow_score(\"花子\", 92)\nshow_score(\"次郎\", 78)",initialCode:"# show_score関数を作ろぁEn",expectedOutput:"太郁E 85点\n花孁E 92点\n次郁E 78点",keywords:["def","print"],answer:"def show_score(name, score):\n    print(f\"{name}: {score}点\")\nshow_score(\"太郎\", 85)\nshow_score(\"花子\", 92)\nshow_score(\"次郎\", 78)",hints:["def show_score(name, score):","print(f\"{name}: {score}点\")","3回呼び出ぁE]}}
]},

// ========== 7. オブジェクト指向�E門 ==========
{id:"py-oop",title:"オブジェクト指向�E門",desc:"クラスと継承。現実世界をコードで表現しよぁE,level:"i",icon:"🏗�E�E,free:true,nextCourse:"py-janken",lessons:[
{id:"o1",title:"クラスとは�E�E- 設計図を作ろぁE,xp:100,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"class\">クラス</span>\n\n<span class=\"term\" data-term=\"class\">クラス</span>は「設計図」、Espan class=\"term\" data-term=\"instance\">インスタンス</span>は「設計図から作った実物」です、En\nクチE��ー型（クラス�E�から、たくさん�EクチE��ー�E�インスタンス�E�を作るイメージです、En\n<span class=\"term\" data-term=\"init\">__init__</span>は<span class=\"term\" data-term=\"instance\">インスタンス</span>を作るときに自動で呼ばれる特別な<span class=\"term\" data-term=\"method-oop\">メソチE��</span>です、En\n<span class=\"term\" data-term=\"self\">self</span>は「�E刁E�E身」を持E��特別な<span class=\"term\" data-term=\"argument\">引数</span>です、E},
{type:"code",code:"class Dog:\n    def __init__(self, name, age):\n        self.name = name\n        self.age = age\n    \n    def bark(self):\n        return f\"{self.name}「ワン�E�」\"\n\ndog1 = Dog(\"ポチ\", 3)\ndog2 = Dog(\"タロウ\", 5)\nprint(dog1.bark())\nprint(f\"{dog2.name}は{dog2.age}歳\")",desc:"クラス定義→インスタンス作�E→メソチE��呼び出ぁE},
],exercise:{instruction:"Catクラスを作�E。name, colorを受け取り、describe()で「ミケ は 三毁E色です」と返す、Eat(\"ミケ\",\"三毛\")で表示、E,initialCode:"# Catクラス\n",expectedOutput:"ミケ は 三毁E色でぁE,keywords:["class","def","self"],answer:"class Cat:\n    def __init__(self, name, color):\n        self.name = name\n        self.color = color\n    def describe(self):\n        return f\"{self.name} は {self.color} 色です\"\nprint(Cat(\"ミケ\", \"三毛\").describe())",hints:["class Cat: で定義","__init__ で name, color を保孁E,"describe で f斁E���Eを返す"]}},

{id:"o2",title:"メソチE��を使ぁE��なそう",xp:100,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"method-oop\">メソチE��</span>\n\n<span class=\"term\" data-term=\"class\">クラス</span>の中に定義した<span class=\"term\" data-term=\"function\">関数</span>めEspan class=\"term\" data-term=\"method-oop\">メソチE��</span>と呼びます、En\nオブジェクトに「動き」を持たせます。犬クラスなら「吠える」「お座りする」などの動きです、E},
{type:"code",code:"class Counter:\n    def __init__(self):\n        self.count = 0\n    \n    def add(self):\n        self.count += 1\n    \n    def show(self):\n        print(f\"カウンチE {self.count}\")\n\nc = Counter()\nc.add()\nc.add()\nc.add()\nc.show()",desc:"カウンターをクラスで実裁E},
],exercise:{instruction:"BankAccountクラスを作�E。�E期残髁E、deposit(amount)で入金、show()で「残髁E ○○冁E��と表示、E000冁E�E金して表示、E,initialCode:"# BankAccount\n",expectedOutput:"残髁E 1000冁E,keywords:["class","def","self"],answer:"class BankAccount:\n    def __init__(self):\n        self.balance = 0\n    def deposit(self, amount):\n        self.balance += amount\n    def show(self):\n        print(f\"残髁E {self.balance}冁E")\nacc = BankAccount()\nacc.deposit(1000)\nacc.show()",hints:["__init__ で self.balance = 0","deposit で self.balance += amount","show で残高を表示"]}},

{id:"o3",title:"継承 - 設計図を受け継ぐ",xp:110,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"inheritance\">継承</span>\n\n既存�E<span class=\"term\" data-term=\"class\">クラス</span>を拡張して新しいクラスを作れます、En\n「動物」クラス�E�親�E�から「犬」「猫」クラス�E�子）を作るイメージ。�E通部刁E�E親に書き、特有�E部刁E��け子に書きます、E},
{type:"code",code:"class Animal:\n    def __init__(self, name):\n        self.name = name\n    def speak(self):\n        return \"...\"\n\nclass Dog(Animal):\n    def speak(self):\n        return f\"{self.name}「ワン�E�」\"\n\nclass Cat(Animal):\n    def speak(self):\n        return f\"{self.name}「ニャー�E�」\"\n\nfor a in [Dog(\"ポチ\"), Cat(\"タマ\")]:\n    print(a.speak())",desc:"親クラスを継承して子クラスを作る"},
],exercise:{instruction:"親クラスShape(name)、子クラスCircle(name, radius)を作り、area()で面穁E3.14*r**2)を返す、Eircle(\"冁E",5)のnameと面積を表示、E,initialCode:"# Shape, Circle\n",expectedOutput:"冁En78.5",keywords:["class","def"],answer:"class Shape:\n    def __init__(self, name):\n        self.name = name\nclass Circle(Shape):\n    def __init__(self, name, radius):\n        super().__init__(name)\n        self.radius = radius\n    def area(self):\n        return 3.14 * self.radius ** 2\nc = Circle(\"冁E", 5)\nprint(c.name)\nprint(c.area())",hints:["class Circle(Shape): で継承","super().__init__(name) で親の初期匁E,"3.14 * self.radius ** 2"]}}
]},

// ========== 8. エラーと友達になろう ==========
{id:"py-error",title:"エラーと友達になろう",desc:"エラーメチE��ージの読み方・try/except・チE��チE��のコチE,level:"i",icon:"🛡�E�E,free:true,nextCourse:"py-oop",lessons:[
{id:"e1",title:"エラーメチE��ージを読もう",xp:80,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"error\">エラー</span>は怖くなぁE��\n\nプログラミングで<span class=\"term\" data-term=\"error\">エラー</span>が�Eる�Eは当たり前。�Eロでも毎日エラーを�Eします、En\n大事なのは**エラーメチE��ージを読んで原因を見つける**こと、En\n### よくある<span class=\"term\" data-term=\"error\">エラー</span>\n\n| エラー吁E| 原因 | 侁E|\n|---|---|---|\n| SyntaxError | 書き方の間違ぁE| カチE��忘れ、コロン忘れ |\n| NameError | 未定義の名前 | 変数のスペルミス |\n| TypeError | 型�E不一致 | 斁E���E+数孁E|\n| IndexError | 篁E��夁E| リスト�E篁E��外アクセス |\n| ZeroDivisionError | 0で割っぁE| `10 / 0` |"},
{type:"code",code:"# エラーの例と対処\nname = \"太郎\"\nage = 25\n\n# TypeError を避ける\n# print(\"年齢: \" + age)  # ↁEエラー�E�\nprint(\"年齢: \" + str(age))  # ↁEOK\nprint(f\"年齢: {age}\")       # ↁEもっとOK",desc:"TypeErrorの例と対処況E},
{type:"tip",body:"💡 エラーメチE��ージの**最後�E衁E*が一番重要。何�Eエラーかが書ぁE��あります、E}
],exercise:{instruction:"斁E���E \"100\" と数孁E50 を足して 150 を表示してください�E�型変換を使って�E�、E,initialCode:"# 型変換でエラーを避ける\n",expectedOutput:"150",keywords:["int","print"],answer:"a = \"100\"\nprint(int(a) + 50)",hints:["\"100\" は斁E���Eなので計算できなぁE,"int() で整数に変換","print(int(\"100\") + 50)"]}},

{id:"e2",title:"try/except - エラーをキャチE��",xp:90,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"try\">try</span>/<span class=\"term\" data-term=\"except\">except</span>\n\nエラーが起きそぁE��コードを安�Eに実行できます、En\n```python\ntry:\n    危険なコード\nexcept エラーの種顁E\n    エラー時�E処琁En```\n\nこれにより、�EログラムがクラチE��ュせずに「エラーが起きたけど大丈夫�E�」と続行できます、E},
{type:"code",code:"def safe_divide(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return \"0では割れません\"\n\nprint(safe_divide(10, 3))\nprint(safe_divide(10, 0))",desc:"0除算エラーをキャチE��"},
{type:"tip",body:"💡 <span class=\"term\" data-term=\"try\">try/except</span>は「壊れなぁE�Eログラム」を作る忁E��スキルです！E}
],exercise:{instruction:"[\"10\",\"abc\",\"30\"]をループし、int()変換できた数字�E合計を表示。try/exceptでエラーをスキチE�E、E,initialCode:"# 合計を求める\n",expectedOutput:"40",keywords:["try","except","print"],answer:"total = 0\nfor item in [\"10\", \"abc\", \"30\"]:\n    try:\n        total += int(item)\n    except ValueError:\n        pass\nprint(total)",hints:["total = 0 で初期匁E,"try: total += int(item)","except ValueError: pass でスキチE�E"]}},

{id:"e3",title:"チE��チE��のコチE,xp:90,
content:[
{type:"text",body:"## <span class=\"term\" data-term=\"debug\">チE��チE��</span>の基本チE��ニック\n\n<span class=\"term\" data-term=\"bug\">バグ</span>�E��Eログラムの間違ぁE��を見つけて直すことめEspan class=\"term\" data-term=\"debug\">チE��チE��</span>と言ぁE��す、En\n### チE��ニック1: print斁E��バッグ\n怪しい場所に <span class=\"copyable\">print(変数吁E</span> を�Eれて、中身を確認する。最もシンプルで強力な方法、En\n### チE��ニック2: エラーメチE��ージをよく読む\n最後�E行に原因が書ぁE��ある。行番号も表示される、En\n### チE��ニック3: 小さく試す\n一度にたくさん書かず、少し書ぁE��ら実行して確認、E},
{type:"code",code:"# バグのあるコード\ndef calculate_average(scores):\n    # print(f\"DEBUG: scores = {scores}\")  # チE��チE��用\n    total = sum(scores)\n    count = len(scores)\n    # print(f\"DEBUG: total={total}, count={count}\")\n    return total / count\n\nresult = calculate_average([80, 90, 70])\nprint(f\"平坁E {result}\")",desc:"print斁E��バッグの侁E},
{type:"tip",body:"💡 「動かなぁE��」と思ったら、まずエラーメチE��ージを読む。次にprint斁E��変数の中身を確認。この2スチE��プで9割のバグは見つかります、E}
],exercise:{instruction:"リスチE[10, 20, 30, 40, 50] の平坁E��を計算して表示してください、E,initialCode:"# 平坁E��を計算\n",expectedOutput:"30.0",keywords:["sum","len","print"],answer:"scores = [10, 20, 30, 40, 50]\naverage = sum(scores) / len(scores)\nprint(average)",hints:["sum() でリスト�E合訁E,"len() で要素数","合計÷要素数=平坁E]}}
]},

// ========== 9. エチE��タショートカチE�� マスター ==========
{id:"shortcut-master",title:"エチE��タショートカチE�� マスター",desc:"VS Code (Windows) の忁E��ショートカチE��で作業効玁E0倁E,level:"s",icon:"⌨�E�E,free:true,lessons:[
{id:"sc1",title:"保存�E允E��戻す�EめE��直ぁE,xp:40,
content:[
{type:"text",body:"## まず覚えめEつ\n\nこ�E3つは**すべてのアプリ**で共通です、En\n| 操佁E| ショートカチE�� |\n|---|---|\n| **保孁E* | <span class=\"key\">Ctrl</span>+<span class=\"key\">S</span> |\n| **允E��戻ぁE* | <span class=\"key\">Ctrl</span>+<span class=\"key\">Z</span> |\n| **めE��直ぁE* | <span class=\"key\">Ctrl</span>+<span class=\"key\">Y</span> |\n\nマウスで「ファイル→保存」だと紁E秒、Espan class=\"key\">Ctrl</span>+<span class=\"key\">S</span>なめE.3秒、E日100回保存するなら、年閁E*紁E8時間**の差�E�E},
{type:"tip",body:"💡 コードを書ぁE��ら反封E��に<span class=\"key\">Ctrl</span>+<span class=\"key\">S</span>を押す癖をつけましょぁE��保存忘れによるチE�Eタ消失は初忁E��E�E最大の悲劁E��す、E}
],exercise:{instruction:"変数 shortcut に \"Ctrl+S\" を代入し「保孁E Ctrl+S」と表示してください、E,initialCode:"# ショートカチE��を表示\n",expectedOutput:"保孁E Ctrl+S",keywords:["print"],answer:"shortcut = \"Ctrl+S\"\nprint(f\"保孁E {shortcut}\")",hints:["shortcut = \"Ctrl+S\"","f斁E���Eで表示","print(f\"保孁E {shortcut}\")"]}},

{id:"sc2",title:"カーソル移動と選抁E,xp:40,
content:[
{type:"text",body:"## 高速カーソル移動\n\n| 操佁E| ショートカチE�� |\n|---|---|\n| **行頭へ** | <span class=\"key\">Home</span> |\n| **行末へ** | <span class=\"key\">End</span> |\n| **単語単位で移勁E* | <span class=\"key\">Ctrl</span>+<span class=\"key\">ↁE/span>/<span class=\"key\">ↁE/span> |\n| **ファイル先頭** | <span class=\"key\">Ctrl</span>+<span class=\"key\">Home</span> |\n| **ファイル末尾** | <span class=\"key\">Ctrl</span>+<span class=\"key\">End</span> |\n\n### 選択�E裏技\n\n上�Eどれも、Espan class=\"key\">Shift</span>を同時に押すと**移動しながら選抁E*になります！\n\n侁E <span class=\"key\">Shift</span>+<span class=\"key\">End</span> ↁEカーソル位置から行末まで選抁E},
],exercise:{instruction:"辞書にショートカチE��を格納しループで表示、E\"行頭\":\"Home\", \"行末\":\"End\", \"単語移動\":\"Ctrl+矢印\"}",initialCode:"# ショートカチE��辞書\n",expectedOutput:"行頭: Home\n行末: End\n単語移勁E Ctrl+矢印",keywords:["for","print"],answer:"sc = {\"行頭\": \"Home\", \"行末\": \"End\", \"単語移動\": \"Ctrl+矢印\"}\nfor k, v in sc.items():\n    print(f\"{k}: {v}\")",hints:["辞書を作�E","for k, v in sc.items():","print(f\"{k}: {v}\")"]}},

{id:"sc3",title:"コピ�E・刁E��取り・行操佁E,xp:50,
content:[
{type:"text",body:"## チE��スト操作\n\n| 操佁E| ショートカチE�� |\n|---|---|\n| **コピ�E** | <span class=\"key\">Ctrl</span>+<span class=\"key\">C</span> |\n| **刁E��取り** | <span class=\"key\">Ctrl</span>+<span class=\"key\">X</span> |\n| **貼り付け** | <span class=\"key\">Ctrl</span>+<span class=\"key\">V</span> |\n| **行�E褁E��** | <span class=\"key\">Ctrl</span>+<span class=\"key\">Shift</span>+<span class=\"key\">D</span> |\n| **行�E削除** | <span class=\"key\">Ctrl</span>+<span class=\"key\">Shift</span>+<span class=\"key\">K</span> |\n| **行を丁E下に移勁E* | <span class=\"key\">Alt</span>+<span class=\"key\">ↁE/span>/<span class=\"key\">ↁE/span> |\n\n💡 こ�EエチE��タでめE<span class=\"key\">Ctrl</span>+<span class=\"key\">/</span>�E�コメント）、Espan class=\"key\">Alt</span>+<span class=\"key\">↑�E</span>�E�行移動）が使えます！試してみてね、E},
],exercise:{instruction:"リスチE\"Ctrl+C\",\"Ctrl+X\",\"Ctrl+V\"]を番号付きで表示。、E. Ctrl+C」�Eように、E,initialCode:"# 番号付き表示\n",expectedOutput:"1. Ctrl+C\n2. Ctrl+X\n3. Ctrl+V",keywords:["for","enumerate","print"],answer:"keys = [\"Ctrl+C\", \"Ctrl+X\", \"Ctrl+V\"]\nfor i, k in enumerate(keys, 1):\n    print(f\"{i}. {k}\")",hints:["enumerate(list, 1) で1から番号","for i, k in enumerate(...):","print(f\"{i}. {k}\")"]}},

{id:"sc4",title:"検索・置換�Eマルチカーソル",xp:50,
content:[
{type:"text",body:"## 検索と置換\n\n| 操佁E| ショートカチE�� |\n|---|---|\n| **検索** | <span class=\"key\">Ctrl</span>+<span class=\"key\">F</span> |\n| **置揁E* | <span class=\"key\">Ctrl</span>+<span class=\"key\">H</span> |\n| **全ファイル検索** | <span class=\"key\">Ctrl</span>+<span class=\"key\">Shift</span>+<span class=\"key\">F</span> |\n\n## マルチカーソル�E�最強の時短技�E�\n\n| 操佁E| ショートカチE�� |\n|---|---|\n| **同じ単語を次に選抁E* | <span class=\"key\">Ctrl</span>+<span class=\"key\">D</span> |\n| **同じ単語を全選抁E* | <span class=\"key\">Ctrl</span>+<span class=\"key\">Shift</span>+<span class=\"key\">L</span> |\n| **カーソル追加** | <span class=\"key\">Alt</span>+クリチE�� |\n\n<span class=\"key\">Ctrl</span>+<span class=\"key\">D</span>で変数名を一括変更するのは、最も生産性が上がるテクニックです！E},
],exercise:{instruction:"斁E���E\"user_name, user_age, user_email\"の\"user\"を�Eて\"customer\"に置換して表示、E,initialCode:"# 一括置換\n",expectedOutput:"customer_name, customer_age, customer_email",keywords:["replace","print"],answer:"text = \"user_name, user_age, user_email\"\nprint(text.replace(\"user\", \"customer\"))",hints:["text = \"user_name, ...\"",".replace(\"user\", \"customer\")","print(text.replace(...))"]}},

{id:"sc5",title:"コマンドパレチE��・まとめETOP10",xp:60,
content:[
{type:"text",body:"## コマンドパレチE��\n\n| 操佁E| ショートカチE�� |\n|---|---|\n| **コマンドパレチE��** | <span class=\"key\">Ctrl</span>+<span class=\"key\">Shift</span>+<span class=\"key\">P</span> |\n| **ファイルを開ぁE* | <span class=\"key\">Ctrl</span>+<span class=\"key\">P</span> |\n| **ターミナル開閉** | <span class=\"key\">Ctrl</span>+<span class=\"key\">`</span> |\n| **コメント�E替** | <span class=\"key\">Ctrl</span>+<span class=\"key\">/</span> |\n| **サイドバー** | <span class=\"key\">Ctrl</span>+<span class=\"key\">B</span> |\n\n## 🏆 TOP 10 まとめ\n1. <span class=\"key\">Ctrl</span>+<span class=\"key\">S</span> 保存\n2. <span class=\"key\">Ctrl</span>+<span class=\"key\">Z</span> 允E��戻す\n3. <span class=\"key\">Ctrl</span>+<span class=\"key\">C/X/V</span> コピ�E/刁E��/貼付\n4. <span class=\"key\">Ctrl</span>+<span class=\"key\">D</span> 同じ単語選択\n5. <span class=\"key\">Ctrl</span>+<span class=\"key\">F</span> 検索\n6. <span class=\"key\">Ctrl</span>+<span class=\"key\">H</span> 置換\n7. <span class=\"key\">Ctrl</span>+<span class=\"key\">P</span> ファイルを開く\n8. <span class=\"key\">Ctrl</span>+<span class=\"key\">Shift</span>+<span class=\"key\">P</span> コマンドパレチE��\n9. <span class=\"key\">Ctrl</span>+<span class=\"key\">/</span> コメント�E替\n10. <span class=\"key\">Alt</span>+<span class=\"key\">↑�E</span> 行移勁E},
{type:"tip",body:"💡 1日1つ新しいショートカチE��を意識的に使ぁE��E週間で体に染み込ませましょぁE��覚えたら一生�E時短スキルです！E}
],exercise:{instruction:"TOP10ショートカチE��をリストに格納し、enumerate()で、E. Ctrl+S - 保存」形式で全表示、E,initialCode:"# TOP 10\n",expectedOutput:"1. Ctrl+S - 保存\n2. Ctrl+Z - 允E��戻す\n3. Ctrl+C - コピ�E\n4. Ctrl+X - 刁E��取り\n5. Ctrl+V - 貼り付け\n6. Ctrl+D - 同じ単語選択\n7. Ctrl+F - 検索\n8. Ctrl+H - 置換\n9. Ctrl+P - ファイルを開く\n10. Ctrl+/ - コメント�E替",keywords:["for","enumerate","print"],answer:"top = [(\"Ctrl+S\",\"保存\"),(\"Ctrl+Z\",\"允E��戻す\"),(\"Ctrl+C\",\"コピ�E\"),(\"Ctrl+X\",\"刁E��取り\"),(\"Ctrl+V\",\"貼り付け\"),(\"Ctrl+D\",\"同じ単語選択\"),(\"Ctrl+F\",\"検索\"),(\"Ctrl+H\",\"置換\"),(\"Ctrl+P\",\"ファイルを開く\"),(\"Ctrl+/\",\"コメント�E替\")]\nfor i,(k,d) in enumerate(top,1):\n    print(f\"{i}. {k} - {d}\")",hints:["タプルのリストを作�E","enumerate(top, 1) で番号付き","print(f\"{i}. {k} - {d}\")"]}}
]},

// ========== 10. ミニゲーム (PRO) ==========
{id:"py-game",title:"Pythonでミニゲーム作り",desc:"じゃんけん�E数当て・クイズ。楽しみながら実力アチE�E",level:"i",icon:"🎮",free:false,lessons:[
{id:"g1",title:"じゃんけんゲーム",xp:100,
content:[
{type:"text",body:"## じゃんけんゲームを作ろぁE��\n\nPythonの `random` <span class=\"term\" data-term=\"module\">モジュール</span>を使って、コンピュータにランダムな手を出させます、En\n<span class=\"copyable\">import random</span>\n<span class=\"copyable\">random.choice([\"グー\", \"チョキ\", \"パ�E\"])</span>\n\nこれで、リスト�E中からランダムに1つ選ばれます、E},
{type:"code",code:"import random\n\nhands = [\"グー\", \"チョキ\", \"パ�E\"]\nplayer = \"グー\"\ncomputer = random.choice(hands)\n\nprint(f\"あなぁE {player}\")\nprint(f\"PC: {computer}\")\n\nif player == computer:\n    print(\"引き刁E���E�\")\nelif (player==\"グー\" and computer==\"チョキ\") or \\\n     (player==\"チョキ\" and computer==\"パ�E\") or \\\n     (player==\"パ�E\" and computer==\"グー\"):\n    print(\"あなた�E勝ち�E�\")\nelse:\n    print(\"あなた�E負け…\")",desc:"じゃんけんゲームの全コーチE}
],exercise:{instruction:"random.choice()を使って[\"赤\",\"青\",\"緑\"]からランダムに1つ選んで表示してください、E,initialCode:"import random\n# ランダムに色を選ぶ\n",expectedOutput:"",keywords:["random.choice","print"],answer:"import random\ncolor = random.choice([\"赤\", \"青\", \"緑\"])\nprint(color)",hints:["import random","random.choice([...])","print(color)"]}},

{id:"g2",title:"数当てゲーム",xp:110,
content:[
{type:"text",body:"## 数当てゲーム\n\nコンピュータぁE~100の数字を選び、�Eレイヤーが当てるゲーム、En\n<span class=\"term\" data-term=\"while\">while</span>ループで「当たるまで繰り返す」を実裁E��ます、E},
{type:"code",code:"import random\nanswer = random.randint(1, 10)\n# 簡易版�E�ループなし）\nguess = 5\nif guess == answer:\n    print(\"正解�E�\")\nelif guess < answer:\n    print(\"もっと大きい�E�\")\nelse:\n    print(\"もっと小さぁE��\")\nprint(f\"答えは{answer}でした\")",desc:"数当てゲームの基本ロジチE��"}
],exercise:{instruction:"random.randint(1,10)で数字を生�Eし「答えは○です」と表示してください、E,initialCode:"import random\n# 数を生成して表示\n",expectedOutput:"",keywords:["random.randint","print"],answer:"import random\nnum = random.randint(1, 10)\nprint(f\"答えは{num}です\")",hints:["random.randint(1, 10)","変数に代入","f斁E���Eで表示"]}},

{id:"g3",title:"クイズアプリ",xp:120,
content:[
{type:"text",body:"## クイズアプリを作ろぁEn\n<span class=\"term\" data-term=\"list\">リスチE/span>と<span class=\"term\" data-term=\"dict\">辞書</span>を使って、問題データを管琁E��ます、En\nfor斁E��ループしてスコアを計算します、E},
{type:"code",code:"quizzes = [\n    {\"q\": \"Pythonの作老E�E�E�\", \"a\": \"グイド\"},\n    {\"q\": \"print()は何をする�E�\", \"a\": \"表示\"},\n]\n\nscore = 0\nfor quiz in quizzes:\n    print(quiz[\"q\"])\n    # answer = input()  # ブラウザでは使えなぁE�Eで省略\n    answer = quiz[\"a\"]  # 仮の回答\n    if answer == quiz[\"a\"]:\n        score += 1\nprint(f\"スコア: {score}/{len(quizzes)}\")",desc:"辞書リストでクイズチE�Eタ管琁E}
],exercise:{instruction:"3つの問題�E辞書リストを作り、スコア(正解数)を、E問中3問正解�E�」と表示してください、E,initialCode:"# クイズアプリ\n",expectedOutput:"3問中3問正解�E�E,keywords:["for","print"],answer:"quizzes = [\n    {\"q\": \"1+1=\", \"a\": 2},\n    {\"q\": \"2*3=\", \"a\": 6},\n    {\"q\": \"10//3=\", \"a\": 3}\n]\nscore = 0\nfor q in quizzes:\n    score += 1\nprint(f\"{len(quizzes)}問中{score}問正解�E�\")",hints:["辞書のリストを作�E","forでループしてscore加箁E,"f斁E���Eで結果表示"]}}
]},

// ========== 11. Webスクレイピング (PRO) ==========
{id:"py-scraping",title:"Webスクレイピング入門",desc:"WebからチE�Eタを�E動取得する基礎を学ぼぁE,level:"a",icon:"🌐",free:false,lessons:[
{id:"w1",title:"HTMLの基本を知ろう",xp:100,
content:[
{type:"text",body:"## HTMLとは�E�\n\nWebペ�Eジは**HTML**とぁE��言語で書かれてぁE��す、En\n```\n<h1>タイトル</h1>\n<p>本斁E��ぁE/p>\n<a href=\"url\">リンク</a>\n```\n\nタグ�E�E<>`で囲まれた部刁E��がWebペ�Eジの構造を作ってぁE��す。スクレイピングとは、このHTMLからチE�Eタを取り�Eす技術です、E},
{type:"code",code:"# HTMLをPythonの斁E���Eとして扱ぁE��\nhtml = '<h1>PyMasters</h1><p>Python学習サイチE/p>'\n\n# 簡易的なチE�Eタ抽出\ntitle_start = html.find('<h1>') + 4\ntitle_end = html.find('</h1>')\ntitle = html[title_start:title_end]\nprint(f\"タイトル: {title}\")",desc:"斁E���E操作でHTMLからチE�Eタを取り�Eす概念"}
],exercise:{instruction:"html = '<title>PyMasters</title>' から <title> と </title> の間�E斁E���Eを取り�Eして表示してください、E,initialCode:"html = '<title>PyMasters</title>'\n# タイトルを取り�Eす\n",expectedOutput:"PyMasters",keywords:["find","print"],answer:"html = '<title>PyMasters</title>'\nstart = html.find('<title>') + 7\nend = html.find('</title>')\nprint(html[start:end])",hints:["find() で位置を探ぁE,"<title> は7斁E��E,"スライスで刁E��出ぁE]}},

{id:"w2",title:"チE�Eタ取得�E仕絁E��",xp:110,
content:[
{type:"text",body:"## requestsライブラリ\n\n実際のスクレイピングでは `requests` <span class=\"term\" data-term=\"library\">ライブラリ</span>でWebペ�Eジを取得します、En\n```python\nimport requests\nresponse = requests.get(\"https://example.com\")\nprint(response.text)\n```\n\n※ こ�Eアプリのブラウザ環墁E��は外部通信はできませんが、概念を学びましょぁE��E},
{type:"code",code:"# requestsの使ぁE���E�概念�E�\n# import requests\n# response = requests.get(url)\n# response.status_code  # 200=成功\n# response.text         # HTML全体\n\n# 代わりにシミュレーション\nstatus_code = 200\nif status_code == 200:\n    print(\"ペ�Eジ取得�E功！\")\nelse:\n    print(\"エラー発生\")",desc:"HTTPスチE�Eタスコード�E概念"}
],exercise:{instruction:"変数 status に 404 を代入し、E00なら「�E功」、E04なら「�Eージが見つかりません」、それ以外�E「エラー」と表示、E,initialCode:"# スチE�Eタスコード判定\n",expectedOutput:"ペ�Eジが見つかりません",keywords:["if","elif","print"],answer:"status = 404\nif status == 200:\n    print(\"成功\")\nelif status == 404:\n    print(\"ペ�Eジが見つかりません\")\nelse:\n    print(\"エラー\")",hints:["if status == 200:","elif status == 404:","else: でそ�E仁E]}},

{id:"w3",title:"チE�Eタを抽出しよぁE,xp:120,
content:[
{type:"text",body:"## BeautifulSoupの概念\n\nHTMLを解析するには `BeautifulSoup` <span class=\"term\" data-term=\"library\">ライブラリ</span>を使ぁE��す。文字�E操作より遥かに簡単にチE�Eタを取り�Eせます、En\nここでは斁E���E操作でそ�E基本概念を体験しましょぁE��E},
{type:"code",code:"# HTMLから褁E��のチE�Eタを抽出\nhtml_items = [\n    '<li class=\"item\">りんぁE100冁E/li>',\n    '<li class=\"item\">バナチE200冁E/li>',\n    '<li class=\"item\">みかん 150冁E/li>',\n]\n\nfor item in html_items:\n    start = item.find('>') + 1\n    end = item.find('</li>')\n    text = item[start:end]\n    print(text)",desc:"褁E��アイチE��からチE�Eタ抽出"}
],exercise:{instruction:"HTMLリストからテキストを抽出して表示してください、Enhtml_items = ['<p>Hello</p>', '<p>World</p>', '<p>Python</p>']",initialCode:"html_items = ['<p>Hello</p>', '<p>World</p>', '<p>Python</p>']\n# チE��ストを抽出\n",expectedOutput:"Hello\nWorld\nPython",keywords:["for","print"],answer:"html_items = ['<p>Hello</p>', '<p>World</p>', '<p>Python</p>']\nfor item in html_items:\n    start = item.find('>') + 1\n    end = item.find('</p>')\n    print(item[start:end])",hints:["for item in html_items:","find('>') + 1 で開始位置","find('</p>') で終亁E��置"]}}
]},

// ========== 12. Python自動化 (PRO) ==========
{id:"py-auto",title:"Python自動化入門",desc:"ファイル操作�EチE��スト�E琁E�Eレポ�Eト生成を自動化",level:"a",icon:"🤁E,free:false,lessons:[
{id:"a1",title:"チE��スト�E琁E�E基本",xp:100,
content:[
{type:"text",body:"## チE��スト�E琁E�E自動化\n\nPythonはチE��スト�E琁E��得意です、ESVチE�Eタの整形、ログの解析、テキスト�E変換などが簡単にできます、En\n### 便利な斁E���EメソチE��\n- <span class=\"copyable\">.split(区刁E��斁E��E</span> 斁E���Eを�E割→リスチEn- <span class=\"copyable\">\",\".join(リスチE</span> リストを結合→文字�E\n- <span class=\"copyable\">.strip()</span> 前後�E空白を削除\n- <span class=\"copyable\">.replace(旧, 新)</span> 置揁E},
{type:"code",code:"# CSVチE�Eタの処琁Encsv_line = \"太郁E25,東京\"\nparts = csv_line.split(\",\")\nprint(f\"名前: {parts[0]}\")\nprint(f\"年齢: {parts[1]}\")\nprint(f\"都币E {parts[2]}\")\n\n# リストを結合\nfruits = [\"りんご\", \"バナナ\", \"みかん\"]\nresult = \" / \".join(fruits)\nprint(result)",desc:"split()で刁E��、join()で結合"}
],exercise:{instruction:"\"Python-Java-JavaScript\" めE\"-\" で刁E��し、各言語を1行ずつ表示してください、E,initialCode:"# 斁E���Eを�E割して表示\n",expectedOutput:"Python\nJava\nJavaScript",keywords:["split","for","print"],answer:"text = \"Python-Java-JavaScript\"\nfor lang in text.split(\"-\"):\n    print(lang)",hints:["split(\"-\") で刁E��","for lang in ...:","print(lang)"]}},

{id:"a2",title:"チE�Eタの雁E���E変換",xp:110,
content:[
{type:"text",body:"## チE�Eタの雁E��En\nリストや辞書を使って、データを集計�E変換する方法を学びましょぁE��En\n実務では、売上データの合計、平坁E��最大値/最小値の計算が頻出です、E},
{type:"code",code:"sales = [1200, 3400, 2800, 5100, 1900]\n\nprint(f\"合訁E {sum(sales)}冁E")\nprint(f\"平坁E {sum(sales)//len(sales)}冁E")\nprint(f\"最髁E {max(sales)}冁E")\nprint(f\"最佁E {min(sales)}冁E")\nprint(f\"件数: {len(sales)}件\")",desc:"絁E��込み関数で売上集訁E}
],exercise:{instruction:"scores = [85, 92, 78, 95, 88] の合計、平坁E小数)、最高点を表示してください、E,initialCode:"scores = [85, 92, 78, 95, 88]\n# 雁E��して表示\n",expectedOutput:"合訁E 438\n平坁E 87.6\n最髁E 95",keywords:["sum","max","print"],answer:"scores = [85, 92, 78, 95, 88]\nprint(f\"合訁E {sum(scores)}\")\nprint(f\"平坁E {sum(scores)/len(scores)}\")\nprint(f\"最髁E {max(scores)}\")",hints:["sum() で合訁E,"sum()/len() で平坁E,"max() で最高点"]}},

{id:"a3",title:"レポ�Eト�E動生戁E,xp:120,
content:[
{type:"text",body:"## レポ�Eト�E動生成\n\nチE�Eタを集計し、見やすいレポ�Eトを自動生成する実践例です、En\n褁E��の<span class=\"term\" data-term=\"function\">関数</span>を絁E��合わせて、実用皁E��プログラムを作ります、E},
{type:"code",code:"def generate_report(title, data):\n    print(f\"=== {title} ===\")\n    print(f\"チE�Eタ数: {len(data)}\")\n    print(f\"合訁E {sum(data)}\")\n    print(f\"平坁E {sum(data)/len(data):.1f}\")\n    print(f\"最大: {max(data)}\")\n    print(f\"最封E {min(data)}\")\n    print(\"=\" * 20)\n\ngenerate_report(\"月間売上\", [12000, 34000, 28000, 51000])",desc:"関数でレポ�Eト生成を自動化"}
],exercise:{instruction:"generate_report(title, numbers) 関数を作り、、E== title ===」「合訁E ○」「平坁E ○」を表示してください。generate_report(\"チE��ト結果\", [80,90,70]) を呼び出し、E,initialCode:"# レポ�Eト関数\n",expectedOutput:"=== チE��ト結果 ===\n合訁E 240\n平坁E 80.0",keywords:["def","print","sum"],answer:"def generate_report(title, numbers):\n    print(f\"=== {title} ===\")\n    print(f\"合訁E {sum(numbers)}\")\n    print(f\"平坁E {sum(numbers)/len(numbers)}\")\ngenerate_report(\"チE��ト結果\", [80, 90, 70])",hints:["def generate_report(title, numbers):","sum() と len() で計箁E,"f斁E���Eで整形"]}}
]},

// ========== NEW: じゃんけんゲームを作ろぁE==========
{id:"py-janken",title:"じゃんけんゲームを作ろぁE,desc:"randomモジュールとif斁E��絁E��合わせて、じめE��けんゲームを完�Eさせよう�E�E,level:"b",icon:"🎮",free:true,nextCourse:"py-calc",lessons:[
{id:"jk1",title:"randomモジュールの使ぁE��",xp:60,
content:[
{type:"text",body:"## ランダムに選ぶ - randomモジュール\n\nじゃんけんゲームを作るには、コンピュータに「ランダムに手を選ばせる」忁E��があります�E、En\nPythonには**random**モジュールとぁE��便利な道�E箱が�!=ります。使ぁE��は最初に`import random`と書きます、En\n### random.choice() の使ぁE��\n\n<span class=\"term\" data-term=\"import\">import</span>は「道具箱を開く」とぁE��意味です、En\n`random.choice(リスチE` を使ぁE��、リスト�E中からランダムに1つ選んでくれます、E},
{type:"code",code:"import random\n\nhands = [\"グー\", \"チョキ\", \"パ�E\"]\ncpu_hand = random.choice(hands)\nprint(f\"CPUの扁E {cpu_hand}\")",desc:"random.choice()でリストからランダムに選抁E},
{type:"tip",body:"💡 `random.choice()` は毎回ランダムな結果を返します。実行するたびに変わる�Eで、何度か試してみましょぁE��E}
],exercise:{instruction:"import random を使ぁE��hands = [\"グー\", \"チョキ\", \"パ�E\"] からランダムに1つ選んで「CPUの扁E ○○」と表示してください、En※採点のため random.seed(0) を最初に書ぁE��ください、E,initialCode:"import random\nrandom.seed(0)\n# ここにコードを書ぁE��ね\n",expectedOutput:"CPUの扁E パ�E",keywords:["random.choice","print"],answer:"import random\nrandom.seed(0)\nhands = [\"グー\", \"チョキ\", \"パ�E\"]\ncpu_hand = random.choice(hands)\nprint(f\"CPUの扁E {cpu_hand}\")",hints:["hands = [\"グー\", \"チョキ\", \"パ�E\"] でリスト作�E","random.choice(hands) でランダム選抁E,"f斁E���Eで結果を表示"]}},

{id:"jk2",title:"勝敗判定ロジチE��",xp:70,
content:[
{type:"text",body:"## じゃんけん�E勝敗を判定しよう\n\nプレイヤーの手とCPUの手を比輁E��て、勝ち・負け�Eあいこを判定します、En\nif/elif/elseを使って条件刁E��を絁E��立てましょぁE��En\n### 勝敗のルール\n\n- グー ↁEチョキに勝つ\n- チョキ ↁEパ�Eに勝つ\n- パ�E ↁEグーに勝つ\n- 同じ扁EↁEあいぁE},
{type:"code",code:"player = \"グー\"\ncpu = \"チョキ\"\n\nif player == cpu:\n    print(\"あいこ！\")\nelif (player == \"グー\" and cpu == \"チョキ\") or \\\n     (player == \"チョキ\" and cpu == \"パ�E\") or \\\n     (player == \"パ�E\" and cpu == \"グー\"):\n    print(\"あなた�E勝ち�E�\")\nelse:\n    print(\"あなた�E負け…\")",desc:"if/elif/elseで勝敗判宁E},
{type:"tip",body:"💡 `\\`�E�バチE��スラチE��ュ�E�を行末に書くと、次の行に続けて書けます。長ぁE��件式を見やすくするチE��ニックです、E}
],exercise:{instruction:"player = \"パ�E\"、cpu = \"グー\" として、勝敗を判定して結果を表示してください。「�!=なた�E勝ち�E�」と表示されれ�E正解です、E,initialCode:"player = \"パ�E\"\ncpu = \"グー\"\n# 勝敗判定を書ぁE��ね\n",expectedOutput:"あなた�E勝ち�E�E,keywords:["if","print"],answer:"player = \"パ�E\"\ncpu = \"グー\"\nif player == cpu:\n    print(\"あいこ！\")\nelif (player == \"グー\" and cpu == \"チョキ\") or (player == \"チョキ\" and cpu == \"パ�E\") or (player == \"パ�E\" and cpu == \"グー\"):\n    print(\"あなた�E勝ち�E�\")\nelse:\n    print(\"あなた�E負け…\")",hints:["まぁEplayer == cpu であいこチェチE��","勝つパターンめEor でつなぁE,"else で負けを処琁E]}},

{id:"jk3",title:"勝敗判定を関数にまとめる",xp:80,
content:[
{type:"text",body:"## 関数にまとめよぁEn\n勝敗判定�Eコードを<span class=\"term\" data-term=\"function\">関数</span>にまとめると、何度でも呼び出せて便利です、En\n`judge(player, cpu)` とぁE��関数を作り、結果の斁E���Eを返すようにしましょぁE��En\n### 関数化�EメリチE��\n\n- コードが整琁E��れる\n- 何度でも使ぁE��せる\n- チE��トしめE��ぁE},
{type:"code",code:"def judge(player, cpu):\n    if player == cpu:\n        return \"あいこ\"\n    elif (player == \"グー\" and cpu == \"チョキ\") or \\\n         (player == \"チョキ\" and cpu == \"パ�E\") or \\\n         (player == \"パ�E\" and cpu == \"グー\"):\n        return \"勝ち\"\n    else:\n        return \"負け\"\n\nresult = judge(\"グー\", \"チョキ\")\nprint(result)",desc:"関数にすると使ぁE��しが簡十E},
{type:"tip",body:"💡 `return` で値を返す関数は、結果を変数に入れて後から使えます。printと違って「結果を持ち出せる」�Eが�Eイントです、E}
],exercise:{instruction:"judge(player, cpu) 関数を作り、judge(\"チョキ\", \"パ�E\") の結果を表示してください。勝ちなら「勝ち」と表示、E,initialCode:"# judge関数を定義しよぁEn",expectedOutput:"勝ち",keywords:["def","judge","return","print"],answer:"def judge(player, cpu):\n    if player == cpu:\n        return \"あいこ\"\n    elif (player == \"グー\" and cpu == \"チョキ\") or (player == \"チョキ\" and cpu == \"パ�E\") or (player == \"パ�E\" and cpu == \"グー\"):\n        return \"勝ち\"\n    else:\n        return \"負け\"\nprint(judge(\"チョキ\", \"パ�E\"))",hints:["def judge(player, cpu): で関数定義","return で結果を返す","print(judge(\"チョキ\", \"パ�E\"))"]}},

{id:"jk4",title:"3回勝負を実裁E��よう",xp:90,
content:[
{type:"text",body:"## 3回勝負にしよぁE��\n\nfor斁E��使って3回じめE��けんをし、勝敗をカウントしましょぁE��En\nこれまで学んだ全てを絁E��合わせまぁE\n- randomモジュール\n- if/elif/else\n- for文\n- 関数\n- 変数�E�カウンター�E�E},
{type:"code",code:"import random\n\ndef judge(p, c):\n    if p == c: return \"あいこ\"\n    elif (p==\"グー\" and c==\"チョキ\") or (p==\"チョキ\" and c==\"パ�E\") or (p==\"パ�E\" and c==\"グー\"): return \"勝ち\"\n    else: return \"負け\"\n\nhands = [\"グー\", \"チョキ\", \"パ�E\"]\nwins = 0\nfor i in range(3):\n    cpu = random.choice(hands)\n    player = random.choice(hands)  # 本来はinput()で入力\n    result = judge(player, cpu)\n    print(f\"{i+1}回目: {player} vs {cpu} ↁE{result}\")\n    if result == \"勝ち\": wins += 1\nprint(f\"勝利数: {wins}/3\")",desc:"3回勝負の完�E形"},
{type:"tip",body:"💡 実際のゲームでは `input()` でユーザー入力を受け取りますが、このエチE��タではinput()が使えなぁE��め、random.choice()で代用してぁE��す、E}
],exercise:{instruction:"3回じめE��けんをし、固定�E手！E\"グー\",\"パ�E\",\"チョキ\"]�E�でCPUの手！Eandom.seed(1)使用�E�と勝負して、勝利数を表示してください、E,initialCode:"import random\nrandom.seed(1)\n\ndef judge(p, c):\n    if p == c: return \"あいこ\"\n    elif (p==\"グー\" and c==\"チョキ\") or (p==\"チョキ\" and c==\"パ�E\") or (p==\"パ�E\" and c==\"グー\"): return \"勝ち\"\n    else: return \"負け\"\n\nhands = [\"グー\", \"チョキ\", \"パ�E\"]\nmy_hands = [\"グー\", \"パ�E\", \"チョキ\"]\nwins = 0\n# 3回ループで勝負して勝利数を表示\n",expectedOutput:"1回目: グー vs チョキ ↁE勝ち\n2回目: パ�E vs パ�E ↁEあいこ\n3回目: チョキ vs グー ↁE負け\n勝利数: 1/3",keywords:["for","judge","print"],answer:"import random\nrandom.seed(1)\n\ndef judge(p, c):\n    if p == c: return \"あいこ\"\n    elif (p==\"グー\" and c==\"チョキ\") or (p==\"チョキ\" and c==\"パ�E\") or (p==\"パ�E\" and c==\"グー\"): return \"勝ち\"\n    else: return \"負け\"\n\nhands = [\"グー\", \"チョキ\", \"パ�E\"]\nmy_hands = [\"グー\", \"パ�E\", \"チョキ\"]\nwins = 0\nfor i in range(3):\n    cpu = random.choice(hands)\n    player = my_hands[i]\n    result = judge(player, cpu)\n    print(f\"{i+1}回目: {player} vs {cpu} ↁE{result}\")\n    if result == \"勝ち\": wins += 1\nprint(f\"勝利数: {wins}/3\")",hints:["for i in range(3): で3回ルーチE,"my_hands[i] でプレイヤーの手を取征E,"wins += 1 で勝利数カウンチE]}}
]},

// ========== NEW: Pythonで電卓を作ろぁE==========
{id:"py-calc",title:"Pythonで電卓を作ろぁE,desc:"四則演算�E関数作�Eからエラーハンドリングまで、実用皁E��電卓を完�Eさせよう",level:"b",icon:"🔢",free:true,nextCourse:"py-data-auto",lessons:[
{id:"ca1",title:"四則演算�E関数を作る",xp:60,
content:[
{type:"text",body:"## 電卓�E基本 - 四則演算関数\n\n電卓�E基本は足し算�E引き算�E掛け算�E割り算です、En\nそれぞれめEspan class=\"term\" data-term=\"function\">関数</span>にしましょぁE��En\n### なぜ関数にする�E�\n\n`10 + 5` と直接書ぁE��もいぁE��すが、E��数にすると:\n- 後から機�Eを追加しやすい�E�エラーチェチE��等）\n- コードが整琁E��れる\n- チE��トしめE��ぁE},
{type:"code",code:"def add(a, b):\n    return a + b\n\ndef sub(a, b):\n    return a - b\n\ndef mul(a, b):\n    return a * b\n\ndef div(a, b):\n    return a / b\n\nprint(add(10, 5))\nprint(sub(10, 5))\nprint(mul(10, 5))\nprint(div(10, 5))",desc:"4つの計算関数"},
{type:"tip",body:"💡 関数名�E短くてわかりやすいも�EにしましょぁE��add, sub, mul, div は「足す、引く、掛ける、割る」�E英語略です、E}
],exercise:{instruction:"add(a,b)、sub(a,b)、mul(a,b)、div(a,b) の4つの関数を定義し、それぞめE(10, 3) で呼び出して結果を表示してください、E,initialCode:"# 4つの計算関数を作ろぁEn",expectedOutput:"13\n7\n30\n3.3333333333333335",keywords:["def","return","print"],answer:"def add(a, b):\n    return a + b\ndef sub(a, b):\n    return a - b\ndef mul(a, b):\n    return a * b\ndef div(a, b):\n    return a / b\nprint(add(10, 3))\nprint(sub(10, 3))\nprint(mul(10, 3))\nprint(div(10, 3))",hints:["def add(a, b): return a + b","4つの関数を定義","print(add(10, 3)) で呼び出ぁE]}},

{id:"ca2",title:"計算を選択して実行すめE,xp:70,
content:[
{type:"text",body:"## 演算�E選択と実行\n\n電卓アプリでは、ユーザーが「どの計算をしたぁE��」を選択します、En\n`calculate(op, a, b)` とぁE��関数を作り、演算子！E+`, `-`, `*`, `/`�E�に応じて正しい計算を実行しましょぁE��En\n### if/elifを使った�E岐\n\n演算子�E斁E���Eを判定して、対応する計算を行います、E},
{type:"code",code:"def calculate(op, a, b):\n    if op == \"+\":\n        return a + b\n    elif op == \"-\":\n        return a - b\n    elif op == \"*\":\n        return a * b\n    elif op == \"/\":\n        return a / b\n    else:\n        return \"不�Eな演算子です\"\n\nprint(calculate(\"+\", 15, 3))\nprint(calculate(\"*\", 15, 3))",desc:"演算子で刁E��する計算関数"},
{type:"tip",body:"💡 `else` で「想定外�E入力」に対応する�Eは、丈夫なプログラムを作るコチE��す、E}
],exercise:{instruction:"calculate(op, a, b) 関数を作り、以下�E4つの計算結果を表示してください:\n(+, 20, 8), (-, 20, 8), (*, 20, 8), (/, 20, 8)",initialCode:"# calculate関数を作ろぁEn",expectedOutput:"28\n12\n160\n2.5",keywords:["def","calculate","return","print"],answer:"def calculate(op, a, b):\n    if op == \"+\":\n        return a + b\n    elif op == \"-\":\n        return a - b\n    elif op == \"*\":\n        return a * b\n    elif op == \"/\":\n        return a / b\nprint(calculate(\"+\", 20, 8))\nprint(calculate(\"-\", 20, 8))\nprint(calculate(\"*\", 20, 8))\nprint(calculate(\"/\", 20, 8))",hints:["if op == \"+\": で演算子チェチE��","elif で吁E��算子を刁E��E,"4囁Eprint(calculate(...)) で呼び出ぁE]}},

{id:"ca3",title:"エラーハンドリング",xp:80,
content:[
{type:"text",body:"## エラーに備えよう\n\n電卓で一番多いエラーは**ゼロ除箁E*です、En\n`10 / 0` はPythonでエラーになります。try/exceptで安�Eに処琁E��ましょぁE��En\n### try/except の使ぁE��\n\n```python\ntry:\n    # エラーが起きるかもしれなぁE�E琁Enexcept エラーの種顁E\n    # エラー時�E処琁En```"},
{type:"code",code:"def safe_div(a, b):\n    try:\n        return a / b\n    except ZeroDivisionError:\n        return \"エラー: 0で割ることはできません\"\n\nprint(safe_div(10, 3))\nprint(safe_div(10, 0))",desc:"try/exceptでゼロ除算を安�Eに処琁E},
{type:"tip",body:"💡 `try/except` はプロのプログラマ�Eが忁E��使ぁE��クニックです。「落ちなぁE�Eログラム」を作る第一歩�E�E}
],exercise:{instruction:"safe_calculate(op, a, b) 関数を作ってください。ゼロ除算時は「エラー: 0で割れません」と返す。以下�EチE��トで確誁E\nsafe_calculate(\"/\", 10, 0) と safe_calculate(\"/\", 10, 2)",initialCode:"# 安�Eな計算関数\n",expectedOutput:"エラー: 0で割れません\n5.0",keywords:["def","try","except","return"],answer:"def safe_calculate(op, a, b):\n    try:\n        if op == \"+\": return a + b\n        elif op == \"-\": return a - b\n        elif op == \"*\": return a * b\n        elif op == \"/\": return a / b\n    except ZeroDivisionError:\n        return \"エラー: 0で割れません\"\nprint(safe_calculate(\"/\", 10, 0))\nprint(safe_calculate(\"/\", 10, 2))",hints:["try: の中に計算�E琁E��書ぁE,"except ZeroDivisionError: でキャチE��","エラー時�E斁E���EめEreturn"]}},

{id:"ca4",title:"計算履歴をリストで管琁E,xp:90,
content:[
{type:"text",body:"## 計算履歴を保存しよう\n\n電卓に計算履歴機�EをつけましょぁE��\n\nリストを使って、計算�Eた�Eに結果を追加してぁE��ます、En\n### リスト�E append()\n\n`history = []` で空のリストを作り、`history.append(値)` で追加します、E},
{type:"code",code:"history = []\n\ndef calc_with_history(op, a, b):\n    if op == \"+\": result = a + b\n    elif op == \"-\": result = a - b\n    elif op == \"*\": result = a * b\n    elif op == \"/\": result = a / b\n    record = f\"{a} {op} {b} = {result}\"\n    history.append(record)\n    return result\n\ncalc_with_history(\"+\", 10, 5)\ncalc_with_history(\"*\", 3, 7)\ncalc_with_history(\"-\", 100, 42)\n\nprint(\"=== 計算履歴 ===\")\nfor h in history:\n    print(h)",desc:"リストで計算履歴を管琁E},
{type:"tip",body:"💡 `append()` はリスト�E末尾に要素を追加するメソチE��です。計算�Eた�Eに履歴が増えてぁE��ます！E}
],exercise:{instruction:"calc_with_history(op, a, b) を作り、Eつの計箁E(+,5,3), (*,4,6), (-,10,2) を実行後、、E== 計算履歴 ===」�E後に履歴を表示してください、E,initialCode:"history = []\n# calc_with_history関数を作ろぁEn",expectedOutput:"=== 計算履歴 ===\n5 + 3 = 8\n4 * 6 = 24\n10 - 2 = 8",keywords:["def","append","history","print"],answer:"history = []\ndef calc_with_history(op, a, b):\n    if op == \"+\": result = a + b\n    elif op == \"-\": result = a - b\n    elif op == \"*\": result = a * b\n    elif op == \"/\": result = a / b\n    history.append(f\"{a} {op} {b} = {result}\")\n    return result\ncalc_with_history(\"+\", 5, 3)\ncalc_with_history(\"*\", 4, 6)\ncalc_with_history(\"-\", 10, 2)\nprint(\"=== 計算履歴 ===\")\nfor h in history:\n    print(h)",hints:["history.append(f\"{a} {op} {b} = {result}\")","3囁Ecalc_with_history() を呼ぶ","for h in history: print(h)"]}}
]},

// ========== NEW: チE�Eタ自動集訁E==========
{id:"py-data-auto",title:"チE�Eタ自動集訁E,desc:"CSVチE�Eタの解析�E雁E���EカチE��リ別刁E��。実務で使えるチE�Eタ処琁E��学ぼぁE,level:"i",icon:"📊",free:true,lessons:[
{id:"da1",title:"CSVチE�Eタをリストに変換",xp:80,
content:[
{type:"text",body:"## チE�Eタの読み込み\n\n実務では、CSVファイル�E�カンマ区刁E��チE��スト）からデータを読むことが多いです、En\nここでは斁E���EとしてCSVチE�Eタを扱ぁE��リストに変換する方法を学びます、En\n### split() で刁E��\n\n`\"a,b,c\".split(\",\")` ↁE`[\"a\", \"b\", \"c\"]`\n\n行ごとに刁E��し、さらにカンマで刁E��すれば、E次允E��スト（表�E�になります、E},
{type:"code",code:"csv_data = \"名前,数学,英誁E琁E��\\n太郁E85,72,90\\n花孁E92,88,78\\n次郁E68,95,82\"\n\nrows = csv_data.split(\"\\n\")\nheader = rows[0].split(\",\")\nprint(f\"列名: {header}\")\n\nfor row in rows[1:]:\n    cols = row.split(\",\")\n    print(f\"{cols[0]}: 数学{cols[1]}点\")",desc:"斁E���EのCSVチE�Eタをsplit()で解极E},
{type:"tip",body:"💡 `rows[1:]` は、E番目以降�E全要素」を取得するスライスです。�EチE��行をスキチE�Eするのによく使ぁE��す！E}
],exercise:{instruction:"csv_data = \"品名,個数,単価\\nりんぁE5,120\\nバナチE8,80\\nみかん,12,60\" を解析し、各行を「○◁E △個」�E形式で表示してください、E,initialCode:"csv_data = \"品名,個数,単価\\nりんぁE5,120\\nバナチE8,80\\nみかん,12,60\"\n# CSVチE�Eタを解析しよう\n",expectedOutput:"りんぁE 5個\nバナチE 8個\nみかん: 12倁E,keywords:["split","for","print"],answer:"csv_data = \"品名,個数,単価\\nりんぁE5,120\\nバナチE8,80\\nみかん,12,60\"\nrows = csv_data.split(\"\\n\")\nfor row in rows[1:]:\n    cols = row.split(\",\")\n    print(f\"{cols[0]}: {cols[1]}個\")",hints:["csv_data.split(\"\\n\") で行�E割","rows[1:] でヘッダをスキチE�E","cols = row.split(\",\") で列�E割"]}},

{id:"da2",title:"合計�E平坁E�E最大・最封E,xp:90,
content:[
{type:"text",body:"## チE�Eタの雁E��関数\n\n数値チE�Eタを集計する関数を作りましょぁE��En\nPythonの絁E��込み関数が便利でぁE\n- `sum(list)` - 合訁En- `len(list)` - 要素数\n- `max(list)` - 最大値\n- `min(list)` - 最小値\n\n平坁E�E `sum(list) / len(list)` で計算します、E},
{type:"code",code:"def summarize(name, data):\n    print(f\"--- {name} ---\")\n    print(f\"合訁E {sum(data)}\")\n    print(f\"平坁E {sum(data)/len(data):.1f}\")\n    print(f\"最大: {max(data)}\")\n    print(f\"最封E {min(data)}\")\n\nscores = [85, 92, 68, 78, 95]\nsummarize(\"チE��ト結果\", scores)",desc:"絁E��込み関数で統計値を計箁E},
{type:"tip",body:"💡 `:.1f` は小数点以丁E桁に丸めるフォーマットです。`.2f` なめE桁になります、E}
],exercise:{instruction:"summarize(name, data) 関数を作り、sales = [12000, 34000, 28000, 51000, 19000] に対して、E-- 月間売丁E---」「合訁E ○」「平坁E ○」「最大: ○」「最封E ○」を表示、E,initialCode:"# 雁E��関数を作ろぁEnsales = [12000, 34000, 28000, 51000, 19000]\n",expectedOutput:"--- 月間売丁E---\n合訁E 144000\n平坁E 28800.0\n最大: 51000\n最封E 12000",keywords:["def","sum","max","min","print"],answer:"def summarize(name, data):\n    print(f\"--- {name} ---\")\n    print(f\"合訁E {sum(data)}\")\n    print(f\"平坁E {sum(data)/len(data)}\")\n    print(f\"最大: {max(data)}\")\n    print(f\"最封E {min(data)}\")\nsales = [12000, 34000, 28000, 51000, 19000]\nsummarize(\"月間売上\", sales)",hints:["def summarize(name, data):","sum(), len(), max(), min() を使ぁE,"f斁E���EでフォーマッチE]}},

{id:"da3",title:"カチE��リ別に雁E��すめE,xp:100,
content:[
{type:"text",body:"## 辞書を使ったカチE��リ別雁E��En\nチE�EタをカチE��リ�E�グループ）ごとに刁E��て雁E��するには、Espan class=\"term\" data-term=\"dict\">辞書</span>が便利です、En\n### パターン: カチE��リ別にリストを作る\n\n```python\ncategories = {}\nfor item in data:\n    cat = item[\"category\"]\n    if cat not in categories:\n        categories[cat] = []\n    categories[cat].append(item[\"value\"])\n```\n\nこれで吁E��チE��リに値のリストが雁E��ります、E},
{type:"code",code:"data = [\n    (\"食品\", 500), (\"日用品\", 300),\n    (\"食品\", 800), (\"衣類\", 2000),\n    (\"日用品\", 150), (\"食品\", 1200)\n]\n\ncategories = {}\nfor cat, val in data:\n    if cat not in categories:\n        categories[cat] = []\n    categories[cat].append(val)\n\nfor cat, vals in categories.items():\n    print(f\"{cat}: 合訁Esum(vals)}冁E({len(vals)}件)\")",desc:"タプルリストを辞書でカチE��リ雁E��E},
{type:"tip",body:"💡 `for cat, val in data:` はタプルのアンパック�E��E解代入�E�です、E\"食品\", 500) ぁEcat=\"食品\", val=500 に刁E��れます、E}
],exercise:{instruction:"sales = [(\"A店\",100),(\"B店\",200),(\"A店\",150),(\"B店\",300),(\"A店\",250)] を店�E別に雁E��し、各店�Eの合計を表示してください、E,initialCode:"sales = [(\"A店\",100),(\"B店\",200),(\"A店\",150),(\"B店\",300),(\"A店\",250)]\n# 店�E別に雁E��しよう\n",expectedOutput:"A庁E 合訁E00冁EnB庁E 合訁E00冁E,keywords:["for","if","print","sum"],answer:"sales = [(\"A店\",100),(\"B店\",200),(\"A店\",150),(\"B店\",300),(\"A店\",250)]\nshops = {}\nfor shop, val in sales:\n    if shop not in shops:\n        shops[shop] = []\n    shops[shop].append(val)\nfor shop, vals in shops.items():\n    print(f\"{shop}: 合訁Esum(vals)}冁E")",hints:["辞書 shops = {} で店�Eごとにリスト管琁E,"if shop not in shops: で初期匁E,"shops.items() でループして合計表示"]}},

{id:"da4",title:"結果をフォーマットして表示",xp:100,
content:[
{type:"text",body:"## f斁E���Eで表絁E��風出力\n\n雁E��結果を見やすく整形して表示しましょぁE��En\nf斁E���Eの**幁E��宁E*を使ぁE��、テキストを揁E��て表示できます、En\n### 幁E��定�E書き方\n\n- `{name:<10}` : 左寁E��、幁E0斁E��\n- `{value:>8}` : 右寁E��、幁E斁E��\n- `{price:>8,}` : 右寁E��、E桁区刁E��\n- `{rate:>6.1f}` : 右寁E��、小数1桁E},
{type:"code",code:"data = {\"りんご\": 1500, \"バナナ\": 800, \"みかん\": 2400, \"ぶどぁE": 3200}\ntotal = sum(data.values())\n\nprint(f\"{'品名':<8}{'売丁E:>8}{'構�E毁E:>8}\")\nprint(\"-\" * 24)\nfor name, val in data.items():\n    ratio = val / total * 100\n    print(f\"{name:<8}{val:>8,}{ratio:>7.1f}%\")\nprint(\"-\" * 24)\nprint(f\"{'合訁E:<8}{total:>8,}\")",desc:"f斁E���Eで表絁E��風レポ�EチE},
{type:"tip",body:"💡 `{val:>8,}` の `,` は3桁区刁E��のカンマです。大きな数字が読みめE��くなります！E}
],exercise:{instruction:"items = {\"啁E��A\": 4500, \"啁E��B\": 3200, \"啁E��C\": 7800} の売上レポ�Eトを作�E。�EチE��「品吁E     売上」、区刁E��線、各啁E��、区刁E��線、合計を表示してください、E,initialCode:"items = {\"啁E��A\": 4500, \"啁E��B\": 3200, \"啁E��C\": 7800}\n# 表絁E��風レポ�Eトを作ろぁEn",expectedOutput:"品名      売上\n----------\n啁E��A     4500\n啁E��B     3200\n啁E��C     7800\n----------\n合訁E    15500",keywords:["for","print","sum"],answer:"items = {\"啁E��A\": 4500, \"啁E��B\": 3200, \"啁E��C\": 7800}\nprint(f\"{'品名':<6}{'売丁E:>8}\")\nprint(\"-\" * 10)\nfor name, val in items.items():\n    print(f\"{name:<6}{val:>8}\")\nprint(\"-\" * 10)\nprint(f\"{'合訁E:<6}{sum(items.values()):>8}\")",hints:["f\"{name:<6}{val:>8}\" で幁E��宁E,"sum(items.values()) で合訁E,"- * 10 で区刁E��緁E]}}
]}
];
