3は、例えばテラー自体のモデルに今回「Verbing」を作った。これが「現象」のモデル。一般的にはよりデータに近いモデル以外は関係を持たないが、ソフトウェアのモデルとは因果関係ネットワークであることから、「Verbing」のような「ロジック＝処理」を名詞にしてしまう。ロジックであるが名詞化されてる。動作であるが動詞や関数ではなくモデル＝名詞化された動詞として扱う。
VerbingはVerbを作るし、SampleCodeモデルを一つもつ。リバースエンジニアリングの置換素材としてはVerbingはNounsとAttrs（元のモデル）を持つ。とモデリングできる。これは一般的なソフトウェアでエンジニアがやるERモデリング（オブジェクトモデリング。）と同様。
テラーではhttp のmethodと同様のcrudメソッド（作成、修正、編集、削除）の徹底利用をできる限り義務付けるが、このVerbingの作成Createが現象が発生する＝処理が行われると同義になる。

この設計すると基本は「モデルの作成処理＝ロジック」であり、モデルだけでビジネスロジックは吸収できる。となる。数式などの導出処理はモデルメソッドの中に住まわせてcreateのなかに呼ぶ。

ある程度呼び出し回数のあるUtilメソッドみたいなものも判定基準はドメインに独自（変化のある）の処理ならばモデルに、そうでないならば「使い捨てのレイヤー」であるutilレイヤーとかに入れてレイヤーモデルで処置。

