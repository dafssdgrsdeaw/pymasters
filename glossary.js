// ============================================================
// PyMasters - プログラミング用語グロッサリー
// 初心者向け・ビジュアルな用語解説データ
// ============================================================

const GLOSSARY = {

  // ========================================
  //  基本概念
  // ========================================

  "print": {
    term: "print（プリント）",
    short: "画面に文字を表示する",
    detail: "🖨️ <strong>print</strong>は、画面に文字や数字を表示する命令です。<br><br>テレビのリモコンで「電源ON」を押すと画面がつくように、<code>print()</code> を書くとパソコンの画面に文字が出ます。<br>カッコ <code>()</code> の中に表示したいものを入れるだけ！<br><br>プログラミングの第一歩は、まず <code>print(\"Hello!\")</code> から始まります。",
    example: "print(\"こんにちは！\")\nprint(100)\nprint(\"私の名前は\", \"太郎\")",
    related: ["f-string", "str", "function"]
  },

  "variable": {
    term: "変数（へんすう）",
    short: "データを入れる箱",
    detail: "📦 <strong>変数</strong>は、データに名前をつけて保存する「箱」です。<br><br>たとえば、お菓子箱に「チョコ」と書いて中にチョコを入れるのと同じ。<br>プログラムでは <code>name = \"太郎\"</code> のように書いて、<code>name</code> という箱に「太郎」を入れます。<br><br>箱の中身はいつでも入れ替えられます！",
    example: "name = \"太郎\"\nage = 20\nprint(name)",
    related: ["assignment", "data-type", "scope"]
  },

  "assignment": {
    term: "代入（だいにゅう）",
    short: "箱にデータを入れる",
    detail: "📥 <strong>代入</strong>は、変数（箱）にデータを入れる操作です。<br><br><code>=</code> は「等しい」ではなく「右のものを左の箱に入れる」という意味！<br>たとえば <code>x = 10</code> は「xという箱に10を入れる」ということ。<br><br>数学の「=」とは意味が違うので注意してね。",
    example: "x = 10        # xに10を代入\nx = x + 5     # xの中身を5増やす\nprint(x)      # 15と表示される",
    related: ["variable", "operator", "expression"]
  },

  "data-type": {
    term: "データ型（データがた）",
    short: "データの種類のこと",
    detail: "🏷️ <strong>データ型</strong>は、データの種類を表します。<br><br>現実世界でも「数字」「文字」「Yes/No」は違う種類ですよね？<br>Pythonも同じで、<code>int</code>（整数）、<code>str</code>（文字列）、<code>bool</code>（真偽値）などの型があります。<br><br><code>type()</code> 関数で、データが何型か調べられます！",
    example: "print(type(42))       # <class 'int'>\nprint(type(\"hello\"))  # <class 'str'>\nprint(type(True))     # <class 'bool'>",
    related: ["int", "str", "float", "bool", "type-conversion"]
  },

  "int": {
    term: "int / 整数型（せいすうがた）",
    short: "小数点なしの数",
    detail: "🔢 <strong>int</strong>は、小数点のない数のことです。<br><br><code>1</code>, <code>100</code>, <code>-5</code>, <code>0</code> など、ぴったりした数が整数です。<br>「りんごが3個」のように数えられるもののイメージ。<br><br>計算もバッチリできます！ <code>+</code> <code>-</code> <code>*</code> <code>/</code> を使おう。",
    example: "count = 10\nnegative = -3\nresult = count + negative\nprint(result)   # 7",
    related: ["float", "data-type", "operator"]
  },

  "float": {
    term: "float / 浮動小数点型",
    short: "小数点ありの数",
    detail: "🔢 <strong>float</strong>は、小数点のある数のことです。<br><br><code>3.14</code>, <code>0.5</code>, <code>-2.7</code> のように、小数点「.」が入った数。<br>体温 <code>36.5</code> 度や、お金 <code>100.50</code> 円のイメージです。<br><br>intとfloatを計算すると、結果はfloatになります。",
    example: "pi = 3.14\ntemp = 36.5\nresult = 10 / 3    # 3.333...\nprint(type(result)) # <class 'float'>",
    related: ["int", "data-type", "type-conversion"]
  },

  "str": {
    term: "str / 文字列（もじれつ）",
    short: "文字のデータ",
    detail: "📝 <strong>str（文字列）</strong>は、文字のかたまりです。<br><br>文字列は必ず <code>\"</code> か <code>'</code> で囲みます。<br><code>\"Hello\"</code>、<code>'こんにちは'</code> のように書きます。<br><br>文字列は足し算もできます！ <code>\"Hello\" + \" World\"</code> → <code>\"Hello World\"</code><br>ビーズをつなげるネックレスのイメージ 📿",
    example: "greeting = \"こんにちは\"\nname = '太郎'\nmessage = greeting + name\nprint(message)  # こんにちは太郎",
    related: ["f-string", "data-type", "index"]
  },

  "bool": {
    term: "bool / ブール型（真偽値）",
    short: "TrueかFalseだけ",
    detail: "✅❌ <strong>bool</strong>は、<code>True</code>（はい）か <code>False</code>（いいえ）の2つだけの型です。<br><br>電気のスイッチ🔘がONかOFFかと同じ。<br><code>3 > 1</code> は <code>True</code>、<code>5 == 10</code> は <code>False</code> です。<br><br>if文の条件判断に大活躍します！",
    example: "is_sunny = True\nis_raining = False\nprint(3 > 1)      # True\nprint(10 == 20)   # False",
    related: ["condition", "comparison", "if", "logical"]
  },

  "type-conversion": {
    term: "型変換（かたへんかん）",
    short: "データの型を変える",
    detail: "🔄 <strong>型変換</strong>は、データの型を別の型に変えることです。<br><br>お水（液体）を冷凍庫で氷（固体）にするようなもの。<br><code>int(\"10\")</code> で文字列の\"10\"を整数の10に変えたり、<code>str(100)</code> で数字を文字列に変えたりできます。<br><br>入力（input）は必ず文字列なので、計算したいときは型変換が必要！",
    example: "age_str = \"20\"          # 文字列\nage_num = int(age_str)  # 整数に変換\nprint(age_num + 5)      # 25\nprint(str(100))         # \"100\"",
    related: ["int", "str", "float", "data-type"]
  },

  "f-string": {
    term: "f文字列（エフもじれつ）",
    short: "変数を埋め込む文字列",
    detail: "✨ <strong>f文字列</strong>は、文字列の中に変数を直接埋め込める便利な書き方です。<br><br>手紙のテンプレートで「○○様」の○○に名前を入れるイメージ。<br>文字列の前に <code>f</code> をつけて、埋め込みたい変数を <code>{}</code> で囲みます。<br><br>Python 3.6 以降で使える、超便利な機能です！",
    example: "name = \"太郎\"\nage = 20\nprint(f\"名前: {name}\")\nprint(f\"{name}は{age}歳です\")\nprint(f\"来年は{age + 1}歳\")",
    related: ["str", "print", "variable"]
  },

  "operator": {
    term: "演算子（えんざんし）",
    short: "計算や比較の記号",
    detail: "➕ <strong>演算子</strong>は、計算・比較・論理判断をするための記号です。<br><br>算数で使う <code>+</code> <code>-</code> と同じ仲間！<br>計算：<code>+</code> <code>-</code> <code>*</code> <code>/</code> <code>//</code> <code>%</code> <code>**</code><br>比較：<code>==</code> <code>!=</code> <code>&lt;</code> <code>&gt;</code><br>論理：<code>and</code> <code>or</code> <code>not</code><br><br>これらを組み合わせて複雑な処理を書きます。",
    example: "print(10 + 3)    # 13（足し算）\nprint(10 ** 2)   # 100（べき乗）\nprint(10 % 3)    # 1（あまり）\nprint(10 == 10)  # True（比較）",
    related: ["comparison", "logical", "expression"]
  },

  "expression": {
    term: "式（しき）",
    short: "値を生み出すコード",
    detail: "🧮 <strong>式</strong>は、計算されて「値」になるコードの部分です。<br><br>数学の式 <code>1 + 2</code> が「3」という値を生むのと同じ。<br><code>3 * 5</code>、<code>\"Hello\" + \" World\"</code>、<code>x > 10</code> などはすべて式です。<br><br>式は値を返す、文（statement）は命令する、という違いがあります。",
    example: "# これらはすべて「式」\n1 + 2           # → 3\n\"Hi\" * 3        # → \"HiHiHi\"\nlen(\"hello\")    # → 5\nx > 10          # → True or False",
    related: ["statement", "operator", "variable"]
  },

  "statement": {
    term: "文（ぶん）",
    short: "実行する命令の1行",
    detail: "📋 <strong>文（ステートメント）</strong>は、Pythonに「これをやって！」と伝える命令です。<br><br>レシピの手順1つ1つのようなもの。<br><code>x = 10</code>（代入文）、<code>print(\"Hello\")</code>（関数呼び出し）、<code>if x > 5:</code>（if文）などがあります。<br><br>プログラムは文を上から順番に実行します。",
    example: "# 3つの「文」\nx = 10          # 代入文\nprint(x)        # 式文（関数呼び出し）\nif x > 5:       # if文\n    print(\"大きい\")",
    related: ["expression", "indent", "block"]
  },

  "comment": {
    term: "コメント",
    short: "プログラムのメモ書き",
    detail: "💬 <strong>コメント</strong>は、プログラムの中に書くメモ書きです。Pythonは無視します。<br><br>教科書の余白にメモを書くのと同じ！<br><code>#</code> のあとに書いた部分がコメントになります。<br><br>「なぜこう書いたか」を残しておくと、後で見返したとき自分を助けてくれます。",
    example: "# ここはコメント（実行されない）\nname = \"太郎\"  # 名前を保存\n\n# 合計を計算する\ntotal = 100 + 200",
    related: ["docstring", "pep8", "syntax"]
  },

  "docstring": {
    term: "docstring（ドックストリング）",
    short: "関数やクラスの説明文",
    detail: "📖 <strong>docstring</strong>は、関数やクラスの先頭に書く説明文です。<br><br>お菓子のパッケージの裏にある「原材料表示」のようなもの。<br>三重引用符 <code>\"\"\"...\"\"\"</code> で囲んで書きます。<br><br>コメントと違い、<code>help()</code> 関数で読み出せるので、使い方の説明に最適！",
    example: "def greet(name):\n    \"\"\"名前を受け取って挨拶を表示する\"\"\"\n    print(f\"こんにちは、{name}さん！\")\n\nhelp(greet)  # docstringが表示される",
    related: ["comment", "function", "class"]
  },

  // ========================================
  //  制御構造
  // ========================================

  "if": {
    term: "if文（イフぶん）",
    short: "条件で処理を分ける",
    detail: "🚦 <strong>if文</strong>は、「もし〜なら」と条件によって処理を分ける仕組みです。<br><br>信号機🚦と同じ！ 青なら進む、赤なら止まる。<br><code>if</code> のあとに条件を書き、<code>:</code>（コロン）で終えます。<br>条件に合う場合だけ、インデント（字下げ）した部分が実行されます。",
    example: "age = 18\nif age >= 18:\n    print(\"大人です\")\nelse:\n    print(\"子どもです\")",
    related: ["elif", "else", "condition", "indent"]
  },

  "elif": {
    term: "elif（エリフ）",
    short: "追加の条件分岐",
    detail: "🔀 <strong>elif</strong>は、「そうじゃなくて、もし〜なら」という追加の条件分岐です。<br><br>テストの点数で言うと：90点以上→A、80点以上→B、それ以外→C のように、複数の条件を順番にチェックします。<br><br><code>elif</code> は <code>else if</code> の短縮形。何個でも書けます！",
    example: "score = 85\nif score >= 90:\n    print(\"A\")\nelif score >= 80:\n    print(\"B\")\nelif score >= 70:\n    print(\"C\")\nelse:\n    print(\"D\")",
    related: ["if", "else", "condition"]
  },

  "else": {
    term: "else（エルス）",
    short: "どれにも当てはまらない時",
    detail: "🔚 <strong>else</strong>は、if や elif のどの条件にも当てはまらなかったときに実行される部分です。<br><br>「それ以外は全部こうする」という意味。<br>自動販売機で、お金が足りないとき→「お金が足りません」と表示するのと同じ。<br><br>elseは省略できますが、書いておくと安心です。",
    example: "weather = \"雨\"\nif weather == \"晴れ\":\n    print(\"公園に行こう\")\nelse:\n    print(\"家で遊ぼう\")",
    related: ["if", "elif", "condition"]
  },

  "for": {
    term: "for文（フォーぶん）",
    short: "決まった回数くり返す",
    detail: "🔄 <strong>for文</strong>は、リストや範囲の中身を1つずつ取り出して処理する繰り返しです。<br><br>出席簿📋で名前を一人ずつ呼ぶようなもの。<br><code>for 名前 in リスト:</code> と書くと、リストの中身が順番に「名前」に入ります。<br><br><code>range()</code> と組み合わせると回数指定の繰り返しもできる！",
    example: "# リストの要素を1つずつ表示\nfruits = [\"りんご\", \"バナナ\", \"みかん\"]\nfor fruit in fruits:\n    print(fruit)\n\n# 5回繰り返す\nfor i in range(5):\n    print(i)",
    related: ["while", "range", "loop", "iterable"]
  },

  "while": {
    term: "while文（ワイルぶん）",
    short: "条件が真の間くり返す",
    detail: "🔁 <strong>while文</strong>は、条件が <code>True</code> の間ずっと繰り返す仕組みです。<br><br>「お腹がすいている間はご飯を食べる」のイメージ。<br>条件が <code>False</code> になったら自動的に止まります。<br><br>⚠️ 条件がずっと True だと無限ループになるので注意！",
    example: "count = 0\nwhile count < 5:\n    print(count)\n    count += 1  # これを忘れると無限ループ！\nprint(\"終了！\")",
    related: ["for", "break", "condition", "loop"]
  },

  "break": {
    term: "break（ブレイク）",
    short: "ループを途中で抜ける",
    detail: "🛑 <strong>break</strong>は、ループ（繰り返し）を途中で強制的に止める命令です。<br><br>マラソンを走っている途中で「ストップ！」と止まるイメージ。<br>ある条件を満たしたらすぐにループを終わりたいときに使います。<br><br>for文でもwhile文でも使えます。",
    example: "# 3を見つけたら止まる\nfor i in range(10):\n    if i == 3:\n        print(\"見つけた！\")\n        break\n    print(i)\n# 0, 1, 2, 見つけた！",
    related: ["continue", "for", "while", "loop"]
  },

  "continue": {
    term: "continue（コンティニュー）",
    short: "今回だけスキップ",
    detail: "⏭️ <strong>continue</strong>は、ループの今の回だけスキップして、次の回に進む命令です。<br><br>縄跳び🪢で引っかかっても、最初からやり直すのではなく次の回転から続けるイメージ。<br>breakとの違い：breakは完全に止まる、continueは今回だけスキップ。",
    example: "# 偶数だけ表示（奇数をスキップ）\nfor i in range(6):\n    if i % 2 != 0:\n        continue   # 奇数はスキップ\n    print(i)\n# 0, 2, 4",
    related: ["break", "for", "while", "loop"]
  },

  "range": {
    term: "range（レンジ）",
    short: "数の連番を作る関数",
    detail: "🔢 <strong>range</strong>は、連続した数の並びを作る関数です。<br><br>エレベーターのボタン🛗で「1階〜10階」を自動で作るようなもの。<br><code>range(5)</code> → 0, 1, 2, 3, 4 （0から始まって5の手前まで！）<br><code>range(1, 6)</code> → 1, 2, 3, 4, 5<br><code>range(0, 10, 2)</code> → 0, 2, 4, 6, 8（2つ飛ばし）",
    example: "# 基本: 0から4まで\nfor i in range(5):\n    print(i)\n\n# 開始と終了を指定\nfor i in range(1, 4):\n    print(i)  # 1, 2, 3",
    related: ["for", "loop", "list"]
  },

  "indent": {
    term: "インデント",
    short: "行の先頭の字下げ",
    detail: "➡️ <strong>インデント</strong>は、行の先頭にスペースを入れて字下げすることです。<br><br>本の目次📚で章の下に節が字下げされているのと同じ！<br>Pythonではインデントが超重要！ <code>if</code> や <code>for</code> の中身は必ず字下げします。<br><br>スペース4つが基本ルール（PEP8）。タブ❌ → スペース⭕",
    example: "if True:\n    print(\"ここはインデントあり\")  # ← 4スペース\n    print(\"ここもif文の中\")\nprint(\"ここはif文の外\")",
    related: ["block", "pep8", "syntax"]
  },

  "block": {
    term: "ブロック / コードブロック",
    short: "まとまりのあるコード群",
    detail: "🧱 <strong>ブロック</strong>は、インデント（字下げ）でまとめられたコードのかたまりです。<br><br>レゴブロック🧱を組み合わせて大きな作品を作るように、プログラムもブロックの組み合わせでできています。<br><code>if</code> や <code>for</code> の <code>:</code> の下に字下げして書いた部分が1つのブロック。<br><br>同じ深さのインデントが同じブロックです。",
    example: "if True:\n    # ここから\n    print(\"ブロック1行目\")\n    print(\"ブロック2行目\")\n    # ここまでが1つのブロック\nprint(\"ブロックの外\")",
    related: ["indent", "if", "for", "scope"]
  },

  "condition": {
    term: "条件 / 条件式",
    short: "TrueかFalseになる式",
    detail: "❓ <strong>条件（条件式）</strong>は、結果が <code>True</code> か <code>False</code> になる式です。<br><br>「今日は晴れ？」→ Yes/No で答えられる質問と同じ。<br><code>age >= 18</code>、<code>name == \"太郎\"</code>、<code>x > 0 and x < 100</code> などが条件式です。<br><br>if文やwhile文の「判断材料」として使います。",
    example: "x = 10\nprint(x > 5)     # True\nprint(x == 20)   # False\nprint(x > 0 and x < 100)  # True",
    related: ["bool", "comparison", "logical", "if"]
  },

  "comparison": {
    term: "比較演算子（ひかくえんざんし）",
    short: "大小や等しさを比べる",
    detail: "⚖️ <strong>比較演算子</strong>は、2つの値を比べるための記号です。結果は <code>True</code> か <code>False</code>。<br><br>天秤⚖️に2つのものを乗せて比べるイメージ。<br><code>==</code>（等しい）、<code>!=</code>（等しくない）、<code>&lt;</code>（小さい）、<code>&gt;</code>（大きい）、<code>&lt;=</code>、<code>&gt;=</code> があります。<br><br>⚠️ <code>=</code>（代入）と <code>==</code>（比較）を間違えないで！",
    example: "print(10 == 10)   # True（等しい）\nprint(10 != 5)    # True（等しくない）\nprint(3 > 5)      # False\nprint(3 <= 3)     # True",
    related: ["operator", "condition", "bool"]
  },

  "logical": {
    term: "論理演算子（ろんりえんざんし）",
    short: "条件を組み合わせる",
    detail: "🔗 <strong>論理演算子</strong>は、複数の条件を組み合わせるための言葉です。<br><br><code>and</code>：両方True → True（AもBも必要）<br><code>or</code>：どちらかTrue → True（AかBどちらか）<br><code>not</code>：TrueとFalseを逆にする<br><br>「チョコ<strong>と</strong>ケーキが好き」= and、「チョコ<strong>か</strong>ケーキが好き」= or",
    example: "age = 20\nhas_id = True\n\n# and: 両方TrueならTrue\nprint(age >= 18 and has_id)   # True\n\n# or: どちらかTrueならTrue\nprint(age < 18 or has_id)     # True\n\n# not: 反転\nprint(not False)              # True",
    related: ["comparison", "condition", "bool", "operator"]
  },

  "loop": {
    term: "ループ / 繰り返し",
    short: "同じ処理を何度もする",
    detail: "🔄 <strong>ループ</strong>は、同じ処理を何度も繰り返す仕組みの総称です。<br><br>メリーゴーラウンド🎠のようにぐるぐる回るイメージ。<br>Pythonには <code>for</code>（回数が決まっている）と <code>while</code>（条件を満たす間）の2種類があります。<br><br>プログラミングの超重要な概念！面倒な作業を自動化できます。",
    example: "# forループ\nfor i in range(3):\n    print(f\"{i}回目\")\n\n# whileループ\nn = 0\nwhile n < 3:\n    print(f\"{n}回目\")\n    n += 1",
    related: ["for", "while", "break", "continue", "iteration"]
  },

  "iteration": {
    term: "イテレーション",
    short: "繰り返しの1回分",
    detail: "🔂 <strong>イテレーション</strong>は、ループの中の「1回分の処理」を指す言葉です。<br><br>100m走を10本走るとき、「1本目」「2本目」…の1本がイテレーション。<br>3回ループする場合、イテレーションは3回行われます。<br><br>「イテレートする」=「1つずつ順番に処理する」という意味です。",
    example: "# 3回のイテレーション\nfor i in range(3):\n    print(f\"イテレーション {i}\")\n# イテレーション 0\n# イテレーション 1\n# イテレーション 2",
    related: ["loop", "for", "iterable"]
  },

  // ========================================
  //  関数
  // ========================================

  "function": {
    term: "関数（かんすう）",
    short: "まとめた処理に名前をつけたもの",
    detail: "🎁 <strong>関数</strong>は、一連の処理をまとめて名前をつけたものです。<br><br>自動販売機🥫みたいなもの！ お金（引数）を入れて、ボタン（関数名）を押すと、ジュース（戻り値）が出てくる。<br>一度作れば何回でも使い回せる！<code>def</code> を使って作ります。<br><br>print() や len() も関数です。",
    example: "def greet(name):\n    return f\"こんにちは、{name}さん！\"\n\nmessage = greet(\"太郎\")\nprint(message)\n# こんにちは、太郎さん！",
    related: ["def", "argument", "return", "parameter"]
  },

  "def": {
    term: "def（デフ）",
    short: "関数を作るキーワード",
    detail: "🛠️ <strong>def</strong>は、新しい関数を定義（作成）するためのキーワードです。<br><br>「define（定義する）」の略。<br><code>def 関数名(引数):</code> と書いて、その下にインデントして処理を書きます。<br><br>🍳 レシピを書いておいて、あとから「このレシピで料理して！」と呼び出すイメージ。",
    example: "def add(a, b):\n    \"\"\"2つの数を足す関数\"\"\"\n    return a + b\n\nresult = add(3, 5)\nprint(result)  # 8",
    related: ["function", "parameter", "return", "docstring"]
  },

  "argument": {
    term: "引数（ひきすう）",
    short: "関数に渡すデータ",
    detail: "📨 <strong>引数</strong>は、関数を呼び出すときに渡すデータのことです。<br><br>自動販売機に入れる「お金」のようなもの。<br><code>print(\"Hello\")</code> の <code>\"Hello\"</code> が引数です。<br><br>パラメータ（仮引数）と区別することもあります：<br>・パラメータ：関数の定義側の変数名<br>・引数：呼び出し側で渡す実際の値",
    example: "def greet(name):        # name はパラメータ\n    print(f\"Hello, {name}!\")\n\ngreet(\"太郎\")           # \"太郎\" が引数",
    related: ["parameter", "function", "keyword-arg", "default-arg"]
  },

  "parameter": {
    term: "パラメータ / 仮引数",
    short: "関数定義側の変数名",
    detail: "📋 <strong>パラメータ（仮引数）</strong>は、関数を定義するときにカッコ内に書く変数名です。<br><br>手紙のテンプレートで「◯◯様」の◯◯の部分がパラメータ。<br>実際に呼び出すときに渡すデータ（引数）が、パラメータに入ります。<br><br>パラメータは「受け取る側」、引数は「渡す側」と覚えよう！",
    example: "# a, b がパラメータ\ndef multiply(a, b):\n    return a * b\n\n# 3, 4 が引数\nresult = multiply(3, 4)",
    related: ["argument", "function", "default-arg"]
  },

  "return": {
    term: "return（リターン）",
    short: "関数の結果を返す",
    detail: "📤 <strong>return</strong>は、関数の処理結果を呼び出し元に返す命令です。<br><br>自動販売機のジュース取り出し口🥫のようなもの。<br><code>return</code> が実行されると、関数はそこで終了し、値を返します。<br><br>returnがない関数は <code>None</code> を返します。",
    example: "def square(n):\n    return n * n     # 結果を返す\n\nresult = square(5)   # 25が返ってくる\nprint(result)        # 25",
    related: ["function", "def", "expression"]
  },

  "default-arg": {
    term: "デフォルト引数",
    short: "省略時に使われる値",
    detail: "🎯 <strong>デフォルト引数</strong>は、引数を省略したときに自動的に使われる値です。<br><br>コーヒーショップ☕で「サイズ指定なし→Mサイズ」みたいなルール。<br>関数定義でパラメータに <code>=</code> で値を指定しておくと、呼び出し時に省略できます。<br><br>必須の引数より後ろに書く必要があります。",
    example: "def greet(name, greeting=\"こんにちは\"):\n    print(f\"{greeting}、{name}さん！\")\n\ngreet(\"太郎\")             # こんにちは、太郎さん！\ngreet(\"太郎\", \"おはよう\")  # おはよう、太郎さん！",
    related: ["argument", "parameter", "keyword-arg"]
  },

  "keyword-arg": {
    term: "キーワード引数",
    short: "名前を指定して渡す引数",
    detail: "🏷️ <strong>キーワード引数</strong>は、パラメータの名前を指定して値を渡す方法です。<br><br>宅配便📦で「宛名: ○○、住所: △△」と書くように、どの引数に何を入れるか明示します。<br>順番を気にしなくてよくなるので便利！<br><br><code>関数名(パラメータ名=値)</code> の形で使います。",
    example: "def profile(name, age, city):\n    print(f\"{name}({age}) - {city}\")\n\n# キーワード引数なら順番自由\nprofile(age=20, city=\"東京\", name=\"太郎\")",
    related: ["argument", "default-arg", "parameter"]
  },

  "lambda": {
    term: "lambda（ラムダ）",
    short: "1行で書くミニ関数",
    detail: "⚡ <strong>lambda</strong>は、名前をつけない小さな関数を1行で作る方法です。<br><br>メモ用紙にサッと書く計算式のようなもの。<br><code>lambda 引数: 式</code> と書きます。<br><br>ソートのキーや、ちょっとした変換処理に便利！<br>複雑な処理には向かないので、その場合は <code>def</code> を使おう。",
    example: "# 通常の関数\ndef double(x):\n    return x * 2\n\n# lambdaで同じこと\ndouble = lambda x: x * 2\n\nprint(double(5))  # 10\n\n# ソートでの活用\nnames = [\"Charlie\", \"Alice\", \"Bob\"]\nnames.sort(key=lambda x: len(x))",
    related: ["function", "def", "list-comp"]
  },

  "scope": {
    term: "スコープ",
    short: "変数が使える範囲",
    detail: "🏠 <strong>スコープ</strong>は、変数が使える範囲（見える場所）のことです。<br><br>自分の部屋🏠の中だけで使えるもの（ローカル）と、家全体で使えるもの（グローバル）があります。<br>関数の中で作った変数は関数の中だけ（ローカルスコープ）。<br>関数の外で作った変数はどこでも使える（グローバルスコープ）。",
    example: "x = \"グローバル\"    # どこでも使える\n\ndef my_func():\n    y = \"ローカル\"    # 関数の中だけ\n    print(x)          # OK\n    print(y)          # OK\n\nmy_func()\n# print(y)  # エラー！ yは関数の外から見えない",
    related: ["local", "global", "variable", "function"]
  },

  "local": {
    term: "ローカル変数",
    short: "関数の中だけの変数",
    detail: "🔒 <strong>ローカル変数</strong>は、関数の中で作られた、関数の中だけで使える変数です。<br><br>教室の中でだけ有効な「座席番号」のようなもの。教室を出たら意味がない。<br>関数が終わると自動的に消えます。<br><br>同じ名前のローカル変数を別の関数で作っても、お互いに影響しません。",
    example: "def func_a():\n    msg = \"Aの変数\"  # ローカル\n    print(msg)\n\ndef func_b():\n    msg = \"Bの変数\"  # 別のローカル\n    print(msg)\n\nfunc_a()  # Aの変数\nfunc_b()  # Bの変数",
    related: ["global", "scope", "variable"]
  },

  "global": {
    term: "グローバル変数",
    short: "プログラム全体で使える変数",
    detail: "🌍 <strong>グローバル変数</strong>は、プログラム全体で使える変数です。<br><br>学校全体で使える「校則」のようなもの。どの教室でも有効。<br>関数の外で定義された変数はグローバルです。<br><br>⚠️ 便利だけど使いすぎると混乱の元！ できるだけローカル変数を使おう。",
    example: "score = 100  # グローバル変数\n\ndef show_score():\n    print(score)   # 読むのはOK\n\ndef change_score():\n    global score   # globalと宣言して変更\n    score = 200\n\nshow_score()    # 100\nchange_score()\nshow_score()    # 200",
    related: ["local", "scope", "variable"]
  },

  // ========================================
  //  データ構造
  // ========================================

  "list": {
    term: "リスト",
    short: "順番付きのデータの並び",
    detail: "📋 <strong>リスト</strong>は、複数のデータを順番に並べて入れられる入れ物です。<br><br>買い物リスト🛒のイメージ！ 順番があり、後から追加・削除・変更ができます。<br><code>[]</code>（角括弧）で囲み、<code>,</code>（カンマ）で区切って書きます。<br><br>Pythonで最もよく使うデータ構造です！",
    example: "fruits = [\"りんご\", \"バナナ\", \"みかん\"]\nprint(fruits[0])      # りんご\nfruits.append(\"ぶどう\")  # 追加\nprint(len(fruits))    # 4",
    related: ["index", "append", "slice", "list-comp", "tuple"]
  },

  "dict": {
    term: "辞書（じしょ）/ dict",
    short: "キーと値のペア集合",
    detail: "📖 <strong>辞書（dict）</strong>は、「キー」と「値」のペアでデータを管理する構造です。<br><br>本当の辞書📖と同じ！「単語（キー）」を引くと「意味（値）」がわかる。<br><code>{}</code>（波括弧）で囲み、<code>キー: 値</code> の形で書きます。<br><br>名前でデータを検索できるので超便利！",
    example: "person = {\n    \"name\": \"太郎\",\n    \"age\": 20,\n    \"city\": \"東京\"\n}\nprint(person[\"name\"])  # 太郎\nperson[\"age\"] = 21     # 値の変更",
    related: ["key", "value", "list", "set"]
  },

  "tuple": {
    term: "タプル",
    short: "変更できないリスト",
    detail: "🔒 <strong>タプル</strong>は、一度作ったら中身を変更できないリストのようなものです。<br><br>写真📸のようなもの。撮ったら変えられない！<br><code>()</code>（丸括弧）で囲みます。<br><br>「この値は絶対に変わらない」というデータに使います。<br>例：座標 <code>(x, y)</code> や曜日の一覧など。",
    example: "point = (10, 20)         # タプル\ncolors = (\"赤\", \"青\", \"緑\")\nprint(point[0])          # 10\n# point[0] = 30         # エラー！ 変更不可\nx, y = point             # アンパック",
    related: ["list", "index", "iterable"]
  },

  "set": {
    term: "セット / 集合",
    short: "重複なしのデータ集合",
    detail: "🎯 <strong>セット（集合）</strong>は、重複のないデータの集まりです。順番はありません。<br><br>スタンプカード🃏で、同じスタンプは1つだけ持てるイメージ。<br><code>{}</code> で囲みますが、辞書と違ってキー: 値の形ではありません。<br><br>重複を消したいとき、集合演算（和・積・差）をしたいときに活躍！",
    example: "fruits = {\"りんご\", \"バナナ\", \"りんご\"}\nprint(fruits)   # {\"りんご\", \"バナナ\"} 重複消える\n\na = {1, 2, 3}\nb = {2, 3, 4}\nprint(a & b)    # {2, 3}（共通部分）\nprint(a | b)    # {1, 2, 3, 4}（和集合）",
    related: ["list", "dict", "iterable"]
  },

  "index": {
    term: "インデックス",
    short: "要素の位置番号",
    detail: "📍 <strong>インデックス</strong>は、リストや文字列の中の要素の位置番号です。<br><br>マンションの部屋番号🏢のようなもの。<br>⚠️ Pythonでは <strong>0から始まる</strong>のがポイント！<br>最初が 0、次が 1、その次が 2…<br><br><code>-1</code> で最後の要素にアクセスできる裏ワザもあります！",
    example: "fruits = [\"りんご\", \"バナナ\", \"みかん\"]\nprint(fruits[0])    # りんご（最初）\nprint(fruits[1])    # バナナ\nprint(fruits[-1])   # みかん（最後）\n\nword = \"Python\"\nprint(word[0])      # P",
    related: ["list", "slice", "str"]
  },

  "slice": {
    term: "スライス",
    short: "リストの一部を切り出す",
    detail: "🍰 <strong>スライス</strong>は、リストや文字列の一部分を切り出す操作です。<br><br>ケーキを切り分ける🍰ように、必要な部分だけ取り出せます。<br><code>[開始:終了]</code> で書きます。終了の位置は含まれません！<br><code>[1:4]</code> → インデックス1〜3の要素を取得。<br><br><code>[::2]</code> のように間隔を指定することもできます。",
    example: "nums = [0, 1, 2, 3, 4, 5]\nprint(nums[1:4])    # [1, 2, 3]\nprint(nums[:3])     # [0, 1, 2]\nprint(nums[3:])     # [3, 4, 5]\nprint(nums[::2])    # [0, 2, 4]",
    related: ["index", "list", "str"]
  },

  "method": {
    term: "メソッド",
    short: "オブジェクトの持つ関数",
    detail: "🔧 <strong>メソッド</strong>は、オブジェクト（データ）に紐づいた関数です。<br><br>スマホ📱の「電話する」「写真を撮る」などの機能がメソッドのイメージ。<br><code>オブジェクト.メソッド名()</code> の形で使います。<br><br>例：文字列の <code>.upper()</code>、リストの <code>.append()</code> など。<br>データ型によって使えるメソッドが違います。",
    example: "name = \"hello\"\nprint(name.upper())      # HELLO\nprint(name.replace(\"h\", \"H\"))  # Hello\n\nnums = [3, 1, 2]\nnums.sort()\nprint(nums)              # [1, 2, 3]",
    related: ["function", "object", "append", "class"]
  },

  "append": {
    term: "append（アペンド）",
    short: "リストの末尾に追加",
    detail: "➕ <strong>append</strong>は、リストの一番最後に新しい要素を追加するメソッドです。<br><br>行列の最後尾に並ぶ🧍のイメージ。<br><code>リスト.append(追加したいもの)</code> で使います。<br><br>1つずつしか追加できません。複数追加したいときは <code>extend()</code> を使います。",
    example: "fruits = [\"りんご\", \"バナナ\"]\nfruits.append(\"みかん\")\nprint(fruits)\n# [\"りんご\", \"バナナ\", \"みかん\"]\n\nfruits.append(\"ぶどう\")\nprint(len(fruits))  # 4",
    related: ["list", "method", "index"]
  },

  "key": {
    term: "キー（辞書の）",
    short: "辞書で値を探す名前",
    detail: "🔑 <strong>キー</strong>は、辞書（dict）の中から値を取り出すための「名前」です。<br><br>ロッカー🗄️の番号札のようなもの。番号（キー）があれば中身（値）を取り出せる。<br><code>辞書[キー]</code> で対応する値にアクセスできます。<br><br>キーは一意（重複不可）で、文字列や数値が使えます。",
    example: "scores = {\"数学\": 90, \"英語\": 85, \"国語\": 78}\nprint(scores[\"数学\"])     # 90\nprint(scores.keys())      # dict_keys([\"数学\", \"英語\", \"国語\"])\n\n# キーの存在確認\nprint(\"数学\" in scores)   # True",
    related: ["dict", "value", "index"]
  },

  "value": {
    term: "値（あたい）",
    short: "データそのもの",
    detail: "💎 <strong>値</strong>は、変数や辞書に入っている実際のデータのことです。<br><br>宝箱💎の中に入っている宝物のようなもの。<br><code>x = 10</code> の <code>10</code> が値。辞書では <code>{\"name\": \"太郎\"}</code> の <code>\"太郎\"</code> が値です。<br><br>数字、文字列、リストなど、あらゆるデータが「値」です。",
    example: "x = 42              # 42が値\nname = \"太郎\"        # \"太郎\"が値\n\nperson = {\"name\": \"太郎\", \"age\": 20}\nprint(person.values())\n# dict_values([\"太郎\", 20])",
    related: ["key", "variable", "dict", "data-type"]
  },

  "list-comp": {
    term: "リスト内包表記",
    short: "1行でリストを作る書き方",
    detail: "✨ <strong>リスト内包表記</strong>は、forループを1行にまとめてリストを作る書き方です。<br><br>工場の製造ライン🏭のように、材料を流して一気に製品を作るイメージ。<br><code>[式 for 変数 in イテラブル]</code> と書きます。<br><br>慣れると超便利！ 条件をつけてフィルタリングもできます。",
    example: "# 通常のforループ\nsquares = []\nfor i in range(5):\n    squares.append(i ** 2)\n\n# リスト内包表記（1行で同じこと！）\nsquares = [i ** 2 for i in range(5)]\nprint(squares)  # [0, 1, 4, 9, 16]\n\n# 条件付き\nevens = [i for i in range(10) if i % 2 == 0]",
    related: ["list", "for", "lambda", "iterable"]
  },

  "iterable": {
    term: "イテラブル",
    short: "for文で回せるもの",
    detail: "🔄 <strong>イテラブル</strong>は、for文で1つずつ取り出せるオブジェクトの総称です。<br><br>トランプの山札🃏のように、1枚ずつめくれるもの全般。<br>リスト、タプル、文字列、辞書、range、セットなどがイテラブルです。<br><br><code>for item in イテラブル:</code> の形で使えるものと覚えよう！",
    example: "# リストはイテラブル\nfor x in [1, 2, 3]:\n    print(x)\n\n# 文字列もイテラブル\nfor c in \"Hello\":\n    print(c)\n\n# rangeもイテラブル\nfor i in range(3):\n    print(i)",
    related: ["for", "list", "iteration", "loop"]
  },

  // ========================================
  //  OOP（オブジェクト指向）
  // ========================================

  "class": {
    term: "クラス",
    short: "オブジェクトの設計図",
    detail: "📐 <strong>クラス</strong>は、オブジェクトを作るための「設計図」です。<br><br>たい焼きの「金型」🐟がクラス、実際に焼いたたい焼きがオブジェクト（インスタンス）。<br>同じ金型から何個でもたい焼きが作れるように、1つのクラスから何個でもオブジェクトが作れます。<br><br><code>class クラス名:</code> と書いて定義します。",
    example: "class Dog:\n    def __init__(self, name):\n        self.name = name\n\n    def bark(self):\n        print(f\"{self.name}: ワン！\")\n\ndog1 = Dog(\"ポチ\")\ndog1.bark()  # ポチ: ワン！",
    related: ["object", "instance", "init", "inheritance"]
  },

  "object": {
    term: "オブジェクト",
    short: "データと処理のかたまり",
    detail: "🎁 <strong>オブジェクト</strong>は、データ（属性）と処理（メソッド）がセットになったものです。<br><br>Pythonではほぼすべてがオブジェクト！ 数字も文字列もリストも。<br>犬🐕で言えば「名前・色」が属性、「吠える・走る」がメソッド。<br><br>クラスという設計図から作られた実体のことです。",
    example: "# 文字列もオブジェクト\nname = \"hello\"\nprint(name.upper())  # HELLO（メソッド）\nprint(len(name))     # 5\n\n# リストもオブジェクト\nnums = [3, 1, 2]\nnums.sort()          # メソッドで並び替え",
    related: ["class", "instance", "method-oop", "attribute"]
  },

  "instance": {
    term: "インスタンス",
    short: "クラスから作った実体",
    detail: "🏭 <strong>インスタンス</strong>は、クラス（設計図）から実際に作られたオブジェクトのことです。<br><br>設計図（クラス）から実際に建てた家🏠がインスタンス。<br>同じ設計図から家A、家B、家C… と何軒でも建てられます。<br><br><code>クラス名()</code> と書くとインスタンスが作られます。",
    example: "class Cat:\n    def __init__(self, name):\n        self.name = name\n\n# インスタンスを作る\ncat1 = Cat(\"タマ\")    # インスタンス1\ncat2 = Cat(\"ミケ\")    # インスタンス2\nprint(cat1.name)      # タマ\nprint(cat2.name)      # ミケ",
    related: ["class", "object", "init", "self"]
  },

  "init": {
    term: "__init__（イニット）",
    short: "インスタンスの初期設定",
    detail: "🎬 <strong>__init__</strong>は、インスタンスが作られるときに自動的に呼ばれる特別なメソッドです。<br><br>ゲームの「ニューゲーム」🎮で名前やステータスを設定するのと同じ。<br>コンストラクタ（構築者）とも呼ばれます。<br><br>最初の引数は必ず <code>self</code>（自分自身）を書きます。",
    example: "class Player:\n    def __init__(self, name, hp=100):\n        self.name = name  # 名前を設定\n        self.hp = hp      # HPを設定\n\nplayer = Player(\"勇者\", 150)\nprint(player.name)  # 勇者\nprint(player.hp)    # 150",
    related: ["class", "self", "instance", "attribute"]
  },

  "self": {
    term: "self（セルフ）",
    short: "インスタンス自身のこと",
    detail: "👆 <strong>self</strong>は、「自分自身のインスタンス」を指す特別な変数です。<br><br>自分の名前を「私は○○です」と言うときの「私」がself。<br>クラスのメソッドの第1引数には必ず <code>self</code> を書きます。<br><br><code>self.name</code> は「自分の名前」、<code>self.hp</code> は「自分のHP」という意味。",
    example: "class Dog:\n    def __init__(self, name):\n        self.name = name   # 自分のnameに保存\n\n    def introduce(self):\n        # selfで自分のデータにアクセス\n        print(f\"僕は{self.name}だワン！\")\n\ndog = Dog(\"ポチ\")\ndog.introduce()  # 僕はポチだワン！",
    related: ["init", "class", "instance", "attribute"]
  },

  "inheritance": {
    term: "継承（けいしょう）",
    short: "親クラスの機能を引き継ぐ",
    detail: "👪 <strong>継承</strong>は、既存のクラス（親）の機能を引き継いで新しいクラス（子）を作ることです。<br><br>親から子へ遺伝する👪のと同じイメージ。<br>「動物」クラスの機能を引き継いで「犬」クラスを作る、など。<br>共通部分を書き直さなくてよいので、コードの再利用に役立ちます。<br><br><code>class 子クラス(親クラス):</code> と書きます。",
    example: "class Animal:\n    def speak(self):\n        print(\"...\")\n\nclass Dog(Animal):      # Animalを継承\n    def speak(self):    # 上書き（オーバーライド）\n        print(\"ワン！\")\n\nclass Cat(Animal):\n    def speak(self):\n        print(\"ニャー！\")\n\nDog().speak()  # ワン！\nCat().speak()  # ニャー！",
    related: ["class", "object", "method-oop"]
  },

  "method-oop": {
    term: "メソッド（OOP）",
    short: "クラス内で定義した関数",
    detail: "🔧 <strong>メソッド</strong>は、クラスの中で定義された関数のことです。<br><br>ロボット🤖の「歩く」「話す」などの動作がメソッド。<br>第1引数に <code>self</code> を書くのがポイント。<br><br>通常のメソッド、クラスメソッド、スタティックメソッドなどの種類があります。",
    example: "class Calculator:\n    def __init__(self):\n        self.result = 0\n\n    def add(self, n):       # メソッド\n        self.result += n\n        return self\n\ncalc = Calculator()\ncalc.add(10).add(20)\nprint(calc.result)  # 30",
    related: ["class", "self", "function", "method"]
  },

  "attribute": {
    term: "属性（ぞくせい）",
    short: "オブジェクトが持つデータ",
    detail: "📝 <strong>属性</strong>は、オブジェクトが持っているデータ（変数）のことです。<br><br>プロフィールカード📇の「名前」「年齢」「住所」が属性のイメージ。<br><code>self.name</code> のように <code>self.</code> をつけて定義します。<br><br><code>オブジェクト.属性名</code> でアクセスできます。",
    example: "class Student:\n    def __init__(self, name, grade):\n        self.name = name    # 属性\n        self.grade = grade  # 属性\n\nstudent = Student(\"太郎\", 3)\nprint(student.name)    # 太郎\nprint(student.grade)   # 3\nstudent.grade = 4      # 属性の変更",
    related: ["class", "self", "init", "object"]
  },

  // ========================================
  //  エラー処理
  // ========================================

  "try": {
    term: "try文（トライぶん）",
    short: "エラーが起きそうな処理を囲む",
    detail: "🛡️ <strong>try文</strong>は、エラーが起きるかもしれない処理を安全に実行するための仕組みです。<br><br>安全ネット🥅付きの空中ブランコのようなもの。失敗しても大丈夫！<br><code>try:</code> の中でエラーが起きると、<code>except:</code> の中の処理が実行されます。<br><br>プログラムが途中で止まるのを防げます。",
    example: "try:\n    num = int(input(\"数字を入れてね: \"))\n    print(f\"2倍は {num * 2}\")\nexcept ValueError:\n    print(\"数字じゃないよ！\")\nfinally:\n    print(\"処理終了\")",
    related: ["except", "exception", "error"]
  },

  "except": {
    term: "except（エクセプト）",
    short: "エラー発生時の処理",
    detail: "🆘 <strong>except</strong>は、try文の中でエラーが起きたときに実行される処理を書く部分です。<br><br>「もし転んだら（try）、絆創膏を貼る（except）」のイメージ🩹。<br>エラーの種類ごとに別の処理を書くこともできます。<br><br>何もしない場合は <code>pass</code> を書きますが、あまりおすすめしません。",
    example: "try:\n    result = 10 / 0\nexcept ZeroDivisionError:\n    print(\"0で割れません！\")\nexcept TypeError:\n    print(\"型がおかしいです！\")\nexcept Exception as e:\n    print(f\"エラー: {e}\")",
    related: ["try", "exception", "error"]
  },

  "exception": {
    term: "例外（れいがい）",
    short: "プログラム中の異常事態",
    detail: "⚠️ <strong>例外</strong>は、プログラムの実行中に起きる異常事態のことです。<br><br>料理中にガスが止まった🔥ような予期しないトラブル。<br>0で割る（ZeroDivisionError）、存在しないファイルを開く（FileNotFoundError）など、いろいろな種類があります。<br><br>try/exceptで適切に処理しないと、プログラムが止まります。",
    example: "# よくある例外\n# ZeroDivisionError: 0で割った\n# TypeError: 型が違う\n# ValueError: 値がおかしい\n# IndexError: 範囲外のインデックス\n# KeyError: 辞書にキーがない\n# FileNotFoundError: ファイルがない",
    related: ["error", "try", "except", "traceback"]
  },

  "error": {
    term: "エラー",
    short: "プログラムの問題",
    detail: "🚨 <strong>エラー</strong>は、プログラムが正しく動かない問題全般を指します。<br><br>エラーには大きく3種類あります：<br>1️⃣ <strong>構文エラー（SyntaxError）</strong>：書き方が間違っている<br>2️⃣ <strong>実行時エラー</strong>：実行中に問題が起きた<br>3️⃣ <strong>論理エラー</strong>：動くけど結果が間違っている<br><br>エラーメッセージをよく読むことが解決の第一歩！",
    example: "# 構文エラー\n# print(\"hello\"  ← カッコ閉じ忘れ\n\n# 実行時エラー\n# 10 / 0          ← 0で割った\n\n# 論理エラー\n# average = sum / count  ← 計算式が間違い",
    related: ["bug", "debug", "exception", "traceback"]
  },

  "bug": {
    term: "バグ",
    short: "プログラムの不具合",
    detail: "🐛 <strong>バグ</strong>は、プログラムが意図した通りに動かない不具合のことです。<br><br>昔、コンピュータに虫🐛が入り込んで故障したことが語源（と言われている）。<br>エラーで止まるものもあれば、動くけど結果がおかしいものもあります。<br><br>バグを見つけて直すことを「デバッグ」と言います。",
    example: "# バグの例：平均を求めたいのに...\nscores = [80, 90, 70]\n\n# バグあり（合計を人数で割っていない）\naverage = sum(scores)\nprint(average)  # 240 ← おかしい！\n\n# 修正後\naverage = sum(scores) / len(scores)\nprint(average)  # 80.0 ← 正しい！",
    related: ["debug", "error", "exception"]
  },

  "debug": {
    term: "デバッグ",
    short: "バグを見つけて直す",
    detail: "🔍 <strong>デバッグ</strong>は、プログラムのバグ（不具合）を見つけて修正する作業です。<br><br>探偵🕵️が犯人を捜すように、原因を特定して解決します。<br><br>デバッグの基本テクニック：<br>1️⃣ エラーメッセージをよく読む<br>2️⃣ <code>print()</code> で途中の値を確認<br>3️⃣ 1行ずつ実行してみる<br>4️⃣ デバッガーツールを使う",
    example: "# print()デバッグの例\ndef calc_average(scores):\n    total = sum(scores)\n    print(f\"DEBUG: total = {total}\")  # 途中確認\n    count = len(scores)\n    print(f\"DEBUG: count = {count}\")  # 途中確認\n    return total / count",
    related: ["bug", "error", "traceback", "print"]
  },

  "traceback": {
    term: "トレースバック",
    short: "エラーの発生経路",
    detail: "📍 <strong>トレースバック</strong>は、エラーが起きたときに表示される「どこで何が起きたか」の経路情報です。<br><br>犯罪現場の「足跡👣」のようなもの。犯人（バグ）がどこから来たか追跡できます。<br><br>一番下の行がエラーの本体。上に向かって辿ると、どの関数のどの行で問題が起きたかわかります。<br><br>下から読むのがコツ！",
    example: "# トレースバックの読み方\n# Traceback (most recent call last):\n#   File \"main.py\", line 5, in <module>\n#     result = divide(10, 0)\n#   File \"main.py\", line 2, in divide\n#     return a / b\n# ZeroDivisionError: division by zero\n# ↑ 一番下がエラーの原因！",
    related: ["error", "exception", "debug"]
  },

  // ========================================
  //  その他
  // ========================================

  "pep8": {
    term: "PEP 8（ペップエイト）",
    short: "Pythonの書き方ルール",
    detail: "📏 <strong>PEP 8</strong>は、Pythonの公式コーディングスタイルガイドです。<br><br>作文の「原稿用紙の使い方ルール」📝のようなもの。<br>例：インデントは4スペース、変数名は小文字のスネークケース（<code>my_name</code>）、1行は79文字以内、など。<br><br>読みやすいコードを書くために、みんなで守るルールです。",
    example: "# PEP 8に従った書き方\nmy_name = \"太郎\"          # スネークケース\nMAX_COUNT = 100           # 定数は大文字\n\ndef calculate_total(items):  # 関数もスネークケース\n    total = 0\n    for item in items:\n        total += item\n    return total",
    related: ["indent", "comment", "syntax"]
  },

  "dry": {
    term: "DRY原則",
    short: "同じコードを繰り返さない",
    detail: "🔄 <strong>DRY</strong>は「Don't Repeat Yourself（同じことを繰り返すな）」の略です。<br><br>同じことを何回もコピペしない📋というルール。<br>同じ処理が2回以上出てきたら、関数にまとめよう！<br><br>DRYにすると：修正が1箇所で済む、コードが短くなる、バグが減る！",
    example: "# DRYじゃない（同じ処理を繰り返す）❌\nprint(\"=\" * 20)\nprint(\"メニュー\")\nprint(\"=\" * 20)\nprint(\"設定\")\nprint(\"=\" * 20)\n\n# DRY（関数にまとめる）⭕\ndef show_title(title):\n    print(\"=\" * 20)\n    print(title)\n\nshow_title(\"メニュー\")\nshow_title(\"設定\")",
    related: ["function", "pep8", "module"]
  },

  "syntax": {
    term: "構文 / シンタックス",
    short: "プログラムの書き方ルール",
    detail: "📝 <strong>構文（シンタックス）</strong>は、プログラミング言語の「文法」です。<br><br>日本語にも「主語→述語」の順番があるように、Pythonにも正しい書き方のルールがあります。<br>ルールに合わないと <code>SyntaxError</code>（構文エラー）になります。<br><br>カッコの閉じ忘れ、コロン忘れなどが初心者あるある！",
    example: "# 正しい構文 ⭕\nif x > 0:\n    print(\"正の数\")\n\n# 構文エラー ❌\n# if x > 0     ← コロンがない\n#     print(\"正の数\")\n# print(\"hello\"  ← カッコ閉じ忘れ",
    related: ["error", "indent", "pep8", "statement"]
  },

  "runtime": {
    term: "実行時（じっこうじ）",
    short: "プログラムが動いている時",
    detail: "⏱️ <strong>実行時（ランタイム）</strong>は、プログラムが実際に動いている最中のことです。<br><br>映画🎬で言えば「上映中」の状態。<br>構文チェック（書き方チェック）は実行前に行われますが、「0で割る」などの問題は実行してみないとわかりません。<br><br>実行時に起きるエラーを「実行時エラー（ランタイムエラー）」と言います。",
    example: "# 構文エラー → 実行前に見つかる\n# print(\"hello\"\n\n# 実行時エラー → 動かしてみないとわからない\nx = int(input(\"数字: \"))\nresult = 100 / x  # x=0なら実行時エラー！",
    related: ["error", "exception", "syntax", "debug"]
  },

  "library": {
    term: "ライブラリ",
    short: "便利な機能の詰め合わせ",
    detail: "📚 <strong>ライブラリ</strong>は、誰かが作ってくれた便利な機能の集まりです。<br><br>工具箱🧰のようなもの。ネジを締めたいとき、ドライバーを一から作らなくてもいい！<br>Pythonには標準ライブラリ（最初から入っている）と、外部ライブラリ（pip でインストールする）があります。<br><br>車輪の再発明をしないで済む！",
    example: "# 標準ライブラリ\nimport math\nprint(math.sqrt(16))     # 4.0\n\nimport random\nprint(random.randint(1, 6))  # サイコロ\n\n# 外部ライブラリ（pipでインストール）\n# pip install requests\nimport requests",
    related: ["module", "import", "pip"]
  },

  "module": {
    term: "モジュール",
    short: "Pythonファイル1つ分",
    detail: "📄 <strong>モジュール</strong>は、Pythonのコードが書かれた1つの <code>.py</code> ファイルのことです。<br><br>レシピ本📖の1ページのようなもの。関連する機能をまとめておけます。<br><code>import</code> で他のファイルから読み込んで使えます。<br><br>自分で作ったファイルもモジュールとして使えます！",
    example: "# math モジュール\nimport math\nprint(math.pi)       # 3.14159...\n\n# 特定の関数だけ読み込む\nfrom math import sqrt\nprint(sqrt(25))      # 5.0\n\n# 別名をつける\nimport datetime as dt\nprint(dt.datetime.now())",
    related: ["import", "library", "pip"]
  },

  "import": {
    term: "import（インポート）",
    short: "モジュールを読み込む",
    detail: "📥 <strong>import</strong>は、他のモジュール（ファイル）の機能を読み込む命令です。<br><br>図書館📚から本を借りてくるようなもの。<br><code>import モジュール名</code> で全体を読み込み、<code>from モジュール名 import 関数名</code> で特定の機能だけ借りられます。<br><br>通常、ファイルの一番上に書きます。",
    example: "# モジュール全体をインポート\nimport random\nprint(random.choice([\"A\", \"B\", \"C\"]))\n\n# 特定の関数だけインポート\nfrom datetime import date\nprint(date.today())\n\n# 別名をつけてインポート\nimport json as j",
    related: ["module", "library", "pip"]
  },

  "pip": {
    term: "pip（ピップ）",
    short: "パッケージ管理ツール",
    detail: "📦 <strong>pip</strong>は、Pythonの外部ライブラリをインストール・管理するツールです。<br><br>アプリストア📱のようなもの。欲しいアプリ（ライブラリ）を簡単にインストールできます。<br>ターミナルで <code>pip install ライブラリ名</code> と打つだけ！<br><br>PyPI（Python Package Index）という倉庫から自動でダウンロードしてくれます。",
    example: "# ターミナルで実行するコマンド\n# pip install requests       # インストール\n# pip install pandas==2.0.0  # バージョン指定\n# pip list                   # 一覧表示\n# pip uninstall requests     # 削除",
    related: ["library", "module", "import", "terminal"]
  },

  "ide": {
    term: "IDE（統合開発環境）",
    short: "コードを書く便利ソフト",
    detail: "🖥️ <strong>IDE</strong>は、プログラミングに必要な機能がまとまったソフトウェアです。<br><br>料理で言えば「システムキッチン」🍳。コンロ、シンク、冷蔵庫が全部揃っている！<br>コード入力、実行、デバッグ、ファイル管理が1つのソフトでできます。<br><br>人気のIDE：VS Code、PyCharm、Jupyter Notebook など。",
    example: "# IDEの主な機能\n# ✅ コード補完（自動で候補を表示）\n# ✅ シンタックスハイライト（色分け）\n# ✅ デバッガー（1行ずつ実行）\n# ✅ ターミナル内蔵\n# ✅ エラー表示\n# ✅ ファイル管理",
    related: ["terminal", "debug", "syntax"]
  },

  "terminal": {
    term: "ターミナル",
    short: "文字でPCを操作する画面",
    detail: "⬛ <strong>ターミナル</strong>は、文字（コマンド）でパソコンを操作する画面です。<br><br>普段はマウスでクリックして操作しますが、ターミナルは文字を打って操作します⌨️。<br>Pythonの実行、pipでのインストール、ファイル操作などに使います。<br><br>Windowsでは「コマンドプロンプト」「PowerShell」、Macでは「ターミナル」という名前です。",
    example: "# ターミナルでよく使うコマンド\n# python main.py       Pythonファイルを実行\n# pip install requests  ライブラリをインストール\n# python --version     バージョン確認\n# python               対話モード開始",
    related: ["ide", "pip", "import"]
  },

  "algorithm": {
    term: "アルゴリズム",
    short: "問題を解く手順",
    detail: "🗺️ <strong>アルゴリズム</strong>は、問題を解くための手順・やり方のことです。<br><br>目的地への「道順🗺️」のようなもの。同じ場所に行くにもいろんなルートがある。<br>短い道、景色のいい道、安い道… それぞれに長所短所があります。<br><br>プログラミングでも、同じ問題を解くのに速いアルゴリズムと遅いアルゴリズムがあります。",
    example: "# 最大値を見つけるアルゴリズム\nnumbers = [3, 7, 1, 9, 4]\nmax_val = numbers[0]     # 最初を仮の最大値に\nfor num in numbers:\n    if num > max_val:\n        max_val = num    # より大きければ更新\nprint(max_val)           # 9",
    related: ["loop", "function", "dry"]
  },

  "api": {
    term: "API（エーピーアイ）",
    short: "ソフト同士の橋渡し",
    detail: "🔌 <strong>API</strong>は、プログラムとプログラムをつなぐ窓口です。<br><br>レストラン🍽️のウェイターのようなもの。お客さん（あなたのプログラム）が注文して、キッチン（サーバー）から料理（データ）を持ってきてくれる。<br><br>天気情報、地図、翻訳など、他のサービスの機能を自分のプログラムから使えます！",
    example: "# APIを使う例（イメージ）\nimport requests\n\n# 天気APIにリクエスト\nresponse = requests.get(\n    \"https://api.example.com/weather\",\n    params={\"city\": \"tokyo\"}\n)\ndata = response.json()\nprint(data[\"temperature\"])",
    related: ["library", "import", "dict"]
  },

  // ========================================
  //  追加の便利用語
  // ========================================

  "none": {
    term: "None（ナン）",
    short: "「何もない」を表す値",
    detail: "🕳️ <strong>None</strong>は、「何もない」「値がない」ことを表すPython特有の値です。<br><br>空っぽの箱📦（変数はあるけど中身がない）のイメージ。<br>関数が何も <code>return</code> しないときも <code>None</code> が返されます。<br><br>比較するときは <code>== None</code> ではなく <code>is None</code> を使うのがルール！",
    example: "x = None\nprint(x)          # None\nprint(x is None)  # True\n\ndef greet():\n    print(\"Hello\")\n    # returnがないのでNoneを返す\n\nresult = greet()\nprint(result)     # None",
    related: ["bool", "return", "data-type"]
  },

  "input-func": {
    term: "input（インプット）",
    short: "ユーザーの入力を受け取る",
    detail: "⌨️ <strong>input</strong>は、プログラムの実行中にユーザーからの入力を受け取る関数です。<br><br>先生が「はい、答えは？」と聞いて、生徒の回答を待つ🙋のと同じ。<br><code>input(\"メッセージ\")</code> と書くと、メッセージを表示して入力を待ちます。<br><br>⚠️ inputは<strong>必ず文字列（str）</strong>で返します。数値が欲しいときは型変換を忘れずに！",
    example: "name = input(\"名前は？ \")\nprint(f\"こんにちは、{name}さん！\")\n\n# 数値として使いたい場合\nage = int(input(\"年齢は？ \"))\nprint(f\"来年は{age + 1}歳だね\")",
    related: ["print", "str", "type-conversion"]
  },

  "len-func": {
    term: "len（レン）",
    short: "要素の数を数える",
    detail: "📏 <strong>len</strong>は、リスト・文字列・辞書などの要素の数を返す関数です。<br><br>定規📏で長さを測るようなもの。<br><code>len(\"Hello\")</code> → 5（文字数）<br><code>len([1, 2, 3])</code> → 3（要素数）<br><br>ループの回数指定や、空チェックなど、いろんな場面で大活躍！",
    example: "print(len(\"Python\"))          # 6\nprint(len([1, 2, 3, 4]))      # 4\nprint(len({\"a\": 1, \"b\": 2}))  # 2\n\n# 空チェック\nitems = []\nif len(items) == 0:\n    print(\"空っぽです\")",
    related: ["list", "str", "dict", "function"]
  },

  "string-method": {
    term: "文字列メソッド",
    short: "文字列を操作する機能",
    detail: "🔤 <strong>文字列メソッド</strong>は、文字列に対して使える便利な機能たちです。<br><br>文字列はたくさんのメソッドを持っています：<br><code>.upper()</code>（大文字）、<code>.lower()</code>（小文字）、<code>.strip()</code>（空白除去）、<code>.split()</code>（分割）、<code>.replace()</code>（置換）、<code>.find()</code>（検索）など。<br><br>元の文字列は変わらず、新しい文字列が返されます。",
    example: "text = \"  Hello, World!  \"\nprint(text.strip())       # \"Hello, World!\"\nprint(text.upper())       # \"  HELLO, WORLD!  \"\nprint(text.lower())       # \"  hello, world!  \"\nprint(text.replace(\"World\", \"Python\"))\n# \"  Hello, Python!  \"\nprint(\"a,b,c\".split(\",\"))  # [\"a\", \"b\", \"c\"]",
    related: ["str", "method", "list"]
  },

  "in-operator": {
    term: "in演算子",
    short: "中に含まれるか確認",
    detail: "🔍 <strong>in演算子</strong>は、あるデータが別のデータの中に含まれているかチェックする演算子です。<br><br>「この教室に太郎くんいる？」と探すイメージ🔍。<br>結果は <code>True</code> か <code>False</code> で返ります。<br><br>リスト、文字列、辞書、セットなどで使えます。for文の <code>in</code> とは別の使い方です。",
    example: "fruits = [\"りんご\", \"バナナ\", \"みかん\"]\nprint(\"バナナ\" in fruits)     # True\nprint(\"ぶどう\" in fruits)     # False\n\nprint(\"Py\" in \"Python\")      # True\n\nscores = {\"数学\": 90, \"英語\": 85}\nprint(\"数学\" in scores)       # True（キーを検索）",
    related: ["list", "str", "dict", "condition"]
  },

  "enumerate-func": {
    term: "enumerate（イニュメレイト）",
    short: "番号付きでループ",
    detail: "🔢 <strong>enumerate</strong>は、ループするときに「番号（インデックス）」と「値」を同時に取得できる関数です。<br><br>出席簿📋で「1番: 太郎、2番: 花子…」と番号付きで呼ぶイメージ。<br><code>for i, item in enumerate(リスト):</code> と書きます。<br><br>わざわざカウンター変数を用意しなくてOK！",
    example: "fruits = [\"りんご\", \"バナナ\", \"みかん\"]\nfor i, fruit in enumerate(fruits):\n    print(f\"{i}: {fruit}\")\n# 0: りんご\n# 1: バナナ\n# 2: みかん\n\n# 1から始めたい場合\nfor i, fruit in enumerate(fruits, 1):\n    print(f\"{i}: {fruit}\")",
    related: ["for", "list", "iterable", "range"]
  },

  "zip-func": {
    term: "zip（ジップ）",
    short: "複数のリストをまとめる",
    detail: "🤐 <strong>zip</strong>は、複数のリストを「ファスナーのように」まとめて同時にループできる関数です。<br><br>ジッパー付きの袋🤐のように、左右のリストをガッチャンとつなげます。<br><code>for a, b in zip(リスト1, リスト2):</code> と書きます。<br><br>長さが違う場合、短い方に合わせて止まります。",
    example: "names = [\"太郎\", \"花子\", \"次郎\"]\nscores = [85, 92, 78]\n\nfor name, score in zip(names, scores):\n    print(f\"{name}: {score}点\")\n# 太郎: 85点\n# 花子: 92点\n# 次郎: 78点",
    related: ["for", "list", "enumerate-func", "iterable"]
  },

  "with-statement": {
    term: "with文（ウィズぶん）",
    short: "安全にリソースを使う",
    detail: "🔐 <strong>with文</strong>は、ファイルなどのリソースを安全に開いて自動で閉じる仕組みです。<br><br>冷蔵庫🧊を開けて食べ物を出したら、ちゃんと閉めるのと同じ。<br><code>with</code> を使うと、処理が終わったら自動でファイルを閉じてくれます。<br><br>ファイル操作では <code>with</code> を使うのが常識！",
    example: "# with文でファイルを安全に読む\nwith open(\"data.txt\", \"r\") as f:\n    content = f.read()\n    print(content)\n# ← ここで自動的にファイルが閉じる\n\n# with文でファイルに書き込む\nwith open(\"output.txt\", \"w\") as f:\n    f.write(\"Hello!\")",
    related: ["try", "function", "error"]
  },

  "pass-keyword": {
    term: "pass（パス）",
    short: "何もしないプレースホルダ",
    detail: "⏭️ <strong>pass</strong>は、「何もしない」という命令です。<br><br>テストで「この問題はパス（飛ばす）」と同じ。<br>Pythonではブロックの中身が空だとエラーになるので、「あとで書くけど今は何もしない」ときに <code>pass</code> を置きます。<br><br>関数やクラスの骨組みだけ先に作るときに便利！",
    example: "# あとで実装する関数\ndef my_function():\n    pass  # TODO: あとで書く\n\n# 空のクラス\nclass MyClass:\n    pass\n\n# 例外を無視する（非推奨だけど）\ntry:\n    x = 1 / 0\nexcept:\n    pass",
    related: ["function", "class", "indent", "block"]
  },

  "comprehension-dict": {
    term: "辞書内包表記",
    short: "1行で辞書を作る書き方",
    detail: "✨ <strong>辞書内包表記</strong>は、forループを1行にまとめて辞書を作る書き方です。<br><br>リスト内包表記の辞書バージョン！<br><code>{キー: 値 for 変数 in イテラブル}</code> と書きます。<br><br>既存のデータを辞書に変換するときに大活躍します。",
    example: "# 数字をキー、二乗を値にした辞書\nsquares = {x: x**2 for x in range(5)}\nprint(squares)\n# {0: 0, 1: 1, 2: 4, 3: 9, 4: 16}\n\n# 名前リストから辞書を作る\nnames = [\"太郎\", \"花子\"]\nname_len = {n: len(n) for n in names}\n# {\"太郎\": 2, \"花子\": 2}",
    related: ["dict", "list-comp", "for"]
  },

  "unpacking": {
    term: "アンパック",
    short: "まとめて変数に展開",
    detail: "📦 <strong>アンパック</strong>は、リストやタプルの中身を一度に複数の変数に取り出す操作です。<br><br>引越しの荷物📦を開けて、それぞれの場所に置くイメージ。<br><code>a, b, c = [1, 2, 3]</code> のように書きます。<br><br>変数の数と要素の数が一致している必要があります！",
    example: "# タプルのアンパック\npoint = (10, 20)\nx, y = point\nprint(x)  # 10\nprint(y)  # 20\n\n# 値の交換もできる！\na, b = 1, 2\na, b = b, a\nprint(a, b)  # 2, 1",
    related: ["tuple", "list", "variable"]
  },

  "type-hint": {
    term: "型ヒント",
    short: "変数の型を明示する",
    detail: "🏷️ <strong>型ヒント</strong>は、変数や関数の引数・戻り値の型を明示する書き方です。<br><br>荷物に「割れ物注意🏷️」とラベルを貼るようなもの。<br><code>name: str = \"太郎\"</code> や <code>def add(a: int, b: int) -> int:</code> のように書きます。<br><br>Pythonは型を強制しませんが、読みやすさとツールのサポートが向上します！",
    example: "# 変数の型ヒント\nname: str = \"太郎\"\nage: int = 20\n\n# 関数の型ヒント\ndef add(a: int, b: int) -> int:\n    return a + b\n\n# リストの型ヒント\nscores: list[int] = [80, 90, 100]",
    related: ["data-type", "function", "variable"]
  },

  "ternary": {
    term: "三項演算子 / 条件式",
    short: "1行で書くif-else",
    detail: "⚡ <strong>三項演算子（条件式）</strong>は、if-elseを1行で書く方法です。<br><br><code>値A if 条件 else 値B</code> と書きます。<br>条件がTrueなら値A、Falseなら値Bが返されます。<br><br>短い条件分岐をサッと書きたいときに便利！<br>複雑な条件には使わない方が読みやすいです。",
    example: "age = 20\nstatus = \"大人\" if age >= 18 else \"子ども\"\nprint(status)  # 大人\n\n# リスト内包表記と組み合わせ\nnums = [1, -2, 3, -4, 5]\nabs_nums = [n if n >= 0 else -n for n in nums]\nprint(abs_nums)  # [1, 2, 3, 4, 5]",
    related: ["if", "else", "expression", "list-comp"]
  },

  "decorator": {
    term: "デコレータ",
    short: "関数に機能を追加する飾り",
    detail: "🎀 <strong>デコレータ</strong>は、既存の関数に追加の機能をつける仕組みです。<br><br>プレゼント🎁にリボンをつけるようなもの。中身（関数）は変えずに、飾り（機能）を追加。<br>関数の前に <code>@デコレータ名</code> と書きます。<br><br>ログ出力、実行時間計測、アクセス制御などに使われます。少し上級者向け！",
    example: "# デコレータの使い方\ndef my_decorator(func):\n    def wrapper():\n        print(\"--- 開始 ---\")\n        func()\n        print(\"--- 終了 ---\")\n    return wrapper\n\n@my_decorator\ndef hello():\n    print(\"Hello!\")\n\nhello()\n# --- 開始 ---\n# Hello!\n# --- 終了 ---",
    related: ["function", "def", "class"]
  },

  "map-filter": {
    term: "map / filter",
    short: "全要素を変換/抽出",
    detail: "🔄 <strong>map</strong>はリストの全要素を変換、<strong>filter</strong>は条件に合う要素だけ抽出する関数です。<br><br>map：全員にサングラス🕶️をかける（全要素を変換）<br>filter：背が160cm以上の人だけ選ぶ（条件で抽出）<br><br>リスト内包表記でも同じことができますが、知っておくと便利！",
    example: "nums = [1, 2, 3, 4, 5]\n\n# map: 全要素を2倍\ndoubled = list(map(lambda x: x * 2, nums))\nprint(doubled)  # [2, 4, 6, 8, 10]\n\n# filter: 偶数だけ抽出\nevens = list(filter(lambda x: x % 2 == 0, nums))\nprint(evens)    # [2, 4]",
    related: ["lambda", "list-comp", "list", "function"]
  },

  "truthy-falsy": {
    term: "Truthy / Falsy",
    short: "True/False扱いされる値",
    detail: "✅❌ <strong>Truthy</strong>はif文でTrueとして扱われる値、<strong>Falsy</strong>はFalseとして扱われる値です。<br><br>Falsy（偽として扱われるもの）：<code>False</code>, <code>0</code>, <code>\"\"</code>（空文字）, <code>[]</code>（空リスト）, <code>None</code><br>それ以外はすべてTruthy！<br><br>空チェックをシンプルに書けるので覚えておくと便利。",
    example: "# Falsyな値たち\nif not 0:\n    print(\"0はFalsy\")\nif not \"\":\n    print(\"空文字はFalsy\")\nif not []:\n    print(\"空リストはFalsy\")\n\n# 空チェックに使う\nitems = []\nif items:   # Falsy → 実行されない\n    print(\"リストにデータあり\")\nelse:\n    print(\"リストは空っぽ\")",
    related: ["bool", "condition", "if", "none"]
  },

  "error-types": {
    term: "よくあるエラーの種類",
    short: "初心者がよく見るエラー",
    detail: "🚨 初心者がよく遭遇するエラーの種類をまとめました：<br><br><strong>SyntaxError</strong>：書き方が間違っている（コロン忘れ等）<br><strong>NameError</strong>：存在しない変数名を使った<br><strong>TypeError</strong>：型の使い方が間違っている<br><strong>IndexError</strong>：リストの範囲外にアクセス<br><strong>KeyError</strong>：辞書にないキーを参照<br><strong>ValueError</strong>：値が不正（int(\"abc\")等）",
    example: "# NameError: 定義していない変数\n# print(hello)\n\n# TypeError: 文字列と数値を足す\n# \"age: \" + 20  → str(20) が必要\n\n# IndexError: 範囲外\n# a = [1, 2, 3]\n# a[10]  → エラー！",
    related: ["error", "exception", "debug", "traceback"]
  }

};


// ============================================================
// ユーティリティ: 用語を検索・取得する関数
// ============================================================

/**
 * IDで用語を取得
 * @param {string} id - 用語のID（例: "variable"）
 * @returns {object|null} 用語オブジェクト または null
 */
function getGlossaryTerm(id) {
  return GLOSSARY[id] || null;
}

/**
 * 用語をキーワードで検索
 * @param {string} keyword - 検索キーワード
 * @returns {Array} マッチした用語のIDと情報の配列
 */
function searchGlossary(keyword) {
  const lowerKeyword = keyword.toLowerCase();
  const results = [];

  for (const [id, entry] of Object.entries(GLOSSARY)) {
    if (
      id.includes(lowerKeyword) ||
      entry.term.toLowerCase().includes(lowerKeyword) ||
      entry.short.includes(keyword) ||
      entry.detail.toLowerCase().includes(lowerKeyword)
    ) {
      results.push({ id, ...entry });
    }
  }

  return results;
}

/**
 * 関連用語を取得
 * @param {string} id - 用語のID
 * @returns {Array} 関連用語のオブジェクト配列
 */
function getRelatedTerms(id) {
  const term = GLOSSARY[id];
  if (!term || !term.related) return [];

  return term.related
    .filter(relId => GLOSSARY[relId])
    .map(relId => ({ id: relId, ...GLOSSARY[relId] }));
}

/**
 * 全用語のID一覧を取得
 * @returns {Array} 用語IDの配列
 */
function getAllTermIds() {
  return Object.keys(GLOSSARY);
}

/**
 * カテゴリごとにグループ化した用語を取得
 * @returns {object} カテゴリ名をキー、用語配列を値とするオブジェクト
 */
function getTermsByCategory() {
  const categories = {
    "基本概念": ["print", "variable", "assignment", "data-type", "int", "float", "str", "bool", "type-conversion", "f-string", "operator", "expression", "statement", "comment", "docstring", "none", "input-func", "len-func"],
    "制御構造": ["if", "elif", "else", "for", "while", "break", "continue", "range", "indent", "block", "condition", "comparison", "logical", "loop", "iteration", "ternary", "in-operator", "truthy-falsy"],
    "関数": ["function", "def", "argument", "parameter", "return", "default-arg", "keyword-arg", "lambda", "scope", "local", "global", "decorator", "pass-keyword"],
    "データ構造": ["list", "dict", "tuple", "set", "index", "slice", "method", "append", "key", "value", "list-comp", "iterable", "string-method", "comprehension-dict", "unpacking", "enumerate-func", "zip-func", "map-filter"],
    "OOP": ["class", "object", "instance", "init", "self", "inheritance", "method-oop", "attribute"],
    "エラー処理": ["try", "except", "exception", "error", "bug", "debug", "traceback", "error-types"],
    "その他": ["pep8", "dry", "syntax", "runtime", "library", "module", "import", "pip", "ide", "terminal", "algorithm", "api", "with-statement", "type-hint"]
  };

  const result = {};
  for (const [category, ids] of Object.entries(categories)) {
    result[category] = ids
      .filter(id => GLOSSARY[id])
      .map(id => ({ id, ...GLOSSARY[id] }));
  }

  return result;
}
