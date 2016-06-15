# Fire Gem（仮）

Fireworks PNGの構造をJSONファイルとして書き出し、Sketch 3へインポートする機能拡張およびプラグインです。

## インストール

### Fireworks

Fw to JSON フォルダをFireworksのCommandフォルダへコピーします。

OSXであれば、ターミナル.appにて次のコマンドを実行すればフォルダを開けます。

```
$ open "~/Library/Application Support/Adobe/Fireworks CS6/Commands"
```

### Sketch 3

JSON to Layers.sketchpluginをダブルクリックしインストールしてください。

## 使い方

1. 変換したいFireworksPNGを開き、コマンドを実行します。
1. ダイアログが表示されたら、JSONファイルとリソースファイルを書き出すフォルダを選択します。
1. すでにJSONファイルやリソースファイルがある場合、上書きするかどうかのアラートが出ますので、処理を選択してください。
1. 書き出しが終わるとアラートで書き出したページやレイヤー数などが表示されます。
1. Sketch 3で新規ドキュメントを作成します。
1. プラグインを実行すると、JSONファイルを選択するようにダイアログが表示されるので、先ほど書き出したJSONファイルを選択します。
1. 変換が始まります。JSONファイルが大きいと、時間がかかり固まったように見えるため、少し待ってみてください。コンソール.appを起動しておくと進捗を見ることができます。

## FireworksからJSONの変換

ビットマップやテクスチャー・パターンは別ファイルとして書き出しを行います。非表示にしていても書き出すようにしているため、オブジェクトが多い場合はファイルを整理してから実行してください。

書き出しとしていますが、正確には「オブジェクトをコピー→新規ドキュメント作成→ペースト→保存」を繰り返します。結構な負荷がかかると思われますので、必ず保存をしてから実行するようにしてください。

シンボルは内容を解析するため、シンボルを解除します。コマンド実行後は **必ず保存せず** 閉じてください。

## JSONからSketchへの読み込み・変換

### ページ

アートボードとして変換し、カンバスへ水平に並べます。共有やマスターページ機能は無視します（内容自体は変換します）。

### ステート

ページ同様アートボードとして変換し、カンバスへ垂直に並べます。

### 長方形

長方形ツールで作成したオブジェクトを変形していない場合、Sketch 3でもRectangleレイヤーとして作成します。変形している場合は、ベジェのオブジェクトとして作成します。

### 長方形以外のシェイプ

ベジェオブジェクトとして作成します。

### ビットマップ

現状そのままをPNGファイルとして書き出します。

### レイヤーおよびサブレイヤー

レイヤーおよびサブレイヤーは、Sketch 3のグループとして作成します。レイヤーが元になったグループでは、"Click-through when selecting"を有効化します。

### 「エッジをぼかす」（塗り・線）

Fireworksの「エッジをぼかす」は変換されません。

### グラデーション

直線はLinear Gradientとして、円形・楕円はRadial Gradientとして、円錐はAngular Gradientに変換します。ただし、Sketch 3上でAngular Gradientの中心を変更できないため、円錐に関しては完全に変換できていません。また、それ以外は直線に変換します。

### パターン

パターンを適用した状態の形状をビットマップとして書き出し、Sketch 3のPattern Fillとして適用します。元のパターンファイルは書き出ししないため、必要に応じて個別に書き出してください。

### Stroke

変換される項目は次の通りです。

- 線幅
- ストロークの整列位置
- 角丸
- 破線
- チップの形状（角 or 丸）

つまり線は「基本→エッジが堅い線（角）」または「基本→エッジが堅い線（丸）」以外は変換できません。「基本→エッジが堅い線（角）」相当でBorderを適用します。

Fireworksでは破線の設定を線分と間隔の組み合わせを3つまで設定できますが、Sketch 3では2つまでしか設定できないため、3つめの設定は破棄します。

### ブレンドモード

Sketch 3で適用できるブレンドモードのみ変換します。Sketch 3にない場合は、Normalを適用します。

### フィルター

次のフィルターは変換しません。

- カラーを調整
  - カーブ
  - レベル補正
  - 反転
  - 明るさ・コントラスト
  - 自動レベル補正
  - 色相・彩度
- ベベルとエンボス
- ぼかし
  - ぼかし
  - ぼかし（強）
  - ぼかし（放射状）
- その他
- シャープ
- Photoshop ライブエフェクト
  - ベベルとエンボス
  - サテン
  - パターンオーバーレイ

### テキスト

内部的な処理が異なるため、位置や行間などがずれます。

### Symbol

シンボルはSymbolとして変換します。

シンボルインスタンスをFireworks上で変形している場合、異なるSymbolとして作成します。これはSketch 3のSymbolが、インスタンスの変形に対応していないためです。

### オートシェイプ

通常のパスとして生成します。

### テクスチャー

内蔵テクスチャーは、ビットマップとして書き出しを行い、Sketch 3のPattern Fillとして適用します。

ユーザが独自に適用しているテクスチャーは、元にあった場所にファイルが存在すれば、書き出しを行い内蔵テクスチャーと同様に処理を行います。テクスチャーファイルが存在しなかった場合は、レイヤー名に「 [texture not found]」と追加します。